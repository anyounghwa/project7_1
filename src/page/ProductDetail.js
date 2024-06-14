import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const newImg = <img src="../images/icon_02.gif" alt="신상품" />;
  const delivery = <img src="../images/icon_09.gif" alt="배송" />;
  const sale = <img src="../images/icon_11.gif" alt="sale" />;
  //id를 읽어와야 한다. useParams
  let { id } = useParams();

  //data를 저장하자
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/anyounghwa/project7_1/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <img src={product?.img} alt="이미지" className="img-fluid" />
        </Col>
        <Col xs={12} md={6}>
          <p>
            <span>{product?.new && newImg}</span>
            <span>{product?.sale && sale}</span>
            <span>{product?.delivery && delivery}</span>
          </p>
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              사이즈
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr></hr>
          <p className="text-end">
            <Button variant="outline-danger">구매하기</Button>
          </p>
        </Col>
      </Row>
      <Row>
        <hr className="mt-5"></hr>
        <h2>의류 관리 가이드</h2>
        <p>
          여러분도 환경 보호를 돕고 더욱 지속 가능한 패션을 만들 수 있습니다.
          불필요한 옷이나 가정용 직물을 H&M 매장에 가지고 오면 다시 입을 수 있는
          옷을 만드는 데 사용되거나 재사용 또는 재활용됩니다.
        </p>
        <p>의류 관리법</p>
        <ul className="ps-5 mb-5">
          <li>걸어서 건조</li>
          <li>필요 시 비염소계 표백제만 사용 가능</li>
          <li>30°C 물에서 기계세탁</li>
          <li>드라이클리닝 가능</li>
          <li>저온 다림질</li>
        </ul>
      </Row>
    </Container>
  );
};

export default ProductDetail;
