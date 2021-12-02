export enum FishType {
  Thread,
  Task
}

export type FishData = {
    x: number;
    y: number;
    rotation: number;
    state?: unknown;
    id: string;
}
