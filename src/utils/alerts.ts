import { MouseEvent } from 'react';
import Swal from 'sweetalert2';

export function showAlertAboutDemoVersion(
  event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLHyperlinkElementUtils>,
) {
  event.preventDefault();

  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Esta aplicação é uma versão de demostração, por isso não tem versão mobile e outras funcionalidades.',
  });
}
