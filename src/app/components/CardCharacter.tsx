//rfc -> snippet
"use client";
import { guardarFavorito } from "../actions/favoritos";

//Declarar la interface para las props
interface CardCharacterProps {
  id:number;
    nombre:string;
    estado:string;
    imagen:string;
}

export default function CardCharacter({id,nombre,estado,imagen}: CardCharacterProps) {

  const handleGuardar = async () => {
    const pj = {
      id: id,
      name: nombre,
      status: estado,
      image: imagen
    }

    await guardarFavorito(pj);
    alert("Guardado en favoritos!");
  }

return (
    <div className="border rounded-xl overflow-hidden bg-gray-800 border-gray-700 " >
      <img src={imagen} alt={nombre} className="w-full h-64 object-contain bg-gray-900" />
      <section className="p-4" >
        <h2 className="text-xs sm:text-sm md:text-base font-bold">Name: {nombre}</h2>
        <p className={`text-xs sm:text-sm md:text-base mt-2 font-bold ${
        estado === "Alive" ? "text-lime-400": 
        estado === "Dead"  ? "text-red-500": 
        "text-gray-400"}`}>{estado}</p>
         <button onClick={handleGuardar} 
         className="font-bold text-xs sm:text-sm md:text-base rounded-full bg-sky-500/30 hover:bg-sky-300/40  px-3 py-2 whitespace-nowrap cursor-pointer">
          <span>⭐️</span>Guardar en Favoritos </button>
      </section>
    </div>
  );


/*
  return (
    <div className="border rounded-xl overflow-hidden bg-gray-800 border-gray-700">
        <img src={imagen} alt={nombre} className="w-full h-64"/>
        <section className="p-4">
            <h2 className="text-lg font-bold">Name: {nombre}</h2>
            <p className="text-sm mt-2 ">{estado}</p>
            <button onClick={handleGuardar}>Guardar en favoritos</button>
        </section>
    </div>
  )*/
}
