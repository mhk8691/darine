export type SnackbarPayload = {
  message: string;
  type?: boolean;
};

const EVENT_NAME = "show-snackbar";

export const showSnackbar = (message: string, type: boolean = false) => {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(EVENT_NAME, {
      detail: { message, type },
    }),
  );
};

export const onSnackbar = (callback: (payload: SnackbarPayload) => void) => {
  if (typeof window === "undefined") return () => {};

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<SnackbarPayload>;
    callback(customEvent.detail);
  };

  window.addEventListener(EVENT_NAME, handler);

  return () => {
    window.removeEventListener(EVENT_NAME, handler);
  };
};
