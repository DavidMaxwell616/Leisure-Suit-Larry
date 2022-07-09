
function Command2_Click(){
// On Error GoTo Err_Command2_Click


//     DoCmd.Quit

// Exit_Command2_Click:
//     return;

// Err_Command2_Click:
//     MsgBox Err.Description
//     Resume Exit_Command2_Click
    
}
function Form_Load()
{
cash = 2400;
//INITIALIZE GAME
// DoCmd.SetWarnings false
// DoCmd.OpenQuery "update_carried_objects"
// DoCmd.OpenQuery "update_visible_objects"
// DoCmd.OpenQuery "update_exits"
// DoCmd.SetWarnings true;

}

function Submit_Click()
{
let strcommand;
let strexits;
let verb, noun;
if(txtCommand == "")  return;
strcommand = txtCommand;
verb = strcommand.split(' ')[0].toLowerCase();
noun = strcommand.split(' ')[1].toLowerCase();
// if(verb=="GO")
//   verb=noun;
//  handle(verb, noun);
// }
// GetLocationDescription (your_place)
// take_inventory your_place, cash
// Me.txtCommand.SetFocus

}
function Start_Game(){
  your_place = "b_bar";
max_carried = 7;
objects_carried = 1;
GetLocationDescription (your_place);
take_inventory(your_place, cash);
init_new_game();
}

