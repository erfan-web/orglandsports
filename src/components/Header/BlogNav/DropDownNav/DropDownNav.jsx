import { memo, useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function DropDownNav({ isExpand }) {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);
  const toggle = () => setShow((s) => !s);
  return (
    <Dropdown
      className="dropDownNav"
      {...(isExpand
        ? {
            onMouseEnter: open,
            onMouseLeave: close,
            show,
          }
        : {
            onClick: toggle,
            show: true,
          })}
    >
      <Dropdown.Toggle id="dropdown-basic">
        <span className="">محصولات</span>
        {isExpand ? (
          <FaAngleDown size={`10px`} />
        ) : (
          <FaAngleLeft
            size={`14px`}
            style={
              show && {
                rotate: "-90deg",
              }
            }
          />
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu
        {...(isExpand && {
          onMouseEnter: () => setShow(true),
          onMouseLeave: () => setShow(false),
        })}
        className={`${show ? `expand` : ``}`}
      >
        <div className="my-2 m-lg-0">
          <Link className="dropdown-item" to={`/category/1/کفش-ورزشی`}>
            کفش ورزشی
          </Link>
          <Dropdown.Divider />
          <Link className="dropdown-item" to={`/category/5/پوشاک-ورزشی`}>
            پوشاک ورزشی
          </Link>
          <Dropdown.Divider />
          <Link className="dropdown-item" to={`/category/8/لوازم-ورزشی`}>
            تجهیزات ورزشی
          </Link>
          <Dropdown.Divider />
          <Link className="dropdown-item" to={`/category/9/کیف-و-کوله`}>
            کیف و کوله
          </Link>
          <Dropdown.Divider />
          <Link className="dropdown-item" to={`/category/10/توپ`}>
            توپ
          </Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default memo(DropDownNav);
