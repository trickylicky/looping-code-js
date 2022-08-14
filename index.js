/*for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */

// const names = ["Guadalupe", "Ollie", "Aki"];

// function writeCards(names){
//     for (let i = 0 ; i < names.length ; i++) {
//          const newArrays =[`Thank you, ${names[i]}, for the wonderful surprise gift!`];
//         const thankNote = newArrays.slice(2)
//        console.log(thankNote); 
//        return thankNote;
//     }
      
// }
//writeCards(names);
//`Thank you, ${names[i]}, for the wonderful surprise gift!`
// console.log(writeCards(names));
 let messages = [];
function writeCards(names, event) {
   
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return messages;
}

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
    console.log(positiveNumber);
    positiveNumber--;
    }
} 