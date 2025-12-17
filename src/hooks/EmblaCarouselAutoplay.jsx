import { useCallback } from 'react'

export const useAutoplay = (emblaApi) => {

  const onAutoplayButtonClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return
      autoplay.reset()
      callback()
    }, [emblaApi])
    return { onAutoplayButtonClick }
}
