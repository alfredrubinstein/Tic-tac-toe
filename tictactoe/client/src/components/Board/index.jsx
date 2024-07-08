import React from 'react'
import style from './style.module.scss'
import Cell from '../Cell'
import {useState} from 'react'
// import calculateWinner from '../utils/calculateWinner'

export default function index() {
  const initialMatrix = Array(3).fill(null).map(()=> Array(3).fill(null));
const [matrix, setInitialMatrix] = useState(initialMatrix);
const [player,setPlayer] = useState('');


const handleCell = (e, rowIndex, cellIndex) => {
  console.log(`pressed cell: column ${rowIndex+1},row ${cellIndex+1}`);
  const cellValue = matrix[rowIndex][cellIndex];
  if(cellValue === 'X' || cellValue === 'O'){
    console.log('cell already taken');
    return;}

  
    const newMatrix = [...matrix];
    const nextPlayer= player ==='X'?'O':'X';
    setPlayer(nextPlayer)
    newMatrix[rowIndex][cellIndex] = nextPlayer;
    setInitialMatrix(newMatrix);
console.log(newMatrix);
    //activar y importar calculateWinner de calculateWinner.js
    // calculateWinner(newMatrix);
}


  
return(
<div className={style.board} >
  {matrix.map((row, rowIndex)=> {
    return <div className={style.rows} key={rowIndex}>
      {row.map((cell, cellIndex)=> {
        return <Cell
        matrix={matrix}
        key={cellIndex}
        rowIndex={rowIndex}
        cellIndex={cellIndex}
        onClick={(e)=>handleCell(e,rowIndex,cellIndex)}/>
      })}
    </div>
  })}
</div>
)}
