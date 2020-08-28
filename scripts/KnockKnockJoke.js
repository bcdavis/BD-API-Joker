
// the setup on kock knock jokes are as follows: 
    // setup: "Knock knock. \n Who's there? \n Something \n Something who?"
    // setup:       a              b               c            d

    // NOTE: There are currently only five knock-knock jokes in the API

    /* TODO: 
        - need to isolate the setup of the KK joke
        - split the string up into an array separated by the '\n' string
        - render array [0] ("Knock knock.") when 'Tell me a joke!' is pressed.
        - render the punchline button with array [1] ("Who's there?")

        - pressing the 



        [tell me a joke!]

            joke.setup { 

                [0]               "knock knock."

                [1][Who's there?]

                [2]                "Something."
        
                    if 

                [3][Something who? / ]

            }

        joke.punchline     "The Punchline!"               



    */


export const KnockSetup1 = (setupArray) => {
    let returnStr = `
        <p>${setupArray[0]}</p>
        <button class="knock1">${setupArray[1]}</button>
    `
    document.querySelector(".knock1").addEventListener("click", (e) => {
        

    });
}

// export const Setup = (jokeObj) => { // this will be placed in the <p class="joke-setup"> element
//     console.log("Setup()...");
//     //document.querySelector(".request-joke-punchline-btn").setAttribute("disabled", "false");
//     return `
//         ${jokeObj.setup}      
//     `
// }

export const KnockPunchline = (jokeObj) => { // this will be placed in the <p class="joke-punchline"> element
    return `
        ${jokeObj.punchline}
    `
}