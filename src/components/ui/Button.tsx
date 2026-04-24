import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, ...props }: any) => {
  return (
    <MuiButton variant="contained" {...props}>
      {children}
    </MuiButton>
  );
};