function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "The heroes delve into the darkness encountering a giant slime cube! What now!?";
        document.getElementById("choice1").innerHTML = "Avoid It";
        document.getElementById("choice2").innerHTML = "Attack";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Our heroes take a moment to search for another entrance, finding a dark, ominous pit. What now?";
        document.getElementById("choice1").innerHTML = "Cannon Ball!";
        document.getElementById("choice2").innerHTML = "Go Home";

    } else if (choice == 1 && answer1 == "Avoid It") {
        document.getElementById("story").innerHTML = "You decide to take a hint of caution as you circle around the slime. You see a pile of gold ahead, the dragon's hoard! What do you do?";
        document.getElementById("choice1").innerHTML = "We're Rich!";
        document.getElementById("choice2").innerHTML = "Kill the Dragon!";
    } else if (choice == 2 && answer2 == "Attack") {
        document.getElementById("story").innerHTML = "The heroes attack the slime with their swords and spells, but it is not effective! Do you retreat or continue the fight?";
        document.getElementById("choice1").innerHTML = "Retreat";
        document.getElementById("choice2").innerHTML = "Fight";

    } else if (choice == 1 && answer1 == "Cannon Ball!") {
        document.getElementById("story").innerHTML = "Our heroes dive into the pit with reckless abandon, landing in the chamber of the sleeping Dragon! How might we slay the beast!?'";
        document.getElementById("choice1").innerHTML = "Swords!";
        document.getElementById("choice2").innerHTML = "Magic!";
    } else if (choice == 2 && answer2 == "Go Home") {
        document.getElementById("story").innerHTML = "The heroes go home, but are stumped when their families ask them if they slew the dragon.";
        document.getElementById("choice1").innerHTML = "Tell the Truth";
        document.getElementById("choice2").innerHTML = "Lie";

    } else if (choice == 1 && answer1 == "We're Rich!") {
        document.getElementById("story").innerHTML = "The heroes rush to the gold due to greed and are burnt to a crisp by the un-noticed dragon." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Kill the Dragon!") {
        document.getElementById("story").innerHTML = "The heroes rush into the chamber spotting the dragon! It breathes flame and rends them with its mighty claws! Our heroes did not prepare enough!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 1 && answer1 == "Retreat") {
        document.getElementById("story").innerHTML = "The heroes recognize that their mission has failed and exit the dungeon in shame." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Fight") {
        document.getElementById("story").innerHTML = "The heroes give it their all but succumb to the acid of the slime none the less." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 1 && answer1 == "Swords!") {
        document.getElementById("story").innerHTML = "The heroes rush the sleeping dragon, slicing it with their swords and claiming victory! The day is yours!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Magic!") {
        document.getElementById("story").innerHTML = "The heroes cast their sorceries and blast the beast with lightning, vaoprizing it in an instant! The day is yours!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 1 && answer1 == "Tell the Truth") {
        document.getElementById("story").innerHTML = "Our heroes were honest to their families, and the families were thankfull for their honesty, but afraid of the dragon menace..." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Lie") {
        document.getElementById("story").innerHTML = "The heroes lied to their families, being celebrated as champions! But the guilt never left them..." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "The brave heroes set off to slay the dragon, but must overcome many challenges along the way. Dare you enter the dark depths of this dungeon?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "The dungeon lies still...";
    }
}
