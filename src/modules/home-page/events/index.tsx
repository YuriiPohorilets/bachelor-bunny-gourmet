import React from "react";

import { useEventsInteractor } from "./interactor";
import { EventsRouter } from "./router";

export interface IProps {}
export const Events: React.FC<IProps> = () => {
  const interactor = useEventsInteractor();
  return <EventsRouter interactor={interactor} />;
};
