

function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
  return;
}

function logWhisper(string){
  console.log(string.toLowerCase());
  return;
}

function sayHiToGrandma(string){
  var str = "I can\'t hear you!";
  if(string.toLowerCase() === string){
    return str;
  }
}

function sayHiToGrandma(string){
  var str = "YES INDEED!";
  if(string.toUpperCase() === string){
    return str;
  }
}

function sayHiToGrandma(string){
  var str = "I love you, too."
  if(string === "I love you, Grandma."){
    return str;
  }
}
