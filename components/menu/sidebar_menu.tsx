import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import style from '../../styles/SideBarMenu.module.css'

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps): any {
  const { icon, primary, to } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} href={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
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
            <ListItemLink to={'/'} primary={'Dashboard'} />
          </List>
        </Paper>
    </Box>
  );
}
