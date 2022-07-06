let inventory=[];
let your_place;
let new_place;
let cash;
let max_carried;
let objects_carried ;
let TV_channel;
let money;
let score;
let rope_in_use = false;
let window_broken = false;
let toilet_flushed = false;
let called_555_0987 = false;
let called_555_6969 = false;
let called_555_0439 = false;
let rubber_worn = false;
let hooker_fucked = false;
let door_W_open = false;
let radio_listened = false;
let wine_ordered = false;
let telephone_ringing = false;
let telephone_answered = false;
let hole_peeped = false;
let girl_2_fucked = false;
let tied_to_bed = false;
let drawer_open = false;
let closet_open = false;
let cabinet_open = false;
let doll_inflated = false;
let stool_climbed = false;
let water_on = false;
let pitcher_full = false;
let seeds_planted = false;
let seeds_watered = false;
let apple_given = false;
let candy_given = false;
let flowers_given = false;
let ring_given = false;
let married_to_girl = false;


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
//Me.txtCommand.SetFocus
}

function Command1_Click()
let strcommand;
let strexits;
let strVerb, noun;
if(Me.txtCommand == "")  return;
strcommand = UCase(Me.txtCommand.Text);
if(Left(strcommand, 3) == "GO ") 
{ 
    strcommand = Right(strcommand, Len(strcommand) - 3)
strexits = Me.txtExits
Me.txtCommand = ""
}
if(InStr(1, strcommand, " ") == 0) {
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
Forms!frmmain.txtActions = ""
jump();
}
strVerb = strcommand.split(' ')[0];
noun = strcommand.split(' ')[1];
}

