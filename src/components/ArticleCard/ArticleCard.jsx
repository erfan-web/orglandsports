import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaArrowLeft } from "react-icons/fa6";
import { generateArticleDetailRoute } from "../../utils/routeHelpers";
function ArticleCard({ title, desc, image, id }) {
  const articleRoute = generateArticleDetailRoute(id, title);
  return (
    <Card className="ArticleCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <Link to={articleRoute}>{title}</Link>
        </Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Link className="reading-more" to={articleRoute}>
          ادامه مطلب
          <FaArrowLeft />
        </Link>
      </Card.Body>
    </Card>
  );
}
export default ArticleCard;
