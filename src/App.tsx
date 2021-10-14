import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import { Stack } from '@mui/material';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NowWhat from './components/NowWhat';
import { SearchBox } from './components/SearchBox';
import { Charts } from './components/Charts';
import FlareTemp from './Features/FlareTemp';
import InValveOpen from './Features/InValveOpen';
import OilTemp from './Features/OilTemp';
import WaterTemp from './Features/WaterTemp';
import TurningPressure from './Features/TurningPressure';
import CasingPressure from './Features/CasingPressure';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (

  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Wrapper>
      <Header />
      <SearchBox />
      <Stack
        direction='row'
        spacing={1}
        sx={{
          mt: 6, ml: 1, mr: 1, mb: 6,
        }}
      >
        <CasingPressure />
        <FlareTemp />
        <InValveOpen />
        <OilTemp />
        <WaterTemp />
        <TurningPressure />
      </Stack>
      <Charts />
      <NowWhat />
      <ToastContainer />
    </Wrapper>
  </MuiThemeProvider>
);

export default App;
