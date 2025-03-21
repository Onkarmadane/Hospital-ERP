// DialogBox.jsx
import Swal from 'sweetalert2';
import { useContext } from 'react';
import  ThemeContext  from '../Context/ThemeContext'; // Your theme context

const DialogBox = ({
  title,
  text,
  icon,
  showCancelButton = false,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
  onConfirm,
  timer,
  timerProgressBar,
}) => {
  const { theme } = useContext(ThemeContext); // Access theme
  const isDarkMode = theme === 'light'; // true = light, false = dark

  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonText,
    cancelButtonText,
    timer,
    timerProgressBar,
    customClass: {
      popup: isDarkMode
        ? `bg-zinc-900 text-white border-1 border-red-500` // Light mode
        : `bg-zinc-900 text-white border-1 border-primary`, // Dark mode
      title: isDarkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-900 text-white',
      htmlContainer: isDarkMode ? 'text-white' : 'text-white',
      confirmButton: icon === 'success' ? 'bg-primary text-white' : 'bg-red-500 text-white', // Success uses primary, others use red
      cancelButton: 'bg-primary text-white', // Consistent cancel button
    },
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    }
  });
};

export default DialogBox;