import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SritAiWidget from './components/SritAiWidget';

import Home from './pages/Home';
import Admissions from './pages/Admissions';
import StudentPortal from './pages/StudentPortal';
import StudentLogin from './pages/StudentLogin';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Placements from './pages/Placements';
import Research from './pages/Research';
import CampusLife from './pages/CampusLife';
import CentralLibrary from './pages/CentralLibrary';
import ExaminationCell from './pages/ExaminationCell';
import SritHelperAI from './pages/SritHelperAI';
import ComputerScience from './pages/ComputerScience';
import AiDataScience from './pages/AiDataScience';
import ElectronicsComm from './pages/ElectronicsComm';
import ElectricalElectronics from './pages/ElectricalElectronics';
import MechanicalEngg from './pages/MechanicalEngg';
import CivilEngg from './pages/CivilEngg';
import Alumni from './pages/Alumni';

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col min-h-screen bg-[#f5f7fa] text-slate-800 font-sans selection:bg-[#FFBF00] selection:text-[#002b5c]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/login" element={<StudentLogin />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/research" element={<Research />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/library" element={<CentralLibrary />} />
            <Route path="/examination-cell" element={<ExaminationCell />} />
            <Route path="/ai-helper" element={<SritHelperAI />} />

            {/* Department Routes */}
            <Route path="/department/cse" element={<ComputerScience />} />
            <Route path="/department/aids" element={<AiDataScience />} />
            <Route path="/department/ece" element={<ElectronicsComm />} />
            <Route path="/department/eee" element={<ElectricalElectronics />} />
            <Route path="/department/me" element={<MechanicalEngg />} />
            <Route path="/department/ce" element={<CivilEngg />} />

            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>

        <Footer />
        <SritAiWidget />
      </div>
    </Router>
  );
}
