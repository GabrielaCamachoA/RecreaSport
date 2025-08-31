import Neighborhoods from "../models/Neighborhoods/Neighborhoods.js";

async function getAllNeighborhoods() {
  const neighborhoods = await Neighborhoods.findAll();
  return neighborhoods;
}

export const neighborhoodsService = {
  getAllNeighborhoods,
};
