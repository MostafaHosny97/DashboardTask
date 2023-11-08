import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import BoxC from './BoxC'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import home from '../assets/home.svg';
import box from '../assets/box.svg';
import users from '../assets/users.svg';
import circle from '../assets/help-circle.svg';
import bag from '../assets/bag.svg';
import activity from '../assets/activity.svg';
import nimbus from '../assets/nimbus.svg';
import setting from '../assets/setting.svg';
import logOut from '../assets/log-out.svg';

const drawerWidth = 240;


const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export default function MiniDrawer() {

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );


    return (
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
        <div className='hidden md:block'>
            <Drawer variant="permanent">
                <List style={{ paddingTop: 50 }}>
                    {[home, box, users, circle, bag, activity, nimbus, setting].map((text, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'center',
                                    px: 2.5,
                                    py: 2
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img src={text} alt="" />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <img src={logOut} alt="" className=' cursor-pointer' />
            </Drawer>
        </div>
            
            <BoxC />
        </Box>
    );
}