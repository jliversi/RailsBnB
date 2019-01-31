
export const RECEIVE_PARAMS = "RECEIVE_PARAMS";
export const CLEAR_PARAMS = "CLEAR_PARAMS";

export const receiveParams = (params) => ({
  type: RECEIVE_PARAMS,
  params
})

export const clearParams = (params) => ({
  type: CLEAR_PARAMS,
  params
})

