// 导入组件
import highlight from "./hight-light-brush.vue";


const install = function (Vue) {
  if (install.installed) return (install.installed = true);
  Vue.component(highlight.name, highlight);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
