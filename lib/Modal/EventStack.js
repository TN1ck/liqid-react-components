'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// a depedency free version of https://github.com/qimingweng/active-event-stack

var counter = 0;

/**
 * Generates a unique id
 * @returns {String} A unique id
 */
function uniqueEventId() {
    counter++;
    return 'active_event_' + counter;
}

if (typeof document !== 'undefined') {
    document.addEventListener('click', onEvent.bind(null, 'click'), true);
    document.addEventListener('keydown', onEvent.bind(null, 'keydown'));
    document.addEventListener('keyup', onEvent.bind(null, 'keyup'));
}

var listenables = [];

/**
 * Handles all events and acts upon them when the type is correct and the handler stack is not empty
 * @param {String} type The type of the handled event
 * @param {Event} event The passed event which we may pass to a handler
 * @returns {undefined}
 */
function onEvent(type, event) {
    var listenable = listenables[listenables.length - 1]; // Get the last listenable
    if (listenable) {
        var stack = listenable.stack.find(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                handlerType = _ref2[0];

            return handlerType === type;
        });
        var handler = stack && stack[1];
        if (typeof handler === 'function') {
            handler(event);
        }
    }
}

var EventStack = {
    /**
     * Add a listener to the event stack
     * @param {Array} listenArray An array of listenables, like [['click', clickHandler], ['keydown', keydownHandler]]
     * @returns {Number} The id of the listener
     */
    addListenable: function addListenable(listenArray) {
        /* ex: [['click', clickHandler], ['keydown', keydownHandler]] */
        var id = uniqueEventId();
        var stack = listenArray;
        listenables.push({ id: id, stack: stack });
        return id;
    },

    /**
     * Removes a listener from the stack
     * @param {Number} id The id of the listener
     * @returns {undefined}
     */
    removeListenable: function removeListenable(id) {
        var index = listenables.findIndex(function (el) {
            return el.id === id;
        });
        listenables.splice(index, 1);
    }
};

module.exports = EventStack;