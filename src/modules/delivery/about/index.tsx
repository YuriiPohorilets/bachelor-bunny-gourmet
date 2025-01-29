import React from "react";

import { useAboutInteractor } from "./interactor";
import { AboutRouter } from "./router";

export interface IProps {}
export const About: React.FC<IProps> = () => {
  const interactor = useAboutInteractor();
  return <AboutRouter interactor={interactor} />;
};
