"use strict";
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
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            const res = test(context);
            if ($mol_promise_like(res)) {
                await new Promise((done, fail) => {
                    res.then(done, fail);
                    setTimeout(() => fail(new Error('Test timeout: ' + test.name)), 1000);
                });
            }
        }
        $$.$mol_log3_done({
            place: '$mol_test',
            message: 'All tests passed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(async () => {
            scheduled = false;
            await $mol_test_run();
            $$.$mol_test_complete();
        }, 1000);
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
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
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
//mol/test/test.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_test_complete() {
    }
    $.$mol_test_complete = $mol_test_complete;
})($ || ($ = {}));
//mol/test/test.web.test.ts
;
"use strict";
//mol/type/assert/assert.ts
;
"use strict";
//mol/type/assert/assert.test.ts
;
"use strict";
//mol/type/partial/deep/deep.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Make empty div'() {
            $mol_assert_equal(($mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $mol_jsx("input", { value: '123' });
            $mol_assert_equal(dom.outerHTML, '<input value="123">');
            $mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $mol_jsx("div", { class: 'foo bar' });
            $mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $mol_jsx("div", { style: { color: 'red' } });
            $mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $mol_jsx("div", { dataset: { foo: 'bar' } });
            $mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $mol_jsx("div", { lang: "ru", hidden: true });
            $mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $mol_jsx("div", null,
                "hello",
                $mol_jsx("strong", null, "world"),
                "!");
            $mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = (props, target) => {
                return $mol_jsx("button", { title: props.hint }, target());
            };
            const dom = $mol_jsx(Button, { id: "foo", hint: "click me" }, () => 'hey!');
            $mol_assert_equal(dom.outerHTML, '<button id="foo" title="click me" class="Button">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "bar" },
                        $mol_jsx("img", { id: "icon" })));
            };
            const Bar = (props, icon) => {
                return $mol_jsx("span", null,
                    icon,
                    $mol_jsx("i", { id: "label" }));
            };
            const dom = $mol_jsx(Foo, { id: "foo" });
            $mol_assert_equal(dom.outerHTML, '<div id="foo" class="Foo"><span id="foo/bar" class="Foo_bar Bar"><img id="foo/icon" class="Foo_icon"><i id="foo/bar/label" class="Foo_bar_label Bar_label"></i></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("span", { id: "bar" }),
                    $mol_jsx("span", { id: "bar" }));
            };
            $mol_assert_fail(() => $mol_jsx(App, { id: "foo" }), 'JSX already has tag with id "foo/bar"');
        },
        'Owner based guid generationn'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "middle", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            const dom = $mol_jsx(Foo, { id: "app" });
            $mol_assert_equal(dom.outerHTML, '<div id="app" class="Foo"><span id="app/middle" class="Foo_middle Bar"><img id="app/icon" class="Foo_icon"></span></div>');
        },
        'Fail on same ids from different caller'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("img", { id: "icon" }),
                    $mol_jsx(Bar, { id: "bar", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            $mol_assert_fail(() => $mol_jsx(Foo, { id: "foo" }), 'JSX already has tag with id "foo/icon"');
        },
    });
})($ || ($ = {}));
//mol/jsx/jsx.test.tsx
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'nulls & undefineds'() {
            $mol_assert_ok($mol_compare_deep(null, null));
            $mol_assert_ok($mol_compare_deep(undefined, undefined));
            $mol_assert_not($mol_compare_deep(undefined, null));
            $mol_assert_not($mol_compare_deep({}, null));
        },
        'number'() {
            $mol_assert_ok($mol_compare_deep(1, 1));
            $mol_assert_ok($mol_compare_deep(Number.NaN, Number.NaN));
            $mol_assert_not($mol_compare_deep(1, 2));
            $mol_assert_ok($mol_compare_deep(Object(1), Object(1)));
            $mol_assert_not($mol_compare_deep(Object(1), Object(2)));
        },
        'POJO'() {
            $mol_assert_ok($mol_compare_deep({}, {}));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { b: 2 }));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { a: 2 }));
            $mol_assert_not($mol_compare_deep({}, { a: undefined }));
            $mol_assert_not($mol_compare_deep({ a: 1, b: 2 }, { b: 2, a: 1 }));
            $mol_assert_ok($mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
            $mol_assert_ok($mol_compare_deep(Object.create(null), Object.create(null)));
        },
        'Array'() {
            $mol_assert_ok($mol_compare_deep([], []));
            $mol_assert_ok($mol_compare_deep([1, [2]], [1, [2]]));
            $mol_assert_not($mol_compare_deep([1, 2], [1, 3]));
            $mol_assert_not($mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'Non POJO are different'() {
            class Thing extends Object {
            }
            $mol_assert_not($mol_compare_deep(new Thing, new Thing));
            $mol_assert_not($mol_compare_deep(() => 1, () => 1));
            $mol_assert_not($mol_compare_deep(new RangeError('Test error'), new RangeError('Test error')));
        },
        'POJO with symbols'() {
            const sym = Symbol();
            $mol_assert_ok($mol_compare_deep({ [sym]: true }, { [sym]: true }));
            $mol_assert_not($mol_compare_deep({ [Symbol()]: true }, { [Symbol()]: true }));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $mol_assert_ok($mol_compare_deep(a, b));
        },
        'Date'() {
            $mol_assert_ok($mol_compare_deep(new Date(12345), new Date(12345)));
            $mol_assert_not($mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $mol_assert_ok($mol_compare_deep(/\x22/mig, /\x22/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x21/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Error'() {
            $mol_assert_not($mol_compare_deep(new Error('xxx'), new Error('xxx')));
            const fail = (message) => new Error(message);
            $mol_assert_ok($mol_compare_deep(...['xxx', 'xxx'].map(msg => new Error(msg))));
            $mol_assert_not($mol_compare_deep(...['xxx', 'yyy'].map(msg => new Error(msg))));
        },
        'Map'() {
            $mol_assert_ok($mol_compare_deep(new Map, new Map));
            $mol_assert_ok($mol_compare_deep(new Map([[1, [2]]]), new Map([[1, [2]]])));
            $mol_assert_ok($mol_compare_deep(new Map([[[1], 2]]), new Map([[[1], 2]])));
            $mol_assert_not($mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
            $mol_assert_not($mol_compare_deep(new Map([[[1], 2]]), new Map([[[3], 2]])));
        },
        'Set'() {
            $mol_assert_ok($mol_compare_deep(new Set, new Set));
            $mol_assert_ok($mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $mol_assert_not($mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $mol_assert_ok($mol_compare_deep(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Custom comparator'() {
            class User {
                name;
                rand;
                constructor(name, rand = Math.random()) {
                    this.name = name;
                    this.rand = rand;
                }
                [Symbol.toPrimitive](mode) {
                    return this.name;
                }
            }
            $mol_assert_ok($mol_compare_deep(new User('Jin'), new User('Jin')));
            $mol_assert_not($mol_compare_deep(new User('Jin'), new User('John')));
        },
    });
})($ || ($ = {}));
//mol/compare/deep/deep.test.tsx
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'must be false'() {
            $mol_assert_not(0);
        },
        'must be true'() {
            $mol_assert_ok(1);
        },
        'two must be equal'() {
            $mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//mol/assert/assert.test.ts
;
"use strict";
//mol/type/equals/equals.test.ts
;
"use strict";
//mol/type/keys/extract/extract.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));
//mol/log3/log3.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $mol_assert_equal($$.$mol_func_name_test.name, '');
            $mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//mol/func/name/name.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'get'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $mol_delegate({}, () => target);
            proxy.foo = 123;
            $mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
    });
})($ || ($ = {}));
//mol/delegate/delegate.test.ts
;
"use strict";
//mol/type/writable/writable.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'init with overload'() {
            class X extends $mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//mol/object/object.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Collect deps'() {
            const pub1 = new $mol_wire_pub;
            const pub2 = new $mol_wire_pub;
            const sub = new $mol_wire_pub_sub;
            const bu1 = sub.track_on();
            try {
                pub1.promote();
                pub2.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu1);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub2, pub2]);
            const bu2 = sub.track_on();
            try {
                pub1.promote();
                pub1.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu2);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub1, pub2]);
        },
        'cyclic detection'($) {
            const sub1 = new $mol_wire_pub_sub;
            const sub2 = new $mol_wire_pub_sub;
            const bu1 = sub1.track_on();
            try {
                const bu2 = sub2.track_on();
                try {
                    $mol_assert_fail(() => sub1.promote(), 'Circular subscription');
                }
                finally {
                    sub2.track_cut();
                    sub2.track_off(bu2);
                }
            }
            finally {
                sub1.track_cut();
                sub1.track_off(bu1);
            }
        },
    });
})($ || ($ = {}));
//mol/wire/pub/sub/sub.test.ts
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
    class $mol_after_mock_commmon extends $mol_object2 {
        task;
        promise = Promise.resolve();
        cancelled = false;
        id;
        constructor(task) {
            super();
            this.task = task;
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
        delay;
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mol/after/mock/mock.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_frame = $mol_after_mock_commmon;
    });
})($ || ($ = {}));
//mol/after/frame/frame.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Sync execution'() {
            class Sync extends $mol_object2 {
                static calc(a, b) {
                    return a + b;
                }
            }
            __decorate([
                $mol_wire_method
            ], Sync, "calc", null);
            $mol_assert_equal(Sync.calc(1, 2), 3);
        },
        async 'async <=> sync'() {
            class SyncAsync extends $mol_object2 {
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            $mol_assert_equal(await SyncAsync.calc(1, 2), 8);
        },
        async 'Idempotence control'() {
            class Idempotence extends $mol_object2 {
                static logs_idemp = 0;
                static logs_unidemp = 0;
                static log_idemp() {
                    this.logs_idemp += 1;
                }
                static log_unidemp() {
                    this.logs_unidemp += 1;
                }
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    this.log_idemp();
                    this.log_unidemp();
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            __decorate([
                $mol_wire_method
            ], Idempotence, "log_idemp", null);
            $mol_assert_equal(await Idempotence.calc(1, 2), 8);
            $mol_assert_equal(Idempotence.logs_idemp, 1);
            $mol_assert_equal(Idempotence.logs_unidemp, 3);
        },
        async 'Error handling'() {
            class Handle extends $mol_object2 {
                static async sum(a, b) {
                    $mol_fail(new Error('test error ' + (a + b)));
                }
                static check() {
                    try {
                        return $mol_wire_sync(Handle).sum(1, 2);
                    }
                    catch (error) {
                        if ($mol_promise_like(error))
                            $mol_fail_hidden(error);
                        $mol_assert_equal(error.message, 'test error 3');
                    }
                }
            }
            await $mol_wire_async(Handle).check();
        },
    });
})($ || ($ = {}));
//mol/wire/fiber/fiber.test.ts
;
"use strict";
//mol/type/tail/tail.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_timeout = $mol_after_mock_timeout;
    });
})($ || ($ = {}));
//mol/after/timeout/timeout.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        async 'Latest method calls wins'($) {
            class NameLogger extends $mol_object2 {
                static $ = $;
                static first = [];
                static last = [];
                static send(next) {
                    $mol_wire_sync(this.first).push(next);
                    this.$.$mol_wait_timeout(0);
                    this.last.push(next);
                }
            }
            const name = $mol_wire_async(NameLogger).send;
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_like(NameLogger.first, ['john', 'jin']);
            $mol_assert_like(NameLogger.last, ['jin']);
        },
        async 'Latest function calls wins'($) {
            const first = [];
            const last = [];
            function send_name(next) {
                $mol_wire_sync(first).push(next);
                $.$mol_wait_timeout(0);
                last.push(next);
            }
            const name = $mol_wire_async(send_name);
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_like(first, ['john', 'jin']);
            $mol_assert_like(last, ['jin']);
        },
    });
})($ || ($ = {}));
//mol/wire/async/async.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Cached channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 2);
            App.value(2);
            $mol_assert_equal(App.value(), 3);
        },
        'Read Pushed'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 0) {
                    return next;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(1), 1);
            $mol_assert_equal(App.value(), 1);
        },
        'Mem overrides mem'($) {
            class Base extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Base, "value", null);
            class Middle extends Base {
                static value(next) {
                    return super.value(next) + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Middle, "value", null);
            class App extends Middle {
                static value(next) {
                    return super.value(next) * 3;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 9);
            $mol_assert_equal(App.value(5), 21);
            $mol_assert_equal(App.value(), 21);
        },
        'Auto recalculation of cached values'($) {
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    return next || 1;
                }
                static yyy() {
                    return this.xxx() + 1;
                }
                static zzz() {
                    return this.yyy() + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            $mol_assert_equal(App.yyy(), 2);
            $mol_assert_equal(App.zzz(), 3);
            App.xxx(5);
            $mol_assert_equal(App.zzz(), 7);
        },
        'Skip recalculation when actually no dependency changes'($) {
            const log = [];
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    log.push('xxx');
                    return next || 1;
                }
                static yyy() {
                    log.push('yyy');
                    return [Math.sign(this.xxx())];
                }
                static zzz() {
                    log.push('zzz');
                    return this.yyy()[0] + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx']);
            App.xxx(5);
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx']);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx', 'yyy']);
        },
        'Flow: Auto'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static source(next = 1) { return next; }
                static condition(next = true) { return next; }
                static counter = 0;
                static result() {
                    const res = this.condition() ? this.source() : 0;
                    return res + this.counter++;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "source", null);
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            $mol_assert_equal(App.counter, 1);
            App.source(10);
            $mol_assert_equal(App.result(), 11);
            $mol_assert_equal(App.counter, 2);
            App.condition(false);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            $mol_wire_fiber.sync();
            $mol_assert_equal(App.source(), 1);
            App.source(20);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            App.condition(true);
            $mol_assert_equal(App.result(), 23);
            $mol_assert_equal(App.counter, 4);
        },
        'Dupes: Equality'($) {
            let counter = 0;
            class App extends $mol_object2 {
                static $ = $;
                static foo(next) {
                    return next ?? { numbs: [1] };
                }
                static bar() {
                    return { ...this.foo(), count: ++counter };
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [1] });
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [2] });
            $mol_assert_like(App.bar(), { numbs: [2], count: 2 });
        },
        'Cycle: Fail'($) {
            class App extends $mol_object2 {
                static $ = $;
                static foo() {
                    return this.bar() + 1;
                }
                static bar() {
                    return this.foo() + 1;
                }
                static test() {
                    $mol_assert_fail(() => App.foo(), 'Circular subscription');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            App.test();
        },
        'Different order of pull and push'($) {
            class App extends $mol_object2 {
                static $ = $;
                static store(next = 0) {
                    return next;
                }
                static fast(next) {
                    return this.store(next);
                }
                static slow(next) {
                    if (next !== undefined)
                        this.slow();
                    return this.store(next);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "store", null);
            __decorate([
                $mol_wire_solo
            ], App, "fast", null);
            __decorate([
                $mol_wire_solo
            ], App, "slow", null);
            App.fast();
            $mol_assert_equal(App.slow(666), 666);
            $mol_assert_equal(App.fast(), App.slow(), 666);
            App.store(777);
            $mol_assert_equal(App.fast(), App.slow(), 777);
        },
        'Actions inside invariant'($) {
            class App extends $mol_object2 {
                static $ = $;
                static count(next = 0) {
                    return next;
                }
                static count2() {
                    return this.count();
                }
                static res() {
                    const count = this.count2();
                    if (!count)
                        this.count(count + 1);
                    return count + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "count", null);
            __decorate([
                $mol_wire_solo
            ], App, "count2", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            $mol_assert_like(App.res(), 1);
            App.count(5);
            $mol_assert_like(App.res(), 6);
        },
        async 'Toggle with async'($) {
            class App extends $mol_object2 {
                static $ = $;
                static checked(next = false) {
                    $$.$mol_wait_timeout(0);
                    return next;
                }
                static toggle() {
                    const prev = this.checked();
                    $mol_assert_unique(this.checked(!prev), prev);
                }
                static res() {
                    return this.checked();
                }
                static test() {
                    $mol_assert_equal(App.res(), false);
                    App.toggle();
                    $mol_assert_equal(App.res(), true);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "checked", null);
            __decorate([
                $mol_wire_method
            ], App, "toggle", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Restore after error'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static condition(next = false) { return next; }
                static broken() {
                    if (this.condition()) {
                        $mol_fail(new Error('test error'));
                    }
                    return 1;
                }
                static result() {
                    return this.broken();
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "broken", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            App.condition(true);
            $mol_assert_fail(() => App.result());
            App.condition(false);
            $mol_assert_equal(App.result(), 1);
        },
        async 'Wait for data'($) {
            class App extends $mol_object2 {
                static $ = $;
                static async source() {
                    return 'Jin';
                }
                static middle() {
                    return $mol_wire_sync(this).source();
                }
                static target() {
                    return this.middle();
                }
                static test() {
                    $mol_assert_equal(App.target(), 'Jin');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "middle", null);
            __decorate([
                $mol_wire_solo
            ], App, "target", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Auto destroy on long alone'($) {
            let destroyed = false;
            class App extends $mol_object2 {
                static $ = $;
                static showing(next = true) {
                    return next;
                }
                static details() {
                    return {
                        destructor() {
                            destroyed = true;
                        }
                    };
                }
                static render() {
                    return this.showing() ? this.details() : null;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "showing", null);
            __decorate([
                $mol_wire_solo
            ], App, "details", null);
            __decorate([
                $mol_wire_solo
            ], App, "render", null);
            const details = App.render();
            $mol_assert_ok(details);
            App.showing(false);
            $mol_assert_not(App.render());
            App.showing(true);
            $mol_assert_equal(App.render(), details);
            $mol_wire_fiber.sync();
            $mol_assert_not(destroyed);
            App.showing(false);
            $mol_wire_fiber.sync();
            $mol_assert_ok(destroyed);
            App.showing(true);
            $mol_assert_unique(App.render(), details);
        },
        async 'Hold pubs while wait async task'($) {
            class App extends $mol_object2 {
                static $ = $;
                static counter = 0;
                static resets(next) {
                    return ($mol_wire_probe(() => this.resets()) ?? -1) + 1;
                }
                static async wait() { }
                static value() {
                    return ++this.counter;
                }
                static result() {
                    if (this.resets())
                        $mol_wire_sync(this).wait();
                    return this.value();
                }
                static test() {
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "resets", null);
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            $mol_assert_equal(App.result(), 1);
            App.resets(null);
            $mol_wire_fiber.sync();
            $mol_assert_equal(await $mol_wire_async(App).result(), 1);
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static title() {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "title", null);
            $mol_assert_equal(`${App.title()}`, 'App.title()');
        },
        'Unsubscribe from temp pubs on complete'($) {
            class Random extends $mol_object2 {
                static $ = $;
                static seed() {
                    return Math.random();
                }
                static resets(next) {
                    return Math.random();
                }
                static value() {
                    this.resets();
                    return this.seed();
                }
            }
            __decorate([
                $mol_wire_method
            ], Random, "seed", null);
            __decorate([
                $mol_wire_solo
            ], Random, "resets", null);
            __decorate([
                $mol_wire_solo
            ], Random, "value", null);
            const first = Random.value();
            Random.resets(null);
            $mol_assert_unique(Random.value(), first);
        },
    });
})($ || ($ = {}));
//mol/wire/solo/solo.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Memoize by single simple key'($) {
            class Team extends $mol_object2 {
                static $ = $;
                static user_name(user, next) {
                    return next ?? user;
                }
                static user_names() {
                    return [
                        this.user_name('jin'),
                        this.user_name('john'),
                    ];
                }
            }
            __decorate([
                $mol_wire_plex
            ], Team, "user_name", null);
            __decorate([
                $mol_wire_solo
            ], Team, "user_names", null);
            $mol_assert_like(Team.user_names(), ['jin', 'john']);
            Team.user_name('jin', 'JIN');
            $mol_assert_like(Team.user_names(), ['JIN', 'john']);
        },
        'Memoize by single complex key'($) {
            class Map extends $mol_object2 {
                static $ = $;
                static tile(pos) {
                    return new String(`/tile=${pos}`);
                }
                static test() {
                    $mol_assert_like(this.tile([0, 1]), new String('/tile=0,1'));
                    $mol_assert_equal(this.tile([0, 1]), this.tile([0, 1]));
                }
            }
            __decorate([
                $mol_wire_plex
            ], Map, "tile", null);
            __decorate([
                $mol_wire_method
            ], Map, "test", null);
            Map.test();
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static like(friend) {
                    return new $mol_object2;
                }
                static relation([friend, props]) {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_plex
            ], App, "like", null);
            __decorate([
                $mol_wire_plex
            ], App, "relation", null);
            $mol_assert_equal(`${App.like(123)}`, 'App.like(123)');
            $mol_assert_equal(`${App.relation([123, [456]])}`, 'App.relation([123,[456]])');
        },
        'Deep deps'($) {
            class Fib extends $mol_object2 {
                static $ = $;
                static sums = 0;
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    ++this.sums;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            __decorate([
                $mol_wire_plex
            ], Fib, "value", null);
            $mol_assert_equal(Fib.value(4), 5);
            $mol_assert_equal(Fib.sums, 3);
            Fib.value(1, 2);
            $mol_assert_equal(Fib.value(4), 8);
            $mol_assert_equal(Fib.sums, 6);
        },
    });
})($ || ($ = {}));
//mol/wire/plex/plex.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Previous value'() {
            class Cache extends $mol_object2 {
                static store(next) {
                    if (!next)
                        return {};
                    return {
                        ...$mol_wire_probe(() => this.store()) ?? {},
                        ...next,
                    };
                }
            }
            __decorate([
                $mol_wire_solo
            ], Cache, "store", null);
            $mol_assert_like(Cache.store(), {});
            $mol_assert_like(Cache.store({ foo: 666 }), { foo: 666 });
            $mol_assert_like(Cache.store({ bar: 777 }), { foo: 666, bar: 777 });
        },
    });
})($ || ($ = {}));
//mol/wire/probe/probe.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_tick = $mol_after_mock_commmon;
    });
})($ || ($ = {}));
//mol/after/tick/tick.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'all cases of using maybe'() {
            $mol_assert_equal($mol_maybe(0)[0], 0);
            $mol_assert_equal($mol_maybe(false)[0], false);
            $mol_assert_equal($mol_maybe(null)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $mol_assert_equal($mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//mol/maybe/maybe.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'run callback'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $mol_wrapper {
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
            $mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $mol_wrapper {
                static last = 0;
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Plus1.last, 2);
            $mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                level = 2;
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static level = 2;
                static pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                bar;
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//mol/wrapper/wrapper.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'memoize field'() {
            class Foo {
                static one = 1;
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            __decorate([
                $mol_memo.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Foo.two, 3);
            $mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));
//mol/memo/memo.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Primitives'() {
            $mol_assert_equal($mol_key(null), 'null');
            $mol_assert_equal($mol_key(false), 'false');
            $mol_assert_equal($mol_key(true), 'true');
            $mol_assert_equal($mol_key(0), '0');
            $mol_assert_equal($mol_key(''), '""');
        },
        'Array & POJO'() {
            $mol_assert_equal($mol_key([null]), '[null]');
            $mol_assert_equal($mol_key({ foo: 0 }), '{"foo":0}');
            $mol_assert_equal($mol_key({ foo: [false] }), '{"foo":[false]}');
        },
        'Function'() {
            const func = () => { };
            $mol_assert_equal($mol_key(func), $mol_key(func));
            $mol_assert_unique($mol_key(func), $mol_key(() => { }));
        },
        'Objects'() {
            class User {
            }
            const jin = new User();
            $mol_assert_equal($mol_key(jin), $mol_key(jin));
            $mol_assert_unique($mol_key(jin), $mol_key(new User()));
        },
        'Elements'() {
            const foo = $mol_jsx("div", null, "bar");
            $mol_assert_equal($mol_key(foo), $mol_key(foo));
            $mol_assert_unique($mol_key(foo), $mol_key($mol_jsx("div", null, "bar")));
        },
        'Custom JSON representation'() {
            class User {
                name;
                age;
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                toJSON() { return { name: this.name }; }
            }
            $mol_assert_equal($mol_key(new User('jin', 18)), '{"name":"jin"}');
        },
        'Special native classes'() {
            $mol_assert_equal($mol_key(new Date('xyz')), 'null');
            $mol_assert_equal($mol_key(new Date('2001-01-02T03:04:05.678Z')), '"2001-01-02T03:04:05.678Z"');
            $mol_assert_equal($mol_key(/./), '"/./"');
            $mol_assert_equal($mol_key(/\./gimsu), '"/\\\\./gimsu"');
        },
    });
})($ || ($ = {}));
//mol/key/key.test.tsx
;
"use strict";
//mol/type/foot/foot.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_wire_log.active();
})($ || ($ = {}));
//mol/wire/atom/atom.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'const returns stored value'() {
            const foo = { bar: $mol_const(Math.random()) };
            $mol_assert_equal(foo.bar(), foo.bar());
            $mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//mol/const/const.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                static $ = $;
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $mol_view {
            };
            x.$ = $;
            $mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $mol_view {
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
            $mol_assert_equal(node.getAttribute('href'), '#haha');
            $mol_assert_equal(node.getAttribute('required'), 'true');
            $mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $mol_view {
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
            $mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//mol/view/view/view.test.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/simple.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/binding.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return {
                ...super.some(),
                a: 1
            };
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/attributes.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $mol_view {
        Page(id) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(id);
            return obj;
        }
        page(id) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/subcomponent.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/binding_right.test.view.tree.ts
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'simple props'($) {
                const app = $mol_view_tree_test_simple.make({ $ });
                $mol_assert_equal(app.some(), 1);
                $mol_assert_equal(app.bool(), true);
                $mol_assert_equal(app.str(), 'test');
                $mol_assert_ok(Array.isArray(app.arr()));
                $mol_assert_ok(Array.isArray(app.arr_string()));
            },
            'default value'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_equal(app.value(), '123');
            },
            'both binding'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_ok(app.value() !== '1');
                app.value('1');
                $mol_assert_equal(app.value(), '1');
            },
            'left binding'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_not(app.head_complete_enabled());
                $mol_assert_not(app.enabled());
            },
            'sub component'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                $mol_assert_ok(app.Test() instanceof $mol_view_tree_test_binding_right_test);
            },
            'right binding - change owner property'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $mol_assert_ok(app.outer_width() !== val);
                $mol_assert_ok(app.Test().width() !== val);
                app.outer_width(val);
                $mol_assert_equal(app.outer_width(), val);
                $mol_assert_equal(app.Test().width(), val);
            },
            'right binding - change part property'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $mol_assert_ok(app.outer_width() !== val);
                $mol_assert_ok(app.Test().width() !== val);
                app.Test().width(val);
                $mol_assert_equal(app.Test().width(), val);
                $mol_assert_equal(app.outer_width(), val);
            },
            'attributes merging'($) {
                const app = $mol_view_tree_test_attributes.make({ $ });
                $mol_assert_like(app.some(), { a: 1, b: 2 });
            },
            'subcomponent indexed'($) {
                const app = $mol_view_tree_test_attributes_subcomponent.make({ $ });
                const val = 123;
                app.page = (index) => index;
                $mol_assert_equal(app.Page(val).Sub(), val);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/view/tree/test/tree.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $mol_object2 {
        type;
        data;
        sub;
        baseUri;
        row;
        col;
        length;
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//mol/tree/tree.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'tree parsing'() {
            $mol_assert_equal($mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $mol_assert_equal($mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $mol_assert_equal($mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $mol_assert_equal($mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $mol_assert_equal($mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $mol_assert_equal($mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $mol_assert_equal($mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $mol_assert_equal($mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'inserting'() {
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, 'a', 'b', 'c').toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, 'a', 'b', 'c', 'd').toString(), 'a b c \\\n');
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, 0, 0, 0).toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, 0, 0, 0, 0).toString(), 'a b \\\n\t\\\n');
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, null, null, null).toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, null, null, null, null).toString(), 'a b \\\n\t\\\n');
        },
        'fromJSON'() {
            $mol_assert_equal($mol_tree.fromJSON([]).toString(), '/\n');
            $mol_assert_equal($mol_tree.fromJSON([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree.fromJSON([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree.fromJSON(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree.fromJSON({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
        'toJSON'() {
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n').sub[0]), '[]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\tfalse\n\ttrue\n').sub[0]), '[false,true]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\t0\n\t1\n\t2.3\n').sub[0]), '[0,1,2.3]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n').sub[0]), '["","foo","bar\\nbaz"]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n').sub[0]), '{"foo":false,"bar\\nbaz":"lol"}');
        },
        'hack'() {
            const res = $mol_tree.fromString(`foo bar xxx`).hack({
                '': (tree, context) => [tree.hack(context)],
                'bar': (tree, context) => [tree.hack(context).clone({ type: '777' })],
            });
            $mol_assert_equal(res.toString(), new $mol_tree({ type: 'foo 777 xxx' }).toString());
        },
        'errors handling'($) {
            const errors = [];
            class Tree extends $mol_tree {
                static $ = $.$mol_ambient({
                    $mol_fail: error => errors.push(error.message)
                });
            }
            Tree.fromString(`
				\t \tfoo
				bar \\data
			`, 'test');
            $mol_assert_like(errors, ['Syntax error at test:2\n \tfoo']);
        },
    });
})($ || ($ = {}));
//mol/tree/tree.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $mol_assert_equal($mol_state_local.value(key), null);
            $mol_state_local.value(key, 123);
            $mol_assert_equal($mol_state_local.value(key), 123);
            $mol_state_local.value(key, null);
            $mol_assert_equal($mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//mol/state/local/local.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $mol_state_local {
            static state = {};
            static value(key, next = this.state[key]) {
                return this.state[key] = (next || null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//mol/state/local/local.mock.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_equal($mol_charset_decode(encoded), str);
            $mol_assert_equal($mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $mol_assert_equal($mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));
//mol/charset/decode/decode.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'encode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_like($mol_charset_encode(str), encoded);
        },
    });
})($ || ($ = {}));
//mol/charset/encode/encode.test.ts
;
"use strict";
//mol/type/merge/merge.test.ts
;
"use strict";
//mol/type/partial/undefined/undefined.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'config by value'() {
            const N = $mol_data_setup((a) => a, 5);
            $mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));
//mol/data/setup/setup.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'equal paths'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $mol_diff_path([1, 2], [3, 4], [5, 6]);
            $mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//mol/diff/path/path.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//mol/data/number/number.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is number'() {
            $mol_data_number(0);
        },
        'Is not number'() {
            $mol_assert_fail(() => {
                $mol_data_number('x');
            }, 'x is not a number');
        },
        'Is object number'() {
            $mol_assert_fail(() => {
                $mol_data_number(new Number(''));
            }, '0 is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/number/number.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is string'() {
            $mol_data_string('');
        },
        'Is not string'() {
            $mol_assert_fail(() => {
                $mol_data_string(0);
            }, '0 is not a string');
        },
        'Is object string'() {
            $mol_assert_fail(() => {
                $mol_data_string(new String('x'));
            }, 'x is not a string');
        },
    });
})($ || ($ = {}));
//mol/data/string/string.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Fit to record'() {
            const User = $mol_data_record({ age: $mol_data_number });
            User({ age: 0 });
        },
        'Extends record'() {
            const User = $mol_data_record({ age: $mol_data_number });
            User({ age: 0, name: 'Jin' });
        },
        'Shrinks record'() {
            $mol_assert_fail(() => {
                const User = $mol_data_record({ age: $mol_data_number, name: $mol_data_string });
                User({ age: 0 });
            }, '["name"] undefined is not a string');
        },
        'Shrinks deep record'() {
            $mol_assert_fail(() => {
                const User = $mol_data_record({ wife: $mol_data_record({ age: $mol_data_number }) });
                User({ wife: {} });
            }, '["wife"] ["age"] undefined is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/record/record.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is empty array'() {
            $mol_data_array($mol_data_number)([]);
        },
        'Is array'() {
            $mol_data_array($mol_data_number)([1, 2]);
        },
        'Is not array'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_number)({ [0]: 1, length: 1, map: () => { } });
            }, '[object Object] is not an array');
        },
        'Has wrong item'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_number)([1, '1']);
            }, '[1] 1 is not a number');
        },
        'Has wrong deep item'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_array($mol_data_number))([[], [0, 0, false]]);
            }, '[1] [2] false is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/array/array.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $mol_locale_mock extends $mol_locale {
            lang(next = 'en') { return next; }
            static source(lang) {
                return {};
            }
        }
        __decorate([
            $mol_mem
        ], $mol_locale_mock.prototype, "lang", null);
        __decorate([
            $mol_mem_key
        ], $mol_locale_mock, "source", null);
        $.$mol_locale = $mol_locale_mock;
    });
})($ || ($ = {}));
//mol/locale/locale.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//mol/view/tree/tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $mol_view {
        Item() { return new $mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px, per } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: per(50),
                height: px(50),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { calc } = $mol_style_func;
            const { px, per } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: calc(`${per(100)} - ${px(1)}`),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5
                }
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n}\n');
        },
        'custom properties'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '--isVariable': 'yes',
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\t--is-variable: yes;\n}\n');
        },
        'custom property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '--variable': {
                    test: px(5)
                }
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\t--variable-test: 5px;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                padding: [px(5), 'auto']
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { url } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { rem } = $mol_style_unit;
            const { hsla } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
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
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                ':focus': {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:focus {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '::first-line': {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]::first-line {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@media': {
                    'print': {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '@media print {\n[mol_style_sheet_test] {\n\tcolor: red;\n\tdisplay: block;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            color: 'red',
                            display: 'block',
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                Item: {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                List: {
                    Item: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2_list_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
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
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) :where([mol_style_sheet_test_item]) {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                $mol_style_sheet_test1: {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] :where([mol_style_sheet_test1]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                '>': {
                    $mol_style_sheet_test1: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] > :where([mol_style_sheet_test1]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
    });
})($ || ($ = {}));
//mol/style/sheet/sheet.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push(context => {
        class $mol_state_arg_mock extends $mol_state_arg {
            static $ = context;
            static href(next) { return next || ''; }
        }
        __decorate([
            $mol_mem
        ], $mol_state_arg_mock, "href", null);
        context.$mol_state_arg = $mol_state_arg_mock;
    });
    $mol_test({
        'args as dictionary'($) {
            $.$mol_state_arg.href('#!foo=bar/xxx');
            $mol_assert_like($.$mol_state_arg.dict(), { foo: 'bar', xxx: '' });
            $.$mol_state_arg.dict({ foo: null, yyy: '', lol: '123' });
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!yyy/lol=123');
        },
        'one value from args'($) {
            $.$mol_state_arg.href('#!foo=bar/xxx');
            $mol_assert_equal($.$mol_state_arg.value('foo'), 'bar');
            $mol_assert_equal($.$mol_state_arg.value('xxx'), '');
            $.$mol_state_arg.value('foo', 'lol');
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!foo=lol/xxx');
            $.$mol_state_arg.value('foo', '');
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!foo/xxx');
            $.$mol_state_arg.value('foo', null);
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!xxx');
        },
        'nested args'($) {
            const base = new $.$mol_state_arg('nested.');
            class Nested extends $mol_state_arg {
                constructor(prefix) {
                    super(base.prefix + prefix);
                }
                static value = (key, next) => base.value(key, next);
            }
            $.$mol_state_arg.href('#!foo=bar/nested.xxx=123');
            $mol_assert_equal(Nested.value('foo'), null);
            $mol_assert_equal(Nested.value('xxx'), '123');
            Nested.value('foo', 'lol');
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!foo=bar/nested.xxx=123/nested.foo=lol');
        },
    });
})($ || ($ = {}));
//mol/state/arg/arg.web.test.ts
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_not(clicked);
            },
            'Store error'($) {
                const clicker = $mol_button.make({
                    $,
                    click: (event) => $.$mol_fail(new Error('Test error')),
                });
                const event = $mol_dom_context.document.createEvent('mouseevent');
                $mol_assert_fail(() => clicker.event_activate(event), 'Test error');
                $mol_assert_equal(clicker.status()[0].message, 'Test error');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/button/button.test.ts
;
"use strict";
//mol/type/intersect/intersect.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'escape'() {
            const specials = $mol_regexp.from('.*+?^${}()|[]\\');
            $mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $mol_regexp.from(32);
            $mol_assert_like(' '.match(space), [' ']);
        },
        'repeat fixed'() {
            const { repeat, decimal_only: digit } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            $mol_assert_like('#2020#'.match(year), ['2020']);
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, latin_only: letter } = $mol_regexp;
            $mol_assert_like('abc'.match(repeat(letter, 1, 2)), ['a', 'b', 'c']);
            $mol_assert_like('abc'.match(repeat_greedy(letter, 1, 2)), ['ab', 'c']);
        },
        'repeat range'() {
            const { repeat_greedy, decimal_only: digit } = $mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $mol_assert_like('#2#'.match(year), null);
            $mol_assert_like('#20#'.match(year), ['20']);
            $mol_assert_like('#2020#'.match(year), ['2020']);
            $mol_assert_like('#20201#'.match(year), ['2020']);
        },
        'repeat from'() {
            const { repeat_greedy, latin_only: letter } = $mol_regexp;
            const name = repeat_greedy(letter, 2);
            $mol_assert_like('##'.match(name), null);
            $mol_assert_like('#a#'.match(name), null);
            $mol_assert_like('#ab#'.match(name), ['ab']);
            $mol_assert_like('#abc#'.match(name), ['abc']);
        },
        'from string'() {
            const regexp = $mol_regexp.from('[\\d]');
            $mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $mol_assert_equal(regexp.flags, 'gsu');
        },
        'from regexp'() {
            const regexp = $mol_regexp.from(/[\d]/i);
            $mol_assert_equal(regexp.source, '[\\d]');
            $mol_assert_equal(regexp.flags, 'i');
        },
        'split'() {
            const regexp = $mol_regexp.from(';');
            $mol_assert_like('aaa;bbb;ccc'.split(regexp), ['aaa', ';', 'bbb', ';', 'ccc']);
            $mol_assert_like('aaa;;ccc'.split(regexp), ['aaa', ';', '', ';', 'ccc']);
            $mol_assert_like('aaa'.split(regexp), ['aaa']);
            $mol_assert_like(''.split(regexp), ['']);
        },
        'test for matching'() {
            const regexp = $mol_regexp.from('foo');
            $mol_assert_like(regexp.test(''), false);
            $mol_assert_like(regexp.test('fo'), false);
            $mol_assert_like(regexp.test('foo'), true);
            $mol_assert_like(regexp.test('foobar'), true);
            $mol_assert_like(regexp.test('barfoo'), true);
        },
        'case ignoring'() {
            const xxx = $mol_regexp.from('x', { ignoreCase: true });
            $mol_assert_like(xxx.flags, 'gisu');
            $mol_assert_like(xxx.exec('xx')[0], 'x');
            $mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end, from } = $mol_regexp;
            const xxx = from(['x', end], { multiline: true });
            $mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $mol_assert_like(xxx.flags, 'gmsu');
        },
        'flags override'() {
            const triplet = $mol_regexp.from($mol_regexp.from(/.../, { ignoreCase: true }), { multiline: true });
            $mol_assert_like(triplet.toString(), '/.../gmsu');
        },
        'sequence'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = from([begin, year, dash, month, dash, day, end]);
            $mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
        },
        'optional'() {
            const name = $mol_regexp.from(['A', ['4']]);
            $mol_assert_equal('AB'.match(name)[0], 'A');
            $mol_assert_equal('A4'.match(name)[0], 'A4');
        },
        'anon variants'() {
            const name = $mol_regexp.from(['A', $mol_regexp.vary(['4', '5'])]);
            $mol_assert_equal('AB'.match(name), null);
            $mol_assert_equal('A4'.match(name)[0], 'A4');
            $mol_assert_equal('A5'.match(name)[0], 'A5');
        },
        'only groups'() {
            const regexp = $mol_regexp.from({ dog: '@' });
            $mol_assert_like([...'#'.matchAll(regexp)][0].groups, undefined);
            $mol_assert_like([...'@'.matchAll(regexp)][0].groups, { dog: '@' });
        },
        'catch skipped'() {
            const regexp = $mol_regexp.from(/(@)(\d?)/g);
            $mol_assert_like([...'[[@]]'.matchAll(regexp)].map(f => [...f]), [
                ['[['],
                ['@', '@', ''],
                [']]'],
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from(Sex);
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'trans'.matchAll(sexism)][0].groups, undefined);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { male: '', female: 'female' });
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from({ Sex });
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { Sex: 'male', male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { Sex: 'female', male: '', female: 'female' });
        },
        'sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            $mol_assert_like([...'/foo/mi'.matchAll(regexp)], [
                Object.assign(["/foo/mi", "/", "foo", "/", "mi"], {
                    groups: {
                        prefix: '/',
                        postfix: '/',
                    },
                    index: 0,
                    input: "/",
                }),
            ]);
        },
        'recursive sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([
                begin, { date: [{ year }, dash, { month }] }, dash, { day }, end
            ]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                date: '2020-01',
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'parse multiple'() {
            const { decimal_only: digit, from } = $mol_regexp;
            const regexp = from({ digit });
            $mol_assert_like([...'123'.matchAll(regexp)].map(f => f.groups), [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'named variants'() {
            const { begin, or, end, from } = $mol_regexp;
            const sexism = from([
                begin, 'sex = ', { sex: ['male', or, 'female'] }, end
            ]);
            $mol_assert_like([...'sex = male'.matchAll(sexism)][0].groups, { sex: 'male' });
            $mol_assert_like([...'sex = female'.matchAll(sexism)][0].groups, { sex: 'female' });
            $mol_assert_like([...'sex = malefemale'.matchAll(sexism)][0].groups, undefined);
        },
        'force after'() {
            const { latin_only: letter, force_after, from } = $mol_regexp;
            const regexp = from([letter, force_after('.')]);
            $mol_assert_like('x.'.match(regexp), ['x']);
            $mol_assert_like('x,'.match(regexp), null);
        },
        'forbid after'() {
            const { latin_only: letter, forbid_after, from } = $mol_regexp;
            const regexp = from([letter, forbid_after('.')]);
            $mol_assert_like('x.'.match(regexp), null);
            $mol_assert_like('x,'.match(regexp), ['x']);
        },
        'char except'() {
            const { char_except, latin_only, tab } = $mol_regexp;
            const name = char_except(latin_only, tab);
            $mol_assert_like('a'.match(name), null);
            $mol_assert_like('\t'.match(name), null);
            $mol_assert_like('('.match(name), ['(']);
        },
        'unicode only'() {
            const { unicode_only, from } = $mol_regexp;
            const name = from([
                unicode_only('Script', 'Cyrillic'),
                unicode_only('Hex_Digit'),
            ]);
            $mol_assert_like('FF'.match(name), null);
            $mol_assert_like('ФG'.match(name), null);
            $mol_assert_like('ФF'.match(name), ['ФF']);
        },
        'generate by optional with inner group'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { dog: '@' }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: false }), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'generate by optional with inner group with variants'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { animal: { dog: '@', fox: '&' } }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_equal(animals.generate({ fox: true }), '#^&');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'complex example'() {
            const { begin, end, char_only, char_range, latin_only, slash_back, repeat_greedy, from, } = $mol_regexp;
            const atom_char = char_only(latin_only, "!#$%&'*+/=?^`{|}~-");
            const atom = repeat_greedy(atom_char, 1);
            const dot_atom = from([atom, repeat_greedy(['.', atom])]);
            const name_letter = char_only(char_range(0x01, 0x08), 0x0b, 0x0c, char_range(0x0e, 0x1f), 0x21, char_range(0x23, 0x5b), char_range(0x5d, 0x7f));
            const quoted_pair = from([
                slash_back,
                char_only(char_range(0x01, 0x09), 0x0b, 0x0c, char_range(0x0e, 0x7f))
            ]);
            const name = repeat_greedy({ name_letter, quoted_pair });
            const quoted_name = from(['"', { name }, '"']);
            const local_part = from({ dot_atom, quoted_name });
            const domain = dot_atom;
            const mail = from([begin, local_part, '@', { domain }, end]);
            $mol_assert_equal('foo..bar@example.org'.match(mail), null);
            $mol_assert_equal('foo..bar"@example.org'.match(mail), null);
            $mol_assert_like([...'foo.bar@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "foo.bar",
                quoted_name: "",
                name: "",
                name_letter: "",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_like([...'"foo..bar"@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "",
                quoted_name: '"foo..bar"',
                name: "foo..bar",
                name_letter: "r",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_equal(mail.generate({ dot_atom: 'foo.bar', domain: 'example.org' }), 'foo.bar@example.org');
            $mol_assert_equal(mail.generate({ name: 'foo..bar', domain: 'example.org' }), '"foo..bar"@example.org');
            $mol_assert_fail(() => mail.generate({ dot_atom: 'foo..bar', domain: 'example.org' }), 'Wrong param: dot_atom=foo..bar');
        },
    });
})($ || ($ = {}));
//mol/regexp/regexp.test.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_test({
            'Empty needle'() {
                const app = new $mol_dimmer;
                app.needle = () => '  ';
                app.haystack = () => 'foo  bar';
                $mol_assert_like(app.strings(), ['foo  bar']);
            },
            'Empty haystack'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo  bar';
                app.haystack = () => '';
                $mol_assert_like(app.strings(), ['']);
            },
            'Not found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' bar ';
                $mol_assert_like(app.strings(), [' bar ']);
            },
            'One found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' bar', 'foo', ' ']);
            },
            'Multiple found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' foobarfoo foo';
                $mol_assert_like(app.strings(), [' ', 'foo', 'bar', 'foo', ' ', 'foo']);
            },
            'Fuzzy search'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo bar';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' ', 'bar', '', 'foo', ' ']);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'sizes'() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const key_public = await pair.public.serial();
            $mol_assert_equal(key_public.length, $mol_crypto_auditor_public.size);
            const key_private = await pair.private.serial();
            $mol_assert_equal(key_private.length, $mol_crypto_auditor_private.size);
            const data = new Uint8Array([1, 2, 3]);
            const sign = await pair.private.sign(data);
            $mol_assert_equal(sign.byteLength, $mol_crypto_auditor_sign_size);
        },
        async 'verify self signed with auto generated key'() {
            const auditor = await $$.$mol_crypto_auditor_pair();
            const data = new Uint8Array([1, 2, 3]);
            const sign = await auditor.private.sign(data);
            $mol_assert_ok(await auditor.public.verify(data, sign));
        },
        async 'verify signed with exported auto generated key'() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const data = new Uint8Array([1, 2, 3]);
            const Alice = await $mol_crypto_auditor_private.from(await pair.private.serial());
            const sign = await Alice.sign(data);
            const Bob = await $mol_crypto_auditor_public.from(await pair.public.serial());
            $mol_assert_ok(await Bob.verify(data, sign));
        },
        async 'take public key from private'() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const data = new Uint8Array([1, 2, 3]);
            const Alice = pair.private;
            const sign = await Alice.sign(data);
            const Bob = await pair.private.public();
            const Carol = await $mol_crypto_auditor_public.from(await pair.private.serial());
            $mol_assert_ok(await Bob.verify(data, sign));
            $mol_assert_ok(await Carol.verify(data, sign));
        },
    });
})($ || ($ = {}));
//mol/crypto/auditor/auditor.web.test.ts
;
"use strict";
var $;
(function ($) {
    let sex;
    (function (sex) {
        sex[sex["male"] = 0] = "male";
        sex[sex["female"] = 1] = "female";
    })(sex || (sex = {}));
    let gender;
    (function (gender) {
        gender["bisexual"] = "bisexual";
        gender["trans"] = "transgender";
    })(gender || (gender = {}));
    $mol_test({
        'config of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_like(Sex.config, {
                name: 'sex',
                dict: sex,
            });
        },
        'name of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_equal(Sex.config.name, 'sex');
        },
        'Is right value of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_equal(Sex(0), sex.male);
        },
        'Is wrong value of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_fail(() => Sex(2), `2 is not value of sex enum`);
        },
        'Is name instead of value'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_fail(() => Sex('male'), `male is not value of sex enum`);
        },
        'Is common object field'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_fail(() => Sex('__proto__'), `__proto__ is not value of sex enum`);
        },
    });
    $mol_test({
        'config of enum'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_like(Gender.config, {
                name: 'gender',
                dict: gender,
            });
        },
        'Is right value of enum'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_equal(Gender('transgender'), gender.trans);
        },
        'Is wrong value of enum'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_fail(() => Gender('xxx'), `xxx is not value of gender enum`);
        },
        'Is name instead of value'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_fail(() => Gender('trans'), `trans is not value of gender enum`);
        },
        'Is common object field'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_fail(() => Gender('__proto__'), `__proto__ is not value of gender enum`);
        },
    });
})($ || ($ = {}));
//mol/data/enum/enum.test.ts
;
"use strict";
var $;
(function ($_1) {
    const common = [
        $mol_int62_to_string({
            lo: 12 << 0 | 13 << 8 | 14 << 16 | 15 << 24,
            hi: 13 << 0 | 14 << 8 | 15 << 16 | 16 << 24,
        }),
        $mol_int62_to_string({
            lo: 2 << 0 | 3 << 8 | 4 << 16 | 5 << 24,
            hi: 3 << 0 | 4 << 8 | 5 << 16 | 6 << 24,
        }),
        $mol_int62_to_string({
            lo: 4 << 0 | 5 << 8 | 6 << 16 | 7 << 24,
            hi: 5 << 0 | 6 << 8 | 7 << 16 | 8 << 24,
        }),
        $mol_int62_to_string({
            lo: 10 << 0 | 11 << 8 | 12 << 16 | 13 << 24,
            hi: 11 << 0 | 12 << 8 | 13 << 16 | 14 << 24,
        }),
        $mol_int62_to_string({
            lo: 6 << 0 | 7 << 8 | 8 << 16 | 9 << 24,
            hi: 7 << 0 | 8 << 8 | 9 << 16 | 10 << 24,
        }),
        $mol_int62_to_string({
            lo: 8 << 0 | 9 << 8 | 10 << 16 | 11 << 24,
            hi: 9 << 0 | 10 << 8 | 11 << 16 | 12 << 24,
        }),
        1 << 0 | 2 << 8 | 3 << 16 | 4 << 24,
    ];
    $mol_test({
        'pack and unpack unit with null'($) {
            const source = new $hyoo_crowd_unit(...common, null, null);
            const packed = $hyoo_crowd_unit_bin.from_unit(source);
            const unpacked = packed.unit();
            source.bin = packed;
            $mol_assert_like(source, unpacked);
        },
        'pack and unpack unit with json'($) {
            const source = new $hyoo_crowd_unit(...common, { a: [1] }, null);
            const packed = $hyoo_crowd_unit_bin.from_unit(source);
            const unpacked = packed.unit();
            source.bin = packed;
            $mol_assert_like(source, unpacked);
        },
        'pack and unpack unit with bin'($) {
            const source = new $hyoo_crowd_unit(...common, new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]), null);
            const packed = $hyoo_crowd_unit_bin.from_unit(source);
            const unpacked = packed.unit();
            source.bin = packed;
            $mol_assert_like(source, unpacked);
        },
        async 'sign / verify'($) {
            const source = new $hyoo_crowd_unit(...common, { a: [1] }, null);
            const packed = $hyoo_crowd_unit_bin.from_unit(source);
            const key = await $.$mol_crypto_auditor_pair();
            packed.sign(new Uint8Array(await key.private.sign(packed.sens())));
            const sign = packed.sign();
            $mol_assert_ok(await key.public.verify(packed.sens(), sign));
        },
    });
})($ || ($ = {}));
//hyoo/crowd/unit/unit.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'fresh'() {
            const clock = new $hyoo_crowd_clock;
            clock.see_peer('b_33', 1);
            clock.see_peer('m_66', 2);
            $mol_assert_ok(clock.fresh('m_66', 3));
            $mol_assert_ok(clock.fresh('x_99', 1));
            $mol_assert_not(clock.fresh('m_66', 1));
        },
        'fork'() {
            const left = new $hyoo_crowd_clock;
            left.see_peer('b_33', 1);
            left.see_peer('m_66', 2);
            const right = new $hyoo_crowd_clock(left);
            $mol_assert_equal(right.last_time, 2);
            $mol_assert_like([...right], [
                ['b_33', 1],
                ['m_66', 2],
            ]);
        },
        'generate'() {
            const clock = new $hyoo_crowd_clock;
            clock.see_peer('b_33', $mol_int62_min + 1);
            clock.see_peer('m_66', $mol_int62_min + 2);
            const now = clock.now();
            const time1 = clock.tick('b_33');
            $mol_assert_like(time1, now);
            $mol_assert_like(clock.last_time, now);
            clock.see_peer('m_66', clock.now() + 10);
            const time2 = clock.tick('m_66');
            $mol_assert_like(time2, now + 11);
            $mol_assert_like(clock.last_time, now + 11);
        },
        'ahead'() {
            const clock1 = new $hyoo_crowd_clock;
            clock1.see_peer('b_33', 1);
            clock1.see_peer('m_66', 2);
            const clock2 = new $hyoo_crowd_clock;
            clock2.see_peer('b_33', 1);
            clock2.see_peer('x_99', 2);
            const clock3 = new $hyoo_crowd_clock;
            clock3.see_peer('b_33', 1);
            clock3.see_peer('m_66', 2);
            clock3.see_peer('x_99', 2);
            $mol_assert_ok(clock1.ahead(clock2));
            $mol_assert_ok(clock2.ahead(clock1));
            $mol_assert_ok(clock3.ahead(clock1));
            $mol_assert_ok(clock3.ahead(clock2));
            $mol_assert_not(clock1.ahead(clock3));
            $mol_assert_not(clock2.ahead(clock3));
        },
        'bin'() {
            const clocks1 = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
            clocks1[$hyoo_crowd_unit_group.auth].see_peer('b_33', 1);
            clocks1[$hyoo_crowd_unit_group.data].see_peer('b_33', 2);
            const bin = $hyoo_crowd_clock_bin.from('2_b', clocks1);
            $mol_assert_like(bin.land(), '2_b');
            const clocks2 = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
            clocks2[$hyoo_crowd_unit_group.auth].see_bin(bin, $hyoo_crowd_unit_group.auth);
            clocks2[$hyoo_crowd_unit_group.data].see_bin(bin, $hyoo_crowd_unit_group.data);
            $mol_assert_like(clocks2.map(clock => new Map(clock)), [
                new Map([
                    ['b_33', 1],
                ]),
                new Map([
                    ['b_33', 2],
                ]),
            ]);
        },
    });
})($ || ($ = {}));
//hyoo/crowd/clock/clock.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'same list'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "old" }, "c"));
            $mol_reconcile({
                prev: [...list.children],
                from: 0,
                to: 3,
                next: 'abc',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                update: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_dom(list, $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "old" }, "c")));
        },
        'insert items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "old" }, "c"),
                $mol_jsx("p", { "data-rev": "old" }, "d"));
            $mol_reconcile({
                prev: [...list.children],
                from: 1,
                to: 3,
                next: 'bXYc',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                update: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_dom(list, $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "new" }, "X"),
                $mol_jsx("p", { "data-rev": "new" }, "Y"),
                $mol_jsx("p", { "data-rev": "old" }, "c"),
                $mol_jsx("p", { "data-rev": "old" }, "d")));
        },
        'split item'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "bc"),
                $mol_jsx("p", { "data-rev": "old" }, "d"));
            $mol_reconcile({
                prev: [...list.children],
                from: 0,
                to: 3,
                next: 'abcd',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                update: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_dom(list, $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "new" }, "b"),
                $mol_jsx("p", { "data-rev": "up" }, "c"),
                $mol_jsx("p", { "data-rev": "old" }, "d")));
        },
        'drop items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "A"),
                $mol_jsx("p", { "data-rev": "old" }, "B"),
                $mol_jsx("p", { "data-rev": "old" }, "x"),
                $mol_jsx("p", { "data-rev": "old" }, "y"),
                $mol_jsx("p", { "data-rev": "old" }, "C"),
                $mol_jsx("p", { "data-rev": "old" }, "D"));
            $mol_reconcile({
                prev: [...list.children],
                from: 1,
                to: 5,
                next: 'BC',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                update: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_dom(list, $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "A"),
                $mol_jsx("p", { "data-rev": "old" }, "B"),
                $mol_jsx("p", { "data-rev": "old" }, "C"),
                $mol_jsx("p", { "data-rev": "old" }, "D")));
        },
        'update items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "B"),
                $mol_jsx("p", { "data-rev": "old" }, "C"),
                $mol_jsx("p", { "data-rev": "old" }, "d"));
            $mol_reconcile({
                prev: [...list.children],
                from: 1,
                to: 3,
                next: 'XY',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                update: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_dom(list, $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "up" }, "X"),
                $mol_jsx("p", { "data-rev": "up" }, "Y"),
                $mol_jsx("p", { "data-rev": "old" }, "d")));
        },
    });
})($ || ($ = {}));
//mol/reconcile/reconcile.test.tsx
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'empty string'() {
            $mol_assert_like(''.match($hyoo_crowd_tokenizer), null);
        },
        'new lines'() {
            $mol_assert_like('\n\r\n'.match($hyoo_crowd_tokenizer), ['\n', '\r\n']);
        },
        'numbers'() {
            $mol_assert_like('123'.match($hyoo_crowd_tokenizer), ['123']);
        },
        'emoji'() {
            $mol_assert_like('😀😁'.match($hyoo_crowd_tokenizer), ['😀', '😁']);
        },
        'emoji with modifier'() {
            $mol_assert_like('👩🏿👩🏿'.match($hyoo_crowd_tokenizer), ['👩🏿', '👩🏿']);
        },
        'combo emoji with modifier'() {
            $mol_assert_like('👩🏿‍🤝‍🧑🏿👩🏿‍🤝‍🧑🏿'.match($hyoo_crowd_tokenizer), ['👩🏿‍🤝‍🧑🏿', '👩🏿‍🤝‍🧑🏿']);
        },
        'word with spaces'() {
            $mol_assert_like('foo1  bar2'.match($hyoo_crowd_tokenizer), ['foo1', ' ', ' bar2']);
        },
        'word with diactric'() {
            $mol_assert_like('Е́е́'.match($hyoo_crowd_tokenizer), ['Е́е́']);
        },
        'word with punctuation'() {
            $mol_assert_like('foo--bar'.match($hyoo_crowd_tokenizer), ['foo', '--', 'bar']);
        },
        'CamelCase'() {
            $mol_assert_like('Foo1BAR2'.match($hyoo_crowd_tokenizer), ['Foo1', 'BAR2']);
        },
    });
})($ || ($ = {}));
//hyoo/crowd/tokenizer/tokenizer.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'string: Offset <=> Point'() {
            const store = $hyoo_crowd_land.make({});
            store.chief.as($hyoo_crowd_text).str('fooBar');
            const [first, second] = store.chief.units();
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .point_by_offset(0), [first.self, 0]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .offset_by_point([first.self, 0]), [first.self, 0]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .point_by_offset(3), [first.self, 3]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .offset_by_point([first.self, 3]), [first.self, 3]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .offset_by_point([first.self, 5]), [first.self, 5]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .point_by_offset(5), [second.self, 2]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .offset_by_point([second.self, 2]), [second.self, 5]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .point_by_offset(6), [second.self, 3]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .offset_by_point([second.self, 3]), [second.self, 6]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .point_by_offset(7), ['0_0', 1]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text)
                .offset_by_point(['0_0', 1]), ['0_0', 7]);
        },
        async 'text: Offset <=> Point'() {
            const store = $hyoo_crowd_land.make({});
            store.chief.as($hyoo_crowd_text).text('foo bar\n666 777');
            const [first, second] = store.chief.nodes($hyoo_crowd_text);
            $mol_assert_like(store.chief.as($hyoo_crowd_text).point_by_offset(0), [first.units()[0].self, 0]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text).offset_by_point([first.units()[0].self, 0]), [first.units()[0].self, 0]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text).point_by_offset(8), [first.units()[2].self, 1]);
            $mol_assert_like(store.chief.as($hyoo_crowd_text).offset_by_point([first.units()[2].self, 1]), [first.units()[2].self, 8]);
        },
    });
})($ || ($ = {}));
//hyoo/crowd/text/text.test.ts
;
"use strict";
var $;
(function ($) {
    async function make_land() {
        const world = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
        return world.grab();
    }
    $mol_test({
        async 'Join & Leave'() {
            const store = await make_land();
            $mol_assert_like(store.peers(), [store.id(), store.peer_id()]);
            $mol_assert_like(store.residents(), []);
            const peer = await $hyoo_crowd_peer.generate();
            store.join();
            $mol_assert_like(store.peers(), [store.id(), store.peer_id()]);
            $mol_assert_like(store.residents(), [store.peer_id()]);
            store.level(peer.id, $hyoo_crowd_peer_level.add);
            $mol_assert_like(store.peers(), [store.id(), store.peer_id(), peer.id]);
            $mol_assert_like(store.residents(), [store.peer_id()]);
            store.leave();
            $mol_assert_like(store.peers(), [store.id(), store.peer_id(), peer.id]);
            $mol_assert_like(store.residents(), []);
        },
        async 'Default state'() {
            const store = await make_land();
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), null);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).bool(), false);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).numb(), 0);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).str(), '');
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), []);
            $mol_assert_like(store.delta().length, 2);
        },
        async 'Return default state'() {
            const store = await make_land();
            const reg = store.chief.as($hyoo_crowd_reg);
            const list = store.chief.as($hyoo_crowd_list);
            const text = store.chief.as($hyoo_crowd_text);
            $mol_assert_like(reg.bool(false), false);
            $mol_assert_like(reg.str(''), '');
            $mol_assert_like(reg.numb(0), 0);
            $mol_assert_like(text.str(''), '');
            $mol_assert_like(reg.value(null), null);
            $mol_assert_like(list.list(), []);
        },
        async 'Serial changes'() {
            const store = await make_land();
            Object.assign(store.peer(), { key_public_serial: null });
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), null);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), []);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).bool(), false);
            store.chief.as($hyoo_crowd_reg).bool(true);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), true);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), [true]);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).numb(), 1);
            store.chief.as($hyoo_crowd_reg).numb(1);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), 1);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), [1]);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).str(), '1');
            store.chief.as($hyoo_crowd_reg).str('x');
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), 'x');
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['x']);
            store.chief.as($hyoo_crowd_reg).value(null);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), null);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), []);
            $mol_assert_like(store.delta().map(unit => unit.data).slice(1), [3, null]);
        },
        async 'Name spaces'() {
            const store = await make_land();
            store.chief.sub('foo', $hyoo_crowd_struct).sub('bar', $hyoo_crowd_reg).numb(111);
            store.chief.sub('foo', $hyoo_crowd_struct).sub('ton', $hyoo_crowd_reg).numb(222);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), []);
            $mol_assert_like(store.chief.sub('foo', $hyoo_crowd_list).list(), []);
            $mol_assert_like(store.chief.sub('foo', $hyoo_crowd_struct).sub('bar', $hyoo_crowd_list).list(), [111]);
            $mol_assert_like(store.chief.sub('foo', $hyoo_crowd_struct).sub('ton', $hyoo_crowd_list).list(), [222]);
        },
        async 'Name spaces merging'() {
            const left = await make_land();
            left.chief.sub('foo', $hyoo_crowd_list).list([111]);
            const right = await make_land();
            right.clock_data.tick(right.peer().id);
            right.chief.sub('foo', $hyoo_crowd_list).list([222]);
            const left_delta = left.delta();
            const right_delta = right.delta();
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.sub('foo', $hyoo_crowd_list).list(), right.chief.sub('foo', $hyoo_crowd_list).list(), [222, 111]);
        },
        async 'Ignore same changes'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_reg).str('foo');
            const time = store.clock_data.last_time;
            store.chief.as($hyoo_crowd_reg).str('foo');
            store.chief.as($hyoo_crowd_list).list(['foo']);
            $mol_assert_like(store.delta().map(unit => unit.time).slice(2), [time + 2, time]);
        },
        async 'Serial insert values'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_list).insert(['foo']);
            store.chief.as($hyoo_crowd_list).insert(['bar']);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['foo', 'bar']);
        },
        async 'Concurent insert values'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_list).insert(['foo'], 0);
            store.chief.as($hyoo_crowd_list).insert(['bar'], 0);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['bar', 'foo']);
        },
        async 'Insert value between others'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_list).insert(['foo']);
            store.chief.as($hyoo_crowd_list).insert(['bar']);
            store.chief.as($hyoo_crowd_list).insert(['lol'], 1);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['foo', 'lol', 'bar']);
        },
        async 'Insert value inside other'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_list).insert(['foo']);
            store.chief.nodes($hyoo_crowd_list)[0].insert(['bar']);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['foo']);
            $mol_assert_like(store.chief.nodes($hyoo_crowd_list)[0].list(), ['bar']);
        },
        async 'Insert before removed before changed'() {
            const store = await make_land();
            const node = store.chief.as($hyoo_crowd_list);
            node.list(['foo', 'bar']);
            node.list(['xxx', 'foo', 'bar']);
            node.list(['xxx', 'bars']);
            $mol_assert_like(node.list(), ['xxx', 'bars']);
        },
        async 'Move existen Unit'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('FooBarLol');
            store.chief.as($hyoo_crowd_list).move(0, 2);
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), 'BarFooLol');
        },
        async 'Many moves'() {
            const store = await make_land();
            const text = store.chief.as($hyoo_crowd_text);
            const list = store.chief.as($hyoo_crowd_list);
            text.str('FooBarLol');
            list.move(2, 1);
            list.move(2, 1);
            list.move(0, 3);
            list.move(2, 1);
            $mol_assert_like(text.str(), 'BarFooLol');
        },
        async 'Separated sublists'() {
            const store = await make_land();
            const text = store.chief.as($hyoo_crowd_text);
            const list = store.chief.as($hyoo_crowd_list);
            text.str('AaBbCcDdEeFf');
            list.move(3, 5);
            list.move(3, 5);
            list.move(5, 4);
            list.move(0, 2);
            list.move(0, 2);
            list.move(2, 1);
            $mol_assert_like(text.str(), 'AaCcBbDdFfEe');
        },
        async 'Deltas for different versions'() {
            const store = await make_land();
            Object.assign(store.peer(), { key_public_serial: null });
            store.clock_data.see_time(store.clock_data.now() + 60);
            store.chief.as($hyoo_crowd_list).list(['foo', 'bar', 'lol']);
            $mol_assert_like(store.delta([
                new $hyoo_crowd_clock,
                new $hyoo_crowd_clock([
                    [store.peer().id, store.clock_data.last_time - 3],
                ])
            ]).map(unit => unit.data).slice(2), ['foo', 'bar', 'lol']);
            $mol_assert_like(store.delta([
                new $hyoo_crowd_clock,
                new $hyoo_crowd_clock([
                    [store.peer().id, store.clock_data.last_time - 2],
                ])
            ]).map(unit => unit.data).slice(2), ['bar', 'lol']);
            $mol_assert_like(store.delta([
                new $hyoo_crowd_clock,
                new $hyoo_crowd_clock([
                    [store.peer().id, store.clock_data.last_time - 1],
                ])
            ]).map(unit => unit.data).slice(2), ['lol']);
            $mol_assert_like(store.delta([
                new $hyoo_crowd_clock,
                new $hyoo_crowd_clock([
                    [store.peer().id, store.clock_data.last_time],
                ])
            ]).slice(2), []);
        },
        async 'Delete without subtree and ignore inserted into deleted'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('foo');
            const b2 = store.chief.nodes($hyoo_crowd_text)[0];
            b2.str('bar');
            const b3 = b2.nodes($hyoo_crowd_text)[0];
            b3.str('lol');
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), 'foo');
            $mol_assert_like(b2.as($hyoo_crowd_reg).value(), 'bar');
            $mol_assert_like(b3.as($hyoo_crowd_reg).value(), 'lol');
            store.chief.as($hyoo_crowd_list).cut(0);
            $mol_assert_like(store.chief.as($hyoo_crowd_reg).value(), null);
            $mol_assert_like(b2.as($hyoo_crowd_reg).value(), 'bar');
            $mol_assert_like(b3.as($hyoo_crowd_reg).value(), 'lol');
        },
        async 'Put/get list'() {
            const store = await make_land();
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), []);
            store.chief.as($hyoo_crowd_list).list(['foo', 'bar', 'foo']);
            const first = store.chief.nodes($hyoo_crowd_list)[0];
            first.list(['bar', 'foo', 'bar']);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['foo', 'bar', 'foo']);
            $mol_assert_like(first.list(), ['bar', 'foo', 'bar']);
        },
        async 'Put/get text'() {
            const store1 = await make_land();
            store1.chief.as($hyoo_crowd_text).str('foo bar foo');
            $mol_assert_like(store1.chief.as($hyoo_crowd_text).str(), 'foo bar foo');
            $mol_assert_like(store1.chief.as($hyoo_crowd_list).list(), ['foo', ' bar', ' foo']);
            const store2 = store1.fork(await $hyoo_crowd_peer.generate());
            store2.chief.as($hyoo_crowd_text).str('barFFFoo  bar');
            $mol_assert_like(store2.chief.as($hyoo_crowd_text).str(), 'barFFFoo  bar');
            $mol_assert_like(store2.chief.as($hyoo_crowd_list).list(), ['bar', 'FFFoo', ' ', ' bar']);
        },
        async 'Text modifications'() {
            const store1 = await make_land();
            store1.chief.as($hyoo_crowd_text).str('foo bar');
            const store2 = store1.fork(await $hyoo_crowd_peer.generate());
            store2.chief.as($hyoo_crowd_text).str('foo  bar');
            $mol_assert_like(store1.chief.units().map(unit => unit.self), [
                store2.chief.units()[0].self,
                store2.chief.units()[2].self,
            ]);
            const store3 = store2.fork(await $hyoo_crowd_peer.generate());
            store3.chief.as($hyoo_crowd_text).str('foo ton bar');
            $mol_assert_like(store2.chief.units().map(unit => unit.self), [
                store3.chief.units()[0].self,
                store3.chief.units()[1].self,
                store3.chief.units()[2].self,
            ]);
            const store4 = store3.fork(await $hyoo_crowd_peer.generate());
            store4.chief.as($hyoo_crowd_text).str('foo bar');
            $mol_assert_like([
                store3.chief.units()[0].self,
                store3.chief.units()[2].self,
            ], store4.chief.units().map(unit => unit.self));
            const store5 = store3.fork(await $hyoo_crowd_peer.generate());
            store5.chief.as($hyoo_crowd_text).str('foo ');
            $mol_assert_like([
                store4.chief.units()[0].self,
                store4.chief.units()[1].self,
            ], store5.chief.units().map(unit => unit.self));
        },
        async 'Change sequences'() {
            const store = await make_land();
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), '');
            store.chief.as($hyoo_crowd_text).str('foo');
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), 'foo');
            store.chief.as($hyoo_crowd_text).str('foo bar');
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), 'foo bar');
            store.chief.as($hyoo_crowd_text).str('foo lol bar');
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), 'foo lol bar');
            store.chief.as($hyoo_crowd_text).str('lol bar');
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), 'lol bar');
            store.chief.as($hyoo_crowd_text).str('foo bar');
            $mol_assert_like(store.chief.as($hyoo_crowd_text).str(), 'foo bar');
        },
        async 'Merge different sequences'() {
            const left = await make_land();
            left.chief.as($hyoo_crowd_text).str('foo bar.');
            const right = await make_land();
            right.clock_data.tick(right.peer().id);
            right.chief.as($hyoo_crowd_text).str('xxx yyy.');
            const left_delta = left.delta();
            const right_delta = right.delta();
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'xxx yyy.foo bar.');
        },
        async 'Merge different insertions to same place of same sequence'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('foo bar');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_text).str('foo xxx bar');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.chief.as($hyoo_crowd_text).str('foo yyy bar');
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'foo yyy xxx bar');
        },
        async 'Insert after moved'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('FooBarZak');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_text).str('FooXxxBarZak');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.insert(right.chief.units()[0], '0_0', 2);
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'BarFooXxxZak');
        },
        async 'Insert before moved left'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('fooBarZak');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_text).str('FooXxxBarZak');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.insert(right.chief.units()[1], '0_0', 0);
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'BarFooXxxZak');
        },
        async 'Insert before moved right'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('FooBarZakPew');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_text).str('FooXxxBarZakPew');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.insert(right.chief.units()[1], '0_0', 4);
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'FooZakXxxPewBar');
        },
        async 'Insert after removed'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('FooBar');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_text).str('FooXxxBar');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.chief.as($hyoo_crowd_text).str('Bar');
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'XxxBar');
        },
        async 'Insert after removed out'() {
            const base = await make_land();
            base.node('1_1', $hyoo_crowd_text).str('FooBarZak');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.node('1_1', $hyoo_crowd_text).str('FooBarXxxZak');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.insert(right.node('1_1', $hyoo_crowd_node).units()[1], '2_2', 0);
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.node('1_1', $hyoo_crowd_text).str(), right.node('1_1', $hyoo_crowd_text).str(), 'FooZakXxx');
            $mol_assert_like(left.node('2_2', $hyoo_crowd_text).str(), left.node('2_2', $hyoo_crowd_text).str(), 'Bar');
        },
        async 'Insert before changed'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('XxxYyyZzz');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_text).str('XxxFooYyyZzz');
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.chief.as($hyoo_crowd_text).str('XxxBarZzz');
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'XxxBarFooZzz');
        },
        async 'Insert between moved'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_list).list([111, 222, 333, 444, 555, 666]);
            const left = base.fork(await $hyoo_crowd_peer.generate());
            left.chief.as($hyoo_crowd_list).list([111, 222, 777, 333, 444, 555, 666]);
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            right.insert(right.chief.units()[1], '0_0', 5);
            right.insert(right.chief.units()[1], '0_0', 5);
            const left_delta = left.delta(base.clocks);
            const right_delta = right.delta(base.clocks);
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_like(left.chief.as($hyoo_crowd_list).list(), right.chief.as($hyoo_crowd_list).list(), [111, 444, 555, 222, 333, 777, 666]);
        },
        async 'Merge text changes'() {
            const base = await make_land();
            base.chief.as($hyoo_crowd_text).str('Hello World and fun!');
            const left = base.fork(await $hyoo_crowd_peer.generate());
            const right = base.fork(await $hyoo_crowd_peer.generate());
            right.clock_data.tick(right.peer().id);
            left.chief.as($hyoo_crowd_text).str('Hello Alice and fun!');
            right.chief.as($hyoo_crowd_text).str('Bye World and fun!');
            const left_delta = left.delta();
            const right_delta = right.delta();
            left.apply(right_delta);
            right.apply(left_delta);
            $mol_assert_equal(left.chief.as($hyoo_crowd_text).str(), right.chief.as($hyoo_crowd_text).str(), 'Bye Alice and fun!');
        },
        async 'Write into token'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('foobar');
            store.chief.as($hyoo_crowd_text).write('xyz', 3);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['fooxyzbar']);
        },
        async 'Write into token with split'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('foobar');
            store.chief.as($hyoo_crowd_text).write('XYZ', 2, 4);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['fo', 'XYZar']);
        },
        async 'Write over few tokens'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('xxx foo bar yyy');
            store.chief.as($hyoo_crowd_text).write('X Y Z', 6, 9);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['xxx', ' fo', 'X', ' Y', ' Zar', ' yyy']);
        },
        async 'Write whole token'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('xxxFoo yyy');
            store.chief.as($hyoo_crowd_text).write('bar', 3, 7);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['xxxbaryyy']);
        },
        async 'Write whole text'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('foo bar');
            store.chief.as($hyoo_crowd_text).write('xxx', 0, 7);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['xxx']);
        },
        async 'Write at the end'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('foo');
            store.chief.as($hyoo_crowd_text).write('bar');
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['foobar']);
        },
        async 'Write between tokens'() {
            const store = await make_land();
            store.chief.as($hyoo_crowd_text).str('foo bar');
            store.chief.as($hyoo_crowd_text).write('xxx', 4);
            $mol_assert_like(store.chief.as($hyoo_crowd_list).list(), ['foo', ' xxxbar']);
        },
    });
})($ || ($ = {}));
//hyoo/crowd/land/land.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'number'() {
            const dict = new $mol_dict();
            $mol_assert_equal(dict.get(123), undefined);
            $mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $mol_assert_equal(dict.get(123), 321);
            $mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $mol_assert_equal(dict.get(123), undefined);
            $mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $mol_dict();
            $mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $mol_assert_equal(dict.get({ foo: 123 }), 321);
            $mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $mol_dict();
            $mol_assert_equal(dict.get([123]), undefined);
            $mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $mol_assert_equal(dict.get([123]), 321);
            $mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $mol_assert_equal(dict.get([123]), undefined);
            $mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $mol_jsx("div", null);
            const dict = new $mol_dict();
            $mol_assert_equal(dict.get(el), undefined);
            $mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $mol_assert_equal(dict.get(el), 321);
            $mol_assert_equal(dict.has(el), true);
            $mol_assert_equal(dict.get($mol_jsx("div", null)), undefined);
            $mol_assert_equal(dict.has($mol_jsx("div", null)), false);
            dict.delete(el);
            $mol_assert_equal(dict.get(el), undefined);
            $mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $mol_dict([[[123], 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $mol_assert_like(keys, [[123]]);
            $mol_assert_like(vals, [321]);
        },
        'method iterators key restore'() {
            const dict = new $mol_dict([[[123], 321]]);
            $mol_assert_like([...dict.keys()], [[123]]);
            $mol_assert_like([...dict.values()], [321]);
            $mol_assert_like([...dict.entries()], [[[123], 321]]);
        },
        'forEach key restore'() {
            const dict = new $mol_dict([[[123], 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $mol_assert_like(keys, [[123]]);
            $mol_assert_like(vals, [321]);
        },
    });
})($ || ($ = {}));
//mol/dict/dict.test.tsx
;
"use strict";
var $;
(function ($) {
    async function make_land(id = '1_1') {
        return $hyoo_crowd_land.make({
            id: $mol_const(id),
            peer: $mol_const(await $hyoo_crowd_peer.generate()),
        });
    }
    $mol_test({
        async 'list add & insert & drop'() {
            const land = await make_land();
            const node = land.chief.as($hyoo_crowd_list);
            node.list([1, 2]);
            $mol_assert_like(node.list(), [1, 2]);
            node.add(3);
            $mol_assert_like(node.list(), [1, 2, 3]);
            node.add(3);
            $mol_assert_like(node.list(), [1, 2, 3]);
            node.insert([2]);
            $mol_assert_like(node.list(), [1, 2, 3, 2]);
            node.insert([2], 0);
            $mol_assert_like(node.list(), [2, 1, 2, 3, 2]);
            node.drop(2);
            $mol_assert_like(node.list(), [1, 3]);
            node.drop(2);
            $mol_assert_like(node.list(), [1, 3]);
        },
    });
})($ || ($ = {}));
//hyoo/crowd/list/list.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'world delta & apply'() {
            const world1 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const land1 = await world1.grab();
            const land2 = await world1.grab();
            land1.chief.as($hyoo_crowd_list).list([123, 456]);
            land2.chief.as($hyoo_crowd_list).list([456, 789]);
            for await (const batch of world1.delta()) {
                $mol_assert_like((await world2.apply(batch)).forbid, new Map);
            }
            $mol_assert_like(world2.land(land1.id()).chief.as($hyoo_crowd_list).list(), [123, 456]);
            $mol_assert_like(world2.land(land2.id()).chief.as($hyoo_crowd_list).list(), [456, 789]);
        },
        async 'land delta & apply'() {
            const world1 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const land = world1.land(world1.peer.id);
            land.chief.as($hyoo_crowd_list).list([123, 456]);
            const batch = await world1.delta_batch(land);
            $mol_assert_like((await world2.apply(batch)).forbid, new Map);
            $mol_assert_like(world2.land(land.id()).chief.as($hyoo_crowd_list).list(), [123, 456]);
        },
        async 'ignore changes from far future'() {
            const world1 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const land = await world1.grab();
            const clock = land.clock_data;
            clock.see_time(clock.now() + 60 * 60 * 24 * 10);
            land.chief.as($hyoo_crowd_reg).numb(123);
            const batch = await world1.delta_batch(land);
            $mol_assert_like([...(await world2.apply(batch)).forbid.values()], ['Far future']);
            $mol_assert_like(world2.land(land.id()).delta().length, 3);
        },
        async 'ignore auth as another peer'() {
            const world1 = new $hyoo_crowd_world({ ...await $hyoo_crowd_peer.generate(), id: '1_1' });
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const land = await world1.grab();
            land.chief.as($hyoo_crowd_reg).numb(123);
            const batch = await world1.delta_batch(land);
            $mol_assert_like([...(await world2.apply(batch)).forbid.values()], ['Alien join key', 'No auth key']);
            $mol_assert_like(world2.land(land.id()).delta().length, 2);
        },
        async 'ignore auth without key'() {
            const world1 = new $hyoo_crowd_world({ ...await $hyoo_crowd_peer.generate(), key_public_serial: [] });
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const land = world1.land('1_1');
            land.chief.as($hyoo_crowd_reg).numb(123);
            const batch = await world1.delta_batch(land);
            $mol_assert_like([...(await world2.apply(batch)).forbid.values()], ['No join key', 'Level too low']);
            $mol_assert_like(world2.land(land.id()).delta().length, 0);
        },
        async 'ignore changes with wrong signs'() {
            const world1 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const land = await world1.grab();
            const batch = await world1.delta_batch(land);
            batch[152] = ~batch[152];
            $mol_assert_like([...(await world2.apply(batch)).forbid.values()], ['Wrong join sign', 'Level too low']);
            $mol_assert_like(world2.land(land.id()).delta().length, 0);
        },
        async 'ignore update auth except auth removing'() {
            const peer = await $hyoo_crowd_peer.generate();
            const world1 = new $hyoo_crowd_world(peer);
            const world2 = new $hyoo_crowd_world(peer);
            const land1 = await world1.grab();
            const land2 = world2.land(land1.id());
            land2.clock_auth.tick(peer.id);
            land2.clock_data.tick(peer.id);
            land1.chief.as($hyoo_crowd_reg).numb(123);
            land2.chief.as($hyoo_crowd_reg).numb(234);
            const batch = await world1.delta_batch(land1);
            $mol_assert_like([...(await world2.apply(batch)).forbid.values()], []);
            $mol_assert_like(land2.delta().length, 5);
            land1.chief.as($hyoo_crowd_reg).numb(345);
            land1.leave();
            const batch2 = await world1.delta_batch(land1);
            $mol_assert_like([...(await world2.apply(batch2)).forbid.values()], ['No auth key']);
            $mol_assert_like(land2.chief.as($hyoo_crowd_reg).numb(), 234);
        },
        async 'levels'() {
            const world1 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const peer = await $hyoo_crowd_peer.generate();
            const land1 = await world1.grab();
            const land2 = world2.land(land1.id());
            land1.chief.sub('foo', $hyoo_crowd_reg).numb(123);
            for await (const batch of world1.delta()) {
                $mol_assert_like([...(await world2.apply(batch)).forbid.values()], []);
            }
            land2.chief.sub('foo', $hyoo_crowd_reg).numb(234);
            land2.chief.sub('bar', $hyoo_crowd_reg).numb(234);
            land2.level(peer.id, $hyoo_crowd_peer_level.law);
            $mol_assert_like(land1.delta().length, 4);
            level_get: {
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], ['Level too low', 'Level too low']);
                $mol_assert_like(land1.delta().length, 5);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 123);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 0);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.get);
            }
            level_add: {
                land1.level(land2.peer().id, $hyoo_crowd_peer_level.add);
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], ['Level too low']);
                $mol_assert_like(land1.delta().length, 7);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 123);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.get);
            }
            level_mod: {
                land1.level(land2.peer().id, $hyoo_crowd_peer_level.mod);
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], []);
                $mol_assert_like(land1.delta().length, 7);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.get);
            }
            level_law: {
                land1.level(land2.peer().id, $hyoo_crowd_peer_level.law);
                for await (const batch of world1.delta()) {
                    $mol_assert_like([...(await world2.apply(batch)).forbid.values()], []);
                }
                land2.level(peer.id, $hyoo_crowd_peer_level.law);
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], []);
                $mol_assert_like(land1.delta().length, 8);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.law);
            }
        },
        async 'default level'() {
            const world1 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const world2 = new $hyoo_crowd_world(await $hyoo_crowd_peer.generate());
            const peer = await $hyoo_crowd_peer.generate();
            const land1 = await world1.grab();
            const land2 = world2.land(land1.id());
            land1.chief.sub('foo', $hyoo_crowd_reg).numb(123);
            const batch = await world1.delta_batch(land1);
            $mol_assert_like([...(await world2.apply(batch)).forbid.values()], []);
            land2.chief.sub('foo', $hyoo_crowd_reg).numb(234);
            land2.chief.sub('bar', $hyoo_crowd_reg).numb(234);
            land2.level(peer.id, $hyoo_crowd_peer_level.law);
            $mol_assert_like(land1.delta().length, 4);
            level_add: {
                land1.level_base($hyoo_crowd_peer_level.add);
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], ['Level too low']);
                $mol_assert_like(land1.delta().length, 7);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 123);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.add);
            }
            level_mod: {
                land1.level_base($hyoo_crowd_peer_level.mod);
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], []);
                $mol_assert_like(land1.delta().length, 7);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.mod);
            }
            level_law: {
                land1.level_base($hyoo_crowd_peer_level.law);
                for await (const batch of world1.delta()) {
                    $mol_assert_like([...(await world2.apply(batch)).forbid.values()], []);
                }
                land2.level(peer.id, $hyoo_crowd_peer_level.law);
                const batch = await world2.delta_batch(land2);
                $mol_assert_like([...(await world1.apply(batch)).forbid.values()], []);
                $mol_assert_like(land1.delta().length, 7);
                $mol_assert_like(land1.chief.sub('foo', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.chief.sub('bar', $hyoo_crowd_reg).numb(), 234);
                $mol_assert_like(land1.level(peer.id), $hyoo_crowd_peer_level.law);
            }
        },
    });
})($ || ($ = {}));
//hyoo/crowd/world/world.test.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_sync_masters = [
        `localhost:9090`,
        $mol_dom_context.document.location.origin.replace(/^\w+:\/\//, ''),
    ];
})($ || ($ = {}));
//hyoo/sync/masters/masters.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'put, get, drop, count records and clear store'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('letters'));
            const trans = db.change('letters');
            try {
                const { letters } = trans.stores;
                $mol_assert_like(await letters.get(1), undefined);
                $mol_assert_like(await letters.get(2), undefined);
                $mol_assert_like(await letters.count(), 0);
                await letters.put('a');
                await letters.put('b', 1);
                await letters.put('c', 2);
                $mol_assert_like(await letters.get(1), 'b');
                $mol_assert_like(await letters.get(2), 'c');
                $mol_assert_like(await letters.count(), 2);
                await letters.drop(1);
                $mol_assert_like(await letters.get(1), undefined);
                $mol_assert_like(await letters.count(), 1);
                await letters.clear();
                $mol_assert_like(await letters.count(), 0);
            }
            finally {
                trans.abort();
                db.kill();
            }
        },
        async 'select by query'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('letters'));
            const trans = db.change('letters');
            try {
                const { letters } = trans.stores;
                await letters.put('a');
                await letters.put('b');
                await letters.put('c');
                await letters.put('d');
                $mol_assert_like(await letters.select(), ['a', 'b', 'c', 'd']);
                $mol_assert_like(await letters.select(null, 2), ['a', 'b']);
                $mol_assert_like(await letters.select($mol_dom_context.IDBKeyRange.bound(2, 3)), ['b', 'c']);
            }
            finally {
                trans.abort();
                db.kill();
            }
        },
    });
})($ || ($ = {}));
//mol/db/store/store.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'take and drop db'() {
            const db = await $$.$mol_db('$mol_db_test');
            await db.kill();
        },
        async 'make and drop store in separate migrations'() {
            try {
                const db1 = await $$.$mol_db('$mol_db_test', mig => mig.store_make('temp'));
                db1.destructor();
                $mol_assert_like(db1.stores, ['temp']);
                $mol_assert_like(db1.version, 2);
                const db2 = await $$.$mol_db('$mol_db_test', mig => mig.store_make('temp'), mig => mig.store_drop('temp'));
                db2.destructor();
                $mol_assert_like(db2.stores, []);
                $mol_assert_like(db2.version, 3);
            }
            finally {
                const db0 = await $$.$mol_db('$mol_db_test');
                await db0.kill();
            }
        },
    });
})($ || ($ = {}));
//mol/db/db.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'unique index'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('users'), mig => mig.stores.users.index_make('names', ['name'], !!'unique'));
            const trans = db.change('users');
            try {
                const { users } = trans.stores;
                await users.put({ name: 'Jin' }, 'jin');
                await users.put({ name: 'John' }, 'john');
                await users.put({ name: 'Bin' }, 'bin');
                const { names } = users.indexes;
                $mol_assert_like(await names.get(['Jin']), { name: 'Jin' });
                $mol_assert_like(await names.get(['John']), { name: 'John' });
                $mol_assert_like(await names.count(), 3);
                $mol_assert_like(await names.select($mol_dom_context.IDBKeyRange.bound(['J'], ['J\uFFFF'])), [{ name: 'Jin' }, { name: 'John' }]);
                try {
                    await users.put({ name: 'Jin' }, 'jin2');
                    $mol_fail(new Error('Exception expected'));
                }
                catch (error) {
                    $mol_assert_unique(error.message, 'Exception expected');
                }
            }
            finally {
                trans.abort();
                await db.kill();
            }
        },
        async 'multi path index'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('users'), mig => mig.stores.users.index_make('names', ['first', 'last']));
            const trans = db.change('users');
            try {
                const { users } = trans.stores;
                await users.put({ first: 'Jin', last: 'Johnson' }, 'jin');
                await users.put({ first: 'John', last: 'Jinson' }, 'john');
                await users.put({ first: 'Bond', last: 'James' }, '007');
                const { names } = users.indexes;
                $mol_assert_like(await names.get(['Jin', 'Johnson']), { first: 'Jin', last: 'Johnson' });
                $mol_assert_like(await names.get(['John', 'Jinson']), { first: 'John', last: 'Jinson' });
                $mol_assert_like(await names.count(), 3);
                $mol_assert_like(await names.select($mol_dom_context.IDBKeyRange.bound(['Jin', 'Johnson'], ['John', 'Jinson'])), [{ first: 'Jin', last: 'Johnson' }, { first: 'John', last: 'Jinson' }]);
            }
            finally {
                trans.abort();
                await db.kill();
            }
        },
        async 'multiple indexes'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('users'), mig => mig.stores.users.index_make('names', ['name'], !!'unique'), mig => mig.stores.users.index_make('ages', ['age']));
            const trans = db.change('users');
            try {
                const { users } = trans.stores;
                await users.put({ name: 'Jin', age: 18 }, 'jin');
                await users.put({ name: 'John', age: 18 }, 'john');
                const { names, ages } = users.indexes;
                $mol_assert_like(await names.select(['Jin']), [{ name: 'Jin', age: 18 }]);
                $mol_assert_like(await names.select(['John']), [{ name: 'John', age: 18 }]);
                $mol_assert_like(await names.count(), 2);
                $mol_assert_like(await ages.select([18]), [{ name: 'Jin', age: 18 }, { name: 'John', age: 18 }]);
                $mol_assert_like(await ages.count(), 2);
            }
            finally {
                trans.abort();
                await db.kill();
            }
        },
    });
})($ || ($ = {}));
//mol/db/index/index.test.ts
;
"use strict";
var $;
(function ($) {
    async function make_land(id = '1_1') {
        return $hyoo_crowd_land.make({
            id: $mol_const(id),
            peer: $mol_const(await $hyoo_crowd_peer.generate()),
        });
    }
    $mol_test({
        async 'save and load buffers'() {
            const land = await make_land();
            const node = land.chief.as($hyoo_crowd_blob);
            const source = new Uint8Array(2 ** 15 + 1);
            source[2 ** 15 + 1] = 255;
            node.buffer(source);
            $mol_assert_like(node.list().length, 2);
            $mol_assert_like(node.buffer(), source);
        },
        async 'save and load blobs'() {
            const land = await make_land();
            const node = land.chief.as($hyoo_crowd_blob);
            const source = new Uint8Array(2 ** 15 + 1);
            source[2 ** 15 + 1] = 255;
            await $mol_wire_async(node).blob(new $mol_blob([source], { type: 'test/test' }));
            $mol_assert_like('test/test', node.blob().type);
            $mol_assert_like(source, new Uint8Array(await node.blob().arrayBuffer()));
        },
    });
})($ || ($ = {}));
//hyoo/crowd/blob/blob.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'parse and serial'() {
            $mol_assert_equal(new $mol_time_duration('P42.1Y').toString(), 'P42.1YT');
            $mol_assert_equal(new $mol_time_duration('P42.1M').toString(), 'P42.1MT');
            $mol_assert_equal(new $mol_time_duration('P42.1D').toString(), 'P42.1DT');
            $mol_assert_equal(new $mol_time_duration('PT42.1h').toString(), 'PT42.1H');
            $mol_assert_equal(new $mol_time_duration('PT42.1m').toString(), 'PT42.1M');
            $mol_assert_equal(new $mol_time_duration('PT42.1s').toString(), 'PT42.1S');
            $mol_assert_equal(new $mol_time_duration('P1Y2M3DT4h5m6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'format typed'() {
            $mol_assert_equal(new $mol_time_duration('P1Y2M3DT4h5m6s').toString('P#Y#M#DT#h#m#s'), 'P1Y2M3DT4H5M6S');
        },
        'comparison'() {
            const iso = 'P1Y1M1DT1h1m1s';
            $mol_assert_like(new $mol_time_duration(iso), new $mol_time_duration(iso));
        },
    });
})($ || ($ = {}));
//mol/time/duration/duration.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'parse and serial'() {
            $mol_assert_equal(new $mol_time_moment('2014').toString(), '2014');
            $mol_assert_equal(new $mol_time_moment('2014-01').toString(), '2014-01');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').toString(), '2014-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03').toString(), '2014-01-02T03');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04').toString(), '2014-01-02T03:04');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05').toString(), '2014-01-02T03:04:05');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05.006').toString(), '2014-01-02T03:04:05.006');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05.006Z').toString(), '2014-01-02T03:04:05.006+00:00');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05.006+07:00').toString(), '2014-01-02T03:04:05.006+07:00');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05+07:08').toString(), '2014-01-02T03:04:05+07:08');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04+07:08').toString(), '2014-01-02T03:04+07:08');
            $mol_assert_equal(new $mol_time_moment('T03:04+07:08').toString(), 'T03:04+07:08');
            $mol_assert_equal(new $mol_time_moment('T03:04:05').toString(), 'T03:04:05');
            $mol_assert_equal(new $mol_time_moment('T03:04').toString(), 'T03:04');
            $mol_assert_equal(new $mol_time_moment('T03').toString(), 'T03');
        },
        'format simple'() {
            $mol_assert_equal(new $mol_time_moment('2014-01-02T01:02:03.000000').toString('AD YY-M-D h:m:s'), '21 14-1-2 1:2:3');
        },
        'format padded'() {
            $mol_assert_equal(new $mol_time_moment('2014-01-02T01:02:03.000').toString('YYYY-MM-DD hh:mm:ss'), '2014-01-02 01:02:03');
        },
        'format time zone'() {
            $mol_assert_equal(new $mol_time_moment('2014-01-02T01:02:03+05:00').toString('Z'), '+05:00');
        },
        'format names'() {
            $mol_assert_ok(new $mol_time_moment('2014-01-02T01:02:03.000').toString('Month Mon | WeekDay WD'));
        },
        'shifting'() {
            $mol_assert_equal(new $mol_time_moment('T15:54:58.243+03:00').shift({}).toString(), 'T15:54:58.243+03:00');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('P1Y').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('P12M').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('P365D').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('PT8760h').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01').shift('PT8760h').toString(), '2015-01');
            $mol_assert_equal(new $mol_time_moment('2014-01').shift('PT-8760h').toString(), '2013-01');
        },
        'normalization'() {
            $mol_assert_equal(new $mol_time_moment({ year: 2015, month: 6, day: 34 }).normal.toString(), '2015-08-04');
        },
        'iso week day'() {
            $mol_assert_equal(new $mol_time_moment('2017-09-17').weekday, $mol_time_moment_weekdays.sunday);
            $mol_assert_equal(new $mol_time_moment('2017-09-18').weekday, $mol_time_moment_weekdays.monday);
        },
        'change offset'() {
            $mol_assert_equal(new $mol_time_moment('2021-04-10 +03:00').toOffset('Z').toString(), '2021-04-09T21:00:00+00:00');
        },
        'comparison'() {
            const iso = '2021-01-02T03:04:05.678+09:10';
            $mol_assert_like(new $mol_time_moment(iso), new $mol_time_moment(iso));
        },
    });
})($ || ($ = {}));
//mol/time/moment/moment.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Vector limiting'() {
            let point = new $mol_vector_3d(7, 10, 13);
            const res = point.limited([[1, 5], [15, 20], [5, 10]]);
            $mol_assert_equal(res.x, 5);
            $mol_assert_equal(res.y, 15);
            $mol_assert_equal(res.z, 10);
        },
        'Vector adding scalar'() {
            let point = new $mol_vector_3d(1, 2, 3);
            let res = point.added0(5);
            $mol_assert_equal(res.x, 6);
            $mol_assert_equal(res.y, 7);
            $mol_assert_equal(res.z, 8);
        },
        'Vector adding vector'() {
            let point = new $mol_vector_3d(1, 2, 3);
            let res = point.added1([5, 10, 15]);
            $mol_assert_equal(res.x, 6);
            $mol_assert_equal(res.y, 12);
            $mol_assert_equal(res.z, 18);
        },
        'Vector multiplying scalar'() {
            let point = new $mol_vector_3d(2, 3, 4);
            let res = point.multed0(-1);
            $mol_assert_equal(res.x, -2);
            $mol_assert_equal(res.y, -3);
            $mol_assert_equal(res.z, -4);
        },
        'Vector multiplying vector'() {
            let point = new $mol_vector_3d(2, 3, 4);
            let res = point.multed1([5, 2, -2]);
            $mol_assert_equal(res.x, 10);
            $mol_assert_equal(res.y, 6);
            $mol_assert_equal(res.z, -8);
        },
        'Matrix adding matrix'() {
            let matrix = new $mol_vector_matrix(...[[1, 2], [3, 4], [5, 6]]);
            let res = matrix.added2([[10, 20], [30, 40], [50, 60]]);
            $mol_assert_equal(res[0][0], 11);
            $mol_assert_equal(res[0][1], 22);
            $mol_assert_equal(res[1][0], 33);
            $mol_assert_equal(res[1][1], 44);
            $mol_assert_equal(res[2][0], 55);
            $mol_assert_equal(res[2][1], 66);
        },
        'Matrix multiplying matrix'() {
            let matrix = new $mol_vector_matrix(...[[2, 3], [4, 5], [6, 7]]);
            let res = matrix.multed2([[2, 3], [4, 5], [6, 7]]);
            $mol_assert_equal(res[0][0], 4);
            $mol_assert_equal(res[0][1], 9);
            $mol_assert_equal(res[1][0], 16);
            $mol_assert_equal(res[1][1], 25);
            $mol_assert_equal(res[2][0], 36);
            $mol_assert_equal(res[2][1], 49);
        },
        'Range expanding'() {
            let range = $mol_vector_range_full.inversed;
            const expanded = range.expanded0(10).expanded0(5);
            $mol_assert_like([...expanded], [5, 10]);
        },
        'Vector of range expanding by vector'() {
            let dimensions = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const expanded = dimensions.expanded1([1, 7]).expanded1([3, 5]);
            $mol_assert_like([...expanded.x], [1, 3]);
            $mol_assert_like([...expanded.y], [5, 7]);
        },
        'Vector of range expanding by vector of range'() {
            let dimensions = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const expanded = dimensions
                .expanded2([[1, 3], [7, 9]])
                .expanded2([[2, 4], [6, 8]]);
            $mol_assert_like([...expanded.x], [1, 4]);
            $mol_assert_like([...expanded.y], [6, 9]);
        },
        'Vector of infinity range expanding by vector of range'() {
            let dimensions = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const next = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const expanded = next
                .expanded2(dimensions);
            $mol_assert_like([...expanded.x], [Infinity, -Infinity]);
            $mol_assert_like([...expanded.y], [Infinity, -Infinity]);
        },
    });
})($ || ($ = {}));
//mol/vector/vector.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        '$mol_syntax2_md_flow'() {
            const check = (input, right) => {
                const tokens = [];
                $mol_syntax2_md_flow.tokenize(input, (...token) => tokens.push(token));
                $mol_assert_like(tokens, right);
            };
            check('Hello,\nWorld..\r\n\r\n\nof Love!', [
                ['block', 'Hello,\n', ['Hello,', '\n'], 0],
                ['block', 'World..\r\n\r\n\n', ['World..', '\r\n\r\n\n'], 7],
                ['block', 'of Love!', ['of Love!', ''], 19],
            ]);
            check('# Header1\n\nHello!\n\n## Header2', [
                ['header', '# Header1\n\n', ['#', ' ', 'Header1', '\n\n'], 0],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 11],
                ['header', '## Header2', ['##', ' ', 'Header2', ''], 19],
            ]);
            check('```\nstart()\n```\n\n```jam.js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```', [
                ['code', '```\nstart()\n```\n\n', ['```', '', 'start()\n', '```', '\n\n'], 0],
                ['code', '```jam.js\nrestart()\n```\n\n', ['```', 'jam.js', 'restart()\n', '```', '\n\n'], 17],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 42],
                ['code', '```\nstop()\n```', ['```', '', 'stop()\n', '```', ''], 50],
            ]);
            check('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n', [
                ['table', '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n', ['| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n', '\n'], 0],
                ['table', '| Cell11 | Cell12\n| Cell21 | Cell22\n', ['| Cell11 | Cell12\n| Cell21 | Cell22\n', ''], 68],
            ]);
        },
    });
})($ || ($ = {}));
//mol/syntax2/md/md.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'null by default'() {
            const key = String(Math.random());
            $mol_assert_equal($mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $mol_state_session.value(key, '$mol_state_session_test');
            $mol_assert_equal($mol_state_session.value(key), '$mol_state_session_test');
            $mol_state_session.value(key, null);
            $mol_assert_equal($mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//mol/state/session/session.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'return result without errors'() {
            $mol_assert_equal($mol_try(() => false), false);
        },
    });
})($ || ($ = {}));
//mol/try/try.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'strong'() {
            const res = [...'**text**'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.strong, '**text**');
            $mol_assert_equal(res.marker, '**');
            $mol_assert_equal(res.content, 'text');
        },
        'emphasis'() {
            const res = [...'//text//'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.emphasis, '//text//');
            $mol_assert_equal(res.marker, '//');
            $mol_assert_equal(res.content, 'text');
        },
        'insertion'() {
            const res = [...'++text++'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.insertion, '++text++');
            $mol_assert_equal(res.marker, '++');
            $mol_assert_equal(res.content, 'text');
        },
        'deletion'() {
            const res = [...'--text--'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.deletion, '--text--');
            $mol_assert_equal(res.marker, '--');
            $mol_assert_equal(res.content, 'text');
        },
        'code'() {
            const res = [...';;text;;'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.code, ';;text;;');
            $mol_assert_equal(res.marker, ';;');
            $mol_assert_equal(res.content, 'text');
        },
        'nested simple'() {
            const res = [...'**//foo//bar**'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.strong, '**//foo//bar**');
            $mol_assert_equal(res.marker, '**');
            $mol_assert_equal(res.content, '//foo//bar');
        },
        'nested simple overlap'() {
            const res = [...'**//foo**bar//'.matchAll($hyoo_marked_line)];
            $mol_assert_equal(res[0].groups.strong, '**//foo**');
            $mol_assert_equal(res[0].groups.marker, '**');
            $mol_assert_equal(res[0].groups.content, '//foo');
            $mol_assert_equal(res[1][0], 'bar//');
        },
        'link'() {
            const res = [...'\\\\text\\url\\\\'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.link, '\\\\text\\url\\\\');
            $mol_assert_equal(res.marker, '\\\\');
            $mol_assert_equal(res.content, 'text');
            $mol_assert_equal(res.uri, 'url');
        },
        'embed'() {
            const res = [...'""text\\url""'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.embed, '""text\\url""');
            $mol_assert_equal(res.marker, '""');
            $mol_assert_equal(res.content, 'text');
            $mol_assert_equal(res.uri, 'url');
        },
        'link with embed'() {
            const res = [...'\\\\""text\\url1""\\url2\\\\'.matchAll($hyoo_marked_line)][0].groups;
            $mol_assert_equal(res.link, '\\\\""text\\url1""\\url2\\\\');
            $mol_assert_equal(res.marker, '\\\\');
            $mol_assert_equal(res.content, '""text\\url1""');
            $mol_assert_equal(res.uri, 'url2');
        },
    });
})($ || ($ = {}));
//hyoo/marked/line/line.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'header level 1'() {
            const res = [...`= text\n`.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.header, '= text\n');
            $mol_assert_equal(res.marker, '=');
            $mol_assert_equal(res.content, 'text');
        },
        'header level 6'() {
            const res = [...`====== text\n`.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.header, '====== text\n');
            $mol_assert_equal(res.marker, '======');
            $mol_assert_equal(res.content, 'text');
        },
        'header level too many'() {
            const res = [...`======= text\n`.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.paragraph, '======= text\n');
            $mol_assert_equal(res.content, '======= text');
        },
        'different blocks'() {
            const text = `
				= header
				paragraph
				= header
			`.replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)];
            $mol_assert_equal(res[0].groups.paragraph, '\n');
            $mol_assert_equal(res[0].groups.content, '');
            $mol_assert_equal(res[1].groups.header, '= header\n');
            $mol_assert_equal(res[1].groups.marker, '=');
            $mol_assert_equal(res[1].groups.content, 'header');
            $mol_assert_equal(res[2].groups.paragraph, 'paragraph\n');
            $mol_assert_equal(res[2].groups.content, 'paragraph');
            $mol_assert_equal(res[3].groups.header, '= header\n');
            $mol_assert_equal(res[3].groups.marker, '=');
            $mol_assert_equal(res[3].groups.content, 'header');
        },
        'plain list'() {
            const text = `
				- foo
				- bar
			`.slice(1).replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.list, '- foo\n- bar\n');
        },
        'nested lists'() {
            const text = `
				- foo
				  + bar
				- lol
			`.slice(1).replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.list, '- foo\n  + bar\n- lol\n');
        },
        'quote'() {
            const text = `
				" foo
				" bar
			`.slice(1).replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.quote, '" foo\n" bar\n');
        },
        'quote in list'() {
            const text = `
				- foo
				  " bar
				- lol
			`.slice(1).replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.list, '- foo\n  " bar\n- lol\n');
        },
        'table'() {
            const text = `
				! foo
				  ! bar
				! lol
				  ! 777
			`.slice(1).replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.table, '! foo\n  ! bar\n! lol\n  ! 777\n');
        },
        'script'() {
            const text = `
			    foo
			  ++bar
			  --lol
			  **777
			`.slice(1).replace(/^\t+/gm, '');
            const res = [...text.matchAll($hyoo_marked_flow)][0].groups;
            $mol_assert_equal(res.script, '    foo\n  ++bar\n  --lol\n  **777\n');
        },
    });
})($ || ($ = {}));
//hyoo/marked/flow/flow.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Special'() {
            $mol_assert_equal($mol_si_short(0), '0');
            $mol_assert_equal($mol_si_short(1 / 0), '∞');
            $mol_assert_equal($mol_si_short(-1 / 0), '-∞');
            $mol_assert_equal($mol_si_short(0 / 0), '∅');
        },
        'M'() {
            $mol_assert_equal($mol_si_short(0), '0');
            $mol_assert_equal($mol_si_short(0.999500), '1.00');
            $mol_assert_equal($mol_si_short(-0.999600), '-1.00');
            $mol_assert_equal($mol_si_short(999.4), '999');
            $mol_assert_equal($mol_si_short(-999.4), '-999');
        },
        'L'() {
            $mol_assert_equal($mol_si_short(999.5), '1.00k');
            $mol_assert_equal($mol_si_short(-999.5), '-1.00k');
            $mol_assert_equal($mol_si_short(999_400), '999k');
            $mol_assert_equal($mol_si_short(-999_400), '-999k');
        },
        'XL'() {
            $mol_assert_equal($mol_si_short(999_500), '1.00M');
            $mol_assert_equal($mol_si_short(-999_600), '-1.00M');
            $mol_assert_equal($mol_si_short(999_400_000), '999M');
            $mol_assert_equal($mol_si_short(-999_400_000), '-999M');
        },
        'S'() {
            $mol_assert_equal($mol_si_short(0.999400), '999m');
            $mol_assert_equal($mol_si_short(-0.999400), '-999m');
            $mol_assert_equal($mol_si_short(0.000_999_500), '1.00m');
            $mol_assert_equal($mol_si_short(-0.000_999_500), '-1.00m');
        },
        'XS'() {
            $mol_assert_equal($mol_si_short(0.000_999_400), '999µ');
            $mol_assert_equal($mol_si_short(-0.000_999_400), '-999µ');
            $mol_assert_equal($mol_si_short(0.000_000_999_600), '1.00µ');
            $mol_assert_equal($mol_si_short(-0.000_000_999_600), '-1.00µ');
        },
        'With unit'() {
            $mol_assert_equal($mol_si_short(0, 's'), '0 s');
            $mol_assert_equal($mol_si_short(1 / 0, 's'), '∞ s');
            $mol_assert_equal($mol_si_short(0 / 0, 's'), '∅ s');
            $mol_assert_equal($mol_si_short(123, 'Hz'), '123 Hz');
            $mol_assert_equal($mol_si_short(1234, 'g'), '1.23 kg');
        },
    });
})($ || ($ = {}));
//mol/si/short/short.test.ts
;
"use strict";
var $;
(function ($) {
    function create_sieve({ path = '', ids_tags }) {
        let bag = new $mol_tag_sieve;
        bag.ids_tags = () => ids_tags;
        if (path) {
            bag = path.split('/').reduce((bag, seg) => bag.select(seg), bag);
        }
        return bag;
    }
    function create_tests({ title, ids_tags, test_data }) {
        return Object.keys(test_data).reduce((acc, path) => {
            return {
                ...acc,
                [`${title} ${path}`]() {
                    const bag = create_sieve({ path, ids_tags });
                    $mol_assert_like(bag.tags(), test_data[path].tags);
                    $mol_assert_like(bag.ids(), test_data[path].ids);
                }
            };
        }, {});
    }
    $mol_test({
        ...create_tests({
            title: 'ony tag on level without ids',
            ids_tags: {
                button: ['widget'],
                card: ['widget'],
                some1: ['widget/layout'],
                some2: ['widget/layout'],
            },
            test_data: {
                '': {
                    tags: ['layout'],
                    ids: ['button', 'card'],
                },
                'layout': {
                    tags: [],
                    ids: ['some1', 'some2'],
                }
            }
        }),
        ...create_tests({
            title: 'select heroes',
            ids_tags: {
                thanos: [
                    'side/bad',
                    'universe/marvel',
                    'sex/male',
                ],
                locky: [
                    'side/bad',
                    'universe/marvel',
                    'sex/male',
                ],
                harley: [
                    'side/bad',
                    'universe/dc',
                    'sex/female',
                ],
                wonderwoman: [
                    'side/good',
                    'universe/dc',
                    'sex/female',
                ],
                hela: [
                    'side/bad',
                    'universe/marvel',
                    'sex/female',
                ],
            },
            test_data: {
                '': {
                    tags: ['side', 'universe', 'sex',],
                    ids: [],
                },
                'sex': {
                    tags: ['male', 'female',],
                    ids: [],
                },
                'sex/female': {
                    tags: ['side', 'universe',],
                    ids: [],
                },
                'sex/female/side': {
                    tags: ['bad'],
                    ids: ['wonderwoman'],
                },
                'sex/female/side/bad': {
                    tags: [],
                    ids: ['harley', 'hela'],
                },
            }
        })
    });
})($ || ($ = {}));
//mol/tag/sieve/sieve.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'simple sort'() {
            const list = ['abc', 'ac', 'ab'];
            list.sort($mol_compare_text());
            $mol_assert_equal(`${list}`, 'ab,abc,ac');
        },
        'sort ignoring spaces around'() {
            const list = [' a', '\tb', ' b'];
            list.sort($mol_compare_text());
            $mol_assert_equal(`${list}`, ' a,\tb, b');
        },
        'sort ignoring letter case'() {
            const list = ['A', 'B', 'a'];
            list.sort($mol_compare_text());
            $mol_assert_equal(`${list}`, 'A,a,B');
        },
        'sort with custom serializer'() {
            const list = ['abc', 'ab', 'ac'];
            list.sort($mol_compare_text(str => str.split('').reverse().join('')));
            $mol_assert_equal(`${list}`, 'ab,ac,abc');
        },
    });
})($ || ($ = {}));
//mol/compare/text/text.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'function'() {
            $mol_assert_not($mol_func_is_class(function () { }));
        },
        'generator'() {
            $mol_assert_not($mol_func_is_class(function* () { }));
        },
        'async'() {
            $mol_assert_not($mol_func_is_class(async function () { }));
        },
        'arrow'() {
            $mol_assert_not($mol_func_is_class(() => null));
        },
        'named class'() {
            $mol_assert_ok($mol_func_is_class(class Foo {
            }));
        },
        'unnamed class'() {
            $mol_assert_ok($mol_func_is_class(class {
            }));
        },
    });
})($ || ($ = {}));
//mol/func/is/class/class.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Cached field'($) {
            class App extends $mol_object2 {
                static $ = $;
                static low = 1;
                static get high() {
                    return this.low + 1;
                }
                static set high(next) {
                    this.low = next - 1;
                }
                static test() {
                    $mol_assert_equal(App.high, 2);
                    App.high = 3;
                    $mol_assert_equal(App.high, 3);
                }
            }
            __decorate([
                $mol_wire_field
            ], App, "low", void 0);
            __decorate([
                $mol_wire_field
            ], App, "high", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            App.test();
        },
    });
})($ || ($ = {}));
//mol/wire/field/field.test.ts
;
"use strict";
//mol/type/result/result.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'define as methods'() {
            const { foo, bar, lol } = $mol_wire_let({
                foo(next = 1) { return next; },
                bar() { return this.foo() + 1; },
                lol(next) { return this.foo(next); },
            });
            $mol_assert_equal(foo(), 1);
            $mol_assert_equal(bar(), 2);
            $mol_assert_equal(foo(5), 5);
            $mol_assert_equal(bar(), 6);
            $mol_assert_equal(lol(10), 10);
            $mol_assert_equal(bar(), 11);
        },
        'define as closures'() {
            const { foo, bar, lol } = $mol_wire_let({
                foo: (next = 1) => next,
                bar: () => foo() + 1,
                lol: (next) => foo(next),
            });
            $mol_assert_equal(foo(), 1);
            $mol_assert_equal(bar(), 2);
            $mol_assert_equal(foo(5), 5);
            $mol_assert_equal(bar(), 6);
            $mol_assert_equal(lol(10), 10);
            $mol_assert_equal(bar(), 11);
        },
    });
})($ || ($ = {}));
//mol/wire/let/let.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Watch one value'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static lucky() {
                    return this.set.has(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), false);
            App.set.add(666);
            $mol_assert_equal(App.lucky(), false);
            App.set.add(777);
            $mol_assert_equal(App.lucky(), true);
            App.set.delete(777);
            $mol_assert_equal(App.lucky(), false);
        },
        'Watch item channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static lucky() {
                    return this.set.item(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), false);
            App.set.item(666, true);
            $mol_assert_equal(App.lucky(), false);
            App.set.item(777, true);
            $mol_assert_equal(App.lucky(), true);
            App.set.item(777, false);
            $mol_assert_equal(App.lucky(), false);
        },
        'Watch size'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static size() {
                    return this.set.size;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "size", null);
            $mol_assert_equal(App.size(), 0);
            App.set.add(666);
            $mol_assert_equal(App.size(), 1);
            App.set.add(777);
            $mol_assert_equal(App.size(), 2);
            App.set.delete(777);
            $mol_assert_equal(App.size(), 1);
        },
        'Watch for-of'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static sum() {
                    let res = 0;
                    for (const val of this.set) {
                        res += val;
                    }
                    return res;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_equal(App.sum(), 0);
            App.set.add(111);
            $mol_assert_equal(App.sum(), 111);
            App.set.add(222);
            $mol_assert_equal(App.sum(), 333);
            App.set.delete(111);
            $mol_assert_equal(App.sum(), 222);
        },
        'Watch forEach'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static sum() {
                    let res = 0;
                    this.set.forEach(val => res += val);
                    return res;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_equal(App.sum(), 0);
            App.set.add(111);
            $mol_assert_equal(App.sum(), 111);
            App.set.add(222);
            $mol_assert_equal(App.sum(), 333);
            App.set.delete(111);
            $mol_assert_equal(App.sum(), 222);
        },
    });
})($ || ($ = {}));
//mol/wire/set/set.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Watch one value'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static lucky() {
                    return this.dict.get(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), undefined);
            App.dict.set(666, 6666);
            $mol_assert_equal(App.lucky(), undefined);
            App.dict.set(777, 7777);
            $mol_assert_equal(App.lucky(), 7777);
            App.dict.delete(777);
            $mol_assert_equal(App.lucky(), undefined);
        },
        'Watch item channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static lucky() {
                    return this.dict.item(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), null);
            App.dict.item(666, 6666);
            $mol_assert_equal(App.lucky(), null);
            App.dict.item(777, 7777);
            $mol_assert_equal(App.lucky(), 7777);
            App.dict.item(777, null);
            $mol_assert_equal(App.lucky(), null);
        },
        'Watch size'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static size() {
                    return this.dict.size;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "size", null);
            $mol_assert_equal(App.size(), 0);
            App.dict.set(666, 6666);
            $mol_assert_equal(App.size(), 1);
            App.dict.set(777, 7777);
            $mol_assert_equal(App.size(), 2);
            App.dict.delete(777);
            $mol_assert_equal(App.size(), 1);
        },
        'Watch for-of'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static sum() {
                    let keys = 0;
                    let vals = 0;
                    for (const [key, val] of this.dict) {
                        keys += key;
                        vals += val;
                    }
                    return [keys, vals];
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_like(App.sum(), [0, 0]);
            App.dict.set(111, 1111);
            $mol_assert_like(App.sum(), [111, 1111]);
            App.dict.set(222, 2222);
            $mol_assert_like(App.sum(), [333, 3333]);
            App.dict.delete(111);
            $mol_assert_like(App.sum(), [222, 2222]);
        },
        'Watch forEach'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static sum() {
                    let keys = 0;
                    let vals = 0;
                    this.dict.forEach((val, key) => {
                        keys += key;
                        vals += val;
                    });
                    return [keys, vals];
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_like(App.sum(), [0, 0]);
            App.dict.set(111, 1111);
            $mol_assert_like(App.sum(), [111, 1111]);
            App.dict.set(222, 2222);
            $mol_assert_like(App.sum(), [333, 3333]);
            App.dict.delete(111);
            $mol_assert_like(App.sum(), [222, 2222]);
        },
    });
})($ || ($ = {}));
//mol/wire/dict/dict.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'lazy calls'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 10);
            $mol_assert_ok(list instanceof Array);
            $mol_assert_equal(list.length, 10);
            $mol_assert_equal(list[-1], -1);
            $mol_assert_equal(list[0], 0);
            $mol_assert_equal(list[9], 9);
            $mol_assert_equal(list[9.5], undefined);
            $mol_assert_equal(list[10], 10);
            $mol_assert_equal(calls, 4);
        },
        'infinity list'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index));
            $mol_assert_equal(list.length, Number.POSITIVE_INFINITY);
            $mol_assert_equal(list[0], 0);
            $mol_assert_equal(list[4], 4);
            $mol_assert_equal(list[Number.MAX_SAFE_INTEGER], Number.MAX_SAFE_INTEGER);
            $mol_assert_equal(list[Number.POSITIVE_INFINITY], Number.POSITIVE_INFINITY);
            $mol_assert_equal(calls, 4);
        },
        'stringify'() {
            const list = $mol_range2(i => i, () => 5);
            $mol_assert_equal(list.toString(), '0,1,2,3,4');
            $mol_assert_equal(list.join(';'), '0;1;2;3;4');
        },
        'for-of'() {
            let log = '';
            for (let i of $mol_range2(i => i + 1, () => 5)) {
                log += i;
            }
            $mol_assert_equal(log, '12345');
        },
        'for-in'() {
            let log = '';
            for (let i in $mol_range2(i => i, () => 5)) {
                log += i;
            }
            $mol_assert_equal(log, '01234');
        },
        'forEach'() {
            let log = '';
            $mol_range2(i => i, () => 5).forEach(i => log += i);
            $mol_assert_equal(log, '01234');
        },
        'lazy concat'() {
            let calls1 = 0;
            let calls2 = 0;
            const list = $mol_range2(index => (++calls1, index), () => 5).concat([0, 1, 2, 3, 4], $mol_range2(index => (++calls2, index), () => 5));
            $mol_assert_ok(list instanceof Array);
            $mol_assert_equal(list.length, 15);
            $mol_assert_equal(list[0], 0);
            $mol_assert_equal(list[4], 4);
            $mol_assert_equal(list[5], 0);
            $mol_assert_equal(list[9], 4);
            $mol_assert_equal(list[10], 0);
            $mol_assert_equal(list[14], 4);
            $mol_assert_equal(list[15], 5);
            $mol_assert_equal(calls1, 2);
            $mol_assert_equal(calls2, 3);
        },
        'filter'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 10).filter(v => v % 2).slice(0, 3);
            $mol_assert_ok(list instanceof Array);
            $mol_assert_equal(list.length, 3);
            $mol_assert_equal(list[0], 1);
            $mol_assert_equal(list[2], 5);
            $mol_assert_equal(list[3], 7);
            $mol_assert_equal(calls, 10);
        },
        'reduce'() {
            let calls = 0;
            const list = $mol_range2().slice(1, 6);
            $mol_assert_equal(list.reduce((s, v) => s + v), 15);
            $mol_assert_equal(list.reduce((s, v) => s + v, 5), 20);
        },
        'lazy map'() {
            let calls1 = 0;
            let calls2 = 0;
            const source = $mol_range2(index => (++calls1, index), () => 5);
            const target = source.map((item, index, self) => {
                ++calls2;
                $mol_assert_equal(source, self);
                return index + 10;
            }, () => 5);
            $mol_assert_ok(target instanceof Array);
            $mol_assert_equal(target.length, 5);
            $mol_assert_equal(target[0], 10);
            $mol_assert_equal(target[4], 14);
            $mol_assert_equal(target[5], 15);
            $mol_assert_equal(calls1, 3);
            $mol_assert_equal(calls2, 3);
        },
        'lazy slice'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 10).slice(3, 7);
            $mol_assert_ok(list instanceof Array);
            $mol_assert_equal(list.length, 4);
            $mol_assert_equal(list[0], 3);
            $mol_assert_equal(list[3], 6);
            $mol_assert_equal(list[4], 7);
            $mol_assert_equal(calls, 3);
        },
        'lazy some'() {
            let calls = 0;
            $mol_assert_ok($mol_range2(index => (++calls, index), () => 5).some(v => v >= 2));
            $mol_assert_equal(calls, 3);
            $mol_assert_not($mol_range2(i => i, () => 0).some(v => true));
            $mol_assert_ok($mol_range2(i => i).some(v => v > 5));
        },
        'lazy every'() {
            let calls = 0;
            $mol_assert_not($mol_range2(index => (++calls, index), () => 5).every(v => v < 2));
            $mol_assert_equal(calls, 3);
            $mol_assert_ok($mol_range2(i => i, () => 0).every(v => false));
            $mol_assert_not($mol_range2(i => i).every(v => v < 5));
        },
        'lazyfy'() {
            let calls = 0;
            const list = new $mol_range2_array(...[0, 1, 2, 3, 4, 5]).map(i => (++calls, i + 10)).slice(2);
            $mol_assert_ok(list instanceof Array);
            $mol_assert_equal(list.length, 4);
            $mol_assert_equal(calls, 0);
            $mol_assert_equal(list[0], 12);
            $mol_assert_equal(list[3], 15);
            $mol_assert_equal(list[4], Number.NaN);
            $mol_assert_equal(calls, 3);
        },
        'prevent modification'() {
            const list = $mol_range2(i => i, () => 5);
            $mol_assert_fail(() => list.push(4), TypeError);
            $mol_assert_fail(() => list.pop(), TypeError);
            $mol_assert_fail(() => list.unshift(4), TypeError);
            $mol_assert_fail(() => list.shift(), TypeError);
            $mol_assert_fail(() => list.splice(1, 2), TypeError);
            $mol_assert_fail(() => list[1] = 2, TypeError);
            $mol_assert_equal(list.toString(), '0,1,2,3,4');
        }
    });
})($ || ($ = {}));
//mol/range2/range2.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_work = $mol_after_mock_timeout;
    });
})($ || ($ = {}));
//mol/after/work/work.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'span for same uri'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.span(4, 5, 8);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 4);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 8);
        },
        'span after of given position'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.after(11);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 7);
            $mol_assert_equal(child.length, 11);
        },
        'slice span - regular'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(1, 4);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 4);
            $mol_assert_equal(child.length, 3);
            const child2 = span.slice(2, 2);
            $mol_assert_equal(child2.col, 5);
            $mol_assert_equal(child2.length, 0);
        },
        'slice span - negative'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(-3, -1);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 2);
        },
        'slice span - out of range'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            $mol_assert_fail(() => span.slice(-1, 3));
            $mol_assert_fail(() => span.slice(1, 6));
            $mol_assert_fail(() => span.slice(1, 10));
        },
        'error handling'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const error = span.error('Some error\n');
            $mol_assert_equal(error.message, 'Some error\ntest.ts#1:3/4');
        }
    });
})($ || ($ = {}));
//mol/span/span.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'tree parsing'($) {
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids[1].type, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo\n\n\n").kids.length, 1);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids[1].value, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar \\pol\n").kids[0].kids[0].kids[0].value, "pol");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar\n\t\\pol\n\t\\men\n").kids[0].kids[0].kids[1].value, "men");
            $mol_assert_equal($.$mol_tree2_from_string('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'Too many tabs'($) {
            const tree = `
				foo
						bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too many tabs\ntest#3:1/6\n!!!!!!\n\t\t\t\t\t\tbar');
        },
        'Too few tabs'($) {
            const tree = `
					foo
				bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too few tabs\ntest#3:1/4\n!!!!\n\t\t\t\tbar');
        },
        'Wrong nodes separator at start'($) {
            const tree = `foo\n \tbar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#2:1/2\n!!\n \tbar');
        },
        'Wrong nodes separator in the middle'($) {
            const tree = `foo  bar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#1:5/1\n    !\nfoo  bar');
        },
        'Unexpected EOF, LF required'($) {
            const tree = `	foo`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Unexpected EOF, LF required\ntest#1:5/1\n	   !\n	foo');
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
            const res = $$.$mol_tree2_from_string(tree, 'test');
            $mol_assert_like(errors, [
                'Wrong nodes separator\ntest#1:5/1\n    !\nfoo  bar',
                'Unexpected EOF, LF required\ntest#1:9/1\n        !\nfoo  bar',
            ]);
            $mol_assert_equal(res.toString(), 'foo bar\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/from/string/string.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'inserting'($) {
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), 'a', 'b', 'c')
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), 'a', 'b', 'c', 'd')
                .toString(), 'a b c x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), 0, 0, 0)
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), 0, 0, 0, 0)
                .toString(), 'a b \\\n\tx\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), null, null, null)
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), null, null, null, null)
                .toString(), 'a b \\\n\tx\n');
        },
        'deleting'($) {
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert(null, 'a', 'b', 'c')
                .toString(), 'a b\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert(null, 0, 0, 0)
                .toString(), 'a b\n');
        },
        'hack'($) {
            const res = $.$mol_tree2_from_string(`foo bar xxx\n`)
                .hack({
                'bar': (input, belt) => [input.struct('777', input.hack(belt))],
            });
            $mol_assert_equal(res.toString(), 'foo 777 xxx\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/tree2.test.ts
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
	`, 'reference');
        $mol_test({
            'props'($) {
                const mod = $.$mol_tree2_from_string(src, '/mol/view/tree2/class/props.test.ts');
                const result = $.$mol_view_tree2_class_props(mod.kids[0]).join('');
                $mol_assert_equal(result, dest.toString());
            }
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/view/tree2/class/props.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//mol/base64/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_web(base64Str) {
        return new Uint8Array($mol_dom_context.atob(base64Str).split('').map(c => c.charCodeAt(0)));
    }
    $.$mol_base64_decode_web = $mol_base64_decode_web;
    $.$mol_base64_decode = $mol_base64_decode_web;
})($ || ($ = {}));
//mol/base64/decode/decode.web.ts
;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    $mol_test({
        'base64 decode string'() {
            $mol_assert_like($mol_base64_decode('SGVsbG8sIM6nzqjOqdCr'), new TextEncoder().encode('Hello, ΧΨΩЫ'));
        },
        'base64 decode binary'() {
            $mol_assert_like($mol_base64_decode('GgoASUh42g=='), png);
        },
    });
})($ || ($ = {}));
//mol/base64/decode/decode.test.ts
;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/simple.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3Rfc2ltcGxlICRtb2xfdmlldwoJc3RyIFxzb21lCgludW0gMTIzMTcKCWJvb2wgdHJ1ZQoJbnVsIG51bGwKCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCW11bHRpX3N0ciBcCgkJXG9uZQoJCVx0d28KCXNhbWU/dmFsIFwKCS0gY29tbWVudGVkX25vZGUgLwoJCTw9IE5vdGVzX3BhZ2VfdGl0bGUhdGFnCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/simple.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X3NpbXBsZSBleHRlbmRzICRtb2xfdmlldyB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHN0ciBcc29tZQoJCSAqIGBgYAoJCSAqLwoJCXN0cigpIHsKCQkJcmV0dXJuICJzb21lIgoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbnVtIDEyMzE3CgkJICogYGBgCgkJICovCgkJbnVtKCkgewoJCQlyZXR1cm4gMTIzMTcKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGJvb2wgdHJ1ZQoJCSAqIGBgYAoJCSAqLwoJCWJvb2woKSB7CgkJCXJldHVybiB0cnVlCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBudWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCW51bCgpIHsKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlCgkJICogYGBgCgkJICovCgkJbG9jYWxpemVkKCkgewoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9zaW1wbGVfbG9jYWxpemVkJyApCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBtdWx0aV9zdHIgXAoJCSAqIAlcb25lCgkJICogCVx0d28KCQkgKiBgYGAKCQkgKi8KCQltdWx0aV9zdHIoKSB7CgkJCXJldHVybiAib25lXG50d28iCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzYW1lP3ZhbCBcCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXNhbWUodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsIGFzIG5ldmVyCgkJCXJldHVybiAiIgoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/array.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2FycmF5IGV4dGVuZHMgJG1vbF92aWV3IHsKCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogdHlwZWQgL3N0cmluZwoJCSAqIAlcc29tZTEKCQkgKiAJXHNvbWUyCgkJICogYGBgCgkJICovCgkJdHlwZWQoKSB7CgkJCXJldHVybiBbCgkJCQkic29tZTEiLAoJCQkJInNvbWUyIgoJCQldIGFzIHJlYWRvbmx5IHN0cmluZ1tdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjb25zdCAvY29uc3QKCQkgKiAJXHNvbWUxCgkJICogCVxzb21lMgoJCSAqIGBgYAoJCSAqLwoJCWNvbnN0KCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUxIiwKCQkJCSJzb21lMiIKCQkJXSBhcyBjb25zdAoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc3VwZXJfcHJvcCAvCgkJICogCVxzb21lMQoJCSAqIAleCgkJICogCVxzb21lMgoJCSAqIAleIHRlc3QKCQkgKiBgYGAKCQkgKi8KCQlzdXBlcl9wcm9wKCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUxIiwKCQkJCS4uLnN1cGVyLnN1cGVyX3Byb3AoKSwKCQkJCSJzb21lMiIsCgkJCQkuLi50aGlzLnRlc3QoKQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzaW1wbGUgLwoJCSAqIAlcc29tZQoJCSAqIAkxMjMxNwoJCSAqIAl0cnVlCgkJICogCW51bGwKCQkgKiBgYGAKCQkgKi8KCQlzaW1wbGUoKSB7CgkJCXJldHVybiBbCgkJCQkic29tZSIsCgkJCQkxMjMxNywKCQkJCXRydWUsCgkJCQludWxsIGFzIGFueQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBhcnIgL3JlYWRvbmx5KG51bWJlcilbXQoJCSAqIGBgYAoJCSAqLwoJCWFycigpIHsKCQkJcmV0dXJuIFsKCQkJXSBhcyByZWFkb25seSAocmVhZG9ubHkobnVtYmVyKVtdKVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjb21wbGV4IC8KCQkgKiAJLwoJCSAqIAkJXHRlc3QxCgkJICogCQlcdGVzdDIKCQkgKiAJKgoJCSAqIAkJc3RyIFxzb21lCgkJICogCQludWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCWNvbXBsZXgoKSB7CgkJCXJldHVybiBbCgkJCQlbCgkJCQkJInRlc3QxIiwKCQkJCQkidGVzdDIiCgkJCQldIGFzIHJlYWRvbmx5IGFueVtdLAoJCQkJewoJCQkJCXN0cjogInNvbWUiLAoJCQkJCW51bDogbnVsbCBhcyBhbnkKCQkJCX0KCQkJXSBhcyByZWFkb25seSBhbnlbXQoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/array.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYXJyYXkgJG1vbF92aWV3Cgl0eXBlZCAvc3RyaW5nCgkJXHNvbWUxCgkJXHNvbWUyCgljb25zdCAvY29uc3QKCQlcc29tZTEKCQlcc29tZTIKCXN1cGVyX3Byb3AgLwoJCVxzb21lMQoJCV4KCQlcc29tZTIKCQleIHRlc3QKCXNpbXBsZSAvCgkJXHNvbWUKCQkxMjMxNwoJCXRydWUKCQludWxsCglhcnIgL3JlYWRvbmx5KG51bWJlcilbXQoJY29tcGxleCAvCgkJLwoJCQlcdGVzdDEKCQkJXHRlc3QyCgkJKgoJCQlzdHIgXHNvbWUKCQkJbnVsIG51bGwK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/factory.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2ZhY3RvcnkgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBTaW1wbGUgJG1vbF92aWV3CgkJICogCXN0ciBcc29tZQoJCSAqIAludW0gMTIzMTcKCQkgKiAJYm9vbCB0cnVlCgkJICogCW51bCBudWxsCgkJICogCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJU2ltcGxlKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouc3RyID0gKCkgPT4gInNvbWUiCgkJCW9iai5udW0gPSAoKSA9PiAxMjMxNwoJCQlvYmouYm9vbCA9ICgpID0+IHRydWUKCQkJb2JqLm51bCA9ICgpID0+IG51bGwgYXMgYW55CgkJCW9iai5sb2NhbGl6ZWQgPSAoKSA9PiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2ZhY3RvcnlfU2ltcGxlX2xvY2FsaXplZCcgKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogQ29tcGxleCAkbW9sX3ZpZXcKCQkgKiAJYXJyIC8KCQkgKiAJCVx0ZXN0MQoJCSAqIAkJXHRlc3QyCgkJICogCWRpY3QgKgoJCSAqIAkJc3RyIFxzb21lMgoJCSAqIAkJbG9jYWxpemVkIEAgXGxvY2FsaXplZCB2YWx1ZQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlDb21wbGV4KCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouYXJyID0gKCkgPT4gWwoJCQkJInRlc3QxIiwKCQkJCSJ0ZXN0MiIKCQkJXSBhcyByZWFkb25seSBhbnlbXQoJCQlvYmouZGljdCA9ICgpID0+ICh7CgkJCQlzdHI6ICJzb21lMiIsCgkJCQlsb2NhbGl6ZWQ6IHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZmFjdG9yeV9Db21wbGV4X2RpY3RfbG9jYWxpemVkJyApCgkJCX0pCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBBcnIgJG1vbF92ZWN0b3JfMmQgLwoJCSAqIAk8PSB2aWV3cG9ydF94CgkJICogCTw9IHZpZXdwb3J0X3kKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJQXJyKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmVjdG9yXzJkKAoJCQkJdGhpcy52aWV3cG9ydF94KCksCgkJCQl0aGlzLnZpZXdwb3J0X3koKQoJCQkpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB2aWV3cG9ydF94ICRtb2xfdmVjdG9yX3JhbmdlIC8KCQkgKiAJSW5maW5pdHkKCQkgKiAJLUluZmluaXR5CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXZpZXdwb3J0X3goKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92ZWN0b3JfcmFuZ2UoCgkJCQlJbmZpbml0eSwKCQkJCS1JbmZpbml0eQoJCQkpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB2aWV3cG9ydF95ICRtb2xfdmVjdG9yX3JhbmdlIC8KCQkgKiAJSW5maW5pdHkKCQkgKiAJLUluZmluaXR5CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXZpZXdwb3J0X3koKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92ZWN0b3JfcmFuZ2UoCgkJCQlJbmZpbml0eSwKCQkJCS1JbmZpbml0eQoJCQkpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJfQoJCn0KCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/factory.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZmFjdG9yeSAkbW9sX3ZpZXcKCVNpbXBsZSAkbW9sX3ZpZXcKCQlzdHIgXHNvbWUKCQludW0gMTIzMTcKCQlib29sIHRydWUKCQludWwgbnVsbAoJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCUNvbXBsZXggJG1vbF92aWV3CgkJYXJyIC8KCQkJXHRlc3QxCgkJCVx0ZXN0MgoJCWRpY3QgKgoJCQlzdHIgXHNvbWUyCgkJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCUFyciAkbW9sX3ZlY3Rvcl8yZCAvCgkJPD0gdmlld3BvcnRfeCAkbW9sX3ZlY3Rvcl9yYW5nZSAvCgkJCUluZmluaXR5CgkJCS1JbmZpbml0eQoJCTw9IHZpZXdwb3J0X3kgJG1vbF92ZWN0b3JfcmFuZ2UgLwoJCQlJbmZpbml0eQoJCQktSW5maW5pdHkK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/dictionary.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2RpY3Rpb25hcnkgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzdXBlcl9wcm9wICoKCQkgKiAJc3RyIFxzb21lCgkJICogCV4KCQkgKiAJc3RyMiBcc29tZQoJCSAqIAleIHRlc3QKCQkgKiBgYGAKCQkgKi8KCQlzdXBlcl9wcm9wKCkgewoJCQlyZXR1cm4gewoJCQkJc3RyOiAic29tZSIsCgkJCQkuLi5zdXBlci5zdXBlcl9wcm9wKCksCgkJCQlzdHIyOiAic29tZSIsCgkJCQkuLi50aGlzLnRlc3QoKQoJCQl9CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzaW1wbGUgKgoJCSAqIAkkc3RyIFxzb21lCgkJICogCW4tdW0gMTIzMTcKCQkgKiAJYm9vbCB0cnVlCgkJICogCW51bCBudWxsCgkJICogCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUxCgkJICogYGBgCgkJICovCgkJc2ltcGxlKCkgewoJCQlyZXR1cm4gewoJCQkJIiRzdHIiOiAic29tZSIsCgkJCQkibi11bSI6IDEyMzE3LAoJCQkJYm9vbDogdHJ1ZSwKCQkJCW51bDogbnVsbCBhcyBhbnksCgkJCQlsb2NhbGl6ZWQ6IHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZGljdGlvbmFyeV9zaW1wbGVfbG9jYWxpemVkJyApCgkJCX0KCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNvbXBsZXggKgoJCSAqIAlhcnIgLwoJCSAqIAkJXHRlc3QxCgkJICogCQlcdGVzdDIKCQkgKiAJY2hpbGQgKgoJCSAqIAkJc3RyIFxzb21lCgkJICogCQludW0gMTIzMTcKCQkgKiAJCWJvb2wgdHJ1ZQoJCSAqIAkJbnVsIG51bGwKCQkgKiAJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUyCgkJICogYGBgCgkJICovCgkJY29tcGxleCgpIHsKCQkJcmV0dXJuIHsKCQkJCWFycjogWwoJCQkJCSJ0ZXN0MSIsCgkJCQkJInRlc3QyIgoJCQkJXSBhcyByZWFkb25seSBhbnlbXSwKCQkJCWNoaWxkOiB7CgkJCQkJc3RyOiAic29tZSIsCgkJCQkJbnVtOiAxMjMxNywKCQkJCQlib29sOiB0cnVlLAoJCQkJCW51bDogbnVsbCBhcyBhbnksCgkJCQkJbG9jYWxpemVkOiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2RpY3Rpb25hcnlfY29tcGxleF9jaGlsZF9sb2NhbGl6ZWQnICkKCQkJCX0KCQkJfQoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/dictionary.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZGljdGlvbmFyeSAkbW9sX3ZpZXcKCXN1cGVyX3Byb3AgKgoJCXN0ciBcc29tZQoJCV4KCQlzdHIyIFxzb21lCgkJXiB0ZXN0CglzaW1wbGUgKgoJCSRzdHIgXHNvbWUKCQluLXVtIDEyMzE3CgkJYm9vbCB0cnVlCgkJbnVsIG51bGwKCQlsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlMQoJY29tcGxleCAqCgkJYXJyIC8KCQkJXHRlc3QxCgkJCVx0ZXN0MgoJCWNoaWxkICoKCQkJc3RyIFxzb21lCgkJCW51bSAxMjMxNwoJCQlib29sIHRydWUKCQkJbnVsIG51bGwKCQkJbG9jYWxpemVkIEAgXGxvY2FsaXplZCB2YWx1ZTIK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/multiple_class.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X211bHRpcGxlX2NsYXNzX2EgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzdHIgXHNvbWUKCQkgKiBgYGAKCQkgKi8KCQlzdHIoKSB7CgkJCXJldHVybiAic29tZSIKCQl9Cgl9CgkKCWV4cG9ydCBjbGFzcyAkbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9tdWx0aXBsZV9jbGFzc19iIGV4dGVuZHMgJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYSB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHN0ciBcc29tZTIKCQkgKiBgYGAKCQkgKi8KCQlzdHIoKSB7CgkJCXJldHVybiAic29tZTIiCgkJfQoJfQoJCn0KCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/multiple_class.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYSAkbW9sX3ZpZXcKCXN0ciBcc29tZQoKJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYiAkbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9tdWx0aXBsZV9jbGFzc19hCglzdHIgXHNvbWUyCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/left.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9sZWZ0ICRtb2xfdmlldwoJZGVmYXVsdCA8PSBkZWZhdWx0X293bmVyIFx0ZXN0CgllbXB0eSA8PSBlbXB0eV9vd25lcgoJaW5kZXhlZCFrZXkgPD0gaW5kZXhlZF9vd25lciFrZXkKCWluZGV4ZWRfZGVmYXVsdCFrZXkgPD0gaW5kZXhlZF9kZWZhdWx0X293bmVyIWtleSBudWxsCgljbGFzcyA8PSBjbGFzc19vd25lciAkbW9sX3ZpZXcKCXR3aWNlIG51bGwKCXdyaXRhYmxlIDw9IHdyaXRhYmxlX293bmVyP3ZhbCBcCgljbGFzc19pbmRleGVkIWtleSA8PSBjbGFzc19pbmRleGVkX293bmVyIWtleSAkbW9sX3ZpZXcKCQl0aXRsZSBAIFxzb21lMQoJCXNhbWUgPD0gc2FtZT92YWwgXAoJCXNvbWUgPD0gdHdpY2UKCQlsb2NhbGl6ZWQgPD0gbG9jYWxpemVkX293bmVyIWtleSBAIFxzb21lMQoJCWNoYWluIDw9IGNoYWluMSA8PSBjaGFpbjIgbnVsbAoJYXJyIC8KCQk8PSBEZXRhaWxfbGlzdCAkbW9sX2xpc3QKCQkJcm93cyA8PSBtYWluX2NvbnRlbnQgLwoJCSoKCQkJbG9jIDw9IGxvY19vdXRlciBAIFx0ZXN0IGxvY2FsaXplCgkJKgoJCQlsb2MgPD0gbG9jX291dGVyIEAgXHRlc3QgbG9jYWxpemUKCXNhbWUyIEAgXFNvbWUKCVNhbWUKCQk8PSBTdWIgJG1vbF92aWV3CgkJCXNhbWUgPD0gc2FtZTIgLQo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/left.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdCBleHRlbmRzICRtb2xfdmlldyB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGRlZmF1bHQgPD0gZGVmYXVsdF9vd25lcgoJCSAqIGBgYAoJCSAqLwoJCWRlZmF1bHQoKSB7CgkJCXJldHVybiB0aGlzLmRlZmF1bHRfb3duZXIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogZW1wdHkgPD0gZW1wdHlfb3duZXIKCQkgKiBgYGAKCQkgKi8KCQllbXB0eSgpIHsKCQkJcmV0dXJuIHRoaXMuZW1wdHlfb3duZXIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZCogPD0gaW5kZXhlZF9vd25lcioKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkKGlkOiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuaW5kZXhlZF9vd25lcihpZCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfZGVmYXVsdCogPD0gaW5kZXhlZF9kZWZhdWx0X293bmVyKgoJCSAqIGBgYAoJCSAqLwoJCWluZGV4ZWRfZGVmYXVsdChpZDogYW55KSB7CgkJCXJldHVybiB0aGlzLmluZGV4ZWRfZGVmYXVsdF9vd25lcihpZCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzIDw9IGNsYXNzX293bmVyCgkJICogYGBgCgkJICovCgkJY2xhc3MoKSB7CgkJCXJldHVybiB0aGlzLmNsYXNzX293bmVyKCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHR3aWNlIG51bGwKCQkgKiBgYGAKCQkgKi8KCQl0d2ljZSgpIHsKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB3cml0YWJsZSA8PSB3cml0YWJsZV9vd25lcj92YWwKCQkgKiBgYGAKCQkgKi8KCQl3cml0YWJsZSgpIHsKCQkJcmV0dXJuIHRoaXMud3JpdGFibGVfb3duZXIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3NfaW5kZXhlZCogPD0gY2xhc3NfaW5kZXhlZF9vd25lcioKCQkgKiBgYGAKCQkgKi8KCQljbGFzc19pbmRleGVkKGlkOiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuY2xhc3NfaW5kZXhlZF9vd25lcihpZCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGFyciAvCgkJICogCTw9IERldGFpbF9saXN0CgkJICogCSogbG9jIDw9IGxvY19vdXRlcgoJCSAqIAkqIGxvYyA8PSBsb2Nfb3V0ZXIKCQkgKiBgYGAKCQkgKi8KCQlhcnIoKSB7CgkJCXJldHVybiBbCgkJCQl0aGlzLkRldGFpbF9saXN0KCksCgkJCQl7CgkJCQkJbG9jOiB0aGlzLmxvY19vdXRlcigpCgkJCQl9LAoJCQkJewoJCQkJCWxvYzogdGhpcy5sb2Nfb3V0ZXIoKQoJCQkJfQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzYW1lMiBAIFxTb21lCgkJICogYGBgCgkJICovCgkJc2FtZTIoKSB7CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdF9zYW1lMicgKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogU2FtZSA8PSBTdWIKCQkgKiBgYGAKCQkgKi8KCQlTYW1lKCkgewoJCQlyZXR1cm4gdGhpcy5TdWIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogZGVmYXVsdF9vd25lciBcdGVzdAoJCSAqIGBgYAoJCSAqLwoJCWRlZmF1bHRfb3duZXIoKSB7CgkJCXJldHVybiAidGVzdCIKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfZGVmYXVsdF9vd25lciogbnVsbAoJCSAqIGBgYAoJCSAqLwoJCWluZGV4ZWRfZGVmYXVsdF9vd25lcihpZDogYW55KSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3Nfb3duZXIgJG1vbF92aWV3CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWNsYXNzX293bmVyKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB3cml0YWJsZV9vd25lcj92YWwgXAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQl3cml0YWJsZV9vd25lcih2YWw/OiBhbnkpIHsKCQkJaWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHJldHVybiB2YWwgYXMgbmV2ZXIKCQkJcmV0dXJuICIiCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzYW1lP3ZhbCBcCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXNhbWUodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsIGFzIG5ldmVyCgkJCXJldHVybiAiIgoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbG9jYWxpemVkX293bmVyKiBAIFxzb21lMQoJCSAqIGBgYAoJCSAqLwoJCWxvY2FsaXplZF9vd25lcihpZDogYW55KSB7CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdF9sb2NhbGl6ZWRfb3duZXInICkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNoYWluMiBudWxsCgkJICogYGBgCgkJICovCgkJY2hhaW4yKCkgewoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNoYWluMSA8PSBjaGFpbjIKCQkgKiBgYGAKCQkgKi8KCQljaGFpbjEoKSB7CgkJCXJldHVybiB0aGlzLmNoYWluMigpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc19pbmRleGVkX293bmVyKiAkbW9sX3ZpZXcKCQkgKiAJdGl0bGUgQCBcc29tZTEKCQkgKiAJc2FtZSA8PSBzYW1lP3ZhbAoJCSAqIAlzb21lIDw9IHR3aWNlCgkJICogCWxvY2FsaXplZCA8PSBsb2NhbGl6ZWRfb3duZXIqCgkJICogCWNoYWluIDw9IGNoYWluMQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW1fa2V5CgkJY2xhc3NfaW5kZXhlZF9vd25lcihpZDogYW55KSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCW9iai50aXRsZSA9ICgpID0+IHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9sZWZ0X2NsYXNzX2luZGV4ZWRfb3duZXJfdGl0bGUnICkKCQkJb2JqLnNhbWUgPSAoKSA9PiB0aGlzLnNhbWUoKQoJCQlvYmouc29tZSA9ICgpID0+IHRoaXMudHdpY2UoKQoJCQlvYmoubG9jYWxpemVkID0gKCkgPT4gdGhpcy5sb2NhbGl6ZWRfb3duZXIoaWQpCgkJCW9iai5jaGFpbiA9ICgpID0+IHRoaXMuY2hhaW4xKCkKCQkJCgkJCXJldHVybiBvYmoKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIG1haW5fY29udGVudCAvCgkJICogYGBgCgkJICovCgkJbWFpbl9jb250ZW50KCkgewoJCQlyZXR1cm4gWwoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBEZXRhaWxfbGlzdCAkbW9sX2xpc3Qgcm93cyA8PSBtYWluX2NvbnRlbnQKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJRGV0YWlsX2xpc3QoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF9saXN0KCkKCQkJCgkJCW9iai5yb3dzID0gKCkgPT4gdGhpcy5tYWluX2NvbnRlbnQoKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbG9jX291dGVyIEAgXHRlc3QgbG9jYWxpemUKCQkgKiBgYGAKCQkgKi8KCQlsb2Nfb3V0ZXIoKSB7CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdF9sb2Nfb3V0ZXInICkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIFN1YiAkbW9sX3ZpZXcgc2FtZSA8PSBzYW1lMgoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlTdWIoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCW9iai5zYW1lID0gKCkgPT4gdGhpcy5zYW1lMigpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJfQoJCn0KCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/right.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9yaWdodCAkbW9sX3ZpZXcKCUNscyAkbW9sX3ZpZXcKCQlpbm5lciA9PiBvdXRlcgoJCXdyaXRhYmxlP3ZhbCA9PiB3cml0YWJsZV9vdXRlcj92YWwKCQlpbmRleGVkIWtleSA9PiBpbmRleGVkX291dGVyIWtleQoJCWluZGV4ZWRfd3JpdGFibGUha2V5P3ZhbCA9PiBpbmRleGVkX3dyaXRhYmxlX291dGVyIWtleT92YWwKCXEgPD0gQ2xzMiAkbW9sX3ZpZXcKCQlpbm5lciA9PiBvdXRlclEKCUluZGV4ZWQhaW5kZXggJG1vbF92aWV3CgkJVGl0bGUgPT4gT3V0ZXJfdGl0bGUhaW5kZXgK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/right.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfcmlnaHQgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBvdXRlcgoJCSAqIGBgYAoJCSAqLwoJCW91dGVyKCkgewoJCQlyZXR1cm4gdGhpcy5DbHMoKS5pbm5lcigpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB3cml0YWJsZV9vdXRlcj92YWwKCQkgKiBgYGAKCQkgKi8KCQl3cml0YWJsZV9vdXRlcih2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuQ2xzKCkud3JpdGFibGUodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZF9vdXRlcioKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkX291dGVyKGlkOiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuQ2xzKCkuaW5kZXhlZChpZCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfd3JpdGFibGVfb3V0ZXIqP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCWluZGV4ZWRfd3JpdGFibGVfb3V0ZXIoaWQ6IGFueSwgdmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLkNscygpLmluZGV4ZWRfd3JpdGFibGUoaWQsIHZhbCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIENscyAkbW9sX3ZpZXcKCQkgKiAJaW5uZXIgPT4gb3V0ZXIKCQkgKiAJd3JpdGFibGU/dmFsID0+IHdyaXRhYmxlX291dGVyP3ZhbAoJCSAqIAlpbmRleGVkKiA9PiBpbmRleGVkX291dGVyKgoJCSAqIAlpbmRleGVkX3dyaXRhYmxlKj92YWwgPT4gaW5kZXhlZF93cml0YWJsZV9vdXRlcio/dmFsCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCUNscygpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogcSA8PSBDbHMyCgkJICogYGBgCgkJICovCgkJcSgpIHsKCQkJcmV0dXJuIHRoaXMuQ2xzMigpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBPdXRlcl90aXRsZSoKCQkgKiBgYGAKCQkgKi8KCQlPdXRlcl90aXRsZShpZDogYW55KSB7CgkJCXJldHVybiB0aGlzLkluZGV4ZWQoaWQpLlRpdGxlKCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIEluZGV4ZWQqICRtb2xfdmlldyBUaXRsZSA9PiBPdXRlcl90aXRsZSoKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtX2tleQoJCUluZGV4ZWQoaWQ6IGFueSkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBvdXRlclEKCQkgKiBgYGAKCQkgKi8KCQlvdXRlclEoKSB7CgkJCXJldHVybiB0aGlzLkNsczIoKS5pbm5lcigpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBDbHMyICRtb2xfdmlldyBpbm5lciA9PiBvdXRlclEKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJQ2xzMigpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/both.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9ib3RoICRtb2xfdmlldwoJd3JpdGFibGU/dmFsIDw9PiB3cml0YWJsZV9vd25lcj92YWwKCXdyaXRhYmxlX2RlZmF1bHQ/dmFsIDw9PiB3cml0YWJsZV9kZWZhdWx0X293bmVyP3ZhbCBudWxsCgljbGFzcz92YWwgPD0+IGNsYXNzX293bmVyP3ZhbCAkbW9sX3ZpZXcKCWluZGV4ZWQha2V5P3ZhbCA8PT4gaW5kZXhlZF9vd25lciFrZXk/dmFsIG51bGwKCXR3aWNlIG51bGwKCWNsYXNzX2luZGV4ZWQha2V5P3ZhbCAkbW9sX3ZpZXcKCQlleHBhbmRlZCA8PT4gY2VsbF9leHBhbmRlZCFrZXk/dmFsCgljbGFzc193cml0YWJsZT92YWwgPD0+IGNsYXNzX3dyaXRhYmxlX293bmVyP3ZhbCAkbW9sX3ZpZXcKCQlzb21lP3ZhbCA8PT4gdHdpY2U/dmFsCgkJbG9jYWxpemVkP3ZhbCA8PT4gbG9jYWxpemVkX293bmVyP3ZhbCBAIFxzb21lMQoJCWNoYWluP3YgPD0+IGNoYWluMT92IDw9PiBjaGFpbjI/diBudWxsCglhcnIgLwoJCSoKCQkJbG9jP3YgPD0+IGxvY19vdXRlcj92IEAgXHRlc3QgbG9jYWxpemUKCQkqCgkJCWxvYz92IDw9PiBsb2Nfb3V0ZXI/diBAIFx0ZXN0IGxvY2FsaXplCglzd2lwZV90b19sZWZ0P2V2ZW50IDw9PiBldmVudF9uZXh0P2V2ZW50IG51bGwKCWV2ZW50X2NhdGNoP3ZhbCA8PT4gZXZlbnRfbmV4dD92YWwgbnVsbAo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/both.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfYm90aCBleHRlbmRzICRtb2xfdmlldyB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlP3ZhbCA8PT4gd3JpdGFibGVfb3duZXI/dmFsCgkJICogYGBgCgkJICovCgkJd3JpdGFibGUodmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLndyaXRhYmxlX293bmVyKHZhbCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlX2RlZmF1bHQ/dmFsIDw9PiB3cml0YWJsZV9kZWZhdWx0X293bmVyP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCXdyaXRhYmxlX2RlZmF1bHQodmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLndyaXRhYmxlX2RlZmF1bHRfb3duZXIodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3M/dmFsIDw9PiBjbGFzc19vd25lcj92YWwKCQkgKiBgYGAKCQkgKi8KCQljbGFzcyh2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuY2xhc3Nfb3duZXIodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZCo/dmFsIDw9PiBpbmRleGVkX293bmVyKj92YWwKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkKGlkOiBhbnksIHZhbD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5pbmRleGVkX293bmVyKGlkLCB2YWwpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB0d2ljZSBudWxsCgkJICogYGBgCgkJICovCgkJdHdpY2UoKSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3NfaW5kZXhlZCo/dmFsICRtb2xfdmlldyBleHBhbmRlZCA8PT4gY2VsbF9leHBhbmRlZCo/dmFsCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbV9rZXkKCQljbGFzc19pbmRleGVkKGlkOiBhbnksIHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbCBhcyBuZXZlcgoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouZXhwYW5kZWQgPSAoKSA9PiB0aGlzLmNlbGxfZXhwYW5kZWQoaWQsIHZhbCkKCQkJCgkJCXJldHVybiBvYmoKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzX3dyaXRhYmxlP3ZhbCA8PT4gY2xhc3Nfd3JpdGFibGVfb3duZXI/dmFsCgkJICogYGBgCgkJICovCgkJY2xhc3Nfd3JpdGFibGUodmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLmNsYXNzX3dyaXRhYmxlX293bmVyKHZhbCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGFyciAvCgkJICogCSogbG9jP3YgPD0+IGxvY19vdXRlcj92CgkJICogCSogbG9jP3YgPD0+IGxvY19vdXRlcj92CgkJICogYGBgCgkJICovCgkJYXJyKCkgewoJCQlyZXR1cm4gWwoJCQkJewoJCQkJCWxvYzogKHY/OiBhbnkpID0+IHRoaXMubG9jX291dGVyKHYpCgkJCQl9LAoJCQkJewoJCQkJCWxvYzogKHY/OiBhbnkpID0+IHRoaXMubG9jX291dGVyKHYpCgkJCQl9CgkJCV0gYXMgcmVhZG9ubHkgYW55W10KCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHN3aXBlX3RvX2xlZnQ/ZXZlbnQgPD0+IGV2ZW50X25leHQ/ZXZlbnQKCQkgKiBgYGAKCQkgKi8KCQlzd2lwZV90b19sZWZ0KGV2ZW50PzogYW55KSB7CgkJCXJldHVybiB0aGlzLmV2ZW50X25leHQoZXZlbnQpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBldmVudF9jYXRjaD92YWwgPD0+IGV2ZW50X25leHQ/dmFsCgkJICogYGBgCgkJICovCgkJZXZlbnRfY2F0Y2godmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLmV2ZW50X25leHQodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogd3JpdGFibGVfZGVmYXVsdF9vd25lcj92YWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQl3cml0YWJsZV9kZWZhdWx0X293bmVyKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbCBhcyBuZXZlcgoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzX293bmVyP3ZhbCAkbW9sX3ZpZXcKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJY2xhc3Nfb3duZXIodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsIGFzIG5ldmVyCgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCXJldHVybiBvYmoKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfb3duZXIqP3ZhbCBudWxsCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbV9rZXkKCQlpbmRleGVkX293bmVyKGlkOiBhbnksIHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbCBhcyBuZXZlcgoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGxvY2FsaXplZF9vd25lcj92YWwgQCBcc29tZTEKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJbG9jYWxpemVkX293bmVyKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbCBhcyBuZXZlcgoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2JvdGhfbG9jYWxpemVkX293bmVyJyApCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjaGFpbjI/diBudWxsCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWNoYWluMih2PzogYW55KSB7CgkJCWlmICggdiAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHYgYXMgbmV2ZXIKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjaGFpbjE/diA8PT4gY2hhaW4yP3YKCQkgKiBgYGAKCQkgKi8KCQljaGFpbjEodj86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5jaGFpbjIodikKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzX3dyaXRhYmxlX293bmVyP3ZhbCAkbW9sX3ZpZXcKCQkgKiAJc29tZT92YWwgPD0+IHR3aWNlP3ZhbAoJCSAqIAlsb2NhbGl6ZWQ/dmFsIDw9PiBsb2NhbGl6ZWRfb3duZXI/dmFsCgkJICogCWNoYWluP3YgPD0+IGNoYWluMT92CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWNsYXNzX3dyaXRhYmxlX293bmVyKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbCBhcyBuZXZlcgoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouc29tZSA9ICh2YWw/OiBhbnkpID0+IHRoaXMudHdpY2UodmFsKQoJCQlvYmoubG9jYWxpemVkID0gKHZhbD86IGFueSkgPT4gdGhpcy5sb2NhbGl6ZWRfb3duZXIodmFsKQoJCQlvYmouY2hhaW4gPSAodj86IGFueSkgPT4gdGhpcy5jaGFpbjEodikKCQkJCgkJCXJldHVybiBvYmoKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGxvY19vdXRlcj92IEAgXHRlc3QgbG9jYWxpemUKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJbG9jX291dGVyKHY/OiBhbnkpIHsKCQkJaWYgKCB2ICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdiBhcyBuZXZlcgoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2JvdGhfbG9jX291dGVyJyApCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBldmVudF9uZXh0P2V2ZW50IG51bGwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJZXZlbnRfbmV4dChldmVudD86IGFueSkgewoJCQlpZiAoIGV2ZW50ICE9PSB1bmRlZmluZWQgKSByZXR1cm4gZXZlbnQgYXMgbmV2ZXIKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJfQoJCn0KCg=="

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        function text(uri) {
            return $mol_charset_decode($mol_base64_decode(uri.replace(/^.*,/, '')));
        }
        $mol_test({
            async 'localized - simple'($) {
                const view = text(require('/mol/view/tree2/ts/test/simple.view.tree.bin'));
                const ts = text(require('/mol/view/tree2/ts/test/simple.view.ts.bin'));
                const tree = $.$mol_tree2_from_string(view, 'factory.view.tree');
                const res = $.$mol_view_tree2_ts_compile(tree);
                $mol_assert_equal(res.locales['$mol_view_tree2_ts_test_simple_localized'], 'localized value');
                $mol_assert_equal(res.script, ts);
            },
            async 'localized - factory'($) {
                const view = text(require('/mol/view/tree2/ts/test/factory.view.tree.bin'));
                const ts = text(require('/mol/view/tree2/ts/test/factory.view.ts.bin'));
                const tree = $.$mol_tree2_from_string(view, 'factory.view.tree');
                const res = $.$mol_view_tree2_ts_compile(tree);
                $mol_assert_equal(res.locales['$mol_view_tree2_ts_test_factory_Simple_localized'], 'localized value');
                $mol_assert_equal(res.script, ts);
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
                    const tree = $.$mol_tree2_from_string(view, 'factory.view.tree');
                    const res = $.$mol_view_tree2_ts_compile(tree);
                    $mol_assert_equal(res.script, ts);
                }
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/view/tree2/ts/ts.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'fromJSON'() {
            $mol_assert_equal($mol_tree2_from_json([]).toString(), '/\n');
            $mol_assert_equal($mol_tree2_from_json([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree2_from_json([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree2_from_json(new Uint16Array([1, 10, 256])).toString(), '\\\x01\x00\n\\\x00\x00\x01\n');
            $mol_assert_equal($mol_tree2_from_json(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree2_from_json({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/from/json/json.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'atoms'($) {
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("null\n").kids[0]), null);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("true\n").kids[0]), true);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("false\n").kids[0]), false);
        },
        'numbers'($) {
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("1\n").kids[0]), 1);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("1.2\n").kids[0]), 1.2);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("1.2e+2\n").kids[0]), 120);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("NaN\n").kids[0]), Number.NaN);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("+Infinity\n").kids[0]), Number.POSITIVE_INFINITY);
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("-Infinity\n").kids[0]), Number.NEGATIVE_INFINITY);
        },
        'string'($) {
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("\\foo\n").kids[0]), 'foo');
            $mol_assert_equal($.$mol_tree2_to_json($.$mol_tree2_from_string("\\\n\t\\foo\n\t\\bar\n").kids[0]), 'foo\nbar');
        },
        'array'($) {
            $mol_assert_like($.$mol_tree2_to_json($.$mol_tree2_from_string("/\n").kids[0]), []);
            $mol_assert_like($.$mol_tree2_to_json($.$mol_tree2_from_string("/\n\t\\foo\n\t\\bar\n").kids[0]), ['foo', 'bar']);
            $mol_assert_like($.$mol_tree2_to_json($.$mol_tree2_from_string("/\n\t- \\foo\n\t\\bar\n").kids[0]), ['bar']);
        },
        'object'($) {
            $mol_assert_like($.$mol_tree2_to_json($.$mol_tree2_from_string("*\n").kids[0]), {});
            $mol_assert_like($.$mol_tree2_to_json($.$mol_tree2_from_string("*\n\t\\foo\n\t\t\\bar\n").kids[0]), { foo: 'bar' });
            $mol_assert_like($.$mol_tree2_to_json($.$mol_tree2_from_string("*\n\t\\\n\t\t\\foo\n\t\t\\bar\n\t\t\\lol\n").kids[0]), { 'foo\nbar': 'lol' });
        },
    });
})($ || ($ = {}));
//mol/tree2/to/json/json.test.ts
;
"use strict";
//mol/type/param/param.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'single function'() {
            const stringify = $mol_data_pipe((input) => input.toString());
            $mol_assert_equal(stringify(5), '5');
        },
        'two functions'() {
            const isLong = $mol_data_pipe((input) => input.toString(), (input) => input.length > 2);
            $mol_assert_equal(isLong(5.0), false);
            $mol_assert_equal(isLong(5.1), true);
        },
        'three functions'() {
            const pattern = $mol_data_pipe((input) => input.toString(), (input) => new RegExp(input), (input) => input.toString());
            $mol_assert_equal(pattern(5), '/5/');
        },
        'classes'() {
            class Box {
                value;
                constructor(value) {
                    this.value = value;
                }
            }
            const boxify = $mol_data_pipe((input) => input.toString(), Box);
            $mol_assert_ok(boxify(5) instanceof Box);
            $mol_assert_like(boxify(5).value, '5');
        },
    });
})($ || ($ = {}));
//mol/data/pipe/pipe.test.ts
;
"use strict";
var $;
(function ($) {
    const convert = $mol_data_pipe($mol_tree2_from_string, $mol_tree2_js_to_text, $mol_tree2_text_to_string);
    $mol_test({
        'boolean'() {
            $mol_assert_equal(convert(`
					true
				`), 'true\n');
        },
        'number'() {
            $mol_assert_equal(convert(`
					1.2
				`), '1.2\n');
            $mol_assert_equal(convert(`
					1e+2
				`), '1e+2\n');
            $mol_assert_equal(convert(`
					-Infinity
				`), '-Infinity\n');
            $mol_assert_equal(convert(`
					NaN
				`), 'NaN\n');
        },
        'variable'() {
            $mol_assert_equal(convert(`
					a
				`), 'a\n');
            $mol_assert_equal(convert(`
					$
				`), '$\n');
            $mol_assert_equal(convert(`
					a0
				`), 'a0\n');
        },
        'string'() {
            $mol_assert_equal(convert(`
					\\
						\\foo
						\\bar
				`), '"foo\\nbar"\n');
            $mol_assert_equal(convert(`
					\`\`
						\\foo
						bar
				`), '`foo${bar}`\n');
        },
        'wrong name'() {
            $mol_assert_fail(() => convert(`
					foo+bar
				`), 'Wrong node type\nfoo+bar\n?#2:6/7');
        },
        'array'() {
            $mol_assert_equal(convert(`
					[,]
				`), '[]\n');
            $mol_assert_equal(convert(`
					[,]
						1
						2
				`), '[1, 2]\n');
        },
        'last'() {
            $mol_assert_equal(convert(`
					(,)
						1
						2
				`), '(1, 2)\n');
        },
        'scope'() {
            $mol_assert_equal(convert(`
					{;}
						1
						2
				`), '{\n\t1;\n\t2;\n}\n');
        },
        'object'() {
            $mol_assert_equal(convert(`
					{,}
				`), '{}\n');
            $mol_assert_equal(convert(`
					{,}
						foo
						bar
				`), '{foo, bar}\n');
            $mol_assert_equal(convert(`
					{,}
						:
							\\foo
							1
						:
							bar
							2
				`), '{"foo": 1, [bar]: 2}\n');
        },
        'regexp'() {
            $mol_assert_equal(convert(`
					/./
						.source \\foo\\n
						.multiline
						.ignoreCase
						.global
				`), '/foo\\\\n/mig\n');
        },
        'unary'() {
            $mol_assert_equal(convert(`
					void yield* yield await ~ ! - + 1
				`), 'void yield* yield await ~!-+1\n');
        },
        'binary'() {
            $mol_assert_equal(convert(`
					(+)
						1
						2
						3
				`), '(\n\t1 + \n\t2 + \n\t3\n)\n');
            $mol_assert_equal(convert(`
					@++ foo
				`), 'foo++\n');
        },
        'chain'() {
            $mol_assert_equal(convert(`
					()
						foo
						[] \\bar
						[] 1
				`), '(foo.bar[1])\n');
            $mol_assert_equal(convert(`
					()
						foo
						[] 1
						(,)
				`), '(foo[1]())\n');
            $mol_assert_equal(convert(`
					()
						[,] 0
						[] 1
						(,)
							2
							3
				`), '([0][1](2, 3))\n');
        },
        'function'() {
            $mol_assert_equal(convert(`
					=>
						(,)
						1
				`), '() => 1\n');
            $mol_assert_equal(convert(`
					async=>
						(,)
						1
				`), 'async () => 1\n');
            $mol_assert_equal(convert(`
					function
						foo
						(,)
						{;}
				`), 'function foo(){}\n');
            $mol_assert_equal(convert(`
					function
						(,) foo
						{;} debugger
				`), 'function (foo){\n\tdebugger;\n}\n');
            $mol_assert_equal(convert(`
					function*
						(,)
						{;}
				`), 'function* (){}\n');
            $mol_assert_equal(convert(`
					async
						(,)
						{;}
				`), 'async function (){}\n');
            $mol_assert_equal(convert(`
					async*
						(,) foo
						{;} debugger
				`), 'async function* (foo){\n\tdebugger;\n}\n');
        },
        'class'() {
            $mol_assert_equal(convert(`
					class
						Foo
						{}
				`), 'class Foo {}\n');
            $mol_assert_equal(convert(`
					class
						Foo
						extends Bar
						{}
				`), 'class Foo extends Bar {}\n');
            $mol_assert_equal(convert(`
					class {}
						.
							\\foo
							(,)
							{;}
				`), 'class {\n\tfoo(){}\n}\n');
            $mol_assert_equal(convert(`
					class {}
						static
							\\foo
							(,)
							{;}
				`), 'class {\n\tstatic ["foo"](){}\n}\n');
            $mol_assert_equal(convert(`
					class {}
						get
							\\foo
							(,)
							{;}
				`), 'class {\n\tget ["foo"](){}\n}\n');
            $mol_assert_equal(convert(`
					class {}
						set
							\\foo
							(,) bar
							{;}
				`), 'class {\n\tset ["foo"](bar){}\n}\n');
        },
        'if'() {
            $mol_assert_equal(convert(`
					?:
						1
						2
						3
				`), '1 ? 2 : 3\n');
            $mol_assert_equal(convert(`
					if
						() 1
						{;} 2
				`), 'if(1) {\n\t2;\n}\n');
            $mol_assert_equal(convert(`
					if
						() 1
						{;} 2
						{;} 3
				`), 'if(1) {\n\t2;\n}else{\n\t3;\n}\n');
        },
        'assign'() {
            $mol_assert_equal(convert(`
					=
						foo
						bar
				`), 'foo = bar\n');
            $mol_assert_equal(convert(`
					=
						[,]
							foo
							bar
						[,]
							1
							2
				`), '[foo, bar] = [1, 2]\n');
            $mol_assert_equal(convert(`
					let foo
				`), 'let foo\n');
            $mol_assert_equal(convert(`
					let
						foo
						bar
				`), 'let foo = bar\n');
            $mol_assert_equal(convert(`
					+=
						foo
						bar
				`), 'foo += bar\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/js/to/text/text.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'min'() {
            $mol_assert_equal($mol_vlq_encode(Number.MIN_SAFE_INTEGER), '//////H');
        },
        'negative'() {
            $mol_assert_equal($mol_vlq_encode(-1), 'D');
        },
        'zero'() {
            $mol_assert_equal($mol_vlq_encode(0), 'A');
        },
        'binom'() {
            $mol_assert_equal($mol_vlq_encode(67), 'mE');
        },
        'max'() {
            $mol_assert_equal($mol_vlq_encode(Number.MAX_SAFE_INTEGER), '+/////H');
        },
    });
})($ || ($ = {}));
//mol/vlq/vlq.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'sample source mapped lang'($) {
            const source = {
                script1: `1@\n2`,
                script2: `***`
            };
            const span = {
                script1: $mol_span.entire('script1', source.script1),
                script2: $mol_span.entire('script2', source.script2),
            };
            const tree = $mol_tree2.list([
                $mol_tree2.struct('line', [
                    $mol_tree2.data('"use strict";', [], span.script1.after()),
                    $mol_tree2.data('console.log(11);', [], span.script1.slice(0, 1)),
                    $mol_tree2.data('console.log(21);', [], span.script2),
                    $mol_tree2.data('console.log(12);', [], span.script1.span(2, 1, 1)),
                ], span.script1),
            ], span.script1);
            $mol_assert_like($.$mol_tree2_text_to_string(tree), '"use strict";console.log(11);console.log(21);console.log(12);\n');
            $mol_assert_like($.$mol_tree2_text_to_sourcemap(tree), {
                "version": 3,
                "sources": [
                    "script1",
                    "script2"
                ],
                "sourcesContent": [source.script1, source.script2],
                "mappings": "AAAA,AAAI,aAAJ,gBCAA,gBDCA;"
            });
        }
    });
})($ || ($ = {}));
//mol/tree2/text/to/sourcemap/sourcemap.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        '$mol_leb128'() {
            $mol_assert_like($mol_leb128_encode(0), new Uint8Array([0]));
            $mol_assert_like($mol_leb128_encode(624485), new Uint8Array([0xE5, 0x8E, 0x26]));
            $mol_assert_equal($mol_leb128_decode(new Uint8Array([0xE5, 0x8E, 0x26])), 624485);
        },
    });
})($ || ($ = {}));
//mol/leb128/leb128.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'hello world'() {
            const buffer = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 146, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 5, 104, 101, 108, 108, 111, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 16, 11, 11, 146, 128, 128, 128, 0, 1, 0, 65, 16, 11, 12, 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 0]);
            const wasm = new $mol_wasm_module(buffer).instance();
            const hello = wasm.get('hello');
            $mol_assert_equal(wasm.string(hello(), 11), 'Hello World');
        },
    });
})($ || ($ = {}));
//mol/wasm/wasm.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'module'($) {
            const code = $.$mol_tree2_from_string(``);
            $mol_assert_like(new Uint8Array($.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([0, 0x61, 0x73, 0x6d, 0x1, 0, 0, 0]));
        },
        'custom section'($) {
            const code = $.$mol_tree2_from_string(`
				custom xxx
			`);
            $mol_assert_like(new Uint8Array($.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([
                0, 0x61, 0x73, 0x6d, 0x1, 0, 0, 0, 0,
                0x4, 0x3, 0x78, 0x78, 0x78
            ]));
        },
        'type section with value types'($) {
            const code = $.$mol_tree2_from_string(`
				type xxx
					=> i32
					=> i64
					=> f32
					<= f64
			`);
            $mol_assert_like(new Uint8Array($.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([
                0, 0x61, 0x73, 0x6d, 0x01, 0, 0, 0,
                0x01, 0x08, 0x01, 0x60, 0x03, 0x7f, 0x7e, 0x7d, 0x01, 0x7c
            ]));
        },
        'import section'($) {
            const code = $.$mol_tree2_from_string(`
				type nothing
				import foo.bar func nothing
			`);
            $mol_assert_like(new Uint8Array($.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([
                0, 0x61, 0x73, 0x6d, 0x01, 0, 0, 0,
                0x01, 0x04, 0x01, 0x60, 0, 0,
                0x02, 0x0b, 0x01, 0x03, 0x66, 0x6f, 0x6f, 0x03, 0x62, 0x61, 0x72, 0, 0
            ]));
        },
        'export imported identity'($) {
            const code = $.$mol_tree2_from_string(`
				type identity
					=> i32
					<= i32
				import foo.bar func identity
				export xxx.yyy func identity
			`);
            const instance = $.$mol_tree2_wasm_to_module(code).instance({ foo: { bar: (a) => a } });
            const identity = instance.get('xxx.yyy');
            $mol_assert_like(identity(123), 123);
        },
        'export internal identity'($) {
            const code = $.$mol_tree2_from_string(`
				type identity
					=> i32
					<= i32
				func identity local.get 0
				export id func identity
			`);
            const instance = $.$mol_tree2_wasm_to_module(code).instance();
            const identity = instance.get('id');
            $mol_assert_like(identity(123), 123);
        },
        'export increase'($) {
            const code = $.$mol_tree2_from_string(`
				type inc32
					=> i32
					<= i32
				func inc32
					local.get 0
					i32.const 1
					i32.add
				export increase func inc32
			`);
            const instance = $.$mol_tree2_wasm_to_module(code).instance();
            const inc = instance.get('increase');
            $mol_assert_like(inc(2), 3);
        },
        'export function that returns pair'($) {
            const code = $.$mol_tree2_from_string(`
				type pair
					<= i32
					<= i32
				func pair
					i32.const 1
					i32.const 2
				export pair func pair
			`);
            const instance = $.$mol_tree2_wasm_to_module(code).instance();
            const pair = instance.get('pair');
            $mol_assert_like(pair(), [1, 2]);
        },
    });
})($ || ($ = {}));
//mol/tree2/wasm/to/bin/bin.test.ts
;
"use strict";
//mol/type/enforce/enforce.test.ts
;
"use strict";
var $;
(function ($_1) {
    const compile = $mol_data_pipe($mol_tree2_from_string, $mol_view_tree2_to_js).bind($);
    const compile2 = $mol_data_pipe($mol_tree2_js_to_text, $mol_tree2_text_to_string_mapped_js).bind($);
    function $mol_view_tree2_to_js_test_run(tree) {
        class $mol_object3 extends $mol_object {
        }
        const $ = { $mol_object: $mol_object3, js: '', js_node: undefined };
        $mol_object3[$mol_ambient_ref] = $;
        const js_node = compile(tree);
        const js = compile2(js_node);
        eval(js);
        $.js = js;
        $.js_node = js_node;
        return $;
    }
    $_1.$mol_view_tree2_to_js_test_run = $mol_view_tree2_to_js_test_run;
})($ || ($ = {}));
//mol/view/tree2/to/js/test/run.ts
;
"use strict";
var $;
(function ($_1) {
    const run = $mol_view_tree2_to_js_test_run;
    $mol_test({
        'Bidi bind fallback'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar1? <=> bar2? 1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.bar1(), foo.bar2(), 1);
            $mol_assert_like(foo.bar2(2), foo.bar1(), 2);
            $mol_assert_like(foo.bar1(1), foo.bar1(), 1);
            $mol_assert_like(foo.bar2(), 2);
            $mol_assert_like(foo.bar2(3), foo.bar2(), foo.bar1(), 3);
        },
        'Bidi bind legacy value'($) {
            const { Foo } = run(`
				Foo $mol_object
					a?v <=> b?v 1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.a(), foo.b(), 1);
            $mol_assert_like(foo.b(2), foo.a(), 2);
        },
        'Bidi bind in dictionary'($) {
            const { Foo } = run(`
				Foo $mol_object
					event *
						click? <=> run? null
			`);
            $mol_assert_like(Foo.make({ $ }).event().click({}), {});
        },
        'Bidi bind chaining'($) {
            const { Foo } = run(`
				Foo $mol_object
					a? <=> b? <=> c? null
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.c(), foo.b(), foo.a());
        },
        'Bidi bind indexed'($) {
            const { Foo } = run(`
				Foo $mol_object
					indexed*? <=> owner*? null
			`);
            const foo = Foo.make({ $ });
            foo.owner(1, 'a');
            foo.owner(2, 'b'),
                $mol_assert_like(foo.owner(1), foo.indexed(1), 'a');
            $mol_assert_like(foo.owner(1, 'a2'), foo.indexed(1), 'a2');
            $mol_assert_like(foo.owner(2), foo.indexed(2), 'b');
        },
        'Bidi bind indexed second level'($) {
            const { Foo } = run(`
				Foo $mol_object
					indexed*? $mol_object
						expanded <=> owner*? null
			`);
            const foo = Foo.make({ $ });
            foo.owner(1, 'a');
            foo.owner(2, 'b');
            $mol_assert_like(foo.owner(1), foo.indexed(1).expanded(), 'a');
            $mol_assert_like(foo.owner(2), foo.indexed(2).expanded(), 'b');
        },
        'Bidi bind doubing right part with same default'($) {
            const { Foo } = run(`
				Foo $mol_object
					a? <=> b? null
					c? <=> b? null
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.b(), foo.c(), foo.a(), null);
        },
        'Bidi bind with separate default in right part'($) {
            const { Foo } = run(`
				Foo $mol_object
					a? <=> b?
					b? null
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.b(), foo.a());
        },
        'Bidi bind index from outer scope throws error'($) {
            $mol_assert_fail(() => {
                const { Foo } = run(`
					Foo $mol_object
						a!? $mol_object
							expanded <=> cell_expanded!? null
				`);
            });
        },
        'Bidi bind with default object'($) {
            const { Foo } = run(`
				Foo $mol_object
					class?val <=> owner?val $mol_object
			`);
            const foo = Foo.make({ $ });
            const view = new $mol_object;
            foo.owner(view);
            $mol_assert_like(foo.owner(), foo.class(), view);
        },
        'Bidi bind localized default value'($) {
            const { Foo } = run(`
				Foo $mol_object
					a? <=> b? @ \\some1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.b(), foo.a(), 'Foo_b');
        },
        'Bidi bind localized in object'($) {
            const { Foo } = run(`
				Foo $mol_object
					obj *
						loc? <=> outer? @ \\test1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.obj().loc(), foo.outer(), 'Foo_outer');
        },
    });
})($ || ($ = {}));
//mol/view/tree2/to/js/js.bidi.test.ts
;
"use strict";
var $;
(function ($_1) {
    const run = $mol_view_tree2_to_js_test_run;
    $mol_test({
        'Structural channel'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar *
						alpha 1
						beta *
						xxx <= lol 2
			`);
            $mol_assert_like(Foo.make({ $ }).bar(), {
                alpha: 1,
                beta: {},
                xxx: 2,
            });
        },
        'Structural channel with inheritance'($) {
            const { Foo, Bar } = run(`
				Foo $mol_object
					field *
						xxx 123
				Bar Foo
					field *
						yyy 234
						^
						zzz 345
			`);
            $mol_assert_like(Bar.make({ $ }).field(), {
                yyy: 234,
                xxx: 123,
                zzz: 345,
            });
        },
        'Structural channel spread other channel'($) {
            const { Bar } = run(`
				Bar $mol_object
					test *
						aaa 123
					field *
						bbb 321
						^ test
			`);
            $mol_assert_like(Bar.make({ $ }).field(), {
                bbb: 321,
                aaa: 123,
            });
        },
        'Structural channel localized prop value'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar *
						loc @ \\v1
						baz *
							loc2 @ \\v2
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.bar(), {
                'loc': 'Foo_bar_loc',
                'baz': { 'loc2': 'Foo_bar_baz_loc2' }
            });
        },
        'Structural channel quoted props'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar *
						$a 1
						b-t *
			`);
            $mol_assert_like(Foo.make({ $ }).bar(), {
                '$a': 1,
                'b-t': {},
            });
        },
    });
})($ || ($ = {}));
//mol/view/tree2/to/js/js.dict.test.ts
;
"use strict";
var $;
(function ($_1) {
    const run = $mol_view_tree2_to_js_test_run;
    $mol_test({
        'Left bind read only'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar1 <= bar2? 1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.bar1(), foo.bar1(2), foo.bar1(), foo.bar2(), 1);
            $mol_assert_like(foo.bar2(2), foo.bar1(), 2);
        },
        'Left bind second level index'($) {
            const { Foo } = run(`
				Foo $mol_object
					cls* <= owner*? $mol_object
						localized <= some*? @ \\v1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_ok(foo.owner() instanceof $mol_object);
            $mol_assert_like(foo.some(), foo.some(1), 'Foo_some');
            $mol_assert_equal(foo.owner(1), foo.cls(1));
            $mol_assert_equal(foo.owner().localized(), foo.some());
            $mol_assert_equal(foo.cls(2), foo.owner(2));
        },
        'Left bind in array and object'($) {
            const { Foo } = run(`
				Foo $mol_object
					obj *
						prop <= Obj
					arr /
						<= Obj $mol_object
							rows <= content /
			`);
            const foo = Foo.make({ $ });
            $mol_assert_equal(foo.obj().prop, foo.arr()[0], foo.Obj());
        },
        'Left bind with separate default and comment'($) {
            const { Foo } = run(`
				Foo $mol_object
					content 123
					Obj $mol_object
						rows <= content - 321
			`);
            const foo = Foo.make({ $ });
            $mol_assert_equal(foo.Obj().rows(), 123);
        },
        'Left bind chaining'($) {
            const { Foo } = run(`
				Foo $mol_object
					a? <= b? <= c? null
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.c(), foo.b(), foo.a(), null);
            $mol_assert_like(foo.c(1), foo.b(), foo.a(), 1);
            $mol_assert_unique(foo.a(2), foo.c());
        },
    });
})($ || ($ = {}));
//mol/view/tree2/to/js/js.left.test.ts
;
"use strict";
var $;
(function ($_1) {
    const run = $mol_view_tree2_to_js_test_run;
    $mol_test({
        'Array channel boolean'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar /
						false
						true
			`);
            $mol_assert_like(Foo.make({ $ }).bar(), [false, true]);
        },
        'Array channel number'($) {
            const { Foo } = run(`
				Foo $mol_object
					bar /
						- NaN
						-Infinity
						+Infinity
						0
			`);
            $mol_assert_like(Foo.make({ $ }).bar(), [
                Number.NEGATIVE_INFINITY,
                Number.POSITIVE_INFINITY,
                0,
            ]);
        },
        'Array channel with types'($) {
            const { Foo } = run(`
				Foo $mol_object
					arr /readonly(number)[]
			`);
            $mol_assert_like(Foo.make({ $ }).arr(), []);
        },
        'Array channel of array or object'($) {
            const { Foo } = run(`
				Foo $mol_object
					complex /
						/
							\\test1
						*
							str \\some
							nul null
			`);
            $mol_assert_like(Foo.make({ $ }).complex(), [['test1'], { str: 'some', nul: null }]);
        },
        'Array channel inheritance'($) {
            const { Bar } = run(`
				Foo $mol_object
					arr /
						\\v1
				Bar Foo
					arr /
						\\v3
						^
						\\v4
			`);
            $mol_assert_like(Bar.make({ $ }).arr(), ['v3', 'v1', 'v4']);
        },
        'Array channel spread other channel'($) {
            const { Bar } = run(`
				Bar $mol_object
					sup /
						\\v1
					arr /
						\\v2
						^ sup
			`);
            const bar = Bar.make({ $ });
            $mol_assert_like(bar.arr(), ['v2', 'v1']);
            $mol_assert_like(bar.arr()[1], bar.sup()[0]);
        },
    });
})($ || ($ = {}));
//mol/view/tree2/to/js/js.array.test.ts
;
"use strict";
var $;
(function ($_1) {
    const run = $mol_view_tree2_to_js_test_run;
    $mol_test({
        'Right bind read only'($) {
            const $2 = run(`
				Foo $mol_object
					a*? null
				Bar $mol_object
					Obj Foo
						a*? => b*?
			`);
            const { Bar } = $2;
            const bar = Bar.make({ $: $2 });
            $mol_assert_like(bar.Obj().a(), bar.b());
        },
        'Right bind in left bind'($) {
            const $2 = run(`
				Foo $mol_object
					a null
				Bar $mol_object
					foo <= Cls Foo
						a => b
			`);
            const { Bar } = $2;
            const bar = Bar.make({ $: $2 });
            $mol_assert_like(bar.foo(), bar.Cls());
            $mol_assert_like(bar.foo().a(), bar.Cls().a(), bar.b());
        },
        'Right bind indexed'($) {
            const $2 = run(`
				Foo $mol_object
					a*? *
						some 123
				Bar $mol_object
					Cls* Foo
						a => b*
			`);
            const { Bar } = $2;
            const bar = Bar.make({ $: $2 });
            $mol_assert_equal(bar.Cls(1).a(), bar.b(1));
            $mol_assert_like(bar.b(1), { some: 123 });
            $mol_assert_unique(bar.Cls(1).a(), bar.b(2));
        }
    });
})($ || ($ = {}));
//mol/view/tree2/to/js/js.right.test.ts
;
"use strict";
var $;
(function ($_1) {
    const run = $mol_view_tree2_to_js_test_run;
    $mol_test({
        'Empty class'($) {
            const { Foo } = run(`
				Foo $mol_object
			`);
            Foo.make({ $ });
        },
        'Mutable and read only channels'($) {
            const { Foo } = run(`
				Foo $mol_object
					readonly null
					mutable? null
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.readonly(), foo.readonly(1), foo.readonly(), null);
            $mol_assert_like(foo.mutable(), null);
            $mol_assert_like(foo.mutable(2), foo.mutable(), 2);
        },
        'String channel'($) {
            const { Foo } = run(`
				Foo $mol_object
					hardcoded \\
						\\First
						\\Second
					localized @ \\
			`);
            $mol_assert_like(Foo.make({ $ }).hardcoded(), 'First\nSecond');
            $mol_assert_like(Foo.make({ $ }).localized(), 'Foo_localized');
        },
        'Default indexed channel'($) {
            const { Foo } = run(`
				Foo $mol_object
					a*? null
			`);
            const foo = Foo.make({ $ });
            $mol_assert_like(foo.a(0, 1), foo.a(0), 1);
        },
        'empty legacy indexed channel throws error'($) {
            $mol_assert_fail(() => {
                run(`
					Foo $mol_object
						a!? null
				`);
            });
            $mol_assert_fail(() => {
                run(`
					Foo $mol_object
						b! 1
				`);
            });
        },
        'two classes'($) {
            const { A2, B2 } = run(`
				A2 $mol_object
					str \\some
				
				B2 A2
					str \\some2
			`);
            const a = A2.make({ $ });
            const b = B2.make({ $ });
            $mol_assert_ok(b instanceof A2);
            $mol_assert_ok(b instanceof B2);
            $mol_assert_like(a.str(), 'some');
            $mol_assert_like(b.str(), 'some2');
        },
        'commented node'($) {
            const { A2, B2 } = run(`
				A2 $mol_object
					str \\some
				- B2 A2
					str \\some2
			`);
            const a = A2.make({ $ });
            $mol_assert_ok(a instanceof A2);
            $mol_assert_ok(B2 === undefined);
        },
        'factory props'($) {
            const { Foo } = run(`
				Foo $mol_object
					button $mol_object
						some true
						loc @ \\v1
						sub /
							1
			`);
            const foo = Foo.make({ $ });
            $mol_assert_ok(typeof foo.button().sub === 'function');
            $mol_assert_ok(typeof foo.button().some === 'function');
            $mol_assert_like(foo.button().loc(), 'Foo_button_loc');
            $mol_assert_like(foo.button().sub()[0], 1);
        },
    });
})($ || ($ = {}));
//mol/view/tree2/to/js/js.simple.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'test'($) {
            const root = {
                ...$mol_jack,
                'foo': input => [input.struct('FOO')],
                'FOO': input => [input.struct('FAIL')],
            };
            $mol_assert_like($.$mol_tree2_from_string(`
					test
						case foo
						case tree FOO
				`)
                .hack(root)
                .toString(), $.$mol_tree2_from_string(`
					test
						case foo
						case tree FOO
				`)
                .toString());
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(`
					test
						case \\foo
						case \\bar
				`)
                    .hack(root);
            });
        },
        'jack test'($) {
            const tests = $.$mol_tree2_from_string(`
				test
					name \\commented code
					case
						one
						no two
					case tree
						ONE
				test
					name \\name of struct node as value node
					case type
						one
						\\one
					case tree
						\\ONE
						\\
				test
					name \\kids of struct node
					case kids tree one two
					case tree two
				test
					name \\first element of list
					case head
						one
						two
						three
					case tree ONE
				test
					name \\list without first element
					case headless
						one
						two
						three
					case tree
						TWO
						THREE
				test
					name \\reversed list
					case reversed
						one
						two
						three
					case tree
						THREE
						TWO
						ONE
				test
					name \\quote tree
					name \\make tree node by type, value and sub list
					case tree head
						\\
						\\one
							\\two
						three
					case struct
						\\head
						struct \\
						data
							\\one
							\\two
						struct \\three
				test
					name \\evaluated jack code
					case jack head
						one
						two
						three
					case tree ONE
				test
					name \\define and use custom simple macro
					case jack
						hack PI float 3.14
						hack pi PI
						pi
					case float 3.14
				test
					name \\define and use custom macro with arguments
					case jack
						hack tail head reversed from
						tail
							one
							two
							three
					case tree THREE
			`);
            const res = tests.hack({
                ...$mol_jack.meta,
                'one': input => [input.struct('ONE')],
                'two': input => [input.struct('TWO')],
                'three': input => [input.struct('THREE')],
                'ONE': input => [input.struct('XXX')],
                'TWO': input => [input.struct('XXX')],
                'THREE': input => [input.struct('XXX')],
            });
        },
    });
})($ || ($ = {}));
//mol/jack/jack.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_tree2_wasm_to_bytes = $mol_data_pipe($mol_tree2_wasm_to_bin, $mol_tree2_bin_to_bytes);
})($ || ($ = {}));
//mol/tree2/wasm/to/bytes/bytes.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_tree2_wasm_to_module = $mol_data_pipe($mol_tree2_wasm_to_bytes, $mol_wasm_module);
})($ || ($ = {}));
//mol/tree2/wasm/to/module/module.ts
;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    $mol_test({
        'base64 encode string'() {
            $mol_assert_equal($mol_base64_encode('Hello, ΧΨΩЫ'), 'SGVsbG8sIM6nzqjOqdCr');
        },
        'base64 encode binary'() {
            $mol_assert_equal($mol_base64_encode(png), 'GgoASUh42g==');
        },
    });
})($ || ($ = {}));
//mol/base64/encode/encode.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'empty array'() {
            $mol_assert_like($mol_array_chunks([], () => true), []);
        },
        'one chunk'() {
            $mol_assert_like($mol_array_chunks([1, 2, 3, 4, 5], () => false), [[1, 2, 3, 4, 5]]);
        },
        'last empty chunk'() {
            $mol_assert_like($mol_array_chunks([1, 2, 3, 4, 5], (_, i) => i === 4), [[1, 2, 3, 4, 5]]);
        },
        'chunk for every item'() {
            $mol_assert_like($mol_array_chunks([1, 2, 3, 4, 5], () => true), [[1], [2], [3], [4], [5]]);
        },
    });
})($ || ($ = {}));
//mol/array/chunks/chunks.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $mol_array_trim(array);
            $mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//mol/array/trim/trim.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'triplets'() {
            $mol_assert_equal(new $mol_time_interval('2015-01-01/P1M').end.toString(), '2015-02-01');
            $mol_assert_equal(new $mol_time_interval('P1M/2015-02-01').start.toString(), '2015-01-01');
            $mol_assert_equal(new $mol_time_interval('2015-01-01/2015-02-01').duration.toString(), 'PT2678400S');
        },
        'comparison'() {
            const iso = '2021-01-02/2022-03-04';
            $mol_assert_like(new $mol_time_interval(iso), new $mol_time_interval(iso));
        },
    });
})($ || ($ = {}));
//mol/time/interval/interval.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'convertion to primitives'() {
            var unit = new $mol_unit_money_usd(5);
            $mol_assert_equal(unit.valueOf(), 5);
            $mol_assert_equal(unit * 2, 10);
            $mol_assert_equal(unit + '', '$5');
            $mol_assert_equal(`${unit}`, '$5');
            $mol_assert_equal(unit.toString(), '$5');
            $mol_assert_equal(String(unit), '$5');
        },
        'arithmetic'() {
            var usd1 = new $mol_unit_money_usd(2);
            var usd2 = new $mol_unit_money_usd(3);
            var rur = new $mol_unit_money_rur(2);
            $mol_assert_equal($mol_unit.summ(usd1, usd2).toString(), '$5');
            $mol_assert_equal(usd1.mult(2).toString(), '$4');
        },
    });
})($ || ($ = {}));
//mol/unit/unit.test.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_harp_to_string(query) {
        return Object.entries(query).map(([field, harp]) => {
            if (field === '+')
                return '';
            if (field === '=')
                return '';
            if (field === '!=')
                return '';
            if (!harp)
                return '';
            const order = harp['+'] === true ? '+' : harp['+'] === false ? '-' : '';
            const filter = harp['='] ? '=' : harp['!='] ? '!=' : '';
            const name = encodeURIComponent(field);
            let values = (harp['='] || harp['!='] || []).map(([min, max]) => {
                if (max === undefined || min === max)
                    return encodeURIComponent(String(min)) + '=';
                min = (min === undefined) ? '' : encodeURIComponent(String(min));
                max = (max === undefined) ? '' : encodeURIComponent(String(max));
                return `${min}@${max}=`;
            }).join('');
            let fetch = $hyoo_harp_to_string(harp);
            if (fetch)
                fetch = `(${fetch})`;
            return `${order}${name}${filter}${values}${fetch}`;
        }).filter(Boolean).join(';');
    }
    $.$hyoo_harp_to_string = $hyoo_harp_to_string;
})($ || ($ = {}));
//hyoo/harp/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    function check(str, query) {
        $mol_assert_like(str, $hyoo_harp_to_string(query));
        $mol_assert_like(query, $hyoo_harp_from_string(str));
    }
    $mol_test({
        'root'() {
            check('', {});
        },
        'only field'() {
            check('user%3D777', {
                'user=777': {},
            });
        },
        'primary key'() {
            check('user=jin%2C777!=', {
                user: {
                    '=': [['jin,777!']],
                },
            });
        },
        'single fetch'() {
            check('friend(age%24)', {
                friend: {
                    age$: {},
                },
            });
        },
        'fetch and primary key'() {
            check('user=jin()=(friend)', {
                'user': {
                    '=': [['jin()']],
                    friend: {},
                },
            });
        },
        'multiple fetch'() {
            check('age;friend', {
                age: {},
                friend: {},
            });
        },
        'common query string back compatible'() {
            $mol_assert_like($hyoo_harp_from_string('user=jin&age=100500'), {
                user: {
                    '=': [['jin']],
                },
                age: {
                    '=': [['100500']],
                },
            });
        },
        'common pathname back compatible'() {
            $mol_assert_like($hyoo_harp_from_string('users/jin/comments'), {
                users: {},
                jin: {},
                comments: {},
            });
        },
        'deep fetch'() {
            check('my(friend(age);name);stat', {
                my: {
                    friend: {
                        age: {},
                    },
                    name: {},
                },
                stat: {},
            });
        },
        'orders'() {
            check('+age;-name', {
                age: {
                    '+': true
                },
                name: {
                    '+': false
                },
            });
        },
        'filter types'() {
            check('sex=female=;status!=married=', {
                sex: {
                    '=': [['female']],
                },
                status: {
                    '!=': [['married']],
                },
            });
        },
        'filter ranges'() {
            check('sex=female=;age=18@25=;weight=@50=;height=150@=;hobby=paint=singing=', {
                sex: {
                    '=': [['female']],
                },
                age: {
                    '=': [['18', '25']],
                },
                weight: {
                    '=': [['', '50']],
                },
                height: {
                    '=': [['150', '']],
                },
                hobby: {
                    '=': [['paint'], ['singing']],
                },
            });
        },
        'unescaped values'() {
            $mol_assert_like($hyoo_harp_from_string('foo=jin=777=;bar=jin!=666='), {
                foo: {
                    '=': [['jin'], ['777']],
                },
                bar: {
                    '=': [['jin!'], ['666']],
                },
            });
        },
        'slicing'() {
            check('friend(_num=0@100=)', {
                friend: {
                    _num: { '=': [['0', '100']] },
                },
            });
        },
        'complex'() {
            check('pullRequest(state=closed=merged=;+repository(name;private);-updateTime;_num=0@100=)', {
                pullRequest: {
                    state: {
                        '=': [
                            ['closed'],
                            ['merged'],
                        ]
                    },
                    repository: {
                        '+': true,
                        name: {},
                        private: {},
                    },
                    updateTime: {
                        '+': false,
                    },
                    _num: {
                        '=': [['0', '100']],
                    },
                },
            });
        },
    });
})($ || ($ = {}));
//hyoo/harp/harp.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Word making'() {
            $mol_assert_ok($mol_spell_ru.test('пил'));
            $mol_assert_ok($mol_spell_ru.test('пила'));
            $mol_assert_ok($mol_spell_ru.test('запил'));
            $mol_assert_ok($mol_spell_ru.test('завопил'));
            $mol_assert_ok($mol_spell_ru.test('пилил'));
            $mol_assert_ok($mol_spell_ru.test('пилоел'));
            $mol_assert_ok($mol_spell_ru.test('недоперепилоперенедоела'));
        },
        'Wrong words'() {
            $mol_assert_not($mol_spell_ru.test('недперепила'));
            $mol_assert_not($mol_spell_ru.test('недоbook'));
        },
    });
})($ || ($ = {}));
//mol/spell/ru/ru.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Known language'() {
            $mol_assert_ok($mol_spell_any.test('пила'));
        },
        'Unknown language'() {
            $mol_assert_not($mol_spell_any.test('пиri'));
        },
    });
})($ || ($ = {}));
//mol/spell/any/any.test.ts

//# sourceMappingURL=web.test.js.map
