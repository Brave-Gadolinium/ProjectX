import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "../../assets/style/logo.css";
import "../../assets/style/navbar.css";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.09)",
  color: "black",
  boxShadow: "none",

  backdropFilter: "blur(10px)",
  transition: "background-color 0.1s ease-in-out",
  "&.transparent": {
    backgroundColor: "#09c9ff !important ",
    boxShadow: "none",
    color: "white",
  },
}));

interface EnhancedAppBarProps {
  position?: "fixed" | "absolute" | "sticky" | "relative" | "static";
}

function ElevationScroll(props: EnhancedAppBarProps) {
  const { children, position = "sticky" } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? "" : "transparent",
    position,
  });
}

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ElevationScroll>
      <StyledAppBar position="sticky">
        <Toolbar>
          {/* Логотип */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "500",
              fontFamily: "monospace",
            }}
          >
            <span className="mainLogoNavbar">Teacher App</span>
          </Typography>

          {/* Меню на десктопе */}
          {!isMobile && (
            <>
              <Button component={RouterLink} to="/students" color="inherit">
                Ученики
              </Button>
              <Button component={RouterLink} to="/lessons" color="inherit">
                Уроки
              </Button>
              <Button component={RouterLink} to="/materials" color="inherit">
                Материалы
              </Button>
              <Button component={RouterLink} to="/analytics" color="inherit">
                Аналитика
              </Button>
            </>
          )}

          {/* Иконка профиля */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>Настройки</MenuItem>
            <MenuItem onClick={handleClose}>Выход</MenuItem>
          </Menu>

          {/* Бургер-меню на мобильных устройствах */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      {/* Мобильное меню */}
      {/* {isMobile && (
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{ sx: { width: 250 } }}
          >
            <List>
              <ListItem
                button
                component={RouterLink}
                to="/students"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Ученики" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/lessons"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Уроки" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/materials"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Материалы" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/analytics"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Аналитика" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      )} */}
    </ElevationScroll>
  );
};
