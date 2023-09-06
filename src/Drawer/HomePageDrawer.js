import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePageDrawer(props) {
    const [state, setState] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setState(props.open)


    }, [props.open])

    const handleClose = () => {
        props.setOpen(false)
        toggleDrawer('left', false)
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding onClick={() => navigate('/homepage')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary="Home"  />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => navigate('/gallery')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <CollectionsIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary="Gallery"  />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding onClick={() => navigate('/technoparv')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <EngineeringIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary="Technoparv"  />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding onClick={() => navigate('/vilay')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <EmojiEventsIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary="Vilay"  />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding onClick={() => navigate('/regs')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupAddIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary="Register"  />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => navigate('/adminlogin')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LoginIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary="Sign In"  />
                    </ListItemButton>
                </ListItem>
                

            </List>
            <Divider />
        </Box>
    );

    return (
        <div>

            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>right</Button>
                <Drawer
                    anchor={'left'}
                    open={state}
                    onClose={handleClose}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>

        </div>
    );
}