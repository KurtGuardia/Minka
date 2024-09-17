import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import styles from './HeroCarousel.module.scss'
import Icon from '@/components/Icon/Icon'
import { HeroCard } from '../HeroCard/HeroCard'

const HeroCarousel = ({
  cards,
  interval = 5000,
  transitionDuration = 500,
  playBtn = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const trackRef = useRef(null)

  const totalCards = cards.length
  const cardsPerSlide = 3
  const totalSlides = totalCards - (cardsPerSlide - 1)

  const moveToIndex = useCallback(
    (index) => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${
          index * (100 / cardsPerSlide)
        }%)`
      }
      setCurrentIndex(index)
    },
    [cardsPerSlide],
  )

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalSlides
    moveToIndex(nextIndex)
  }, [currentIndex, totalSlides, moveToIndex])

  const prevSlide = useCallback(() => {
    const prevIndex =
      (currentIndex - 1 + totalSlides) % totalSlides
    moveToIndex(prevIndex)
  }, [currentIndex, totalSlides, moveToIndex])

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
            currentIndex * (100 / cardsPerSlide)
          }%)`,
          transition: `transform ${transitionDuration}ms ease-in-out`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.heroCarouselTrackSlide}
          >
            <HeroCard {...card} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`${styles.heroCarouselButton} ${styles.heroCarouselButtonPrev}`}
      >
        <Icon iconName='chevron' size={15} />
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.heroCarouselButton} ${styles.heroCarouselButtonNext}`}
      >
        <Icon iconName='chevron' size={15} />
      </button>

      {playBtn && (
        <button
          onClick={toggleAutoPlay}
          className={`${styles.heroCarouselButton} ${styles.heroCarouselButtonPlay}`}
        >
          {isAutoPlaying ? '||' : '►'}
        </button>
      )}

      <div className={styles.heroCarouselDots}>
        {[...Array(totalSlides)].map((_, index) => (
          <button
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
