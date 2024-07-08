import React from 'react'
import style from './style.module.scss'

export default function index({content, onClick}) {
    return (
    <div className={style.button}>
<button type='button' onClick={onClick}>{content}</button>
    </div>
  )
}
