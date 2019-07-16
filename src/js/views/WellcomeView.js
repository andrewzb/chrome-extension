import Wellcome from './markup/Wellcome';
import Items from '../utils/Items';

const RenderWellcome = () => {
  document.querySelector(Items.containerMain).innerHTML = Wellcome;
};

export default {
  RenderWellcome,
};
