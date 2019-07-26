'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return;
        }
    }]);

    return Person;
}();

var Person2 = function () {
    function Person2() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'someone';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person2);

        this.name = name;
        this.age = age;
    }

    _createClass(Person2, [{
        key: 'getDescription',
        value: function getDescription() {
            return 'my name is ' + this.name;
        }
    }]);

    return Person2;
}();

var me = new Person('Jackie Santana');

var jackie = new Person2('Jackie', 26);

console.log(jackie.getDescription());
