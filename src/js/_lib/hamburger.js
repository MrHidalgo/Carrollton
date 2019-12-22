

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	btn.addEventListener("click", (ev) => {
    const elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.toggle("is-hideScroll");
    });

  });
	document.querySelector('.menu__close').addEventListener("click", (ev) => {
		document.querySelector("[hamburger-js]").classList.remove("is-active");
    mobileContainer.classList.remove("is-open");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.remove("is-hideScroll");
    });

  });

};
