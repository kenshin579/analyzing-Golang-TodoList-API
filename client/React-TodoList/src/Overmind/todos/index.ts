import { IConfig } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

export const todos = {
  state,
  actions,
  effects,
};

declare module "overmind" {
  interface Config extends IConfig<typeof todos> {}
}
