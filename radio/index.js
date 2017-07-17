import {CFCMRadio} from './src/Plugins_es6_radio.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Radio', { value: CFCMRadio });
  }
}