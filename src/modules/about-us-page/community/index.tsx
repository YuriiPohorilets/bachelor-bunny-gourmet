import React from "react";

import { useCommunityInteractor } from "./interactor";
import { CommunityRouter } from "./router";

export interface IProps {}
export const Community: React.FC<IProps> = () => {
  const interactor = useCommunityInteractor();
  return <CommunityRouter interactor={interactor} />;
};
