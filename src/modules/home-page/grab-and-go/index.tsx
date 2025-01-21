import React from "react";

import { useGrabAndGoInteractor } from "./interactor";
import { GrabAndGoRouter } from "./router";

export interface IProps {}
export const GrabAndGo: React.FC<IProps> = () => {
  const interactor = useGrabAndGoInteractor();
  return <GrabAndGoRouter interactor={interactor} />;
};
