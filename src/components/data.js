let NormalRooms = 50;
let OxygenRooms = 50;
let ICURooms = 20;

let FlatBeds = 80;
let ReclinerBeds = 100;
let Ventilator = 16;
let OxygenCylinder = 110;
let NormalMasks = 200;
let NonRebreatherMasks = 120;

//const normal = function (normalRoom) {
//this.NormalRoom -= normalRoom;
//}
function normal(NormalRooms, FlatBeds, NormalMasks) {
  NormalRooms -= 1;
  FlatBeds -= 1;
  NormalMasks -= 2;
}

function oxygen(OxygenRooms, OxygenCylinder, ReclinerBeds, NonRebreatherMasks) {
  OxygenRooms -= 1;
  OxygenCylinder -= 2;
  ReclinerBeds -= 1;
  NonRebreatherMasks -= 2;
}

function icu(ICURooms, OxygenCylinder, ReclinerBeds, Ventilator) {
  ICURooms -= 1;
  OxygenCylinder -= 1;
  ReclinerBeds -= 1;
  Ventilator -= 1;
}

export { normal, oxygen, icu };
