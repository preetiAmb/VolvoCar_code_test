import React from "react";
import { useRouter } from "next/router";

import Data from "../../public/api/cars.json";

import Image from "next/image";
import { Block, Button, Flex, Link, Spacer, Text } from "vcc-ui";

const ShopInfo: React.FC = () => {
  const router = useRouter();
  const { carId } = router.query;

  const getSingleCar = (carId: string) => Data.find((car) => car.id === carId);

  const car = getSingleCar(carId as string);

  const { bodyType, imageUrl, modelName, modelType } = car || {};
  const getAmount = () => Math.floor(Math.random() * 100000 + 35000);

  return car ? (
    <Block>
      <Flex
        extend={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          fromM: {
            height: "100vh",
            width: "400",
          },
        }}
      >
        <Text variant="cook" subStyle="emphasis">
          {modelName}
        </Text>
        <Spacer />
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
        <Spacer />

        <Button>Buy for ${getAmount()}</Button>
        <Spacer />
      </Flex>
    </Block>
  ) : null;
};

export default ShopInfo;
