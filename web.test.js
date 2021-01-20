function require( path ){ return $node[ path ] };
"use strict";
var $;
(function ($_1) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($_1.$$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            await test(context);
        }
        $_1.$mol_ambient({}).$mol_log3_done({
            place: '$mol_test',
            message: 'Completed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(() => {
            scheduled = false;
            $mol_test_run();
        }, 0);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
//assert.test.js.map
;
"use strict";
//assert.js.map
;
"use strict";
//deep.test.js.map
;
"use strict";
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_jsx("input", { value: '123' });
            $.$mol_assert_equal(dom.outerHTML, '<input value="123">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $.$mol_jsx("div", { classList: ['foo bar'] });
            $.$mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $.$mol_jsx("div", { style: { color: 'red' } });
            $.$mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $.$mol_jsx("div", { dataset: { foo: 'bar' } });
            $.$mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $.$mol_jsx("div", { lang: "ru", hidden: true });
            $.$mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_jsx("div", null,
                "hello",
                $.$mol_jsx("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = ({ hint }, target) => {
                return $.$mol_jsx("button", { title: hint }, target());
            };
            const dom = $.$mol_jsx(Button, { id: "/foo", hint: "click me" }, () => 'hey!');
            $.$mol_assert_equal(dom.outerHTML, '<button title="click me" id="/foo">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $.$mol_jsx("div", null,
                    $.$mol_jsx(Bar, { id: "/bar" },
                        $.$mol_jsx("img", { id: "/icon" })));
            };
            const Bar = (props, icon) => {
                return $.$mol_jsx("span", null, icon);
            };
            const dom = $.$mol_jsx(Foo, { id: "/foo" });
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo"><span id="/foo/bar"><img id="/foo/icon"></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $.$mol_jsx("div", null,
                    $.$mol_jsx("span", { id: "/bar" }),
                    $.$mol_jsx("span", { id: "/bar" }));
            };
            $.$mol_assert_fail(() => $.$mol_jsx(App, { id: "/foo" }), 'JSX already has tag with id "/bar"');
        },
    });
})($ || ($ = {}));
//jsx.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElement: (name) => $.$mol_dom_context.document.createElement(name)
    };
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if ($.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid && $.$mol_jsx_document.getElementById(guid);
        if (typeof Elem !== 'string') {
            if (Elem.prototype) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node)
            node = $.$mol_jsx_document.createElement(Elem);
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        for (const key in props) {
            if (typeof props[key] === 'string') {
                node.setAttribute(key, props[key]);
            }
            else if (props[key] && props[key]['constructor'] === Object) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            node[key] = props[key];
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'nulls & undefineds'() {
            $.$mol_assert_ok($.$mol_compare_deep(null, null));
            $.$mol_assert_ok($.$mol_compare_deep(undefined, undefined));
            $.$mol_assert_not($.$mol_compare_deep(undefined, null));
            $.$mol_assert_not($.$mol_compare_deep({}, null));
        },
        'number'() {
            $.$mol_assert_ok($.$mol_compare_deep(1, 1));
            $.$mol_assert_ok($.$mol_compare_deep(Number.NaN, Number.NaN));
            $.$mol_assert_not($.$mol_compare_deep(1, 2));
        },
        'Number'() {
            $.$mol_assert_ok($.$mol_compare_deep(Object(1), Object(1)));
            $.$mol_assert_ok($.$mol_compare_deep(Object(Number.NaN), Object(Number.NaN)));
            $.$mol_assert_not($.$mol_compare_deep(Object(1), Object(2)));
        },
        'empty POJOs'() {
            $.$mol_assert_ok($.$mol_compare_deep({}, {}));
        },
        'different POJOs'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { b: 2 }));
        },
        'different POJOs with same keys but different values'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { a: 2 }));
        },
        'different POJOs with different keys but same values'() {
            $.$mol_assert_not($.$mol_compare_deep({}, { a: undefined }));
        },
        'Array'() {
            $.$mol_assert_ok($.$mol_compare_deep([], []));
            $.$mol_assert_ok($.$mol_compare_deep([1, [2]], [1, [2]]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2], [1, 3]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'same POJO trees'() {
            $.$mol_assert_ok($.$mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
        },
        'different classes with same values'() {
            class Obj {
                constructor() {
                    this.foo = 1;
                }
            }
            const a = new Obj;
            const b = new class extends Obj {
            };
            $.$mol_assert_not($.$mol_compare_deep(a, b));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $.$mol_assert_ok($.$mol_compare_deep(a, b));
        },
        'empty Element'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", null), $.$mol_jsx("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null), $.$mol_jsx("span", null)));
        },
        'Element with attributes'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", { dir: "rtl" })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", { dir: "ltr" })));
        },
        'Element with styles'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: { color: 'red' } })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: {} })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: { color: 'blue' } })));
        },
        'Element with content'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "bar",
                $.$mol_jsx("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("hr", null))));
        },
        'Element with handlers'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { onclick: () => 1 }), $.$mol_jsx("div", { onclick: () => 1 })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { onclick: () => 1 }), $.$mol_jsx("div", { onclick: () => 2 })));
        },
        'Date'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Date(12345), new Date(12345)));
            $.$mol_assert_not($.$mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $.$mol_assert_ok($.$mol_compare_deep(/\x22/mig, /\x22/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x21/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Map'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Map, new Map));
            $.$mol_assert_ok($.$mol_compare_deep(new Map([[[1], [2]]]), new Map([[[1], [2]]])));
            $.$mol_assert_not($.$mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
        },
        'Set'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Set, new Set));
            $.$mol_assert_ok($.$mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $.$mol_assert_not($.$mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array, new Uint8Array));
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $.$mol_assert_not($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
    });
})($ || ($ = {}));
//deep.test.js.map
;
"use strict";
var $;
(function ($) {
    const a_stack = [];
    const b_stack = [];
    let cache = null;
    function $mol_compare_deep(a, b) {
        if (Object.is(a, b))
            return true;
        const a_type = typeof a;
        const b_type = typeof b;
        if (a_type !== b_type)
            return false;
        if (a_type === 'function')
            return String(a) === String(b);
        if (a_type !== 'object')
            return false;
        if (!a || !b)
            return false;
        if (a instanceof Error)
            return false;
        if (a['constructor'] !== b['constructor'])
            return false;
        if (a instanceof RegExp)
            return Object.is(String(a), String(b));
        const ref = a_stack.indexOf(a);
        if (ref >= 0) {
            return Object.is(b_stack[ref], b);
        }
        if (!cache)
            cache = new WeakMap;
        let a_cache = cache.get(a);
        if (a_cache) {
            const b_cache = a_cache.get(b);
            if (typeof b_cache === 'boolean')
                return b_cache;
        }
        else {
            a_cache = new WeakMap();
            cache.set(a, a_cache);
        }
        a_stack.push(a);
        b_stack.push(b);
        let result;
        try {
            if (a[Symbol.iterator]) {
                const a_iter = a[Symbol.iterator]();
                const b_iter = b[Symbol.iterator]();
                while (true) {
                    const a_next = a_iter.next();
                    const b_next = b_iter.next();
                    if (a_next.done !== b_next.done)
                        return result = false;
                    if (a_next.done)
                        break;
                    if (!$mol_compare_deep(a_next.value, b_next.value))
                        return result = false;
                }
                return result = true;
            }
            let count = 0;
            for (let key in a) {
                try {
                    if (!$mol_compare_deep(a[key], b[key]))
                        return result = false;
                }
                catch (error) {
                    $.$mol_fail_hidden(new $.$mol_error_mix(`Failed ${JSON.stringify(key)} fields comparison of ${a} and ${b}`, error));
                }
                ++count;
            }
            for (let key in b) {
                --count;
                if (count < 0)
                    return result = false;
            }
            const a_val = a['valueOf']();
            if (Object.is(a_val, a))
                return result = true;
            const b_val = b['valueOf']();
            if (!Object.is(a_val, b_val))
                return result = false;
            return result = true;
        }
        finally {
            a_stack.pop();
            b_stack.pop();
            if (a_stack.length === 0) {
                cache = null;
            }
            else {
                a_cache.set(b, result);
            }
        }
    }
    $.$mol_compare_deep = $mol_compare_deep;
})($ || ($ = {}));
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $.$mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $.$mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $.$mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $.$mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            $.$mol_fail = fail;
            if (typeof ErrorRight === 'string') {
                $mol_assert_equal(error.message, ErrorRight);
            }
            else {
                $mol_assert_ok(error instanceof ErrorRight);
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $.$mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $.$mol_fail(new Error(`Not equal\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $.$mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let value of tail) {
            if ($.$mol_compare_deep(value, head)) {
                head = value;
            }
            else {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    return JSON.stringify(val);
                };
                return $.$mol_fail(new Error(`Not like\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'get'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $.$mol_delegate({}, () => target);
            proxy.foo = 123;
            $.$mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $.$mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $.$mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $.$mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_ok(proxy instanceof Foo);
            $.$mol_assert_ok(proxy instanceof $.$mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_ok(proxy.valueOf() instanceof Foo);
            $.$mol_assert_not(proxy.valueOf() instanceof $.$mol_delegate);
        },
    });
})($ || ($ = {}));
//delegate.test.js.map
;
"use strict";
//writable.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve();
            this.cancelled = false;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mock.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_tick = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//tick.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));
