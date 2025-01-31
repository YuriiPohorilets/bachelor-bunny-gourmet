import React from "react";

import { useServicesInteractor } from "./interactor";
import { ServicesRouter } from "./router";

export interface IProps {}
export const Services: React.FC<IProps> = () => {
  const interactor = useServicesInteractor();
  return <ServicesRouter interactor={interactor} />;
};
