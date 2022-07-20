import actionData from "../assets/json/actions.json" assert { type: "json" };
import objectData from "../assets/json/objects.json" assert { type: "json" };
import locationData from "../assets/json/locations.json" assert { type: "json" };

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

function handleVerb(verb, noun)
{
    if(verb=="go" && (noun=="north" || noun=="south" || noun=="east" || noun=="west"))
      verb = noun;
    switch (verb) {
    case "n":
    case "north":
      if(exits.value.includes("North")) {
        switch (game.your_place) {
          case "b_hallwy":
            game.your_place = "b_bathrm";
            break;
          case "b_bar":
            game.your_place = "b_street";
            break;
          case "b_inroom":
            game.your_place = "b_wledge";
            break;
          case "b_bedrm":
            game.your_place = "b_balcny";
            break;
          case "c_casino":
            game.your_place = "c_21room";
            break;
          case "c_street":
            game.your_place = "c_marryc";
            break;
          case "c_hmoons":
            game.your_place = "c_hallwy";
            break;
          case "d_street":
            game.your_place = "d_entrnc";
            break;
          case "d_telbth":
            game.your_place = "d_disco";
            break;
          case "p_livrom":
            game.your_place = "p_pnpch";          
          default:
            break;
        }
      }
        break;
    case "s":
    case "south":
      if(exits.value.includes("South")) {
        switch (game.your_place) {
          case "b_bathrm":
            game.your_place = "b_hallwy";
            break;
          case "b_street":
            game.your_place = "b_bar";
            break;
          case "b_balcny":
            game.your_place = "b_bedrm";
            break;
          case "c_marryc":
            game.your_place = "c_street";
            break;
          case "c_21room":
            game.your_place = "c_casino";
            break;
          case "c_hallwy":
            game.your_place = "c_hmoons";
            break;
          case "d_disco":
            game.your_place = "d_telbth";
            break;
          case "d_entrnc":
            game.your_place = "d_street";
            break;
          case "d_telbth":
            game.your_place = "d_disco";
            break;
          case "p_pnpch":
            game.your_place = "p_livrom";
            break;
      }
    }
    break;
    case "w":
    case "west":
      if(exits.value.includes("West")) {
        switch (game.your_place) {
          case "b_bar":
            game.your_place = "b_hallwy";
            break;
          case "b_backrm":
            game.your_place = "b_hallwy";
            break;
          case "b_backrm":
            game.your_place = "b_bar";
            break;
          case "b_g_dump":
            game.your_place = "b_street";
            break;
          case "b_balcny":
            game.your_place = "b_wledge";
            break;
          case "d_entrnc":
            game.your_place = "d_disco";
            break;
          case "c_htdesk":
            game.your_place = "c_hallwy";
            break;
          case "c_casino":
            game.your_place = "c_street";
            break;
          case "c_lobby":
            game.your_place = "c_casino";
            break;
          case "d_phrmcy":
            game.your_place = "d_street";
            break;
          case "p_kitchn":
            game.your_place = "p_pntfoy";
            break;
        }
      }   
      break;   
    case "e":
    case "east":
      if(exits.value.includes("East")) {
        switch (game.your_place) {
          case "b_bar":
            game.your_place = "b_backrm";
            break;
          case "b_hallwy":
            game.your_place = "b_bar";
            break;
          case "b_street":
            game.your_place = "b_g_dump";
            break;
          case "c_street":
            game.your_place = "c_casino";
            break;
          case "c_casino":
            game.your_place = "c_lobby";
            break;
          case "c_hallwy":
            game.your_place = "c_htdesk";
            break;
          case "d_disco":
            game.your_place = "d_entrnc";
            break;
          case "d_street":
            game.your_place = "d_phrmcy";
            break;
          case "p_pntfoy":
            game.your_place = "p_kitchn";
            break;
          }
        }
        break;
    case "u":
    case "up":
        if(exits.value.includes("Up")) {
          switch (game.your_place) {
            case "b_backrm":
              game.your_place = "b_bedrm";
              break;
            case "c_lobby":
              game.your_place = "c_htdesk";
              break;
            case "p_pntfoy":
              game.your_place = "p_livrom";
              break;
          }
        }
        break;
    case "d":
    case "down":
      if(exits.value.includes("Up")) {
        switch (game.your_place) {
          case "b_bedrm":
            game.your_place = "b_backrm";
            break;
          case "b_balcny":
            game.your_place == "b_g_dump";
            break;
          case "c_htdesk":
            game.your_place == "c_lobby";
            break;
          case "p_livrom":
            game.your_place == "p_pntfoy";             
            break;
        }
      }
          break;
    case "press":
    case "push":
        if(noun == "button") {
            if(game.your_place == "b_bar") {
                    let text;
                    let password = prompt("A voice says  'What's the password?'  (one word) ", "");
                    if(password.toUppercase() == "BELLYBUTTON") {
                        write_message("The curtain pulls back!!");
                        add_exit(game.your_place, " and East");
                    }
                    else
                      write_message("Wrong!!");
            }
            else if(game.your_place = "c_htdesk" || game.your_place == "p_pntfoy") {
                if(object_visible("blonde")) {
                    write_message("The blonde says 'You can't go there!'");
                }
                else
                {    
                    write_long_message (7)
                }
                if(game.your_place = "c_htdesk") 
                        game.your_place = "p_pntfoy"
                    else
                        game.your_place = "c_htdesk"
                }
                //else
                    //not_yet_but_maybe_later
                // else
                // write_message("Pushy chump, eh???"
                // }
            }
          break;
    case "enter":
    if(!object_visible("noun")) 
      find_me_one();
    else if(noun = "bushes") 
      game.your_place = p_garden;
    else if(noun == "window") {
        if(game.window_broken) 
          game.your_place = b_inroom;
        else
          not_yet_but_maybe_later}
    else if(noun == "door_west") {
        if(game.door_W_open) 
          game.your_place = d_disco;
        else
          write_message("The door is closed");
      }

    else if(noun == "elevator") 
      write_message("Push the button to enter the elevator");
    else
      I_cant_do_that();
        break;
    case "eat":
      if(!object_visible(noun) && (!is_carried(noun))){ 
        find_me_one();
        }
      else if(noun == "blonde" || noun =="waitress" || noun == "hooker" || noun == "girl") {
          write_long_message (8);
          purgatory();
      }
      else if(noun = "mushroom") {
          write_long_message (31);
          game.your_place = Int(3 * Rnd) + 1;
          //sleep (600)
          write_long_message (game.your_place) + 1;
      }         
      else if(noun == "garbage" || noun == "apple_core") {
        write_message("Too moldy!");
      }
      else if(noun = "apple") {
        write_message("Sorry ... ! hungry!");
      }
      else if(noun = "pills") {
        
          write_long_message (26);
          purgatory();
      }
      else
        write_message("Tastes awful!");
    break;
    case "drink":
      if(!is_carried(noun)) {
        I_dont_have_it();
        }
        else{
          switch(noun)
          {
            case "whiskey":
                write_message("This stuff is rot-gut!  Give it to someone ... I don't want it.");
            case "beer":
                write_message("Heh...heh...hey!!!!  This stuff's OK!");
            case "wine":
                write_message("Sour grapes....");
            case "water":
                write_message("Thanks!");
            default:
                write_message("Get your head examined!!!!");
          }
          
          if(noun == "beer" || noun == "water") {
              //put_object noun = false
              game.objects_carried--;
            }
        }
    break;
    case "buy":
    case "order":
      if(game.cash < 1 || !is_carried("wallet")) {
          purgatory();
          sorry_no_game.cash();
        }
        else
        {
          switch(noun)
        {
          case "whiskey":
          case "beer":
               if(game.your_place != "b_bar") 
                not_yet_but_maybe_later();
              else
              {
                  if(object_place && object_visible(noun, game.your_place)) 
                    write_message("Sorry ... all out!");
                  else if(object_place && !object_visible(noun, game.your_place))
                      write_message("I give the bartender $5 and he places it on the bar.");
                      game.cash -=5;
                      put_object(noun, game.your_place);
              }
          break;
          case "wine":
              if(game.your_place != "d_disco") 
                not_yet_but_maybe_later();
              else if(object_place(noun, game.your_place)) 
                    write_message("All out!");
                else
                    {
                      write_message("The waitress takes $100 && says she'll return");
                      sleep(3000);
                      write_message("Poor service!!!");
                      sleep (2000);
                      game.cash --;
                      put_object(noun, game.your_place);
                    }
          
          break;
          case "rubber":
          case "magazine":
            {
              if(game.your_place != "d_phrmcy") 
                not_yet_but_maybe_later();
              else if(object_visible(noun)) {
          
                      if(noun = "RUBBER") {
                        buy_rubber();
                        put_object(noun, "youhaveit");
                        game.objects_carried ++;
                      }
                      else
                    {
                        write_message("He takes $100 && gives me the magazine");
                        game.cash--;
                        put_object(noun, "youhaveit");
                      }
                    }
                  else
                    write_message("Sorry!!! --- sold out!");
                }
            break;                
  
          case "hooker":
            {             
              if(object_visible("hooker")) 
                write_message("You've already paid the pimp, stupid!!!!");
              else
                find_me_one();
              
          break;
            }
          default:
          write_message("game.cash can't buy everything!!!!");
        }
        }
        break;
    case "climb":
    {     
      if(noun == "STOOL") {
        
          if(object_visible("stool")) {
            
              OK();
              stool_climbed = true;
          }
          else
            write_message("It's on the floor here!");
        }
      else if(object_visible(noun) || is_carried(noun)) {
       I_cant_do_that();
      }  
      else
        find_me_one();
  }
  
  break;  
    case "water":
      if(noun == "on" || noun == "off") {
        
          if(!object_visible("sink")) 
            write_message("Find a working sink!");
          else
            game.water_on = noun = "on";
              if(water_on) {
                  write_message("Water is running in the sink");
                  put_object("water", game.your_place);
                      }
                  else if(! game.pitcher_full) {
                  OK();
                  put_object("water", false);
                  }
            }
  
      else if(!is_carried("water")) 
        write_message("I have no water!");
      else if(! object_visible(noun)) 
        find_me_one();
      else if(noun = "seeds") {
          put_object ("water", false);
          game.pitcher_full = false;
          if(game.your_place = p_garden) {
              write_message("A tree sprouts!!");
              put_object ("tree", game.your_place);
              put_object ("seeds", false);
          }
          else
            write_message("The seeds need better soil to grow.");
        }

      else
        
          write_message("It pours into the ground.");
          put_object ("water", false);
          game.pitcher_full = false;
        
      break;
    case "fill":
    if(noun != "pitcher") 
      I_cant_do_that();
    else if(!is_carried("pitcher")) 
      write_message("I don't have it!");
    else if(! object_visible("sink")) 
      write_message("Find a working sink!!");
    else if(! game.water_on) 
      write_message("No water!!");
    else if(game.pitcher_full) 
      write_message("The pitcher is already full!");
    else  {
        OK();
        game.pitcher_full = true;
      }
  break;
    case "pour":
    if(noun != "water") 
      I_cant_do_that();
    else if(!is_carried("pitcher")) 
      write_message("You have nothing to pour it with!");
    else if(!game.pitcher_full) 
      write_message("The pitcher is empty.");
    else if(game.your_place != "p_garden" || !object_visible("seeds")) 
      write_message("It pours into the ground.");
    else {
        write_message("A tree sprouts!!");
        put_object ("tree", game.your_place);
      }
break;
    case "listen":
        if(!object_visible(noun) && !is_carried(noun)) 
          find_me_one();
        else if(noun == "radio") {
            if(is_carried("radio")) {
                if(game.radio_listened) {
                  write_message("Punk rock!!!!!");
                }
                else{
                    write_message("An advertisement says 'Call 555-0987 for all your liquor needs!!!!'");
                    game.radio_listened = true;
                  }
                }
            else
              write_message("Take it and put it next to my ear!");
          }
        else
          write_message("Quiet as a mouse in heat!");
  break;
    case "close":
        if(!object_visible(noun)) 
          find_me_one();
        switch(noun)
          {
            case "desk":
              Close(game.drawer_open);
              if(object_visible("newspaper")) {
                put_object ("newspaper", false);
              }
              break;
          case "closet":
              Close (game.closet_open);
              if(object_visible("doll")) {
                put_object ("doll", false);
              }
              break;
          case "cabinet":
            if(game.stool_climbed) {
                Close ("cabinet_open");
                if(object_visible("pitcher")) 
                  put_object ("pitcher", false);
                else
                  write_message("I can't reach it!");
                }
            break;
          case "door_west":
              Close(game.door_W_open);
            // Path d_entrnc, west = false
          break;
          default:
            I_cant_do_that();
          break;
              }
      break;              
    case "jump":
      if(game.your_place == "b_balcny" || game.your_place == "b_wledge") 
        falling_down();
      else
        write_message("Whoooopeeeee!!!");
    break;    
    case "marry":
    if(noun != "girl") 
      write_message("No way, weirdo!!");
    else if(! object_visible("girl"))
      write_message("No girl!!");
    else if(game.your_place != "c_marryc") 
      not_yet_but_maybe_later();
    else if((game.cash < 30) || (! is_carried("wallet"))) {
        if(game.cash < 20 || !is_carried("wallet")) {
          write_message("The girl says 'But you'll need $2000 for the honeymoon suite!'");
        write_message("The preacher says 'I'll need $1000 too!!'");
      }
    }
    else
      {
        write_long_message (33);
        game.cash -=30;
        put_object ("girl", "c_hmoons");
        married_to_girl = true;
        addexit (game.your_place, " && South");

        //Path c_hallwy, south = c_hmoons
      }
      break;
    case "fuck":
      if(! object_visible(noun) && (!is_carried(noun)) && (noun != "you")) 
        find_me_one();
      else
      {
      switch(noun)
      {
         case "hooker":
            if(game.hooker_fucked) 
              write_message("She can't take it any more!!!!");
            else
                if(game.rubber_worn) {
                  game.hooker_fucked = true;
                  game.score ++;
                    write_long_message (21);
                }
                else
                    {                  
                    write_message("Oh no!!! I've got the dreaded atomic clap!!! I'm dead!!");
                    purgatory();
                  }
          break;
        case "doll":
            if(is_carried("doll")) {
              if(game.doll_inflated) {
                  write_long_message (22);
                  put_object ("doll", false);
                  game.objects_carried --;
              }
              else
                write_message("Inflate it first -- stupid!!!");
               }
              else
              write_message("I can't unless I'm holding it close");
      break;  
        case "girl":

   switch(game.your_place)
   {
    case "c_hmoons":
      if(game.wine_ordered) {
          write_long_message (24);
          game.girl_2_fucked = true;
          game.score++;
          game.tied_to_bed = true;
          put_object ("girl", "p_jacuzzi");
          put_object ("rope", game.your_place);
      }
      else
        write_message("She says  'Get me wine!!!  I'm nervous!!'");
    }
    break;
  case "p_jacuzzi":
    if(game.apple_given) {
      game.score ++;
        write_long_message (23);
        // game_}ed = true;
    }
    else
      not_yet_but_maybe_later();
    break;
  case "bartender":
    write_message("He jumps over the bar and kills me!!");
    purgatory();
    break;
  case "you":
    write_message("Not tonight -- I have a headache!!");
    break;
  case "waitress":
    write_message("She kicks me in the groin && says 'Wise up - Buster!!'");
    break;
  case "blonde":
    write_message("She says 'I'm working! Leave me alone!!'");
    break;
  case "pimp":
    write_message("He says 'You'll never have enough game.cash for me - fool!'.  I guess he's gay!");
    break;
  case "bum":
    write_message("To do that I need vaseline!!");
    break;
  case "businessman":
    write_message("No way!!!  You're weird!!");
    break;
  case "off":
    write_message("Fuck off yourself, asshole!!!");
    break;
  default:
    write_message("Pervert!");
    break;
  }
}
break;
    case "wear":
    case "use":
      if(! object_visible(noun) && (!is_carried(noun)) && (noun != "knife")) 
        find_me_one();
    else
    switch(noun)
    {
      case "rubber":
        write_message("It tickles!!");
        game.rubber_worn = true;
        put_object ("rubber", "youhaveit");
        break;
      case "toilet":
          write_message(".....I got those constipation blues..........");
          write_message("Ahhh...relief! Thanks");
      case "bed":
          write_message("Ahhhhh.......sleep!!!!");
          sleep (1000);
          write_message("No, I can't sleep!  Have to find me a girl!!!!");
      case "rope":
          if(is_carried("rope")) {
              if(game.your_place = "b_balcny") {
                  put_object ("rope", game.your_place);
                  game.rope_in_use = true;
                  write_message("You tie the safety rope to the balcony");
              }
              else
                not_yet_but_maybe_later();
              }
          else
            I_dont_have_it();
        break;
      case "passcard":
          if(is_carried("passcard")) {
              if(game.your_place = "d_entrnc") {
                  write_message("I show my passcard && the door opens");
                addexit (game.your_place, " and West");
              }
              else
                not_yet_but_maybe_later();
          }
          else
            I_dont_have_it();
        break;
      case "knife":
          write_message("Let me see if(I still have the knife!");
          sleep (600);
          if(is_carried("knife")) {
              if(game.tied_to_bed) {
                  write_message("I do && it worked! Thanks!");
                  game.tied_to_bed = false;
              }
              else
                  write_message("Samurai sex fi}!!!!!!!!!!!!!!!!!!!");
                  sleep (600);
                  write_message ("I stab myself in extacy!");
                  purgatory();
              }
          else
            I_dont_have_it();
        break;
      default:
          I_cant_do_that();
      break;
    }
    break;
    case "answer":
    if(! object_visible(noun))
      find_me_one();
    else if(noun != "telephone") 
      I_cant_do_that();
    else if(game.telephone_ringing) {
        write_message ("");
        write_message ("A girl says  'Hi honey!  This is " & girl_name & ". Dear, why");
        write_message ("don't you forget this game && " & girl_do & " with me????");
        write_message ("After all, your " & your_part & " has always turned me on!!!!");
        write_message ("So bring a " & your_object & " && come play with my " & girl_part & "!'");
        write_message ("She hangs up!");
        game.telephone_ringing = false;
        game.telephone_answered = true;
    }
    else
      write_message("It's not ringing!");
  break;
    case "call":
    case "dial":
    if(game.your_place = p_pntpch) 
      write_message("This only takes incoming calls!!");
    else if((noun = "555-6969") && (! game.called_555_6969)) {
        write_message ("")
        write_message ("A voice says 'Hello, please answer the questions with one word answers")
        girl_name = InputBox("What's your favorite girls name?  ")
        girl_part = InputBox("Name a nice part of her anatomy!  ")
        girl_do = InputBox("What do you like to do with her?  ")
        your_part = InputBox("&& the best part of your body?   ")
        your_object = InputBox("Finally, your favorite object?    ")
        write_message ("He hangs up!")
        game.called_555_6969 = true;
          girl_name = Lcase(girl_name)
          girl_part = Lcase(girl_part)
          girl_do = Lcase(girl_do)
          your_part = Lcase(your_part)
          your_object = Lcase(your_object)
    }
    else if((noun = "555-0439") && (! game.called_555_0439)) {
        write_long_message (34)
        game.called_555_0439 = true;
    }
    else if((noun = "555-0987") && game.married_to_girl && (! game.called_555_0987)) {
        write_long_message (35)
        game.wine_ordered = true;
        game.called_555_0987 = true;
        put_object ("wine", "c_hmoons");
    }
    else
      write_message("Nobody answers");

  break;
    case "break":
    case "smash":
      if(! object_visible(noun)) 
        find_me_one();
      else if(noun == "window") {
          write_message("Let me see if(I have a hammer");
          sleep (400);
          if(is_carried("hammer")) {
              write_message("The window smashes to pieces");
                  addexit (game.your_place, " and South");
              }
          else
            I_dont_have_it();
        }
      else
        I_cant_do_that();
    break;
    case "cut":
      write_message("Let me see if(I still have the knife!");
      sleep (600);
      if(is_carried("knife")) {
          if(noun == "rope" && game.tied_to_bed) {
              write_message("I do and it worked! Thanks!");
              game.tied_to_bed = false;
          }
          else
              write_message("Samurai sex fiend!!!!!!!!!!!!!!!!!!!");
              sleep (600);
              write_message ("I stab myself in extacy!");
              purgatory();
          }
      else
        I_dont_have_it();
    break;
    case "dance":
      write_message ("");
      for(var i; i=1; i<4)
        {      
          sleep (500);
          write_message ("Boogie Woogie!!!");
          sleep (500);
          write_message ("Yeh Yeh Yeh!!!");
        }
          write_message ("I got the steps, man!!");
      break;
    case "kill":
      write_message("Try using a knife!!!");
    case "pay":
    if(! object_visible(noun)) 
      find_me_one();
    else
    {
    switch(noun)
    {
      case "pimp":
          if(game.hooker_fucked) 
            write_message("He says 'I don't want your game.cash - stud!'");
          else
            write_message("Try going up -- he'll take the game.cash)");
      case "hooker":
        write_message("You already paid the pimp, stupid!!");
        break;
      case "blonde", "waitress", "girl":
          write_message("She yells 'I'm ! a whore!!!' && kills me!");
          purgatory();
          break;
      case "preacher":
        write_message("Bring a girl here to marry -- he'll take the game.cash)");
        break;
      case "businessman":
        write_message("He's too drunk to do business right now!");
        break;
      case "bartender":
        write_message("Buy something -- he'll take the game.cash) {");
        break;
      case "dealer":
        write_message("Why ! play 21 instead?  You'll lose anyway, fool!");
        break;
      default:
        I_cant_do_that();
    }
  }
break;
    case "smoke":
    if(noun == "plant") {
        write_message("A cop beats me over the head!!!!");
        purgatory();
        }
    else
      I_cant_do_that();
    break;
    case "show":
    if(noun == "passcard") {
        if(is_carried("passcard")) {
            if(game.your_place = "d_entrnc") {
                write_message("I show my passcard && the door opens");
                addexit (game.your_place, " and West");
            }
            else
              not_yet_but_maybe_later();
          }
        else
          I_dont_have_it();
      }
    else
      I_cant_do_that();
  break;
    case "smell":
    if(! object_visible(noun) && (! is_carried(noun))) 
      find_me_one();
    else
    switch(noun){
      case "blonde":
      write_message("Hmmm.....nice!!!!");
      break;
      case "hooker":
      write_message("OK, who's eating tuna fish?!?!?!");
      break;
      case "toilet":
      write_message("Arghhh...I'm going to puke!!!!!!");
      break;
      case "plant":
      write_message("Ahhh..chooo!!!!!!  I guess I'm allergic!");
      break;
      case "garbage":
      write_message("Yechhhhh!!!!!");
      break;
      case "flowers":
      write_message("Smells like perfume!!!");
      break;
      default:
      write_message("Smells OK");
      break;
      }
    break;
    case "help":
      give_help();
      break;
    case "kiss":
      write_message("Don't do that!!!!  It gets me excited!!");
      break;
    case "stab":
      stab_someone();
      break;
    case "quit":
    case "stop":
    case "bye":
      game_end();
      break;
    case "score":
      write_message ("");
      write_message ("Your score is '" & game.score & "' out of a possible '3'");
      break;
    case "save":
      localStorage.setItem('lsl_saved_game', JSON.stringify(game));
      break;
    case "restore":
      var obj = JSON.parse(localStorage.getItem('lsl_saved_game'));
      game = obj;
      GetLocationDescription ();
      take_inventory();
      break;
    case "go":
      if(tied_to_bed)
          write_message("But I'm tied to the bed!!!!!");
        else if(! (no_direction)) {
            if(game.your_place == "b_bedrm" && (direction == "north") && (! game.hooker_fucked)) 
              write_message("The Hooker says:  'Don't go there ... do me first!!'");
            else if(game.your_place == "c_hallwy" && (direction == "south") && (! game.married_to_girl)) 
              write_message("The door is locked shut!");
            else if(game.your_place == "d_entrnc" && (direction == west) && (! game.door_W_open)) 
              write_message("The door is closed!");
            else if(game.your_place == b_backrm && (direction == up) && (game.TV_channel != 6)) {
                if(game.cash < 20 || (! is_carried("wallet"))) 
                  write_message("The Pimp says I can't until I get $2000");
                else if(game.hooker_fucked) 
                  write_message("The Pimp says 'No -- the hooker can't take it anymore!'");
                else
                  {
                    write_message("The Pimp takes $2000 && says OK");
                    game.cash-= 20;
                    game.your_place = "b_bedrm";
                  }
                }
            else if(game.your_place == "b_balcny" && (direction == west) && (! game.rope_in_use)) {
              falling_down();
            }
            else
            { 
                //new_place = Path(game.your_place, direction)
                if(new_place != false) 
                  game.your_place = new_place;
                else
                  I_cant_go_that_way();
              }
            }
          else
            I_cant_do_that();
          
        break;
    case "hail":
    if(noun != "taxi") 
      write_message("Who are you kidding?  You're pulling at straws, fool!!");
    else if(game.your_place != "b_street" && game.your_place != "c_street" && game.your_place != "d_street")
      write_message("I'm not in the street, fool!!");
    else {
        write_long_message (6);
        taxi_destination = InputBox("WHERE TO?");
        if(taxi_destination.contains("DISCO")) 
          new_place = "d_street";
          if(taxi_destination.contains("CASINO")) 
          new_place = "c_street";
          if(taxi_destination.contains("BAR")) 
          new_place = "b_street";
        else if(new_place = "game.your_place" || !new_place) 
          write_message("Huh? - Hail another!");
        else if(is_carried("wine")) {
            wine_in_taxi();
            game.your_place = new_place;
            put_object ("wine", false);
            game.objects_carried --;
        }
      }
            write_message("We arrive && I get out.");
            game.your_place = new_place;
  break;
    case "take":
    case "get":
    case "grab":
    //if(noun = "inventory") {
      
    //    anything_carried = false
    //    for(noun = first_object To last_object
    //      if(is_carried(noun)) {
            
    //          if(! anything_carried) {
    //            write_message("I//m carrying the following:"
    //          anything_carried = true;
    //          write_message (object_name(noun))
    //          if(noun = "wallet") && (game.cash > 0)) {
    //            write_message (" with $" & game.cash & "00")
    //          else
    //            write_message
    //        }
    //    if(! anything_carried) {
    //      write_message("I//m ! carrying anything!!"
    //  }

    if(noun == "off") 
      write_message("You're not a bird, fool!!");
    else if(noun == "all") {
        write_message("You hog!!!");
        sleep (300);
        write_message ("");
        //for(noun = first_object To last_object
        //  if(object_visible(noun)) {
            
        //      write_message (object_name(noun) & ": ")
        //      if(game.objects_carried >= max_carried) {
        //        write_message ("I//m carrying too much!!!")
        //      else if(noun = takeable_objects) {
                
        //          if(game.your_place = "d_phrmcy") && (noun = "magazine" || noun = "rubber")) {
                    
        //              write_message ("The man says //Shoplifter!!// && shoots me")
        //              purgatory
        //            }
        //          else
                    
        //              put_object noun = youhavit
        //              game.objects_carried = game.objects_carried + 1
        //              if(noun = "water") { pitcher_full = true;
        //              if(noun = "pitcher") && pitcher_full) {
        //                put_object ("water" = youhavit
        //              write_message ("Taken")
        //            }
        //        }
        //      else
        //        cant_do_that
        //    }
        //}
    }
    else if(is_carried(noun)) 
      I_already_have_it();
    else if(! object_visible(noun)) 
      find_me_one();
    else if(game.objects_carried >= max_carried) 
      write_message("I'm carrying too much!!!");

    else if(! takeable_objects(noun)) 
      I_cant_do_that();

    else if(game.your_place == "d_phrmcy" && (noun == "magazine" || noun == "rubber")) {
        write_message("The man says 'Shoplifter!!' and shoots me");
        purgatory();
    }
    else if((noun == "water") && (! is_carried("pitcher"))) 
      write_message("Get me the pitcher so I don't spill it!");
    else if((noun == "candy") && (game.your_place = "b_bedrm") && (! game.hooker_fucked)) 
        write_message("The Hooker says:  'Don't take it ... do me first!!'");

    else if((noun == "rope") && game.rope_in_use) 
      write_message("It is tied to the balcony");
    else
      {
        OK();
        put_object(noun, "youhaveit");
        take_inventory();
        show_visible_items();
        game.objects_carried ++;
        if(noun == "water")  game.pitcher_full = true;
        if(noun == "pitcher" && game.pitcher_full) 
          put_object ("water", "youhaveit")
      }
break;
    case "drop":
    case "leave":
    case "plant":
    case "give":
    if(noun == "inventory" || noun == "taxi" || noun == "on" || noun == "off") 
      huh();

    else if(noun == "all") {
       anything_carried = false;
       write_message ("");
       for (var i = 0; i<5; i++){//noun = first_object; To last_object
         if(is_carried(noun)) {
            
             anything_carried = true;
             write_message (object_name(noun) & ": Dropped");
             put_object(noun, game.your_place);
             game.objects_carried --;
           }
       if(! anything_carried) {
         write_message ("I didn't carry anything!!");
     }
    }
  }
   else if(! is_carried(noun)) 
     I_dont_have_it();

    else
      {
        put_object(noun, game.your_place);
        game.objects_carried --;
        if(noun == "pitcher" && pitcher_full) 
          put_object ("water", game.your_place);
        else if(noun == "rubber") 
          rubber_worn = false;
        else if(game.your_place == "d_disco" && (object_visible("girl")) && (noun == "candy" || noun == "flowers" || noun == "ring")) 
        {
            switch(noun)
            {
              case "candy":
                  write_message("She smiles && eats a couple!!");
                  candy_given = true;
                  break;
              case "flowers":
                write_message("She blushes profusely && puts them in her hair!");
                  flowers_given = true;
                  put_object ("flowers", false);
                break;              
              case "ring":
                  write_message("She blushes && puts it in her purse.");
                  ring_given = true;
                  put_object ("ring", false);
                  break;
            }
            if(candy_given && flowers_given && ring_given) {
              
                write_message("She says: 'See you at the Marriage Center!!'");
                put_object ("girl", "c_marryc");
              }
        
        else if(object_visible("bum") && (noun == "wine")) {
          
            if(object_place("knife", game.your_place) = false) {
                bum_tells_story();
                put_object ("knife", game.your_place);
            }            
            else
              write_message("The bum mutters 'That stuff made me puke!!  Get out of here!!!'");
            }
        else if(object_visible("businessman") && (noun == "whiskey")) {
        if(object_place("control_unit", game.your_place) = false) {
            write_message("The guy gives me a TV controller!!");
            put_object ("control_unit", game.your_place);
            put_object ("whiskey", "nowhere");
        }
        else if(object_visible("blonde") && (noun == "pills")) {
            write_long_message (27);
            put_object ("blonde", "nowhere");
            put_object ("pills", "nowhere");
        }
        else if((noun == "apple") && (game.your_place == "p_jacuzzi") && object_visible("girl")) {
          
            write_long_message (20);
            apple_given = true;
        }  
        else
          OK();
      }
       }
      }
    break;
    case "look":
    case "search":
    case "examine":
    case "read":
    case "watch":
    if(noun=="") 
      write_long_message (game.your_place);
    else if(noun == "all") 
      write_message("That's too much, one item at a time, please!!");
    else if(noun == "inventory" || noun == "on" || noun == "off") 
      huh();
    else if((! object_visible(noun)) && (! is_carried(noun))) 
      find_me_one();
    else
      switch(noun)
      {
      case "desk":
        {
          if(drawer_open) {
            I_see_something();
            write_long_message(2);
          }
          else
            write_message("It's drawer is shut");
        }
        break;
      case "washbasin":
         I_see_something();
        put_object ("ring", game.your_place);
        break;
      case "graffiti":
        console.log('look graffiti');
        look_graffiti();
        break;
      case "mirror":
        write_message("There's a pervert looking back at me!!");
        break;
      case "toilet":
        write_message("Hasn't been flushed in ages!  Stinks!!!");
        break;
      case "businessman":
        write_message("He looks like a whiskey drinker to me!!");
        break;
      case "button":
        write_message("Says Push.");
        break;
      case "bartender":
        write_message("He's waiting for me to buy something!");
        break;
      case "pimp":
          write_message("He's wearing a button proclaiming -- Support your local Pimp, gimme $2000!!!");
          break;
      case "hooker":
        write_long_message (1);
        break;
      case "billboard":
        write_long_message (38);
        break;
      case "TV":
         if(! is_carried("control unit")) 
           write_message("To watch TV, I need the remote control unit!!");
         else if(! hooker_fucked) 
           write_message("The Pimp says I can't watch TV");
         else
           watch_TV (TV_channel);
        break;
      case "slot_machines":
        write_message("Playing them might be more fun....");
        break;
      case "ashtray":
        I_see_something();
        put_object ("passcard", game.your_place);
        break;
      case "blonde":
      if(game.your_place == "c_htdesk")  write_long_message (10);
      case "bum":
        write_message("He grumbles -- I'll tell you a story for a bottle of wine.....");
        break;
      case "peephole":
        if(hole_peeped) 
          write_message("All windows at the hotel across the road have their curtains shut.");
        else
          {
             write_long_message (25);
              hole_peeped = true;
          }
        break;
      case "door":
          if(door_W_open) {
            write_message("The door is open");
            }
            else
             {
              write_message("The sign on the door says ");
              write_message ("'Entry by showing passcard - Club members && their guests only!'");
            }
        break; 
      case "waitress":
        write_message("She ignores you!");
      break;
      case "telephone":
        
          if(game.your_place == d_telbth) 
            write_message("A number is there - Call 555-6969 for a good time!");
          else
            I_see_nothing_special();
      break;
      case "closet":
          if(closet_open) {
            I_see_something();
            put_object ("doll", game.your_place);
            }
            else
            write_message("It's closed");
        break;
      case "sink":
        write_message("The sign over the sink says 'Water on or off to operate'");
        break;
      case "elevator":
        write_message("It's doors are closed");
        break;
      case "dealer":
        write_message("He's waiting for me to play");
        break;
      case "cabinet":
          if(stool_climbed) {
              if(cabinet_open) {
                I_see_something();
                put_object ("pitcher", game.your_place);
                }
              else
                write_message("It's closed");
            }
          else
            I_see_nothing_special();
        break;
      case "bushes":
        write_message("Entering them would be kinky!!!!");
        break;
      case "tree":
        I_see_something();
        put_object ("apple", game.your_place);
        break;
      case "sign":
        write_message("It says 'Hail taxi here'");
        break;
      case "girl":
          if(game.your_place == p_jacuzzi) 
            write_long_message (5);
          else if(game.your_place == "d_disco" || (game.your_place == "c_marryc")) 
            write_long_message (4);
          else
            write_message("She slaps me && yells 'Pervert!!!!!'");
          break;
      case "newspaper":
          if(is_carried("newspaper")) 
            write_long_message(2);
          else
            I_dont_have_it();
            break;
      case "garbage":
        I_see_something();
        put_object ("apple_core", game.your_place);
        break;
      case "flowers":
        write_message("They look beautiful!!!");
        break;
      case "apple_core":
        I_see_something();
        put_object ("seeds", game.your_place);
        break;
      case "pills":
          write_message("The label on the bottle says");
          write_message ("'Want to drive someone crazy with lust??  Try this!!!!'");
          break;
      case "plant":
          if(object_place("bushes", game.your_place) = false) {
              write_message("There's a group of bushes behind it!!");
              put_object ("bushes", game.your_place);
            }
            I_see_nothing_special();
            break;
            case "radio":
        write_message("Maybe I should listen...");
        break;
      case "magazine":
          if(is_carried("magazine")) 
            write_long_message (3);
          else
            I_dont_have_it();
        break;
      case "rubber":
          if(is_carried("rubber")) 
            write_message("It's " & rubber_color & ", " & rubber_flavor & "-flavored, " + rubber_lubricated & ", && " & rubber_ribbed);
          else
            I_dont_have_it();
            break;
      case "wallet":
          if(game.cash > 0) {
              write_message ("");
              write_message ("It contains $" & game.cash & "00.");
          }          
          else
            write_message("It's empty");
          break;
      case "doll":
          if(doll_inflated) 
            write_message("It's inflated");
          else
            write_message("It's rolled up in a little ball");
            break;
        case "pitcher":
          if(pitcher_full) 
            write_message("It's full of water");
          else
            write_message("It's empty");
            break;
      case "rack":
        I_see_something
        put_object ("magazine", game.your_place);
        break;
      case "curtain":
        write_message("It's on the east wall");
        break;
      default:
        I_see_nothing_special();
    break;
        }
        break;
    case "flush":
    if(! object_visible(noun)) 
      find_me_one();
    else if(noun == "toilet") {
        write_long_message (36);
        sleep (300);
        write_message("I'm dead from the germs!!");
        purgatory();
        }
      else
      I_cant_do_that();
    break;
    case "open":
    case "pull":
    if(! object_visible(noun)) 
      find_me_one();
    else
    {
    switch(noun)
      {
      case "window":
        write_message("Won't budge");
        break;
      case "desk":
        if(! object_visible("newspaper")) 
        { 
          put_object ("newspaper", "b_hallwy");
        }
        break;
      case "door_west":
          if(door_W_open) 
            write_message("It's already open!!");
          else
          {            
              write_message("A voice asks 'Passcard?'  I search in my pockets &&...");
              if(is_carried("passcard")) {
                  write_message ("I have it!  The door opens!")
                  door_W_open = true;
                  addexit(game.your_place, " and West");
              }              
              else
                write_message ("I don't have it!!");
            }
        break;
      case "curtain":
        write_message("It seems to be remotely controlled");
        break;
      case "elevator":
        write_message("Push the button to open elevator");
        break;
      case "closet":
        xopen (closet_open);
        break;
      case "cabinet":
        if(stool_climbed) 
          xopen (cabinet_open);
        else
          write_message("I can't reach it!!");
        break;
        default:
         I_cant_do_that();
      }
    }
  break;
    case "inflate":
      if(noun == "doll") {
        if(is_carried("doll")) {
            if(doll_inflated) 
              write_message("You've already inflated it, stupid!!");
            else
            {
                OK();
                doll_inflated = true;
             }
            }
          else if(object_visible("doll")) 
          write_message("I can't unless I'm holding it close");
        else
          find_me_one();
        }
    else
      write_message("But the prime rate is already 257%!!");
break;
    case "play":
    if(noun == "slots") {
        if(object_visible("slot")) {
            if(game.cash > 0 && (is_carried("wallet"))) 
              play_slot (game.cash);
            else{
              write_message("No Money!");
              purgatory();
            }
        }
        else
          write_message("OK, show me your slot....");
      }
    else if(noun == "cards" || noun == "21") {
        if(game.your_place = "c_21room") {
            if(game.cash > 0 && (is_carried("wallet"))) 
              play_21 (game.cash);
            else
              write_message("No Money!");
              purgatory();
          }
        else
          not_yet_but_maybe_later();
      }
   else
      write_message("Playful bugger, eh??");
break;
    default:
      I_cant_do_that();
      break;
}
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
// yesno = InputBox("Welcome to LEISURE SUIT LARRY!!\n\r\Do you need instructions? (y/n) ")
//   if(yesno == "Y")
//     give_help();
//   else
//     newlines (2)
  

}