function handleVerb(verb, noun)
{
    switch (verb) {
    case "n","north":
      if(exits.includes("North")) {
        switch (your_place) {
          case "b_hallwy":
            your_place = "b_bathrm";
            break;
          case "b_bar":
            your_place = "b_street";
            break;
          case "b_inroom":
            your_place = "b_wledge";
            break;
          case "b_bedrm":
            your_place = "b_balcny";
            break;
          case "c_casino":
            your_place = "c_21room";
            break;
          case "c_street":
            your_place = "c_marryc";
            break;
          case "c_hmoons":
            your_place = "c_hallwy";
            break;
          case "d_street":
            your_place = "d_entrnc";
            break;
          case "d_telbth":
            your_place = "d_disco";
            break;
          case "p_livrom":
            your_place = "p_pnpch";          
          default:
            break;
        }
      }
        break;
    case "S","south":
      if(exits.includes("South")) {
        switch (your_place) {
          case "b_bathrm":
            your_place = "b_hallwy";
            break;
          case "b_street":
            your_place = "b_bar";
            break;
          case "b_balcny":
            your_place = "b_bedrm";
            break;
          case "c_marryc":
            your_place = "c_street";
            break;
          case "c_21room":
            your_place = "c_casino";
            break;
          case "c_hallwy":
            your_place = "c_hmoons";
            break;
          case "d_disco":
            your_place = "d_telbth";
            break;
          case "d_entrnc":
            your_place = "d_street";
            break;
          case "d_telbth":
            your_place = "d_disco";
            break;
          case "p_pnpch":
            your_place = "p_livrom";
            break;
      }
    }
    break;
    case "W","west":
      if(exits.includes("West")) {
        switch (your_place) {
          case "b_backrm":
            your_place = "b_hallwy";
            break;
          case "b_backrm":
            your_place = "b_bar";
            break;
          case "b_g_dump":
            your_place = "b_street";
            break;
          case "b_balcny":
            your_place = "b_wledge";
            break;
          case "d_entrnc":
            your_place = "d_disco";
            break;
          case "c_htdesk":
            your_place = "c_hallwy";
            break;
          case "c_casino":
            your_place = "c_street";
            break;
          case "c_lobby":
            your_place = "c_casino";
            break;
          case "d_phrmcy":
            your_place = "d_street";
            break;
          case "p_kitchn":
            your_place = "p_pntfoy";
            break;
        }
      }   
      break;   
    case "E","east":
      if(exits.includes("West")) {
        switch (your_place) {
          case "b_bar":
            your_place = "b_backrm";
            break;
          case "b_hallwy":
            your_place = "b_bar";
            break;
          case "b_street":
            your_place = "b_g_dump";
            break;
          case "c_street":
            your_place = "c_casino";
            break;
          case "c_casino":
            your_place = "c_lobby";
            break;
          case "c_hallwy":
            your_place = "c_htdesk";
            break;
          case "d_disco":
            your_place = "d_entrnc";
            break;
          case "d_street":
            your_place = "d_phrmcy";
            break;
          case "p_pntfoy":
            your_place = "p_kitchn";
            break;
          }
        }
        break;
    case "U","up":
        if(exits.includes("Up")) {
          switch (your_place) {
            case "b_backrm":
              your_place = "b_bedrm";
              break;
            case "c_lobby":
              your_place = "c_htdesk";
              break;
            case "p_pntfoy":
              your_place = "p_livrom";
              break;
          }
        }
        break;
    case "D","down":
      if(exits.includes("Up")) {
        switch (your_place) {
          case "b_bedrm":
            your_place = "b_backrm";
            break;
          case "b_balcny":
            your_place == "b_g_dump";
            break;
          case "c_htdesk":
            your_place == "c_lobby";
            break;
          case "p_livrom":
            your_place == "p_pntfoy";             
            break;
        }
      }
          break;
    case "press","push":
        if(noun == "button") {
            if(your_place == "b_bar") {
                    let text;
                    let password = prompt("A voice says  'What's the password?'  (one word) ", "");
                    if(password.toUpperCase() == "BELLYBUTTON") {
                        write_message("The curtain pulls back!!");
                        addexit(your_place, " and East");
                    }
                    else
                      write_message("Wrong!!");
            }
            else if(your_place = "c_htdesk" || your_place == "p_pntfoy") {
                if(is_here("blonde")) {
                    write_message("The blonde says 'You can't go there!'");
                }
                else
                {    
                    write_long_message (7)
                }
                if(your_place = "c_htdesk") 
                        your_place = "p_pntfoy"
                    else
                        your_place = "c_htdesk"
                }
                //else
                    //not_yet_but_maybe_later
                // else
                // write_message("Pushy chump, eh???"
                // }
            }
          break;
    case "enter":
    if(!is_here("noun")) 
      find_me_one();
    else if(noun = "bushes") 
      your_place = p_garden;
    else if(noun == "window") {
        if(window_broken) 
          your_place = b_inroom;
        else
          not_yet_but_maybe_later}
    else if(noun == "door_west") {
        if(door_W_open) 
          your_place = d_disco;
        else
          write_message("The door is closed");
      }

    else if(noun == "elevator") 
      write_message("Push the button to enter the elevator");
    else
      I_cant_do_that();
        break;
    case "eat":
      if(!is_here(noun) && (!is_carried(noun))){ 
        find_me_one();
        }
      else if(noun == "blonde" || noun =="waitress" || noun == "hooker" || noun == "girl") {
          write_long_message (8);
          purgatory();
      }
      else if(noun = "mushroom") {
          write_long_message (31);
          your_place = Int(3 * Rnd) + 1;
          //sleep (600)
          write_long_message (your_place) + 1;
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
              objects_carried--;
            }
        }
    break;
    case "buy", "order":
    //cash = 240
        if(cash < 1 || !is_carried("wallet")) {
          purgatory();
          sorry_no_cash();
        }
        else
        {
        switch(noun)
        {
          case "whiskey", "beer":
            {
              if(your_place != "b_bar") 
                not_yet_but_maybe_later();
              else
                  if(!object_place(noun, your_place)) 
                    write_message("Sorry ... all out!");
                  else
                      write_message("I give the bartender $5 and he places it on the bar.");
                      cash -=5;
                      put_object(noun, your_place);
            }
          break;
          case "wine":
              if(your_place != "d_disco") 
                not_yet_but_maybe_later();
              else if(object_place(noun, your_place)) 
                    write_message("All out!");
                else
                    {
                      write_message("The waitress takes $100 && says she'll return");
                      sleep(3000);
                      write_message("Poor service!!!");
                      sleep (2000);
                      cash --;
                      put_object(noun, your_place);
                    }
          
          break;
          case "rubber", "magazine":
            {
              if(your_place != "d_phrmcy") 
                not_yet_but_maybe_later();
              else if(is_here(noun)) {
          
                      if(noun = "RUBBER") {
                        buy_rubber();
                        put_object(noun, "youhaveit");
                        objects_carried ++;
                      }
                      else
                    {
                        write_message("He takes $100 && gives me the magazine");
                        cash--;
                        put_object(noun, "youhaveit");
                      }
                    }
                  else
                    write_message("Sorry!!! --- sold out!");
                }
            break;                
  
          case "hooker":
            {             
              if(is_here("hooker")) 
                write_message("You've already paid the pimp, stupid!!!!");
              else
                find_me_one();
              
          break;
            }
          default:
          write_message("cash can't buy everything!!!!");
        }
      }
        break;
    case "climb":
    {     
      if(noun == "STOOL") {
        
          if(is_here("stool")) {
            
              OK();
              stool_climbed = true;
          }
          else
            write_message("It's on the floor here!");
        }
      else if(is_here(noun) || is_carried(noun)) {
       I_cant_do_that();
      }  
      else
        find_me_one();
  }
  
  break;  
    case "water":
      if(noun == "on" || noun == "off") {
        
          if(!is_here("sink")) 
            write_message("Find a working sink!");
          else
              water_on = noun = "on";
              if(water_on) {
                  write_message("Water is running in the sink");
                  put_object("water", your_place);
                      }
                  else if(! pitcher_full) {
                  OK();
                  put_object("water", false);
                  }
            }
  
      else if(!is_carried("water")) 
        write_message("I have no water!");
      else if(! is_here(noun)) 
        find_me_one();
      else if(noun = "seeds") {
          put_object ("water", false);
          pitcher_full = false;
          if(your_place = p_garden) {
              write_message("A tree sprouts!!");
              put_object ("tree", your_place);
              put_object ("seeds", false);
          }
          else
            write_message("The seeds need better soil to grow.");
        }

      else
        
          write_message("It pours into the ground.");
          put_object ("water", false);
          pitcher_full = false;
        
      break;
    case "fill":
    if(noun != "pitcher") 
      I_cant_do_that();
    else if(!is_carried("pitcher")) 
      write_message("I don't have it!");
    else if(! is_here("sink")) 
      write_message("Find a working sink!!");
    else if(! water_on) 
      write_message("No water!!");
    else if(pitcher_full) 
      write_message("The pitcher is already full!");
    else  {
        OK();
        pitcher_full = true;
      }
  break;
    case "pour":
    if(noun != "water") 
      I_cant_do_that();
    else if(!is_carried("pitcher")) 
      write_message("You have nothing to pour it with!");
    else if(!pitcher_full) 
      write_message("The pitcher is empty.");
    else if(your_place != "p_garden" || !is_here("seeds")) 
      write_message("It pours into the ground.");
    else {
        write_message("A tree sprouts!!");
        put_object ("tree", your_place);
      }
break;
    case "listen":
        if(!is_here(noun) && !is_carried(noun)) 
          find_me_one();
        else if(noun == "radio") {
            if(is_carried("radio")) {
                if(radio_listened) {
                  write_message("Punk rock!!!!!");
                }
                else{
                    write_message("An advertisement says 'Call 555-0987 for all your liquor needs!!!!'");
                    radio_listened = true;
                  }
                }
            else
              write_message("Take it and put it next to my ear!");
          }
        else
          write_message("Quiet as a mouse in heat!");
  break;
    case "close":
        if(!is_here(noun)) 
          find_me_one();
        switch(noun)
          {
            case "desk":
              Close(drawer_open);
              if(is_here("newspaper")) {
                put_object ("newspaper", false);
              }
              break;
          case "closet":
              Close (closet_open);
              if(is_here("doll")) {
                put_object ("doll", false);
              }
              break;
          case "cabinet":
            if(stool_climbed) {
                Close ("cabinet_open");
                if(is_here("pitcher")) 
                  put_object ("pitcher", false);
                else
                  write_message("I can't reach it!");
                }
            break;
          case "door_west":
              Close(door_W_open);
            // Path d_entrnc, west = false
          break;
          default:
            I_cant_do_that();
          break;
              }
      break;              
    case "jump":
      if(your_place == "b_balcny" || your_place == "b_wledge") 
        falling_down();
      else
        write_message("Whoooopeeeee!!!");
    break;    
    case "marry":
    if(noun != "girl") 
      write_message("No way, weirdo!!");
    else if(! is_here("girl"))
      write_message("No girl!!");
    else if(your_place != "c_marryc") 
      not_yet_but_maybe_later();
    else if((cash < 30) || (! is_carried("wallet"))) {
        if(cash < 20 || !is_carried("wallet")) {
          write_message("The girl says 'But you'll need $2000 for the honeymoon suite!'");
        write_message("The preacher says 'I'll need $1000 too!!'");
      }
    }
    else
      {
        write_long_message (33);
        cash -=30;
        put_object ("girl", "c_hmoons");
        married_to_girl = true;
        addexit (your_place, " && South");

        //Path c_hallwy, south = c_hmoons
      }
      break;
    case "fuck":
      if(! is_here(noun) && (!is_carried(noun)) && (noun != "you")) 
        find_me_one();
      else
      {
      switch(noun)
      {
         case "hooker":
            if(hooker_fucked) 
              write_message("She can't take it any more!!!!");
            else
                if(rubber_worn) {
                    hooker_fucked = true;
                    score ++;
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
              if(doll_inflated) {
                  write_long_message (22);
                  put_object ("doll", false);
                  objects_carried --;
              }
              else
                write_message("Inflate it first -- stupid!!!");
               }
              else
              write_message("I can't unless I'm holding it close");
      break;  
        case "girl":

   switch(your_place)
   {
    case "c_hmoons":
      if(wine_ordered) {
          write_long_message (24);
          girl_2_fucked = true;
          score = score + 1;
          tied_to_bed = true;
          put_object ("girl", "p_jacuzzi");
          put_object ("rope", your_place);
      }
      else
        write_message("She says  'Get me wine!!!  I'm nervous!!'");
    }
    break;
  case "p_jacuzzi":
    if(apple_given) {
        score ++;
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
    write_message("He says 'You'll never have enough cash for me - fool!'.  I guess he's gay!");
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
    case "wear", "use":
      if(! is_here(noun) && (!is_carried(noun)) && (noun != "knife")) 
        find_me_one();
    else
    switch(noun)
    {
      case "rubber":
        write_message("It tickles!!");
        rubber_worn = true;
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
              if(your_place = "b_balcny") {
                  put_object ("rope", your_place);
                  rope_in_use = true;
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
              if(your_place = "d_entrnc") {
                  write_message("I show my passcard && the door opens");
                addexit (your_place, " and West");
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
              if(tied_to_bed) {
                  write_message("I do && it worked! Thanks!");
                  tied_to_bed = false;
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
    if(! is_here(noun))
      find_me_one();
    else if(noun != "telephone") 
      I_cant_do_that();
    else if(telephone_ringing) {
        write_message ("");
        write_message ("A girl says  'Hi honey!  This is " & girl_name & ". Dear, why");
        write_message ("don't you forget this game && " & girl_do & " with me????");
        write_message ("After all, your " & your_part & " has always turned me on!!!!");
        write_message ("So bring a " & your_object & " && come play with my " & girl_part & "!'");
        write_message ("She hangs up!");
        telephone_ringing = false;
        telephone_answered = true;
    }
    else
      write_message("It's not ringing!");
  break;
    case "call", "dial":
    if(your_place = p_pntpch) 
      write_message("This only takes incoming calls!!");
    else if((noun = "555-6969") && (! called_555_6969)) {
        write_message ("")
        write_message ("A voice says 'Hello, please answer the questions with one word answers")
        girl_name = InputBox("What's your favorite girls name?  ")
        girl_part = InputBox("Name a nice part of her anatomy!  ")
        girl_do = InputBox("What do you like to do with her?  ")
        your_part = InputBox("&& the best part of your body?   ")
        your_object = InputBox("Finally, your favorite object?    ")
        write_message ("He hangs up!")
        called_555_6969 = true;
          girl_name = LCase(girl_name)
          girl_part = LCase(girl_part)
          girl_do = LCase(girl_do)
          your_part = LCase(your_part)
          your_object = LCase(your_object)
    }
    else if((noun = "555-0439") && (! called_555_0439)) {
        write_long_message (34)
        called_555_0439 = true;
    }
    else if((noun = "555-0987") && married_to_girl && (! called_555_0987)) {
        write_long_message (35)
        wine_ordered = true;
        called_555_0987 = true;
        put_object ("wine", "c_hmoons");
    }
    else
      write_message("Nobody answers");

  break;
    case "break", "smash":
      if(! is_here(noun)) 
        find_me_one();
      else if(noun == "window") {
          write_message("Let me see if(I have a hammer");
          sleep (400);
          if(is_carried("hammer")) {
              write_message("The window smashes to pieces");
                  addexit (your_place, " and South");
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
          if(noun == "rope" && tied_to_bed) {
              write_message("I do && it worked! Thanks!");
              tied_to_bed = false;
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
    if(! is_here(noun)) 
      find_me_one();
    else
    {
    switch(noun)
    {
      case "pimp":
          if(hooker_fucked) 
            write_message("He says 'I don't want your cash - stud!'");
          else
            write_message("Try going up -- he'll take the cash)");
      case "hooker":
        write_message("You already paid the pimp, stupid!!");
        break;
      case "blonde", "waitress", "girl":
          write_message("She yells 'I'm ! a whore!!!' && kills me!");
          purgatory();
          break;
      case "preacher":
        write_message("Bring a girl here to marry -- he'll take the cash)");
        break;
      case "businessman":
        write_message("He's too drunk to do business right now!");
        break;
      case "bartender":
        write_message("Buy something -- he'll take the cash) {");
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
            if(your_place = "d_entrnc") {
                write_message("I show my passcard && the door opens");
                addexit (your_place, " and West");
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
    if(! is_here(noun) && (! is_carried(noun))) 
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
    case "quit", "stop", "bye":
      game_end();
      break;
    case "score":
      write_message ("");
      write_message ("Your score is '" & score & "' out of a possible '3'");
      break;
    case "save":
    //p = pos(" ", objnam)
    //if(p > 0) { objnam = Copy(objnam, 1, p - 1)
    //assign( save_file, save_file_name(objnam) )
    //rewrite (save_file)
    //write( save_file, game_position )
    //Close (save_file)
    //write_messagesave_file_name (objnam) + " saved"
      break;
    case "restore":
        //p = pos(" ", objnam)
        //if(p > 0) { objnam = Copy(objnam, 1, p - 1)
        //write_message("Restoring from " + save_file_name(objnam)
        //write_message
        ////assign( save_file, save_file_name(objnam) )
        //Reset (save_file)
        //iores = Ioresult
        //if(iores = 0) {
          
        //    read( save_file, game_position )
        //    iores = Ioresult
        //  }
        //if(iores = 1) {
        //  write_messagesave_file_name (objnam) + " never saved"
        //else if((iores=$90) || (iores=$91)) {
        //  write_messagesave_file_name (objnam) + " is bad"
        //else if(iores <> 0) {
          
        //    write_message
        ////    write_message( "I/O error ", iores )
        //  }
        //else
      //   write_long_message( integer(your_place) + 1 )
        //Close (save_file)
      break;
    case "go":
      if(tied_to_bed)
          write_message("But I'm tied to the bed!!!!!");
        else if(! (no_direction)) {
            if(your_place == "b_bedrm" && (direction == "north") && (! hooker_fucked)) 
              write_message("The Hooker says:  'Don't go there ... do me first!!'");
            else if(your_place == "c_hallwy" && (direction == "south") && (! married_to_girl)) 
              write_message("The door is locked shut!");
            else if(your_place == "d_entrnc" && (direction == west) && (! door_W_open)) 
              write_message("The door is closed!");
            else if(your_place == b_backrm && (direction == up) && (TV_channel != 6)) {
                if(cash < 20 || (! is_carried("wallet"))) 
                  write_message("The Pimp says I can't until I get $2000");
                else if(hooker_fucked) 
                  write_message("The Pimp says 'No -- the hooker can't take it anymore!'");
                else
                  {
                    write_message("The Pimp takes $2000 && says OK");
                    cash-= 20;
                    your_place = "b_bedrm";
                  }
                }
            else if(your_place == "b_balcny" && (direction == west) && (! rope_in_use)) {
              falling_down();
            }
            else
            { 
                //new_place = Path(your_place, direction)
                if(new_place != false) 
                  your_place = new_place;
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
    else if(your_place != "b_street" && your_place != "c_street" && your_place != "d_street") 
      write_message("I'm ! in the street, fool!!");
    else
        write_long_message (6);
        taxi_destination = InputBox("WHERE TO?");
        if(taxi_destination.contains("DISCO")) 
          new_place = "d_street";
          if(taxi_destination.contains("CASINO")) 
          new_place = "c_street";
          if(taxi_destination.contains("BAR")) 
          new_place = "b_street";
        else if(new_place = "your_place" || !new_place) 
          write_message("Huh? - Hail another!");
        else if(is_carried("wine")) {
            wine_in_taxi();
            your_place = new_place;
            put_object ("wine", false);
            objects_carried --;
        }
            write_message("We arrive && I get out.");
            your_place = new_place;
  break;
    case "take", "get", "grab":
    //if(noun = "inventory") {
      
    //    anything_carried = false
    //    for(noun = first_object To last_object
    //      if(is_carried(noun)) {
            
    //          if(! anything_carried) {
    //            write_message("I//m carrying the following:"
    //          anything_carried = true;
    //          write_message (object_name(noun))
    //          if(noun = "wallet") && (cash > 0)) {
    //            write_message (" with $" & cash & "00")
    //          else
    //            write_message
    //        }
    //    if(! anything_carried) {
    //      write_message("I//m ! carrying anything!!"
    //  }

    if(noun == "off") 
      write_message("You're ! a bird, fool!!");
    else if(noun == "all") {
        write_message("You hog!!!");
        sleep (300);
        write_message ("");
        //for(noun = first_object To last_object
        //  if(is_here(noun)) {
            
        //      write_message (object_name(noun) & ": ")
        //      if(objects_carried >= max_carried) {
        //        write_message ("I//m carrying too much!!!")
        //      else if(noun = takeable_objects) {
                
        //          if(your_place = "d_phrmcy") && (noun = "magazine" || noun = "rubber")) {
                    
        //              write_message ("The man says //Shoplifter!!// && shoots me")
        //              purgatory
        //            }
        //          else
                    
        //              put_object noun = youhavit
        //              objects_carried = objects_carried + 1
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
    else if(! is_here(noun)) 
      find_me_one();
    else if(objects_carried >= max_carried) 
      write_message("I'm carrying too much!!!");

    else if(! takeable_objects(noun)) 
      I_cant_do_that();

    else if(your_place == "d_phrmcy" && (noun == "magazine" || noun == "rubber")) {
        write_message("The man says 'Shoplifter!!' && shoots me");
        purgatory();
    }
    else if((noun = "water") && (! is_carried("pitcher"))) 
      write_message("Get me the pitcher so I don't spill it!");
    else if((noun = "candy") && (your_place = "b_bedrm") && (! hooker_fucked)) 
        write_message("The Hooker says:  'Don't take it ... do me first!!'");

    else if((noun = "rope") && rope_in_use) 
      write_message("It is tied to the balcony");
    else
      {
          OK();
        put_object(noun, "youhaveit");
        objects_carried ++;
        if(noun == "water")  pitcher_full = true;
        if(noun == "pitcher" && pitcher_full) 
          put_object ("water", "youhaveit")
      }
break;
    case "drop", "leave", "plant", "give":
    if(noun == "inventory" || noun == "taxi" || noun == "on" || noun == "off") 
      huh();

    else if(noun == "all") {
       anything_carried = false;
       write_message ("");
       for (var i = 0; i<5; i++){//noun = first_object; To last_object
         if(is_carried(noun)) {
            
             anything_carried = true;
             write_message (object_name(noun) & ": Dropped");
             put_object(noun, your_place);
             objects_carried --;
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
        put_object(noun, your_place);
        objects_carried --;
        if(noun == "pitcher" && pitcher_full) 
          put_object ("water", your_place);
        else if(noun == "rubber") 
          rubber_worn = false;
        else if(your_place == "d_disco" && (is_here("girl")) && (noun == "candy" || noun == "flowers" || noun == "ring")) 
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
        
        else if(is_here("bum") && (noun == "wine")) {
          
            if(object_place("knife", your_place) = false) {
                bum_tells_story();
                put_object ("knife", your_place);
            }            
            else
              write_message("The bum mutters 'That stuff made me puke!!  Get out of here!!!'");
            }
        else if(is_here("businessman") && (noun == "whiskey")) {
        if(object_place("control_unit", your_place) = false) {
            write_message("The guy gives me a TV controller!!");
            put_object ("control_unit", your_place);
            put_object ("whiskey", "nowhere");
        }
        else if(is_here("blonde") && (noun == "pills")) {
            write_long_message (27);
            put_object ("blonde", "nowhere");
            put_object ("pills", "nowhere");
        }
        else if((noun == "apple") && (your_place == "p_jacuzzi") && is_here("girl")) {
          
            write_long_message (20);
            apple_given = true;
        }  
        else
          OK();
      }
       }
      }
    break;
    case "look", "search", "examine", "read", "watch":
    if(no_object) 
      write_long_message (CInt(your_place) + 1);
    else if(noun = "all") 
      write_message("That's too much, one item at a time, please!!");
    else if(noun == "inventory" || noun == "on" || noun == "off") 
      huh();
    else if((! is_here(noun)) && (! is_carried(noun))) 
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
        put_object ("ring", your_place);
        break;
      case "graffiti":
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
        put_object ("passcard", your_place);
        break;
      case "blonde":
      if(your_place = "c_htdesk")  write_long_message (10);
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
        
          if(your_place == d_telbth) 
            write_message("A number is there - Call 555-6969 for a good time!");
          else
            I_see_nothing_special();
      break;
      case "closet":
          if(closet_open) {
            I_see_something();
            put_object ("doll", your_place);
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
                put_object ("pitcher", your_place);
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
        put_object ("apple", your_place);
        break;
      case "sign":
        write_message("It says 'Hail taxi here'");
        break;
      case "girl":
          if(your_place == p_jacuzzi) 
            write_long_message (5);
          else if(your_place == "d_disco" || (your_place == "c_marryc")) 
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
        put_object ("apple_core", your_place);
        break;
      case "flowers":
        write_message("They look beautiful!!!");
        break;
      case "apple_core":
        I_see_something();
        put_object ("seeds", your_place);
        break;
      case "pills":
          write_message("The label on the bottle says");
          write_message ("'Want to drive someone crazy with lust??  Try this!!!!'");
          break;
      case "plant":
          if(object_place("bushes", your_place) = false) {
              write_message("There's a group of bushes behind it!!");
              put_object ("bushes", your_place);
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
          if(cash > 0) {
              write_message ("");
              write_message ("It contains $" & cash & "00.");
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
        put_object ("magazine", your_place);
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
    if(! is_here(noun)) 
      find_me_one();
    else if(noun = "toilet") {
        write_long_message (36);
        sleep (300);
        write_message("I'm dead from the germs!!");
        purgatory();
        }
      else
      I_cant_do_that();
    break;
    case "open", "pull":
    if(! is_here(noun)) 
      find_me_one();
    else
    {
    switch(noun)
      {
      case "window":
        write_message("Won't budge");
        break;
      case "desk":
        if(! is_here("newspaper")) 
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
                  addexit(your_place, " and West");
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
          else if(is_here("doll")) 
          write_message("I can't unless I'm holding it close");
        else
          find_me_one();
        }
    else
      write_message("But the prime rate is already 257%!!");
break;
    case "play":
    if(noun = "slots") {
        if(is_here("slot")) {
            if(cash > 0 && (is_carried("wallet"))) 
              play_slot (cash);
            else{
              write_message("No Money!");
              purgatory();
            }
        }
        else
          write_message("OK, show me your slot....");
      }
    else if(noun == "cards" || noun == "21") {
        if(your_place = "c_21room") {
            if(cash > 0 && (is_carried("wallet"))) 
              play_21 (cash);
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

function GetLocationDescription(your_place){
  
}

function getlocationabbr(strloc)
{
  var i;
i = 2;
// Do Until Worksheets("Locations").Range("D" & i).Value = strloc
// i = i + 1
// Loop
// strloc = Worksheets("Locations").Range("E" & i).Value
}

function newlines(lines)

var i;

  for(i = 1 To lines
  write_message ""
  Next
} Function


function I_cant_go_that_way()
  write_message ("I can't go that way!")
} Function


function cant_do_that()
var messg;

  messg = Rnd(8) + 1
  Select Case messg
Case 1
write_message ("Huh?")
Case 2
write_message ("Ummm......huh?")
Case 3
write_message ("You're nuts!")
Case 4
write_message ("You can't be serious!!")
Case 5
write_message ("Not bloody likely!!")
Case 6
write_message ("I don't know how to.")
Case 7
write_message ("An interesting idea....")
Case 8
write_message ("I can't do that.")
  } Select
} Function


function huh()
  write_message ("Huh?")
} Function


function I_cant_do_that()
  write_message ("I can't do that!")
} Function


function I_dont_know_that_word()
  write_message ("I don't know that word!")
} Function


function find_me_one()
var messg;

  messg = Rnd(4) + 1
  write_message ("")
  Select Case messg
Case 1
write_message ("Find me one!!")
Case 2
write_message ("I don't see it here!")
Case 3
write_message ("I can't find it here!")
Case 4
write_message ("You have to find it first!")
  } Select
} Function


function I_dont_have_it()
  write_message ("I don't have it!!")
} Function


function I_already_have_it()
    write_message ("I already have it!!")
} Function


function I_see_nothing_special()
  write_message ("I see nothing special")
} Function


function I_see_something()
        
          write_message ("I see something!!!")
          'object_place object = your_place
} Function


function not_yet_but_maybe_later()
  write_message ("Not yet but maybe later!")
} Function


Function is_here(obj As String) As Boolean
if(InStr(1, Forms!frmmain!txtItems, obj) > 0) is_here = True
} Function

Function takeable_objects(obj As String) As Boolean
var rs As DAO.Recordset
if(obj = "control") obj = "control_unit"
Set rs = CurrentDb.OpenRecordset("SELECT * FROM OBJECTS WHERE abbr = '" & obj & "'")
rs.MoveFirst
if(rs!TAKEABLE = True)
takeable_objects = True
else
takeable_objects = False
} If
} Function

function addexit(strloc As String, strexit As String)
var rs As DAO.Recordset
DoCmd.SetWarnings False
DoCmd.RunSQL "UPDATE LOCATIONS SET OTHERFLAG = Yes WHERE abbr = '" & strloc & "'"
DoCmd.SetWarnings True

} Function
Function is_carried(obj As String) As Boolean
var objcount ;
var objects As String
if(InStr(1, Forms!frmmain!txtInventory, obj) > 0)
is_carried = True
else
is_carried = False
} If
} Function
function clrscr()
Forms!frmmain.txtActions = ""
Forms!frmmain.txtDescription = ""
} Function
function give_help()
var msg As String
var rs As DAO.Recordset
Set rs = CurrentDb.OpenRecordset("SELECT * FROM ACTIONS WHERE ActionID=30")
msg = rs!Action
MsgBox msg
} Function
function init_new_game()

var yesno As String
var place As String
var direction As String
var i;


  clrscr
  yesno = InputBox("Welcome to SOFTPORN ADVENTURE!!" & vbCrLf & "Do you need instructions? (y/n) ")
  if(yesno = "Y")
    give_help
  else
    newlines (2)
  } If
  
      your_place = b_bar

      objects_carried = 0
      TV_channel = 0
      money = 1000
      score = 0

      rope_in_use = False
      window_broken = False
      toilet_flushed = False
      called_555_0987 = False
      called_555_6969 = False
      called_555_0439 = False
      rubber_worn = False
      hooker_fucked = False
      door_W_open = False
      radio_listened = False
      wine_ordered = False
      telephone_ringing = False
      telephone_answered = False
      hole_peeped = False
      girl_2_fucked = False
      tied_to_bed = False
      drawer_open = False
      closet_open = False
      cabinet_open = False
      doll_inflated = False
      stool_climbed = False
      water_on = False
      pitcher_full = False
      seeds_planted = False
      seeds_watered = False
      apple_given = False
      candy_given = False
      flowers_given = False
      ring_given = False
      
      married_to_girl = False


} Function

function look_around()
var objcount ;
obj As objects
    exits;
    exitcount;
    exit      As directions
    anyexit   As Boolean
    var i, j, hpos, namelen;


  With game_position
    
      if(Not place_visited(your_place))
        write_long_message (your_place + 1)
      if((your_place = p_pntpch) And called_555_0439)
        
          if(Not telephone_answered And (Rnd(4) = 2))
            telephone_ringing = True
          if(telephone_ringing)
            write_message ("The telephone rings")
        }
      place_visited your_place = True
      newlines (2)

      gotoXY 1, 1
      clreol
      write_message (place_name(your_place))

      clreol
      write_message ("Items in sight are:  ")
      hpos = 23
      objcount = 0
      for(obj = first_object; obj<last_object;obj++)
{        
          if(is_here(obj))
{            
              if(objcount > 0)
 {               
                  write_message (", ");
                  hpos += 2;
 }
              objcount ++;
              namelen = Length(object_name(obj));
              if((hpos + 3 + namelen) > 80)
{                
                  write_message("");
                  clreol();
                  write_message ("                     ");
                  hpos = 23;
}
              write_message (object_name(obj));
              hpos = hpos + namelen;
            }
        }
      if(objcount = 0)
        write_message ("Nothing interesting.");
      else
        write_message("");
      clreol
      write_message ("Other areas are:  ")
      exitcount = 0
      for(intexit = first_direction To last_direction
        if(Path(your_place, intexit) <> nowhere)
          exitcount = exitcount + 1
      exits = exitcount
      if(exits = 0)
        write_message ("By magic!")
      else
        for(intexit = first_direction To last_direction
          if(Path(your_place, intexit) <> nowhere)
            
              if(exitcount < exits)
                
                  if(exitcount > 1)
                    write_message (", ")
                  elseif(exits > 1)
                    write_message (" and ")
                }
              exitcount = exitcount - 1
              write_message (direction_name(intexit))
            }

      write_message
      clreol
      for(i = 1 To 79
        write_message ("=")
      write_message
      clreol

      cursor_next_to_bottom

    Wend

}

