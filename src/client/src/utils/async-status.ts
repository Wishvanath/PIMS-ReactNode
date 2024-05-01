export const AsyncStatus = Object.freeze({
  INITIAL: 'initial',
  CANCELLED: 'cancelled',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
});

export const isInitial = (asyncStatus: string) =>
  !asyncStatus || asyncStatus === AsyncStatus.INITIAL;

export const isPending = (asyncStatus: string) =>
  asyncStatus === AsyncStatus.LOADING;

export const hasSucceded = (asyncStatus: string) =>
  asyncStatus === AsyncStatus.SUCCESS;

export const hasFailed = (asyncStatus: string) =>
  asyncStatus === AsyncStatus.FAILURE;

export const isComplete = (asyncStatus: string) =>
  asyncStatus === AsyncStatus.SUCCESS ||
  asyncStatus === AsyncStatus.FAILURE ||
  asyncStatus === AsyncStatus.CANCELLED;
