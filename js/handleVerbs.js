import * as functions from "./functions.js";
import * as game_functions from "./game.js";
import objectData from "../assets/json/objects.json" assert { type: "json" };

export default function handleVerb(verb, noun)
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
            game.your_place = "b_ledge";
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
            game.your_place = "p_pntpch";          
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
          case "p_pntpch":
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
            game.your_place = "b_bar";
            break;
          case "b_g_dump":
            game.your_place = "b_street";
            break;
          case "b_balcny":
            game.your_place = "b_ledge";
            if(functions.is_carried("rope"))
              functions.add_exit(game.your_place);
            else
            functions.falling_down();
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
            if(game.TV_channel==6)
              functions.add_exit(game.your_place);
            break;
            case "b_ledge":
              game.your_place = "b_balcny";
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
            case "p_jacuzzi":
              game.your_place = "p_pntpch";             
              break;
          }
        }
        break;
    case "d":
    case "down":
      if(exits.value.includes("Down")) {
        switch (game.your_place) {
          case "b_bedrm":
            game.your_place = "b_backrm";
            break;
          case "b_balcny":
            game.your_place = "b_g_dump";
            break;
          case "c_htdesk":
            game.your_place = "c_lobby";
            break;
          case "p_livrom":
            game.your_place = "p_pntfoy";             
            break;
          case "p_pntpch":
            game.your_place = "p_jacuzzi";             
            break;
        }
      }
          break;
    case "press":
    case "push":
        if(noun == "button") {
            if(game.your_place == "b_bar") {
                     let password = prompt("A voice says  'What's the password?'  (one word) ", "");
                    if(password.toUpperCase() == "BELLYBUTTON") {
                       functions.write_message("The curtain pulls back!!");
                        functions.add_exit(game.your_place);
                    }
                    else
                     functions.write_message("Wrong!!");
            }
            else if(game.your_place == "c_htdesk" || game.your_place == "p_pntfoy") {
                if(functions.object_visible("blonde")) {
                   functions.write_message("The blonde says 'You can't go there!'");
                }
                else
                {    
                     functions.write_long_message (7)
                }
                if(game.your_place == "c_htdesk") 
                        game.your_place = "p_pntfoy"
                    else
                        game.your_place = "c_htdesk"
                }
                //else
                    //functions.not_yet_but_maybe_later
                // else
                //functions.write_message("Pushy chump, eh???"
                // }
            }
          break;
    case "enter":
    if(!functions.object_visible("noun")) 
     functions.find_me_one();
    else if(noun = "bushes") 
      game.your_place = p_garden;
    else if(noun == "window") {
        if(game.window_broken) 
          game.your_place = b_inroom;
        else
          functions.not_yet_but_maybe_later}
    else if(noun == "door_west") {
        if(game.door_W_open) 
          game.your_place = d_disco;
        else
         functions.write_message("The door is closed");
      }

    else if(noun == "elevator") 
     functions.write_message("Push the button to enter the elevator");
    else
      functions.I_cant_do_that();
        break;
    case "eat":
      if(!functions.object_visible(noun) && (!is_carried(noun))){ 
       functions.find_me_one();
        }
      else if(noun == "blonde" || noun =="waitress" || noun == "hooker" || noun == "girl") {
           functions.write_long_message (8);
          functions.purgatory();
      }
      else if(noun = "mushroom") {
           functions.write_long_message (31);
          game.your_place = Int(3 * Rnd) + 1;
          //sleep (600)
           functions.write_long_message (game.your_place) + 1;
      }         
      else if(noun == "garbage" || noun == "apple_core") {
       functions.write_message("Too moldy!");
      }
      else if(noun = "apple") {
       functions.write_message("Sorry ... ! hungry!");
      }
      else if(noun = "pills") {
        
           functions.write_long_message (26);
          functions.purgatory();
      }
      else
       functions.write_message("Tastes awful!");
    break;
    case "drink":
      if(!functions.is_carried(noun)) {
         functions.I_dont_have_it();
        }
        else{
          switch(noun)
          {
            case "whiskey":
               functions.write_message("This stuff is rot-gut!  Give it to someone ... I don't want it.");
                break;
            case "beer":
               functions.write_message("Heh...heh...hey!!!!  This stuff's OK!");
               break;
            case "wine":
               functions.write_message("Sour grapes....");
               break;
            case "water":
               functions.write_message("Thanks!");
               break;
            default:
               functions.write_message("Get your head examined!!!!");
          }
          if(noun == "beer" || noun == "water") {
            functions.drop_object(noun);
          }
        }
    break;
    case "buy":
    case "order":
      if(game.cash < 1 || !functions.is_carried("wallet")) {
        functions.sorry_no_cash();
        functions.purgatory();
       }
      else
       {
    switch(noun)
        {
          case "whiskey":
          case "beer":
               if(game.your_place != "b_bar") 
                functions.not_yet_but_maybe_later();
              else
              {
                  if(functions.object_place && functions.object_visible(noun, game.your_place)) 
                   functions.write_message("Sorry ... all out!");
                  else if(functions.object_place && !functions.object_visible(noun, game.your_place))
                      functions.write_message("I give the bartender $5 and he places it on the bar.");
                      game.cash -=5;
                      functions.put_object(noun, game.your_place);
              }
          break;
          case "wine":
              if(game.your_place != "d_disco") 
                functions.not_yet_but_maybe_later();
              else if(!functions.object_place(noun, game.your_place)) 
                   functions.write_message("All out!");
                else
                    {
                     functions.write_message("The waitress takes $100 and says she'll return");
                     functions.sleep(3000);
                     functions.write_message("Poor service!!!");
                     functions.sleep(2000);
                      game.cash --;
                      functions.put_object(noun, game.your_place);
                    }
          
          break;
          case "rubber":
          case "magazine":
            {
              if(game.your_place != "d_phrmcy") 
                functions.not_yet_but_maybe_later();
              else if(functions.object_visible(noun)) {
                      if(noun == "rubber") {
                        functions.buy_rubber();
                        functions.put_object(noun, "youhaveit");
                        var object = objectData.objects.filter(object => object.ABBR==noun);
                        game.objects_carried.push(object);
                       }
                      else
                    {
                       functions.write_message("He takes $100 and gives me the magazine");
                        game.cash--;
                        functions.put_object(noun, "youhaveit");
                      }
                    }
                  else
                   functions.write_message("Sorry!!! --- sold out!");
                }
            break;                
  
          case "hooker":
            {             
              if(functions.object_visible("hooker")) 
               functions.write_message("You've already paid the pimp, stupid!!!!");
              else
               functions.find_me_one();
              
          break;
            }
          default:
         functions.write_message("game.cash can't buy everything!!!!");
        }
        }
        break;
    case "climb":
    {     
      if(noun == "STOOL") {
        
          if(functions.object_visible("stool")) {
            
              functions.OK();
              stool_climbed = true;
          }
          else
           functions.write_message("It's on the floor here!");
        }
      else if(functions.object_visible(noun) || functions.is_carried(noun)) {
       functions.I_cant_do_that();
      }  
      else
       functions.find_me_one();
  }
  
  break;  
    case "water":
      if(noun == "on" || noun == "off") {
        
          if(!functions.object_visible("sink")) 
           functions.write_message("Find a working sink!");
          else
            game.water_on = noun = "on";
              if(water_on) {
                 functions.write_message("Water is running in the sink");
                  functions.put_object("water", game.your_place);
                      }
                  else if(! game.pitcher_full) {
                  functions.OK();
                  functions.put_object("water", false);
                  }
            }
  
      else if(!functions.is_carried("water")) 
       functions.write_message("I have no water!");
      else if(! functions.object_visible(noun)) 
       functions.find_me_one();
      else if(noun == "seeds") {
          functions.put_object ("water", "nowhere");
          game.pitcher_full = false;
          if(game.your_place == p_garden) {
             functions.write_message("A tree sprouts!!");
              functions.put_object ("tree", game.your_place);
              functions.put_object ("seeds", "nowhere");
          }
          else
           functions.write_message("The seeds need better soil to grow.");
        }

      else
        
         functions.write_message("It pours into the ground.");
          functions.put_object ("water", "nowhere");
          game.pitcher_full = false;
        
      break;
    case "fill":
    if(noun != "pitcher") 
      functions.I_cant_do_that();
    else if(!functions.is_carried("pitcher")) 
     functions.write_message("I don't have it!");
    else if(! functions.object_visible("sink")) 
     functions.write_message("Find a working sink!!");
    else if(! game.water_on) 
     functions.write_message("No water!!");
    else if(game.pitcher_full) 
     functions.write_message("The pitcher is already full!");
    else  {
        functions.OK();
        game.pitcher_full = true;
      }
  break;
    case "pour":
    if(noun != "water") 
      functions.I_cant_do_that();
    else if(!functions.is_carried("pitcher")) 
     functions.write_message("You have nothing to pour it with!");
    else if(!game.pitcher_full) 
     functions.write_message("The pitcher is empty.");
    else if(game.your_place != "p_garden" || !functions.object_visible("seeds")) 
     functions.write_message("It pours into the ground.");
    else {
       functions.write_message("A tree sprouts!!");
        functions.put_object ("tree", game.your_place);
      }
    break;
    case "listen":
        if(!functions.object_visible(noun) && !functions.is_carried(noun)) 
         functions.find_me_one();
        else if(noun == "radio") {
            if(functions.is_carried("radio")) {
                if(game.radio_listened) {
                 functions.write_message("Punk rock!!!!!");
                }
                else{
                   functions.write_message("An advertisement says 'Call 555-0987 for all your liquor needs!!!!'");
                    game.radio_listened = true;
                  }
                }
            else
             functions.write_message("Take it and put it next to my ear!");
          }
        else
         functions.write_message("Quiet as a mouse in heat!");
  break;
    case "close":
        if(!functions.object_visible(noun)) 
         functions.find_me_one();
        switch(noun)
          {
            case "desk":
              Close(game.drawer_open);
              if(functions.object_visible("newspaper")) {
                functions.put_object ("newspaper", "nowhere");
              }
              break;
          case "closet":
              Close (game.closet_open);
              if(functions.object_visible("doll")) {
                functions.put_object ("doll", "nowhere");
              }
              break;
          case "cabinet":
            if(game.stool_climbed) {
                Close ("cabinet_open");
                if(functions.object_visible("pitcher")) 
                  functions.put_object ("pitcher", "nowhere");
                else
                 functions.write_message("I can't reach it!");
                }
            break;
          case "door_west":
              Close(game.door_W_open);
            // Path d_entrnc, west = false
          break;
          default:
            functions.I_cant_do_that();
          break;
              }
      break;              
    case "jump":
      if(game.your_place == "b_balcny" || game.your_place == "b_ledge") 
        functions.falling_down();
      else
       functions.write_message("Whoooopeeeee!!!");
    break;    
    case "marry":
    if(noun != "girl") 
     functions.write_message("No way, weirdo!!");
    else if(! functions.object_visible("girl"))
     functions.write_message("No girl!!");
    else if(game.your_place != "c_marryc") 
      functions.not_yet_but_maybe_later();
    else if((game.cash < 30) || (! functions.is_carried("wallet"))) {
        if(game.cash < 20 || !functions.is_carried("wallet")) {
         functions.write_message("The girl says 'But you'll need $2000 for the honeymoon suite!'");
       functions.write_message("The preacher says 'I'll need $1000 too!!'");
      }
    }
    else
      {
         functions.write_long_message (33);
        game.cash -=30;
        functions.put_object ("girl", "c_hmoons");
        game.married_to_girl = true;
        functions.add_exit (game.your_place, " and South");
        //Path c_hallwy, south = c_hmoons
      }
      break;
    case "fuck":
      if(! functions.object_visible(noun) && (!functions.is_carried(noun)) && (noun != "you")) 
       functions.find_me_one();
      else
      {
      switch(noun)
      {
         case "hooker":
            if(game.hooker_fucked) 
             functions.write_message("She can't take it any more!!!!");
            else
                if(game.rubber_worn) {
                  game.hooker_fucked = true;
                  game.score ++;
                     functions.write_long_message (21);
                }
                else
                    {                  
                   functions.write_message("Oh no!!! I've got the dreaded atomic clap!!! I'm dead!!");
                    functions.purgatory();
                  }
          break;
        case "doll":
            if(functions.is_carried("doll")) {
              if(game.doll_inflated) {
                   functions.write_long_message (22);
                  functions.put_object ("doll", "nowhere");
                  functions.drop_object("doll");
                }
              else
               functions.write_message("Inflate it first -- stupid!!!");
               }
              else
             functions.write_message("I can't unless I'm holding it close");
      break;  
        case "girl":

   switch(game.your_place)
   {
    case "c_hmoons":
      if(game.wine_ordered) {
           functions.write_long_message (24);
          game.girl_2_fucked = true;
          game.score++;
          game.tied_to_bed = true;
          functions.put_object ("girl", "p_jacuzzi");
          functions.put_object ("rope", game.your_place);
      }
      else
       functions.write_message("She says  'Get me wine!!!  I'm nervous!!'");
    break;
  case "p_jacuzzi":
    if(game.apple_given) {
       game.score ++;
         functions.write_long_message (23);
        // game_}ed = true;
    }
    else
      functions.not_yet_but_maybe_later();
    break;
  case "bartender":
   functions.write_message("He jumps over the bar and kills me!!");
    functions.purgatory();
    break;
  case "you":
   functions.write_message("Not tonight -- I have a headache!!");
    break;
  case "waitress":
   functions.write_message("She kicks me in the groin and says 'Wise up - Buster!!'");
    break;
  case "blonde":
   functions.write_message("She says 'I'm working! Leave me alone!!'");
    break;
  case "pimp":
   functions.write_message("He says 'You'll never have enough game.cash for me - fool!'.  I guess he's gay!");
    break;
  case "bum":
   functions.write_message("To do that I need vaseline!!");
    break;
  case "businessman":
   functions.write_message("No way!!!  You're weird!!");
    break;
  case "off":
   functions.write_message("Fuck off yourself, asshole!!!");
    break;
  default:
   functions.write_message("Pervert!");
    break;
  }

      }
      }
