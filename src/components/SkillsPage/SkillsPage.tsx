import React, { FC } from 'react';
import styles from './SkillsPage.module.scss';

interface SkillsPageProps {}

const SkillsPage: FC<SkillsPageProps> = () => (
    <div className={styles.container}>
        <div className={styles.title}>SKILLS</div>
        <div className={styles.description}>DESCRIPTION GOES HERE</div>
        <div className={styles.content}>CONTENT GOES HERE</div>
    </div>
);

export default SkillsPage;
