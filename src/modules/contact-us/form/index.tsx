import React from "react";

import { useFormInteractor } from "./interactor";
import { FormRouter } from "./router";

export interface IProps {}
export const Form: React.FC<IProps> = () => {
  const interactor = useFormInteractor();
  return <FormRouter interactor={interactor} />;
};
