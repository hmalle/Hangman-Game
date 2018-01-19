
var newGame=true; //This value to be used in gameplaying.
var placeHolder =""; //Value used to store user correct guesses
var wins= 0;
var losses=0;
var guessesLeft = 10;
var currentWord = "";
var lettersGuessed = [];
var words=["awkward","bagpipes","banjo","bungler","croquet","crypt","dwarves","fervid","fishhook","fjord","gazebo","gypsy","haiku","haphazard","hyphen","ivory","jazzy","jiffy","jinx","jukebox","kayak","kiosk","klutz","memento","mystify","numbskull","ostracize","oxygen","pajama","phlegm","pixel","polka","quad","quip","rhythmic","rogue","sphinx","squawk","swivel","toady","twelfth","unzip","waxy","qildebeest","yacht","zealous","zigzag","zippy","zombie"];

function reset()
{
  guessesLeft = 10;
  lettersGuessed = [];
}

function isPresent(currentWord, letter)
{
  /* checks if the guessed letter is present in the currentWord*/
  for(var a=0; a<currentWord.length; a++)
  {
    if(currentWord[a] === letter)
    {
      return true;/*only one hit of existence required*/
    }
  }
  return false;
}

function isAlphabet(character)
{
  if( character.match(/[a-z]/i) && character.length === 1)
  {
    return true;
  }
  return false;
}

function revealLetter(currentWord,placeHolder,letter)
{
  /*unmasks the letters a user got right*/
  var newPlaceHolder = "";
  for(var a=0;a<currentWord.length; a++)
  {
    if(currentWord[a] === letter)
    {
      newPlaceHolder += letter;
    }
    else
    {
      if(isAlphabet(placeHolder[a]))
      {
        newPlaceHolder += placeHolder[a];
      }
      else
      {
        newPlaceHolder +='*';
      }
    }
  }
  return newPlaceHolder;
}

function getPlaceHolder(currentWord)
{
  /*returns masked string of the same length as our unknown word*/
  var newPlaceHolder = "";
  for(var a=0;a<currentWord.length; a++)
  {
    newPlaceHolder+="*";
  }
  return newPlaceHolder;
}

function showStats(placeHolder)
{
  stats = "<p> PRESS ANY KEY TO GET STARTED </p>"+
          "<p> WINS: "+ wins +"</p>"+
          "<p> LOSSES: "+ losses +"</p>"+
          "<p> CURRENT WORD</p>"+
          "<p>"+ placeHolder +"</p>"+
          "<p>GUESSES REMAINING</p>"+
          "<p>"+guessesLeft+"</p>"+
          "<p>LETTERS ALREADY GUESSED</p>"+
          "<p>"+lettersGuessed+"</p>";
  document.querySelector(".box").innerHTML = stats;
}

function playGame()
{
  document.querySelector(".box").innerHTML = "<p> PRESS ANY KEY TO GET STARTED </p>";
  document.onkeyup = function(event)
  {
    var guess = event.key
    if(newGame){
      guess = "Meta"; /*to be ignored*/
      reset();
      currentWord = words[Math.floor(Math.random()*words.length)];
      placeHolder = getPlaceHolder(currentWord);
      showStats(placeHolder);
      newGame = 0;
    }
    if(isPresent(currentWord, guess))
    {
      placeHolder = revealLetter(currentWord,placeHolder, guess);
    }
    else
    {
      if(isAlphabet(guess) && !isPresent(lettersGuessed,guess))
      {
        guessesLeft--;
        lettersGuessed.push(guess)
      }
    }
    
    if(currentWord === placeHolder)
    {
      wins++;
      showStats(placeHolder);
      newGame = true;
    }
    if (guessesLeft === 0)
    {
      losses++;
      showStats(placeHolder);
      newGame = true;
    }
    showStats(placeHolder);
  }
}

playGame();
