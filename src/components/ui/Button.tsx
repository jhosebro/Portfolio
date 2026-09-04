import { Button as MuiButton, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = ButtonProps & { children: ReactNode };

export const Button = ({ children, ...props }: Props) => {
  return (
    <MuiButton variant="contained" {...props}>
      {children}
    </MuiButton>
  );
};