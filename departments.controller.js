import { departmentsData } from '../models/sritData.js';

export const getAllDepartments = (req, res) => {
  res.status(200).json({
    success: true,
    data: Object.values(departmentsData)
  });
};

export const getDepartmentByCode = (req, res) => {
  const code = req.params.code.toLowerCase();
  const department = departmentsData[code];
  if (!department) {
    return res.status(404).json({
      success: false,
      message: `Department '${req.params.code}' not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: department
  });
};
