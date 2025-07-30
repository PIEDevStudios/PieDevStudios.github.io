import { useCallback, useEffect } from 'react'

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  useEffect(() => {
    if (!emblaApi) return
  }, [emblaApi])

  return {
    onPrevButtonClick,
    onNextButtonClick
  }
}
