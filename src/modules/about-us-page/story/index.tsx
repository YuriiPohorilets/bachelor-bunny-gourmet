import React from "react";

import { useStoryInteractor } from "./interactor";
import { StoryRouter } from "./router";

export interface IProps {}
export const Story: React.FC<IProps> = () => {
  const interactor = useStoryInteractor();
  return <StoryRouter interactor={interactor} />;
};
