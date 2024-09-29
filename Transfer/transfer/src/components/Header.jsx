// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" style={{opacity:"0.9"}} >
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ textAlign:'left'}}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white'  }}>TCompany
                        </Link>
                    </Typography>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Button color="inherit" component={Link} to="/">Anasayfa</Button>
                        <Button color="inherit" component={Link} to="/about">Hakkında</Button>
                    </div>
                </Toolbar>
        </AppBar>
    );
};

export default Header;
