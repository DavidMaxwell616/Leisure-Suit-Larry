
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
// DoCmd.SetWarnings False
// DoCmd.OpenQuery "update_carried_objects"
// DoCmd.OpenQuery "update_visible_objects"
// DoCmd.OpenQuery "update_exits"
// DoCmd.SetWarnings True
your_place = "b_bar";
max_carried = 7;
objects_carried = 1;
GetLocationDescription (your_place);
take_inventory(your_place, cash);
init_new_game();
}

function Submit_Click()
{
let strcommand;
let strexits;
let strVerb, noun;
if(txtCommand == "")  return;
strcommand = txtCommand;
strVerb = strcommand.split(' ')[0];
noun = strcommand.split(' ')[1];

if(strVerb == "GO ") 
{ 
    strcommand = Right(strcommand, Len(strcommand) - 3)
    strexits = txtExits
    txtCommand = "";
}

if(!strcommand.contains(' ')) {
if(strcommand == "N" || strcommand == "NORTH" && exits.includes("North")) {
if(your_place == "b_hallwy") {
your_place = "b_bathrm";
}
else if(your_place == "b_bar") {
your_place = "b_street";
}
else if(your_place == "b_inroom") {
your_place = "b_wledge";
}
else if(your_place == "b_bedrm") {
your_place = "b_balcny";
}
else if(your_place == "c_casino") {
your_place = "c_21room";
}
else if(your_place == "c_street") {
your_place = "c_marryc";
}
else if(your_place == "c_hmoons") {
your_place = "c_hallwy";
}
else if(your_place == "d_street") {
your_place = "d_entrnc";
}
else if(your_place == "d_telbth") {
your_place = "d_disco";
}
else if(your_place == "p_livrom") {
your_place = "p_pnpch";
}
else if(strcommand == "S" || strcommand == "SOUTH" && exits.includes("South")) 
{
if(your_place == "b_bathrm") {
your_place = "b_hallwy";
}
else if(your_place == "b_street") {
your_place = "b_bar";
}
else if(your_place == "b_balcny") {
your_place = "b_bedrm";
}
else if(your_place == "c_marryc") {
your_place = "c_street";
}
else if(your_place == "c_21room") {
your_place = "c_casino";
}
else if(your_place == "c_hallwy") {
your_place = "c_hmoons";
}
else if(your_place == "d_disco") {
your_place = "d_telbth";
}
else if(your_place == "d_entrnc") {
your_place = "d_street";
}
else if(your_place == "d_telbth") {
your_place = "d_disco";
}
else if(your_place == "p_pnpch") {
your_place = "p_livrom";
}
else if(strcommand == "W" || strcommand == "WEST" && exits.includes("West")) {
if(your_place == "b_bar") {
your_place = "b_hallwy";
}
else if(your_place == "b_backrm") {
your_place = "b_bar";
}
else if(your_place == "b_g_dump") {
your_place = "b_street";
}
else if(your_place == "b_balcny") {
your_place = "b_wledge";
}
else if(your_place == "d_entrnc") {
your_place = "d_disco";
}
else if(your_place == "c_htdesk") {
your_place = "c_hallwy";
}
else if(your_place == "c_casino") {
your_place = "c_street";
}
else if(your_place == "c_lobby") {
your_place = "c_casino";
}
else if(your_place == "d_phrmcy") {
your_place = "d_street";
}
else if(your_place == "p_kitchn") {
your_place = "p_pntfoy";
}
else if(strcommand == "E" || strcommand == "EAST" && exits.includes("East")) 
{
if(your_place == "b_bar") {
your_place = "b_backrm";
}
else if(your_place == "b_hallwy") {
your_place = "b_bar";
}
else if(your_place == "b_street") {
your_place = "b_g_dump";
}
else if(your_place == "c_street") {
your_place = "c_casino";
}
else if(your_place == "c_casino") {
your_place = "c_lobby";
}
else if(your_place == "c_hallwy") {
your_place = "c_htdesk";
}
else if(your_place == "d_disco") {
your_place = "d_entrnc";
}
else if(your_place == "d_street") {
your_place = "d_phrmcy";
}
else if(your_place == "p_pntfoy") {
your_place = "p_kitchn";
}
else if(strcommand == "U" || strcommand == "UP" && exits.includes("Up")) {
if(your_place == "b_backrm") {
your_place = "b_bedrm";
}
else if(your_place == "c_lobby") {
your_place = "c_htdesk";
}
else if(your_place == "p_pntfoy") {
your_place = "p_livrom";
}
else if(strcommand == "D" || strcommand =="DOWN" && exits.includes("Down")) {
if(your_place == "b_bedrm") {
your_place = "b_backrm";
}
else if(your_place = "b_balcny") {
your_place == "b_g_dump";
}
else if(your_place = "c_htdesk") {
your_place == "c_lobby";
}
else if(your_place = "p_livrom") {
your_place == "p_pntfoy";
}
}
txtActions = ""
jump();
}
}
switch (strVerb) {
    case "go":
    break;
    case "press", "push":
        {
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
        }

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
            //sorry_no_cash
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
             
                          if(noun = "rubber") {
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
           break;
      case "climb":
    {     

      if(noun == "stool") {
        
          if(is_here("stool")) {
            
              OK();
              stool_climbed = true;
          }
          else
            write_message("It's ! on the floor here!");
        }
      else if(is_here(noun) || is_carried(noun)) {
       I_cant_do_that();
      }  
      else
        find_me_one();
  }
  
break;  
        default:
        break;
}
//your_place = getlocationabbr(Worksheets("MAIN").Range("c5").Value)





  


case "water"
  

    if(noun = "on" || noun = "off") {
      
        if(! is_here("sink")) {
          write_message("Find a working sink!"
        else
          
            water_on = noun = "on"
            if(water_on) {
              
                write_message("Water is running in the sink"
                put_object "water", your_place
            else if(! pitcher_full) {
              
                OK
                put_object "water", False
              }
          }
 
    else if(! is_carried("water")) {
      write_message("I have no water!"

    else if(! is_here(noun)) {
      find_me_one

    else if(noun = "seeds") {
      
        put_object "water", False
        pitcher_full = False
        if(your_place = p_garden) {
          
            write_message("A tree sprouts!!"
            put_object "tree", your_place
            put_object "seeds", False
        else
          write_message("The seeds need better soil to grow."
      }

    else
      
        write_message("It pours into the ground."
        put_object "water", False
        pitcher_full = False
      }

case "fill"
  

    if(! (noun = "pitcher")) {
      I_cant_do_that

    else if(! is_carried("pitcher")) {
      write_message("I don't have it!"

    else if(! is_here("sink")) {
      write_message("Find a working sink!!"

    else if(! water_on) {
      write_message("No water!!"

    else if(pitcher_full) {
      write_message("The pitcher is already full!"

    else
      
        OK
        pitcher_full = True
      }



case "pour"
  

    if(! (noun = "water")) {
      I_cant_do_that

    else if(! is_carried("pitcher")) {
      write_message("You have nothing to pour it with!"
      
    else if(! pitcher_full) {
      write_message("The pitcher is empty."

    else if(your_place <> "p_garden") || (! is_here("seeds"))) {
      write_message("It pours into the ground."

    else
      
        write_message("A tree sprouts!!"
        put_object "tree", your_place
      }



case "listen"

    if(! is_here(noun)) && (! is_carried(noun))) {
      find_me_one

    else if(noun = "radio") {
      
        if(is_carried("radio")) {
          
            if(radio_listened) {
              write_message("Punk rock!!!!!"
            else
              
                write_message("An advertisement says 'Call 555-0987 for all your liquor needs!!!!'"
                radio_listened = True
              }
        else
          write_message("Take it && put it next to my ear!"
      }

    else
      write_message("Quiet as a mouse in heat!"
}

case "Close":
  

    if(! is_here(noun)) {
      find_me_one

    switch(noun

      case "desk"
                  
          Close (drawer_open)
          if(is_here("newspaper")) {
            put_object "newspaper", False
          }
      case "closet"
        
          Close (closet_open)
          if(is_here("doll")) {
            put_object "doll", False
          }
      case "cabinet"
        if(stool_climbed) {
          
            Close ("cabinet_open")
            if(is_here("pitcher")) {
              put_object "pitcher", False
            else
              write_message("I can't reach it!"
            }
        }
      case "door_west"
                  
          Close (door_W_open)
         // Path d_entrnc, west = false
      case else
        I_cant_do_that

    End Select
}

case "jump"
  

    if(your_place = "b_balcny" || your_place = "b_wledge") {
      falling_down

    else
      write_message("Whoooopeeeee!!!"

  }
  

//{ Softporn Adventure, include file 6 }


case "marry"
    if(noun <> "girl") {
      write_message("No way, weirdo!!"

    else if(! is_here("girl")) {
      write_message("No girl!!"

    else if(your_place <> "c_marryc") {
      not_yet_but_maybe_later

    else if((cash < 30) || (! is_carried("wallet"))) {
      
        if(cash < 20) || (! is_carried("wallet"))) {
          write_message("The girl says 'But you'll need $2000 for the honeymoon suite!'"
        write_message("The preacher says 'I'll need $1000 too!!'"
      }
    else
      
        write_long_message (33)
        cash = cash - 30
        put_object "girl", "c_hmoons"
        married_to_girl = True
        addexit your_place, " && South"

        //Path c_hallwy, south = c_hmoons
      }



case "fuck"

    if(! is_here(noun)) && (! is_carried(noun)) && (noun <> "you")) {
      find_me_one

    else
    switch(noun
   

       case "hooker"
        
          if(hooker_fucked) {
            write_message("She can't take it any more!!!!"
          else
            
              if(rubber_worn) {
                
                  hooker_fucked = True
                  score = score + 1
                  write_long_message (21)
              else
                
                  write_message("Oh no!!! I've got the dreaded atomic clap!!! I'm dead!!"
                  purgatory
                }
            }
        

      case "doll"
        
          if(is_carried("doll")) {
            if(doll_inflated) {
              
                write_long_message (22)
                put_object "doll", False
                objects_carried = objects_carried - 1
            else
              write_message("Inflate it first -- stupid!!!"
             }
            else
            write_message("I can't unless I'm holding it close"
        }

      case "girl"
        

 switch(your_place

case "c_hmoons"
              
                if(wine_ordered) {
                  
                    write_long_message (24)
                    girl_2_fucked = True
                    score = score + 1
                    tied_to_bed = True
                    put_object "girl", "p_jacuzi"
                    put_object "rope", your_place
                else
                  write_message("She says  'Get me wine!!!  I'm nervous!!'"
              }
case "p_jacuzi"
              
                if(apple_given) {
                  
                    score = score + 1
                    write_long_message (23)
                   // game_}ed = True
                else
                  not_yet_but_maybe_later
}
          End Select

case "bartender"
        
          write_message("He jumps over the bar && kills me!!"
          purgatory

      case "you"
      write_message("! tonight -- I have a headache!!"
      case "waitress"
      write_message("She kicks me in the groin && says 'Wise up - Buster!!'"
      case "blonde"
      write_message("She says 'I'm working! Leave me alone!!'"
      case "pimp"
      write_message("He says 'You'll never have enough cash for me - fool!'.  I guess he's gay!"
      case "bum"
      write_message("To do that I need vaseline!!"
      case "businessman"
      write_message("No way!!!  You're weird!!"
      case "off"
      write_message("Fuck off yourself, asshole!!!"

      case else
      write_message("Pervert!"

    End Select
 }
case "wear", "use"
    
    if(! is_here(noun)) && (! is_carried(noun)) && (noun <> "knife")) {
      find_me_one

    else
    switch(noun

      case "rubber"
        
          write_message("It tickles!!"
          rubber_worn = True
          put_object "rubber", "youhaveit"

      case "toilet"
          write_message(".....I got those constipation blues.........."
          writeln ("Ahhh...relief! Thanks")
      case "bed"
        
          write_message("Ahhhhh.......sleep!!!!"
          //sleep (1000)
          writeln ("No, I can't sleep!  Have to find me a girl!!!!")
      
      case "rope"
        
          if(is_carried("rope")) {
            
              if(your_place = "b_balcny") {
                
                  put_object "rope", your_place
                  rope_in_use = True
                  write_message("You tie the safety rope to the balcony"
              else
                not_yet_but_maybe_later
              }
          else
            I_dont_have_it
        }

      case "passcard"
        
          if(is_carried("passcard")) {
            
              if(your_place = "d_entrnc") {
                
                  write_message("I show my passcard && the door opens"
                addexit your_place, " && West"
              else
                not_yet_but_maybe_later
 }
          else
            I_dont_have_it
        }

      case "knife"
        
          write_message("Let me see if(I still have the knife!"
          //sleep (600)
          if(is_carried("knife")) {
            
              if(tied_to_bed) {
                
                  write_message("I do && it worked! Thanks!"
                  tied_to_bed = False
              else
                
                  write_message("Samurai sex fi}!!!!!!!!!!!!!!!!!!!"
                  //sleep (600)
                  writeln ("I stab myself in extacy!")
                  purgatory
              }
            
          else
            I_dont_have_it
        }

      case else
        I_cant_do_that

    End Select
}


case "answer"
  

    if(! is_here(noun)) {
      find_me_one

    else if(noun <> "telephone") {
      I_cant_do_that

    else if(telephone_ringing) {
      
        writeln ("")
        writeln ("A girl says  'Hi honey!  This is " & girl_name & ". Dear, why")
        writeln ("don't you forget this game && " & girl_do & " with me????")
        writeln ("After all, your " & your_part & " has always turned me on!!!!")
        writeln ("So bring a " & your_object & " && come play with my " & girl_part & "!'")
        writeln ("She hangs up!")
        telephone_ringing = False
        telephone_answered = True
 
    else
      write_message("It's ! ringing!"

}

case "call", "dial"

    if(your_place = p_pntpch) {
      write_message("This only takes incoming calls!!"

    else if((noun = "555-6969") && (! called_555_6969)) {
      
        writeln ("")
        writeln ("A voice says 'Hello, please answer the questions with one word answers")
        girl_name = InputBox("What's your favorite girls name?  ")
        girl_part = InputBox("Name a nice part of her anatomy!  ")
        girl_do = InputBox("What do you like to do with her?  ")
        your_part = InputBox("&& the best part of your body?   ")
        your_object = InputBox("Finally, your favorite object?    ")
        writeln ("He hangs up!")
        called_555_6969 = True
          girl_name = LCase(girl_name)
          girl_part = LCase(girl_part)
          girl_do = LCase(girl_do)
          your_part = LCase(your_part)
          your_object = LCase(your_object)

    else if((noun = "555-0439") && (! called_555_0439)) {
      
        write_long_message (34)
        called_555_0439 = True
  
    else if((noun = "555-0987") && married_to_girl && (! called_555_0987)) {
      
        write_long_message (35)
        wine_ordered = True
        called_555_0987 = True
        put_object "wine", "c_hmoons"
    else
      write_message("Nobody answers"

  }

case "break", "smash"

    if(! is_here(noun)) {
      find_me_one

    else if(noun = "window") {
      
        write_message("Let me see if(I have a hammer"
        //sleep (400)
        if(is_carried("hammer")) {
          
            write_message("The window smashes to pieces"
                addexit your_place, " && South"
        else
          I_dont_have_it
      }

    else
      I_cant_do_that
}


case "cut"
  

    write_message("Let me see if(I still have the knife!"
    //sleep (600)

    if(is_carried("knife")) {
      
        if(noun = "rope") && tied_to_bed) {
          
            write_message("I do && it worked! Thanks!"
            tied_to_bed = False
        else
          
            write_message("Samurai sex fiend!!!!!!!!!!!!!!!!!!!"
            //sleep (600)
            writeln ("I stab myself in extacy!")
            purgatory
          }

    else
      I_dont_have_it
}

case "dance"

  

    writeln ("")
    For i = 1 To 3
      
        //sleep (500)
        writeln ("Boogie Woogie!!!")
        //sleep (500)
        writeln ("Yeh Yeh Yeh!!!")
      Next
    writeln ("I got the steps, man!!")



case "kill"
  
  write_message("Try using a knife!!!"


case "pay"

  

    if(! is_here(noun)) {
      find_me_one

    else
    
    switch(noun
    
      case "pimp"
        
          if(hooker_fucked) {
            write_message("He says 'I don't want your cash - stud!'"
          else
            write_message("Try going up -- he'll take the cash) {"
        }

      case "hooker"
        write_message("You already paid the Pimp, stupid!!"

      case "blonde", "waitress", "girl"
        
          write_message("She yells 'I'm ! a whore!!!' && kills me!"
          purgatory
        
      case "preacher"
        write_message("Bring a girl here to marry -- he'll take the cash) {!"

      case "businessman"
        write_message("He's too drunk to do business right now!"

      case "bartender"
        write_message("Buy something -- he'll take the cash) {"

      case "dealer"
        write_message("Why ! play 21 instead?  You'll lose anyway, fool!"

     case else
      I_cant_do_that

    End Select
}

case "smoke"

    if(noun = "plant") {
      
        write_message("A cop beats me over the head!!!!"
        purgatory

    else
      I_cant_do_that

}
case "show"
  

    if(noun = "passcard") {
      
        if(is_carried("passcard")) {
          
            if(your_place = "d_entrnc") {
              
                write_message("I show my passcard && the door opens"
                addexit your_place, " && West"
            else
              not_yet_but_maybe_later
          }
        else
          I_dont_have_it
      }

    else
      I_cant_do_that
}

case "smell"
    if(! is_here(noun)) && (! is_carried(noun))) {
      find_me_one

    else
    
    switch(noun
      case "blonde"
      write_message("Hmmm.....nice!!!!"
      case "hooker"
      write_message("OK, who's eating tuna fish?!?!?!"
      case "toilet"
      write_message("Arghhh...I'm going to puke!!!!!!"
      case "plant"
      write_message("Ahhh..chooo!!!!!!  I guess I'm allergic!"
      case "garbage"
      write_message("Yechhhhh!!!!!"
      case "flowers"
      write_message("Smells like perfume!!!"
      case else
      write_message("Smells OK"
    End Select
}


case "help"
    
   // give_help

case "kiss"
    
    write_message("Don't do that!!!!  It gets me excited!!"

case "stab"
    
    stab_someone

case "quit", "stop", "bye"
    game_end

case "score"
    writeln ("")
    writeln ("Your score is '" & score & "' out of a possible '3'")


case "save"
    //p = pos(" ", objnam)
    //if(p > 0) { objnam = Copy(objnam, 1, p - 1)
    //assign( save_file, save_file_name(objnam) )
    //rewrite (save_file)
    //write( save_file, game_position )
    //Close (save_file)
    //write_messagesave_file_name (objnam) + " saved"


case "restore"
    
    //p = pos(" ", objnam)
    //if(p > 0) { objnam = Copy(objnam, 1, p - 1)
    //write_message("Restoring from " + save_file_name(objnam)
    //writeln
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
      
    //    writeln
    ////    writeln( "I/O error ", iores )
    //  }
    //else
   //   write_long_message( integer(your_place) + 1 )
    //Close (save_file)



case "go"

if(tied_to_bed) {
      write_message("But I'm tied to the bed!!!!!"

    else if(! (no_direction)) {
      
        if(your_place = "b_bedrm") && (direction = "north") && (! hooker_fucked)) {
          write_message("The Hooker says:  'Don't go there ... do me first!!'"

        else if(your_place = "c_hallwy") && (direction = "south") && (! married_to_girl)) {
          write_message("The door is locked shut!"

        else if(your_place = "d_entrnc") && (direction = west) && (! door_W_open)) {
          write_message("The door is closed!"

        else if(your_place = b_backrm) && (direction = up) && (TV_channel <> 6)) {
          
            if(cash < 20) || (! is_carried("wallet"))) {
              write_message("The Pimp says I can't until I get $2000"
            else if(hooker_fucked) {
              write_message("The Pimp says 'No -- the hooker can't take it anymore!'"
            else
              
                write_message("The Pimp takes $2000 && says OK"
                cash = cash - 20
                your_place = "b_bedrm"
              }
      
        else if(your_place = "b_balcny") && (direction = west) && (! rope_in_use)) {
          falling_down

        else
          
            //new_place = Path(your_place, direction)
            if(new_place <> False) {
              your_place = new_place
            else
              I_cant_go_that_way
            }
       }
    else
      I_cant_do_that
}


case "hail"
  

    if(noun <> "taxi") {
      write_message("Who are you kidding?  You're pulling at straws, fool!!"

    else if(your_place <> "b_street" && your_place <> "c_street" && your_place <> "d_street")) {
      write_message("I'm ! in the street, fool!!"

    else
        write_long_message (6)
        taxi_destination = InputBox("WHERE TO?")
        if(Left(UCase(taxi_destination), 4) = "DISC") {
          new_place = "d_street"
        else if(Left(UCase(taxi_destination), 4) = "CASI") {
          new_place = "c_street"
        else if(Left(UCase(taxi_destination), 3) = "BAR") {
          new_place = "b_street"
        else if(new_place = "your_place" || new_place = False) {
          write_message("Huh? - Hail another!"
        else if(is_carried("wine")) {
          
            wine_in_taxi
            your_place = new_place
            put_object "wine", False
            objects_carried = objects_carried - 1
        }
          
            write_message("We arrive && I get out."
            your_place = new_place
}

case "take", "get", "grab"
  

    //if(noun = "inventory") {
      
    //    anything_carried = False
    //    For noun = first_object To last_object
    //      if(is_carried(noun)) {
            
    //          if(! anything_carried) {
    //            write_message("I//m carrying the following:"
    //          anything_carried = True
    //          writeln (object_name(noun))
    //          if(noun = "wallet") && (cash > 0)) {
    //            writeln (" with $" & cash & "00")
    //          else
    //            writeln
    //        }
    //    if(! anything_carried) {
    //      write_message("I//m ! carrying anything!!"
    //  }

    if(noun = "off") {
      write_message("You're ! a bird, fool!!"

    else if(noun = "all") {
      
        write_message("You hog!!!"
        //sleep (300)
        writeln ("")
        //For noun = first_object To last_object
        //  if(is_here(noun)) {
            
        //      writeln (object_name(noun) & ": ")
        //      if(objects_carried >= max_carried) {
        //        writeln ("I//m carrying too much!!!")
        //      else if(noun = takeable_objects) {
                
        //          if(your_place = "d_phrmcy") && (noun = "magazine" || noun = "rubber")) {
                    
        //              writeln ("The man says //Shoplifter!!// && shoots me")
        //              purgatory
        //            }
        //          else
                    
        //              put_object noun = youhavit
        //              objects_carried = objects_carried + 1
        //              if(noun = "water") { pitcher_full = True
        //              if(noun = "pitcher") && pitcher_full) {
        //                put_object "water" = youhavit
        //              writeln ("Taken")
        //            }
        //        }
        //      else
        //        cant_do_that
        //    }
        //}

    else if(is_carried(noun)) {
      I_already_have_it

    else if(! is_here(noun)) {
      find_me_one

    else if(objects_carried >= max_carried) {
      write_message("I'm carrying too much!!!"

    else if(! takeable_objects(noun)) {
      I_cant_do_that

    else if(your_place = "d_phrmcy") && (noun = "magazine" || noun = "rubber")) {
      
        write_message("The man says 'Shoplifter!!' && shoots me"
        purgatory

    else if((noun = "water") && (! is_carried("pitcher"))) {
      write_message("Get me the pitcher so I don't spill it!"

    else if((noun = "candy") && (your_place = "b_bedrm") && (! hooker_fucked)) {
          write_message("The Hooker says:  'Don't take it ... do me first!!'"

    else if((noun = "rope") && rope_in_use) {
      write_message("It is tied to the balcony"

    else
      
        OK
        put_object noun, "youhaveit"
        objects_carried = objects_carried + 1
        if(noun = "water") { pitcher_full = True
        if(noun = "pitcher") && pitcher_full) {
          put_object "water", "youhaveit"
      }
}

case "drop", "leave", "plant", "give"
  

    if(noun = "inventory" || noun = "taxi" || noun = "on" || noun = "off") {
      huh

//    else if(noun = "all") {
      
//        anything_carried = False
//        writeln ("")
//        For noun = first_object To last_object
//          if(is_carried(noun)) {
            
//              anything_carried = True
//              writeln (object_name(noun) & ": Dropped")
//              put_object noun = your_place
//              objects_carried = objects_carried - 1
//            }
//        if(! anything_carried) {
//          writeln ("I did//t carry anything!!")
//      }

//    else if(! is_carried(noun)) {
//      I_dont_have_it

    else
      
        put_object noun, your_place
        objects_carried = objects_carried - 1
        if(noun = "pitcher") && pitcher_full) {
          put_object "water", your_place
        else if(noun = "rubber") {
          rubber_worn = False
        else if(your_place = "d_disco") && (is_here("girl")) && (noun = "candy" || noun = "flowers" || noun = "ring")) {
            switch(noun
              case "candy"
                  write_message("She smiles && eats a couple!!"
                  candy_given = True
              
              case "flowers"
                
                  write_message("She blushes profusely && puts them in her hair!"
                  flowers_given = True
                  put_object "flowers", False
              
              case "ring"
                
                  write_message("She blushes && puts it in her purse."
                  ring_given = True
                  put_object "ring", False
            
            End Select
            if(candy_given && flowers_given && ring_given) {
              
                write_message("She says: 'See you at the Marriage Center!!'"
                put_object "girl", "c_marryc"
              }
        
        else if(is_here("bum") && (noun = "wine")) {
          
            if(object_place("knife", your_place) = False) {
              
                bum_tells_story
                put_object "knife", your_place
            
            else
              write_message("The bum mutters 'That stuff made me puke!!  Get out of here!!!'"
            }
        else if(is_here("businessman") && (noun = "whiskey")) {
        if(object_place("control_unit", your_place) = False)) {
          
            write_message("The guy gives me a TV controller!!"
            put_object "control_unit", your_place
            put_object "whiskey", "nowhere"
        }
        else if(is_here("blonde") && (noun = "pills")) {
          
            write_long_message (27)
            put_object "blonde", "nowhere"
            put_object "pills", "nowhere"
        
        else if((noun = "apple") && (your_place = "p_jacuzi") && is_here("girl")) {
          
            write_long_message (20)
            apple_given = True
        
        else
          OK
      }
}


case "look", "search", "examine", "read", "watch"
  

    if(no_object) {
      write_long_message (CInt(your_place) + 1)

    else if(noun = "all") {
      write_message("That's too much, one item at a time, please!!"

    else if(noun = "inventory" || noun = "on" || noun = "off") {
      huh

    else if((! is_here(noun)) && (! is_carried(noun))) {
      find_me_one

    else
      switch(noun

      case "desk"
        
          if(drawer_open) {
            I_see_something
            write_long_message 2
          else
            write_message("It's drawer is shut"
        }

      case "washbasin"
         I_see_something
        put_object "ring", your_place
      case "graffiti"
        look_graffiti

      case "mirror"
        write_message("There's a pervert looking back at me!!"

      case "toilet"
        write_message("Hasn't been flushed in ages!  Stinks!!!"

      case "businessman"
        write_message("He looks like a whiskey drinker to me!!"

      case "button"
        write_message("Says Push."

      case "bartender"
        write_message("He's waiting for me to buy something!"

      case "pimp"
        
          write_message("He's wearing a button proclaiming -- Support your local Pimp, gimme $2000!!!"

      case "hooker"
        write_long_message (1)

      case "billboard"
        write_long_message (38)

      case "TV"
        
         if(! is_carried("control unit")) {
           write_message("To watch TV, I need the remote control unit!!"
         else if(! hooker_fucked) {
           write_message("The Pimp says I can't watch TV"
         else
           watch_TV (TV_channel)
        }

      case "slot_machines"
        write_message("Playing them might be more fun...."

      case "ashtray"
        I_see_something
        put_object "passcard", your_place
        
      case "blonde"
      if(your_place = "c_htdesk") { write_long_message (10)

      case "bum"
        write_message("He grumbles -- I'll tell you a story for a bottle of wine....."

      case "peephole"
        if(hole_peeped) {
          write_message("All windows at the hotel across the road have their curtains shut."
        else
          
            write_long_message (25)
              hole_peeped = True
          }

      case "door"
        
          if(door_W_open) {
            write_message("The door is open"
          else
            
              write_message("The sign on the door says "
              writeln ("'Entry by showing passcard - Club members && their guests only!'")
            }
 
      case "waitress"
        write_message("She ignores you!"

      case "telephone"
        
          if(your_place = d_telbth) {
            write_message("A number is there - Call 555-6969 for a good time!"
          else
            I_see_nothing_special
        }

      case "closet"
        
          if(closet_open) {
            I_see_something
            put_object "doll", your_place
          else
            write_message("It's closed"
        }

      case "sink"
        write_message("The sign over the sink says 'Water on or off to operate'"

      case "elevator"
        write_message("It's doors are closed"

      case "dealer"
        write_message("He's waiting for me to play"

      case "cabinet"
        
          if(stool_climbed) {
            
              if(cabinet_open) {
                I_see_something
                put_object "pitcher", your_place
              else
                write_message("It's closed"
            }
          else
            I_see_nothing_special
        }

      case "bushes"
        write_message("Entering them would be kinky!!!!"

      case "tree"
        I_see_something
        put_object "apple", your_place

      case "sign"
        write_message("It says 'Hail taxi here'"

      case "girl"
        
          if(your_place = p_jacuzi) {
            write_long_message (5)
          else if(your_place = "d_disco") || (your_place = "c_marryc")) {
            write_long_message (4)
          else
            write_message("She slaps me && yells 'Pervert!!!!!'"
        }

      case "newspaper"
        
          if(is_carried("newspaper")) {
            write_long_message 2
          else
            I_dont_have_it
        }

      case "garbage"
        I_see_something
        put_object "apple_core", your_place

      case "flowers"
        write_message("They look beautiful!!!"

      case "apple_core"
        I_see_something
        put_object "seeds", your_place

      case "pills"
        
          write_message("The label on the bottle says"
          writeln ("'Want to drive someone crazy with lust??  Try this!!!!'")

      case "plant"
        
          if(object_place("bushes", your_place) = False) {
            
              write_message("There's a group of bushes behind it!!"
              put_object "bushes", your_place
            }
            
            I_see_nothing_special


      case "radio"
        write_message("Maybe I should listen..."

      case "magazine"
        
          if(is_carried("magazine")) {
            write_long_message (3)
          else
            I_dont_have_it
        }

      case "rubber"
        
          if(is_carried("rubber")) {
            write_message("It's " & rubber_color & ", " & rubber_flavor & "-flavored, " + rubber_lubricated & ", && " & rubber_ribbed
          else
            I_dont_have_it
        }

      case "wallet"
        
          if(cash > 0) {
            
              writeln ("")
              writeln ("It contains $" & cash & "00.")
          
          else
            write_message("It's empty"
        }

      case "doll"
        
          if(doll_inflated) {
            write_message("It's inflated"
          else
            write_message("It's rolled up in a little ball"
        }

      case "pitcher"
        
          if(pitcher_full) {
            write_message("It's full of water"
          else
            write_message("It's empty"
        }

      case "rack"
        I_see_something
        put_object "magazine", your_place

      case "curtain"
        write_message("It's on the east wall"

      case else
        I_see_nothing_special

      End Select

}

case "flush"
  

    if(! is_here(noun)) {
      find_me_one

    else if(noun = "toilet") {
      
        write_long_message (36)
        //sleep (300)
        write_message("I'm dead from the germs!!"
        purgatory
    
    else
      I_cant_do_that

}
case "open", "pull"
  

    if(! is_here(noun)) {
      find_me_one

    else
    switch(noun

      case "window"
        write_message("Won't budge"

      case "desk"
        if(! is_here("newspaper")) { put_object "newspaper", "b_hallwy"

      case "door_west"
        
          if(door_W_open) {
            write_message("It's already open!!"
          else
            
              write_message("A voice asks 'Passcard?'  I search in my pockets &&..."
              if(is_carried("passcard")) {
                
                  writeln ("I have it!  The door opens!")
                  door_W_open = True
                  addexit your_place, " && West"
              
              else
                writeln ("I don't have it!!")
            }
          }
      case "curtain"
        write_message("It seems to be remotely controlled"

      case "elevator"
        write_message("Push the button to open elevator"

      case "closet"
        xopen (closet_open)

      case "cabinet"
        if(stool_climbed) {
          xopen (cabinet_open)
        else
          write_message("I can't reach it!!"
      }
      case else
        I_cant_do_that


  End Select
}

case "inflate"
  

    if(noun = "doll") {
      
        if(is_carried("doll")) {
          
            if(doll_inflated) {
              write_message("You've already inflated it, stupid!!"
            else
              
                OK
                doll_inflated = True
             }
        else if(is_here("doll")) {
          write_message("I can't unless I'm holding it close"
        else
          find_me_one
        }

    else
      write_message("But the prime rate is already 257%!!"
}


case "play"
    if(noun = "slots") {

      
        if(is_here("slot")) {
          
            if(cash > 0) && (is_carried("wallet"))) {
              play_slot (cash)
            else
              //sorry_no_cash
              write_message("No Money!"
              purgatory
          }
        else
          write_message("OK, show me your slot...."
      }

    else if(noun = "cards" || noun = "21") {
      
        if(your_place = "c_21room") {
          
            if(cash > 0) && (is_carried("wallet"))) {
              play_21 (cash)
            else
              write_message("No Money!"
              purgatory
          }
        else
          not_yet_but_maybe_later
      }

    else
      write_message("Playful bugger, eh??"
}

case else
    I_cant_do_that

End Select
jump:
GetLocationDescription (your_place)
take_inventory your_place, cash
Me.txtCommand.SetFocus

}

*/