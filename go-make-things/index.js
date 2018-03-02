/**
 * resource https://gomakethings.com/creating-web-app-components-with-vanilla-javascript/
 */

var render = function (template, node) {
    if (!node) return;
    node.innerHTML = (typeof template === 'function' ? template(template.state) : template);
    // var event = new CustomEvent('elementRendered', {
	// 	bubbles: true
	// });
	// node.dispatchEvent(event);
    return node;
};

var component = function (template, props, elem) {

	// Add properties to our template
	Object.defineProperties(template, {

		// Set the element to render into
		elem: {
			value: elem,
			writable: true
		},

		// Add state
		state: {
			value: props,
			writable: true
		},

		// Add the `setState()` method
		setState: {
			value: function (props) {

				// Shallow merge new properties into state object
				for (var key in props) {
					if (props.hasOwnProperty(key)) {
						template.state[key] = props[key];
					}
				}

				// Render the element
				render(template, template.elem);

				// Return the elem for use elsewhere
				return template.elem;

			}
		}

    });
    
    template.setState();

	// Return the template so you can assign it to a variable if desired
	return template;

};

var todoList = component(function (props) {

    // Setup our template
    var template = '';

    // Loop through the todos
    for (var i = 0; i < props.todos.length; i++) {
        var todo = props.todos[i];

        // Check if it's completed
        var checked = todo.completed ? 'checked' : '';

        // Create the todo item
        template +=
            '<label>' +
                '<input type="checkbox" value="' + todo.item + '" ' + checked + '>' +
                todo.item +
            '</label>';
    }

    // Return completed template
    return template;

}, {
    todos: [
        {
            item: 'Eat',
            completed: false
        },
        {
            item: 'Take a nap',
            completed: true
        },
        {
            item: 'Eat again',
            completed: false
        }
    ]
}, document.querySelector('#todo-list'));
