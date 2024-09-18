import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import styles from './HeroCarousel.module.scss'
import Icon from '@/components/Icon/Icon'
import HeroCard from '../HeroCard/HeroCard'
import useIsMobile from '@/hooks/useIsDesktop'

const HeroCarousel = ({
  cards,
  interval = 5000,
  transitionDuration = 500,
  playBtn = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const trackRef = useRef(null)
  const isMobile = useIsMobile()

  const totalCards = cards.length
  const cardsPerDisplay = isMobile ? 2 : 3
  const totalDisplays = totalCards - (cardsPerDisplay - 1)

  const moveToIndex = useCallback(
    (index) => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${
          index * (100 / cardsPerDisplay)
        }%)`
      }
      setCurrentIndex(index)
    },
    [cardsPerDisplay],
  )

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalDisplays
    moveToIndex(nextIndex)
  }, [currentIndex, totalDisplays, moveToIndex])

  const prevSlide = useCallback(() => {
    const prevIndex =
      (currentIndex - 1 + totalDisplays) % totalDisplays
    moveToIndex(prevIndex)
  }, [currentIndex, totalDisplays, moveToIndex])

  useEffect(() => {
    let intervalId
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, interval)
    }
    return () => clearInterval(intervalId)
  }, [isAutoPlaying, interval, nextSlide])

  const toggleAutoPlay = () =>
    setIsAutoPlaying((prev) => !prev)

  return (
    <div className={styles.heroCarousel}>
      <div
        ref={trackRef}
        className={styles.heroCarouselTrack}
        style={{
          transform: `translateX(-${
            currentIndex * (100 / cardsPerDisplay)
          }%)`,
          transition: `transform ${transitionDuration}ms ease-in-out`,
        }}
      >
        {cards.map((card, index) => (
          <HeroCard {...card} key={index} />
        ))}
      </div>

      <div
        onClick={prevSlide}
        className={`${styles.heroCarouselButton} ${styles.heroCarouselButtonPrev}`}
      >
        <Icon iconName='chevron' size={15} />
      </div>
      <div
        onClick={nextSlide}
        className={`${styles.heroCarouselButton} ${styles.heroCarouselButtonNext}`}
      >
        <Icon iconName='chevron' size={15} />
      </div>

      {playBtn && (
        <button
          onClick={toggleAutoPlay}
          className={`${styles.heroCarouselButton} ${styles.heroCarouselButtonPlay}`}
        >
          {isAutoPlaying ? '||' : '►'}
        </button>
      )}

      <div className={styles.heroCarouselDots}>
        {[...Array(totalDisplays)].map((_, index) => (
          <div
            key={index}
            onClick={() => moveToIndex(index)}
            className={`${styles.heroCarouselDotsDot} ${
              currentIndex === index
                ? styles.heroCarouselDotsDotActive
                : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
