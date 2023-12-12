import Entry from './journal.js';
import './css/styles.css';

function reset(){
 const form = document.querySelector("form");
 form.reset();
}


function counter(e){
 e.preventDefault();
 const titleInput = document.getElementById("title").value;
 const descriptionInput = document.getElementById("description").value;
 const newEntry = new Entry(titleInput,descriptionInput);
 const wordsOutput = document.querySelector("#wordsOutput");
 const vowelsOutput = document.querySelector("#vowelsOutput");
 wordsOutput.innerText = `Number of words: ${newEntry.numberOfWords()}`;
 vowelsOutput.innerText = `Number of vowels: ${newEntry.numberOfVowels()}`;
 reset();
}

const form = document.querySelector("form");
form.addEventListener("submit", counter);


