import { MouseEvent, useRef } from 'react';

export function useCarrousel() {
  const carousel = useRef<HTMLDivElement>(null);

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
  }

  function handleCarouselLeft(event: MouseEvent<HTMLButtonElement>) {
    if (!carousel.current) return;

    event.preventDefault();

    const size = getCardWidth();

    if (!size) return;

    carousel.current.scrollLeft -= size;
  }

  return { carousel, handleCarouselLeft, handleCarouselRight };
}
