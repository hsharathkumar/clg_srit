import { circularsData } from '../models/sritData.js';

export const getCirculars = (req, res) => {
  res.status(200).json({
    success: true,
    data: circularsData
  });
};
