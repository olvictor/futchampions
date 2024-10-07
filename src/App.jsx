import './App.css'
import React from 'react'
import { DadosStorage} from './context/DadosContext';
import { useTrail, a } from '@react-spring/web'
import TextoPrincipal from './components/TextoPrincpial/TextoPrincipal';

function App() {

  return (
    <>
     <DadosStorage>
      <TextoPrincipal />
     </DadosStorage>
    </>
  )
}

export default App
