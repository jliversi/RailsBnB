import * as APISpotUtil from "../util/spots_api_util";
import { receiveParams } from "./search_actions";

export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";

export const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot
});

export const receiveSpots = (spots) => ({
  type: RECEIVE_SPOTS,
  spots
});

export const fetchSpot = (spotId) => dispatch => {
  return APISpotUtil.fetchSpot(spotId)
    .then(r => dispatch(receiveSpot(r)));
};

export const fetchSpots = (params) => dispatch => {
  return APISpotUtil.fetchSpots(params)
    .then(r => dispatch(receiveSpots(r)))
    .then(() => dispatch(receiveParams(params)));
};