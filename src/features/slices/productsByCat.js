import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsByCategory = createAsyncThunk(
  "ProductsByCat/getProductsByCategoryStatus",
  async ({ categoryId }) => {
    const res = await axios.get(
      `https://orgland-sports.vercel.app/api/products?category_id=${categoryId}`
    );
    const Products = res.data.sort((a, b) => {
      if (a.price === null && b.price !== null) return 1;
      if (b.price === null && a.price !== null) return -1;
      return b.id - a.id;
    });
    return { Products, categoryId };
  }
);

const getFinalPrice = (product) =>
  product.discount?.discountedPrice ?? product.price;

// تابع عمومی برای مرتب‌سازی محصولات
const sorting = (products, compareFn) => {
  let copiedProducts = [...products];
  const availableProducts = copiedProducts.filter((p) => p.price !== null);
  const unavailableProducts = copiedProducts.filter((p) => p.price === null);

  availableProducts.sort(compareFn);

  return [...availableProducts, ...unavailableProducts];
};

// تابع مرتب‌سازی
const sortTheProducts = (Products, sortBy) => {
  // اطمینان از تغییر ندادن آرایه اصلی
  const copiedProducts = [...Products];
  switch (sortBy) {
    case "cheapest":
      return sorting(
        copiedProducts,
        (a, b) => getFinalPrice(a) - getFinalPrice(b)
      );

    case "expensive":
      return sorting(
        copiedProducts,
        (a, b) => getFinalPrice(b) - getFinalPrice(a)
      );
    case "newest":
      return sorting(copiedProducts, (a, b) => b.id - a.id);

    case "oldest":
      return sorting(copiedProducts, (a, b) => a.id - b.id);

    case "existing":
      return copiedProducts.filter((Product) => Product.price); // فقط محصولات موجود
    case "discount":
      return copiedProducts.filter((Product) => Product.discount); // فقط محصولات تخفیف دار

    default:
      return copiedProducts; // بازگشت بدون تغییر
  }
};

const applyFiltersAndSort = (state, categoryId) => {
  // 1. فیلتر بر اساس برند، جنس رویه، کالکشن
  let filteredProducts = state.allProducts[categoryId].filter((Product) => {
    const { brand, upper_material, Collection } = Product.technical_details;

    const matchesBrand = state.filters.singleBrand
      ? brand.toLowerCase() === state.filters.singleBrand.toLowerCase()
      : state.filters.multiBrands.length > 0
      ? state.filters.multiBrands.some(
          (filterValue) => brand.toLowerCase() === filterValue.toLowerCase()
        )
      : true;

    const matchesMaterial =
      state.filters.upperMaterials.length > 0
        ? state.filters.upperMaterials.some(
            (filterValue) =>
              upper_material.toLowerCase() === filterValue.toLowerCase()
          )
        : true;

    const matchesCollection =
      state.filters.collection.length > 0
        ? state.filters.collection.some(
            (filterValue) =>
              Collection.toLowerCase() === filterValue.toLowerCase()
          )
        : true;

    return matchesBrand && matchesMaterial && matchesCollection;
  });

  // 2. اعمال مرتب‌سازی
  filteredProducts = sortTheProducts(filteredProducts, state.sortBy);

  return filteredProducts;
};
const ProductsByCatSlice = createSlice({
  name: "ProductsByCat",
  initialState: {
    allProducts: {},
    filteredProducts: [],
    filters: {
      singleBrand: "",
      multiBrands: [],
      upperMaterials: [],
      collection: [],
    },
    checkedBrands: {},
    checkedMaterials: {},
    checkedCollections: {},
    status: false,
    sortBy: "",
  },
  reducers: {
    setFilter: (state, action) => {
      const { value, isChecked, isSingleBrand, filterType, categoryId } =
        action.payload;
      const filterMap = {
        brand: {
          single: "singleBrand",
          multi: "multiBrands",
          checked: "checkedBrands",
        },
        upperMaterial: {
          multi: "upperMaterials",
          checked: "checkedMaterials",
        },
        collection: {
          multi: "collection",
          checked: "checkedCollections",
        },
      };

      const { single, multi, checked } = filterMap[filterType] || {};

      // مدیریت فیلتر برند (تک و چندگانه)
      if (filterType === "brand") {
        // بررسی اینکه آیا محصولاتی از برند مورد نظر موجود هست یا خیر
        const hasBrandProducts = state.allProducts[categoryId].some(
          (Product) => {
            return (
              Product.technical_details.brand.toLowerCase() ===
              value.toLowerCase()
            );
          }
        );
        // console.log(hasBrandProducts);
        // اگر محصولی از برند انتخابی موجود نیست
        if (!hasBrandProducts) {
          // غیرفعال کردن چک‌باکس برند انتخابی
          state[checked][value] = false;
          alert(`هیچ محصولی از برند ${value} موجود نیست.`);
          return;
        }

        // اگر برند تک انتخاب شود
        if (isSingleBrand) {
          state.filters.singleBrand = value;
          state.filters.multiBrands = [];
          state.checkedBrands = {};
          state.filters.upperMaterials = [];
          state.checkedMaterials = {};
        } else {
          // اگر برند چندگانه انتخاب شود
          if (isChecked) {
            state.filters.multiBrands.push(value);
            state.filters.singleBrand = "";
          } else {
            state.filters.multiBrands = state.filters.multiBrands.filter(
              (item) => item !== value
            );
          }
          state.checkedBrands[value] = isChecked;
        }
      }

      // مدیریت فیلترهای جنس رویه و کالکشن
      if (multi && checked) {
        if (isChecked) {
          state.filters[multi].push(value);
        } else {
          state.filters[multi] = state.filters[multi].filter(
            (item) => item !== value
          );
        }
        state[checked][value] = isChecked;
      }

      // اعمال فیلترها
      state.filteredProducts = applyFiltersAndSort(state, categoryId);
    },

    sortProducts: (state, action) => {
      // مرتب‌سازی محصولات بر اساس معیار انتخابی
      const { sortName, categoryId } = action.payload;
      state.filteredProducts = state.allProducts[categoryId];
      state.sortBy = sortName;
      state.filteredProducts = state.filteredProducts = applyFiltersAndSort(
        state,
        categoryId
      );
    },

    clearFilters: (state, action) => {
      const { categoryId } = action.payload;
      state.filters = {
        singleBrand: "",
        multiBrands: [],
        upperMaterials: [],
        collection: [],
      };
      state.checkedBrands = {};
      state.checkedMaterials = {};
      state.checkedCollections = {};
      state.filteredProducts = state.allProducts[categoryId];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.status = "loading";
    });
    //حالت اولیه وقتی رندر میشه کامپوننت مقدار کفش های فیلتر شده و تمام کفش ها پیلود یا همون تمام محصولاتمون هست
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      const { Products, categoryId } = action.payload;
      state.status = "succeeded";
      state.allProducts[categoryId] = Products;
      state.filteredProducts = Products;
      state.filteredProducts = Products;
    });
    builder.addCase(getProductsByCategory.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export const { setFilter, clearFilters, sortProducts } =
  ProductsByCatSlice.actions;
export default ProductsByCatSlice.reducer;
