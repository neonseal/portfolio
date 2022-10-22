import styles from "./MainPage.module.scss";

import React, { FC } from "react";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <div className={styles.container}>MainPage Component</div>
);

export default MainPage;
