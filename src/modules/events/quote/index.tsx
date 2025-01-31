import React from "react";

import { useQuoteInteractor } from "./interactor";
import { QuoteRouter } from "./router";

export interface IProps {}
export const Quote: React.FC<IProps> = () => {
  const interactor = useQuoteInteractor();
  return <QuoteRouter interactor={interactor} />;
};