function I_cant_go_that_way()
{  
  write_message ("I can't go that way!");
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


function huh()
{
  write_message ("Huh?");
}


function I_cant_do_that()
 {
 write_message ("I can't do that!");
}


function I_dont_know_that_word()
{
  write_message ("I don't know that word!");
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


function I_dont_have_it()
{
    write_message ("I don't have it!!");
}


function I_already_have_it()
{
    write_message ("I already have it!!");
}


function I_see_nothing_special()
{
  write_message ("I see nothing special");
}


function I_see_something()
{
  write_message ("I see something!!!");
  object_place(object = game.your_place);
}


function not_yet_but_maybe_later()
{  
  write_message ("Not yet but maybe later!");
}

function takeable_objects(obj){
if(obj == "control") obj = "control_unit"
let object = objectData.objects.find(object => object.ABBR==obj);
return object.TAKEABLE;
}

function add_exit(strloc, strexit)
{
  let loc = locationData.locations.find(location => object.ABBR=strloc);
  loc.OTHERFLAG = true;
}

function is_carried(obj){
var x = document.getElementById("inventory").value.toLowerCase();
return x.includes(obj);
}

function give_help()
{
write_long_message(30);
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
                  elseif(exits > 1)
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
obj.YOUHAVEIT;
}
else
{
obj.YOUHAVEIT = false;
obj.VISIBLE = true;
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

function object_visible(noun){
  let object = objectData.objects.find(object => object.ABBR==noun && object.LOCATION==game.your_place);
  return object.VISIBLE;
}

function object_place(noun, strloc){
  let object = objectData.objects.find(object => object.ABBR==noun && object.LOCATION==strloc);
  return object==null;
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
 
alert(msg);
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

function write_message(msg)
{
document.getElementById("actions").value= msg;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function purgatory()
{
//   var choice, door;
//   sleep(sleep_time);
//   door = 0;
//      c = InputBox("Choose your door as 1, 2 or 3??  ");
//     choice = c;
//     door = (Math.floor(Math.random() * 3) + 1 + choice);
//     if(door == 0)
//     write_long_message (65);
//   else
// {
//       write_message ("");
//       write_message ("You're still here!");
//       write_message ("");
// }    
//   game_position.game_ended = door = 1;
} 

function bum_tells_story()
{
  var i, j;
  write_message ("He looks at me and starts to speakas");
  sleep(sleep_time);
  write_long_message (9)
  write_message("");
  sleep(sleep_time);
  write_message (" ");
  write_message ("Like I did!!");
  sleep(sleep_time);
  write_message ("He throws up and gives me back the bottle of wine.");
}

function watch_TV(TV_channel)
{
  var ch = InputBox("Which channel? (1-9) ");
    TV_channel = ch;
    write_long_message (10 + TV_channel);
    ch = InputBox("Change the channel?  (y/n) ");
if(ch = "y") watch_TV(TV_channel);
}


function wine_in_taxi()
{
  write_long_message (58);
  sleep(sleep_time);
  write_message ("");
  write_message ("What shall I do? ");
  sleep (sleep_time);
  write_message ("");
  write_message ("");
  write_message ("The idiot cab driver backs over me and kills me!!!!!!");
  purgatory();
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
if(game.objects_carried > 17) 
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
      rubber_lubricated = "non-lubricated";
      rubber_ribbed = "non-ribbed";
      rubber_color = InputBox("The man leans over the counter and whispers 'What color?' ");
      rubber_flavor = InputBox("And what flavor? ");
      answer = InputBox("Lubricated or not? (y/n) ");
      if(answer == "Y") rubber_lubricated = "lubricated";
      answer = InputBox("Ribbed? (y/n) ");
      if(answer == "Y") rubber_ribbed = "ribbed";
      write_message ("He yells -- This pervert just bought a " & rubber_color & ", ");
      write_message (rubber_flavor & "-flavored, " & rubber_lubricated & ", " & rubber_ribbed & " rubber!!!!");
      write_message ("A lady walks by and looks at me in disgust!!!!");
}


function OK()
{
  write_message ("OK");
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


