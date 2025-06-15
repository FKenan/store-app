import { AppBar, Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, NavLink } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const links = [
  { title: "Home", to: "/" },
  { title: "Products", to: "/products" },
  { title: "Error", to: "/errors" },
];

const authLinks = [
  { title: "Login", to: "/login" },
  { title: "Register", to: "/register" },
];

export default function Navbar() {
  // color="inherit" parentin rengini alır
  // flexGrow: 1 parentin tüm genişliğini alır.yani 1.box genişleyebildiği kadar genişler.2.box sağ tarafa yaslanır.
  // Material UI sitesinden customization dan customize yaparak kendi tasarımımızı yapabiliriz. secondary.light, primary.main gibi renkleri kullanabiliriz.
  return (
    <AppBar position="static" sx={{ backgroundColor: "secondary.light" }}>
      <Toolbar>
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <IconButton color="inherit">
            <StorefrontIcon />
          </IconButton>
          {links.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              color="inherit"
            >
              {link.title}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            component={Link}
            to="/cart"
            size="large"
            edge="start"
          >
            <Badge badgeContent="2" color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {authLinks.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              color="inherit"
            >
              {link.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
