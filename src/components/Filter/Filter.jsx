import styles from './Filter.module.css';

const Filter = ({ filter, onFilter }) => {
  return (
    <input className={styles.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={ onFilter }
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
