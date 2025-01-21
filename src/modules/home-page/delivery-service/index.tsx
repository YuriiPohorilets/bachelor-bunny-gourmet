import React from "react";

import { useDeliveryServiceInteractor } from "./interactor";
import { DeliveryServiceRouter } from "./router";

export interface IProps {}
export const DeliveryService: React.FC<IProps> = () => {
  const interactor = useDeliveryServiceInteractor();
  return <DeliveryServiceRouter interactor={interactor} />;
};
