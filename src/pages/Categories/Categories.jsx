import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchCategories,
  setCurrentCategory,
  setParentCategories,
} from "../../features/slices/categories";
import ParentCat from "./ParentCat/ParentCat";
import ChildCat from "./ChildCat/ChildCat";
function Categories() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const { status, currentCategories, parentCategories, categoriesLoaded } =
    useSelector((store) => store.categoriesReducer);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        if (!categoriesLoaded) {
          await dispatch(fetchCategories()).unwrap();
        }
        dispatch(setParentCategories(categoryId));
        dispatch(setCurrentCategory(categoryId));
      } catch (error) {
        console.error("خطا در دریافت دسته‌بندی‌ها:", error);
      }
    };

    loadCategories();
  }, [categoryId, dispatch, categoriesLoaded]);
  status == "loading" && <p>درحال بارگذار...</p>;
  if (!currentCategories) return <p>دسته‌بندی یافت نشد!</p>;
  return (
    <>
      {parentCategories.some((cat) => cat.id == categoryId) ? (
        <ParentCat />
      ) : (
        <ChildCat currentCategories={currentCategories} />
      )}
    </>
  );
}
export default Categories;
