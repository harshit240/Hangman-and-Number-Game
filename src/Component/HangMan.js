import React, { useState, useEffect } from 'react';

const words = ['hangman', 'javascript', 'react', 'openai']; // Array of words to choose from

const HangmanGame = () => {
  const [word, setWord] = useState(''); // Randomly chosen word
  const [guess, setGuess] = useState(''); // Player's guess
  const [tries, setTries] = useState(7); // Remaining tries
  const [gameOver, setGameOver] = useState(false); // Game over flag
  const [won, setwon] = useState(false); // Game over flag
  const [wonText, setwonText] = useState(false); // Game over flag


  useEffect(() => {
    // Select a random word from the words array
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
    // console.log(randomWord)
  }, [won,wonText,gameOver,tries]);

  const handleGuess = (event) => {
    event.preventDefault();

    // Validate the guess and update the state
    if (guess.trim() !== '') {
      const guessedLetter = guess.toLowerCase();
      console.log("Hiihi",guessedLetter)
      
      if (word.includes(guessedLetter)) {
        // Correct guess
        if(guess === word){
          setwon(true)
          setwonText("You Won Congratulations ")
        }
        const updatedWord = word.split('').map((letter) => (letter === guessedLetter ? letter : '_')).join('');
        setWord(updatedWord);
      } else {
        // Incorrect guess
        setwonText("")
        setwon(false)
        setTries((prevTries) => prevTries - 1);
      }
      setGuess('');
    }else if (guess === word) {

    } else {
      
    }

    // Check if the word is fully guessed or all tries used
    if (!word.includes('_') || tries === 1) {
      setGameOver(true);
    }
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleRestart = () => {
    setGuess('');
    // setTries(7);
    setGameOver(false);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    // console.log(randomWord);
    setWord(randomWord.toLowerCase());
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className="letter">
        {letter}
      </span>
    ));
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      {/* <p>Tries remaining: {tries}</p> */}
      {!gameOver ? (
        <div>
          <p>Guess the word by entering letters</p>
          <form onSubmit={handleGuess}>
            <input type="text" value={guess} onChange={handleChange} />
            <button type="submit">Guess</button>
          </form>
        </div>
      ) : (
        <div>
          <p>Game Over! You {tries === 0 ? 'lost' : `${tries} Tries remaining`}.</p>
          {
            won ? (
              <p>{wonText}.</p>
            ):(
              <p></p>
            )
          }
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default HangmanGame;
