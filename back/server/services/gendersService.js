import Genders from "../models/Genders/Genders.js";

async function getAllGenders() {
  const genders = await Genders.findAll();
  return genders;
}

export const gendersService = {
  getAllGenders,
};
