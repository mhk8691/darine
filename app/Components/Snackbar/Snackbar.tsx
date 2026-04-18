
export type SnackbarPayload = {
  message: string;
  type?: boolean;
};

const EVENT_NAME = "show-snackbar";

export const showSnackbar = (message: string, type: boolean) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(EVENT_NAME, { detail: { message, type } })
    );
  }
};

export const onSnackbar = (callback: (payload: SnackbarPayload) => void) => {
  if (typeof window !== "undefined") {
    const handler = (event: Event) => callback((event as CustomEvent).detail);
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }
};
