import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticlesList = ({children}) => {
  return (
    <>
      <h2 className="text-center  mb-5 fs-5 ">مقالات و دانستنی ها</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-5  pb-3">
        {children.map((article) => (
          <Col key={article.id}>
            <ArticleCard {...article} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default memo(ArticlesList);
