import Icon from '@/components/Icon/Icon'
import styles from './Hero_Filter.module.scss'

export default function Hero_Filter({
  options,
  setQuery,
  current,
}) {
  return (
    <div className={styles.heroFilter}>
      <p className={styles.heroFilterCurrent}>
        {current || 'Todas'}
        <Icon iconName='chevron' size={15} />
      </p>
      <div className={styles.heroFilterOptions}>
        <p
          data-value={'Todas'}
          className={styles.heroFilterOptionsEach}
          onClick={() => setQuery('Todas')}
        >
          Todas
        </p>
        {options.map((option) => (
          <p
            data-value={option}
            className={styles.heroFilterOptionsEach}
            key={option}
            onClick={() => setQuery(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  )
}
