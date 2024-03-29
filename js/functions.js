import actionData from "../assets/json/actions.json" assert { type: "json" };
import objectData from "../assets/json/objects.json" assert { type: "json" };
import locationData from "../assets/json/locations.json" assert { type: "json" };
import * as game_functions from "./game.js";

export {is_carried, I_cant_go_that_way, take_inventory, sleep, wine_in_taxi, bum_tells_story,
    huh,I_cant_do_that,I_dont_know_that_word,I_dont_have_it,I_already_have_it, falling_down,
    I_see_nothing_special,give_help,not_yet_but_maybe_later,add_exit, buy_rubber,
    object_visible,object_place,write_message,OK,cant_do_that, write_long_message,
    find_me_one,I_see_something,takeable_object,look_around,watch_TV,sorry_no_cash,
    put_object,list_objects,look_graffiti,purgatory, drop_object,restore_inventory
};

let is_carried = (obj) => objectData.objects.find(object => object.ABBR==obj).YOUHAVEIT;
let I_cant_go_that_way = () => write_message ("I can't go that way!");
let huh = () => write_message ("Huh?");
let I_cant_do_that = () => cant_do_that();
let I_dont_know_that_word = () => write_message ("I don't know that word!");
let I_dont_have_it = () => write_message ("I don't have it!!");
let I_already_have_it = () => write_message ("I already have it!!");
let I_see_nothing_special = () => write_message ("I see nothing special");
let give_help = () => write_long_message(30);
let not_yet_but_maybe_later = () => write_message ("Not yet but maybe later!");
let add_exit = (strloc) => locationData.locations.find(location => location.ABBR==strloc).OTHERFLAG = true;
let write_message = (msg) => document.getElementById("actions").value= msg;
let I_see_something = () => write_message ("I see something!!!");
let OK = () => write_message ("OK");
let sleep_time=5000;

function object_place(noun, strloc)
{
  let obj = objectData.objects.find(object => object.ABBR==noun && object.LOCATION==strloc);
  return  obj != null;
}

function object_visible(noun)
{
let obj = objectData.objects.find(object => object.ABBR==noun && object.LOCATION==game.your_place);
return obj==undefined || obj.VISIBLE;
}


function cant_do_that()
{
  var messg;

  messg = Math.floor(Math.random() * 8) + 1;
  switch (messg)
  {
    case 1:
    write_message ("Huh?");
    break;
    case 2:
    write_message ("Ummm......huh?");
    break;
    case 3:
    write_message ("You're nuts!");
    break;
    case 4:
    write_message ("You can't be serious!!");
    break;
    case 5:
    write_message ("Not bloody likely!!");
    break;
    case 6:
    write_message ("I don't know how to.");
    break;
    case 7:
    write_message ("An interesting idea....");
    break;
    case 8:
    write_message ("I can't do that.");
    break;
  }
}

function find_me_one()
{
var messg;

  messg = Math.floor(Math.random() * 4) + 1;
  write_message ("");
  switch(messg)
  {
case 1:
write_message ("Find me one!!");
break;
case 2:
write_message ("I don't see it here!");
break;
case 3:
write_message ("I can't find it here!");
break;
case 4:
write_message ("You have to find it first!");
break;
  } 
}

function drop_object(obj){
  var object = objectData.objects.find(object => object.ABBR==obj);
  game.objects_carried.splice(object);
}
function takeable_object(obj){
if(obj == "control") obj = "control_unit"
return objectData.objects.find(object => object.ABBR==obj).TAKEABLE;
}

function look_around()
{
  var objcount;
  if(!place_visited(game.your_place))
    write_long_message (game.your_place + 1);
  if((game.your_place == "p_pntpch") && called_555_0439)
  {        
      if(!telephone_answered && Math.floor(Math.random() * 4) + 1 == 2)
        telephone_ringing = true;
      if(telephone_ringing)
        write_message ("The telephone rings");
    }
  place_visited(game.your_place) = true;
  newlines (2);

  write_message (place_name(game.your_place));
  write_message ("Items in sight are:  ");
  for(obj = first_object; obj<last_object;obj++)
  {        
    if(object_visible(obj))
  {            
    if(objcount > 0)
        write_message (", ");
    objcount ++;
    namelen = object_name(obj).length;
    write_message("");
    write_message ("                     ");
  }
    write_message (object_name(obj));
  }
  if(objcount == 0)
    write_message ("Nothing interesting.");
  else
    write_message("");
  write_message ("Other areas are:  ")
  exitcount = 0
  for(exit = first_direction; exit<last_direction;exit++)
  {
  if(Path(game.your_place, intexit) != nowhere)
      exitcount ++;
  exits = exitcount
  if(exits == 0)
    write_message ("By magic!");
  else
  {
    for(intexit = first_direction; intexit<last_direction;intexit++)
    {
      if(Path(game.your_place, intexit) != nowhere)
      {
            if(exitcount < exits)
          {  
              if(exitcount > 1)
                write_message (", ")
              else if(exits > 1)
                write_message (" and ")
            }
      }
          exitcount = exitcount - 1
          write_message (direction_name(intexit))
        }
      }

  write_message("");
  for(var i = 1; i< 79;i++)
  {
  write_message ("=");
  write_message("");
  }
  }
}

function put_object(strobject,strloc)
{
  let obj = objectData.objects.find(object => object.ABBR==strobject);
  if(strloc == "youhaveit")
  {
    obj.VISIBLE = false;
    obj.YOUHAVEIT = true;
  }
  else if(strloc == "nowhere")
  {
  obj.VISIBLE = false;
  obj.YOUHAVEIT = false;
  }
  else
  {
  obj.YOUHAVEIT = false;
  obj.VISIBLE = true;
  obj.LOCATION = game.your_place;
  } 
 
}

