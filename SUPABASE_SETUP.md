# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new account if you don't have one
2. Create a new project
3. Wait for the project to be set up

## 2. Set up the Database

1. Go to the SQL Editor in your Supabase dashboard
2. Copy and paste the contents of `supabase/schema.sql` into the SQL editor
3. Run the SQL to create the `register_interest` table

## 3. Get Your Project Credentials

1. Go to Settings > API in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (something like `https://your-project.supabase.co`)
   - **Anon key** (public key for client-side operations)

## 4. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace the placeholder values:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## 5. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Register Interest page
3. Fill out and submit the form
4. Check your Supabase dashboard > Table Editor > register_interest to see the submitted data

## 6. View Submitted Data

You can view all submitted registrations in your Supabase dashboard:
1. Go to Table Editor
2. Select the `register_interest` table
3. You'll see all submitted registrations with timestamps

## Database Schema

The `register_interest` table includes:
- `id`: Unique identifier (UUID)
- `full_name`: User's full name
- `email`: User's email address
- `phone`: User's phone number
- `created_at`: When the registration was submitted
- `updated_at`: When the record was last updated

## Security

- Row Level Security (RLS) is enabled
- Public users can only insert new registrations
- Only authenticated users can read the data (you can modify this policy as needed)
