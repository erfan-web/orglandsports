import { memo } from "react";

const ShareBar = () => {
  return (
    <div className="share-bar">
      <a href="https://instagram.com/org_land" className="instagram">
        <img src="https://www.orglandsportt.com/images/instatop.jpg" alt="" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=+989331171313">
        <img src="https://www.orglandsportt.com/images/wwp.PNG" alt="" />
      </a>
    </div>
  );
};
export default memo(ShareBar);
