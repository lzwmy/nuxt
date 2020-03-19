import Vue from 'vue'
Vue.prototype.$injectFun = string => {
  return 213123
};

export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.myInjectedFunction = string => console.log('Okay, another function', string)
}