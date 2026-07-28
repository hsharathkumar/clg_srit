import { researchData } from '../models/sritData.js';

export const getResearchInfo = (req, res) => {
  res.status(200).json({
    success: true,
    data: researchData
  });
};
