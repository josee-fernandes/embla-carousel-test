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
          <Label color="red">Embla</Label>
          <Label color="lime" left={2}>
            Viewport
          </Label>
          <Label color="darkviolet" left={4}>
            Container
          </Label>
          <Label color="royalblue" left={6}>
            Slide
          </Label>
          <Label color="gray" left={2}>
            Controls
          </Label>
          <Label color="cyan" left={4}>
            Buttons
          </Label>
          <Label color="fuchsia" left={6}>
            Selected snap display
          </Label>
        </ul>
      </div>
      <div className="examples">
        <div>
          <p>
            Navigators <span className="on">ON</span>
          </p>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div>
          <p>
            Navigators <span className="off">OFF</span>
          </p>
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
