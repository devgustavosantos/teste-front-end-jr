import vtexLogo from '../../assets/vtex-logo.svg';

type BrandInfos = {
  image: string;
  alt?: string;
  url?: string;
};

export const brands: BrandInfos[] = new Array(15).fill({
  image: vtexLogo,
});
