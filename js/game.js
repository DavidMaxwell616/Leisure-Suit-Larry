import actionData from "../assets/json/actions.json" assert { type: "json" };
import objectData from "../assets/json/objects.json" assert { type: "json" };
import locationData from "../assets/json/locations.json" assert { type: "json" };
import handleVerb from "./handleVerbs.js"; 
import * as functions from "./functions.js";

export {show_inventory,show_visible_items,GetLocationDescription};

Start_Game();

window.Submit_Click = () => {
let command=document.getElementById("action").value;
if(command == "")  return;
let verb = command.split(' ')[0].toLowerCase();
let noun;
if(command.split(' ').length>1)
  noun = command.split(' ')[1].toLowerCase();
handleVerb(verb, noun);
GetLocationDescription ();
show_inventory();
document.getElementById("action").value = "";
}

function Start_Game(){
game.objects_carried = 1;
init_new_game();
GetLocationDescription ();
show_inventory();
}

function GetLocationDescription(){
  let loc = locationData.locations.find(location => location.ABBR === game.your_place);
  document.getElementById("location").value =loc.WHEREAMI;
  document.getElementById("description").value =loc.Description;
  const otherExits = loc.OTHERFLAG ? loc.OTHEREXITS : '';
  document.getElementById("exits").value =loc.OTHERAREAS+' '+otherExits;
  show_visible_items();
}

function show_visible_items(){
  let obj = objectData.objects.filter(object => object.LOCATION==game.your_place && object.VISIBLE);
  let objects="";
  obj.forEach(object => {
    if (objects.length==0)
     objects+=object.OBJECT;
     else  
      objects+=', '+object.OBJECT;   
  });
  document.getElementById("items").value =objects;
}

function show_inventory()
{
  var objects = functions.take_inventory();
  console.log(objects);
  document.getElementById("inventory").value =objects;
}

function init_new_game()
{
document.getElementById("mainForm").reset();
}





