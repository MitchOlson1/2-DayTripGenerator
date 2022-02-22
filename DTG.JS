"use script"

function choice(choiceArray){
let random;
random = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    console.log(random);
let decision;
decision = prompt("Is this the choice you want? Yes or No");
    if (decision === "Yes"){
        console.log(random);
        return random;
    }
    while(decision === "No"){
        console.log("Ok we will try agian")
        random = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        console.log(random);
        decision = prompt("If this is the choice you want, type Yes. If not, type No.")
            if(decision === "Yes"){
                console.log(random);
                return random;
        }
    }

}
    let destinationDecision = choice(["Wisconsin", "Florida", "Maine", "California", "Texas", "Montana"]);
    console.log(destinationDecision);
    
    let restaurantDecision = choice(["Sweeties", "Bubbas", "Hearties", "Glorias"]);
    console.log(restaurantDecision);

    let transpoDecision = choice(["Car", "Bike", "Uber", "Walk"]);
    console.log(transpoDecision);

    let entertainmentDecision = choice(["Comedy", "Play", "Zoo", "Games"]);
    console.log(entertainmentDecision);

    function finishingTouches(String){
        let finished; 
        finished = prompt("Confirm your day trip is Complete by typing yes").toLowerCase();;
            if(finished === "yes");
            console.log("COMPLETE"); 
    }    
    
    let wrappedUp = finishingTouches("COMPLETE")
    
    
    console.log("Congratulations! Your trip is completed!");
    console.log("Here is your trip info:");
    console.log(destinationDecision);
    console.log(restaurantDecision);
    console.log(transpoDecision);
    console.log(entertainmentDecision);
    console.log("Enjoy your trip!")









// I want to include 4 more random generators inside of the same function
// destinationArray
//hold answer
// display completed trip to console
// breakup choice function
// prompt




