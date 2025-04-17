import { memo, useEffect } from "react";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
function SortBox() {  
  return (
    <div className="sortContainer d-none d-xl-block">
      <div className="sortHeader">
        <div>
          <TbCategoryFilled size={"20px"} />
          <span>دسته های محصولی</span>
        </div>
      </div>
      <div className="sortBody">
        <ul className="sort-list">
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-1.png"}
              alt=""
            />
            <Link to={`/category/1/کفش-ورزشی`}>
              <span>کفش ورزشی</span>
            </Link>
          </li>
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-2.png"}
              alt=""
            />
            <Link to={`/category/5/پوشاک-ورزشی`}>
              <span>پوشاک ورزشی</span>
            </Link>
          </li>
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-3.png"}
              alt=""
            />
            <Link to={`/category/8/لوازم-ورزشی`}>
              <span>لوازم ورزشی</span>
            </Link>
          </li>
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-4.png"}
              alt=""
            />
            <span>کیف و کوله</span>
          </li>
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-5.png"}
              alt=""
            />
            <span>توپ ورزشی</span>
          </li>
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-6.png"}
              alt=""
            />
            <span>ساک ورزشی</span>
          </li>
          <li className="sort-item">
            <img
              src={"https://www.orglandsports.com/images/progroup-7.png"}
              alt=""
            />
            <span>لوازم کوه نوردی</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(SortBox);
