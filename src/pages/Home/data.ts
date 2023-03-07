import { ProductInfos } from '../../types/product';

function createASampleProduct(): ProductInfos {
  return {
    productName: crypto.randomUUID(),
    descriptionShort:
      '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, placeat. Aspernatur fuga sequi quisquam harum quo ratione expedita temporibus earum at! Quasi ratione dignissimos modi adipisci architecto accusantium aliquam distinctio?',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 1615,
  };
}

export const productsPlaceholder: ProductInfos[] = new Array(10)
  .fill(null)
  .map(() => createASampleProduct());
