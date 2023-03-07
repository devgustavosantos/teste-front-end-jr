import crownSimple from '../../../../assets/header/crown-simple.svg';

type Link = {
  title: string;
  icon?: string;
  alt?: string;
};

export const links: Link[] = [
  { title: 'Todas Categorias' },
  { title: 'Supermercado' },
  { title: 'Livros' },
  { title: 'Moda' },
  { title: 'Lançamentos' },
  { title: 'Ofertas do dia' },
  { title: 'Assinatura', icon: crownSimple, alt: 'Desenho de uma coroa' },
];
