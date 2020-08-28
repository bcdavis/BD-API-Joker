// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Setup = (jokeObj) => { // this will be placed in the <p class="joke-setup"> element
    //console.log("Setup()...");
    //document.querySelector(".request-joke-punchline-btn").setAttribute("disabled", "false");
    return `
        ${jokeObj.setup}     
    `
}

export const Punchline = (jokeObj) => { // this will be placed in the <p class="joke-punchline"> element
    //console.log("Punchline()...")
    return `
        ${jokeObj.punchline}
    `
}
