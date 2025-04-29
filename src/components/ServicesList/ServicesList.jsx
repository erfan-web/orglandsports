import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { servicesData } from "../../constants/services";
import ServiceItem from "../ServiceItem/ServiceItem";

const ServicesList = () => {
  return (
    <section className="services-section py-4 my-4">
      <Container fluid>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 gy-3">
          {servicesData.map((service) => (
            <Col key={service.id}>
              <ServiceItem {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default memo(ServicesList);
