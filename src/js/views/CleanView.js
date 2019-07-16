import Items from '../utils/Items';

const RenderCleanContainer = () => {
  document.querySelector(Items.containerMain).innerHTML = '';
};

export default {
  RenderCleanContainer,
};
