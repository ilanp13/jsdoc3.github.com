define(function () {

    /**
        A module that says hello!
        @exports hello/world
     */
    var ns = {};
    
    /** Say Hello. */
    ns.sayHello = function() {
        return 'Hello world';
    };

    return ns;
});