//log3.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'run callback'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $.$mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $.$mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            Plus1.last = 0;
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Plus1.last, 2);
            $.$mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                constructor() {
                    this.level = 2;
                }
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $.$mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static pow(a) {
                    return a ** this.level;
                }
            }
            Foo.level = 2;
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $.$mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $.$mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//wrapper.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_frame = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//frame.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'objects by reference'() {
            $.$mol_assert_equal($.$mol_compare_any({}, {}), false);
        },
        'primitives by value'() {
            $.$mol_assert_equal($.$mol_compare_any('a', 'a'), true);
        },
        'NaN by value'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, Number.NaN), true);
        },
        'NaN not equal zero'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, 0), false);
        },
    });
})($ || ($ = {}));
//any.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return source when same object'() {
            const target = {};
            $.$mol_assert_equal($.$mol_conform(target, target), target);
        },
        'return target when some is not object'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(true, obj), true);
            $.$mol_assert_equal($.$mol_conform(obj, true), obj);
        },
        'return target when some is null'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(null, obj), null);
            $.$mol_assert_equal($.$mol_conform(obj, null), obj);
        },
        'return target when some is undefined'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(undefined, obj), undefined);
            $.$mol_assert_equal($.$mol_conform(obj, undefined), obj);
        },
        'return target when different keys count'() {
            const target = [1, 2, 3];
            const source = [1, 2, 3, undefined];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when array values are strong equal'() {
            const source = [1, 2, 3];
            $.$mol_assert_equal($.$mol_conform([1, 2, 3], source), source);
        },
        'return source when object values are strong equal'() {
            const source = { a: 1, b: 2 };
            $.$mol_assert_equal($.$mol_conform({ a: 1, b: 2 }, source), source);
        },
        'return target when some values are not equal'() {
            const target = [1, 2, 3];
            const source = [1, 2, 5];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when values are deep equal'() {
            const source = { foo: { bar: 1 } };
            $.$mol_assert_equal($.$mol_conform({ foo: { bar: 1 } }, source), source);
        },
        'return target with equal values from source and not equal from target'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 2 } };
            const target = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'return target when equal but with different class'() {
            const target = { '0': 1 };
            $.$mol_assert_equal($.$mol_conform(target, [1]), target);
        },
        'return target when conformer for class is not defined'() {
            const Obj = class {
            };
            const source = new Obj;
            const target = new Obj;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
        },
        'return target when has cyclic reference'() {
            const source = { foo: {} };
            source['self'] = source;
            const target = { foo: {} };
            target['self'] = target;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result['self'], target);
            $.$mol_assert_equal(result.foo, source.foo);
        },
        'return source when equal dates'() {
            const source = new Date(12345);
            const target = new Date(12345);
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return source when equal regular expressions'() {
            const source = /\x22/mig;
            const target = /\x22/mig;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return cached value if already conformed'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const target = { foo: { xxx: 2 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            target.foo.xxx = 1;
            $.$mol_assert_equal($.$mol_conform(target.foo, source.foo), target.foo);
        },
        'skip readlony fields'() {
            const source = { foo: {}, bar: {} };
            const target = { foo: {}, bar: {} };
            Object.defineProperty(target, 'bar', { value: {}, writable: false });
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'object with NaN'() {
            const source = { foo: Number.NaN };
            const target = { foo: Number.NaN };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'array with NaN'() {
            const source = [Number.NaN];
            const target = [Number.NaN];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
    });
})($ || ($ = {}));
//conform.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $.$mol_array_trim(array);
            $.$mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//trim.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(async ($) => {
        await $_1.$mol_fiber_warp();
        $_1.$mol_fiber.deadline = Date.now() + 100;
    });
    $_1.$mol_test({
        'sync to async': async ($) => {
            const sum = $_1.$mol_fiber_async((a, b) => a + b);
            const res = await sum(1, 2);
            $_1.$mol_assert_equal(res, 3);
        },
    });
})($ || ($ = {}));
//fiber.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Value has js-path name'() {
            class App extends $_1.$mol_object2 {
                static get title() { return new $_1.$mol_object2; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "title", null);
            $_1.$mol_assert_equal(`${App.title}`, 'App.title');
        },
        'Simple property'() {
            class App extends $_1.$mol_object2 {
            }
            App.value = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", void 0);
            $_1.$mol_assert_equal(App.value, 1);
            App.value = 2;
            $_1.$mol_assert_equal(App.value, 2);
        },
        'Instant actualization'($) {
            class Source extends $_1.$mol_object2 {
                constructor() {
                    super(...arguments);
                    this.value = 1;
                }
                get $() { return $; }
                destructor() { }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], Source.prototype, "value", void 0);
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get source() { return Source.create(); }
                static get value() { return this.source.value + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value, 2);
            App.source.value = 2;
            $_1.$mol_assert_equal(App.value, 3);
        },
        'Access to cached value'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get value() { return 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), undefined);
            $_1.$mol_assert_equal(App.value, 1);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), 1);
        },
        'Do not recalc slaves on equal changes'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get result() { return this.first[0] + this.counter++; }
            }
            App.first = [1];
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.first = [1];
            $_1.$mol_assert_equal(App.result, 1);
        },
        'Do not recalc grand slave on equal direct slave result '($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return Math.abs(this.first); }
                static get result() { return this.second + ++this.counter; }
            }
            App.first = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = -1;
            $_1.$mol_assert_equal(App.result, 2);
        },
        'Recalc when [not changed master] changes [following master]'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() {
                    this.third = this.first;
                    return 0;
                }
                static get result() { return this.second + this.third + ++this.counter; }
            }
            App.first = 1;
            App.third = 0;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "third", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = 5;
            $_1.$mol_assert_equal(App.result, 7);
        },
        'Branch switching'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return 2; }
                static get result() {
                    return (this.condition ? this.first : this.second) + this.counter++;
                }
            }
            App.first = 1;
            App.condition = true;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 3);
            App.first = 10;
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden self invalidation'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return this.first + 1; }
                static get result() {
                    this.second;
                    return this.first++;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_fail(() => App.result);
        },
        'Side effect inside computation'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static increase() { return ++this.first; }
                static get result() {
                    return this.increase() + 1;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_fiber.method
            ], App, "increase", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden cyclic dependency'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get first() { return this.second - 1; }
                static get second() { return this.first + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            $_1.$mol_assert_fail(() => App.first);
        },
        'Forget sub fibers on complete'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static count() { return this.counter++; }
                static get result() { return this.count() + this.data; }
            }
            App.counter = 0;
            App.data = 1;
            __decorate([
                $_1.$mol_fiber.method
            ], App, "count", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "data", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.data = 2;
            $_1.$mol_assert_equal(App.result, 3);
        },
        async 'Automatic destroy owned value on self destruction'($) {
            let counter = 0;
            class Having extends $_1.$mol_object2 {
                destructor() { counter++; }
            }
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get having() { return Having.create(); }
                static get result() {
                    if (this.condition)
                        this.having;
                    return 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "having", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            App.result;
            App.condition = false;
            App.result;
            $_1.$mol_assert_equal(counter, 0);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(counter, 1);
        },
        async 'Do not destroy putted value'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get target() {
                    return this.condition ? this.source : 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "target", null);
            App.source = 1;
            $_1.$mol_assert_equal(App.target, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.target, 0);
            await $_1.$mol_fiber_warp();
            App.condition = true;
            $_1.$mol_assert_equal(App.target, 1);
        },
        'Restore after error'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get broken() {
                    if (this.condition)
                        $_1.$mol_fail(new Error('test error'));
                    return 1;
                }
                static get result() { return this.broken; }
            }
            App.condition = false;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "broken", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = true;
            $_1.$mol_assert_fail(() => App.result);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 1);
        },
        async 'auto fresh only when alive'($) {
            let state = 1;
            const monitor = new $.$mol_atom2;
            monitor.$ = $;
            monitor.calculate = () => {
                new $.$mol_after_frame($_1.$mol_atom2.current.fresh);
                return state;
            };
            $_1.$mol_assert_equal(monitor.get(), 1);
            state = 2;
            $_1.$mol_assert_equal(monitor.get(), 1);
            $.$mol_after_mock_warp();
            $_1.$mol_assert_equal(monitor.get(), 2);
            state = 3;
            $_1.$mol_assert_equal(monitor.get(), 2);
            monitor.destructor();
            $_1.$mol_assert_equal(monitor.value, undefined);
            $.$mol_after_mock_warp();
            await $.$mol_fiber_warp();
            $_1.$mol_assert_equal(monitor.value, undefined);
        },
    });
})($ || ($ = {}));
//atom2.test.js.map
;
"use strict";
//param.test.js.map
;
"use strict";
//result.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Property method'($) {
            class App extends $_1.$mol_object2 {
                static value(next = 1) { return next + 1; }
            }
            App.$ = $;
            __decorate([
                $_1.$mol_mem
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value(), 2);
            App.value(2);
            $_1.$mol_assert_equal(App.value(), 3);
        },
        'auto sync of properties'($) {
            class X extends $_1.$mol_object2 {
                foo(next) {
                    return next || 1;
                }
                bar() {
                    return this.foo() + 1;
                }
                xxx() {
                    return this.bar() + 1;
                }
            }
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "foo", null);
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "bar", null);
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "xxx", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.bar(), 2);
            $_1.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $_1.$mol_assert_equal(x.xxx(), 7);
        },
        async 'must be deferred destroyed when no longer referenced'($) {
            let foo;
            let foo_destroyed = false;
            class B extends $_1.$mol_object2 {
                showing(next) {
                    if (next === void 0)
                        return true;
                    return next;
                }
                foo() {
                    return foo = new class extends $_1.$mol_object {
                        destructor() {
                            foo_destroyed = true;
                        }
                    };
                }
                bar() {
                    return this.showing() ? this.foo() : null;
                }
            }
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "showing", null);
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "foo", null);
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "bar", null);
            var b = new B;
            b.$ = $;
            var bar = b.bar();
            $_1.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_ok(foo_destroyed);
            $_1.$mol_assert_not(b.bar());
            b.showing(true);
            $_1.$mol_defer.run();
            $_1.$mol_assert_unique(b.bar(), bar);
        },
        async 'wait for data'($) {
            class Test extends $_1.$mol_object2 {
                source() {
                    return $_1.$mol_fiber_sync(() => new Promise(done => done('Jin')))();
                }
                middle() {
                    return this.source();
                }
                target() {
                    return this.middle();
                }
            }
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "source", null);
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "middle", null);
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "target", null);
            const t = new Test;
            t.$ = $;
            $_1.$mol_assert_fail(() => t.target().valueOf(), Promise);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'number'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $.$mol_assert_equal(dict.get(123), 321);
            $.$mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $.$mol_assert_equal(dict.get({ foo: 123 }), 321);
            $.$mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $.$mol_assert_equal(dict.get([123]), 321);
            $.$mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $.$mol_jsx("div", null);
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $.$mol_assert_equal(dict.get(el), 321);
            $.$mol_assert_equal(dict.has(el), true);
            $.$mol_assert_equal(dict.get($.$mol_jsx("div", null)), undefined);
            $.$mol_assert_equal(dict.has($.$mol_jsx("div", null)), false);
            dict.delete(el);
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
        'forEach key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
    });
})($ || ($ = {}));
//dict.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'keyed reactive properties'($) {
            $_1.$mol_fiber_warp();
            class Fib extends $_1.$mol_object2 {
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            Fib.$ = $;
            __decorate([
                $_1.$mol_mem_key
            ], Fib, "value", null);
            $_1.$mol_assert_equal(Fib.value(10), 89);
            Fib.value(1, 2);
            $_1.$mol_assert_equal(Fib.value(10), 144);
        },
        'cached property with simple key'($) {
            class X extends $_1.$mol_object2 {
                foo(id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $_1.$mol_assert_equal(x.foo(0), x.foo(0));
            $_1.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key'($) {
            class X extends $_1.$mol_object2 {
                foo(ids) {
                    return Math.random();
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $_1.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
    });
})($ || ($ = {}));
//key.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_field(proto, name, descr) {
        if (!descr)
            descr = Object.getOwnPropertyDescriptor(proto, name);
        const get = descr ? (descr.get || $.$mol_const(descr.value)) : (() => undefined);
        const set = descr && descr.set || function (next) { get_cache(this).put(next); };
        const store = new WeakMap();
        Object.defineProperty(proto, name + "@", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = get.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                $.$mol_owning_catch(host, cache);
                store.set(host, cache);
            }
            return cache;
        };
        return {
            get() {
                return get_cache(this).get();
            },
            set,
        };
    }
    $.$mol_atom2_field = $mol_atom2_field;
})($ || ($ = {}));
//field.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        async 'Autorun'($) {
            class App extends $_1.$mol_object2 {
                static get init() {
                    ++this.counter;
                    return this.state;
                }
            }
            App.$ = $;
            App.state = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "state", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "init", null);
            const autorun = $_1.$mol_atom2_autorun(() => App.init);
            autorun.$ = $;
            try {
                await $_1.$mol_fiber_warp();
                $_1.$mol_assert_equal(App.counter, 1);
                App.state = 2;
                $_1.$mol_assert_equal(App.counter, 1);
                await $_1.$mol_fiber_warp();
                $_1.$mol_assert_equal(App.counter, 2);
                App.state = 3;
            }
            finally {
                autorun.destructor();
            }
            App.state = 4;
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(App.counter, 2);
        },
    });
})($ || ($ = {}));
//autorun.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_timeout = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//timeout.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'memoize field'() {
            class Foo {
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            Foo.one = 1;
            __decorate([
                $.$mol_memo.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Foo.two, 3);
            $.$mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));
//memo.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $_1.$mol_assert_equal($$.$mol_func_name_test.name, '');
            $_1.$mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $_1.$mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//name.test.js.map
;
"use strict";
//extract.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $_1.$mol_view {
            }
            class $mol_view_test_block extends $_1.$mol_view {
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            $mol_view_test_block.$ = $;
            __decorate([
                $_1.$mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $_1.$mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $_1.$mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $_1.$mol_view {
            };
            x.$ = $;
            $_1.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $_1.$mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $_1.$mol_view {
            }
            class $mol_view_test_block extends $_1.$mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $_1.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $_1.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $_1.$mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $_1.$mol_assert_equal(node.getAttribute('required'), 'true');
            $_1.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $_1.$mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $_1.$mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_node();
            node.click();
            $_1.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $.$mol_view {
        Item() { return new $.$mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $.$mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $.$mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px, per } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                width: per(50),
                height: px(50),
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { calc } = $.$mol_style_func;
            const { px, per } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                width: calc(`${per(100)} - ${px(1)}`),
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5
                }
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                padding: [px(5), 'auto']
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { url } = $.$mol_style_func;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { rem } = $.$mol_style_unit;
            const { hsla } = $.$mol_style_func;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                box: {
                    shadow: [
                        {
                            inset: true,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'red',
                        },
                        {
                            inset: false,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'blue',
                        },
                    ],
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                ':focus': {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test]:focus {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '::first-line': {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test]::first-line {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@media': {
                    'print': {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '@media print {\n[mol_style_sheet_test] {\n\tcolor: red;\n\tdisplay: block;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $.$mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            color: 'red',
                            display: 'block',
                        },
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test][mol_theme="$mol_theme_dark"] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $.$mol_view {
                Item() { return new $.$mol_view; }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                Item: {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                List: {
                    Item: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2_list_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $.$mol_view {
                Item() { return new $.$mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            Item: {
                                color: 'red',
                            },
                        },
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test][mol_theme="$mol_theme_dark"] [mol_style_sheet_test_item] {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                $mol_style_sheet_test1: {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2] [mol_style_sheet_test1] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                '>': {
                    $mol_style_sheet_test1: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2] > [mol_style_sheet_test1] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
    });
})($ || ($ = {}));
//sheet.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'null by default'() {
            const key = String(Math.random());
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $.$mol_state_session.value(key, '$mol_state_session_test');
            $.$mol_assert_equal($.$mol_state_session.value(key), '$mol_state_session_test');
            $.$mol_state_session.value(key, null);
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//session.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(context => {
        class $mol_state_arg_mock extends $_1.$mol_state_arg {
            static href(next) { return next || ''; }
        }
        $mol_state_arg_mock.$ = context;
        __decorate([
            $_1.$mol_mem
        ], $mol_state_arg_mock, "href", null);
        context.$mol_state_arg = $mol_state_arg_mock;
    });
    $_1.$mol_test({
        'args as dictionary'($) {
            $.$mol_state_arg.href('#foo=bar/xxx');
            $_1.$mol_assert_like($.$mol_state_arg.dict(), { foo: 'bar', xxx: '' });
            $.$mol_state_arg.dict({ foo: null, yyy: '', lol: '123' });
            $_1.$mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#yyy/lol=123');
        },
        'one value from args'($) {
            $.$mol_state_arg.href('#foo=bar/xxx');
            $_1.$mol_assert_equal($.$mol_state_arg.value('foo'), 'bar');
            $_1.$mol_assert_equal($.$mol_state_arg.value('xxx'), '');
            $.$mol_state_arg.value('foo', 'lol');
            $_1.$mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#foo=lol/xxx');
            $.$mol_state_arg.value('foo', '');
            $_1.$mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#foo/xxx');
            $.$mol_state_arg.value('foo', null);
            $_1.$mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#xxx');
        },
        'nested args'($) {
            const base = new $.$mol_state_arg('nested.');
            class Nested extends $_1.$mol_state_arg {
                constructor(prefix) {
                    super(base.prefix + prefix);
                }
            }
            Nested.value = (key, next) => base.value(key, next);
            $.$mol_state_arg.href('#foo=bar/nested.xxx=123');
            $_1.$mol_assert_equal(Nested.value('foo'), null);
            $_1.$mol_assert_equal(Nested.value('xxx'), '123');
            Nested.value('foo', 'lol');
            $_1.$mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#foo=bar/nested.xxx=123/nested.foo=lol');
        },
    });
})($ || ($ = {}));
//arg.web.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $.$mol_state_local {
            static value(key, next = this.state[key], force) {
                return this.state[key] = (next || null);
            }
        }
        $mol_state_local_mock.state = {};
        __decorate([
            $.$mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//local.mock.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
            $.$mol_state_local.value(key, 123);
            $.$mol_assert_equal($.$mol_state_local.value(key), 123);
            $.$mol_state_local.value(key, null);
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//local.test.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $_1.$mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    $,
                    event_click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $_1.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $_1.$mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    $,
                    event_click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $_1.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $_1.$mol_assert_not(clicked);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//button.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'all cases of using maybe'() {
            $.$mol_assert_equal($.$mol_maybe(0)[0], 0);
            $.$mol_assert_equal($.$mol_maybe(false)[0], false);
            $.$mol_assert_equal($.$mol_maybe(null)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//maybe.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'encode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $.$mol_assert_like($.$mol_charset_encode(str), encoded);
        },
    });
})($ || ($ = {}));
//encode.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $.$mol_assert_equal($.$mol_charset_decode(encoded), str);
            $.$mol_assert_equal($.$mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $.$mol_assert_equal($.$mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));
