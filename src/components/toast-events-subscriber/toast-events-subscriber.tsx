import { useEffect } from "react";
import toast from "react-hot-toast";
import { toastSuccess, toastFailure } from "events-bus";

type ToastHandler = typeof toast.error | typeof toast.success;

const TOAST_DURATION_TIME = 5000;

const subscribeCallback =
  (toastHandler: ToastHandler) => (messages: string[]) => {
    if (!messages) return;
    messages.forEach((m) => toastHandler(m, { duration: TOAST_DURATION_TIME }));
  };

export const ToastEventsSubscriber = () => {
  useEffect(() => {
    const unsubscribeEventSuccess = toastSuccess.subscribe(
      subscribeCallback(toast.success)
    );
    const unsubscribeEventError = toastFailure.subscribe(
      subscribeCallback(toast.error)
    );

    return () => {
      unsubscribeEventSuccess();
      unsubscribeEventError();
    };
  }, []);

  return null;
};
