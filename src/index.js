import Dialog from './components/dialog';
import Alert from './components/alert';
import Confirm from './components/confirm';
import Toast from './components/toast';
import { ModDialog } from './components/dialog';
import { ModAlert } from './components/alert';
import { ModConfirm } from './components/confirm';
import { ModToast } from './components/toast';
import { ModButton } from './components/button';
import './styles/utils.styl';
import './styles/transition.styl';
import './styles/iconfont/iconfont.css'

const Components = {
  ModDialog,
  ModAlert,
  ModConfirm,
  ModToast,
  ModButton
}

const install = (Vue, options) => {
  if (install.installed) {
    return;
  }

  Object.keys(Components).forEach(key => Vue.component(key, Components[key]));

  Vue.prototype.$jsmod = {
    'dialog': Dialog,
    'alert': Alert,
    'confirm': Confirm,
    'toast': Toast
  };
}

export default {
  install
}