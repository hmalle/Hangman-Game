
var words=["awkward","bagpipes","banjo","bungler","croquet","crypt","dwarves","fervid","fishhook","fjord","gazebo","gypsy","haiku","haphazard","hyphen","ivory","jazzy","jiffy","jinx","jukebox","kayak","kiosk","klutz","memento","mystify","numbskull","ostracize","oxygen","pajama","phlegm","pixel","polka","quad","quip","rhythmic","rogue","sphinx","squawk","swivel","toady","twelfth","unzip","waxy","qildebeest","yacht","zealous","zigzag","zippy","zombie"];

var hangman{
  wins=0,
  guessesLeft=10,
  currentWord="",
  guessedLetters =[]
};


function playGame()
{
  for(var a=0; a<10; a++)
    document.onkeyup = function(event)
    {
      if (guessesLeft==0)
      {
        return 0;
      }
    }
}

playGame();
