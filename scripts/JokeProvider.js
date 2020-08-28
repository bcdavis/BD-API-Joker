let joke;


// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)

export const useJoke = () => {
    return joke[0]; // access joke object in single item array.
}

// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response

/*
    Getting jokes from API with the following format:

    - joke object {
        id: int,
        type: str,
        setup: str,
        punchline: str
    }
*/

// jokeType is the value of an option of the <selection class="typeSelector"> element
export const getJoke = (jokeType) => {
    // make sure the type of joke passed in is a valid type

    const typeUrl = `https://official-joke-api.appspot.com/jokes/${jokeType}/random`; 

    // ******* NOTE: when grabbing a joke by type, the result is an array containing one joke object ********

    //console.log(typeUrl);
    // url specifying what type of joke to pick randomly.

    return fetch(typeUrl)
    .then(response => response.json())
    .then(
        parsedResponse => {
            joke = parsedResponse
        }
    )
}