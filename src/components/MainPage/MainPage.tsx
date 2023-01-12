import React from 'react';

import Button from '@mui/material/Button';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import styles from './MainPage.module.scss';

function handleContactMeClick() {
    // Take user to Connect with Me page
}

const MainPage = () => (
    <div className={styles.container}>
        <NavigationMenu></NavigationMenu>

        <div className={styles.intro}>
            <div className={styles.intro_text}>
                <div className={styles.name}>FIRST NAME LAST NAME</div>
                <div className={styles.description}>FULL-STACK SOFTWARE ENGINEER & SOMETHING ELSE</div>
                <div className={styles.contact_container}>
                    <Button variant="contained" className={styles.contact_button} onClick={handleContactMeClick}>
                        CONTACT ME
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default MainPage;
