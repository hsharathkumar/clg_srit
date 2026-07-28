import { admissionsData } from '../models/sritData.js';

export const getAdmissionsInfo = (req, res) => {
  res.status(200).json({
    success: true,
    data: admissionsData
  });
};

export const submitEnquiry = (req, res) => {
  const { name, email, phone, branch, message } = req.body;
  if (!name || !phone || !branch) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone number, and preferred branch are required.'
    });
  }

  const enquiryRef = 'SRIT-ENQ-' + Math.floor(100000 + Math.random() * 900000);
  res.status(201).json({
    success: true,
    message: 'Admissions enquiry submitted successfully! Our counsellor will contact you shortly.',
    enquiryRef,
    submittedData: { name, email, phone, branch, message, timestamp: new Date() }
  });
};
