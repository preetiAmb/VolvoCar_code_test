import React from 'react';
import { useRouter } from 'next/router';
import  CarInfoType  from '../Types/index';
import Data from '../../public/api/cars.json';
import { useMemo } from 'react';
import Image from 'next/image';
import { Block, Flex, Link, Spacer, Text } from 'vcc-ui';


const LearnInfo: React.FC = () => {
  const router = useRouter();
  const { carId } = router.query;

  const getSingleCar = (carId: string) =>
  Data.find((car) => car.id === carId);

  const car = getSingleCar(carId as string);

  const { bodyType, imageUrl, modelName, modelType } = car || {};

  return car ? (
    <Block>
      <Flex
        extend={{
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          fromM: {
            height: '100vh',
            width: '800',
          },
        }}
      >
        <Text variant='cook' subStyle='emphasis'>
          {modelName}
        </Text>

        <Spacer />
        <Block
          extend={{
            untilM: {
              minWidth: '260px',
            },
          }}
        >
          <Image
            src={imageUrl || ''}
            alt={modelName}
            width='400px'
            height='300px'
          />
        </Block>
        <Text variant='columbus'>{modelType?.toUpperCase()}</Text>
        <Text variant='hillary' subStyle='emphasis'>
          {bodyType?.toUpperCase()}
        </Text>
        <Flex
          extend={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Spacer size={2} />
          <Flex
            extend={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Link href={`/shop/${carId}`} arrow='right'>
              Buy
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Block>
  ) : null;
};

export default LearnInfo;
