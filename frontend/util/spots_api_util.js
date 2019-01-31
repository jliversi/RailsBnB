export const fetchSpots = (params) => {
  return $.ajax({
    method: "GET",
    url: "/api/spots",
    data: {params}
  });
};

export const fetchSpot = (spotId) => {
  return $.ajax({
    method: "GET",
    url: `/api/spots/${spotId}`
  });
};
