import { studentPortalMock } from '../models/sritData.js';

export const getStudentDashboard = (req, res) => {
  const { rollNo } = req.query;
  if (rollNo && rollNo.toUpperCase() !== studentPortalMock.studentInfo.rollNo) {
    return res.status(200).json({
      success: true,
      data: {
        ...studentPortalMock,
        studentInfo: {
          ...studentPortalMock.studentInfo,
          rollNo: rollNo.toUpperCase(),
          name: 'SRIT Student (' + rollNo.toUpperCase() + ')'
        }
      }
    });
  }

  res.status(200).json({
    success: true,
    data: studentPortalMock
  });
};
