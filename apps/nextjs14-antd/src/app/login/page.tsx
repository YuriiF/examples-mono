import { LoginForm } from '@examples/ui/forms';
import styles from './page.module.css';

export default function Login() {
  return (
    <div className={styles['container']}>
      <LoginForm />
    </div>
  );
}
