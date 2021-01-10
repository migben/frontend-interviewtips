/**
 * Front End Interview Questions: Promises
 * 
 * Q: What are Promises and why might you use them? Intregrate them
 * to your front end app?
 * 
 * Bonus Resource: https://jsonplaceholder.typicode.com/
 * 
 * Promises has 3 states,
 * (1) Its pending, meaning the promise is not in action.
 * (2) it's resolved, it was sucessful
 * (3) An error, meaning it blew up.
 * 
 * Typically we are to use promises for API calls and always use it
 * for Asynchronous actions. Unless you handle them to be synchronous.
 * 
 * Things to remember is the difference of synchronous and Asynchronous
 */

async function getPost() {
    console.log(1);
    
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    console.log(json);
        
    } catch(e) {
        console.log(e)
    }
    
    
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then((data) => data.json())
    // .then((json) => console.log(2))
    // .catch((error) =>  console.log(e));
    
    console.log(3);
}

getPost();