function list_objects(strloc)
{
let objects = objectData.objects.filter(object => object.LOCATION==strloc && object.VISIBLE);
objects.forEach(object =>
{  if(objects.length > 0)
  objects += ", " + object;
  else
  objects += object;
});
document.getElementById("items").value=objects;
}

function look_graffiti()
{
  var msg = `+-------------------------------------------------------------------+\n\r\
 |                                                                   |\n\r\
 |        At my PC is where I sit                                    |\n\r\ 
 |         when I feel like fondling it's bits!           I  h       |\n\r\ 
 |                                                        '  e       |\n\r\ 
 |       C                            The password is:    d  r       |\n\r\ 
 |        o       A       a                                          |\n\r\ 
 |         m        S       n           Bellybutton       l  f       |\n\r\ 
 |      P   p         C       d                           i  l       |\n\r\ 
 |       e   u          I             r                   k  o       |\n\r\ 
 |        e   t           I     y       e                 e  p       |\n\r\ 
 |     t   k   e                  e       c                  p       |\n\r\ 
 |      h       r                           e             t  i       |\n\r\ 
 |       e   b                      s         i           o  e       |\n\r\ 
 |        y   e   f                   h         e            s       |\n\r\ 
 |             f   r                    a         v       n          |\n\r\ 
 |          P   o   e                     l         e     i          |\n\r\ 
 |           o   r   a                      l             b          |\n\r\ 
 |            k   e   k                                   b          |\n\r\ 
 |             e       s                                  l          |\n\r\ 
 |                                                        e          |\n\r\ 
 |                                                                   |\n\r\ 
 +-------------------------------------------------------------------+`;
 
write_message(msg);
}

function write_long_message(messg_no)
{
  let action = actionData.actions.find(action => action.ACTIONID==messg_no).ACTION;
  document.getElementById("actions").value =action;
}

function game_end()
{
  //Application.Quit
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function purgatory()
{
    var choice, door;
    await sleep(sleep_time);
    door = 0;
    var c = write_message("Choose your door as 1, 2 or 3??  ");
    choice = c;
    door = (Math.floor(Math.random() * 3) + 1 + choice);
    if(door == 0)
    write_long_message (65);
  else
    {
        write_message ("");
        write_message ("You're still here!");
        write_message ("");
    }    
} 

async function bum_tells_story()
{
  write_message ("He looks at me and starts to speak");
  await sleep(sleep_time);
  write_long_message (9)
  await sleep(sleep_time*2);
  write_message ("Like I did!!");
  await sleep(sleep_time);
  write_message ("He throws up and gives me back the bottle of wine.");
}

function watch_TV(TV_channel)
{
  var ch = prompt("Which channel? (1-9) ");
    game.TV_channel = Number(ch);
    write_long_message (10 + game.TV_channel);
    var yn = prompt("Change the channel?  (y/n) ");
    if(yn == "y") 
      watch_TV(game.TV_channel);
    else
      add_exit("b_backrm");
}

function wine_in_taxi()
{
  write_long_message (28);
}

function stab_someone()
{
  write_message ("");
  write_message ("OK - warmonger!");
  sleep (sleep_time);
  write_message ("Parry!!");
  sleep (sleep_time);
  write_message ("Thrust!!!");
  sleep (sleep_time);
  write_message ("I just got myself!!");
  purgatory();
}

function add_to_inventory(object)
{
if(game.objects_carried.length > 17) 
{  
  write_long_message("You're carrying too much");
  return;
}
document.getElementById("inventory").value+= object;
game.objects_carried.push(object);
}

function falling_down()
{
for(var i = 1;i<50;i++)
    {
    write_message ("Aaaaaeeeeeiiiiiiii!!!!!!!!");
  }
  sleep (sleep_time);
    write_message ("Splaaatttttt!!!!!")
  if(game_position.Verb != jump)
    {    
      sleep (sleep_time);
      write_message();
      write_message ("I should have used safety rope!!!!!!!!");
    }
  purgatory();
}

function sorry_no_cash(){
  write_message ("I'm broke!!! -- that means death!!!!!!!")
  purgatory();
}

function play_slot()
{
  if(game.cash < 1)
    {
      write_message ("I'm broke!!! -- that means death!!!!!!!")
      purgatory();
    }
}

function play_21()
{
  if(game.cash < 1)
  {    
      write_message ("I'm broke!!! -- that means death!!!!!!!");
      purgatory();
    }
}


function buy_rubber()
{
var answer;
   var i;
      game.rubber_color = prompt("The man leans over the counter and whispers 'What color?' ");
      game.rubber_flavor = prompt("And what flavor? ");
      var answer = prompt("Lubricated or not? (y/n) ");
      game.rubber_lubricated = answer == "y" ? "lubricated" : "non-lubricated";
      answer = prompt("Ribbed? (y/n) ");
      game.rubber_ribbed = answer=="y" ? "ribbed": "non-ribbed";
      var msg = "He yells -- This pervert just bought a " + game.rubber_color + ", " + 
      game.rubber_flavor + " flavored, " + game.rubber_lubricated + ", " +
      game.rubber_ribbed + " rubber!!!!\nA lady walks by and looks at me in disgust!!!!";
      write_message (msg);
}

function xopen(object_open)
{
    if(object_open)
    write_message ("It's already open!!");
  else
  {  
    OK();
    object_open = true;
  }
}

function xclose(object_open)
{

  if(! object_open)
    write_message ("It's already closed!!")
  else
  {
       OK();
      object_open = false;
  }
}

function take_inventory(){
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
return objects;
}
function restore_inventory(items){
  items.forEach(item => {
    objectData.objects.find(object => object.ABBR==item[0].ABBR).YOUHAVEIT = true;
  });
  }