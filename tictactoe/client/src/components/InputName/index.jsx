import React from 'react'
import style from './style.module.scss'
import Button from '../Button/index.jsx'

export default function index(props) {
const handleJoin = () => {console.log("se presiono en JOIN");}
const handleCreateGame = () => {console.log("se presiono en CREATE A GAME");}
const placeholder = props.placeholder || "ENTER CODE GAME";

return (
    <div>
<form>
  <input type="text" name="name" placeholder={placeholder} />
  {props.placeholder && <Button content={"JOIN"} onClick={handleJoin} />}
  {props.placeholder && <Button content={"CREATE A GAME"} onClick={handleCreateGame} />}


{/* revisar borrar esto */}
<Button content={"JOIN"} onClick={handleJoin} />




</form>
    </div>
  )
}
