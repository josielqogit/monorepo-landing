import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
  margin: 0 auto;
  max-width: 350px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.5px;
  .Toastify__toast--success {
    color: #fff;
    background-color: #4caf50;
    .Toastify__close-button {
      color: #fff;
    }
  }
  .Toastify__toast--error {
    color: #fff;
    background-color: #f44336;
    .Toastify__close-button {
      color: #fff;
    }
  }
  .Toastify__progress-bar--success {
    background-color: #fff;
  }
`;

const ToastContainerWithProps = () => {
  return (
    <StyledToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

ToastContainerWithProps.displayName = "Toast-Container";

export default ToastContainerWithProps;
