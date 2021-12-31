import styles from './index.less';
import { AppType } from '@infras/shared/types';
import { Component } from '@infras/ui/react';

export default function IndexPage() {
  return (
    <div>
      <p>AppType.Web: {AppType.Web}</p>
      <h1 className={styles.title}>Umi App</h1>
      <Component />
    </div>
  );
}
