import styles from './index.less';
import { Component } from '@infras/ui/react';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Component />
    </div>
  );
}
