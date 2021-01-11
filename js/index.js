console.log("Iteration 1: Names and Input");

let hacker1 = "George";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Joana";
console.log(`The navigator's name is ${hacker2}.`);

console.log("\n\nIteration 2: Conditionals");

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

console.log("\n\nIteration 3: Loops");
let hacker1Caps = "";
let hacker2Caps = "";
for (var i = 0; i < hacker1.length; i++) {
  hacker1Caps += hacker1[i].toUpperCase() + " ";
}
for (var j = 0; j < hacker2.length; j++) {
  hacker2Caps += hacker2[j].toUpperCase() + " ";
}
console.log (hacker1Caps);
console.log (hacker2Caps);

let hacker1Reverse = "";
let hacker2Reverse = "";
for (var k = hacker1.length; k > 0; k--){
  hacker1Reverse += hacker1[k-1];
}
for (var l = hacker2.length; l > 0; l--){
  hacker2Reverse += hacker2[l-1];
}
console.log(hacker1Reverse);
console.log(hacker2Reverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

console.log("\n\nBonus 1: Lorem Ipsum");

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ultrices pulvinar. Ut vitae nunc id velit porttitor tincidunt. Pellentesque fermentum ac orci a interdum. Sed ultrices ligula metus. Morbi id scelerisque tortor. Proin lobortis ipsum sit amet enim imperdiet tristique. Duis quam dolor, viverra a leo eget, maximus mattis eros. Praesent luctus purus a hendrerit sodales. \n\nVestibulum consequat finibus ante sit amet finibus. Vivamus quis commodo nunc. Nam finibus suscipit elit sit amet laoreet. Ut a finibus mauris, at dapibus leo. Vestibulum placerat ex a mauris dignissim, ac placerat lectus lobortis. Nulla facilisi. Sed at ante odio. Donec interdum tellus eget ornare mollis. Aenean eleifend dui libero, a consequat tortor blandit sed. Suspendisse quam nisi, consectetur ac quam vel, suscipit posuere nunc. Proin id maximus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi id nisl turpis. Sed eget ligula interdum, dapibus mauris non, pretium mi. Phasellus vel tempor nulla, sed laoreet dui. \n\nMauris mattis risus dui, ut sollicitudin mi tristique ultricies. Aliquam ligula turpis, laoreet nec arcu et, congue pellentesque ex. Morbi lectus elit, laoreet sit amet placerat a, blandit sed nisl. Mauris ut tellus at augue pharetra bibendum. Integer vitae sem consequat, consequat diam et, consectetur ipsum. In maximus rutrum feugiat. Nulla vel leo condimentum, condimentum diam nec, tincidunt massa. Proin non metus elit. Aenean faucibus eros turpis, id cursus urna tempus laoreet. Nam vel augue ullamcorper, tincidunt sem sed, posuere lectus. Vestibulum iaculis justo nec dictum vehicula. Vestibulum dapibus enim quis dolor faucibus efficitur. In eget ultricies massa, id imperdiet erat."

console.log(lorem);

let wordCount = 0;
for (let w = 0; w < lorem.length; w++){
  if (lorem[w] == " "){
    wordCount++;
  }
}
console.log (`\n\nThere are ${wordCount + 1} words.`);

let etCount = 0;
for (let e = 0; e < lorem.length; e++){
  if ((lorem[e] == " ") && (lorem[e+1] == "e") && (lorem[e+2]=="t") && (lorem[e+3]==" ")){
    etCount++;
  }
}
console.log (`\nThe word "et" appears ${etCount} times.`);