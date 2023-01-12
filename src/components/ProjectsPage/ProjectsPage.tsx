import React from 'react';
import styles from './ProjectsPage.module.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProjectsPage = () => (
    <div className={styles.container}>
        <div className={styles.title}>PROJECTS</div>
        <div className={styles.content}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid className={styles.grid} container spacing={2}>
                    <Grid xs={2.5}>
                        <div className={styles.filterColumn}>Filter Options</div>
                    </Grid>
                    <Grid xs={9.5}>
                        <div className={styles.projectColumn}>Projects</div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
);

export default ProjectsPage;
