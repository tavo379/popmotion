"use strict";

var Queue = function () {
        this.clear();
    };

Queue.prototype = {
    
    /*
        Add a set of arguments to queue
    */
    add: function () {
        this.queue.push([].slice.call(arguments));
    },
    
    /*
        Get next set of arguments from queue
    */
    next: function () {
        var queue = this.queue.shift(),
            returnVal = false;
        
        if (queue.length) {
            returnVal = queue[0];
        } else {
            this.clear();
        }
        
        return returnVal;
    },

    /*
        Replace queue with empty array
    */
    clear: function () {
        this.queue = [];
    }
};

module.exports = Queue;