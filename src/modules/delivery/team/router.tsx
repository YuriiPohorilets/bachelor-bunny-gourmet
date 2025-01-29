import React from "react";

import { ITeamInteractor } from "./interactor";

export interface IProps {
  interactor: ITeamInteractor
}
export const TeamRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <div>TeamRouter content</div>
  )
};
