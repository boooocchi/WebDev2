/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
*/

// function highlightWords() {
// const text = document.querySelector("p").textContent;
// let output = "";
// let words = text.split(" ");

//   let replacement = "";
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length >= 8) {
//       replacement = "<span class='lightext'>" + word + "</span>";
//     } else {
//       replacement = word;
//     }
//     output = output + " " + replacement + " ";
//   }

//   return output;
// }

// document.querySelector("p").innerHTML = highlightWords();

/*
  Exercise 02
  -----------
*/
// const paragraphContent = document.querySelector("p").textContent;
// document.querySelector("p").innerHTML +=
//   "<p><a href=`http://officeipsum.com/`> Officeipsum</a></p>";

/*
  Exercise 03
  -----------
*/

// function newLine() {
//   lines = document.querySelector("p").textContent.split(".");
//   let output = "";
//   lines.forEach((line) => {
//     line = line + "<br>";
//     output = output + line;
//   });

//   return output;

// }

// document.querySelector("p").innerHTML = newLine();

/* 
  Exercise 04
  -----------
*/

// const count = document.querySelector("p").textContent.split(" ").length;

// document.querySelector("p").textContent += "【count】" + count;

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// function emoji() {
//   const words = document.querySelector("p").textContent.split(" ");

//   const replacement = [];
//   words.forEach((word) => {
//     if (word.includes("!")) {
//       replacement.push(word.replace("!", "😮"));
//     } else if (word.includes("?")) {
//       replacement.push(word.replace("?", "🤔"));
//     } else {
//       replacement.push(word);
//     }
//   });

//   return replacement.join(" ");
// }

// document.querySelector("p").textContent = emoji();
