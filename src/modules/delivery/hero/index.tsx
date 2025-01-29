import React from "react";

import { useHeroInteractor } from "./interactor";
import { HeroRouter } from "./router";

export interface IProps {}
export const Hero: React.FC<IProps> = () => {
  const interactor = useHeroInteractor();
  return <HeroRouter interactor={interactor} />;
};
