export interface initialStateType { };

export interface initialStateWithPayload {
  payload: {
    [key: string]: any,
  } | any,
};

export interface actionDefaultType {
  type: string,
  data?: {
    [key: string]: any,
  } | Array<any>,
};

export interface actionDefaultWithPayloadType {
  type: string,
  data?: {
    [key: string]: any,
  } | Array<any>,
  payload: {
    [key: string]: any,
  } | any,
};
