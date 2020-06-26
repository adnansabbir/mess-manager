import TOAST_MESSAGE_ACTION_TYPES from "./toast-message.types";
import {toast} from "react-toastify";

export const showToastMessage = ({message, type, ...rest}) => {

    switch (type) {
        case 'info':
            toast.info(message);
            break;

        case 'success':
            toast.success(message);
            break;

        case 'warning':
            toast.warning(message);
            break;

        case 'error':
            toast.error(message);
            break;

        case 'dark':
            toast.dark(message);
            break;

        default:
            toast(message, {...rest});
            break;
    }

    return ({
        type: TOAST_MESSAGE_ACTION_TYPES.SHOW_TOAST_MESSAGE,
        payload: {
            message,
            type,
            ...rest
        }
    })
};