import '../static/kity'
import '../static/kityminder-core'
import Editor from './components/editor'

const MindEditor = {
  Minder: Editor
};

const install = function(Vue, opts = {}) {
  Object.keys(MindEditor).forEach((key) => {
    Vue.component(key, MindEditor[key]);
  });
};

// auto install
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(MindEditor, {install});   // eslint-disable-line no-undef
