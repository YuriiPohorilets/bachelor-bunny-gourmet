import React from "react";

import { useOurClientsInteractor } from "./interactor";
import { OurClientsRouter } from "./router";

export interface IProps {}
export const OurClients: React.FC<IProps> = () => {
  const interactor = useOurClientsInteractor();
  return <OurClientsRouter interactor={interactor} />;
};
