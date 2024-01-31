// src/GameBoard.js

import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import Snake from './Snake.js';
import './Food.css'; // Import the Food.css file

const GameBoard = () => {
  const gridSize = 10; // Adjust based on the grid size
  const segmentSize = 30; // Adjust based on the desired size of each segment
  const [snakeSegments, setSnakeSegments] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState(generateFoodPosition());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(200); // Adjust the initial speed
  const initialSnake = [{ x: 0, y: 0 }];

  function generateFoodPosition() {
    const x = Math.floor(Math.random() * gridSize) * segmentSize;
    const y = Math.floor(Math.random() * gridSize) * segmentSize;
    return { x, y };
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (gameOver) {
      return;
    }

    const timer = setInterval(() => {
      const newSnakeSegments = snakeSegments.map((segment, index) => {
        if (index === 0) {
          switch (direction) {
            case 'UP':
              return { x: segment.x, y: segment.y - segmentSize };
            case 'DOWN':
              return { x: segment.x, y: segment.y + segmentSize };
            case 'LEFT':
              return { x: segment.x - segmentSize, y: segment.y };
            case 'RIGHT':
              return { x: segment.x + segmentSize, y: segment.y };
            default:
              return segment;
          }
        } else {
          return snakeSegments[index - 1];
        }
      });

      // Check for collision with food
      const head = newSnakeSegments[0];
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFoodPosition());
        // Increase the length of the snake
        setSnakeSegments((segments) => [
          head,
          ...segments,
        ]);
        setScore((prevScore) => prevScore + 1);
        setSpeed((prevSpeed) => Math.max(100, prevSpeed - 10));
      } else {
        // If no collision with food, update the snake normally
        setSnakeSegments(newSnakeSegments);
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [direction, gameOver, snakeSegments, speed, food, segmentSize]);

  useEffect(() => {
    if (snakeSegments[0].x === food.x && snakeSegments[0].y === food.y) {
      setFood(generateFoodPosition());
      setSnakeSegments((segments) => [
        { x: segments[0].x, y: segments[0].y },
        ...segments,
      ]);
      setScore((prevScore) => prevScore + 1);

      setSpeed((prevSpeed) => Math.max(100, prevSpeed - 10));
    }

    const head = snakeSegments[0];
    const body = snakeSegments.slice(1);

    if (
      head.x < 0 ||
      head.x >= gridSize * segmentSize ||
      head.y < 0 ||
      head.y >= gridSize * segmentSize ||
      body.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      setSnakeSegments(initialSnake);
      setFood(generateFoodPosition());
      // Update the score directly without resetting it
      setSpeed(200);
    }
  }, [snakeSegments, food, gridSize, score, speed, initialSnake]);

  const restartGame = () => {
    setSnakeSegments([{ x: 0, y: 0 }]);
    setFood(generateFoodPosition());
    setScore(0);
    setGameOver(false);
    setDirection('RIGHT');
    setSpeed(200);
  };

  return (
    <div className="game-board">
      {gameOver ? (
        <div className="game-over-screen">
          <h2>Game Over!</h2>
          {/* Display the updated score directly */}
          <p>Your score: {score}</p>
          <button onClick={restartGame}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="score">Score: {score}</div>
          <div className="grid">
            {[...Array(gridSize * gridSize)].map((_, index) => (
              <div key={index} className="cell" />
            ))}
          </div>
          <Snake snakeSegments={snakeSegments} />
          <div className="food" style={{ top: food.y, left: food.x }} />
        </>
      )}
    </div>
  );
};

export default GameBoard;
