import React, { useState } from "react";
import logo from '../Images/logo_mobile.svg'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  withStyles,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Box,
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

import { Info, ContactMail, SettingsApplicationsOutlined, ChatBubble, FileCopy, RateReview } from "@material-ui/icons";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  topBarText: {
    width: "500px",
    margin: "auto",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    color: "white",
    cursor: "pointer",
    position: "relative",
    flexFlow: "column",
  },
  // Side Bar
  sideBarContainer: {
    width: 250,
    background:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    height: "100%",
  },
  sideBarHeading: {
    margin: "1.2rem",
    textAlign: "center",
    color: "#fff",
  },
  listItem: {
    color: "#fff",
  },
  divider: {
    background: "#fff",
  },
  link:{
    textDecoration:"none",
    color:"white",
    display:"inherit"
  },
  logoContainer:{
    textAlign:"center"
  },
  logo:{
    height:100,
    width:100,
  }
}));

const menuList = [
  {
    listIcon: <SettingsApplicationsOutlined />,
    listText: "Service",
    listId: "#service",
  },
  {
    listIcon: <Info />,
    listText: "About",
    listId: "#about",

  },
  {
    listIcon: <ChatBubble />,
    listText: "Chatbot",
    listId: "#chatBot",
  },
  {
    listIcon: <FileCopy />,
    listText: "Samples",
    listId: "#samples",
  },
  {
    listIcon: <RateReview />,
    listText: "Reviews",
    listId: "#reviews",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listId: "#contact",
  },
];

const NavBar = () => {
  const [visible, setVisible] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setVisible({ ...visible, [slider]: open });
  };

  const classes = useStyles();

  const sideBar = () => (
    <Box
      className={classes.sideBarContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <a href="/" className={classes.link}>
      <div className={classes.logoContainer}>
      <img src={logo} alt="logo" className={classes.logo} />
      </div>
      <Typography className={classes.sideBarHeading}>Switch Experience</Typography>
      </a>
      <Divider className={classes.divider} />
      <List>
        {menuList.map((item, key) => (
             <a href={item.listId} className={classes.link} key={key}>
<ListItem button >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
            <hr />
          </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <AppBar component="nav" position="fixed" className={classes.root}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            className={classes.topBarText}
          >
            <span>Switch Experience</span>
          </Typography>
          <IconButton
            onClick={toggleSlider("right", true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          
          <MobileRightMenuSlider
            anchor="right"
            open={visible.right}
            onClose={toggleSlider("right", false)}
          >
            {sideBar()}
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(useStyles)(NavBar);
