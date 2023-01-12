import React from 'react';
import styles from './ConnectPage.module.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ConnectPage = () => (
    <div className={styles.container}>
        <div className={styles.title}>CONNECT WITH ME</div>
        <div className={styles.content}>
            <div className={styles.profileGrid}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <div className={styles.profileImgColumn}>
                                <a href="https://placeholder.com">
                                    <img src="https://via.placeholder.com/300"></img>
                                </a>
                            </div>
                        </Grid>
                        <Grid xs={8}>
                            <div className={styles.descriptionColumn}>Description</div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className={styles.emailContainer}> EMAIL ADDRESS</div>
            <div className={styles.socials}>SOCIAL HANDLES</div>
        </div>
    </div>
);

export default ConnectPage;
