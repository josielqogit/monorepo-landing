import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { toast } from 'react-toastify';
import ToastContainer from '@app/componentes/ToastContainer';
import store from './store';
import theme from '@app/theme';
import About from '@app/portal/src/components/About';
import Callout from '@app/portal/src/components/Callout';
import Container from '@app/portal/src/css/Container';
import Footer from '@app/portal/src/components/Footer';
import Header from '@app/portal/src/components/Header';
import Map from '@app/portal/src/components/Map';
import Navigation from '@app/portal/src/components/Navigation';
import Portifolio from '@app/portal/src/components/Portifolio';
import ScrollToTop from '@app/portal/src/components/ScrollToTop';
import Services from '@app/portal/src/components/Services';

const App = () => {

  const config = {
    position: "bottom-center" as "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  const notify = (msg: string, type: "error" | "success") => {
    toast[type](msg, config);
  }

  useEffect(() => {
    notify("Exemplo de notificação de sucesso!", "success");
    notify("Exemplo de notificação de falha!", "error");
  }, [])

  return (
    <Container>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Callout />
      <Portifolio />
      <Map />
      <Footer />
      <ScrollToTop />
    </Container>
  )
}

const AppWithProviders = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </Provider>
      <ToastContainer />
    </React.StrictMode>
  )
}

render(<AppWithProviders />, document.getElementById('root'))
