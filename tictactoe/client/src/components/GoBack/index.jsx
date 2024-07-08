import React from 'react'
import style from './style.module.scss'
 import back from '../../assets/back.png'


export default function index({onClick}) {
  
    return (
    <div className={style.GoBack}>
<button type='button' onClick={onClick}>
<img src={back} alt="<-" width='20px'/>
</button>
    </div>
  )
}
