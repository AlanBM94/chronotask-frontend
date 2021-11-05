import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    handleClose: () => void;
    size: {
        width: string;
        height: string;
    };
}

// React component with typescript
const Modal: React.FC<ModalProps> = ({
    isOpen,
    children,
    onClose,
    handleClose,
    size,
}) => {
    const bodyRef = useRef() as React.MutableRefObject<HTMLElement>;
    // Type of modalRef
    const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        bodyRef.current = document.body;
        return () => {};
    }, []);

    if (!isOpen) return null;

    //Prevenir el scroll en el body cuando el modal se dispare
    // if (bodyRef.current) {
    //   bodyRef.current.style.overflow = 'hidden'
    // }
    // // El agregarle el padding a la derecha evita que se haga un movimiento al quitarse el scroll del navegador
    // if (window.innerWidth > 768 && bodyRef.current) {
    //   bodyRef.current.style.paddingRight = '17px'
    // }
    //
    const handleClickOverlay = () => {
        closeModal();
    };

    //Se crea este metodo para asegurarse que no importa como se cierre el modal siempre permita el scroll en el body
    const closeModal = () => {
        if (bodyRef.current) {
            modalRef.current.classList.add('hide');
            //Se pone un temporizador tomando en cuenta el tiempo de las animaciones de 400 ms
            setTimeout(() => {
                onClose();
                handleClose && handleClose();
                bodyRef.current.removeAttribute('style');
            }, 400);
        }
    };

    const handleClickModal = (e: any) => {
        //Eventos para prevenir la propagación del evento hacía el padre y solo cerrar el modal al hacer click afuera
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    const customStyle = {
        width: `${size.width}px`,
        height: `${size.height}px`,
    };

    return ReactDOM.createPortal(
        <div ref={modalRef} className="overlay" onClick={handleClickOverlay}>
            <div
                className="modal"
                onClick={handleClickModal}
                tabIndex={-1}
                style={customStyle}
            >
                <button className={'btnClose'} onClick={closeModal}>
                    <button>X</button>
                </button>
                {children}
            </div>
        </div>,
        //Refrencia al div con el id "modal" que se encuentra fuera del resto de la aplicación
        document.getElementById('modal') as HTMLElement
    );
};

export default Modal;
