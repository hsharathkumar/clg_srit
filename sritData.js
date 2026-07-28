// SRIT Anantapur Data Model & Mock Database Repository

export const circularsData = [
  { id: 'c1', date: '2026-07-25', category: 'Academic', title: 'B.Tech IV Year Mid-1 Examination Timetable Released', urgency: 'High' },
  { id: 'c2', date: '2026-07-24', category: 'Placements', title: 'TCS Digital & NQT Campus Recruitment Drive Registration Open', urgency: 'High' },
  { id: 'c3', date: '2026-07-22', category: 'Admissions', title: 'AP EAPCET Phase-2 Counselling Guidance & Verification Desk at SRIT', urgency: 'Medium' },
  { id: 'c4', date: '2026-07-20', category: 'Research', title: 'SRIT Incubation Hub Announces Rs 25 Lakh Seed Funding for Student Startups', urgency: 'Medium' },
  { id: 'c5', date: '2026-07-18', category: 'Sports & Cultural', title: 'Annual Inter-College Cultural Fest "Ramanujan Wave 2026" Dates Announced', urgency: 'Low' }
];

export const admissionsData = {
  overview: {
    title: 'Admissions 2026-27 at SRIT Anantapur',
    collegeCode: 'SRIT (AP EAPCET Code: SRIT)',
    accreditation: 'NAAC A+ Grade (3.35 CGPA), NBA Accredited Programs',
    totalSeats: 1200,
    scholarshipsAvailable: 'Jagananna Vidya Deevena, Merit Scholarships up to ₹50,000'
  },
  courses: [
    { code: 'CSE', name: 'B.Tech in Computer Science & Engineering', intake: 240, duration: '4 Years', feePerYear: '₹70,000' },
    { code: 'AIDS', name: 'B.Tech in Artificial Intelligence & Data Science', intake: 180, duration: '4 Years', feePerYear: '₹70,000' },
    { code: 'ECE', name: 'B.Tech in Electronics & Communication Engineering', intake: 240, duration: '4 Years', feePerYear: '₹70,000' },
    { code: 'EEE', name: 'B.Tech in Electrical & Electronics Engineering', intake: 120, duration: '4 Years', feePerYear: '₹65,000' },
    { code: 'ME', name: 'B.Tech in Mechanical Engineering', intake: 120, duration: '4 Years', feePerYear: '₹65,000' },
    { code: 'CE', name: 'B.Tech in Civil Engineering', intake: 60, duration: '4 Years', feePerYear: '₹65,000' }
  ],
  eligibility: [
    'Passed 10+2 / Intermediate examination with Physics, Chemistry, and Mathematics (PCM).',
    'Qualified in AP EAPCET (Engineering, Agriculture and Pharmacy Common Entrance Test).',
    'Lateral Entry for Diploma Holders into 2nd year via AP ECET.'
  ]
};

export const placementsData = {
  summary: {
    academicYear: '2025-2026',
    totalOffers: '1,050+',
    highestPackage: '₹44.0 LPA',
    averagePackage: '₹6.8 LPA',
    placementPercentage: '92.4%',
    recruitingCompanies: '120+'
  },
  topRecruiters: [
    { name: 'TCS', hires: 145, package: '₹7.2 LPA' },
    { name: 'Wipro', hires: 110, package: '₹6.5 LPA' },
    { name: 'Infosys', hires: 95, package: '₹6.2 LPA' },
    { name: 'Cognizant', hires: 88, package: '₹5.8 LPA' },
    { name: 'Amazon', hires: 12, package: '₹44.0 LPA' },
    { name: 'Accenture', hires: 76, package: '₹6.5 LPA' },
    { name: 'Tech Mahindra', hires: 64, package: '₹5.5 LPA' },
    { name: 'L&T Technology', hires: 42, package: '₹7.0 LPA' }
  ],
  spectrum: [
    { tier: '> 20 LPA', count: 18 },
    { tier: '10 - 20 LPA', count: 64 },
    { tier: '6 - 10 LPA', count: 380 },
    { tier: '4 - 6 LPA', count: 588 }
  ]
};

