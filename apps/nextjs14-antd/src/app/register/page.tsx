import { RegisterForm } from '@examples/ui/forms';

import styles from './page.module.css';

/* eslint-disable-next-line */
export interface RegisterProps {}

export default function Register(props: RegisterProps) {
  return (
    <div className={styles['container']}>
      <RegisterForm />
    </div>
  );
}
