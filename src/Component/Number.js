import React, { useState, useEffect } from 'react';

const NumbersGame = () => {
  const [randomNumber, setRandomNumber] = useState(null); // Random number between 1 and 100
  const [guess, setGuess] = useState(''); // Player's guess
  const [tries, setTries] = useState(3); // Remaining tries
  const [result, setResult] = useState(''); // Guess result

  useEffect(() => {
    // Generate random number when the game starts
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  const handleGuess = (event) => {
    event.preventDefault();

    // Validate the guess and update the result
    if (guess.trim() !== '') {
      const playerGuess = parseInt(guess, 10);
      if (playerGuess === randomNumber) {
        setResult('You guessed the correct number!');
        setTries(0);
      } else if (playerGuess < randomNumber) {
        setResult('Higher');
      } else {
        setResult('Lower');
      }
      setGuess('');
      setTries((prevTries) => prevTries - 1);
    }
  };

  const handleRestart = () => {
    setGuess('');
    setTries(3);
    setResult('');
    generateRandomNumber();
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div style={{textAlign:"center",margin:"30px"}}>
      <h1 style={{textAlign:"center",margin:"30px"}}>Numbers Game</h1>
      {tries > 0 && (
        <div style={{textAlign:"center",margin:"30px"}}>
          <p style={{textAlign:"center",margin:"30px"}}>Guess the random number between 1 and 100.</p>
          <p style={{textAlign:"center",margin:"30px"}}>Tries remaining: {tries}</p>
          {result && <p>{result}</p>}
          <form onSubmit={handleGuess} style={{textAlign:"center",margin:"30px"}}>
            <input type="number" value={guess} onChange={handleChange} style={{color:"black",backgroundColor:"white",padding:"10px",margin:"10px"}}/>
            <button type="submit" style={{color:"white",backgroundColor:"yellowGreen",padding:"10px"}}>Guess</button>
          </form>
        </div>
      )}
      {tries === 0 && (
        <>
          <p >Game Over! You lost. The number was {randomNumber}.</p>
          <button onClick={handleRestart}>Restart</button>
        </>
      )}
    </div>
  );
};

export default NumbersGame;
