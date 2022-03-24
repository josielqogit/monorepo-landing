import React from "react";
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '@app/portal/src/store/hooks';

const Routes = ({ theme }) => {
  const state = useAppSelector((state: Store.State) => state);
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  )
}

Routes.displayName = "ROUTES_PORTAL";

export default Routes;