//decode.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_work = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//work.test.js.map
;
"use strict";
//intersect.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'escape'() {
            const specials = $.$mol_regexp.from('.*+?^${}()|[]\\');
            $.$mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $.$mol_regexp.char_code(32);
            $.$mol_assert_equal(space.exec(' ')[0], ' ');
        },
        'repeat fixed'() {
            const { repeat, digit } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            $.$mol_assert_equal(year.exec('#2020#')[0], '2020');
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, letter } = $.$mol_regexp;
            $.$mol_assert_equal(repeat(letter).exec('abc')[0], '');
            $.$mol_assert_equal(repeat_greedy(letter).exec('abc')[0], 'abc');
        },
        'repeat range'() {
            const { repeat_greedy, digit } = $.$mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $.$mol_assert_equal(year.exec('#2#'), null);
            $.$mol_assert_equal(year.exec('#20#')[0], '20');
            $.$mol_assert_equal(year.exec('#2020#')[0], '2020');
            $.$mol_assert_equal(year.exec('#20201#')[0], '2020');
        },
        'repeat from'() {
            const { repeat_greedy, letter } = $.$mol_regexp;
            const name = repeat_greedy(letter, 2);
            $.$mol_assert_equal(name.exec('##'), null);
            $.$mol_assert_equal(name.exec('#a#'), null);
            $.$mol_assert_equal(name.exec('#ab#')[0], 'ab');
            $.$mol_assert_equal(name.exec('#abc#')[0], 'abc');
        },
        'optional'() {
            const { optional, letter } = $.$mol_regexp;
            const name = optional(letter);
            $.$mol_assert_equal(name.exec('')[0], '');
            $.$mol_assert_equal(name.exec('a')[0], 'a');
            $.$mol_assert_equal(name.exec('ab')[0], 'a');
        },
        'from string'() {
            const regexp = $.$mol_regexp.from('[\\d]');
            $.$mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $.$mol_assert_equal(regexp.flags, 'gu');
        },
        'from regexp'() {
            const regexp = $.$mol_regexp.from(/[\d]/i);
            $.$mol_assert_equal(regexp.source, '[\\d]');
            $.$mol_assert_equal(regexp.flags, 'i');
        },
        'case ignoring'() {
            const xxx = $.$mol_regexp.from('x', { ignoreCase: true });
            $.$mol_assert_like(xxx.flags, 'giu');
            $.$mol_assert_like(xxx.exec('xx')[0], 'x');
            $.$mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end } = $.$mol_regexp;
            const xxx = $.$mol_regexp.from(['x', end], { multiline: true });
            $.$mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $.$mol_assert_like(xxx.flags, 'gmu');
        },
        'sequence'() {
            const { begin, end, digit, repeat } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = $.$mol_regexp.from([begin, year, dash, month, dash, day, end], { ignoreCase: true });
            $.$mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
            $.$mol_assert_like(date.ignoreCase, true);
        },
        'only groups'() {
            const regexp = $.$mol_regexp.from({ dog: '@' });
            $.$mol_assert_like([...regexp.parse('#')], [{ 0: '#' }]);
            $.$mol_assert_like([...regexp.parse('@')], [{ dog: '@' }]);
        },
        'catch skipped'() {
            const regexp = $.$mol_regexp.from(/(@)(\d?)/g);
            $.$mol_assert_like([...regexp.parse('[[@]]')], [
                { 0: '[[' },
                { 1: '@', 2: '' },
                { 0: ']]' },
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $.$mol_regexp.from(Sex);
            $.$mol_assert_like([...sexism.parse('')], []);
            $.$mol_assert_like([...sexism.parse('male')], [{ male: 'male', female: '' }]);
            $.$mol_assert_like([...sexism.parse('female')], [{ male: '', female: 'female' }]);
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $.$mol_regexp.from({ Sex });
            $.$mol_assert_like([...sexism.parse('')], []);
            $.$mol_assert_like([...sexism.parse('male')], [{ Sex: 'male', male: 'male', female: '' }]);
            $.$mol_assert_like([...sexism.parse('female')], [{ Sex: 'female', male: '', female: 'female' }]);
        },
        'sequence with groups'() {
            const { begin, end, digit, repeat } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = $.$mol_regexp.from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...regexp.parse('2020-01-02')];
            $.$mol_assert_like(found, [{
                    year: '2020',
                    month: '01',
                    day: '02',
                }]);
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $.$mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            const found = [...regexp.parse('/foo/mi')];
            $.$mol_assert_like(found, [{
                    prefix: '/',
                    0: 'foo',
                    postfix: '/',
                    1: 'mi',
                }]);
        },
        'recursive sequence with groups'() {
            const { begin, end, digit, repeat } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = $.$mol_regexp.from([begin, { date: [{ year }, dash, { month }] }, dash, { day }, end]);
            const found = [...regexp.parse('2020-01-02')];
            $.$mol_assert_like(found, [{
                    date: '2020-01',
                    year: '2020',
                    month: '01',
                    day: '02',
                }]);
        },
        'parse multiple'() {
            const { digit } = $.$mol_regexp;
            const regexp = $.$mol_regexp.from({ digit });
            $.$mol_assert_like([...regexp.parse('123')], [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'variants'() {
            const { begin, or, end } = $.$mol_regexp;
            const sexism = $.$mol_regexp.from([begin, 'sex = ', { sex: ['male', or, 'female'] }, end]);
            $.$mol_assert_like([...sexism.parse('sex = male')], [{ sex: 'male' }]);
            $.$mol_assert_like([...sexism.parse('sex = female')], [{ sex: 'female' }]);
            $.$mol_assert_like([...sexism.parse('sex = malefemale')], [{ 0: 'sex = malefemale' }]);
        },
        'force after'() {
            const { letter, force_after } = $.$mol_regexp;
            const regexp = $.$mol_regexp.from([letter, force_after('.')]);
            $.$mol_assert_equal(regexp.exec('x.')[0], 'x');
            $.$mol_assert_equal(regexp.exec('x5'), null);
        },
        'forbid after'() {
            const { letter, forbid_after } = $.$mol_regexp;
            const regexp = $.$mol_regexp.from([letter, forbid_after('.')]);
            $.$mol_assert_equal(regexp.exec('x.'), null);
            $.$mol_assert_equal(regexp.exec('x5')[0], 'x');
        },
        'byte except'() {
            const { byte_except, letter, tab } = $.$mol_regexp;
            const name = byte_except(letter, tab);
            $.$mol_assert_equal(name.exec('a'), null);
            $.$mol_assert_equal(name.exec('\t'), null);
            $.$mol_assert_equal(name.exec('(')[0], '(');
        },
    });
})($ || ($ = {}));
//regexp.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'parse and serial'() {
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1Y').toString(), 'P42.1YT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1M').toString(), 'P42.1MT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1D').toString(), 'P42.1DT');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1h').toString(), 'PT42.1H');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1m').toString(), 'PT42.1M');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1s').toString(), 'PT42.1S');
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'format typed'() {
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6s').toString('P#Y#M#DT#h#m#s'), 'P1Y2M3DT4H5M6S');
        },
    });
})($ || ($ = {}));
//duration.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'parse and serial'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014').toString(), '2014');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').toString(), '2014-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').toString(), '2014-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03').toString(), '2014-01-02T03');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04').toString(), '2014-01-02T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05').toString(), '2014-01-02T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006').toString(), '2014-01-02T03:04:05.006');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006Z').toString(), '2014-01-02T03:04:05.006+00:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006+07:00').toString(), '2014-01-02T03:04:05.006+07:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05+07:08').toString(), '2014-01-02T03:04:05+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04+07:08').toString(), '2014-01-02T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04+07:08').toString(), 'T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04:05').toString(), 'T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04').toString(), 'T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('T03').toString(), 'T03');
        },
        'format simple'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000000').toString('AD YY-M-D h:m:s'), '21 14-1-2 1:2:3');
        },
        'format padded'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('YYYY-MM-DD hh:mm:ss'), '2014-01-02 01:02:03');
        },
        'format time zone'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03+05:00').toString('Z'), '+05:00');
        },
        'format names'() {
            $.$mol_assert_ok(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('Month Mon | WeekDay WD'));
        },
        'shifting'() {
            $.$mol_assert_equal(new $.$mol_time_moment('T15:54:58.243+03:00').shift({}).toString(), 'T15:54:58.243+03:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P1Y').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P12M').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P365D').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('PT8760h').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT8760h').toString(), '2015-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT-8760h').toString(), '2013-01');
        },
        'normalization'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2015-07-35').normal.toString(), '2015-08-04');
        },
        'iso week day'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2017-09-17').weekday, 6);
            $.$mol_assert_equal(new $.$mol_time_moment('2017-09-18').weekday, 0);
        },
    });
})($ || ($ = {}));
//moment.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'triplets'() {
            $.$mol_assert_equal(new $.$mol_time_interval('2015-01-01/P1M').end.toString(), '2015-02-01');
            $.$mol_assert_equal(new $.$mol_time_interval('P1M/2015-02-01').start.toString(), '2015-01-01');
            $.$mol_assert_equal(new $.$mol_time_interval('2015-01-01/2015-02-01').duration.toString(), 'PT2678400S');
        }
    });
})($ || ($ = {}));
//interval.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Vector limiting'() {
            let point = new $.$mol_vector_3d(7, 10, 13);
            const res = point.limited([[1, 5], [15, 20], [5, 10]]);
            $.$mol_assert_equal(res.x, 5);
            $.$mol_assert_equal(res.y, 15);
            $.$mol_assert_equal(res.z, 10);
        },
        'Vector adding scalar'() {
            let point = new $.$mol_vector_3d(1, 2, 3);
            let res = point.added0(5);
            $.$mol_assert_equal(res.x, 6);
            $.$mol_assert_equal(res.y, 7);
            $.$mol_assert_equal(res.z, 8);
        },
        'Vector adding vector'() {
            let point = new $.$mol_vector_3d(1, 2, 3);
            let res = point.added1([5, 10, 15]);
            $.$mol_assert_equal(res.x, 6);
            $.$mol_assert_equal(res.y, 12);
            $.$mol_assert_equal(res.z, 18);
        },
        'Vector multiplying scalar'() {
            let point = new $.$mol_vector_3d(2, 3, 4);
            let res = point.multed0(-1);
            $.$mol_assert_equal(res.x, -2);
            $.$mol_assert_equal(res.y, -3);
            $.$mol_assert_equal(res.z, -4);
        },
        'Vector multiplying vector'() {
            let point = new $.$mol_vector_3d(2, 3, 4);
            let res = point.multed1([5, 2, -2]);
            $.$mol_assert_equal(res.x, 10);
            $.$mol_assert_equal(res.y, 6);
            $.$mol_assert_equal(res.z, -8);
        },
        'Matrix adding matrix'() {
            let matrix = new $.$mol_vector_matrix(...[[1, 2], [3, 4], [5, 6]]);
            let res = matrix.added2([[10, 20], [30, 40], [50, 60]]);
            $.$mol_assert_equal(res[0][0], 11);
            $.$mol_assert_equal(res[0][1], 22);
            $.$mol_assert_equal(res[1][0], 33);
            $.$mol_assert_equal(res[1][1], 44);
            $.$mol_assert_equal(res[2][0], 55);
            $.$mol_assert_equal(res[2][1], 66);
        },
        'Matrix multiplying matrix'() {
            let matrix = new $.$mol_vector_matrix(...[[2, 3], [4, 5], [6, 7]]);
            let res = matrix.multed2([[2, 3], [4, 5], [6, 7]]);
            $.$mol_assert_equal(res[0][0], 4);
            $.$mol_assert_equal(res[0][1], 9);
            $.$mol_assert_equal(res[1][0], 16);
            $.$mol_assert_equal(res[1][1], 25);
            $.$mol_assert_equal(res[2][0], 36);
            $.$mol_assert_equal(res[2][1], 49);
        },
        'Range expanding'() {
            let range = $.$mol_vector_range_full.inversed;
            const expanded = range.expanded0(10).expanded0(5);
            $.$mol_assert_like([...expanded], [5, 10]);
        },
        'Vector of range expanding by vector'() {
            let dimensions = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const expanded = dimensions.expanded1([1, 7]).expanded1([3, 5]);
            $.$mol_assert_like([...expanded.x], [1, 3]);
            $.$mol_assert_like([...expanded.y], [5, 7]);
        },
        'Vector of range expanding by vector of range'() {
            let dimensions = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const expanded = dimensions
                .expanded2([[1, 3], [7, 9]])
                .expanded2([[2, 4], [6, 8]]);
            $.$mol_assert_like([...expanded.x], [1, 4]);
            $.$mol_assert_like([...expanded.y], [6, 9]);
        },
        'Vector of infinity range expanding by vector of range'() {
            let dimensions = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const next = new $.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
            const expanded = next
                .expanded2(dimensions);
            $.$mol_assert_like([...expanded.x], [Infinity, -Infinity]);
            $.$mol_assert_like([...expanded.y], [Infinity, -Infinity]);
        },
    });
})($ || ($ = {}));
//vector.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return result without errors'() {
            $.$mol_assert_equal($.$mol_try(() => false), false);
        },
    });
})($ || ($ = {}));
//try.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'lazy calls'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index), () => 10);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 10);
            $.$mol_assert_equal(list[-1], -1);
            $.$mol_assert_equal(list[0], 0);
            $.$mol_assert_equal(list[9], 9);
            $.$mol_assert_equal(list[9.5], undefined);
            $.$mol_assert_equal(list[10], 10);
            $.$mol_assert_equal(calls, 4);
        },
        'infinity list'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index));
            $.$mol_assert_equal(list.length, Number.POSITIVE_INFINITY);
            $.$mol_assert_equal(list[0], 0);
            $.$mol_assert_equal(list[4], 4);
            $.$mol_assert_equal(list[Number.MAX_SAFE_INTEGER], Number.MAX_SAFE_INTEGER);
            $.$mol_assert_equal(list[Number.POSITIVE_INFINITY], Number.POSITIVE_INFINITY);
            $.$mol_assert_equal(calls, 4);
        },
        'stringify'() {
            const list = $.$mol_range2(i => i, () => 5);
            $.$mol_assert_equal(list.toString(), '0,1,2,3,4');
            $.$mol_assert_equal(list.join(';'), '0;1;2;3;4');
        },
        'for-of'() {
            let log = '';
            for (let i of $.$mol_range2(i => i + 1, () => 5)) {
                log += i;
            }
            $.$mol_assert_equal(log, '12345');
        },
        'for-in'() {
            let log = '';
            for (let i in $.$mol_range2(i => i, () => 5)) {
                log += i;
            }
            $.$mol_assert_equal(log, '01234');
        },
        'forEach'() {
            let log = '';
            $.$mol_range2(i => i, () => 5).forEach(i => log += i);
            $.$mol_assert_equal(log, '01234');
        },
        'lazy concat'() {
            let calls1 = 0;
            let calls2 = 0;
            const list = $.$mol_range2(index => (++calls1, index), () => 5).concat([0, 1, 2, 3, 4], $.$mol_range2(index => (++calls2, index), () => 5));
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 15);
            $.$mol_assert_equal(list[0], 0);
            $.$mol_assert_equal(list[4], 4);
            $.$mol_assert_equal(list[5], 0);
            $.$mol_assert_equal(list[9], 4);
            $.$mol_assert_equal(list[10], 0);
            $.$mol_assert_equal(list[14], 4);
            $.$mol_assert_equal(list[15], 5);
            $.$mol_assert_equal(calls1, 2);
            $.$mol_assert_equal(calls2, 3);
        },
        'filter'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index), () => 10).filter(v => v % 2).slice(0, 3);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 3);
            $.$mol_assert_equal(list[0], 1);
            $.$mol_assert_equal(list[2], 5);
            $.$mol_assert_equal(list[3], 7);
            $.$mol_assert_equal(calls, 10);
        },
        'reduce'() {
            let calls = 0;
            const list = $.$mol_range2().slice(1, 6);
            $.$mol_assert_equal(list.reduce((s, v) => s + v), 15);
            $.$mol_assert_equal(list.reduce((s, v) => s + v, 5), 20);
        },
        'lazy map'() {
            let calls1 = 0;
            let calls2 = 0;
            const source = $.$mol_range2(index => (++calls1, index), () => 5);
            const target = source.map((item, index, self) => {
                ++calls2;
                $.$mol_assert_equal(source, self);
                return index + 10;
            }, () => 5);
            $.$mol_assert_ok(target instanceof Array);
            $.$mol_assert_equal(target.length, 5);
            $.$mol_assert_equal(target[0], 10);
            $.$mol_assert_equal(target[4], 14);
            $.$mol_assert_equal(target[5], 15);
            $.$mol_assert_equal(calls1, 3);
            $.$mol_assert_equal(calls2, 3);
        },
        'lazy slice'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index), () => 10).slice(3, 7);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 4);
            $.$mol_assert_equal(list[0], 3);
            $.$mol_assert_equal(list[3], 6);
            $.$mol_assert_equal(list[4], 7);
            $.$mol_assert_equal(calls, 3);
        },
        'lazy some'() {
            let calls = 0;
            $.$mol_assert_ok($.$mol_range2(index => (++calls, index), () => 5).some(v => v >= 2));
            $.$mol_assert_equal(calls, 3);
            $.$mol_assert_not($.$mol_range2(i => i, () => 0).some(v => true));
            $.$mol_assert_ok($.$mol_range2(i => i).some(v => v > 5));
        },
        'lazy every'() {
            let calls = 0;
            $.$mol_assert_not($.$mol_range2(index => (++calls, index), () => 5).every(v => v < 2));
            $.$mol_assert_equal(calls, 3);
            $.$mol_assert_ok($.$mol_range2(i => i, () => 0).every(v => false));
            $.$mol_assert_not($.$mol_range2(i => i).every(v => v < 5));
        },
        'lazyfy'() {
            let calls = 0;
            const list = new $.$mol_range2_array(...[0, 1, 2, 3, 4, 5]).map(i => (++calls, i + 10)).slice(2);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 4);
            $.$mol_assert_equal(calls, 0);
            $.$mol_assert_equal(list[0], 12);
            $.$mol_assert_equal(list[3], 15);
            $.$mol_assert_equal(list[4], Number.NaN);
            $.$mol_assert_equal(calls, 3);
        },
        'prevent modification'() {
            const list = $.$mol_range2(i => i, () => 5);
            $.$mol_assert_fail(() => list.push(4), TypeError);
            $.$mol_assert_fail(() => list.pop(), TypeError);
            $.$mol_assert_fail(() => list.unshift(4), TypeError);
            $.$mol_assert_fail(() => list.shift(), TypeError);
            $.$mol_assert_fail(() => list.splice(1, 2), TypeError);
            $.$mol_assert_fail(() => list[1] = 2, TypeError);
            $.$mol_assert_equal(list.toString(), '0,1,2,3,4');
        }
    });
})($ || ($ = {}));
//range2.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'convertion to primitives'() {
            var unit = new $.$mol_unit_money_usd(5);
            $.$mol_assert_equal(unit.valueOf(), 5);
            $.$mol_assert_equal(unit * 2, 10);
            $.$mol_assert_equal(unit + '', '5');
            $.$mol_assert_equal(`${unit}`, '$5');
            $.$mol_assert_equal(unit.toString(), '$5');
            $.$mol_assert_equal(String(unit), '$5');
        },
        'arithmetic'() {
            var usd1 = new $.$mol_unit_money_usd(2);
            var usd2 = new $.$mol_unit_money_usd(3);
            var rur = new $.$mol_unit_money_rur(2);
            $.$mol_assert_equal($.$mol_unit.summ(usd1, usd2).toString(), '$5');
            $.$mol_assert_equal(usd1.mult(2).toString(), '$4');
        },
    });
})($ || ($ = {}));
//unit.test.js.map
;
"use strict";
//tail.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'config by value'() {
            const N = $.$mol_data_setup((a) => a, 5);
            $.$mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));
