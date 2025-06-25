// Test script to verify Supabase connection and table
// You can run this in your browser console after the table is created

import { supabase } from './src/lib/supabase.js';

// Test function to check if table exists and is accessible
async function testTable() {
  try {
    console.log('Testing Supabase connection...');
    
    // Try to select from the table (should return empty array if table exists)
    const { data, error } = await supabase
      .from('register_interest')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('❌ Table test failed:', error);
      return false;
    }
    
    console.log('✅ Table exists and is accessible!');
    console.log('Data:', data);
    return true;
  } catch (err) {
    console.error('❌ Connection test failed:', err);
    return false;
  }
}

// Run the test
testTable();
