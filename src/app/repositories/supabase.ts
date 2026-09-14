import {createClient} from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! ;

//Creamos la conexion con supabase

export const supabase = createClient(supabaseUrl,supabaseKey);