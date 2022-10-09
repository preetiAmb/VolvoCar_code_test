import React from "react";
import Image from "next/image";
import { Block, Flex, Text, Spacer, Link } from "vcc-ui";
import { CarDataType } from "./Types/index";

type CarDataPropsType = {
  car: CarDataType;
};

const CarInfo: React.FC<CarDataPropsType> = (props) => {
const { car : { id: carId, bodyType, imageUrl, modelName, modelType }, }= props;
  return (
    <>
    <Spacer />
    <Flex
      extend={{
        margin: 'auto',
        paddingTop: "12px",
        //justifyContent: 'center',
      }}
    >
     
      <Text variant="bates" subStyle="emphasis" extend={{ color: "#808c98" }}>
        {bodyType.toUpperCase()}
      </Text>
     
      <Flex
        extend={{
          flexDirection: "row",
        }}
      >
        <Text variant="amundsen">
          {modelName} <Spacer/>
          <Text className="model-name-type" subStyle="emphasis" extend={{ color: "#808c98" }}>
            {modelType}
          </Text>
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
      <Flex extend={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
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