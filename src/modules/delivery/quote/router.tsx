import React from "react";

import { IQuoteInteractor } from "./interactor";

export interface IProps {
  interactor: IQuoteInteractor
}
export const QuoteRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <div>QuoteRouter content</div>
  )
};
