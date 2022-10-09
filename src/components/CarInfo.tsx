import React from "react";
import Image from "next/image";
import { Block, Flex, Text, Spacer, Link } from "vcc-ui";
import { CarDataType } from "./Types/index";

type CarDataPropsType = {
  car: CarDataType;
};

const CarInfo: React.FC<CarDataPropsType> = (props) => {
  const {
    car: { id: carId, bodyType, imageUrl, modelName, modelType },
  } = props;
  return (
    <>
      <Spacer />
      <Flex
        extend={{
          justifyContent: "center",
          margin: "auto",
          paddingTop: "5rem"
        }}
      >
        <Flex  extend={{
            flexDirection: "row",
            margin: "12px",
          }}>
        <Text variant="bates" subStyle="emphasis" extend={{ color: "#808c98" }}>
          {bodyType.toUpperCase()}
        </Text>
        </Flex>
       
        <Flex
          extend={{
            flexDirection: "row",
            margin: "12px",
          }}
        >
          <Text variant="amundsen">
            {modelName}</Text><Spacer/>
            <Text
              subStyle="emphasis"
              extend={{ color: "#808c98" }}
            >
              {modelType}
            </Text>
        </Flex>
        <Block
          extend={{
            untilM: {
              minWidth: "260px",
            },
          }}
        >
          <Image
            src={imageUrl || ""}
            alt={modelName}
            width="400px"
            height="300px"
          />
        </Block>
        <Flex
          extend={{
            flexDirection: "row",
            justifyContent: "center",
            margin: "12px",
            alignItems: "center",
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
      <Spacer />
    </>
  );
};

export default CarInfo;
