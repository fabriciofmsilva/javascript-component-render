(function() {

    // Define private functions here with first argument as self
    // When calling these functions, pass this from the class 
    // This is a way you can use private functions in JS
    function _privateFunc(self, otherArgs) {
      // ...
    }
  
    // Now this is available only in this scope and can be used by your class here:
    class MyComponent extends HTMLElement {
      // ...
  
      // Define functions like this that are accessible to interact with this element.
      doSomething() {
        // ...
        _privateFunc(this, args)
      }
      // ...
    }
  
    customElements.define('my-component', MyComponent);
  })();

class MyComponent extends HTMLElement {
    // ... 
}
const FrozenMyComponent = Object.freeze(MyComponent);
customElements.define('my-component', FrozenMyComponent);
