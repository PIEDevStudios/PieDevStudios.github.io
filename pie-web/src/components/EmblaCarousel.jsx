import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from '../hooks/EmblaCarouselAutoplay.jsx'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../hooks/EmblaCarouselArrowButtons.jsx'

const EmblaCarousel = (props) => {
  const { game, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false})
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {game?.frontmatter?.imageCarousel?.map((img, index) => (
            <div className="embla__slide" key={index}>
            <img 
                src={img} 
                alt={`Game screenshot ${index + 1}`}
                className="w-full h-full object-cover"
            />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls background-white">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;