function put_object(strobject,strloc)
{
var rs As DAO.Recordset
Set rs = CurrentDb.OpenRecordset("SELECT * FROM OBJECTS WHERE abbr = '" & strobject & "'")
rs.MoveFirst
if(strloc = "youhaveit")
DoCmd.SetWarnings False
DoCmd.RunSQL "UPDATE OBJECTS SET OBJECTS.VISIBLE = No WHERE (OBJECTS.ABBR='" & strobject & "');"
DoCmd.RunSQL "UPDATE OBJECTS SET OBJECTS.YOUHAVEIT = Yes WHERE (OBJECTS.ABBR='" & strobject & "');"
DoCmd.SetWarnings True
elseif(strloc = "nowhere")
DoCmd.SetWarnings False
DoCmd.RunSQL "UPDATE OBJECTS SET OBJECTS.VISIBLE = No WHERE (OBJECTS.ABBR='" & strobject & "');"
DoCmd.RunSQL "UPDATE OBJECTS SET OBJECTS.YOUHAVEIT = No WHERE (OBJECTS.ABBR='" & strobject & "');"
DoCmd.SetWarnings True
else
'if(rs!Visible = True) Stop
DoCmd.SetWarnings False
DoCmd.RunSQL "UPDATE OBJECTS SET OBJECTS.YOUHAVEIT = No WHERE (OBJECTS.ABBR='" & strobject & "');"
DoCmd.RunSQL "UPDATE OBJECTS SET OBJECTS.VISIBLE = Yes WHERE (OBJECTS.ABBR='" & strobject & "' AND OBJECTS.location = '" & strloc & "');"
DoCmd.SetWarnings True
} If
} Function
function list_objects(strloc As String)
var objcount ;
var objects As String
var rs As DAO.Recordset
Forms!frmmain.txtItems = ""
Set rs = CurrentDb.OpenRecordset("SELECT * FROM OBJECTS WHERE location = '" & strloc & "' and Visible = True")
if(rs.RecordCount > 0)
rs.MoveFirst
Do Until rs.EOF
if(Len(objects) > 0)
objects = objects & ", " & rs!object
else
objects = objects & rs!object
} If
rs.MoveNext
Loop
Forms!frmmain.txtItems = objects
} If
} Function

