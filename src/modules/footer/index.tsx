import React from "react";

import { useFooterInteractor } from "./interactor";
import { FooterRouter } from "./router";

export interface IProps {}
export const Footer: React.FC<IProps> = () => {
  const interactor = useFooterInteractor();
  return <FooterRouter interactor={interactor} />;
};
