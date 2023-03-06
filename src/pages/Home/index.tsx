import { Banner } from '../../components/Banner';
import { Brands } from '../../components/Brands';
import { Categories } from '../../components/Categories';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LoadingScreen } from '../../components/LoadingScreen';
import { Poster } from '../../components/Poster';
import { ProductModal } from '../../components/ProductModal';
import { ProductsSection } from '../../components/ProductsSection';
import { Wrapper } from '../../components/Wrapper';
import { productsPlaceholder } from './data';
import styles from './styles.module.scss';
import { useHome } from './useHome';

export function Home() {
  const { products, isLoading, isProductModalOpen } = useHome();

  return (
    <>
      {isLoading && <LoadingScreen />}

      <div className={styles.container}>
        <Header />

        <Banner />

        <Categories />

        <ProductsSection
          withSubcategories={false}
          products={isLoading ? productsPlaceholder : products}
        />

        <Wrapper secondClassName={styles.wrapperHome}>
          <Poster
            title="Parceiros"
            content="Lorem ipsum dolor sit amet, consectetur"
            variant="large"
          />
          <Poster
            title="Parceiros"
            content="Lorem ipsum dolor sit amet, consectetur"
            variant="large"
          />
        </Wrapper>

        <ProductsSection
          withSubcategories={false}
          products={isLoading ? productsPlaceholder : products}
        />

        <Wrapper secondClassName={styles.wrapperHome}>
          <Poster
            title="Produtos"
            content="Lorem ipsum dolor sit amet, consectetur"
            variant="middle"
          />
          <Poster
            title="Produtos"
            content="Lorem ipsum dolor sit amet, consectetur"
            variant="middle"
          />
        </Wrapper>

        <Brands />

        <ProductsSection
          withSubcategories={false}
          products={isLoading ? productsPlaceholder : products}
        />

        <Footer />
      </div>

      {isProductModalOpen && <ProductModal />}
    </>
  );
}
