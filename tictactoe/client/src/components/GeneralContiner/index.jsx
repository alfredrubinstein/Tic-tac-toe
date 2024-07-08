import React from 'react'
import style from './style.module.scss'
import Board from '../Board'
import Button from '../Button'
import GoBack from '../GoBack'
import InputName from '../InputName'

export default function index() {
  
  const handleGoBack = () => {console.log("se hizo click en go back");}
    return (
    <div className={style.generalContainer}>
     <GoBack onClick={handleGoBack}/>
      <InputName/>
      <div className={style.internalBoxBoard}>
      <Board/>
      </div>
      </div>
  )
}
