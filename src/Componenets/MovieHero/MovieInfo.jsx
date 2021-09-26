import React , {useContext}from "react";
import { MovieContext } from "../../Context/Movie.context";


export default function MovieInfo({movie}) {

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">{movie.orignal_title}</h1>
        <h4 className="text-white">4k ratings</h4>
        <h4 className="text-white">English, Hindi, Kannada, Tamil, Telgu</h4>
        <h6 className="text-white w-1/2">{movie.overview}</h6>
        <div className="flex flex-row gap-3">
        <button className="p-2 bg-red-500 text-white text-center font-bold px-6 py-2 rounded-md">
        Rent ₹129</button>
        <button className="bg-red-500 text-white text-center font-bold px-6 py-2 rounded-md p-2">
        Buy ₹599</button>
        </div>
      </div>
    </>
  );
}
