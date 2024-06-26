import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './embla-carousel-arrow-buttons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from './embla-carousel-select-snap-display'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  withNavigators?: boolean
}

const EmblaCarousel: React.FC<PropType> = ({
  withNavigators = true,
  ...props
}) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className="embla custom-embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {withNavigators && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      )}
    </section>
  )
}

export default EmblaCarousel
