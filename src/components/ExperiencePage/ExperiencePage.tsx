import React, { FC } from 'react';
import styles from './ExperiencePage.module.scss';

interface ExperiencePageProps {}

const ExperiencePage: FC<ExperiencePageProps> = () => (
    <div className={styles.container}>
        <div className={styles.title}>PROFESSIONAL EXPERIENCE</div>
        <div className={styles.content}>REACT MUI ACCORDION GOES HERE</div>
    </div>
);

export default ExperiencePage;
