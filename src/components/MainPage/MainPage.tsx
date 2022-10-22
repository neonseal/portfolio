import React, { FC } from 'react';

import styles from './MainPage.module.scss';

interface MainPageProps {}

interface HeaderLink {
    name: string;
}

const headerLinks: HeaderLink[] = [
    { name: 'Home' },
    { name: 'Skills' },
    { name: 'Projects' },
    { name: 'Experience' },
    { name: 'Contact Me' },
];

const MainPage: FC<MainPageProps> = () => (
    <div className={styles.container}>
        <div className={styles.header}>
            {headerLinks.map((link) => (
                <span key={link.name} className={styles.header_link}>
                    {link.name}
                </span>
            ))}
        </div>
        <div className={styles.intro}>
            <img className={styles.intro_image} src="https://via.placeholder.com/314" alt="Interesting" />
            <div className={styles.intro_text}>
                <div className={styles.name}>FIRST NAME LAST NAME</div>
                <div className={styles.description}>FULL-STACK SOFTWARE ENGINEER & SOMETHING ELSE</div>
                <button>Contact me</button>
            </div>
        </div>
    </div>
);

export default MainPage;
