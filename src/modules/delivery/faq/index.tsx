import React from "react";

import { useFaqInteractor } from "./interactor";
import { FaqRouter } from "./router";

export interface IProps {}
export const Faq: React.FC<IProps> = () => {
  const interactor = useFaqInteractor();
  return <FaqRouter interactor={interactor} />;
};
