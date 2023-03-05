import aleloLogo from '../../../../assets/footer/payment-methods/alelo-logo.svg';
import amexLogo from '../../../../assets/footer/payment-methods/amex-logo.svg';
import dinnersLogo from '../../../../assets/footer/payment-methods/dinners-logo.svg';
import eloLogo from '../../../../assets/footer/payment-methods/elo-logo.svg';
import ifoodLogo from '../../../../assets/footer/payment-methods/ifood-logo.svg';
import mastercardLogo from '../../../../assets/footer/payment-methods/mastercard-logo.svg';
import pixLogo from '../../../../assets/footer/payment-methods/pix-logo.svg';
import sodexoLogo from '../../../../assets/footer/payment-methods/sodexo-logo.svg';
import ticketLogo from '../../../../assets/footer/payment-methods/ticket-logo.svg';
import visaLogo from '../../../../assets/footer/payment-methods/visa-logo.svg';
import facebookLogo from '../../../../assets/footer/social-media/facebook-logo.svg';
import instagramLogo from '../../../../assets/footer/social-media/instagram-logo.svg';
import youtubeLogo from '../../../../assets/footer/social-media/youtube-logo.svg';

type Images = {
  image: string;
  alt: string;
};

export const about = ['Conheça', 'Como comprar', 'Indicação e desconto'];

const socialMediaAltDefault = 'Logo do ';

export const socialMedia: Images[] = [
  { image: facebookLogo, alt: socialMediaAltDefault + 'Facebook' },
  { image: instagramLogo, alt: socialMediaAltDefault + 'Instagram' },
  { image: youtubeLogo, alt: socialMediaAltDefault + 'YouTube' },
];

export const infos = [
  'Fale conosco',
  'Dúvidas',
  'Prazos de entrega',
  'Formas de pagamento',
  'Política de privacidade',
  'Trocas e devoluções',
];

const paymentMethodsAltDefault = 'Logotipo da marca ';

export const paymentMethods: Images[] = [
  { image: visaLogo, alt: paymentMethodsAltDefault + 'Visa' },
  { image: eloLogo, alt: paymentMethodsAltDefault + 'Elo' },
  { image: aleloLogo, alt: paymentMethodsAltDefault + 'Alelo' },
  { image: dinnersLogo, alt: paymentMethodsAltDefault + 'Dinners Club' },
  { image: ifoodLogo, alt: paymentMethodsAltDefault + 'iFood' },
  { image: mastercardLogo, alt: paymentMethodsAltDefault + 'MasterCard' },
  { image: pixLogo, alt: 'Logotipo do Pix' },
  { image: amexLogo, alt: paymentMethodsAltDefault + 'American Express' },
  { image: ticketLogo, alt: paymentMethodsAltDefault + 'Ticket' },
  { image: sodexoLogo, alt: paymentMethodsAltDefault + 'Sodexo' },
];
