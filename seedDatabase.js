import { supabase, isSupabaseConfigured } from '../config/supabase.js';
import {
  departmentsData,
  admissionsData,
  placementsData,
  circularsData
} from '../models/sritData.js';

async function seedDatabase() {
  if (!isSupabaseConfigured || !supabase) {
    console.error('❌ Supabase credentials missing in .env! Please set SUPABASE_URL and SUPABASE_ANON_KEY first.');
    process.exit(1);
  }

  console.log('🌱 Starting Supabase PostgreSQL Database Seed Process...');

  try {
    // Seed Departments
    const deptRows = Object.entries(departmentsData).map(([code, dept]) => ({
      code: code.toUpperCase(),
      name: dept.name,
      intake: dept.intake || 120,
      fee_per_year: dept.fee || '₹70,000',
      hod_name: dept.hod || 'Dr. Department Head',
      description: dept.about || dept.name
    }));

    const { error: deptError } = await supabase.from('departments').upsert(deptRows, { onConflict: 'code' });
    if (deptError) console.error('Error seeding departments:', deptError.message);
    else console.log('✅ Departments seeded successfully.');

    // Seed Circulars
    const circularRows = circularsData.map(c => ({
      title: c.title,
      category: c.category,
      urgency: c.urgency,
      publish_date: c.date
    }));

    const { error: circError } = await supabase.from('circulars').insert(circularRows);
    if (circError) console.error('Error seeding circulars:', circError.message);
    else console.log('✅ Circulars seeded successfully.');

    // Seed Admissions
    const { error: admError } = await supabase.from('admissions').insert([{
      title: admissionsData.overview.title,
      college_code: admissionsData.overview.collegeCode,
      accreditation: admissionsData.overview.accreditation,
      total_seats: admissionsData.overview.totalSeats,
      scholarships: admissionsData.overview.scholarshipsAvailable,
      eligibility_criteria: admissionsData.eligibility,
      cutoff_ranks: { CSE: 12500, AIDS: 15800, ECE: 18200, EEE: 28500, ME: 35000, CE: 42000 }
    }]);
    if (admError) console.error('Error seeding admissions:', admError.message);
    else console.log('✅ Admissions seeded successfully.');

    // Seed Placements
    const { error: plcError } = await supabase.from('placements').insert([{
      academic_year: placementsData.summary.academicYear,
      total_offers: placementsData.summary.totalOffers,
      highest_package: placementsData.summary.highestPackage,
      average_package: placementsData.summary.averagePackage,
      placement_rate: placementsData.summary.placementPercentage,
      top_recruiters: placementsData.topRecruiters
    }]);
    if (plcError) console.error('Error seeding placements:', plcError.message);
    else console.log('✅ Placements seeded successfully.');

    console.log('🎉 Database seeding complete!');
  } catch (err) {
    console.error('❌ Seeding process error:', err);
  }
}

seedDatabase();