function object_place(nn As String, strloc As String) As Boolean
var rs As DAO.Recordset
'strloc = "d_street"
Set rs = CurrentDb.OpenRecordset("SELECT * FROM OBJECTS WHERE abbr = '" & nn & "' and location = '" & strloc & "'")
rs.MoveFirst
if(rs!Visible = True)
object_place = True
else
object_place = False
} If
} Function
function take_inventory(strloc As String, cash;)
var objcount ;
var objects As String
var thisitem As String
var rs As DAO.Recordset
Set rs = CurrentDb.OpenRecordset("SELECT * FROM OBJECTS WHERE YOUHAVEIT = True")
rs.MoveFirst
Do Until rs.EOF
thisitem = rs!object
if(thisitem = "A Wallet") thisitem = "A Wallet with $" & cash
if(Len(objects) > 0)
objects = objects & ", " & thisitem
else
objects = objects & thisitem
} If
rs.MoveNext
Loop
Forms!frmmain.txtInventory = objects

} Function

function write_long_message(messg_no;)
var i;
var msg As String
var rs As DAO.Recordset
Set rs = CurrentDb.OpenRecordset("SELECT * FROM ACTIONS WHERE ActionID=" & messg_no)
msg = rs!Action
Forms!frmmain.txtActions = msg
} Function
function game_end()
Application.Quit
} Function