break;
    case "wear":
    case "use":
      if(! functions.object_visible(noun) && (!functions.is_carried(noun)) && (noun != "knife")) 
       functions.find_me_one();
    else
    switch(noun)
    {
      case "rubber":
       functions.write_message("It tickles!!");
        game.rubber_worn = true;
        functions.put_object ("rubber", "youhaveit");
        break;
      case "toilet":
         functions.write_message(".....I got those constipation blues..........");
         functions.write_message("Ahhh...relief! Thanks");
      case "bed":
         functions.write_message("Ahhhhh.......sleep!!!!");
          //sleep (1000);
         functions.write_message("No, I can't sleep!  Have to find me a girl!!!!");
      case "rope":
          if(functions.is_carried("rope")) {
              if(game.your_place = "b_balcny") {
                  functions.put_object ("rope", game.your_place);
                  game.rope_in_use = true;
                 functions.write_message("You tie the safety rope to the balcony");
              }
              else
                functions.not_yet_but_maybe_later();
              }
          else
             functions.I_dont_have_it();
        break;
      case "passcard":
          if(functions.is_carried("passcard")) {
              if(game.your_place = "d_entrnc") {
                 functions.write_message("I show my passcard and the door opens");
                 functions.add_exit (game.your_place, " and West");
              }
              else
                functions.not_yet_but_maybe_later();
          }
          else
             functions.I_dont_have_it();
        break;
      case "knife":
         functions.write_message("Let me see if(I still have the knife!");
         // sleep (600);
          if(functions.is_carried("knife")) {
              if(game.tied_to_bed) {
                 functions.write_message("I do and it worked! Thanks!");
                  game.tied_to_bed = false;
              }
              else
                 functions.write_message("Samurai sex fi}!!!!!!!!!!!!!!!!!!!");
                 // sleep (600);
                 functions.write_message ("I stab myself in extacy!");
                  functions.purgatory();
              }
          else
             functions.I_dont_have_it();
        break;
      default:
          functions.I_cant_do_that();
      break;
    }
    break;
    case "answer":
    if(! functions.object_visible(noun))
     functions.find_me_one();
    else if(noun != "telephone") 
      functions.I_cant_do_that();
    else if(game.telephone_ringing) {
       functions.write_message ("");
       functions.write_message ("A girl says  'Hi honey!  This is " & girl_name & ". Dear, why");
       functions.write_message ("don't you forget this game and " & girl_do & " with me????");
       functions.write_message ("After all, your " & your_part & " has always turned me on!!!!");
       functions.write_message ("So bring a " & your_object & " and come play with my " & girl_part & "!'");
       functions.write_message ("She hangs up!");
        game.telephone_ringing = false;
        game.telephone_answered = true;
    }
    else
     functions.write_message("It's not ringing!");
  break;
    case "call":
    case "dial":
    if(game.your_place == "p_pntpch") 
     functions.write_message("This only takes incoming calls!!");
    else if((noun == "555-6969") && (! game.called_555_6969)) {
       functions.write_message ("")
       functions.write_message ("A voice says 'Hello, please answer the questions with one word answers")
        girl_name = prompt("What's your favorite girls name?  ")
        girl_part = prompt("Name a nice part of her anatomy!  ")
        girl_do = prompt("What do you like to do with her?  ")
        your_part = prompt("and the best part of your body?   ")
        your_object = prompt("Finally, your favorite object?    ")
       functions.write_message ("He hangs up!")
        game.called_555_6969 = true;
          girl_name = Lcase(girl_name)
          girl_part = Lcase(girl_part)
          girl_do = Lcase(girl_do)
          your_part = Lcase(your_part)
          your_object = Lcase(your_object)
    }
    else if((noun == "555-0439") && (! game.called_555_0439)) {
         functions.write_long_message (34)
        game.called_555_0439 = true;
    }
    else if((noun == "555-0987") && game.married_to_girl && (! game.called_555_0987)) {
         functions.write_long_message (35)
        game.wine_ordered = true;
        game.called_555_0987 = true;
        functions.put_object ("wine", "c_hmoons");
    }
    else
     functions.write_message("Nobody answers");

  break;
    case "break":
    case "smash":
      if(! functions.object_visible(noun)) 
       functions.find_me_one();
      else if(noun == "window") {
         functions.write_message("Let me see if(I have a hammer");
          sleep (400);
          if(functions.is_carried("hammer")) {
             functions.write_message("The window smashes to pieces");
             functions.add_exit (game.your_place, " and South");
              }
          else
             functions.I_dont_have_it();
        }
      else
        functions.I_cant_do_that();
    break;
    case "cut":
     functions.write_message("Let me see if(I still have the knife!");
      sleep (600);
      if(functions.is_carried("knife")) {
          if(noun == "rope" && game.tied_to_bed) {
             functions.write_message("I do and it worked! Thanks!");
              game.tied_to_bed = false;
          }
          else
             functions.write_message("Samurai sex fiend!!!!!!!!!!!!!!!!!!!");
              sleep (600);
             functions.write_message ("I stab myself in extacy!");
              functions.purgatory();
          }
      else
         functions.I_dont_have_it();
    break;
    case "dance":
     functions.write_message ("");
      for(var i; i=1; i<4)
        {      
          sleep (500);
         functions.write_message ("Boogie Woogie!!!");
          sleep (500);
         functions.write_message ("Yeh Yeh Yeh!!!");
        }
         functions.write_message ("I got the steps, man!!");
      break;
    case "kill":
     functions.write_message("Try using a knife!!!");
     break;
    case "pay":
    if(! functions.object_visible(noun)) 
     functions.find_me_one();
    else
    {
    switch(noun)
    {
      case "pimp":
        if(game.hooker_fucked) 
          functions.write_message("He says 'I don't want your cash - stud!'");
        else
          functions.write_message("Try going up -- he'll take the cash)");
        break;
      case "hooker":
       functions.write_message("You already paid the pimp, stupid!!");
        break;
      case "blonde", "waitress", "girl":
         functions.write_message("She yells 'I'm not a whore!!!' and kills me!");
          functions.purgatory();
          break;
      case "preacher":
       functions.write_message("Bring a girl here to marry -- he'll take the game.cash)");
        break;
      case "businessman":
       functions.write_message("He's too drunk to do business right now!");
        break;
      case "bartender":
       functions.write_message("Buy something -- he'll take the cash) {");
        break;
      case "dealer":
       functions.write_message("Why ! play 21 instead?  You'll lose anyway, fool!");
        break;
      default:
        functions.I_cant_do_that();
    }
  }
