export enum FishType {
    Task,
    Thread,
}

export type FishData = {
    x: number;
    y: number;
    rotation: number;
    state?: unknown;
    id: string;
    name: string;
    type: FishType;
    threadId: number;
}