function write_message(msg As String)
Forms!frmmain.txtActions = msg
} Function
function write_message(msg As String)
Forms!frmmain.txtActions = Forms!frmmain.txtActions & vbCrLf & msg
} Function

function look_graffiti()
var msg As String
msg = "+-------------------------------------------------------------------+" & vbCrLf _
& "|                                                                   |" & vbCrLf _
& "|        At my PC is where I sit                                    |" & vbCrLf _
& "|         when I feel like fondling it's bits!           I  h       |" & vbCrLf _
& "|                                                        '  e       |" & vbCrLf _
& "|       C                            The password is:    d  r       |" & vbCrLf _
& "|        o       A       a                                          |" & vbCrLf _
& "|         m        S       n           Bellybutton       l  f       |" & vbCrLf _
& "|      P   p         C       d                           i  l       |" & vbCrLf _
& "|       e   u          I             r                   k  o       |" & vbCrLf _
& "|        e   t           I     y       e                 e  p       |" & vbCrLf _
& "|     t   k   e                  e       c                  p       |" & vbCrLf _
& "|      h       r                           e             t  i       |" & vbCrLf _
& "|       e   b                      s         i           o  e       |" & vbCrLf _
& "|        y   e   f                   h         e            s       |" & vbCrLf _
& "|             f   r                    a         v       n          |" & vbCrLf _
& "|          P   o   e                     l         e     i          |" & vbCrLf _
& "|           o   r   a                      l             b          |" & vbCrLf _
& "|            k   e   k                                   b          |" & vbCrLf _
& "|             e       s                                  l          |" & vbCrLf _
& "|                                                        e          |" & vbCrLf _
& "|                                                                   |" & vbCrLf _
& "+-------------------------------------------------------------------+"
 
