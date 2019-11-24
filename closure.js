var count = 0;
function add(x) {
  /**
   * javascript creates a local scope for add fn()
   * x as undefined initially
   */
  return function inner(y) {
    console.log(x + y);
  };
}

var counter = add(5);
count += counter(2);

// count = 0 + 5 + 2 = 7

/**
 * phase: creation
 * 1) creates global object = window;
 * 2) creates "this" object that refers to global object
 * 3) free space for all variables and functions
 * 4) assign "undefined" to all variables (hoisting)
 */

/**
 * phase: execution
 * count: 0
 * function context - local context - closure context
 * counter: add -> x: 5
 */

/**
 * phase: execution
 * count: 0 + 5 + 2
 * function context - local context - closure context
 * counter: add -> x: 5, y: 2
 */
