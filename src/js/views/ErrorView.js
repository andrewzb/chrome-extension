import error from './markup/Error';
import Items from '../utils/Items';

const RenderError = () => {
  document.querySelector(Items.containerMain).innerHTML = error;
};

export default {
  RenderError,
};
