import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://ljcvbhpvqmmzqrnlvjsh.supabase.co";
const supabaseKey = "sb_publishable_piqh8sCbuw6Dq9d7349ZGw_LpS9Q9cx";

//Creamos la conexion con supabase

export const supabase = createClient(supabaseUrl,supabaseKey);