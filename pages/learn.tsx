import React from "react";
import { useRouter } from 'next/router';
import { Block, Text } from "vcc-ui";
import LearnInfo from "../src/components/LearnInfo";

import { CarDataType } from "../src/components/Types";

type CarDataPropsType = {
  [x: string]: any;
  car: CarDataType;
};

const Learn: React.FC<CarDataPropsType> = (props) =>{
  const router = useRouter();


  console.log("LEARN:", props);

  return (
    <div className="Learn">
     <LearnInfo {...props} />
    </div>
  );
}

export default Learn;
