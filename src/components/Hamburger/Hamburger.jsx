import styles from './Hamburger.module.scss';

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
};

export default HamburgerIcon;