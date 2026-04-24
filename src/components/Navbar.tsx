import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Jhoan Rojas</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;