break;
    case "smoke":
    if(noun == "plant") {
       functions.write_message("A cop beats me over the head!!!!");
        functions.purgatory();
        }
    else
      functions.I_cant_do_that();
    break;
    case "show":
    if(noun == "passcard") {
        if(functions.is_carried("passcard")) {
            if(game.your_place = "d_entrnc") {
               functions.write_message("I show my passcard and the door opens");
               functions.add_exit (game.your_place, " and West");
            }
            else
              functions.not_yet_but_maybe_later();
          }
        else
           functions.I_dont_have_it();
      }
    else
      functions.I_cant_do_that();
  break;
    case "smell":
    if(! functions.object_visible(noun) && (! is_carried(noun))) 
     functions.find_me_one();
    else
    switch(noun){
      case "blonde":
     functions.write_message("Hmmm.....nice!!!!");
      break;
      case "hooker":
     functions.write_message("OK, who's eating tuna fish?!?!?!");
      break;
      case "toilet":
     functions.write_message("Arghhh...I'm going to puke!!!!!!");
      break;
      case "plant":
     functions.write_message("Ahhh..chooo!!!!!!  I guess I'm allergic!");
      break;
      case "garbage":
     functions.write_message("Yechhhhh!!!!!");
      break;
      case "flowers":
     functions.write_message("Smells like perfume!!!");
      break;
      default:
     functions.write_message("Smells OK");
      break;
      }
    break;
    case "help":
      give_help();
      break;
    case "kiss":
     functions.write_message("Don't do that!!!!  It gets me excited!!");
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
     functions.write_message ("");
     functions.write_message ("Your score is '" & game.score & "' out of a possible '3'");
      break;
    case "save":
      localStorage.setItem('lsl_saved_game', JSON.stringify(game));
      break;
    case "restore":
      var obj = JSON.parse(localStorage.getItem('lsl_saved_game'));
      functions.restore_inventory(obj.objects_carried);
      functions.put_object("girl",game.girl_location);
      game = obj;
      game_functions.GetLocationDescription ();
      game_functions.show_inventory();
      break;
    case "go":
      if(tied_to_bed)
         functions.write_message("But I'm tied to the bed!!!!!");
        else if(! (no_direction)) {
            if(game.your_place == "b_bedrm" && (direction == "north") && (! game.hooker_fucked)) 
             functions.write_message("The Hooker says:  'Don't go there ... do me first!!'");
            else if(game.your_place == "c_hallwy" && (direction == "south") && (! game.married_to_girl)) 
             functions.write_message("The door is locked shut!");
            else if(game.your_place == "d_entrnc" && (direction == west) && (! game.door_W_open)) 
             functions.write_message("The door is closed!");
            else if(game.your_place == b_backrm && (direction == up) && (game.TV_channel != 6)) {
                if(game.cash < 20 || (! is_carried("wallet"))) 
                 functions.write_message("The Pimp says I can't until I get $2000");
                else if(game.hooker_fucked) 
                 functions.write_message("The Pimp says 'No -- the hooker can't take it anymore!'");
                else
                  {
                   functions.write_message("The Pimp takes $2000 and says OK");
                    game.cash-= 20;
                    game.your_place = "b_bedrm";
                  }
                }
            else if(game.your_place == "b_balcny" && (direction == west) && (! game.rope_in_use)) {
              functions.falling_down();
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
            functions.I_cant_do_that();
          
        break;
    case "hail":
    if(noun != "taxi") 
     functions.write_message("Who are you kidding?  You're pulling at straws, fool!!");
    else if(game.your_place != "b_street" && game.your_place != "c_street" && game.your_place != "d_street")
     functions.write_message("I'm not in the street, fool!!");
    else {
         functions.write_long_message(6);
        var taxi_destination = prompt("WHERE TO?");
        var new_place;
        switch (taxi_destination.toLowerCase()) {
          case "disco":
            new_place = "d_street";
          break;
          case "casino":
            new_place = "c_street";
          break;
          case "bar":
            new_place = "b_street";
          break;
          default:
            functions.write_message("Huh? - Hail another!");
            return;
        }
      }
      if(functions.is_carried("wine")) {
          functions.wine_in_taxi();
          game.your_place = new_place;
          functions.put_object ("wine", "nowhere");
          //game.remove_object(noun);
    }
      else
      {
      functions.write_message("We arrive and I get out.");
      game.cash-=5;
      game.your_place = new_place;
        }
    break;
    case "take":
    case "get":
    case "grab":
    if(noun == "off") 
     functions.write_message("You're not a bird, fool!!");
    else if(noun == "all") {
       functions.write_message("You hog!!!");
        sleep (300);
       functions.write_message ("");
    }
    else if(functions.is_carried(noun)) 
     functions.I_already_have_it();
    else if(! functions.object_visible(noun)) 
     functions.find_me_one();
    else if(game.objects_carried.length >= max_carried) 
     functions.write_message("I'm carrying too much!!!");

    else if(!functions.takeable_object(noun)) 
      functions.I_cant_do_that();

    else if(game.your_place == "d_phrmcy" && (noun == "magazine" || noun == "rubber")) {
       functions.write_message("The man says 'Shoplifter!!' and shoots me");
        functions.purgatory();
    }
    else if((noun == "water") && (! is_carried("pitcher"))) 
     functions.write_message("Get me the pitcher so I don't spill it!");
    else if((noun == "candy") && (game.your_place = "b_bedrm") && (! game.hooker_fucked)) 
       functions.write_message("The Hooker says:  'Don't take it ... do me first!!'");

    else if((noun == "rope") && game.rope_in_use) 
     functions.write_message("It is tied to the balcony");
    else
      {
        functions.OK();
        functions.put_object(noun, "youhaveit");
        var stuff = functions.take_inventory();
        game_functions.show_inventory(stuff);
        game_functions.show_visible_items();
        var object = objectData.objects.filter(object => object.ABBR==noun);
        game.objects_carried.push(object);
        if(noun == "water")  game.pitcher_full = true;
        if(noun == "pitcher" && game.pitcher_full) 
          functions.put_object ("water", "youhaveit")
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
      functions.write_message ("");
       for (var i = 0; i<game.objects_carried.length; i++){
         if(functions.is_carried(noun)) {
            
             anything_carried = true;
            functions.write_message (object_name(noun) & ": Dropped");
             functions.put_object(noun, game.your_place);
           }
       if(! anything_carried) {
        functions.write_message ("I didn't carry anything!!");
     }
    }
  }
   else if(! functions.is_carried(noun)) 
      functions.I_dont_have_it();

    else
      {
        if(noun == "pitcher" && pitcher_full) 
          functions.put_object ("water", game.your_place);
        else if(noun == "rubber") 
          game.rubber_worn = false;
        else if(game.your_place == "d_disco" && (functions.object_visible("girl")) && (noun == "candy" || noun == "flowers" || noun == "ring")) 
        {
            switch(noun)
            {
              case "candy":
                 functions.write_message("She smiles and eats a couple!!");
                  game.candy_given = true;
                  functions.put_object ("candy", game.your_place);
                  break;
              case "flowers":
               functions.write_message("She blushes profusely and puts them in her hair!");
               game.flowers_given = true;
                  functions.put_object ("flowers", "nowhere");
                break;              
              case "ring":
                 functions.write_message("She blushes and puts it in her purse.");
                 game.ring_given = true;
                  functions.put_object ("ring", "nowhere");
                  break;
            }
            if(game.candy_given && game.flowers_given && game.ring_given) {
              
               functions.write_message("She says: 'See you at the Marriage Center!!'");
                functions.put_object ("girl", "c_marryc");
              }
        }
        else if(game.your_place =="d_street" && functions.object_visible("bum") && (noun == "wine")) {
            if(!functions.object_visible("knife") && functions.object_place("knife", game.your_place)) {
                functions.bum_tells_story();
                functions.put_object ("knife", game.your_place);
            }            
            else
             functions.write_message("The bum mutters 'That stuff made me puke!!  Get out of here!!!'");
       }
        else if(functions.object_visible("businessman") && (noun == "whiskey")) {
          if(!functions.object_visible("remote")) {
              functions.write_message("The guy gives me a TV controller!!");
              functions.put_object ("remote", game.your_place);
              functions.put_object ("whiskey", "nowhere");
          }
        }
        else if(functions.object_visible("blonde") && (noun == "pills")) {
             functions.write_long_message (27);
            functions.put_object ("blonde", "nowhere");
            functions.put_object ("pills", "nowhere");
        }
        else if((noun == "apple") && (game.your_place == "p_jacuzzi") && functions.object_visible("girl")) {
            functions.write_long_message (20);
            game.apple_given = true;
        }  
        else
          functions.OK();
          functions.put_object(noun, game.your_place);
      }
    break;
    case "look":
    case "search":
    case "examine":
    case "read":
    case "watch":
    if(noun=="") 
       functions.write_long_message (game.your_place);
    else if(noun == "all") 
     functions.write_message("That's too much, one item at a time, please!!");
    else if(noun == "inventory" || noun == "on" || noun == "off") 
      huh();
    else if((! functions.object_visible(noun)) && (! functions.is_carried(noun))) 
     functions.find_me_one();
    else
      switch(noun)
      {
      case "desk":
        {
          if(functions.drawer_open) {
            functions.I_see_something();
             functions.write_long_message(2);
          }
          else
           functions.write_message("It's drawer is shut");
        }
        break;
      case "sink":
         functions.I_see_something();
        functions.put_object ("ring", game.your_place);
        break;
      case "graffiti":
        functions.look_graffiti();
        break;
      case "mirror":
       functions.write_message("There's a pervert looking back at me!!");
        break;
      case "toilet":
       functions.write_message("Hasn't been flushed in ages!  Stinks!!!");
        break;
      case "businessman":
       functions.write_message("He looks like a whiskey drinker to me!!");
        break;
      case "button":
       functions.write_message("Says Push.");
        break;
      case "bartender":
       functions.write_message("He's waiting for me to buy something!");
        break;
      case "pimp":
         functions.write_message("He's wearing a button proclaiming -- Support your local Pimp, gimme $2000!!!");
          break;
      case "hooker":
         functions.write_long_message (1);
        break;
      case "billboard":
         functions.write_long_message (38);
        break;
      case "TV":
      case "tv":
         if(! functions.is_carried("remote")) 
          functions.write_message("To watch TV, I need the remote control unit!!");
         else if(game.hooker_fucked) 
          functions.write_message("The Pimp says I can't watch TV");
         else
           functions.watch_TV(game.TV_channel);
        break;
      case "slot_machines":
       functions.write_message("Playing them might be more fun....");
        break;
      case "ashtray":
        functions.I_see_something();
        functions.put_object ("passcard", game.your_place);
        break;
      case "blonde":
      if(game.your_place == "c_htdesk")   functions.write_long_message (10);
      case "bum":
       functions.write_message("He grumbles -- I'll tell you a story for a bottle of wine.....");
        break;
      case "peephole":
        if(hole_peeped) 
         functions.write_message("All windows at the hotel across the road have their curtains shut.");
        else
          {
              functions.write_long_message (25);
              hole_peeped = true;
          }
        break;
      case "door":
          if(door_W_open) {
           functions.write_message("The door is open");
            }
            else
             {
             functions.write_message("The sign on the door says ");
             functions.write_message ("'Entry by showing passcard - Club members and their guests only!'");
            }
        break; 
      case "waitress":
       functions.write_message("She ignores you!");
      break;
      case "telephone":
        
          if(game.your_place == d_telbth) 
           functions.write_message("A number is there - Call 555-6969 for a good time!");
          else
            functions.I_see_nothing_special();
      break;
      case "closet":
          if(closet_open) {
            functions.I_see_something();
            functions.put_object ("doll", game.your_place);
            }
            else
           functions.write_message("It's closed");
        break;
      case "sink":
       functions.write_message("The sign over the sink says 'Water on or off to operate'");
        break;
      case "elevator":
       functions.write_message("It's doors are closed");
        break;
      case "dealer":
       functions.write_message("He's waiting for me to play");
        break;
      case "cabinet":
          if(stool_climbed) {
              if(cabinet_open) {
                functions.I_see_something();
                functions.put_object ("pitcher", game.your_place);
                }
              else
               functions.write_message("It's closed");
            }
          else
            functions.I_see_nothing_special();
        break;
      case "bushes":
       functions.write_message("Entering them would be kinky!!!!");
        break;
      case "tree":
        functions.I_see_something();
        functions.put_object ("apple", game.your_place);
        break;
      case "sign":
       functions.write_message("It says 'Hail taxi here'");
        break;
      case "girl":
          if(game.your_place == "p_jacuzzi") 
             functions.write_long_message (5);
          else if(game.your_place == "d_disco" || (game.your_place == "c_marryc")) 
             functions.write_long_message (4);
          else
           functions.write_message("She slaps me and yells 'Pervert!!!!!'");
          break;
      case "newspaper":
          if(functions.is_carried("newspaper")) 
             functions.write_long_message(2);
          else
             functions.I_dont_have_it();
            break;
      case "garbage":
        functions.I_see_something();
        functions.put_object ("apple_core", game.your_place);
        break;
      case "flowers":
       functions.write_message("They look beautiful!!!");
        break;
      case "apple_core":
        functions.I_see_something();
        functions.put_object ("seeds", game.your_place);
        break;
      case "pills":
         functions.write_message("The label on the bottle says");
         functions.write_message ("'Want to drive someone crazy with lust??  Try this!!!!'");
          break;
      case "plant":
          if(functions.object_place("bushes", game.your_place) = false) {
             functions.write_message("There's a group of bushes behind it!!");
              functions.put_object ("bushes", game.your_place);
            }
            functions.I_see_nothing_special();
            break;
            case "radio":
       functions.write_message("Maybe I should listen...");
        break;
      case "magazine":
          if(functions.is_carried("magazine")) 
             functions.write_long_message (3);
          else
             functions.I_dont_have_it();
        break;
      case "rubber":
          if(functions.is_carried("rubber")) 
           functions.write_message("It's " & functions.rubber_color & ", " & functions.rubber_flavor & " flavored, " + functions.rubber_lubricated & ", and " & functions.rubber_ribbed);
          else
             functions.I_dont_have_it();
            break;
      case "wallet":
          if(game.cash > 0) {
             functions.write_message ("");
             functions.write_message ("It contains $" & game.cash & "00.");
          }          
          else
           functions.write_message("It's empty");
          break;
      case "doll":
          if(doll_inflated) 
           functions.write_message("It's inflated");
          else
           functions.write_message("It's rolled up in a little ball");
            break;
        case "pitcher":
          if(pitcher_full) 
           functions.write_message("It's full of water");
          else
           functions.write_message("It's empty");
            break;
      case "rack":
        functions.I_see_something
        functions.put_object ("magazine", game.your_place);
        break;
      case "curtain":
       functions.write_message("It's on the east wall");
        break;
      default:
        functions.I_see_nothing_special();
    break;
        }
        break;
    case "flush":
    if(! functions.object_visible(noun)) 
     functions.find_me_one();
    else if(noun == "toilet") {
         functions.write_long_message (36);
        sleep (300);
       functions.write_message("I'm dead from the germs!!");
        functions.purgatory();
        }
      else
      functions.I_cant_do_that();
    break;
    case "open":
    case "pull":
    if(! functions.object_visible(noun)) 
     functions.find_me_one();
    else
    {
    switch(noun)
      {
      case "window":
       functions.write_message("Won't budge");
        break;
      case "desk":
        if(! functions.object_visible("newspaper")) 
        { 
          functions.put_object ("newspaper", "b_hallwy");
          functions.put_object ("flowers", "b_hallwy");
        }
        break;
      case "door_west":
          if(door_W_open) 
           functions.write_message("It's already open!!");
          else
          {            
             functions.write_message("A voice asks 'Passcard?'  I search in my pockets and...");
              if(functions.is_carried("passcard")) {
                 functions.write_message ("I have it!  The door opens!")
                  door_W_open = true;
                  functions.add_exit(game.your_place, " and West");
              }              
              else
               functions.write_message ("I don't have it!!");
            }
        break;
      case "curtain":
       functions.write_message("It seems to be remotely controlled");
        break;
      case "elevator":
       functions.write_message("Push the button to open elevator");
        break;
      case "closet":
        xopen (closet_open);
        break;
      case "cabinet":
        if(stool_climbed) 
          xopen (cabinet_open);
        else
         functions.write_message("I can't reach it!!");
        break;
        default:
         functions.I_cant_do_that();
      }
    }
  break;
    case "inflate":
      if(noun == "doll") {
        if(functions.is_carried("doll")) {
            if(doll_inflated) 
             functions.write_message("You've already inflated it, stupid!!");
            else
            {
                functions.OK();
                doll_inflated = true;
             }
            }
          else if(functions.object_visible("doll")) 
         functions.write_message("I can't unless I'm holding it close");
        else
         functions.find_me_one();
        }
    else
     functions.write_message("But the prime rate is already 257%!!");
break;
    case "play":
    if(noun == "slots") {
        if(functions.object_visible("slot")) {
            if(game.cash > 0 && (functions.is_carried("wallet"))) 
              play_slot (game.cash);
            else{
             functions.write_message("No Money!");
              functions.purgatory();
            }
        }
        else
         functions.write_message("OK, show me your slot....");
      }
    else if(noun == "cards" || noun == "21") {
        if(game.your_place = "c_21room") {
            if(game.cash > 0 && (functions.is_carried("wallet"))) 
              play_21 (game.cash);
            else
             functions.write_message("No Money!");
              functions.purgatory();
          }
        else
          functions.not_yet_but_maybe_later();
      }
   else
     functions.write_message("Playful bugger, eh??");
break;
    default:
      functions.I_cant_do_that();
      break;
}
}
