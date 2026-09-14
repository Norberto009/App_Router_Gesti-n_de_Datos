import Link from "next/link";
import { CardCharacter } from "../components";
import { supabase } from "../repositories/supabase"


export default async function page() {
    //Voy a obtener todos los personajes favoritos
    const {data:favoritos,error} = await supabase.from("favoritos").select("*");

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full m-6 shadow-lg hover:shadow-xl transition-shadow">
        <span className="text-xl">←</span> Volver al inicio
      </Link>

      <div className="grid grid-cols-4 gap-4 p-4">
        {favoritos?.map((pj) => (
          <CardCharacter key={pj.id} id={pj.character_id} nombre={pj.name} imagen={pj.image} estado={pj.status} />
        ))}
      </div>
</div>
    
  )
}
