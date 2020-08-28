import { useJoke, getJoke } from "./JokeProvider.js"
import { Setup, Punchline } from "./Joke.js"


const jokeBtnSetup = document.querySelector(".request-joke-setup-btn");
const jokeBtnPunch = document.querySelector(".request-joke-punchline-btn");

const jokeSetupElement = document.querySelector(".joke-setup");
const jokePunchlineElement = document.querySelector(".joke-punchline");

let newJoke = {};

jokeBtnSetup.addEventListener("click", (e) => {

    console.log("Grabbing a joke...");
    // when the setup button is pressed, make the 

    getJoke()
    .then( _ => {
        newJoke = useJoke()
    })
    .then( _ => {
        jokeSetupElement.innerHTML = Setup(newJoke); 
        // don't use += because we want to replace current joke with new joke each time the button is pressed
        jokePunchlineElement.innerHTML = ""; 
        // clear previous joke's punchline
    })
    .then(_ => {
        // Once the setup is visible, enable the punchline button (remove the disable attribute)
        jokeBtnPunch.removeAttribute("disabled");
    })
});

jokeBtnPunch.addEventListener("click", (e) => {

    let punchHasDisabled = jokeBtnPunch.hasAttribute("disabled"); // does punch btn have attribute disabled?
    console.log("isPunchDisabled", punchHasDisabled);

    // if btn2 IS NOT disabled ( ^ false ), reset it to true for new incoming joke setup
    if(punchHasDisabled === false){
        console.log("HERE");
        jokeBtnPunch.setAttribute("disabled", "true");
        // disable the punchline button if there is no setup already present 
        // and if the punchline is already present.
        // - Punchline button is disabled by default when the page first loads (in index.HTML)
        // - Punchline button is disabled after the first press of the punchline button

    }

    // the joke object is already loaded into the main, so just display punchline
    console.log("Punching...");
    jokePunchlineElement.innerHTML = Punchline(newJoke);


    // TODO: disable punchline button so copies of the punchline aren't rendered to DOM if pressed again.
});


