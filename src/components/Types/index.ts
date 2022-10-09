import cars from '../../../public/api/cars.json';

export default interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}


export type CarDataType = typeof cars[0];