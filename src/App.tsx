import './styles/embla.css'

import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel from './components/embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, duration: 60, loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const App: React.FC = () => {
  return (
    <div>
      App
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}
