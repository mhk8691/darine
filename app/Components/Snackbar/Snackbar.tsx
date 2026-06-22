export type ColorType = 'error' | 'warning' | 'success' | 'info';

export type SnackbarPayload = {
  message: string;
  color?: ColorType;
};

const EVENT_NAME = 'show-snackbar';

let networkErrorShown = false;
let serverErrorShown = false;

export const showSnackbar = (
  message: string,
  color: ColorType = 'error',
) => {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent<SnackbarPayload>(EVENT_NAME, {
      detail: { message, color },
    }),
  );
};

// -------------------------
// اینترنت / VPN قطع
// -------------------------
export const showNetworkError = () => {
  if (networkErrorShown) return;

  networkErrorShown = true;

  showSnackbar('ارتباط با سرور برقرار نشد. اینترنت یا VPN خود را بررسی کنید.', 'error');
};

// -------------------------
// خطای سرور (500)
// -------------------------
export const showServerError = () => {
  if (serverErrorShown) return;

  serverErrorShown = true;

  showSnackbar(
    'سرور در دسترس نیست، لطفاً بعداً تلاش کنید',
    'error',
  );
};

// -------------------------
// reset ها
// -------------------------
export const resetNetworkError = () => {
  networkErrorShown = false;
};

export const resetServerError = () => {
  serverErrorShown = false;
};

// -------------------------
export const onSnackbar = (
  callback: (payload: SnackbarPayload) => void,
) => {
  if (typeof window === 'undefined') return () => {};

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<SnackbarPayload>;

    if (!customEvent.detail?.message) return;

    callback(customEvent.detail);
  };

  window.addEventListener(EVENT_NAME, handler);

  return () => {
    window.removeEventListener(EVENT_NAME, handler);
  };
};