import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../features/slices/productById";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import TabSection from "../../components/TabSection/TabSection";
import SimilarProducts from "../../components/TabSection/SimilarProducts/SimilarProducts";
import MessageBox from "../../components/MessageBox/MessageBox";
import MessageProvider from "./MessageContext";
function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(getProductById({ productId }));
  }, [dispatch, productId]);

  const [messageStatus, setMessageStatus] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  if (status == "success" && product)
    return (
      <>
        <MessageProvider
          value={{
            setMessageStatus,
            messageStatus,
            selectedSize,
            setSelectedSize,
          }}
        >
          <MessageBox />
          <DetailProduct />
        </MessageProvider>
        <TabSection />
        <SimilarProducts />
      </>
    );
}
export default ProductDetail;
