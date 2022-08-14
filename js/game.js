import actionData from "../assets/json/actions.json" assert { type: "json" };
import objectData from "../assets/json/objects.json" assert { type: "json" };
import locationData from "../assets/json/locations.json" assert { type: "json" };
import handleVerb from "./handleVerbs.js"; 
import * as functions from "./functions.js";

export {show_inventory,show_visible_items,GetLocationDescription};

Start_Game();

var input = document.getElementById("action");
document.getElementById("action").focus();

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

window.Submit_Click = () => {
let command=document.getElementById("action").value;
if(command == "")  return;

document.getElementById("location").value ="";
document.getElementById("description").value ="";
document.getElementById("actions").value ="";
document.getElementById("action").value ="";

let verb = command.split(' ')[0].toLowerCase();
let noun;
if(command.split(' ').length>1)
  noun = command.split(' ')[1].toLowerCase();
handleVerb(verb, noun);
GetLocationDescription ();
show_inventory();
document.getElementById("action").value = "";
document.getElementById("action").focus();
}

function Start_Game(){
var wallet = objectData.objects.filter(object => object.ABBR=="wallet");
game.objects_carried.push(wallet);
game.cash=1000;
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
  SwitchPic(game.your_place);
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

function SwitchPic(location) {
  var pic = document.getElementById("gameImage");
  pic.src = "assets/images/"+ location +".png";
}

function show_inventory()
{
  var objects = functions.take_inventory();
  document.getElementById("inventory").value =objects;
}

function init_new_game()
{
document.getElementById("mainForm").reset();
}





