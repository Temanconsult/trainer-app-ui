import {toast} from 'react-toastify';

const options: object = {
  toastId: 'trainer-notification',
  autoClose: 6000,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
};

export const notify = (type: string, message?: string) => {
  if (type) return toast[type](message, options);
  return toast.success(message, options);
};
