import React from "react";

import { useMenuInteractor } from "./interactor";
import { MenuRouter } from "./router";

export interface IProps {}
export const Menu: React.FC<IProps> = () => {
  const interactor = useMenuInteractor();
  return <MenuRouter interactor={interactor} />;
};
