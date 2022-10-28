import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import styles from './NavigationMenu.module.scss';

export default function NavigationMenu() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navLinks = ['Home', 'Skills', 'Projects', 'Experience', 'Contact Me'];

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavLinkClick = () => {
        handleCloseNavMenu();

        // Navigate to selected page
    };

    return (
        <AppBar className={styles.navigation_appbar}>
            <Toolbar disableGutters className={styles.header_toolbar}>
                {/* Collapsed Navigation Hamburger Menu for Smaller Screens */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        className={styles.header_menu_button}
                        onClick={handleOpenNavMenu}
                        size="large"
                        aria-label="site navigation hamburger menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}>
                        {navLinks.map((link) => (
                            <MenuItem key={link} onClick={handleNavLinkClick}>
                                <div className={styles.nav_link}>{link}</div>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Expanded Navigation Menu for Larger Screens */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {navLinks.map((page) => (
                        <Button
                            key={page}
                            onClick={handleNavLinkClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
