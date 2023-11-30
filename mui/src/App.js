import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function App() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  const [value, setValue] = React.useState("recents");

 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Button variant='outlined'>Hello There</Button>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label='Recents'
          value='recents'
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label='Favorites'
          value='favorites'
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label='Nearby'
          value='nearby'
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label='Folder'
          value='folder'
          icon={<FolderIcon />}
        />
      </BottomNavigation>
      <Stack spacing={2}>
        <Breadcrumbs separator='›' aria-label='breadcrumb'>
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs separator='-' aria-label='breadcrumb'>
          {breadcrumbs}
        </Breadcrumbs>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </>
  );
}

export default App;
