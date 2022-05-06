import { addActive } from "./modules/addActive.js";
import { AnimateList } from "./modules/animateList.js";
import { btnActive } from "./modules/btnActive.js";
import { stickyHeader } from "./modules/stickyHeader.js";
import { sliderSwiper } from "./modules/swiper.js";
import { tabPanel } from "./modules/tabPanel.js";

$(document).ready(function () {
  AOS.init({
    duration: 1000,
  });
  sliderSwiper();
  stickyHeader();
  btnActive('.header-language .select');
  btnActive('.header .button-open');
  addActive('.header .button-open', '.header .header-menu');
  addActive('.header-menu-bg', '.header .button-open');
  addActive('.header-menu-bg', '.header .header-menu');
  tabPanel('.product-tab .tab-panel-item','.product-market .wrap-tab')
  AnimateList();
});