MsgBox msg
} Function
function purgatory()
var choice, door;
var cas As String

  'sleep 'sleep_time
  door = 0
    if(door = 0)
      write_long_message (65)
    else
      
        write_message ("")
        write_message ("You're still here!")
        write_message ("")
       
      }
    c = InputBox("Choose your dooras 1, 2 or 3??  ")
    choice = c
    door = (Int(Rnd(3)) + choice)
    game_position.game_ended = door = 1
} If
} Function

function bum_tells_story()
var i, j;

  'write_message
  write_message ("He looks at me and starts to speakas")
  'sleep 'sleep_time
  write_long_message (9)
  'write_message
  'sleep 'sleep_time
        write_message (" ")
      write_message ("Like I did!!")
    
  'for(i = 1 To 5
  '  write_message ("")
  'sleep 'sleep_time
  write_message ("He throws up and gives me back the bottle of wine.")
} Function


function watch_TV(TV_channel;)

var ch As String
jumpback:
    ch = InputBox("Which channel? (1-9) ")
    TV_channel = ch
    write_long_message (10 + TV_channel)
    ch = InputBox("Change the channel?  (y/n) ")
if(ch = "y") GoTo jumpback
} Function


function wine_in_taxi()

  write_long_message (58)
  'sleep 'sleep_time
  write_message ("")
  write_message ("What shall I do? ")
  'sleep 'sleep_time
  write_message ("")
  write_message ("")
  write_message ("The idiot cab driver backs over me and kills me!!!!!!")
  purgatory
} Function


