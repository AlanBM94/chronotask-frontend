import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

interface ToastInfo {
    info: {
        message: string;
        type: 'success' | 'error';
    };
}

const Toast: React.FC<ToastInfo> = ({ info }) => {
    useEffect(() => {
        switch (info.type) {
            case 'error':
                toast.error(info.message);
                break;
            case 'success':
                toast.success(info.message);
                break;
            default:
                break;
        }
    }, [info.message, info.type]);

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

export default Toast;
