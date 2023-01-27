import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import style from '../../styles/SideBarMenu.module.css'
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps): any {
  const { icon, primary, to } = props;
  const router = useRouter();

  function linkActive(props: string) : string{
    return router.pathname === props ? style['active'] : '';
  } 
  
  return (
    <ListItem className={style['side-bar-item']} disablePadding>
      <ListItemButton className={linkActive(to)}component={Link} href={to}>
        {icon ? <ListItemIcon sx={{color:'inherit'}}>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
}

export default function SideBarMenu() {
  return (
    <Box className={style['side-bar-wrapper']}>
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to={'/'} icon={<HomeIcon/>} primary={'Dashboard'}/>
          </List>
        </Paper>
    </Box>
  );
}
