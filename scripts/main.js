import { useJoke, getJoke } from "./JokeProvider.js"
import { Setup, Punchline } from "./Joke.js"
//import { KnockSetup1, KnockPunchline} from "./KnockKnockJoke.js"

const jokeBtnSetup = document.querySelector(".request-joke-setup-btn");
const jokeBtnPunch = document.querySelector(".request-joke-punchline-btn");
//const knockBtn1 = document.querySelector(".knock1");

const jokeSetupElement = document.querySelector(".joke-setup");
const jokePunchlineElement = document.querySelector(".joke-punchline");


let newJoke = {};
let setupArray = [];

jokeBtnSetup.addEventListener("click", (e) => {
    let jokeType = document.querySelector(".typeSelector");
    let selectedType = jokeType.options[jokeType.selectedIndex].value; // get the value of the selected option in dropdown menu
    // console.log("selectedType: ", selectedType);

    getJoke(selectedType)
    .then( _ => {
        newJoke = useJoke()
    })
    .then( _ => {
        if(selectedType === "knock-knock") { 
            setupArray = newJoke.setup.split('\n');
            console.log(setupArray);
            jokeSetupElement.innerHTML = `${setupArray[0]}`;

            debugger;
            jokeBtnPunch.textContent = setupArray[1];


            jokePunchlineElement.innerHTML = ""; 


        }
        else {


            jokeSetupElement.innerHTML = Setup(newJoke); 
            // don't use += because we want to replace current joke with new joke each time the button is pressed
            jokePunchlineElement.innerHTML = ""; 
            debugger;
            jokeBtnPunch.textConent = "Punchline";
            // clear previous joke's punchline
        }
    })
    .then(_ => {
        // Once the setup is visible, enable the punchline button (remove the disable attribute)
        jokeBtnPunch.removeAttribute("disabled");
    })
});

jokeBtnPunch.addEventListener("click", (e) => {

    let punchHasDisabled = jokeBtnPunch.hasAttribute("disabled"); // does punch btn have attribute disabled?
    // console.log("isPunchDisabled", punchHasDisabled);

    // if btn2 IS NOT disabled ( ^ false ), reset it to true for new incoming joke setup
    if(punchHasDisabled === false){
        jokeBtnPunch.setAttribute("disabled", "true");
        // disable the punchline button if there is no setup already present 
        // and if the punchline is already present.
        // - Punchline button is disabled by default when the page first loads (in index.HTML)
        // - Punchline button is disabled after the first press of the punchline button
    }

    //console.log("Punching...");
    //if(newJoke.type === "knock-knock"){
        //if(setupArray.length < 3){
            //jokeBtnPunch.textContent = setupArray[2];
        //}
        //jokePunchlineElement.innerHTML = KnockPunchline(newJoke);
    //}
    //else{
        jokePunchlineElement.innerHTML = Punchline(newJoke); 
    //}
    
});

//knockBtn1.addEventListener("click", (e) => {

//});

