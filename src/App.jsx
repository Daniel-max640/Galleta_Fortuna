

import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {
  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])
  
  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(4)
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.png)`
  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container__title'>Galleta de la Fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote 
      setQuote={setQuote}
      phrases={phrases} 
      setNumberBg={setNumberBg}
      />      
    </div>
  )
}

export default App