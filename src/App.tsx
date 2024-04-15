import './styles/embla.css'
import './styles/global.css'
import './styles/custom-embla.css'
import './styles/labels.css'

import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel from './components/embla-carousel'
import { Label } from './components/label'

const OPTIONS: EmblaOptionsType = { dragFree: true, duration: 60, loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="labels">
        <p>Labels</p>
        <ul>
          <Label color="red">Red</Label>
          <Label color="green">Green</Label>
          <Label color="purple">Purple</Label>
          <Label color="pink">Pink</Label>
        </ul>
      </div>
      <div className="examples">
        <div>
          <p>Navigators ON</p>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div>
          <p>Navigators OFF</p>
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            withNavigators={false}
          />
        </div>
      </div>
    </div>
  )
}
