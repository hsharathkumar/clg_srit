import { placementsData } from '../models/sritData.js';

export const getPlacementsInfo = (req, res) => {
  res.status(200).json({
    success: true,
    data: placementsData
  });
};
