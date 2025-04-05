import Swal from 'sweetalert2'

export const sweetAlert2 = ({
  title,
  text,
  icon,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  buttonsStyling = false,
  confirmButton = 'btn btn-success px-5',
  cancelButton = 'btn btn-danger px-5'
}) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    cancelButtonText,
    buttonsStyling,
    customClass: {
      confirmButton,
      cancelButton
    }
  })
}

export default sweetAlert2
