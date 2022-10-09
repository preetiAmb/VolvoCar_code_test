import React, { useEffect } from "react";
import Head from "next/head";
import { Flex, Icon, Spacer, IconButton } from "vcc-ui";
import CarInfo from "../src/components/CarInfo";
import Data from "../public/api/cars.json";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Car from "../src/components/Types";
import Header from "../src/components/Header";

const Home: React.FC<{ cars: Car }> = (props) => {
  const [carData, setCarData] = useState(Data);
  const [filterCarData, setFilterCarData] = useState(Data);

  useEffect(() => {
    carData;
  });

  const customSlider = useRef<Slider>(null);
  const settings = {
    speed: 300,
    slidesToShow: filterCarData.length < 4 ? filterCarData.length : 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filterCarData.length < 4 ? filterCarData.length : 4,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
    ],
  };

  const filterByBodyType = () => {
    const carTypes = [...new Set(carData.map((car: Car) => car.bodyType))];
    return (
      <select
        className="carfilter"
        aria-label="car filter"
        onChange={carTypeSelected}
      >
        <option value="All Cars">Choose any</option>
        {carTypes.map((type) => {
          return (
            <option value={type} key={type}>
              {type.toLowerCase()}
            </option>
          );
        })}
      </select>
    );
  };

  const carTypeSelected = (e: any) => {
    const cars = [...carData];
    const filterBodyType: any = cars
      .map((i: Car) => (e.target.value === i.bodyType ? i : null))
      .filter((i: any) => i !== null);

    if (filterCarData.length) {
      setFilterCarData(filterBodyType);
    } else {
      setFilterCarData(cars);
    }
  };

  return (
    <>
      <Head>
        <title>Sweden | Volvo Cars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Header />
        <Flex>{filterByBodyType()}</Flex>
        <Slider ref={customSlider} {...settings}>
          {filterCarData.map((i: Car) => (
            <CarInfo car={i} key={i.id} />
          ))}
        </Slider>
        <Flex
          className="button-nav"
          extend={{
            flexDirection: "row",
            justifyContent: "end",
            marginTop: "8px",
            untilM: {
              display: "none",
            },
          }}
        >
          <IconButton
            iconName="navigation-chevronback"
            variant="outline"
            onClick={() => customSlider?.current?.slickPrev()}
          />
          <Spacer />
          <IconButton
            iconName="navigation-chevronforward"
            variant="outline"
            onClick={() => customSlider?.current?.slickNext()}
          />
          <Spacer size={2} />
        </Flex>
        <Spacer />
      </main>
    </>
  );
};

export default Home;
