import styles from './page.module.css';

/* eslint-disable-next-line */
export interface LoginProps {}

export default function Login(props: LoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
    </div>
  );
}
