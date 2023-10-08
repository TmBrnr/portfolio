import Container from './components/Container'

import Hero from './components/Hero'
import Bottom from './components/Bottom'
import About from './components/About'
import Experience from './components/Experience'
import Noise from './components/Noise'


export default function Home() {
  return (
    <div>
    <Container>
      <Hero />
      <About />
      <Experience />
      <Bottom />
      <Noise />
     </Container>
    </div>
  )
}
