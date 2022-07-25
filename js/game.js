import actionData from "../assets/json/actions.json" assert { type: "json" };
import objectData from "../assets/json/objects.json" assert { type: "json" };
import locationData from "../assets/json/locations.json" assert { type: "json" };
import handleVerb from "./handleVerbs.js"; 

export {take_inventory,show_visible_items,GetLocationDescription};

Start_Game();

window.Submit_Click = () => {
let command=document.getElementById("action").value;
if(command == "")  return;
let verb = command.split(' ')[0].toLowerCase();
let noun;
if(command.split(' ').length>1)
  noun = command.split(' ')[1].toLowerCase();
handleVerb(verb, noun);
GetLocationDescription (game.your_place);
take_inventory(game.your_place, game.cash);
document.getElementById("action").value = "";
}

function Start_Game(){
game.objects_carried = 1;
init_new_game();
GetLocationDescription ();
take_inventory();
}

function GetLocationDescription(){
  let loc = locationData.locations.find(location => location.ABBR === game.your_place);
  document.getElementById("location").value =loc.WHEREAMI;
  document.getElementById("description").value =loc.Description;
  document.getElementById("exits").value =loc.OTHERAREAS+' '+loc.OTHEREXITS;
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

function take_inventory()
{
  var objects="";
  var thisitem;
  let obj = objectData.objects.filter(object => object.YOUHAVEIT==true);
  obj.forEach(object => {
  thisitem = object.OBJECT;
  if(thisitem.includes("A Wallet")) 
    thisitem = "A Wallet with $" + game.cash;
  if(objects.length > 0)
    objects += ", " + thisitem;
  else
    objects += thisitem;
  });
  document.getElementById("inventory").value =objects;
}

function init_new_game()
{
document.getElementById("mainForm").reset();
}





