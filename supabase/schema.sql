-- Create the register_interest table in Supabase
-- Run this SQL in your Supabase SQL editor

CREATE TABLE public.register_interest (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_register_interest_email ON public.register_interest(email);

-- Create an index on created_at for sorting
CREATE INDEX idx_register_interest_created_at ON public.register_interest(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE public.register_interest ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (public can register)
CREATE POLICY "Enable insert for all users" ON public.register_interest
    FOR INSERT
    WITH CHECK (true);

-- Create a policy to allow admin users to read all records
-- (You'll need to create admin users or adjust this based on your auth setup)
CREATE POLICY "Enable read for authenticated users" ON public.register_interest
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- Optional: Create a trigger to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_register_interest_updated_at
    BEFORE UPDATE ON public.register_interest
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
