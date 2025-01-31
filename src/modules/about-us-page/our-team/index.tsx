import React from "react";

import { useOurTeamInteractor } from "./interactor";
import { OurTeamRouter } from "./router";

export interface IProps {}
export const OurTeam: React.FC<IProps> = () => {
  const interactor = useOurTeamInteractor();
  return <OurTeamRouter interactor={interactor} />;
};