function stab_someone()

  write_message ("")
  write_message ("OK - warmonger!")
  'sleep 'sleep_time
  write_message ("Parry!!")
  'sleep 'sleep_time
  write_message ("Thrust!!!")
  'sleep 'sleep_time
  write_message ("I just got myself!!")
  purgatory
} Function

function add_to_inventory(object As String)
var i;
i = 6
Do Until Worksheets("MAIN").Range("i" & i).Value = ""
if(i > 17) write_long_message "You're carrying too much": Exit Function
i = i + 1
Loop
Worksheets("MAIN").Range("i" & i).Value = object
} Function
function falling_down()
var i;

  for(i = 1 To 50
    write_message ("Aaaaaeeeeeiiiiiiii!!!!!!!!")
  'sleep 'sleep_time
  write_message ("Splaaatttttt!!!!!")
  if(game_position.Verb <> jump)
    
      'sleep 'sleep_time
      write_message
      write_message ("I should have used safety rope!!!!!!!!")
    }
  purgatory
} Function


function play_slot(money;)
DoCmd.OpenForm "frmSlots", acNormal
Forms!frmSLots!txtCash = money
  if(money < 1)
    
      write_message ("I'm broke!!! -- that means death!!!!!!!")
      purgatory
    } If
} Function
function play_21(money;)
DoCmd.OpenForm "frmSlots", acNormal
Forms21!txtCash = money
  if(money < 1)
    
      write_message ("I'm broke!!! -- that means death!!!!!!!")
      purgatory
    } If
} Function


