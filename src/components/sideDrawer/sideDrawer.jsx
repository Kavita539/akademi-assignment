import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BasicTable from '../displayTable/displayTable';
import Badge from '@mui/material/Badge';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CustomizedInputBase from '../searchBar/searchBar';
import IconLabelButtons from '../iconLabelBtns/iconLabelButtons';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{bgcolor: 'transparent', boxShadow: 'none'}}>


        <Toolbar>
            <Stack direction="row" sx={{display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center'}}>
              <IconButton color="#311b92" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h5" noWrap component="div" sx={{color: '#311b92', fontWeight: '600'}}>
                Students
              </Typography>
            </Stack>

            <Stack direction="row" sx={{display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginLeft:'auto'}}>
              <Badge color="secondary" variant="dot" invisible={invisible}>
                <NotificationsActiveOutlinedIcon
                  sx={{color: '#b0bec5', bgcolor: '#fff', borderRadius: '50%', padding: '8px', fontSize:'2.5rem'}} />
              </Badge>
              <SettingsOutlinedIcon
                sx={{color: '#b0bec5', bgcolor: '#fff', borderRadius: '50%', padding: '8px',fontSize:'2.5rem'}} />
              <Stack direction='column'>
                <Typography sx={{color: '#311b92', fontSize:'12px'}}>Nabila A.</Typography>
                <Typography sx={{color: '#311b92', fontSize:'12px', textAlign: 'right'}}>Admin</Typography>
              </Stack>
              <Avatar>N</Avatar>
            </Stack>
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#5e35b1',
            zIndex: '20',
            color: '#ede7f6'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Avatar sx={{borderRadius: '12px', background: '#ff5722', fontWeight: '600'}}>A</Avatar>
            <Typography variant="h5" sx={{fontWeight: '600', color: 'white'}}>
              Akademi
            </Typography>
          </Stack>
          <IconButton onClick={handleDrawerClose} sx={{color: '#ede7f6'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          </Stack>
        </DrawerHeader>
        
        <List sx={{margin:'1rem', bgcolor: '#5e35b1'}}>
          {['Dashboard', 'Students', 'Teacher', 'Event', 'Finance', 'Food', 'User', 'Chat', 'Latest Activity'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:'#ede7f6'}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Stack direction="row" spacing={2}>
        <Typography  sx={{fontSize: '12px', display: "flex", justifyContent:"center", alignItems:"center", margin:"8px"}}>
          Akademi-School Admission Dashboard
          Made with by An Vu
        </Typography>
        </Stack>
        
      </Drawer>
      <Main open={open} sx={{bgcolor: '#eceff1'}}>
        <DrawerHeader />
        <Stack direction="row" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:'2rem 0'}}>
          <CustomizedInputBase/>
          <IconLabelButtons/>
        </Stack>
        <BasicTable/>
      </Main>
    </Box>
  );
}
