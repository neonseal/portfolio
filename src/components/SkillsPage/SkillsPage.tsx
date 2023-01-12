import React from 'react';
import styles from './SkillsPage.module.scss';
import Grid2 from '@mui/material/Unstable_Grid2';
import SkillTile from './SkillTile/SkillTile';

const SkillsPage = () => (
    <div className={styles.container}>
        <div className={styles.title}>SKILLS</div>
        <div className={styles.description}>
            Click through the technologies below to learn more about my work and projects
        </div>
        <div className={styles.content}>
            <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ md: 12 }}>
                {Array.from(Array(8)).map((_, index) => (
                    <Grid2 xs={1} sm={2} md={3} key={index}>
                        <div className={styles.tile}>
                            <SkillTile></SkillTile>
                        </div>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    </div>
);

export default SkillsPage;
