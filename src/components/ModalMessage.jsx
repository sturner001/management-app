
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModalMessage = forwardRef(function ModalMessage({ children, buttonCaption }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }

        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method='dialog'>
                <button>{!buttonCaption ? 'Close' : buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root'));

});

export default ModalMessage;
