export const config = {
  port: process.env.PORT || 5001,
  env: process.env.NODE_ENV || 'development',
  institution: {
    name: 'Srinivasa Ramanujan Institute of Technology',
    code: 'SRIT',
    location: 'Rotary Nagar, Anantapur, Andhra Pradesh 515701',
    accreditation: 'NAAC A+ Grade | Autonomous Institution | NBA Accredited',
    nirfRank: 'Top 200 Engineering Colleges in India',
    contact: {
      phone: '+91 8554 270722',
      email: 'principal@srit.ac.in',
      admissionsEmail: 'admissions@srit.ac.in'
    }
  }
};
