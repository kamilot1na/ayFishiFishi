export enum NetworkMode {
  Lockstep,
  Predictive
}

export type ClientSettings = {
  networkMode: NetworkMode;
  updateFrequency: number;
}
