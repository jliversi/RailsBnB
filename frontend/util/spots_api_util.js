export const fetchSpots = () => {
  return $.ajax({
    method: "GET",
    url: "/api/spots"
  });
};

export const fetchSpot = (spotId) => {
  return $.ajax({
    method: "GET",
    url: `/api/spots/${spotId}`
  });
};
