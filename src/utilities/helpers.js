import { NotificationManager } from "react-notifications";

export const createNotification = (type, text, timeout = 5000, callback = null) => {
    switch (type) {
        case "info":
            NotificationManager.info(text, null, timeout, callback);
            break;
        case "success":
            NotificationManager.success(text, null, timeout, callback);
            break;
        case "warning":
            NotificationManager.warning(text, null, timeout, callback);
            break;
        case "error":
            NotificationManager.error(text || "Something went wrong, please try again", null, timeout, callback);
            break;
        default:
            break;
        }
};

export const displayError = error => {
    createNotification({
        type: "error"
    });
    console.error(error);
};