export const departmentsData = {
  cse: {
    code: 'CSE',
    name: 'Computer Science & Engineering',
    hod: 'Dr. K. Srinivas, Ph.D. (IIT Madras)',
    facultyCount: 42,
    labsCount: 8,
    description: 'Empowering future software architects with expertise in Cloud Computing, Full-Stack Web Development, and Distributed Systems.',
    highlights: ['NVIDIA AI Supercomputing Lab', 'Center of Excellence in AWS & DevOps', '100% Placement Record in 2025']
  },
  aids: {
    code: 'AIDS',
    name: 'Artificial Intelligence & Data Science',
    hod: 'Dr. M. Lakshmi Prasanna, Ph.D.',
    facultyCount: 28,
    labsCount: 6,
    description: 'Pioneering cutting-edge research in Deep Learning, Natural Language Processing, Computer Vision, and Predictive Analytics.',
    highlights: ['Google Cloud AI CoE', 'High Performance GPU Cluster', 'Active Student Research Papers']
  },
  ece: {
    code: 'ECE',
    name: 'Electronics & Communication Engineering',
    hod: 'Dr. P. Ramachandra Reddy, Ph.D.',
    facultyCount: 36,
    labsCount: 7,
    description: 'Specializing in VLSI design, Embedded Systems, IoT, Signal Processing, and Next-Gen Wireless Communications.',
    highlights: ['Cadence VLSI Lab', 'Texas Instruments Innovation Lab', 'Robotics Club Hub']
  },
  eee: {
    code: 'EEE',
    name: 'Electrical & Electronics Engineering',
    hod: 'Dr. S. V. Subba Rao, Ph.D.',
    facultyCount: 24,
    labsCount: 5,
    description: 'Leading innovations in Smart Grids, Electric Vehicle Technology, Renewable Energy, and Power Electronics.',
    highlights: ['Solar Power Research Bench', 'EV Powertrain Simulation Lab', 'Smart Meter Testing Lab']
  },
  me: {
    code: 'ME',
    name: 'Mechanical Engineering',
    hod: 'Dr. B. V. Ramanamurthy, Ph.D.',
    facultyCount: 26,
    labsCount: 8,
    description: 'Focusing on Advanced Manufacturing, CAD/CAM/CAE, Thermal Systems, and Mechatronics Engineering.',
    highlights: ['CNC Manufacturing Facility', '3D Printing & Prototyping Hub', 'SAE Baha Racing Team']
  },
  ce: {
    code: 'CE',
    name: 'Civil Engineering',
    hod: 'Dr. G. Veeresh, Ph.D.',
    facultyCount: 20,
    labsCount: 6,
    description: 'Building sustainable infrastructure through Geotechnical Engineering, Structural Analysis, and BIM modeling.',
    highlights: ['Structural Testing Rig', 'GIS & Remote Sensing Lab', 'Concrete Technology Testing Facility']
  }
};

export const researchData = {
  patentsGranted: 24,
  publicationsCount: 450,
  fundedProjectsValue: '₹3.8 Crores',
  centersOfExcellence: [
    'Ramanujan AI & Autonomous Robotics Center',
    'Green Energy & EV Technology Innovation Hub',
    'Smart Materials & Nanotechnology Research Cell'
  ]
};

export const studentPortalMock = {
  studentInfo: {
    rollNo: '224G1A0588',
    name: 'Sai Varun Teja',
    branch: 'CSE (AI & ML Specialization)',
    semester: '6th Semester (III-B.Tech II-Sem)',
    cgpa: '8.92',
    attendancePercent: '91.5%'
  },
  results: [
    { subjectCode: '20CS601', title: 'Compiler Design', grade: 'A+', credits: 3 },
    { subjectCode: '20CS602', title: 'Machine Learning', grade: 'O', credits: 4 },
    { subjectCode: '20CS603', title: 'Cloud Computing & DevOps', grade: 'A+', credits: 3 },
    { subjectCode: '20CS604', title: 'Web Application Development', grade: 'O', credits: 3 }
  ],
  schedule: [
    { day: 'Monday', time: '09:30 AM - 10:30 AM', subject: 'Machine Learning', room: 'CSE-Lab 3' },
    { day: 'Monday', time: '10:40 AM - 12:30 PM', subject: 'Compiler Design Lab', room: 'CSE-Lab 1' },
    { day: 'Monday', time: '01:30 PM - 03:20 PM', subject: 'Web App Dev Lab', room: 'Software Lab 4' }
  ]
};

export const aiHelperKnowledge = [
  { trigger: ['admissions', 'fee', 'apply', 'eapcet'], response: 'SRIT admissions are open via AP EAPCET counselling (College Code: SRIT). You can apply under Category-A (EAPCET) or Category-B (Management). Annual fee is ₹70,000 for CSE/AIDS/ECE.' },
  { trigger: ['placements', 'highest package', 'salary', 'companies'], response: 'SRIT placement record for 2025-26: Highest Package is ₹44.0 LPA (Amazon) and Average Package is ₹6.8 LPA with 1050+ total offers from 120+ top recruiters like TCS, Wipro, Infosys, and Cognizant.' },
  { trigger: ['departments', 'courses', 'branches'], response: 'SRIT offers B.Tech in CSE, AI & Data Science (AIDS), ECE, EEE, Mechanical, and Civil Engineering with NAAC A+ accreditation and state-of-the-art labs.' },
  { trigger: ['portal', 'results', 'marks', 'attendance'], response: 'Access the Student Portal at /student-portal using your Roll Number to check semester grades, mid marks, attendance percentage, and class timetables.' },
  { trigger: ['location', 'address', 'contact', 'phone'], response: 'SRIT Anantapur is located at Rotary Nagar, Anantapur, AP. Phone: +91 8554 270722, Email: principal@srit.ac.in.' }
];
