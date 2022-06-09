import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import logo from "../Images/carousel.jpg";
import logo2 from "../Images/logo2.jpg";

const DisplayImage = () => {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            width={1200}
            height={700}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sell your home on your terms</h3>
            <p>
              Using our streamlined service, you can achieve the fast sale on
              your home you are looking for. At J Bear Properties, we have the
              industry experience of helping hundreds of sellers achieve a cash
              sale on their property in their desired timeframe.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo2}
            width={1200}
            height={700}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return <ControlledCarousel />;
};

export default DisplayImage;
