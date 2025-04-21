import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../features/slices/productById";
import DetailProduct from "../../components/DetailProduct/DetailProduct";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product, status } = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(getProductById({ productId }));
  }, [dispatch, productId]);

  if (status == "success" && product)
    return (
      <>
        <DetailProduct />
      </>
    );
}
export default ProductDetail;
