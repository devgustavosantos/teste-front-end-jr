import { Banner } from '../../components/Banner';
import { Brands } from '../../components/Brands';
import { Categories } from '../../components/Categories';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Poster } from '../../components/Poster';
import { ProductsSection } from '../../components/ProductsSection';
import { Wrapper } from '../../components/Wrapper';
import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Banner />

      <Categories />

      <ProductsSection withSubcategories />

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

      <ProductsSection withSubcategories={false} />

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

      <Footer />
    </div>
  );
}
