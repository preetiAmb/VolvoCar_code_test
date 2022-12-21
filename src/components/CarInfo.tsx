import React from "react";
import { Flex, Text, Spacer, Link } from "vcc-ui";
import { CarDataType } from "../Types/index";

type CarDataPropsType = {
  car: CarDataType;
};

const CarInfo: React.FC<CarDataPropsType> = (props) => {
  const {
    car: { id: carId, bodyType, imageUrl, modelName, modelType },
  } = props;
  return (
    <>
      <Flex extend={{ padding: 16 }} className="Home">
        <Flex key={carId}>
          <Flex className="car-detail" aria-hidden="true" tabIndex={-1}>
            <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
              {bodyType.toUpperCase()}
            </Text>
            <Flex className="model-name-type">
              <Text subStyle="emphasis" extend={{ paddingRight: "10px" }}>
                {modelName}
              </Text>
              <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
                {modelType}
              </Text>
            </Flex>
          </Flex>
          <img src={imageUrl} alt="car display" className="car-img" />
          <Flex
          extend={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link href={`./learn/${carId}`} arrow="right">
            Learn
          </Link>
          <Spacer size={2} />
          <Link href={`./shop/${carId}`} arrow="right">
            Shop
          </Link>
        </Flex>
        </Flex>
      </Flex>

      <Spacer />
    </>
  );
};

export default CarInfo;
