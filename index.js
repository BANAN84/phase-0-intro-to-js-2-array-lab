// Write your solution here!
let cats= ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat (name) {
    cats.push(name);

}

function destructivelyPrependCat (name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat () {
    cats.pop();

}
function destructivelyRemoveFirstCat () {
    cats.shift();

}

function appendCat (name) {
  const a =[...cats,name]

  return a;
}

function  prependCat(name){
    let a =[name , ...cats]
    return a;

}
function removeLastCat(){
    let a= cats.slice(0,cats.length-1)
    return a;
}
function removeFirstCat(){
   let a = cats.slice(1)
   return a;
   
}

     //destructivelyAppendCat("Ralph");
     destructivelyPrependCat("Bob");
    // destructivelyRemoveLastCat();
    // destructivelyRemoveFirstCat ();
    appendCat("Broom");
   // removeFirstCat()
   
    
               

