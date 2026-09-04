import { Container as MuiContainer, type ContainerProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = ContainerProps & { children: ReactNode };

export const Container = ({ children, ...props }: Props) => {
  return (
    <MuiContainer maxWidth="lg" {...props}>
      {children}
    </MuiContainer>
  );
};