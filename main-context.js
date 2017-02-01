// Excercise 1
// Q1
function sum (x,y) {

  var result = x + y;
  return result;
}


// Q2
function avg(a,b,c) {

  var result = (a + b + c) / 3;
  return result;
}

// Q3
function getLength(y) {
  var result = y.length;
  return result;
}

// Q4
function greaterThan(y,z) {
  return y > z;
  }

// Q5
function greet(x) {
  var result = "Hello" +  " " + x + '!';
  return result;
}

// Q6
var e = "By the will of Genghis we can!"

function madlib(w, x, y, z) {
  var result = w + ' ' + x + ' ' + y + ' ' + z + ' ' + e;
  return result ;
  }


  // Excercise 2
  // Q1
function max (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

//Q2
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;}
  else if (y > x && y > z) {
    return y;}
  else if (z > x && z > y) {
    return z;}
}

//Q3

function isVowel (letter) {
  if (letter === "a") {
    return true;
  } else if (letter === "e") {
    return true;
  } else if (letter === "i"){
    return true;
  } else if (letter === "o") {
    return true;
  } else if (letter === "u") {
    return true;
    }
    else {
      return false;
    }
}

//Q4 rovarspraket("this is fun") => "tothohisos isos fofunon"
function rovarspraket(phrase) {
  var answer = "";

  // magic goes here
  // 1. figure out how to look at the letters one by one
  // 2. figure out how to decide if a letter is a vowel, consonant, or space
  // 3. figure out how to add the right thing onto the end of the answer 

  return answer;
    // var result = 't' + "o" + 'th' + "o" + 'h' + 'is'+ "o" + 's' + ' ' 'is'+ "o"
    // + 's' + ' '+ 'f' + "o" + 'f' + 'u' + 'n' + 'o' + 'n';
    // return result ;

}

console.log(rovarspraket("this is fun"))
console.log(rovarspraket("animals")) // => anonimomalolsos

//Q5
function reverse(){
    // var reverse
}
