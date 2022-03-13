export enum Statuses {
  AVAILABLE = 'AVAILABLE',
  COMPLETED = 'COMPLETED',
  INVALID = 'INVALID',
  UNAVAILABLE = 'UNAVAILABLE',
}

export type StatusType = Statuses.AVAILABLE | Statuses.COMPLETED | Statuses.INVALID | Statuses.UNAVAILABLE;
