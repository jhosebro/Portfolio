import { Container as MuiContainer } from "@mui/material";

export const Container = ({ children }: any) => {
  return <MuiContainer maxWidth="lg">{children}</MuiContainer>;
};