import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  brands,
  brandsProduct,
  upperMaterials,
  collections,
} from "../../../constants/filterOption";
import { useParams } from "react-router-dom";
import {
  clearFilters,
  getProductsByCategory,
  setFilter,
  sortProducts,
} from "../../../features/slices/productsByCat";
import ProductCard from "../../../components/ProductCard/ProductCard";
function ChildCat({ currentCategories }) {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const {
    filteredProducts,
    status,
    checkedBrands,
    checkedMaterials,
    checkedCollections,
  } = useSelector((store) => store.pByCatReducer);

  useEffect(() => {
    dispatch(getProductsByCategory({ categoryId }));
  }, [categoryId, dispatch]);

  const SingleBrandChange = (value) =>
    dispatch(
      setFilter({
        filterType: "brand",
        value,
        isChecked: false,
        isSingleBrand: true,
        categoryId,
      })
    );
  const MultiBrandChange = (value, isChecked) => {
    dispatch(
      setFilter({
        filterType: "brand",
        value,
        isChecked,
        isSingleBrand: false,
        categoryId,
      })
    );
  };
  const materialFilter = (value, isChecked) => {
    dispatch(
      setFilter({
        filterType: "upperMaterial",
        value,
        isChecked,
        isSingleBrand: false,
        categoryId,
      })
    );
  };
  const collectionFilter = (value, isChecked) => {
    dispatch(
      setFilter({
        filterType: "collection",
        value,
        isChecked,
        isSingleBrand: false,
        categoryId,
      })
    );
  };

  const showAllProducts = () => dispatch(clearFilters({ categoryId }));

  const handleSortChange = (e) => {
    dispatch(sortProducts({ sortName: e.target.value, categoryId }));
  };

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  return (
    <>
      <div className="headerInfo">
        <Container fluid>
          <Row className="">
            <Col className="d-sm-none d-xl-block order-lg-2 " xs={12} xl={3}>
              <div className="imgBox text-center">
                <img src={currentCategories.image} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs={12} xl={9}>
              <h2>{currentCategories.title}</h2>
              <p>{currentCategories.desc}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="productsList">
        <Container fluid>
          <Row>
            <Col className="d-none d-xl-block" xs={12} xl={3}>
              <div className="brands">
                <h5>برند های محصول</h5>
                <ul>
                  {brandsProduct[categoryId]?.map((brand) => (
                    <li
                      key={brand.id}
                      onClick={() => SingleBrandChange(brand.id)}
                    >
                      {brand.name}
                    </li>
                  ))}
                  <li onClick={showAllProducts}>همه برند ها</li>
                </ul>
              </div>
              {categoryId <= 4 && (
                <Accordion alwaysOpen className="filter-box">
                  <Accordion.Item eventKey="0" className="filter-item">
                    <Accordion.Header>برند</Accordion.Header>
                    <Accordion.Body>
                      {brands.map((brand) => (
                        <Form.Check
                          type="checkbox"
                          key={brand.id}
                          label={brand.Name}
                          checked={checkedBrands[brand.Name] || false}
                          onChange={(e) =>
                            MultiBrandChange(brand.Name, e.target.checked)
                          }
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1"  className="filter-item">
                    <Accordion.Header>جنس رویه</Accordion.Header>
                    <Accordion.Body>
                      {upperMaterials.map((Material) => (
                        <Form.Check
                          type="checkbox"
                          key={Material.id}
                          label={Material.Name}
                          checked={checkedMaterials[Material.Name] || false}
                          onChange={(e) =>
                            materialFilter(Material.Name, e.target.checked)
                          }
                        />
                      ))}

                      <Form.Check type="checkbox" label="TPU" />
                    </Accordion.Body>
                  </Accordion.Item >
                  <Accordion.Item eventKey="2"  className="filter-item">
                    <Accordion.Header>کالکشن</Accordion.Header>
                    <Accordion.Body>
                      {collections.map((collection) => (
                        <Form.Check
                          type="checkbox"
                          key={collection.id}
                          label={collection.Name}
                          checked={checkedCollections[collection.Name] || false}
                          onChange={(e) =>
                            collectionFilter(collection.Name, e.target.checked)
                          }
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )}
            </Col>
            <Col xs={12} xl={9} className="p-0 px-md-3">
              <div className="sortDropdown">
                <span>
                  <b>چیدمان بر اساس </b> :{" "}
                </span>
                <Form.Select
                  size="sm"
                  className="custom-select"
                  onChange={handleSortChange}
                >
                  <option value="newest">جدیدترین محصولات</option>
                  <option value="oldest">قدیمی ترین محصولات</option>
                  <option value="expensive">گرانترین محصولات</option>
                  <option value="cheapest">ارزانترین محصولات</option>
                  <option value="existing">محصولات موجود</option>
                  <option value="discount">محصولات تخفیف دار</option>
                </Form.Select>
              </div>
              <Row className="row-cols-2 row-cols-lg-3 row-cols-xl-4 p-0 row-product">
                {filteredProducts.map((Product) => (
                  <Col key={Product.id} className="col-product">
                    <ProductCard {...Product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default ChildCat;
