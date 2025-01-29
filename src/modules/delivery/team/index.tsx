import React from "react";

import { useTeamInteractor } from "./interactor";
import { TeamRouter } from "./router";

export interface IProps {}
export const Team: React.FC<IProps> = () => {
  const interactor = useTeamInteractor();
  return <TeamRouter interactor={interactor} />;
};
