export default function Journal(title,description){
 this.title = title;
 this.description = description;
}

Journal.prototype.numberOfWords = function(){
//  if(this.description.trim().length === " "){
 return 0;
}

//  const words = this.description.split(" ").filter(word => word !== "");
//  return words.length;
// };

// Journal.prototype.numberOfVowels = function(){
//  const vowels = ["a", "e","i","o","u"];
//  let vowelsCount = 0;
//  const numberOfVowels = this.description.split("");
//  numberOfVowels.forEach(function(letter){
//   if(vowels.includes(letter)){
//    vowelsCount +=1;
//   }
//  });
//  return vowelsCount;
// };




