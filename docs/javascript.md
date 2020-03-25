# JavaScript

## Best Practices
[https://developer.mozilla.org/en-US/docs/Learn](https://developer.mozilla.org/en-US/docs/Learn)

## Vanilla (EcmaScript aka ES5)
The JS standard that works in modern web browsers
- Recommended resource for js syntax: [https://www.w3schools.com/js/](https://www.w3schools.com/js/)

## ES6+
The latest JS standardizations. Not all ES6+ syntax is supported in older browsers. This is why tools like Babel and Webpack are used. The most common ES6+ features used are promises, arrow functions, and spread operator. Most browsers can use ES6+ but certain features are still supported in browsers like JSX for React. A few important features in each ES version: [https://www.greycampus.com/blog/programming/java-script-versions](https://www.greycampus.com/blog/programming/java-script-versions)

## jQuery
Library to write JS faster : [https://jquery.com](https://jquery.com)
<br/>
**Note:** Try not to use jQuery with JS frameworks since the DOM changes so often, it could break the jQuery Code if elements are removed /updated from the DOM

## Vue: A JS framework
Vue.js is a JS framework for building UIs quickly and easily. Other frameworks include React, Angular, Ember, Svelte and many more. They all have the basic design pattern of storing data in state and passing down down to components through props. Events can lift state back up to parent components.

![](https://lh4.googleusercontent.com/EbZhoIIIwvv4DBLxOcicSG52hlNI1AFhwFf2bb4OsmBYBe5G35RinQAYg-JAw-3k1H1eqkEtLnSdklOg8S9Ob0H_Xhb5e3hIofxj3DtgzVr6UOvD_Xm2wtXztIVmyeERTLJOR22Q)

- [https://vuejs.org/](https://vuejs.org/)
- [Vue JS Crash Course (YT Video)](https://youtu.be/5lVQgZzLMHc)

## Nuxt
 A static site generator for Vue. Includes Vuex and Vue router
 - [https://nuxtjs.org/](https://nuxtjs.org/)

## Vue-cli
The cli is very good for creating libraries and builds for vue apps with little to no configuration
- [https://cli.vuejs.org/](https://cli.vuejs.org/)

## Vuex & Vue Router
Vuex is Vue’s own global state management system. It is based on the flux architecture and is similar to Redux. Vuex has three parts, actions, mutators, and the state itself. The global state (store) can be accessed in all components no matter how deeply nested they are. Vue router allows for paths in Vue and can convert an SPA to a multi page app. Vuex does not persist if you are using Vue Router unfortunately, so you must use localstorage or indexed DB to save data. Vue router is even capable of dynamic routes, but requires some extra setup.

- [https://router.vuejs.org/](https://router.vuejs.org/) 
- [https://vuex.vuejs.org/guide](https://vuex.vuejs.org/guide/)

## Bootstrap Vue
- [https://bootstrap-vue.js.org/docs/](https://bootstrap-vue.js.org/docs/)

## JS and Drupal
- [read here](https://dri.es/how-to-decouple-drupal-in-2019)

![](https://lh6.googleusercontent.com/5es0C5r3b5OkWWdYw92IUUlvErJqdICjlVvOuPrWwd4Xw82iMdRVrAbe5LYl1G64eeemWDTR27Qh5XrBs00rV2n8dAoY1S1hwPWnh2MYgiTp5cPmav84jEZkZseYAGUE2CZFFmC1)

## Node JS
- [https://nodejs.org/en/](https://nodejs.org/en/)

## JS Modules (COMMON/UMD/AMD/ESM)
JS has a module system that allows people to import/export things into their project. There are different types, but certain ones only work in certain environments. If using modules in the browser, then you must specify type=”module” in the script tag.
- [https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/](https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/)
- The difference on require vs import: [https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/](https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/)

## Asynchronous JS
Async JS is JS that is executed outside the main event loop in another loop called the microtask queue.
Promises are objects that are async. Promises represent a value that is not known yet. Promises are an ES6 standard, and might not work as expected in older browsers. Promises can be used with both the async/await and as a then-able chain, so there might be resources using one or the other. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## State of JS
- [https://2019.stateofjs.com](https://2019.stateofjs.com) (A data viz of what’s cool in JS)