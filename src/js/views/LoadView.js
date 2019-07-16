import Loader from './markup/Loader';
import Items from '../utils/Items';

const RenderLoader = () => {
  document.querySelector(Items.containerMain).innerHTML = Loader;
};

export default {
  RenderLoader,
};
