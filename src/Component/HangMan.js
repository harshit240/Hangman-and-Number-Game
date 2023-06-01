import React, { useState, useEffect } from 'react';

const words = ['hangman', 'javascript', 'react', 'openai']; // Array of words to choose from

const HangmanGame = () => {
  const [word, setWord] = useState(''); // Randomly chosen word
  const [guess, setGuess] = useState(''); // Player's guess
  const [tries, setTries] = useState(7); // Remaining tries
  const [gameOver, setGameOver] = useState(false); // Game over flag
  const [won, setwon] = useState(false); // Won 
  const [wonText, setwonText] = useState(false); // Won Text 
  const [replay,setReplay] = useState(false);

  useEffect(() => {
    // Select a random word from the words array
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
  }, [won,wonText,gameOver,tries,replay]);

  const handleGuess = (event) => {
    event.preventDefault();

    // Validate the guess and update the state
    if (guess.trim() !== '') {
      const guessedLetter = guess.toLowerCase();
      
      if (word.includes(guessedLetter)) {
        // Correct guess
        if(guess === word){
          setwon(true)
          setwonText("You Won Congratulations ")
        }
        const updatedWord = word.split('').map((letter) => (letter === guessedLetter ? letter : '_')).join('');
        setWord(updatedWord);
      }
       else {
        // Incorrect guess
        setwonText("")
        setwon(false)
        if(tries === 0){
          setReplay(true) //Replay
          setTries(7);
        }
        setTries((prevTries) => prevTries - 1);
      }
      setGuess('');
    }else if (guess === "") {
      setwonText("");
      setwon(false)
      setTries((prevTries) => prevTries - 1);
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
    if (tries === 0) {
      setwonText("You Lost");
    }
    setGuess('');
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
  const handleReplay = () =>{
    setReplay(true);
    setGuess('');
    setGameOver(false);
    setTries(7);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    // console.log(randomWord);
    setWord(randomWord.toLowerCase());
  }
  return (
    <div style={{textAlign:"center",margin:"30px"}}>
      <h1>Hangman Game</h1>
      {/* <p>Tries remaining: {tries}</p> */}
      {!gameOver ? (
        <div>
          <p>Guess the word by entering letters</p>
          <form onSubmit={handleGuess}>
            <input style={{color:"black",backgroundColor:"white",padding:"10px",margin:"10px",outline:"none"}} type="text" value={guess} onChange={handleChange} />
            <button style={{color:"white",backgroundColor:"yellowGreen",padding:"10px"}} className='btn' type="submit">Guess</button>
          </form>
        </div>
      ) : (
        <div>
          <p>Game Over! You {tries === 0 ? 'lost' : `have ${tries} Tries`}</p>
          {
            won ? (
              <p>{wonText}.</p>
            ):(
              <></>
            )
          }
          {
            tries === 0 ? (
              <button onClick={handleReplay} style={{color:"white",backgroundColor:"Green",padding:"10px"}} className='btn' >Replay</button>

            ) : (
              <button onClick={handleRestart} style={{color:"white",backgroundColor:"yellowGreen",padding:"10px"}} className='btn' >Restart</button>
            ) 
          }
        </div>
      )}
    </div>
  );
};

export default HangmanGame;
