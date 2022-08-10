import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./tabs.css";

const Tabs = () => {
  const data = [
    {
      id: 1,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
    {
      id: 2,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
    {
      id: 3,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
    {
      id: 4,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
    {
      id: 5,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
    {
      id: 6,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
    {
      id: 7,
      title: faker.address.cityName(),
      content: faker.commerce.productDescription(),
    },
  ];

  const [toggleState, setToggleState] = useState("");

  const toggleTab = (idx) => {
    setToggleState(idx);
  };

  return (
    <div className="container">
      <div className="block-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          {data.map((tab) => tab.title[0])}
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          {data.map((tab) => tab.title[1])}
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          {data.map((tab) => tab.title[2])}
        </div>
      </div>

      <div className="counter-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>{data.map((tab) => tab.content)}</p>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>{data.map((tab) => tab.content)}</p>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>{data.map((tab) => tab.content)}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
