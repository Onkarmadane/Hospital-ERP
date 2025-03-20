import { useCallback } from 'react';
import Swal from 'sweetalert2';

const useConfirmDialog = () => {
  const showConfirmDialog = useCallback(
    ({
      title = 'Are you sure?',
      text = "You won't be able to revert this!",
      icon = 'warning',
      showCancelButton = true,
      confirmButtonColor = '#3085d6',
      cancelButtonColor = '#d33',
      confirmButtonText = 'Yes, proceed!',
      cancelButtonText = 'Cancel',
      onConfirm = () => {},
      onCancel = () => {},
    } = {}) => {
      return Swal.fire({
        title,
        text,
        icon,
        showCancelButton,
        confirmButtonColor,
        cancelButtonColor,
        confirmButtonText,
        cancelButtonText,
      }).then((result) => {
        if (result.isConfirmed) {
          onConfirm();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          onCancel();
        }
      });
    },
    []
  );

  return showConfirmDialog;
};

export default useConfirmDialog;