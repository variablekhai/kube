import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  ListItemButton,
  Avatar,
} from "@mui/material";
import { HiOutlineHome, HiMenu } from "react-icons/hi";
import { BiChevronRight, BiChevronLeft, BiBell } from "react-icons/bi";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { TbSubtask } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";

const SidebarContents = {
  items: [
    {
      name: "Dashboard",
      icon: <HiOutlineHome size={24} />,
    },
    {
      name: "Projects",
      icon: <TbSubtask size={24} />,
    },
    {
      name: "Analytics",
      icon: <IoMdAnalytics size={24} />,
    },
  ],
};

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "#fff",
  borderRadius: "0 0 10px 10px",
  boxShadow: "rgb(58 53 65 / 42%) 0px 4px 8px -4px",
  width: `calc(100% - ${theme.spacing(8)} - 1px)`, //Appbar width on desktop when closed
  [theme.breakpoints.down("sm")]: {
    //Appbar width on mobile when closed
    width: `calc(100% - ${theme.spacing(7)} - 1px)`,
  },
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`, //Appbar width on desktop when open
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`, //Appbar width on mobile when open
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "primary.main",
            }}
          >
            <HiMenu />
          </IconButton>
          <IconButton
            sx={{
              marginLeft: "auto",
              marginRight: 1,
            }}
          >
            <BiBell />
          </IconButton>
          <IconButton>
            <Avatar sx={{ width: "32px", height: "32px" }} src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <Typography variant="h2" sx={{ ml: 0.5, opacity: open ? 1 : 0 }}>
              kube
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <BiChevronRight /> : <BiChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SidebarContents.items?.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "secondary.main",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0, color: "secondary.main" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
