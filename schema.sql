CREATE TABLE IF NOT EXISTS public.departments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    intake INTEGER NOT NULL DEFAULT 120,
    duration VARCHAR(50) DEFAULT '4 Years',
    fee_per_year VARCHAR(50) DEFAULT '₹70,000',
    hod_name VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.admissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    college_code VARCHAR(100) NOT NULL,
    accreditation VARCHAR(255),
    total_seats INTEGER DEFAULT 1200,
    scholarships TEXT,
    eligibility_criteria JSONB,
    cutoff_ranks JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.placements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    academic_year VARCHAR(50) NOT NULL,
    total_offers VARCHAR(50),
    highest_package VARCHAR(50),
    average_package VARCHAR(50),
    placement_rate VARCHAR(50),
    top_recruiters JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.circulars (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'Academic',
    urgency VARCHAR(50) DEFAULT 'Medium',
    publish_date DATE DEFAULT CURRENT_DATE,
    link VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    roll_number VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(20) NOT NULL,
    year VARCHAR(20) NOT NULL,
    cgpa NUMERIC(3,2),
    attendance_percentage NUMERIC(5,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(100),
    user_role VARCHAR(20) DEFAULT 'user',
    user_query TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    model_used VARCHAR(100) DEFAULT 'gemini-2.5-flash',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.circulars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_logs ENABLE ROW LEVEL SECURITY;

-- Allow full read/write policies for public/anon access
DROP POLICY IF EXISTS "Allow public write departments" ON public.departments;
CREATE POLICY "Allow public write departments" ON public.departments FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public write admissions" ON public.admissions;
CREATE POLICY "Allow public write admissions" ON public.admissions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public write placements" ON public.placements;
CREATE POLICY "Allow public write placements" ON public.placements FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public write circulars" ON public.circulars;
CREATE POLICY "Allow public write circulars" ON public.circulars FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public write students" ON public.students;
CREATE POLICY "Allow public write students" ON public.students FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public write chat_logs" ON public.chat_logs;
CREATE POLICY "Allow public write chat_logs" ON public.chat_logs FOR ALL USING (true) WITH CHECK (true);
