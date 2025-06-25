import { supabase } from "../lib/supabase";

export interface RegisterInterestData {
  fullName: string;
  email: string;
  phone: string;
}

export interface RegisterInterestResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const submitRegisterInterest = async (
  data: RegisterInterestData
): Promise<RegisterInterestResponse> => {
  try {
    // Validate required fields
    if (!data.fullName || !data.email || !data.phone) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    // Insert data into Supabase
    const { data: insertData, error } = await supabase
      .from("register_interest")
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      
      // More specific error messages
      if (error.message?.includes('relation "public.register_interest" does not exist')) {
        return {
          success: false,
          message: "Database table not found. Please contact support.",
        };
      }
      
      if (error.message?.includes('permission denied')) {
        return {
          success: false,
          message: "Permission denied. Please try again.",
        };
      }
      
      return {
        success: false,
        message: `Database error: ${error.message || 'Please try again.'}`,
      };
    }

    return {
      success: true,
      message: "Registration submitted successfully!",
      data: insertData,
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
};
