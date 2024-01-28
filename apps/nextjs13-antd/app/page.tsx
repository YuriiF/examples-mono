import styles from './page.module.css';
import { Button } from 'antd';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Nextjs 13 with Ant Design</h1>
          </div>

          <Button type="primary">Button</Button>

          <footer>
            <p id="love">
              Carefully Crafted With
              <svg
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
