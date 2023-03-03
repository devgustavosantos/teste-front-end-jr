import { Wrapper } from '../Wrapper';
import { HeaderBottom } from './components/HeaderBottom';
import { HeaderMid } from './components/HeaderMid';
import { HeaderTop } from './components/HeaderTop';

export function Header() {
  return (
    <header>
      <Wrapper>
        <HeaderTop />
        <HeaderMid />
        <HeaderBottom />
      </Wrapper>
    </header>
  );
}
