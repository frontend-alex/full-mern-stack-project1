import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OkToast = (props) => {
  toast.success(`${props.text}`, {
    position: "top-center",
    autoClose: props.duration,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <ToastContainer
      position="top-center"
      autoClose={props.duration}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
    />
  );
};

export default OkToast;
