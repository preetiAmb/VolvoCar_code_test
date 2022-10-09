import { Block, Flex, Link, Spacer, Text } from 'vcc-ui';
import Data from "../../public/api/cars.json";

import { CarDataType } from "./Types";

type CarDataPropsType = {
  car: CarDataType;
};

const LearnInfo: React.FC<CarDataPropsType> = () =>{
  

    //const getSingleCar = (carId: string) => car.find((c) => c.id === carId)
    
    //const car = getSingleCar(carId as string);
   
   
    return (
        <>
        {Data.map((t) => {
            
            <div>{t.id}</div>
})}

        </>
        
    ) 
}

export default LearnInfo;