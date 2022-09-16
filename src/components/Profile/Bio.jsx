import styles from "./Bio.module.css";

const Bio = (props) => {
  return (
    <div className={styles.bio}>
      <h1 className={styles.name}>{props.name}</h1>
      <p className={styles.item}>Date of Birth: 7 April</p>
      <p className={styles.item}>City: Minsk</p>
      <p className={styles.item}>Education: Garward</p>
      <p className={styles.item}>Web-Site: https://google.com</p>
    </div>
  );
};
export default Bio;
