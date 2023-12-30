import { useState } from 'react'
import './App.css'
import GridController from './GridController'

const db = [
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'
]

//black  '#000000'
//red    '#ff0000'
//yellow '#ffff00'
//orange '#ffa500'
//blue   '#0000ff'
//green  '#00ff00'
//grey   '#808080'
//white  '#ffffff'

function App() {

  return (
    <>
      <h2>PIXEL FLIP</h2>
      <GridController/>
    </>
  )
}

export default App
