import React, { memo, useState, useEffect } from "react";
import { Row, Col } from "antd";
import Api from "../../api";
import Economy from "../Economy";
import Technology from "../Technology";
import World from "../World";

import "./styles.css";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.allSettled([
      Api.getNews("world"),
      Api.getNews("economy"),
      Api.getNews("technology"),
    ]).then(handleNews);
  }, []);

  const handleNews = (articles) => {
    setLoading(false);
    setNews({
      world: articles[0]?.value.value,
      economy: articles[1]?.value.value,
      technology: articles[2]?.value.value,
    });
  };

  if (loading) return <div>Carregando</div>;

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>World</h2>
          <World values={news?.world} />
        </Col>

        <Col span={24} md={8}>
          <h2>Economy</h2>
          <Economy values={news?.economy} />
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>Technology</h2>
          <Technology values={news?.technology} />
        </Col>
      </Row>
    </div>
  );
}

export default memo(Home);
