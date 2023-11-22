import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";


console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();
// => Attempted import error

console.log(parkTrees);
// => "Aspen and Pine"

parkWildlife();
// => "Elk, Bighorn Sheep, Moose"

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}