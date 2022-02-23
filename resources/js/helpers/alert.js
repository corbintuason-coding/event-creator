import Swal from 'sweetalert2'

export const fireToast = (title, icon) => {
    Swal.fire({
        title,
        icon,
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000
    });
}