export enum FishType {
  Task,
  Thread
}

export type FishData = {
    x: number;
    y: number;
    rotation: number;
    state?: unknown;
    id: string;
    threadId: number;
    updateDelay: number;
    type: FishType;
}
