function eightBall(){
    const answer = Math.floor(Math.random() * 8 +1);
  var fortune = "";

  var fortunes = ["Yes, definitely","You can rely on it.", "Without a doubt.", "Most likely.", "Hmm...I'm not sure!", "Yikes. Nope.", "Try again.", "Very doubtful."]

  fortunes.push("I wouldn't if I were you.")

  fortunes.pop()

  console.log(fortunes);

  fortunes.unshift("I wouldn't if I were you.")

  console.log(fortunes)

  console.log(fortunes[answer]);
}

eightBall()
 