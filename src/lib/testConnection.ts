import { supabase } from './supabase'

export const testSupabaseConnection = async () => {
  try {
    const { error } = await supabase.from('register_interest').select('count').limit(1)
    
    if (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }
    
    console.log('Supabase connection successful!')
    return true
  } catch (error) {
    console.error('Supabase connection test error:', error)
    return false
  }
}