function buy_rubber()
var answer As String
   var i;

    
      rubber_lubricated = "non-lubricated"
      rubber_ribbed = "non-ribbed"
      rubber_color = InputBox("The man leans over the counter and whispers 'What color?' ")
      rubber_flavor = InputBox("And what flavor? ")
      answer = InputBox("Lubricated or not? (y/n) ")
      if(answer = "Y") rubber_lubricated = "lubricated"
      answer = InputBox("Ribbed? (y/n) ")
      if(answer = "Y") rubber_ribbed = "ribbed"
      write_message ("He yells -- This pervert just bought a " & rubber_color & ", ")
      write_message (rubber_flavor & "-flavored, " & rubber_lubricated & ", " & rubber_ribbed & " rubber!!!!")
      write_message ("A lady walks by and looks at me in disgust!!!!")
} Function


function OK()

  write_message ("OK")
} Function

function GetLocationDescription(strloc As String)
var i;
var strexits As String
var rs As DAO.Recordset
var strobjects As String

Set rs = CurrentDb.OpenRecordset("SELECT * FROM Locations WHERE ABBR = '" & strloc & "'")
'Worksheets("MAIN").Range("b9").Value = Worksheets("Locations").Range("b" & i).Value
'Worksheets("MAIN").Range("c5").Value = Worksheets("Locations").Range("d" & i).Value
'Worksheets("MAIN").Range("c7").Value = Worksheets("Locations").Range("c" & i).Value
Forms!frmmain.txtLocation = rs!whereami
if(rs!otherflag = False)
Forms!frmmain.txtExits = rs!OTHERAREAS
else
Forms!frmmain.txtExits = rs!OTHERAREAS & " " & rs!OTHEREXITS
} If
Forms!frmmain.txtDescription = rs!Description
list_objects strloc

} Function
function xopen(object_open As Boolean)


  if(object_open)
    write_message ("It's already open!!")
  else
    
      OK
      object_open = True
    } If
} Function


function xclose(object_open As Boolean)


  if(Not object_open)
    write_message ("It's already closed!!")
  else
    
      OK
      object_open = False
    }
} Function





