// a depedency free version of https://github.com/qimingweng/active-event-stack

let counter = 0;

/**
 * Generates a unique id
 * @returns {String} A unique id
 */
function uniqueEventId () {
    counter++;
    return 'active_event_' + counter;
}

if (typeof document !== 'undefined') {
    document.addEventListener('click', onEvent.bind(null, 'click'), true);
    document.addEventListener('keydown', onEvent.bind(null, 'keydown'));
    document.addEventListener('keyup', onEvent.bind(null, 'keyup'));
}

const listenables = [];

/**
 * Handles all events and acts upon them when the type is correct and the handler stack is not empty
 * @param {String} type The type of the handled event
 * @param {Event} event The passed event which we may pass to a handler
 * @returns {undefined}
 */
function onEvent(type, event) {
    const listenable = listenables[listenables.length - 1]; // Get the last listenable
    if (listenable) {
        const stack = listenable.stack.find(([handlerType]) => handlerType === type);
        const handler = stack && stack[1];
        if (typeof handler === 'function') {
            handler(event);
        }
    }
}

const EventStack = {
    /**
     * Add a listener to the event stack
     * @param {Array} listenArray An array of listenables, like [['click', clickHandler], ['keydown', keydownHandler]]
     * @returns {Number} The id of the listener
     */
    addListenable(listenArray) {
        /* ex: [['click', clickHandler], ['keydown', keydownHandler]] */
        const id = uniqueEventId();
        const stack = listenArray;
        listenables.push({ id, stack });
        return id;
    },
    /**
     * Removes a listener from the stack
     * @param {Number} id The id of the listener
     * @returns {undefined}
     */
    removeListenable(id) {
        const index = listenables.findIndex(el => el.id === id);
        listenables.splice(index, 1);
    }
};

module.exports = EventStack;
