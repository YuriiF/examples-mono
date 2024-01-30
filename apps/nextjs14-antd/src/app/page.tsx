import styles from './page.module.css';

export default async function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Content</div>
    </div>
  );
}
