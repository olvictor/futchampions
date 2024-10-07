import React, { useContext } from 'react'
import styles from './TextoPrincipal.module.css'
import { useTrail, a } from '@react-spring/web'
import { DadosContext } from '../../context/DadosContext'
import NumeroAnimado from '../NumeroAnimado/NumeroAnimado'

const TextoPrincipal = () => {
  const {dados}= useContext(DadosContext)


  const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText}      style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }


  return (
    <Trail open={'true'}>
      <span><NumeroAnimado  n={dados?.length}/></span>
      <span>Partidas</span>
      <span>Jogadas</span>      
    </Trail>
  )
}

export default TextoPrincipal