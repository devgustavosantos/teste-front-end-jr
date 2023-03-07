import { MouseEvent, useRef, useState } from 'react';

export function useCarrousel() {
  const [currentItemOfCarousel, setCurrentItemOfCarousel] = useState(1);

  const carousel = useRef<HTMLDivElement>(null);

  let itemsOfCarrouselAmount: number | undefined;
  let firstItemOfCarrousel: boolean | undefined;
  let lastItemOfCarrousel: boolean | undefined;

  if (carousel.current) {
    itemsOfCarrouselAmount = carousel.current.childNodes.length;
    firstItemOfCarrousel = currentItemOfCarousel === 1;
    lastItemOfCarrousel = currentItemOfCarousel === itemsOfCarrouselAmount;
  }

  function increscentCurrentItemOfCarousel() {
    if (!itemsOfCarrouselAmount) return;

    if (currentItemOfCarousel >= itemsOfCarrouselAmount) {
      return setCurrentItemOfCarousel(itemsOfCarrouselAmount);
    }

    return setCurrentItemOfCarousel((state) => state + 1);
  }

  function decrescentCurrentItemOfCarousel() {
    if (currentItemOfCarousel <= 1) {
      return setCurrentItemOfCarousel(1);
    }

    return setCurrentItemOfCarousel((state) => state - 1);
  }

  function getCardWidth() {
    if (!carousel.current) return;

    const card = carousel.current.firstChild as HTMLElement;

    const cardWidth = card.offsetWidth;

    const cardMargin = Number(
      window
        .getComputedStyle(card, null)
        .getPropertyValue('margin-right')
        .split('px')[0],
    );

    return cardWidth + cardMargin;
  }

  function handleCarouselRight(event: MouseEvent<HTMLButtonElement>) {
    if (!carousel.current) return;

    event.preventDefault();

    const size = getCardWidth();

    if (!size) return;

    carousel.current.scrollLeft += size;

    increscentCurrentItemOfCarousel();
  }

  function handleCarouselLeft(event: MouseEvent<HTMLButtonElement>) {
    if (!carousel.current) return;

    event.preventDefault();

    const size = getCardWidth();

    if (!size) return;

    carousel.current.scrollLeft -= size;

    decrescentCurrentItemOfCarousel();
  }

  return {
    carousel,
    firstItemOfCarrousel,
    lastItemOfCarrousel,
    handleCarouselLeft,
    handleCarouselRight,
  };
}
