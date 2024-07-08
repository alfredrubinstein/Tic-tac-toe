import React from 'react'
import style from './style.module.scss'

export default function index(props) {
const {rowIndex,cellIndex,matrix,onClick} = props;
  return (
    <button onClick={onClick} className={style.cell}>
{matrix[rowIndex][cellIndex]==='X' && <img src='oActive.svg' alt="O" width='50px'/>}
{matrix[rowIndex][cellIndex]==='O'  && <img src='xActive.svg' alt="X" width='50px' />}
{/* {matrix[rowIndex][cellIndex]==='O'  && <img src='x.svg' alt="X" />}
{matrix[rowIndex][cellIndex]==='O'  && <img src='o.svg' alt="X" />} */}
    </button>

  )
}
