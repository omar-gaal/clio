let init = () => {
  let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    link = document.getElementsByClassName("jumbo-slider__link"),
    current = 1,
    time = 6000;

  // add animation class to  slide
  slides[0].classList.add("jumbo-slider__slide--active");
  link[current - 1].classList.add("jumbo-slider__link--active");
  circles[current - 1].classList.add("jumbo-slider__circle--filled");

  // update  ellipses and link
  let updatenav = (current) => {
    console.log(`update current: ${current}`);
    for (let index = 0; index < slides.length; index++) {
      link[index].classList.remove("jumbo-slider__link--active");
      circles[index].classList.remove("jumbo-slider__circle--filled");
    }
    link[current - 1].classList.add("jumbo-slider__link--active");
    circles[current - 1].classList.add("jumbo-slider__circle--filled");
  };

  let startSliding = () => {
    setInterval(() => {
      // console.log(`current: ${current}`);
      slides[1].classList.add("jumbo-slider__slide--active");
      slides[0].classList.remove("jumbo-slider__slide--active");
      // remove from active from first and add it to the second slide so it can become the first slide with the class activated
      container.appendChild(slides[0].cloneNode([true]));
      container.removeChild(slides[0]);
      // clone the first slide and place on the last space.
      console.log(`slides: ${slides.length}`);
      // then remove the first slide after it has been cloned
      if (current < slides.length) {
        current++;
        updatenav(current);
      } else {
        current = 1;
        updatenav(current);
      }
    }, time);
  };
  startSliding();
};
init();
