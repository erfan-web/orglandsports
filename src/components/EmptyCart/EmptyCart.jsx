import { FaBoxOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <div>
        <FaBoxOpen size={"100px"} color="#630460" />
      </div>
      <p>سبد خرید شما در حال حاضر خالی است.</p>
      <button onClick={() => navigate(`/AllBrand`)}>بازگشت به فروشگاه</button>
    </div>
  );
};
export default EmptyCart;
