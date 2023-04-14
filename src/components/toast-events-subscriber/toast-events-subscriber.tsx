import { useEffect } from "react";
import toast from "react-hot-toast";
import { requestSuccess, requestError } from "events-bus";

type ToastHandler = typeof toast.error | typeof toast.success;

const TOAST_DURATION_TIME = 5000;

const subscribeCallback =
  (toastHandler: ToastHandler) => (messages: string[]) => {
    if (!messages) return;
    messages.forEach((m) => toastHandler(m, { duration: TOAST_DURATION_TIME }));
  };

export const ToastEventsSubscriber = () => {
  useEffect(() => {
    const unsubscribeEventSuccess = requestSuccess.subscribe(
      subscribeCallback(toast.success)
    );
    const unsubscribeEventError = requestError.subscribe(
      subscribeCallback(toast.error)
    );

    return () => {
      unsubscribeEventSuccess();
      unsubscribeEventError();
    };
  }, []);

  return null;
};