//setup.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'function'() {
            $.$mol_assert_not($.$mol_func_is_class(function () { }));
        },
        'generator'() {
            $.$mol_assert_not($.$mol_func_is_class(function* () { }));
        },
        'async'() {
            $.$mol_assert_not($.$mol_func_is_class(async function () { }));
        },
        'arrow'() {
            $.$mol_assert_not($.$mol_func_is_class(() => null));
        },
        'named class'() {
            $.$mol_assert_ok($.$mol_func_is_class(class Foo {
            }));
        },
        'unnamed class'() {
            $.$mol_assert_ok($.$mol_func_is_class(class {
            }));
        },
    });
})($ || ($ = {}));
//class.test.js.map
;
"use strict";
//foot.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'single function'() {
            const stringify = $.$mol_data_pipe((input) => input.toString());
            $.$mol_assert_equal(stringify(5), '5');
        },
        'two functions'() {
            const isLong = $.$mol_data_pipe((input) => input.toString(), (input) => input.length > 2);
            $.$mol_assert_equal(isLong(5.0), false);
            $.$mol_assert_equal(isLong(5.1), true);
        },
        'three functions'() {
            const pattern = $.$mol_data_pipe((input) => input.toString(), (input) => new RegExp(input), (input) => input.toString());
            $.$mol_assert_equal(pattern(5), '/5/');
        },
        'classes'() {
            class Box {
                constructor(value) {
                    this.value = value;
                }
            }
            const boxify = $.$mol_data_pipe((input) => input.toString(), Box);
            $.$mol_assert_like(boxify(5), new Box('5'));
        },
    });
})($ || ($ = {}));
//pipe.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'equal paths'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $.$mol_diff_path([1, 2], [3, 4], [5, 6]);
            $.$mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//path.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is string'() {
            $.$mol_data_string('');
        },
        'Is not string'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_string(0);
            }, '0 is not a string');
        },
        'Is object string'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_string(new String('x'));
            }, 'x is not a string');
        },
    });
})($ || ($ = {}));
//string.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is number'() {
            $.$mol_data_number(0);
        },
        'Is not number'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_number('x');
            }, 'x is not a number');
        },
        'Is object number'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_number(new Number(''));
            }, '0 is not a number');
        },
    });
})($ || ($ = {}));
//number.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//number.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is empty array'() {
            $.$mol_data_array($.$mol_data_number)([]);
        },
        'Is array'() {
            $.$mol_data_array($.$mol_data_number)([1, 2]);
        },
        'Is not array'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_array($.$mol_data_number)({ [0]: 1, length: 1, map: () => { } });
            }, '[object Object] is not an array');
        },
        'Has wrong item'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_array($.$mol_data_number)([1, '1']);
            }, '[1] 1 is not a number');
        },
        'Has wrong deep item'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_array($.$mol_data_array($.$mol_data_number))([[], [0, 0, false]]);
            }, '[1] [2] false is not a number');
        },
    });
})($ || ($ = {}));
//array.test.js.map
;
"use strict";
//merge.test.js.map
;
"use strict";
//undefined.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Fit to record'() {
            const User = $.$mol_data_record({ age: $.$mol_data_number });
            User({ age: 0 });
        },
        'Extends record'() {
            const User = $.$mol_data_record({ age: $.$mol_data_number });
            User({ age: 0, name: 'Jin' });
        },
        'Shrinks record'() {
            $.$mol_assert_fail(() => {
                const User = $.$mol_data_record({ age: $.$mol_data_number, name: $.$mol_data_string });
                User({ age: 0 });
            }, '["name"] undefined is not a string');
        },
        'Shrinks deep record'() {
            $.$mol_assert_fail(() => {
                const User = $.$mol_data_record({ wife: $.$mol_data_record({ age: $.$mol_data_number }) });
                User({ wife: {} });
            }, '["wife"] ["age"] undefined is not a number');
        },
    });
})($ || ($ = {}));
//record.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        '$mol_syntax2_md_flow'() {
            const check = (input, right) => {
                const tokens = [];
                $.$mol_syntax2_md_flow.tokenize(input, (...token) => tokens.push(token));
                $.$mol_assert_like(JSON.stringify(tokens), JSON.stringify(right));
            };
            check('Hello,\nWorld..\r\n\r\n\nof Love!', [
                ['block', 'Hello,\nWorld..\r\n\r\n\n', ['Hello,\nWorld..', '\r\n\r\n\n'], 0],
                ['block', 'of Love!', ['of Love!', ''], 19],
            ]);
            check('# Header1\n\nHello!\n\n## Header2', [
                ['header', '# Header1\n\n', ['#', ' ', 'Header1', '\n\n'], 0],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 11],
                ['header', '## Header2', ['##', ' ', 'Header2', ''], 19],
            ]);
            check('```\nstart()\n```\n\n```js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```', [
                ['code', '```\nstart()\n```\n\n', ['```', '', 'start()\n', '```', '\n\n'], 0],
                ['code', '```js\nrestart()\n```\n\n', ['```', 'js', 'restart()\n', '```', '\n\n'], 17],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 38],
                ['code', '```\nstop()\n```', ['```', '', 'stop()\n', '```', ''], 46],
            ]);
            check('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n', [
                ['table', '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n', ['| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n', '\n'], 0],
                ['table', '| Cell11 | Cell12\n| Cell21 | Cell22\n', ['| Cell11 | Cell12\n| Cell21 | Cell22\n', ''], 68],
            ]);
        },
    });
})($ || ($ = {}));
//md.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'tree parsing'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'inserting'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, 'a', 'b', 'c').toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, 'a', 'b', 'c', 'd').toString(), 'a b c \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, 0, 0, 0).toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, 0, 0, 0, 0).toString(), 'a b \\\n\t\\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, null, null, null).toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, null, null, null, null).toString(), 'a b \\\n\t\\\n');
        },
        'fromJSON'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([]).toString(), '/\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
        'toJSON'() {
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n').sub[0]), '[]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\tfalse\n\ttrue\n').sub[0]), '[false,true]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\t0\n\t1\n\t2.3\n').sub[0]), '[0,1,2.3]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n').sub[0]), '["","foo","bar\\nbaz"]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n').sub[0]), '{"foo":false,"bar\\nbaz":"lol"}');
        },
        'hack'() {
            const res = $_1.$mol_tree.fromString(`foo bar xxx`).hack({
                '': (tree, context) => [tree.hack(context)],
                'bar': (tree, context) => [tree.hack(context).clone({ type: '777' })],
            });
            $_1.$mol_assert_equal(res.toString(), new $_1.$mol_tree({ type: 'foo 777 xxx' }).toString());
        },
        'errors handling'($) {
            const errors = [];
            class Tree extends $_1.$mol_tree {
            }
            Tree.$ = $.$mol_ambient({
                $mol_fail: error => errors.push(error.message)
            });
            Tree.fromString(`
				\t \tfoo
				bar \\data
			`, 'test');
            $_1.$mol_assert_like(errors, ['Syntax error at test:2\n \tfoo']);
        },
    });
})($ || ($ = {}));
//tree.test.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $_1.$mol_test({
            'simple props'($) {
                const app = $_1.$mol_view_tree_test_simple.make({ $ });
                $_1.$mol_assert_equal(app.some(), 1);
                $_1.$mol_assert_equal(app.bool(), true);
                $_1.$mol_assert_equal(app.str(), 'test');
                $_1.$mol_assert_ok(Array.isArray(app.arr()));
                $_1.$mol_assert_ok(Array.isArray(app.arr_string()));
            },
            'default value'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_equal(app.value(), '123');
            },
            'both binding'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_ok(app.value() !== 1);
                app.value(1);
                $_1.$mol_assert_equal(app.value(), 1);
            },
            'left binding'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_not(app.head_complete_enabled());
                $_1.$mol_assert_not(app.enabled());
            },
            'sub component'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                $_1.$mol_assert_ok(app.Test() instanceof $_1.$mol_view_tree_test_binding_right_test);
            },
            'right binding - change owner property'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $_1.$mol_assert_ok(app.outer_width() !== val);
                $_1.$mol_assert_ok(app.Test().width() !== val);
                app.outer_width(val);
                $_1.$mol_assert_equal(app.outer_width(), val);
                $_1.$mol_assert_equal(app.Test().width(), val);
            },
            'right binding - change part property'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $_1.$mol_assert_ok(app.outer_width() !== val);
                $_1.$mol_assert_ok(app.Test().width() !== val);
                app.Test().width(val);
                $_1.$mol_assert_equal(app.Test().width(), val);
                $_1.$mol_assert_equal(app.outer_width(), val);
            },
            'attributes merging'($) {
                const app = $_1.$mol_view_tree_test_attributes.make({ $ });
                $_1.$mol_assert_like(app.some(), { a: 1, b: 2 });
            },
            'subcomponent indexed'($) {
                const app = $_1.$mol_view_tree_test_attributes_subcomponent.make({ $ });
                const val = 123;
                app.page = (index) => index;
                $_1.$mol_assert_equal(app.Page(val).Sub(), val);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//tree.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'span for same uri'($) {
            const span = new $_1.$mol_span('test.ts', 1, 3, 4);
            const child = span.span(4, 5, 8);
            $_1.$mol_assert_equal(child.uri, 'test.ts');
            $_1.$mol_assert_equal(child.row, 4);
            $_1.$mol_assert_equal(child.col, 5);
            $_1.$mol_assert_equal(child.length, 8);
        },
        'span after of given position'($) {
            const span = new $_1.$mol_span('test.ts', 1, 3, 4);
            const child = span.after(11);
            $_1.$mol_assert_equal(child.uri, 'test.ts');
            $_1.$mol_assert_equal(child.row, 1);
            $_1.$mol_assert_equal(child.col, 7);
            $_1.$mol_assert_equal(child.length, 11);
        },
        'slice span - regular'($) {
            const span = new $_1.$mol_span('test.ts', 1, 3, 5);
            const child = span.slice(1, 4);
            $_1.$mol_assert_equal(child.row, 1);
            $_1.$mol_assert_equal(child.col, 4);
            $_1.$mol_assert_equal(child.length, 3);
            const child2 = span.slice(2, 2);
            $_1.$mol_assert_equal(child2.col, 5);
            $_1.$mol_assert_equal(child2.length, 0);
        },
        'slice span - out of range'($) {
            const span = new $_1.$mol_span('test.ts', 1, 3, 5);
            $_1.$mol_assert_fail(() => span.slice(-1, 4));
            $_1.$mol_assert_fail(() => span.slice(1, 6));
            $_1.$mol_assert_fail(() => span.slice(1, 10));
            $_1.$mol_assert_fail(() => span.slice(1, -1));
        },
        'error handling'($) {
            const span = new $_1.$mol_span('test.ts', 1, 3, 4);
            const error = span.error('some error');
            $_1.$mol_assert_equal(error.message, 'some error\ntest.ts#1:3/4');
        }
    });
})($ || ($ = {}));
//span.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'inserting'() {
            $.$mol_assert_equal($.$mol_tree2.fromString('a b c d\n')
                .insert($.$mol_tree2.struct('x'), 'a', 'b', 'c')
                .toString(), 'a b x\n');
            $.$mol_assert_equal($.$mol_tree2.fromString('a b\n')
                .insert($.$mol_tree2.struct('x'), 'a', 'b', 'c', 'd')
                .toString(), 'a b c x\n');
            $.$mol_assert_equal($.$mol_tree2.fromString('a b c d\n')
                .insert($.$mol_tree2.struct('x'), 0, 0, 0)
                .toString(), 'a b x\n');
            $.$mol_assert_equal($.$mol_tree2.fromString('a b\n')
                .insert($.$mol_tree2.struct('x'), 0, 0, 0, 0)
                .toString(), 'a b \\\n\tx\n');
            $.$mol_assert_equal($.$mol_tree2.fromString('a b c d\n')
                .insert($.$mol_tree2.struct('x'), null, null, null)
                .toString(), 'a b x\n');
            $.$mol_assert_equal($.$mol_tree2.fromString('a b\n')
                .insert($.$mol_tree2.struct('x'), null, null, null, null)
                .toString(), 'a b \\\n\tx\n');
        },
        'hack'() {
            const res = $.$mol_tree2.fromString(`foo bar xxx\n`)
                .hack({
                '': (tree, belt) => [tree.clone(tree.hack(belt))],
                'bar': (tree, belt) => [tree.struct('777', tree.hack(belt))],
            });
            $.$mol_assert_equal(res.toString(), 'foo 777 xxx\n');
        },
    });
})($ || ($ = {}));
//tree2.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'tree parsing'($) {
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids.length, 2);
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids[1].type, "bar");
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo\n\n\n").kids.length, 1);
            $_1.$mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids.length, 2);
            $_1.$mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids[1].value, "bar");
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo bar \\pol\n").kids[0].kids[0].kids[0].value, "pol");
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo bar\n\t\\pol\n\t\\men\n").kids[0].kids[0].kids[1].value, "men");
            $_1.$mol_assert_equal($.$mol_tree2_from_string('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'Too many tabs'($) {
            const tree = `
				foo
						bar
			`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, $_1.$mol_span.begin('test'));
            }, 'Too many tabs\ntest#3:1/6\n!!!!!!\n\t\t\t\t\t\tbar');
        },
        'Too few tabs'($) {
            const tree = `
					foo
				bar
			`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, $_1.$mol_span.begin('test'));
            }, 'Too few tabs\ntest#3:1/4\n!!!!\n\t\t\t\tbar');
        },
        'Wrong nodes separator'($) {
            const tree = `foo  bar\n`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, $_1.$mol_span.begin('test'));
            }, 'Wrong nodes separator\ntest#1:4/2\n   !!\nfoo  bar');
        },
        'Undexpected EOF, LF required'($) {
            const tree = `	foo`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, $_1.$mol_span.begin('test'));
            }, 'Undexpected EOF, LF required\ntest#1:5/1\n	   !\n	foo');
        },
        'Errors skip and collect'($) {
            const tree = `foo  bar`;
            const errors = [];
            const $$ = $.$mol_ambient({
                $mol_fail: (error) => {
                    errors.push(error.message);
                    return null;
                }
            });
            const res = $$.$mol_tree2_from_string(tree, $_1.$mol_span.begin('test'));
            $_1.$mol_assert_like(errors, [
                'Wrong nodes separator\ntest#1:4/2\n   !!\nfoo  bar',
                'Undexpected EOF, LF required\ntest#1:9/1\n        !\nfoo  bar',
            ]);
            $_1.$mol_assert_equal(res.toString(), 'foo bar\n');
        },
    });
})($ || ($ = {}));
//string.test.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        const src = `
		$${''}my_test $${''}my_super
			title @ \\title
			sub /
				<= Title $${''}mol_view
					sub /
						<= title
				<= Close $${''}mol_button
					title \close
					click?event <=> close?event null
			plugins /
				<= Speech $${''}mol_speech
					text => speech
	`;
        const dest = $$.$mol_tree2_from_string(`
		title @ \\title
		sub /
			<= Title
			<= Close
		plugins / <= Speech
		Title $${''}mol_view sub / <= title
		close?event null
		Close $${''}mol_button
			title \close
			click?event <=> close?event
		Speech $${''}mol_speech text => speech
	`);
        $_1.$mol_test({
            'props'($) {
                const span = $_1.$mol_span.entire('/mol/view/tree2/class/props.test.ts', src.length);
                const mod = $_1.$mol_tree2.fromString(src, span);
                const result = $.$mol_view_tree2_class_props(mod.kids[0]).toString();
                $_1.$mol_assert_equal(result, dest.toString());
            }
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//props.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Makes reactive value by key'() {
            class Fib extends $.$mol_object2 {
                static get value() {
                    return $.$mol_atom2_dict({
                        get: (index, dict) => {
                            if (index < 2)
                                return 1;
                            return dict[index - 1] + dict[index - 2];
                        }
                    });
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Fib, "value", null);
            $.$mol_assert_equal(Fib.value[10], 89);
            Fib.value[1] = 2;
            $.$mol_assert_equal(Fib.value[10], 144);
        },
        'Reactive keys list'() {
            class Registry extends $.$mol_object2 {
                static get value() {
                    return $.$mol_atom2_dict({});
                }
                static get size() {
                    return Object.keys(this.value).length;
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Registry, "value", null);
            __decorate([
                $.$mol_atom2_field
            ], Registry, "size", null);
            $.$mol_assert_equal(Registry.size, 0);
            Registry.value[1] = 2;
            Registry.value[3] = 4;
            $.$mol_assert_equal(Registry.size, 2);
        },
        'Can be iterated over keys'() {
            class Registry extends $.$mol_object2 {
                static get value() {
                    return $.$mol_atom2_dict({});
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Registry, "value", null);
            Registry.value[1] = 2;
            Registry.value[3] = 4;
            const keys = [];
            for (let key in Registry.value)
                keys.push(key);
            $.$mol_assert_like(keys, ['1', '3']);
        },
        async 'Call back on abort'() {
            const log = [];
            class Registry extends $.$mol_object2 {
                static get item() {
                    return $.$mol_atom2_dict({
                        get: key => key,
                        abort: key => {
                            log.push(key);
                            return true;
                        },
                    });
                }
                static get result() { return this.condition ? this.item['foo'] : ''; }
            }
            Registry.condition = true;
            __decorate([
                $.$mol_atom2_field
            ], Registry, "item", null);
            __decorate([
                $.$mol_atom2_field
            ], Registry, "condition", void 0);
            __decorate([
                $.$mol_atom2_field
            ], Registry, "result", null);
            $.$mol_assert_equal(Registry.result, 'foo');
            Registry.condition = false;
            $.$mol_assert_equal(Registry.result, '');
            $.$mol_assert_like(log, []);
            await $.$mol_fiber_warp();
            $.$mol_assert_like(log, ['foo']);
        },
        'Value has js-path name'() {
            class Registry extends $.$mol_object2 {
                static get item() {
                    return $.$mol_atom2_dict({
                        get: (key) => new $.$mol_object2,
                    });
                }
            }
            __decorate([
                $.$mol_atom2_field
            ], Registry, "item", null);
            $.$mol_assert_equal(`${Registry.item['foo']}`, 'Registry.item["foo"]');
        },
    });
})($ || ($ = {}));
//dict.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    $.$mol_test({
        'base64 decode string'() {
            $.$mol_assert_like($.$mol_base64_decode('SGVsbG8sIM6nzqjOqdCr'), new TextEncoder().encode('Hello, ΧΨΩЫ'));
        },
        'base64 decode binary'() {
            $.$mol_assert_like($.$mol_base64_decode('GgoASUh42g=='), png);
        },
    });
})($ || ($ = {}));
//decode.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_web(base64Str) {
        return new Uint8Array($.$mol_dom_context.atob(base64Str).split('').map(c => c.charCodeAt(0)));
    }
    $.$mol_base64_decode_web = $mol_base64_decode_web;
    $.$mol_base64_decode = $mol_base64_decode_web;
})($ || ($ = {}));
//decode.web.js.map
;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/simple.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3Rfc2ltcGxlICRtb2xfdmlldwoJc3RyIFxzb21lCgludW0gMTIzMTcKCWJvb2wgdHJ1ZQoJbnVsIG51bGwKCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCW11bHRpX3N0ciBcCgkJXG9uZQoJCVx0d28KCXNhbWU/dmFsIFwKCS0gY29tbWVudGVkX25vZGUgLwoJCTw9IE5vdGVzX3BhZ2VfdGl0bGUhdGFnCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/simple.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X3NpbXBsZSBleHRlbmRzICRtb2xfdmlldyB7CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzdHIgXHNvbWUKCQkgKiBgYGAKCQkgKi8KCQlzdHIoKSB7CgkJCXJldHVybiAic29tZSIKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBudW0gMTIzMTcKCQkgKiBgYGAKCQkgKi8KCQludW0oKSB7CgkJCXJldHVybiAxMjMxNwoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGJvb2wgdHJ1ZQoJCSAqIGBgYAoJCSAqLwoJCWJvb2woKSB7CgkJCXJldHVybiB0cnVlCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbnVsIG51bGwKCQkgKiBgYGAKCQkgKi8KCQludWwoKSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCQkgKiBgYGAKCQkgKi8KCQlsb2NhbGl6ZWQoKSB7CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X3NpbXBsZV9sb2NhbGl6ZWQnICkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBtdWx0aV9zdHIgXAoJCSAqIAlcb25lCgkJICogCVx0d28KCQkgKiBgYGAKCQkgKi8KCQltdWx0aV9zdHIoKSB7CgkJCXJldHVybiAib25lXG50d28iCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc2FtZT92YWwgXAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlzYW1lKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQlyZXR1cm4gIiIKCQl9CgkJLy8gY29tbWVudGVkX25vZGUKCX0KCn0K"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/array.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYXJyYXkgJG1vbF92aWV3Cgl0eXBlZCAvc3RyaW5nCgkJXHNvbWUxCgkJXHNvbWUyCgljb25zdCAvY29uc3QKCQlcc29tZTEKCQlcc29tZTIKCXN1cGVyX3Byb3AgLwoJCVxzb21lMQoJCV4KCQlcc29tZTIKCQleIHRlc3QKCXNpbXBsZSAvCgkJXHNvbWUKCQkxMjMxNwoJCXRydWUKCQludWxsCglhcnIgL3JlYWRvbmx5KG51bWJlcilbXQoJY29tcGxleCAvCgkJLwoJCQlcdGVzdDEKCQkJXHRlc3QyCgkJKgoJCQlzdHIgXHNvbWUKCQkJbnVsIG51bGwK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/array.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2FycmF5IGV4dGVuZHMgJG1vbF92aWV3IHsKCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHR5cGVkIC9zdHJpbmcKCQkgKiAJXHNvbWUxCgkJICogCVxzb21lMgoJCSAqIGBgYAoJCSAqLwoJCXR5cGVkKCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUxIiwKCQkJCSJzb21lMiIKCQkJXSBhcyByZWFkb25seSBzdHJpbmdbXQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNvbnN0IC9jb25zdAoJCSAqIAlcc29tZTEKCQkgKiAJXHNvbWUyCgkJICogYGBgCgkJICovCgkJY29uc3QoKSB7CgkJCXJldHVybiBbCgkJCQkic29tZTEiLAoJCQkJInNvbWUyIgoJCQldIGFzIGNvbnN0CgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc3VwZXJfcHJvcCAvCgkJICogCVxzb21lMQoJCSAqIAleCgkJICogCVxzb21lMgoJCSAqIAleIHRlc3QKCQkgKiBgYGAKCQkgKi8KCQlzdXBlcl9wcm9wKCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUxIiwKCQkJCS4uLnN1cGVyLnN1cGVyX3Byb3AoKSwKCQkJCSJzb21lMiIsCgkJCQkuLi50aGlzLnRlc3QoKQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc2ltcGxlIC8KCQkgKiAJXHNvbWUKCQkgKiAJMTIzMTcKCQkgKiAJdHJ1ZQoJCSAqIAludWxsCgkJICogYGBgCgkJICovCgkJc2ltcGxlKCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUiLAoJCQkJMTIzMTcsCgkJCQl0cnVlLAoJCQkJbnVsbCBhcyBhbnkKCQkJXSBhcyByZWFkb25seSBhbnlbXQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGFyciAvcmVhZG9ubHkobnVtYmVyKVtdCgkJICogYGBgCgkJICovCgkJYXJyKCkgewoJCQlyZXR1cm4gWwoKCQkJXSBhcyByZWFkb25seSAocmVhZG9ubHkobnVtYmVyKVtdKVtdCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY29tcGxleCAvCgkJICogCS8KCQkgKiAJCVx0ZXN0MQoJCSAqIAkJXHRlc3QyCgkJICogCSoKCQkgKiAJCXN0ciBcc29tZQoJCSAqIAkJbnVsIG51bGwKCQkgKiBgYGAKCQkgKi8KCQljb21wbGV4KCkgewoJCQlyZXR1cm4gWwoJCQkJWwoJCQkJCSJ0ZXN0MSIsCgkJCQkJInRlc3QyIgoJCQkJXSBhcyByZWFkb25seSBhbnlbXSwKCQkJCXsKCQkJCQlzdHI6ICJzb21lIiwKCQkJCQludWw6IG51bGwgYXMgYW55CgkJCQl9CgkJCV0gYXMgcmVhZG9ubHkgYW55W10KCQl9Cgl9Cgp9Cg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/dictionary.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZGljdGlvbmFyeSAkbW9sX3ZpZXcKCXN1cGVyX3Byb3AgKgoJCXN0ciBcc29tZQoJCV4KCQlzdHIyIFxzb21lCgkJXiB0ZXN0CglzaW1wbGUgKgoJCSRzdHIgXHNvbWUKCQluLXVtIDEyMzE3CgkJYm9vbCB0cnVlCgkJbnVsIG51bGwKCQlsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlMQoJY29tcGxleCAqCgkJYXJyIC8KCQkJXHRlc3QxCgkJCVx0ZXN0MgoJCWNoaWxkICoKCQkJc3RyIFxzb21lCgkJCW51bSAxMjMxNwoJCQlib29sIHRydWUKCQkJbnVsIG51bGwKCQkJbG9jYWxpemVkIEAgXGxvY2FsaXplZCB2YWx1ZTIK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/dictionary.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2RpY3Rpb25hcnkgZXh0ZW5kcyAkbW9sX3ZpZXcgewoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc3VwZXJfcHJvcCAqCgkJICogCXN0ciBcc29tZQoJCSAqIAleCgkJICogCXN0cjIgXHNvbWUKCQkgKiAJXiB0ZXN0CgkJICogYGBgCgkJICovCgkJc3VwZXJfcHJvcCgpIHsKCQkJcmV0dXJuIHsKCQkJCXN0cjogInNvbWUiLAoJCQkJLi4uc3VwZXIuc3VwZXJfcHJvcCgpLAoJCQkJc3RyMjogInNvbWUiLAoJCQkJLi4udGhpcy50ZXN0KCkKCQkJfQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHNpbXBsZSAqCgkJICogCSRzdHIgXHNvbWUKCQkgKiAJbi11bSAxMjMxNwoJCSAqIAlib29sIHRydWUKCQkgKiAJbnVsIG51bGwKCQkgKiAJbG9jYWxpemVkIEAgXGxvY2FsaXplZCB2YWx1ZTEKCQkgKiBgYGAKCQkgKi8KCQlzaW1wbGUoKSB7CgkJCXJldHVybiB7CgkJCQkiJHN0ciI6ICJzb21lIiwKCQkJCSJuLXVtIjogMTIzMTcsCgkJCQlib29sOiB0cnVlLAoJCQkJbnVsOiBudWxsIGFzIGFueSwKCQkJCWxvY2FsaXplZDogdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9kaWN0aW9uYXJ5X3NpbXBsZV9sb2NhbGl6ZWQnICkKCQkJfQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNvbXBsZXggKgoJCSAqIAlhcnIgLwoJCSAqIAkJXHRlc3QxCgkJICogCQlcdGVzdDIKCQkgKiAJY2hpbGQgKgoJCSAqIAkJc3RyIFxzb21lCgkJICogCQludW0gMTIzMTcKCQkgKiAJCWJvb2wgdHJ1ZQoJCSAqIAkJbnVsIG51bGwKCQkgKiAJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUyCgkJICogYGBgCgkJICovCgkJY29tcGxleCgpIHsKCQkJcmV0dXJuIHsKCQkJCWFycjogWwoJCQkJCSJ0ZXN0MSIsCgkJCQkJInRlc3QyIgoJCQkJXSBhcyByZWFkb25seSBhbnlbXSwKCQkJCWNoaWxkOiB7CgkJCQkJc3RyOiAic29tZSIsCgkJCQkJbnVtOiAxMjMxNywKCQkJCQlib29sOiB0cnVlLAoJCQkJCW51bDogbnVsbCBhcyBhbnksCgkJCQkJbG9jYWxpemVkOiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2RpY3Rpb25hcnlfY29tcGxleF9jaGlsZF9sb2NhbGl6ZWQnICkKCQkJCX0KCQkJfQoJCX0KCX0KCn0K"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/factory.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZmFjdG9yeSAkbW9sX3ZpZXcKCVNpbXBsZSAkbW9sX3ZpZXcKCQlzdHIgXHNvbWUKCQludW0gMTIzMTcKCQlib29sIHRydWUKCQludWwgbnVsbAoJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCUNvbXBsZXggJG1vbF92aWV3CgkJYXJyIC8KCQkJXHRlc3QxCgkJCVx0ZXN0MgoJCWRpY3QgKgoJCQlzdHIgXHNvbWUyCgkJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCUFyciAkbW9sX3ZlY3Rvcl8yZCAvCgkJPD0gdmlld3BvcnRfeCAkbW9sX3ZlY3Rvcl9yYW5nZSAvCgkJCUluZmluaXR5CgkJCS1JbmZpbml0eQoJCTw9IHZpZXdwb3J0X3kgJG1vbF92ZWN0b3JfcmFuZ2UgLwoJCQlJbmZpbml0eQoJCQktSW5maW5pdHkK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/factory.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2ZhY3RvcnkgZXh0ZW5kcyAkbW9sX3ZpZXcgewoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogU2ltcGxlICRtb2xfdmlldwoJCSAqIAlzdHIgXHNvbWUKCQkgKiAJbnVtIDEyMzE3CgkJICogCWJvb2wgdHJ1ZQoJCSAqIAludWwgbnVsbAoJCSAqIAlsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCVNpbXBsZSgpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoKCQkJb2JqLnN0ciA9ICgpID0+ICJzb21lIgoJCQlvYmoubnVtID0gKCkgPT4gMTIzMTcKCQkJb2JqLmJvb2wgPSAoKSA9PiB0cnVlCgkJCW9iai5udWwgPSAoKSA9PiBudWxsIGFzIGFueQoJCQlvYmoubG9jYWxpemVkID0gKCkgPT4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9mYWN0b3J5X1NpbXBsZV9sb2NhbGl6ZWQnICkKCgkJCXJldHVybiBvYmoKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBDb21wbGV4ICRtb2xfdmlldwoJCSAqIAlhcnIgLwoJCSAqIAkJXHRlc3QxCgkJICogCQlcdGVzdDIKCQkgKiAJZGljdCAqCgkJICogCQlzdHIgXHNvbWUyCgkJICogCQlsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCUNvbXBsZXgoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCgkJCW9iai5hcnIgPSAoKSA9PiBbCgkJCQkidGVzdDEiLAoJCQkJInRlc3QyIgoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJCW9iai5kaWN0ID0gKCkgPT4gKHsKCQkJCXN0cjogInNvbWUyIiwKCQkJCWxvY2FsaXplZDogdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9mYWN0b3J5X0NvbXBsZXhfZGljdF9sb2NhbGl6ZWQnICkKCQkJfSkKCgkJCXJldHVybiBvYmoKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBBcnIgJG1vbF92ZWN0b3JfMmQgLwoJCSAqIAk8PSB2aWV3cG9ydF94CgkJICogCTw9IHZpZXdwb3J0X3kKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJQXJyKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmVjdG9yXzJkKAoJCQkJdGhpcy52aWV3cG9ydF94KCksCgkJCQl0aGlzLnZpZXdwb3J0X3koKQoJCQkpCgoJCQlyZXR1cm4gb2JqCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogdmlld3BvcnRfeCAkbW9sX3ZlY3Rvcl9yYW5nZSAvCgkJICogCUluZmluaXR5CgkJICogCS1JbmZpbml0eQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQl2aWV3cG9ydF94KCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmVjdG9yX3JhbmdlKAoJCQkJSW5maW5pdHksCgkJCQktSW5maW5pdHkKCQkJKQoKCQkJcmV0dXJuIG9iagoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHZpZXdwb3J0X3kgJG1vbF92ZWN0b3JfcmFuZ2UgLwoJCSAqIAlJbmZpbml0eQoJCSAqIAktSW5maW5pdHkKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJdmlld3BvcnRfeSgpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZlY3Rvcl9yYW5nZSgKCQkJCUluZmluaXR5LAoJCQkJLUluZmluaXR5CgkJCSkKCgkJCXJldHVybiBvYmoKCQl9Cgl9Cgp9Cg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/multiple_class.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYSAkbW9sX3ZpZXcKCXN0ciBcc29tZQoKJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYiAkbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9tdWx0aXBsZV9jbGFzc19hCglzdHIgXHNvbWUyCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/multiple_class.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X211bHRpcGxlX2NsYXNzX2EgZXh0ZW5kcyAkbW9sX3ZpZXcgewoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc3RyIFxzb21lCgkJICogYGBgCgkJICovCgkJc3RyKCkgewoJCQlyZXR1cm4gInNvbWUiCgkJfQoJfQoKCWV4cG9ydCBjbGFzcyAkbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9tdWx0aXBsZV9jbGFzc19iIGV4dGVuZHMgJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYSB7CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzdHIgXHNvbWUyCgkJICogYGBgCgkJICovCgkJc3RyKCkgewoJCQlyZXR1cm4gInNvbWUyIgoJCX0KCX0KCn0K"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/left.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9sZWZ0ICRtb2xfdmlldwoJZGVmYXVsdCA8PSBkZWZhdWx0X293bmVyIFx0ZXN0CgllbXB0eSA8PSBlbXB0eV9vd25lcgoJaW5kZXhlZCFrZXkgPD0gaW5kZXhlZF9vd25lciFrZXkKCWluZGV4ZWRfZGVmYXVsdCFrZXkgPD0gaW5kZXhlZF9kZWZhdWx0X293bmVyIWtleSBudWxsCgljbGFzcyA8PSBjbGFzc19vd25lciAkbW9sX3ZpZXcKCXR3aWNlIG51bGwKCXdyaXRhYmxlIDw9IHdyaXRhYmxlX293bmVyP3ZhbCBcCgljbGFzc19pbmRleGVkIWtleSA8PSBjbGFzc19pbmRleGVkX293bmVyIWtleSAkbW9sX3ZpZXcKCQl0aXRsZSBAIFxzb21lMQoJCXNhbWUgPD0gc2FtZT92YWwgXAoJCXNvbWUgPD0gdHdpY2UKCQlsb2NhbGl6ZWQgPD0gbG9jYWxpemVkX293bmVyIWtleSBAIFxzb21lMQoJCWNoYWluIDw9IGNoYWluMSA8PSBjaGFpbjIgbnVsbAoJYXJyIC8KCQk8PSBEZXRhaWxfbGlzdCAkbW9sX2xpc3QKCQkJcm93cyA8PSBtYWluX2NvbnRlbnQgLwoJCSoKCQkJbG9jIDw9IGxvY19vdXRlciBAIFx0ZXN0IGxvY2FsaXplCgkJKgoJCQlsb2MgPD0gbG9jX291dGVyIEAgXHRlc3QgbG9jYWxpemUKCXNhbWUyIEAgXFNvbWUKCVNhbWUKCQk8PSBTdWIgJG1vbF92aWV3CgkJCXNhbWUgPD0gc2FtZTIgLQo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/left.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdCBleHRlbmRzICRtb2xfdmlldyB7CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBkZWZhdWx0IDw9IGRlZmF1bHRfb3duZXIKCQkgKiBgYGAKCQkgKi8KCQlkZWZhdWx0KCkgewoJCQlyZXR1cm4gdGhpcy5kZWZhdWx0X293bmVyKCkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBlbXB0eSA8PSBlbXB0eV9vd25lcgoJCSAqIGBgYAoJCSAqLwoJCWVtcHR5KCkgewoJCQlyZXR1cm4gdGhpcy5lbXB0eV9vd25lcigpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZCFrZXkgPD0gaW5kZXhlZF9vd25lciFrZXkKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkKGtleTogYW55KSB7CgkJCXJldHVybiB0aGlzLmluZGV4ZWRfb3duZXIoa2V5KQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfZGVmYXVsdCFrZXkgPD0gaW5kZXhlZF9kZWZhdWx0X293bmVyIWtleQoJCSAqIGBgYAoJCSAqLwoJCWluZGV4ZWRfZGVmYXVsdChrZXk6IGFueSkgewoJCQlyZXR1cm4gdGhpcy5pbmRleGVkX2RlZmF1bHRfb3duZXIoa2V5KQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzIDw9IGNsYXNzX293bmVyCgkJICogYGBgCgkJICovCgkJY2xhc3MoKSB7CgkJCXJldHVybiB0aGlzLmNsYXNzX293bmVyKCkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB0d2ljZSBudWxsCgkJICogYGBgCgkJICovCgkJdHdpY2UoKSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlIDw9IHdyaXRhYmxlX293bmVyP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCXdyaXRhYmxlKCkgewoJCQlyZXR1cm4gdGhpcy53cml0YWJsZV9vd25lcigpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3NfaW5kZXhlZCFrZXkgPD0gY2xhc3NfaW5kZXhlZF9vd25lciFrZXkKCQkgKiBgYGAKCQkgKi8KCQljbGFzc19pbmRleGVkKGtleTogYW55KSB7CgkJCXJldHVybiB0aGlzLmNsYXNzX2luZGV4ZWRfb3duZXIoa2V5KQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGFyciAvCgkJICogCTw9IERldGFpbF9saXN0CgkJICogCSogbG9jIDw9IGxvY19vdXRlcgoJCSAqIAkqIGxvYyA8PSBsb2Nfb3V0ZXIKCQkgKiBgYGAKCQkgKi8KCQlhcnIoKSB7CgkJCXJldHVybiBbCgkJCQl0aGlzLkRldGFpbF9saXN0KCksCgkJCQl7CgkJCQkJbG9jOiB0aGlzLmxvY19vdXRlcigpCgkJCQl9LAoJCQkJewoJCQkJCWxvYzogdGhpcy5sb2Nfb3V0ZXIoKQoJCQkJfQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc2FtZTIgQCBcU29tZQoJCSAqIGBgYAoJCSAqLwoJCXNhbWUyKCkgewoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2xlZnRfc2FtZTInICkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBTYW1lIDw9IFN1YgoJCSAqIGBgYAoJCSAqLwoJCVNhbWUoKSB7CgkJCXJldHVybiB0aGlzLlN1YigpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogZGVmYXVsdF9vd25lciBcdGVzdAoJCSAqIGBgYAoJCSAqLwoJCWRlZmF1bHRfb3duZXIoKSB7CgkJCXJldHVybiAidGVzdCIKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBpbmRleGVkX2RlZmF1bHRfb3duZXIha2V5IG51bGwKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkX2RlZmF1bHRfb3duZXIoa2V5OiBhbnkpIHsKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3Nfb3duZXIgJG1vbF92aWV3CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWNsYXNzX293bmVyKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgoJCQlyZXR1cm4gb2JqCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogd3JpdGFibGVfb3duZXI/dmFsIFwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJd3JpdGFibGVfb3duZXIodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsCgkJCXJldHVybiAiIgoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHNhbWU/dmFsIFwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJc2FtZSh2YWw/OiBhbnkpIHsKCQkJaWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHJldHVybiB2YWwKCQkJcmV0dXJuICIiCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbG9jYWxpemVkX293bmVyIWtleSBAIFxzb21lMQoJCSAqIGBgYAoJCSAqLwoJCWxvY2FsaXplZF9vd25lcihrZXk6IGFueSkgewoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2xlZnRfbG9jYWxpemVkX293bmVyJyApCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2hhaW4yIG51bGwKCQkgKiBgYGAKCQkgKi8KCQljaGFpbjIoKSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNoYWluMSA8PSBjaGFpbjIKCQkgKiBgYGAKCQkgKi8KCQljaGFpbjEoKSB7CgkJCXJldHVybiB0aGlzLmNoYWluMigpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3NfaW5kZXhlZF9vd25lciFrZXkgJG1vbF92aWV3CgkJICogCXRpdGxlIEAgXHNvbWUxCgkJICogCXNhbWUgPD0gc2FtZT92YWwKCQkgKiAJc29tZSA8PSB0d2ljZQoJCSAqIAlsb2NhbGl6ZWQgPD0gbG9jYWxpemVkX293bmVyIWtleQoJCSAqIAljaGFpbiA8PSBjaGFpbjEKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtX2tleQoJCWNsYXNzX2luZGV4ZWRfb3duZXIoa2V5OiBhbnkpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoKCQkJb2JqLnRpdGxlID0gKCkgPT4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2xlZnRfY2xhc3NfaW5kZXhlZF9vd25lcl90aXRsZScgKQoJCQlvYmouc2FtZSA9ICgpID0+IHRoaXMuc2FtZSgpCgkJCW9iai5zb21lID0gKCkgPT4gdGhpcy50d2ljZSgpCgkJCW9iai5sb2NhbGl6ZWQgPSAoKSA9PiB0aGlzLmxvY2FsaXplZF9vd25lcihrZXkpCgkJCW9iai5jaGFpbiA9ICgpID0+IHRoaXMuY2hhaW4xKCkKCgkJCXJldHVybiBvYmoKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBtYWluX2NvbnRlbnQgLwoJCSAqIGBgYAoJCSAqLwoJCW1haW5fY29udGVudCgpIHsKCQkJcmV0dXJuIFsKCgkJCV0gYXMgcmVhZG9ubHkgYW55W10KCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBEZXRhaWxfbGlzdCAkbW9sX2xpc3Qgcm93cyA8PSBtYWluX2NvbnRlbnQKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJRGV0YWlsX2xpc3QoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF9saXN0KCkKCgkJCW9iai5yb3dzID0gKCkgPT4gdGhpcy5tYWluX2NvbnRlbnQoKQoKCQkJcmV0dXJuIG9iagoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGxvY19vdXRlciBAIFx0ZXN0IGxvY2FsaXplCgkJICogYGBgCgkJICovCgkJbG9jX291dGVyKCkgewoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2xlZnRfbG9jX291dGVyJyApCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogU3ViICRtb2xfdmlldyBzYW1lIDw9IHNhbWUyCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCVN1YigpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoKCQkJb2JqLnNhbWUgPSAoKSA9PiB0aGlzLnNhbWUyKCkKCgkJCXJldHVybiBvYmoKCQl9Cgl9Cgp9Cg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/right.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9yaWdodCAkbW9sX3ZpZXcKCUNscyAkbW9sX3ZpZXcKCQlpbm5lciA9PiBvdXRlcgoJCXdyaXRhYmxlP3ZhbCA9PiB3cml0YWJsZV9vdXRlcj92YWwKCQlpbmRleGVkIWtleSA9PiBpbmRleGVkX291dGVyIWtleQoJCWluZGV4ZWRfd3JpdGFibGUha2V5P3ZhbCA9PiBpbmRleGVkX3dyaXRhYmxlX291dGVyIWtleT92YWwKCXEgPD0gQ2xzMiAkbW9sX3ZpZXcKCQlpbm5lciA9PiBvdXRlclEKCUluZGV4ZWQhaW5kZXggJG1vbF92aWV3CgkJVGl0bGUgPT4gT3V0ZXJfdGl0bGUhaW5kZXgK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/right.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfcmlnaHQgZXh0ZW5kcyAkbW9sX3ZpZXcgewoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogQ2xzICRtb2xfdmlldwoJCSAqIAlpbm5lciA9PiBvdXRlcgoJCSAqIAl3cml0YWJsZT92YWwgPT4gd3JpdGFibGVfb3V0ZXI/dmFsCgkJICogCWluZGV4ZWQha2V5ID0+IGluZGV4ZWRfb3V0ZXIha2V5CgkJICogCWluZGV4ZWRfd3JpdGFibGUha2V5P3ZhbCA9PiBpbmRleGVkX3dyaXRhYmxlX291dGVyIWtleT92YWwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJQ2xzKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgoJCQlyZXR1cm4gb2JqCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogb3V0ZXIKCQkgKiBgYGAKCQkgKi8KCQlvdXRlcigpIHsKCQkJcmV0dXJuIHRoaXMuQ2xzKCkuaW5uZXIoKQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlX291dGVyP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCXdyaXRhYmxlX291dGVyKHZhbD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5DbHMoKS53cml0YWJsZSh2YWwpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZF9vdXRlciFrZXkKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkX291dGVyKGtleTogYW55KSB7CgkJCXJldHVybiB0aGlzLkNscygpLmluZGV4ZWQoa2V5KQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfd3JpdGFibGVfb3V0ZXIha2V5P3ZhbAoJCSAqIGBgYAoJCSAqLwoJCWluZGV4ZWRfd3JpdGFibGVfb3V0ZXIoa2V5OiBhbnksIHZhbD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5DbHMoKS5pbmRleGVkX3dyaXRhYmxlKGtleSwgdmFsKQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHEgPD0gQ2xzMgoJCSAqIGBgYAoJCSAqLwoJCXEoKSB7CgkJCXJldHVybiB0aGlzLkNsczIoKQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIEluZGV4ZWQhaW5kZXggJG1vbF92aWV3IFRpdGxlID0+IE91dGVyX3RpdGxlIWluZGV4CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbV9rZXkKCQlJbmRleGVkKGluZGV4OiBhbnkpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoKCQkJcmV0dXJuIG9iagoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIE91dGVyX3RpdGxlIWluZGV4CgkJICogYGBgCgkJICovCgkJT3V0ZXJfdGl0bGUoaW5kZXg6IGFueSkgewoJCQlyZXR1cm4gdGhpcy5JbmRleGVkKGluZGV4KS5UaXRsZSgpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogQ2xzMiAkbW9sX3ZpZXcgaW5uZXIgPT4gb3V0ZXJRCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCUNsczIoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCgkJCXJldHVybiBvYmoKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBvdXRlclEKCQkgKiBgYGAKCQkgKi8KCQlvdXRlclEoKSB7CgkJCXJldHVybiB0aGlzLkNsczIoKS5pbm5lcigpCgkJfQoJfQoKfQo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/both.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9ib3RoICRtb2xfdmlldwoJd3JpdGFibGU/dmFsIDw9PiB3cml0YWJsZV9vd25lcj92YWwKCXdyaXRhYmxlX2RlZmF1bHQ/dmFsIDw9PiB3cml0YWJsZV9kZWZhdWx0X293bmVyP3ZhbCBudWxsCgljbGFzcz92YWwgPD0+IGNsYXNzX293bmVyP3ZhbCAkbW9sX3ZpZXcKCWluZGV4ZWQha2V5P3ZhbCA8PT4gaW5kZXhlZF9vd25lciFrZXk/dmFsIG51bGwKCXR3aWNlIG51bGwKCWNsYXNzX2luZGV4ZWQha2V5P3ZhbCAkbW9sX3ZpZXcKCQlleHBhbmRlZCA8PT4gY2VsbF9leHBhbmRlZCFrZXk/dmFsCgljbGFzc193cml0YWJsZT92YWwgPD0+IGNsYXNzX3dyaXRhYmxlX293bmVyP3ZhbCAkbW9sX3ZpZXcKCQlzb21lP3ZhbCA8PT4gdHdpY2U/dmFsCgkJbG9jYWxpemVkP3ZhbCA8PT4gbG9jYWxpemVkX293bmVyP3ZhbCBAIFxzb21lMQoJCWNoYWluP3YgPD0+IGNoYWluMT92IDw9PiBjaGFpbjI/diBudWxsCglhcnIgLwoJCSoKCQkJbG9jP3YgPD0+IGxvY19vdXRlcj92IEAgXHRlc3QgbG9jYWxpemUKCQkqCgkJCWxvYz92IDw9PiBsb2Nfb3V0ZXI/diBAIFx0ZXN0IGxvY2FsaXplCglzd2lwZV90b19sZWZ0P2V2ZW50IDw9PiBldmVudF9uZXh0P2V2ZW50IG51bGwKCWV2ZW50X2NhdGNoP3ZhbCA8PT4gZXZlbnRfbmV4dD92YWwgbnVsbAo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/both.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfYm90aCBleHRlbmRzICRtb2xfdmlldyB7CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB3cml0YWJsZT92YWwgPD0+IHdyaXRhYmxlX293bmVyP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCXdyaXRhYmxlKHZhbD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy53cml0YWJsZV9vd25lcih2YWwpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogd3JpdGFibGVfZGVmYXVsdD92YWwgPD0+IHdyaXRhYmxlX2RlZmF1bHRfb3duZXI/dmFsCgkJICogYGBgCgkJICovCgkJd3JpdGFibGVfZGVmYXVsdCh2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMud3JpdGFibGVfZGVmYXVsdF9vd25lcih2YWwpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3M/dmFsIDw9PiBjbGFzc19vd25lcj92YWwKCQkgKiBgYGAKCQkgKi8KCQljbGFzcyh2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuY2xhc3Nfb3duZXIodmFsKQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWQha2V5P3ZhbCA8PT4gaW5kZXhlZF9vd25lciFrZXk/dmFsCgkJICogYGBgCgkJICovCgkJaW5kZXhlZChrZXk6IGFueSwgdmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLmluZGV4ZWRfb3duZXIoa2V5LCB2YWwpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogdHdpY2UgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCXR3aWNlKCkgewoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc19pbmRleGVkIWtleT92YWwgJG1vbF92aWV3IGV4cGFuZGVkIDw9PiBjZWxsX2V4cGFuZGVkIWtleT92YWwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtX2tleQoJCWNsYXNzX2luZGV4ZWQoa2V5OiBhbnksIHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgoJCQlvYmouZXhwYW5kZWQgPSAoKSA9PiB0aGlzLmNlbGxfZXhwYW5kZWQoa2V5LCB2YWwpCgoJCQlyZXR1cm4gb2JqCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3Nfd3JpdGFibGU/dmFsIDw9PiBjbGFzc193cml0YWJsZV9vd25lcj92YWwKCQkgKiBgYGAKCQkgKi8KCQljbGFzc193cml0YWJsZSh2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuY2xhc3Nfd3JpdGFibGVfb3duZXIodmFsKQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGFyciAvCgkJICogCSogbG9jP3YgPD0+IGxvY19vdXRlcj92CgkJICogCSogbG9jP3YgPD0+IGxvY19vdXRlcj92CgkJICogYGBgCgkJICovCgkJYXJyKCkgewoJCQlyZXR1cm4gWwoJCQkJewoJCQkJCWxvYzogKHY/OiBhbnkpID0+IHRoaXMubG9jX291dGVyKHYpCgkJCQl9LAoJCQkJewoJCQkJCWxvYzogKHY/OiBhbnkpID0+IHRoaXMubG9jX291dGVyKHYpCgkJCQl9CgkJCV0gYXMgcmVhZG9ubHkgYW55W10KCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzd2lwZV90b19sZWZ0P2V2ZW50IDw9PiBldmVudF9uZXh0P2V2ZW50CgkJICogYGBgCgkJICovCgkJc3dpcGVfdG9fbGVmdChldmVudD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5ldmVudF9uZXh0KGV2ZW50KQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGV2ZW50X2NhdGNoP3ZhbCA8PT4gZXZlbnRfbmV4dD92YWwKCQkgKiBgYGAKCQkgKi8KCQlldmVudF9jYXRjaCh2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuZXZlbnRfbmV4dCh2YWwpCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogd3JpdGFibGVfZGVmYXVsdF9vd25lcj92YWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQl3cml0YWJsZV9kZWZhdWx0X293bmVyKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc19vd25lcj92YWwgJG1vbF92aWV3CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWNsYXNzX293bmVyKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgoJCQlyZXR1cm4gb2JqCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZF9vd25lciFrZXk/dmFsIG51bGwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtX2tleQoJCWluZGV4ZWRfb3duZXIoa2V5OiBhbnksIHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBsb2NhbGl6ZWRfb3duZXI/dmFsIEAgXHNvbWUxCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWxvY2FsaXplZF9vd25lcih2YWw/OiBhbnkpIHsKCQkJaWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHJldHVybiB2YWwKCQkJcmV0dXJuIHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9ib3RoX2xvY2FsaXplZF9vd25lcicgKQoJCX0KCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNoYWluMj92IG51bGwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJY2hhaW4yKHY/OiBhbnkpIHsKCQkJaWYgKCB2ICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdgoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjaGFpbjE/diA8PT4gY2hhaW4yP3YKCQkgKiBgYGAKCQkgKi8KCQljaGFpbjEodj86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5jaGFpbjIodikKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc193cml0YWJsZV9vd25lcj92YWwgJG1vbF92aWV3CgkJICogCXNvbWU/dmFsIDw9PiB0d2ljZT92YWwKCQkgKiAJbG9jYWxpemVkP3ZhbCA8PT4gbG9jYWxpemVkX293bmVyP3ZhbAoJCSAqIAljaGFpbj92IDw9PiBjaGFpbjE/dgoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQljbGFzc193cml0YWJsZV9vd25lcih2YWw/OiBhbnkpIHsKCQkJaWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHJldHVybiB2YWwKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoKCQkJb2JqLnNvbWUgPSAodmFsPzogYW55KSA9PiB0aGlzLnR3aWNlKHZhbCkKCQkJb2JqLmxvY2FsaXplZCA9ICh2YWw/OiBhbnkpID0+IHRoaXMubG9jYWxpemVkX293bmVyKHZhbCkKCQkJb2JqLmNoYWluID0gKHY/OiBhbnkpID0+IHRoaXMuY2hhaW4xKHYpCgoJCQlyZXR1cm4gb2JqCgkJfQoKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbG9jX291dGVyP3YgQCBcdGVzdCBsb2NhbGl6ZQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlsb2Nfb3V0ZXIodj86IGFueSkgewoJCQlpZiAoIHYgIT09IHVuZGVmaW5lZCApIHJldHVybiB2CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfYm90aF9sb2Nfb3V0ZXInICkKCQl9CgoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBldmVudF9uZXh0P2V2ZW50IG51bGwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJZXZlbnRfbmV4dChldmVudD86IGFueSkgewoJCQlpZiAoIGV2ZW50ICE9PSB1bmRlZmluZWQgKSByZXR1cm4gZXZlbnQKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJfQoKfQo="

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        function text(uri) {
            return $_1.$mol_charset_decode($_1.$mol_base64_decode(uri.replace(/^.*,/, '')));
        }
        $_1.$mol_test({
            async 'localized - simple'($) {
                const view = text(require('/mol/view/tree2/ts/test/simple.view.tree.bin'));
                const ts = text(require('/mol/view/tree2/ts/test/simple.view.ts.bin'));
                const tree = $_1.$mol_tree2.fromString(view, $_1.$mol_span.entire('factory.view.tree', view.length));
                const res = $.$mol_view_tree2_ts_compile(tree);
                $_1.$mol_assert_equal(res.locales['$mol_view_tree2_ts_test_simple_localized'], 'localized value');
                $_1.$mol_assert_equal(res.script, ts);
            },
            async 'localized - factory'($) {
                const view = text(require('/mol/view/tree2/ts/test/factory.view.tree.bin'));
                const ts = text(require('/mol/view/tree2/ts/test/factory.view.ts.bin'));
                const tree = $_1.$mol_tree2.fromString(view, $_1.$mol_span.entire('factory.view.tree', view.length));
                const res = $.$mol_view_tree2_ts_compile(tree);
                $_1.$mol_assert_equal(res.locales['$mol_view_tree2_ts_test_factory_Simple_localized'], 'localized value');
                $_1.$mol_assert_equal(res.script, ts);
            },
            async 'compiled'($) {
                const samples = new Map([
                    [
                        '',
                        '',
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/simple.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/simple.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/factory.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/factory.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/array.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/array.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/dictionary.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/dictionary.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/multiple_class.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/multiple_class.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/bind/left.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/bind/left.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/bind/right.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/bind/right.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/bind/both.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/bind/both.view.ts.bin')),
                    ],
                ]);
                for (const [view, ts] of samples) {
                    const tree = $_1.$mol_tree2.fromString(view, $_1.$mol_span.entire('factory.view.tree', view.length));
                    const res = $.$mol_view_tree2_ts_compile(tree);
                    $_1.$mol_assert_equal(res.script, ts);
                }
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//ts.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Attach to document'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            $.$mol_jsx_attach(doc, () => $.$mol_jsx("body", { id: "/foo" }, "bar"));
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//attach.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_attach(next, action) {
        const prev = $.$mol_jsx_document;
        try {
            $.$mol_jsx_document = next;
            return action();
        }
        finally {
            $.$mol_jsx_document = prev;
        }
    }
    $.$mol_jsx_attach = $mol_jsx_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Class as component'() {
            class Foo extends $_1.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.title = '';
                }
                render() {
                    return $_1.$mol_jsx("div", null,
                        this.title,
                        " ",
                        this.childNodes.join('-'));
                }
            }
            const dom = $_1.$mol_jsx(Foo, { id: "/foo", title: "bar" },
                "xxx",
                123);
            $_1.$mol_assert_equal(dom.outerHTML, '<div id="/foo">bar xxx-123</div>');
        },
        'View by element'() {
            class Br extends $_1.$mol_jsx_view {
                render() {
                    view = this;
                    return $_1.$mol_jsx("br", { id: "/foo" });
                }
            }
            let view;
            $_1.$mol_assert_equal(Br.of($_1.$mol_jsx(Br, null)), view);
        },
        'Attached view rerender'() {
            const doc = $_1.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Title extends $_1.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.value = 'foo';
                }
                render() {
                    return $_1.$mol_jsx("div", null, this.value);
                }
            }
            const dom = $_1.$mol_jsx_attach(doc, () => $_1.$mol_jsx(Title, { id: "/foo" }));
            const title = Title.of(dom);
            $_1.$mol_assert_equal(title.ownerDocument, doc);
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            title.value = 'bar';
            title.valueOf();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
        async 'Reactive attached view'($) {
            const doc = $_1.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Task extends $_1.$mol_object2 {
                title(next) { return next || 'foo'; }
            }
            __decorate([
                $_1.$mol_mem
            ], Task.prototype, "title", null);
            class App extends $_1.$mol_jsx_view {
                task() { return new Task; }
                valueOf() {
                    return super.valueOf();
                }
                render() {
                    return $_1.$mol_jsx("div", null, this.task().title());
                }
            }
            __decorate([
                $_1.$mol_mem
            ], App.prototype, "task", null);
            __decorate([
                $_1.$mol_mem
            ], App.prototype, "valueOf", null);
            const task = new Task;
            task.$ = $;
            const autorun = $.$mol_atom2_autorun(() => $_1.$mol_jsx_attach(doc, () => $_1.$mol_jsx(App, { "$": $, id: "/foo", task: () => task })));
            autorun.$ = $;
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            task.title('bar');
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_jsx_view extends $.$mol_object2 {
        static of(node) {
            return node[this];
        }
        valueOf() {
            const prefix = $.$mol_jsx_prefix;
            const booked = $.$mol_jsx_booked;
            const document = $.$mol_jsx_document;
            try {
                $.$mol_jsx_prefix = this[Symbol.toStringTag];
                $.$mol_jsx_booked = new Set;
                $.$mol_jsx_document = this.ownerDocument;
                return this.render();
            }
            finally {
                $.$mol_jsx_prefix = prefix;
                $.$mol_jsx_booked = booked;
                $.$mol_jsx_document = document;
            }
        }
        render() {
            return $.$mol_fail(new Error('dom_tree() not implemented'));
        }
    }
    $.$mol_jsx_view = $mol_jsx_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//equals.test.js.map
;
"use strict";
//equals.js.map

//# sourceMappingURL=web.test.js.map
