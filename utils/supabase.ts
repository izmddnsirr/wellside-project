import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dyrjcxyifvudrtodagtf.supabase.co"
const supabasePublishableKey = "sb_publishable_8jhr5iJDf6TkgWavQGStQg_d3yQQ6i0"

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})