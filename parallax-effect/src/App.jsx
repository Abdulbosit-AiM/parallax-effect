import moon from './moon.png'
import land from './land.png'
import cat from './cat.gif'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'

function App() {
  const ref = useRef()

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer 
          offset={0} 
          speed={1}
          factor={2}
          style={{
            backgroundImage:`url(${moon})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2} 
          speed={1}
          factor={4}
          style={{
            backgroundImage:`url(${land})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>
        
        <ParallaxLayer 
          offset={0.2} 
          speed={0.05}
          onCLick={() => ref.current.scrollTo(3)}
          >
          <h2>Welcome to my WebSite</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3.2} 
          speed={2}
          onCLick={() => ref.current.scrollTo(0)}
          >
          <h2>Web development is awesome</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start:0.9, end:2.5}}
        >
          <img src='cat'/>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}