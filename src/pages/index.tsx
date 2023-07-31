import Main from '@/components/Main'
import Meta from '@/components/Meta'
import About from '@/views/home/About'
import Hero from '@/views/home/Hero'
import Shapes from '@/views/home/Shapes'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Open Oracle origami"
          description="Any Form, Any Shape. Web3's Modular Open Oracle."
        />
      }
    >
      <Hero />
      <Shapes />
      <About />
    </Main>
  )
}

export default Index