//your_place = getlocationabbr(Worksheets("MAIN").Range("c5").Value)
switch(strVerb)
{
case "go":
break;
case "press", "push":
    {
    if(noun == "button") {
      
        if(your_place == "b_bar") {
          
            password = InputBox("A voice says  //What's the password?'  (one word) ")
            if(UCase(password) = "BELLYBUTTON") {
              
                write_message "The curtain pulls back!!"
                addexit your_place, " && East"
            Else
              write_message "Wrong!!"
          }
        else if(your_place = "c_htdesk" || your_place = "p_pntfoy") {
          
            if(is_here("blonde")) {
              write_message "The blonde says  'You can't go there!'"
            Else
              
                write_long_message (7)
                if(your_place = "c_htdesk") {
                  your_place = "p_pntfoy"
                Else
                  your_place = "c_htdesk"
              }
        }
        Else
          not_yet_but_maybe_later
        }
    Else
      write_message "Pushy chump, eh???"
    }



Case "enter"
  
  

    if(Not is_here("noun")) {
      find_me_one

    else if(noun = "bushes") {
      your_place = p_garden

    else if(noun = "window") {
      
        if(window_broken) {
          your_place = b_inroom
        Else
          not_yet_but_maybe_later
      }

    else if(noun = "door_west") {
      
        if(door_W_open) {
          your_place = d_disco
        Else
          write_message "The door is closed"
      }

    else if(noun = "elevator") {
      write_message "Push the button to enter the elevator"

    Else
      I_cant_do_that
    }


Case "eat"
  

    if(Not is_here(noun)) && (Not is_carried(noun))) {
      find_me_one

    else if(noun = "blonde" || noun = "waitress" || noun = "hooker" || noun = "girl") {
      
        write_long_message (8)
        purgatory
     
    else if(noun = "mushroom") {
      
        write_long_message (31)
        your_place = Int(3 * Rnd) + 1
        //sleep (600)
        write_long_message (your_place) + 1)
   
    else if(noun = "garbage" || noun = "apple_core") {
      write_message "Too moldy!"

    else if(noun = "apple") {
      write_message "Sorry ... not hungry!"

    else if(noun = "pills") {
      
        write_long_message (26)
        purgatory
  
    Else
      write_message "Tastes awful!"
    }

Case "drink"
  

    if(Not is_carried(noun)) {
      I_dont_have_it

    Else
      
        switch(noun
          
          Case "whiskey"
           write_message "This stuff is rot-gut!  Give it to someone ... I don't want it."
          Case "beer"
          write_message "Heh...heh...hey!!!!  This stuff's OK!"
          Case "wine"
          write_message "Sour grapes...."
          Case "water"
          write_message "Thanks!"
          Case Else
          write_message "Get your head examined!!!!"
          End Select
        
        if(noun = "beer" || noun = "water") {
          
            //put_object noun = false
            objects_carried = objects_carried - 1
          }
      }

  

Case "buy", "order"
//cash = 240
    if(cash < 1) || (is_carried("wallet") = False)) {
      purgatory
      //sorry_no_cash
    Else

      switch(noun
      
        Case "whiskey", "beer"
          
            if(your_place <> "b_bar")) {
              not_yet_but_maybe_later
            Else
       
                if(object_place(noun, your_place) = True) {
                  write_message "Sorry ... all out!"
       
                Else
       
                    write_message "I give the bartender $5 && he places it on the bar."
                    cash = cash - 5
                    put_object noun, your_place
                  }
            }
        Case "wine"
       
            if(your_place <> "d_disco")) {
              not_yet_but_maybe_later
            else if(object_place(noun, your_place) = True) {
       
                  write_message "All out!"
                Else
       
                    write_message "The waitress takes $100 && says she'll return"
                    //sleep (3000)
                    write_message "Poor service!!!"
                    //sleep (2000)
                    cash = cash - 1
                    put_object noun, your_place
                  }
       
       

       Case "rubber", "magazine"
          
            if(your_place <> "d_phrmcy")) {
              not_yet_but_maybe_later
            else if(is_here(noun)) {
       
                    if(noun = "rubber") {
                    buy_rubber
                    put_object noun, "youhaveit"
                    objects_carried = objects_carried + 1
                    Else
                    write_message "He takes $100 && gives me the magazine"
                    cash = cash - 1
                    put_object noun, "youhaveit"
                    }
                Else
                  write_message "Sorry!!! --- sold out!"
              }
          

        Case "hooker"
       
            if(is_here("hooker")) {
              write_message "You've already paid the pimp, stupid!!!!"
            Else
              find_me_one
            }
        Case Else
       
        write_message "cash can't buy everything!!!!"
       End Select
}
  


Case "climb"
  

    if(noun = "stool") {
      
        if(is_here("stool")) {
          
            OK
            stool_climbed = True
        Else
          write_message "It's not on the floor here!"
      }

    else if(is_here(noun) || is_carried(noun)) {
     I_cant_do_that

    Else
      find_me_one
}


Case "water"
  

    if(noun = "on" || noun = "off") {
      
        if(Not is_here("sink")) {
          write_message "Find a working sink!"
        Else
          
            water_on = noun = "on"
            if(water_on) {
              
                write_message "Water is running in the sink"
                put_object "water", your_place
            else if(Not pitcher_full) {
              
                OK
                put_object "water", False
              }
          }
 
    else if(Not is_carried("water")) {
      write_message "I have no water!"

    else if(Not is_here(noun)) {
      find_me_one

    else if(noun = "seeds") {
      
        put_object "water", False
        pitcher_full = False
        if(your_place = p_garden) {
          
            write_message "A tree sprouts!!"
            put_object "tree", your_place
            put_object "seeds", False
        Else
          write_message "The seeds need better soil to grow."
      }

    Else
      
        write_message "It pours into the ground."
        put_object "water", False
        pitcher_full = False
      }

Case "fill"
  

    if(Not (noun = "pitcher")) {
      I_cant_do_that

    else if(Not is_carried("pitcher")) {
      write_message "I don't have it!"

    else if(Not is_here("sink")) {
      write_message "Find a working sink!!"

    else if(Not water_on) {
      write_message "No water!!"

    else if(pitcher_full) {
      write_message "The pitcher is already full!"

    Else
      
        OK
        pitcher_full = True
      }



Case "pour"
  

    if(Not (noun = "water")) {
      I_cant_do_that

    else if(Not is_carried("pitcher")) {
      write_message "You have nothing to pour it with!"
      
    else if(Not pitcher_full) {
      write_message "The pitcher is empty."

    else if(your_place <> "p_garden") || (Not is_here("seeds"))) {
      write_message "It pours into the ground."

    Else
      
        write_message "A tree sprouts!!"
        put_object "tree", your_place
      }



Case "listen"

    if(Not is_here(noun)) && (Not is_carried(noun))) {
      find_me_one

    else if(noun = "radio") {
      
        if(is_carried("radio")) {
          
            if(radio_listened) {
              write_message "Punk rock!!!!!"
            Else
              
                write_message "An advertisement says 'Call 555-0987 for all your liquor needs!!!!'"
                radio_listened = True
              }
        Else
          write_message "Take it && put it next to my ear!"
      }

    Else
      write_message "Quiet as a mouse in heat!"
}

Case "Close"
  

    if(Not is_here(noun)) {
      find_me_one

    switch(noun

      Case "desk"
                  
          Close (drawer_open)
          if(is_here("newspaper")) {
            put_object "newspaper", False
          }
      Case "closet"
        
          Close (closet_open)
          if(is_here("doll")) {
            put_object "doll", False
          }
      Case "cabinet"
        if(stool_climbed) {
          
            Close ("cabinet_open")
            if(is_here("pitcher")) {
              put_object "pitcher", False
            Else
              write_message "I can't reach it!"
            }
        }
      Case "door_west"
                  
          Close (door_W_open)
         // Path d_entrnc, west = false
      Case Else
        I_cant_do_that

    End Select
}

Case "jump"
  

    if(your_place = "b_balcny" || your_place = "b_wledge") {
      falling_down

    Else
      write_message "Whoooopeeeee!!!"

  }
  

//{ Softporn Adventure, include file 6 }


Case "marry"
    if(noun <> "girl") {
      write_message "No way, weirdo!!"

    else if(Not is_here("girl")) {
      write_message "No girl!!"

    else if(your_place <> "c_marryc") {
      not_yet_but_maybe_later

    else if((cash < 30) || (Not is_carried("wallet"))) {
      
        if(cash < 20) || (Not is_carried("wallet"))) {
          write_message "The girl says 'But you'll need $2000 for the honeymoon suite!'"
        write_message "The preacher says 'I'll need $1000 too!!'"
      }
    Else
      
        write_long_message (33)
        cash = cash - 30
        put_object "girl", "c_hmoons"
        married_to_girl = True
        addexit your_place, " && South"

        //Path c_hallwy, south = c_hmoons
      }



Case "fuck"

    if(Not is_here(noun)) && (Not is_carried(noun)) && (noun <> "you")) {
      find_me_one

    Else
    switch(noun
   

       Case "hooker"
        
          if(hooker_fucked) {
            write_message "She can't take it any more!!!!"
          Else
            
              if(rubber_worn) {
                
                  hooker_fucked = True
                  score = score + 1
                  write_long_message (21)
              Else
                
                  write_message "Oh no!!! I've got the dreaded atomic clap!!! I'm dead!!"
                  purgatory
                }
            }
        

      Case "doll"
        
          if(is_carried("doll")) {
            if(doll_inflated) {
              
                write_long_message (22)
                put_object "doll", False
                objects_carried = objects_carried - 1
            Else
              write_message "Inflate it first -- stupid!!!"
             }
            Else
            write_message "I can't unless I'm holding it close"
        }

      Case "girl"
        

 switch(your_place

Case "c_hmoons"
              
                if(wine_ordered) {
                  
                    write_long_message (24)
                    girl_2_fucked = True
                    score = score + 1
                    tied_to_bed = True
                    put_object "girl", "p_jacuzi"
                    put_object "rope", your_place
                Else
                  write_message "She says  'Get me wine!!!  I'm nervous!!'"
              }
Case "p_jacuzi"
              
                if(apple_given) {
                  
                    score = score + 1
                    write_long_message (23)
                   // game_}ed = True
                Else
                  not_yet_but_maybe_later
}
          End Select

Case "bartender"
        
          write_message "He jumps over the bar && kills me!!"
          purgatory

      Case "you"
      write_message "Not tonight -- I have a headache!!"
      Case "waitress"
      write_message "She kicks me in the groin && says 'Wise up - Buster!!'"
      Case "blonde"
      write_message "She says 'I'm working! Leave me alone!!'"
      Case "pimp"
      write_message "He says 'You'll never have enough cash for me - fool!'.  I guess he's gay!"
      Case "bum"
      write_message "To do that I need vaseline!!"
      Case "businessman"
      write_message "No way!!!  You're weird!!"
      Case "off"
      write_message "Fuck off yourself, asshole!!!"

      Case Else
      write_message "Pervert!"

    End Select
 }
Case "wear", "use"
    
    if(Not is_here(noun)) && (Not is_carried(noun)) && (noun <> "knife")) {
      find_me_one

    Else
    switch(noun

      Case "rubber"
        
          write_message "It tickles!!"
          rubber_worn = True
          put_object "rubber", "youhaveit"

      Case "toilet"
          write_message ".....I got those constipation blues.........."
          writeln ("Ahhh...relief! Thanks")
      Case "bed"
        
          write_message "Ahhhhh.......sleep!!!!"
          //sleep (1000)
          writeln ("No, I can't sleep!  Have to find me a girl!!!!")
      
      Case "rope"
        
          if(is_carried("rope")) {
            
              if(your_place = "b_balcny") {
                
                  put_object "rope", your_place
                  rope_in_use = True
                  write_message "You tie the safety rope to the balcony"
              Else
                not_yet_but_maybe_later
              }
          Else
            I_dont_have_it
        }

      Case "passcard"
        
          if(is_carried("passcard")) {
            
              if(your_place = "d_entrnc") {
                
                  write_message "I show my passcard && the door opens"
                addexit your_place, " && West"
              Else
                not_yet_but_maybe_later
 }
          Else
            I_dont_have_it
        }

      Case "knife"
        
          write_message "Let me see if(I still have the knife!"
          //sleep (600)
          if(is_carried("knife")) {
            
              if(tied_to_bed) {
                
                  write_message "I do && it worked! Thanks!"
                  tied_to_bed = False
              Else
                
                  write_message "Samurai sex fi}!!!!!!!!!!!!!!!!!!!"
                  //sleep (600)
                  writeln ("I stab myself in extacy!")
                  purgatory
              }
            
          Else
            I_dont_have_it
        }

      Case Else
        I_cant_do_that

    End Select
}


Case "answer"
  

    if(Not is_here(noun)) {
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
 
    Else
      write_message "It's not ringing!"

}

Case "call", "dial"

    if(your_place = p_pntpch) {
      write_message "This only takes incoming calls!!"

    else if((noun = "555-6969") && (Not called_555_6969)) {
      
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

    else if((noun = "555-0439") && (Not called_555_0439)) {
      
        write_long_message (34)
        called_555_0439 = True
  
    else if((noun = "555-0987") && married_to_girl && (Not called_555_0987)) {
      
        write_long_message (35)
        wine_ordered = True
        called_555_0987 = True
        put_object "wine", "c_hmoons"
    Else
      write_message "Nobody answers"

  }

Case "break", "smash"

    if(Not is_here(noun)) {
      find_me_one

    else if(noun = "window") {
      
        write_message "Let me see if(I have a hammer"
        //sleep (400)
        if(is_carried("hammer")) {
          
            write_message "The window smashes to pieces"
                addexit your_place, " && South"
        Else
          I_dont_have_it
      }

    Else
      I_cant_do_that
}


Case "cut"
  

    write_message "Let me see if(I still have the knife!"
    //sleep (600)

    if(is_carried("knife")) {
      
        if(noun = "rope") && tied_to_bed) {
          
            write_message "I do && it worked! Thanks!"
            tied_to_bed = False
        Else
          
            write_message "Samurai sex fiend!!!!!!!!!!!!!!!!!!!"
            //sleep (600)
            writeln ("I stab myself in extacy!")
            purgatory
          }

    Else
      I_dont_have_it
}

Case "dance"

  

    writeln ("")
    For i = 1 To 3
      
        //sleep (500)
        writeln ("Boogie Woogie!!!")
        //sleep (500)
        writeln ("Yeh Yeh Yeh!!!")
      Next
    writeln ("I got the steps, man!!")



Case "kill"
  
  write_message "Try using a knife!!!"


Case "pay"

  

    if(Not is_here(noun)) {
      find_me_one

    Else
    
    switch(noun
    
      Case "pimp"
        
          if(hooker_fucked) {
            write_message "He says 'I don't want your cash - stud!'"
          Else
            write_message "Try going up -- he'll take the cash) {"
        }

      Case "hooker"
        write_message "You already paid the Pimp, stupid!!"

      Case "blonde", "waitress", "girl"
        
          write_message "She yells 'I'm not a whore!!!' && kills me!"
          purgatory
        
      Case "preacher"
        write_message "Bring a girl here to marry -- he'll take the cash) {!"

      Case "businessman"
        write_message "He's too drunk to do business right now!"

      Case "bartender"
        write_message "Buy something -- he'll take the cash) {"

      Case "dealer"
        write_message "Why not play 21 instead?  You'll lose anyway, fool!"

     Case Else
      I_cant_do_that

    End Select
}

Case "smoke"

    if(noun = "plant") {
      
        write_message "A cop beats me over the head!!!!"
        purgatory

    Else
      I_cant_do_that

}
Case "show"
  

    if(noun = "passcard") {
      
        if(is_carried("passcard")) {
          
            if(your_place = "d_entrnc") {
              
                write_message "I show my passcard && the door opens"
                addexit your_place, " && West"
            Else
              not_yet_but_maybe_later
          }
        Else
          I_dont_have_it
      }

    Else
      I_cant_do_that
}

Case "smell"
    if(Not is_here(noun)) && (Not is_carried(noun))) {
      find_me_one

    Else
    
    switch(noun
      Case "blonde"
      write_message "Hmmm.....nice!!!!"
      Case "hooker"
      write_message "OK, who's eating tuna fish?!?!?!"
      Case "toilet"
      write_message "Arghhh...I'm going to puke!!!!!!"
      Case "plant"
      write_message "Ahhh..chooo!!!!!!  I guess I'm allergic!"
      Case "garbage"
      write_message "Yechhhhh!!!!!"
      Case "flowers"
      write_message "Smells like perfume!!!"
      Case Else
      write_message "Smells OK"
    End Select
}


Case "help"
    
   // give_help

Case "kiss"
    
    write_message "Don't do that!!!!  It gets me excited!!"

Case "stab"
    
    stab_someone

Case "quit", "stop", "bye"
    game_end

Case "score"
    writeln ("")
    writeln ("Your score is '" & score & "' out of a possible '3'")


Case "save"
    //p = pos(" ", objnam)
    //if(p > 0) { objnam = Copy(objnam, 1, p - 1)
    //assign( save_file, save_file_name(objnam) )
    //rewrite (save_file)
    //write( save_file, game_position )
    //Close (save_file)
    //write_messagesave_file_name (objnam) + " saved"


Case "restore"
    
    //p = pos(" ", objnam)
    //if(p > 0) { objnam = Copy(objnam, 1, p - 1)
    //write_message "Restoring from " + save_file_name(objnam)
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
    //Else
   //   write_long_message( integer(your_place) + 1 )
    //Close (save_file)



Case "go"

if(tied_to_bed) {
      write_message "But I'm tied to the bed!!!!!"

    else if(Not (no_direction)) {
      
        if(your_place = "b_bedrm") && (direction = "north") && (Not hooker_fucked)) {
          write_message "The Hooker says:  'Don't go there ... do me first!!'"

        else if(your_place = "c_hallwy") && (direction = "south") && (Not married_to_girl)) {
          write_message "The door is locked shut!"

        else if(your_place = "d_entrnc") && (direction = west) && (Not door_W_open)) {
          write_message "The door is closed!"

        else if(your_place = b_backrm) && (direction = up) && (TV_channel <> 6)) {
          
            if(cash < 20) || (Not is_carried("wallet"))) {
              write_message "The Pimp says I can't until I get $2000"
            else if(hooker_fucked) {
              write_message "The Pimp says 'No -- the hooker can't take it anymore!'"
            Else
              
                write_message "The Pimp takes $2000 && says OK"
                cash = cash - 20
                your_place = "b_bedrm"
              }
      
        else if(your_place = "b_balcny") && (direction = west) && (Not rope_in_use)) {
          falling_down

        Else
          
            //new_place = Path(your_place, direction)
            if(new_place <> False) {
              your_place = new_place
            Else
              I_cant_go_that_way
            }
       }
    Else
      I_cant_do_that
}


Case "hail"
  

    if(noun <> "taxi") {
      write_message "Who are you kidding?  You're pulling at straws, fool!!"

    else if(your_place <> "b_street" && your_place <> "c_street" && your_place <> "d_street")) {
      write_message "I'm not in the street, fool!!"

    Else
        write_long_message (6)
        taxi_destination = InputBox("WHERE TO?")
        if(Left(UCase(taxi_destination), 4) = "DISC") {
          new_place = "d_street"
        else if(Left(UCase(taxi_destination), 4) = "CASI") {
          new_place = "c_street"
        else if(Left(UCase(taxi_destination), 3) = "BAR") {
          new_place = "b_street"
        else if(new_place = "your_place" || new_place = False) {
          write_message "Huh? - Hail another!"
        else if(is_carried("wine")) {
          
            wine_in_taxi
            your_place = new_place
            put_object "wine", False
            objects_carried = objects_carried - 1
        }
          
            write_message "We arrive && I get out."
            your_place = new_place
}

Case "take", "get", "grab"
  

    //if(noun = "inventory") {
      
    //    anything_carried = False
    //    For noun = first_object To last_object
    //      if(is_carried(noun)) {
            
    //          if(Not anything_carried) {
    //            write_message "I//m carrying the following:"
    //          anything_carried = True
    //          writeln (object_name(noun))
    //          if(noun = "wallet") && (cash > 0)) {
    //            writeln (" with $" & cash & "00")
    //          Else
    //            writeln
    //        }
    //    if(Not anything_carried) {
    //      write_message "I//m not carrying anything!!"
    //  }

    if(noun = "off") {
      write_message "You're not a bird, fool!!"

    else if(noun = "all") {
      
        write_message "You hog!!!"
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
        //          Else
                    
        //              put_object noun = youhavit
        //              objects_carried = objects_carried + 1
        //              if(noun = "water") { pitcher_full = True
        //              if(noun = "pitcher") && pitcher_full) {
        //                put_object "water" = youhavit
        //              writeln ("Taken")
        //            }
        //        }
        //      Else
        //        cant_do_that
        //    }
        //}

    else if(is_carried(noun)) {
      I_already_have_it

    else if(Not is_here(noun)) {
      find_me_one

    else if(objects_carried >= max_carried) {
      write_message "I'm carrying too much!!!"

    else if(Not takeable_objects(noun)) {
      I_cant_do_that

    else if(your_place = "d_phrmcy") && (noun = "magazine" || noun = "rubber")) {
      
        write_message "The man says 'Shoplifter!!' && shoots me"
        purgatory

    else if((noun = "water") && (Not is_carried("pitcher"))) {
      write_message "Get me the pitcher so I don't spill it!"

    else if((noun = "candy") && (your_place = "b_bedrm") && (Not hooker_fucked)) {
          write_message "The Hooker says:  'Don't take it ... do me first!!'"

    else if((noun = "rope") && rope_in_use) {
      write_message "It is tied to the balcony"

    Else
      
        OK
        put_object noun, "youhaveit"
        objects_carried = objects_carried + 1
        if(noun = "water") { pitcher_full = True
        if(noun = "pitcher") && pitcher_full) {
          put_object "water", "youhaveit"
      }
}

Case "drop", "leave", "plant", "give"
  

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
//        if(Not anything_carried) {
//          writeln ("I did//t carry anything!!")
//      }

//    else if(Not is_carried(noun)) {
//      I_dont_have_it

    Else
      
        put_object noun, your_place
        objects_carried = objects_carried - 1
        if(noun = "pitcher") && pitcher_full) {
          put_object "water", your_place
        else if(noun = "rubber") {
          rubber_worn = False
        else if(your_place = "d_disco") && (is_here("girl")) && (noun = "candy" || noun = "flowers" || noun = "ring")) {
            switch(noun
              Case "candy"
                  write_message "She smiles && eats a couple!!"
                  candy_given = True
              
              Case "flowers"
                
                  write_message "She blushes profusely && puts them in her hair!"
                  flowers_given = True
                  put_object "flowers", False
              
              Case "ring"
                
                  write_message "She blushes && puts it in her purse."
                  ring_given = True
                  put_object "ring", False
            
            End Select
            if(candy_given && flowers_given && ring_given) {
              
                write_message "She says: 'See you at the Marriage Center!!'"
                put_object "girl", "c_marryc"
              }
        
        else if(is_here("bum") && (noun = "wine")) {
          
            if(object_place("knife", your_place) = False) {
              
                bum_tells_story
                put_object "knife", your_place
            
            Else
              write_message "The bum mutters 'That stuff made me puke!!  Get out of here!!!'"
            }
        else if(is_here("businessman") && (noun = "whiskey")) {
        if(object_place("control_unit", your_place) = False)) {
          
            write_message "The guy gives me a TV controller!!"
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
        
        Else
          OK
      }
}


Case "look", "search", "examine", "read", "watch"
  

    if(no_object) {
      write_long_message (CInt(your_place) + 1)

    else if(noun = "all") {
      write_message "That's too much, one item at a time, please!!"

    else if(noun = "inventory" || noun = "on" || noun = "off") {
      huh

    else if((Not is_here(noun)) && (Not is_carried(noun))) {
      find_me_one

    Else
      switch(noun

      Case "desk"
        
          if(drawer_open) {
            I_see_something
            write_long_message 2
          Else
            write_message "It's drawer is shut"
        }

      Case "washbasin"
         I_see_something
        put_object "ring", your_place
      Case "graffiti"
        look_graffiti

      Case "mirror"
        write_message "There's a pervert looking back at me!!"

      Case "toilet"
        write_message "Hasn't been flushed in ages!  Stinks!!!"

      Case "businessman"
        write_message "He looks like a whiskey drinker to me!!"

      Case "button"
        write_message "Says Push."

      Case "bartender"
        write_message "He's waiting for me to buy something!"

      Case "pimp"
        
          write_message "He's wearing a button proclaiming -- Support your local Pimp, gimme $2000!!!"

      Case "hooker"
        write_long_message (1)

      Case "billboard"
        write_long_message (38)

      Case "TV"
        
         if(Not is_carried("control unit")) {
           write_message "To watch TV, I need the remote control unit!!"
         else if(Not hooker_fucked) {
           write_message "The Pimp says I can't watch TV"
         Else
           watch_TV (TV_channel)
        }

      Case "slot_machines"
        write_message "Playing them might be more fun...."

      Case "ashtray"
        I_see_something
        put_object "passcard", your_place
        
      Case "blonde"
      if(your_place = "c_htdesk") { write_long_message (10)

      Case "bum"
        write_message "He grumbles -- I'll tell you a story for a bottle of wine....."

      Case "peephole"
        if(hole_peeped) {
          write_message "All windows at the hotel across the road have their curtains shut."
        Else
          
            write_long_message (25)
              hole_peeped = True
          }

      Case "door"
        
          if(door_W_open) {
            write_message "The door is open"
          Else
            
              write_message "The sign on the door says "
              writeln ("'Entry by showing passcard - Club members && their guests only!'")
            }
 
      Case "waitress"
        write_message "She ignores you!"

      Case "telephone"
        
          if(your_place = d_telbth) {
            write_message "A number is there - Call 555-6969 for a good time!"
          Else
            I_see_nothing_special
        }

      Case "closet"
        
          if(closet_open) {
            I_see_something
            put_object "doll", your_place
          Else
            write_message "It's closed"
        }

      Case "sink"
        write_message "The sign over the sink says 'Water on or off to operate'"

      Case "elevator"
        write_message "It's doors are closed"

      Case "dealer"
        write_message "He's waiting for me to play"

      Case "cabinet"
        
          if(stool_climbed) {
            
              if(cabinet_open) {
                I_see_something
                put_object "pitcher", your_place
              Else
                write_message "It's closed"
            }
          Else
            I_see_nothing_special
        }

      Case "bushes"
        write_message "Entering them would be kinky!!!!"

      Case "tree"
        I_see_something
        put_object "apple", your_place

      Case "sign"
        write_message "It says 'Hail taxi here'"

      Case "girl"
        
          if(your_place = p_jacuzi) {
            write_long_message (5)
          else if(your_place = "d_disco") || (your_place = "c_marryc")) {
            write_long_message (4)
          Else
            write_message "She slaps me && yells 'Pervert!!!!!'"
        }

      Case "newspaper"
        
          if(is_carried("newspaper")) {
            write_long_message 2
          Else
            I_dont_have_it
        }

      Case "garbage"
        I_see_something
        put_object "apple_core", your_place

      Case "flowers"
        write_message "They look beautiful!!!"

      Case "apple_core"
        I_see_something
        put_object "seeds", your_place

      Case "pills"
        
          write_message "The label on the bottle says"
          writeln ("'Want to drive someone crazy with lust??  Try this!!!!'")

      Case "plant"
        
          if(object_place("bushes", your_place) = False) {
            
              write_message "There's a group of bushes behind it!!"
              put_object "bushes", your_place
            }
            
            I_see_nothing_special


      Case "radio"
        write_message "Maybe I should listen..."

      Case "magazine"
        
          if(is_carried("magazine")) {
            write_long_message (3)
          Else
            I_dont_have_it
        }

      Case "rubber"
        
          if(is_carried("rubber")) {
            write_message "It's " & rubber_color & ", " & rubber_flavor & "-flavored, " + rubber_lubricated & ", && " & rubber_ribbed
          Else
            I_dont_have_it
        }

      Case "wallet"
        
          if(cash > 0) {
            
              writeln ("")
              writeln ("It contains $" & cash & "00.")
          
          Else
            write_message "It's empty"
        }

      Case "doll"
        
          if(doll_inflated) {
            write_message "It's inflated"
          Else
            write_message "It's rolled up in a little ball"
        }

      Case "pitcher"
        
          if(pitcher_full) {
            write_message "It's full of water"
          Else
            write_message "It's empty"
        }

      Case "rack"
        I_see_something
        put_object "magazine", your_place

      Case "curtain"
        write_message "It's on the east wall"

      Case Else
        I_see_nothing_special

      End Select

}

Case "flush"
  

    if(Not is_here(noun)) {
      find_me_one

    else if(noun = "toilet") {
      
        write_long_message (36)
        //sleep (300)
        write_message "I'm dead from the germs!!"
        purgatory
    
    Else
      I_cant_do_that

}
Case "open", "pull"
  

    if(Not is_here(noun)) {
      find_me_one

    Else
    switch(noun

      Case "window"
        write_message "Won't budge"

      Case "desk"
        if(Not is_here("newspaper")) { put_object "newspaper", "b_hallwy"

      Case "door_west"
        
          if(door_W_open) {
            write_message "It's already open!!"
          Else
            
              write_message "A voice asks 'Passcard?'  I search in my pockets &&..."
              if(is_carried("passcard")) {
                
                  writeln ("I have it!  The door opens!")
                  door_W_open = True
                  addexit your_place, " && West"
              
              Else
                writeln ("I don't have it!!")
            }
          }
      Case "curtain"
        write_message "It seems to be remotely controlled"

      Case "elevator"
        write_message "Push the button to open elevator"

      Case "closet"
        xopen (closet_open)

      Case "cabinet"
        if(stool_climbed) {
          xopen (cabinet_open)
        Else
          write_message "I can't reach it!!"
      }
      Case Else
        I_cant_do_that


  End Select
}

Case "inflate"
  

    if(noun = "doll") {
      
        if(is_carried("doll")) {
          
            if(doll_inflated) {
              write_message "You've already inflated it, stupid!!"
            Else
              
                OK
                doll_inflated = True
             }
        else if(is_here("doll")) {
          write_message "I can't unless I'm holding it close"
        Else
          find_me_one
        }

    Else
      write_message "But the prime rate is already 257%!!"
}


Case "play"
    if(noun = "slots") {

      
        if(is_here("slot")) {
          
            if(cash > 0) && (is_carried("wallet"))) {
              play_slot (cash)
            Else
              //sorry_no_cash
              write_message "No Money!"
              purgatory
          }
        Else
          write_message "OK, show me your slot...."
      }

    else if(noun = "cards" || noun = "21") {
      
        if(your_place = "c_21room") {
          
            if(cash > 0) && (is_carried("wallet"))) {
              play_21 (cash)
            Else
              write_message "No Money!"
              purgatory
          }
        Else
          not_yet_but_maybe_later
      }

    Else
      write_message "Playful bugger, eh??"
}

Case Else
    I_cant_do_that

End Select
jump:
GetLocationDescription (your_place)
take_inventory your_place, cash
Me.txtCommand.SetFocus

}

*/