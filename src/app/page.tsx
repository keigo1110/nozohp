import Hero from '../components/Hero'
import Concept from '../components/Concept'
import Team from '../components/Team'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />
      <Concept />
      <Team />
      <Footer />
    </main>
  )
}