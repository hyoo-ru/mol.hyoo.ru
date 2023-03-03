"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        if (left instanceof Error)
            return left.message === right['message'] && left.stack === right['stack'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.cache instanceof Promise)
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (error instanceof Promise)
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto() instanceof $mol_wire_task) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay;\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        keyboard() {
            return "search";
        }
        enter() {
            return "search";
        }
        bring() {
            return this.Query().bring();
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            obj.keyboard = () => this.keyboard();
            obj.enter = () => this.enter();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const host = {};
        const fiber = new $mol_wire_task(calculate.name, calculate, host, []);
        fiber.plan();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_wire_task(this + '.' + calculate.name, calculate, this, args);
            return fiber.async();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_sync(request) {
        throw new Error('Use $mol_wire_sync instead');
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        $mol_wire_fiber.sync();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    class $mol_fiber_solid extends $mol_wrapper {
        static func(task) {
            return task;
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber {
        static method = $mol_action;
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//mol/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2_catalog extends $mol_book2 {
        param() {
            return "";
        }
        spread(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        spreads() {
            return {};
        }
        Spread() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [
                this.Menu()
            ];
        }
        Spread_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.spread_close_arg();
            obj.sub = () => [
                this.Spread_close_icon()
            ];
            return obj;
        }
        menu_title() {
            return "";
        }
        menu_tools() {
            return [];
        }
        menu_head() {
            return [
                this.Menu_title(),
                this.Menu_tools()
            ];
        }
        menu_filter(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Menu_filter() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.menu_filter(next);
            return obj;
        }
        arg(id) {
            return {};
        }
        spread_title(id) {
            return "";
        }
        Menu_link_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.menu_filter();
            obj.haystack = () => this.spread_title(id);
            return obj;
        }
        menu_link_content(id) {
            return [
                this.Menu_link_title(id)
            ];
        }
        Menu_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg(id);
            obj.sub = () => this.menu_link_content(id);
            return obj;
        }
        menu_links() {
            return [
                this.Menu_link("0")
            ];
        }
        Menu_links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_links();
            return obj;
        }
        menu_body() {
            return [
                this.Menu_filter(),
                this.Menu_links()
            ];
        }
        menu_foot() {
            return [];
        }
        Menu_title() {
            return this.Menu().Title();
        }
        Menu_tools() {
            return this.Menu().Tools();
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.menu_title();
            obj.tools = () => this.menu_tools();
            obj.head = () => this.menu_head();
            obj.body = () => this.menu_body();
            obj.foot = () => this.menu_foot();
            return obj;
        }
        spread_close_arg() {
            return {};
        }
        Spread_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "spread", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "menu_filter", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu_filter", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Menu_link_title", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Menu_link", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu_links", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close_icon", null);
    $.$mol_book2_catalog = $mol_book2_catalog;
})($ || ($ = {}));
//mol/book2/catalog/-view.tree/catalog.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            pages() {
                const spread = this.Spread();
                return [
                    this.Menu(),
                    ...spread
                        ? spread instanceof $mol_book2
                            ? spread.pages()
                            : [spread]
                        : [],
                ];
            }
            menu_body() {
                return [
                    ...Object.keys(this.spreads()).length >= 10 ? [this.Menu_filter()] : [],
                    this.Menu_links(),
                ];
            }
            menu_links() {
                return Object.keys(this.spreads())
                    .filter($mol_match_text(this.menu_filter(), spread => [this.spread_title(spread)]))
                    .map(spread => this.Menu_link(spread));
            }
            Spread() {
                return this.spreads()[this.spread()];
            }
            spread(next) {
                return this.$.$mol_state_arg.value(this.param(), next) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread || null };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                const page = this.spreads()[spread];
                return page instanceof $mol_book2 && page.pages()[0]?.title() || page.title();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_body", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_links", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/catalog/catalog.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/catalog/catalog.view.css", "[mol_book2_catalog_menu_filter] {\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\talign-self: stretch;\n}\n\n");
})($ || ($ = {}));
//mol/book2/catalog/-css/catalog.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//mol/theme/auto/-view.tree/auto.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = false;
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//mol/lights/lights.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/theme/auto/auto.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n\n[mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//mol/icon/brightness/6/-view.tree/6.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//mol/lights/toggle/-view.tree/toggle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/lights/toggle/toggle.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_emoticon extends $mol_icon {
        path() {
            return "M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M15.5,8C16.33,8 17,8.67 17,9.5C17,10.33 16.33,11 15.5,11C14.67,11 14,10.33 14,9.5C14,8.67 14.67,8 15.5,8M8.5,8C9.33,8 10,8.67 10,9.5C10,10.33 9.33,11 8.5,11C7.67,11 7,10.33 7,9.5C7,8.67 7.67,8 8.5,8M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.3,16.04 14.33,17.5 12,17.5Z";
        }
    }
    $.$mol_icon_emoticon = $mol_icon_emoticon;
})($ || ($ = {}));
//mol/icon/emoticon/-view.tree/emoticon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_youtube extends $mol_icon {
        path() {
            return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
        }
    }
    $.$mol_icon_youtube = $mol_icon_youtube;
})($ || ($ = {}));
//mol/icon/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_youtube_subscription extends $mol_icon {
        path() {
            return "M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V12C2,10.9 2.9,10 4,10H20C21.1,10 22,10.9 22,12M16,16L10,12.73V19.26L16,16Z";
        }
    }
    $.$mol_icon_youtube_subscription = $mol_icon_youtube_subscription;
})($ || ($ = {}));
//mol/icon/youtube/subscription/-view.tree/subscription.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_rss extends $mol_icon {
        path() {
            return "M6.18,15.64C7.38,15.64 8.36,16.62 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82C4,16.62 4.98,15.64 6.18,15.64M4,4.44C12.59,4.44 19.56,11.41 19.56,20H16.73C16.73,12.97 11.03,7.27 4,7.27V4.44M4,10.1C9.47,10.1 13.9,14.53 13.9,20H11.07C11.07,16.1 7.9,12.93 4,12.93V10.1Z";
        }
    }
    $.$mol_icon_rss = $mol_icon_rss;
})($ || ($ = {}));
//mol/icon/rss/-view.tree/rss.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_rss_box extends $mol_icon {
        path() {
            return "M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M7.5,15C6.67,15 6,15.67 6,16.5C6,17.33 6.67,18 7.5,18C8.33,18 9,17.33 9,16.5C9,15.67 8.33,15 7.5,15M6,10V12C9.31,12 12,14.69 12,18H14C14,13.58 10.42,10 6,10M6,6V8C11.52,8 16,12.48 16,18H18C18,11.37 12.63,6 6,6Z";
        }
    }
    $.$mol_icon_rss_box = $mol_icon_rss_box;
})($ || ($ = {}));
//mol/icon/rss/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_forum extends $mol_icon {
        path() {
            return "M17,12V3C17,2.45 16.55,2 16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z";
        }
    }
    $.$mol_icon_forum = $mol_icon_forum;
})($ || ($ = {}));
//mol/icon/forum/-view.tree/forum.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                target: "_blank"
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            obj.uri = () => this.token_uri(id);
            return obj;
        }
        find_pos(id) {
            return null;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        token_uri(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3";
        }
    }
    $.$mol_icon_clipboard = $mol_icon_clipboard;
})($ || ($ = {}));
//mol/icon/clipboard/-view.tree/clipboard.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard_outline extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3M7,7H17V5H19V19H5V5H7V7Z";
        }
    }
    $.$mol_icon_clipboard_outline = $mol_icon_clipboard_outline;
})($ || ($ = {}));
//mol/icon/clipboard/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        text() {
            return "";
        }
        sub() {
            return [
                this.Icon(),
                this.title()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_clipboard_outline();
            return obj;
        }
        title() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            click(event) {
                this.$.$mol_dom_context.navigator.clipboard.writeText(this.text());
            }
        }
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        find_pos(id) {
            return null;
        }
        uri_base() {
            return "";
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.syntax = () => this.syntax();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//mol/float/-view.tree/float.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//mol/float/-css/float.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//mol/check/expand/-view.tree/expand.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/expand/expand.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//mol/check/expand/-css/expand.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(id) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.minimal_width = () => this.minimal_width();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $mol_list {
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $mol_view {
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $mol_view {
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//mol/grid/-view.tree/grid.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/grid/grid.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 1px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 1px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//mol/grid/-css/grid.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//mol/link/iconed/-view.tree/iconed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri).replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/iconed/iconed.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/link/iconed/-css/iconed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $mol_scroll {
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        dom_name() {
            return "object";
        }
        window() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.Fallback()
            ];
        }
        message() {
            return {
                hashchange: (next) => this.uri_change(next)
            };
        }
        mime() {
            return "";
        }
        title() {
            return "";
        }
        Fallback() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        uri_change(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri_change", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//mol/embed/native/-view.tree/native.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/native/native.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//mol/embed/native/-css/native.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $mol_embed_native {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                ...super.attr(),
                data: null,
                type: null,
                src: this.uri(),
                srcdoc: this.html(),
                allow: this.allow(),
                allowfullscreen: this.fullscreen()
            };
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "about:config";
        }
        html() {
            return null;
        }
        allow() {
            return "";
        }
        fullscreen() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//mol/frame/-view.tree/frame.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                ].join(';');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/frame/frame.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));
//mol/frame/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_youtube extends $mol_check {
        uri() {
            return "";
        }
        video_preview() {
            return "";
        }
        video_id() {
            return "";
        }
        checked(next) {
            return this.active(next);
        }
        sub() {
            return [
                this.Image(),
                this.Frame()
            ];
        }
        active(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        title() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.video_preview();
            return obj;
        }
        video_embed() {
            return "";
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.title();
            obj.uri = () => this.video_embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "active", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Frame", null);
    $.$mol_embed_youtube = $mol_embed_youtube;
})($ || ($ = {}));
//mol/embed/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi_webp/${this.video_id()}/sddefault.webp`;
            }
            sub() {
                return [this.active() ? this.Frame() : this.Image()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "sub", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/youtube/youtube.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/youtube/youtube.view.css", "[mol_embed_youtube] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_youtube_image] {\n\tflex: auto 1 1;\n}\n\n[mol_embed_youtube_image]:not(:hover):not(:focus) {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/embed/youtube/-css/youtube.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_any extends $mol_ghost {
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Object() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_embed_youtube();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        title() {
            return "";
        }
        uri() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Object", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Youtube", null);
    $.$mol_embed_any = $mol_embed_any;
})($ || ($ = {}));
//mol/embed/any/-view.tree/any.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\.(png|gif|jpg|jpeg|webp|svg)$/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            Sub() {
                switch (this.type()) {
                    case 'image': return this.Image();
                    case 'youtube': return this.Youtube();
                    default: return this.Object();
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "Sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/any/any.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        param() {
            return "";
        }
        flow_tokens() {
            return [];
        }
        auto() {
            return [
                this.auto_scroll()
            ];
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.block_content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.quote_text(id);
            obj.highlight = () => this.highlight();
            obj.auto_scroll = () => null;
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_text_list();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.type = () => this.list_type(id);
            obj.text = () => this.list_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        item_index(id) {
            return 0;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.minimal_height = () => 40;
            obj.level = () => this.header_level(id);
            obj.content = () => this.block_content(id);
            obj.arg = () => this.header_arg(id);
            return obj;
        }
        Pre(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.pre_text(id);
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.sidebar_showed = () => this.pre_sidebar_showed();
            return obj;
        }
        Cut(id) {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "hr";
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.table_cell_text(id);
            return obj;
        }
        Grid(id) {
            const obj = new this.$.$mol_grid();
            obj.rows = () => this.grid_rows(id);
            return obj;
        }
        Grid_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.grid_cells(id);
            return obj;
        }
        Grid_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.grid_cell_text(id);
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_dimmer();
            obj.dom_name = () => "span";
            obj.needle = () => this.highlight();
            obj.haystack = () => this.line_text(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            obj.dom_name = () => "span";
            obj.type = () => this.line_type(id);
            obj.sub = () => this.line_content(id);
            return obj;
        }
        Code_line(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => false;
            obj.highlight = () => this.highlight();
            obj.text = () => this.line_text(id);
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.syntax = () => this.code_syntax();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.line_content(id);
            return obj;
        }
        Link_http(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => [
                this.link_host(id)
            ];
            return obj;
        }
        Embed(id) {
            const obj = new this.$.$mol_embed_any();
            obj.uri = () => this.link_uri(id);
            obj.title = () => this.line_text(id);
            return obj;
        }
        auto_scroll() {
            return null;
        }
        block_content(id) {
            return [];
        }
        uri_resolve(id) {
            return "";
        }
        quote_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        list_type(id) {
            return "-";
        }
        list_text(id) {
            return "";
        }
        header_level(id) {
            return 1;
        }
        header_arg(id) {
            return {};
        }
        pre_text(id) {
            return "";
        }
        code_sidebar_showed() {
            return true;
        }
        pre_sidebar_showed() {
            return this.code_sidebar_showed();
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_text(id) {
            return "";
        }
        grid_rows(id) {
            return [];
        }
        grid_cells(id) {
            return [];
        }
        grid_cell_text(id) {
            return "";
        }
        line_text(id) {
            return "";
        }
        line_type(id) {
            return "";
        }
        line_content(id) {
            return [];
        }
        code_syntax() {
            return null;
        }
        link_uri(id) {
            return "";
        }
        link_host(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Paragraph", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Pre", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code_line", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link_http", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Embed", null);
    $.$mol_text = $mol_text;
    class $mol_text_header extends $mol_paragraph {
        level() {
            return 1;
        }
        sub() {
            return [
                this.Link()
            ];
        }
        arg() {
            return {};
        }
        content() {
            return [];
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_header_Link_hint');
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_header.prototype, "Link", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
//mol/text/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?\)\./, '').replace(/[()]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t|  (?:\+\+|--|\*\*|  ))/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 50rem;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\ttab-size: 2;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));
//mol/text/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//mol/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\t/* box-shadow: inset 0 0 0 1px var(--mol_theme_line); */\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/bar/-css/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//mol/icon/chevron/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paginator extends $mol_bar {
        sub() {
            return [
                this.Backward(),
                this.Value(),
                this.Forward()
            ];
        }
        backward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_backward_hint');
        }
        backward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Backward_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Backward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.backward_hint();
            obj.click = (event) => this.backward(event);
            obj.sub = () => [
                this.Backward_icon()
            ];
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Value() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value()
            ];
            return obj;
        }
        forward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_forward_hint');
        }
        forward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Forward_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Forward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.forward_hint();
            obj.click = (event) => this.forward(event);
            obj.sub = () => [
                this.Forward_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "backward", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Backward_icon", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Backward", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Value", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "forward", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Forward_icon", null);
    __decorate([
        $mol_mem
    ], $mol_paginator.prototype, "Forward", null);
    $.$mol_paginator = $mol_paginator;
})($ || ($ = {}));
//mol/paginator/-view.tree/paginator.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paginator extends $.$mol_paginator {
            backward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() - 1);
            }
            forward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() + 1);
            }
        }
        $$.$mol_paginator = $mol_paginator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paginator/paginator.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paginator/paginator.view.css", "[mol_paginator] {\n\talign-items: flex-start;\n}\n\n[mol_paginator_value] {\n\tpadding: .5rem 0;\n}\n");
})($ || ($ = {}));
//mol/paginator/-css/paginator.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search_jumper extends $mol_search {
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        forward(event) {
            return this.Index().forward(event);
        }
        backward(event) {
            return this.Index().backward(event);
        }
        Index() {
            const obj = new this.$.$mol_paginator();
            obj.value = (val) => this.index(val);
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Backward(),
                this.Forward()
            ];
        }
        index(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Backward() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_shift = () => true;
            obj.key = () => ({
                enter: (event) => this.backward(event)
            });
            return obj;
        }
        escape(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Forward() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.forward(event),
                escape: (val) => this.escape(val)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Index", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "index", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Backward", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "escape", null);
    __decorate([
        $mol_mem
    ], $mol_search_jumper.prototype, "Forward", null);
    $.$mol_search_jumper = $mol_search_jumper;
})($ || ($ = {}));
//mol/search/jumper/-view.tree/jumper.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search_jumper extends $.$mol_search_jumper {
            results() {
                const needle = this.query();
                if (needle.length < 2)
                    return [];
                const root = this.Root();
                if (!root)
                    return [];
                const regexp = $mol_regexp.from({ needle }, { ignoreCase: true });
                try {
                    return [...root.view_find((_, text = '') => regexp.test(text))];
                }
                catch (error) {
                    if (!(error instanceof Promise))
                        $mol_fail_hidden(error);
                    return [];
                }
            }
            index(next) {
                this.query();
                const all = this.results();
                if (all.length == 0)
                    return 0;
                let index = next ?? super.index();
                if (index > all.length)
                    index = 1;
                if (index <= 0)
                    index = all.length;
                if (next !== undefined) {
                    const path = all[index - 1];
                    this.Root().ensure_visible(path[path.length - 1]);
                }
                return index;
            }
            anchor_content() {
                return [
                    this.Query(),
                    ...(this.query().length > 0) ? [
                        this.Clear(),
                        this.Index(),
                    ] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search_jumper.prototype, "results", null);
        __decorate([
            $mol_mem
        ], $mol_search_jumper.prototype, "index", null);
        $$.$mol_search_jumper = $mol_search_jumper;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/jumper/jumper.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_forum_outline extends $mol_icon {
        path() {
            return "M15,4V11H5.17L4,12.17V4H15M16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12V3C17,2.45 16.55,2 16,2M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z";
        }
    }
    $.$mol_icon_forum_outline = $mol_icon_forum_outline;
})($ || ($ = {}));
//mol/icon/forum/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_open_in_new extends $mol_icon {
        path() {
            return "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z";
        }
    }
    $.$mol_icon_open_in_new = $mol_icon_open_in_new;
})($ || ($ = {}));
//mol/icon/open/in/new/-view.tree/new.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_chat extends $mol_link {
        seed() {
            return "";
        }
        opened() {
            return false;
        }
        arg() {
            return {
                mol_chat: ""
            };
        }
        hint() {
            return this.title();
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        pages() {
            return [
                this.Page()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_forum_outline();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$mol_chat_title');
        }
        standalone() {
            return "";
        }
        Standalone_icon() {
            const obj = new this.$.$mol_icon_open_in_new();
            return obj;
        }
        Esternal() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.standalone();
            obj.sub = () => [
                this.Standalone_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                mol_chat: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        embed() {
            return "";
        }
        Embed() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.embed();
            return obj;
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            obj.tools = () => [
                this.Esternal(),
                this.Close()
            ];
            obj.Body = () => this.Embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Standalone_icon", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Esternal", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Embed", null);
    __decorate([
        $mol_mem
    ], $mol_chat.prototype, "Page", null);
    $.$mol_chat = $mol_chat;
})($ || ($ = {}));
//mol/chat/-view.tree/chat.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chat extends $.$mol_chat {
            opened() {
                return this.$.$mol_state_arg.value('mol_chat') !== null;
            }
            pages() {
                return this.opened() ? [this.Page()] : [];
            }
            standalone() {
                const seed = this.seed();
                const origin = new URL(this.$.$mol_state_arg.href()).origin;
                return `https://talks.hyoo.ru/#!chat=${seed}`;
            }
            embed() {
                const seed = this.seed();
                const lights = String(this.$.$mol_lights());
                const embed = this.$.$mol_state_arg.href();
                return `https://talks.hyoo.ru/#!chat=${encodeURIComponent(seed)}/mol_lights=${lights}`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_chat.prototype, "standalone", null);
        __decorate([
            $mol_mem
        ], $mol_chat.prototype, "embed", null);
        $$.$mol_chat = $mol_chat;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/chat/chat.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/chat/chat.view.css", "[mol_chat_page] {\n\tflex: 1 0 30rem;\n}\n");
})($ || ($ = {}));
//mol/chat/-css/chat.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_habhub extends $mol_book2 {
        plugins() {
            return [
                this.Theme(),
                this.Search_start()
            ];
        }
        Menu_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.menu_title();
            obj.tools = () => this.tools_root();
            obj.body = () => [
                this.Search(),
                this.Menu()
            ];
            return obj;
        }
        Details(id) {
            const obj = new this.$.$mol_page();
            obj.title = () => this.gist_current_title();
            obj.tools = () => [
                this.Details_chat(id),
                this.Created(),
                this.Details_link(),
                this.Close()
            ];
            obj.body_scroll_top = (val) => this.details_scroll_top(val);
            obj.body = () => [
                this.Datails_text()
            ];
            return obj;
        }
        Menu_row(id) {
            const obj = new this.$.$mol_link();
            obj.minimal_height = () => 40;
            obj.sub = () => [
                this.Menu_row_title(id)
            ];
            obj.arg = () => this.gist_arg(id);
            return obj;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        search_start(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Search_start() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                F: (next) => this.search_start(next)
            });
            obj.mod_ctrl = () => true;
            return obj;
        }
        menu_title() {
            return "HabHub";
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Add article";
            obj.uri = () => "https://github.com/nin-jin/habhub";
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
        Source_link() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/habhub.hyoo.ru";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        tools_root() {
            return [
                this.Add(),
                this.Source_link(),
                this.Lights()
            ];
        }
        search(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Details_body() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Search() {
            const obj = new this.$.$mol_search_jumper();
            obj.query = (val) => this.search(val);
            obj.Root = () => this.Details_body();
            return obj;
        }
        menu_rows() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_rows();
            return obj;
        }
        gist_current_title() {
            return "";
        }
        chat_seed(id) {
            return "";
        }
        chat_pages(id) {
            return this.Details_chat(id).pages();
        }
        Details_chat(id) {
            const obj = new this.$.$mol_chat();
            obj.seed = () => this.chat_seed(id);
            return obj;
        }
        gist_current_created() {
            return "";
        }
        Created() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.gist_current_created();
            return obj;
        }
        details_link() {
            return "";
        }
        Details_link() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.details_link();
            return obj;
        }
        close_arg() {
            return {
                author: null,
                repo: null,
                article: null,
                gist: null
            };
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.close_arg();
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        details_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        gist_current_content() {
            return "";
        }
        Datails_text() {
            const obj = new this.$.$mol_text();
            obj.highlight = () => this.search();
            obj.text = () => this.gist_current_content();
            return obj;
        }
        gist_title(id) {
            return "";
        }
        Menu_row_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.search();
            obj.haystack = () => this.gist_title(id);
            return obj;
        }
        gist_arg(id) {
            return {};
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Menu_page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_habhub.prototype, "Details", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_habhub.prototype, "Menu_row", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "search_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Search_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Add", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Source_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "search", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Details_body", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Search", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_habhub.prototype, "Details_chat", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Created", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Details_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "details_scroll_top", null);
    __decorate([
        $mol_mem
    ], $hyoo_habhub.prototype, "Datails_text", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_habhub.prototype, "Menu_row_title", null);
    $.$hyoo_habhub = $hyoo_habhub;
})($ || ($ = {}));
//hyoo/habhub/-view.tree/habhub.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_model extends $mol_object {
        static item(uri) {
            $mol_wire_solid();
            const instance = new this;
            instance.uri = () => uri;
            return instance;
        }
        uri() {
            return '';
        }
        resource_url() {
            return this.uri();
        }
        method_put() {
            return 'PUT';
        }
        json(next) {
            const prev = this.json_update();
            if (next)
                return this.json_update({ ...prev, ...next });
            if (next === undefined && prev !== undefined)
                return prev;
            let json = $mol_fetch.json(this.resource_url(), {
                method: next ? this.method_put() : 'GET',
                body: next && JSON.stringify(next),
                headers: {
                    'content-type': 'application/json',
                },
            });
            return this.json_update(json);
        }
        json_update(patch) {
            if (patch)
                this.json_update();
            else
                $mol_wire_solid();
            return patch;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_model.prototype, "json", null);
    __decorate([
        $mol_mem
    ], $mol_model.prototype, "json_update", null);
    __decorate([
        $mol_mem_key
    ], $mol_model, "item", null);
    $.$mol_model = $mol_model;
    function $mol_model_prop(field, make) {
        return (host, prop, descr) => {
            if (field)
                field = prop;
            const value = descr.value;
            descr.value = function (next) {
                const val = this.json(next === undefined ? undefined : { ...this.json(), [field]: next })[field];
                if (val === undefined)
                    return value.call(this);
                if (make)
                    return make(val);
                return val;
            };
        };
    }
    $.$mol_model_prop = $mol_model_prop;
})($ || ($ = {}));
//mol/model/model.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() { super(); }
        $mol_mem_force = true;
        static $mol_mem_force = true;
        static toString() { return this.name; }
    }
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//mol/mem/force/force.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_auth extends $mol_object {
        static id() { return '07c88ba2782884016182'; }
        static secret() { return '5874d66181f987a8bb2dc07bd431aad1c7a5cb38'; }
        static code_uri() { return 'https://github.com/login/oauth/authorize'; }
        static token_uri() { return 'http://cors.hyoo.ru/https://github.com/login/oauth/access_token'; }
        static cache(next) {
            return $mol_state_local.value(`${this}.cache()`, next) || { scopes: [], token: '' };
        }
        static scopes(next) {
            let cache = this.cache();
            let scopes = cache.scopes;
            for (let scope of next || []) {
                if (scopes.indexOf(scope) >= 0)
                    continue;
                scopes = scopes.concat(scope);
                this.cache({ scopes, token: '' });
            }
            return scopes;
        }
        static code(next, force) {
            const url = `${this.code_uri()}?client_id=${this.id()}&scope=${this.scopes()}`;
            return $mol_fiber_sync(() => new Promise((done, fail) => {
                const win = $mol_dom_context.open(url, '$mol_github');
                win.focus();
                const timer = setInterval(() => {
                    try {
                        win.location.href;
                    }
                    catch (error) {
                        return;
                    }
                    const search = win.location.search;
                    if (search !== undefined) {
                        const found = search.match(/\bcode=([^&]+)/);
                        if (!found)
                            return;
                        done(found[1]);
                    }
                    else {
                        fail(new Error('Can not get auth code'));
                    }
                    clearInterval(timer);
                    win.close();
                    $mol_dom_context.focus();
                }, 16);
            }))();
        }
        static token_last(next, force) {
            const cache = this.cache();
            if (force)
                this.cache({ ...cache, token: '' });
            if (!force && cache.token)
                return cache.token;
            const auth_uri = `${this.token_uri()}?code=${this.code(undefined, force)}&client_id=${this.id()}&client_secret=${this.secret()}`;
            const response = $mol_fetch.json(auth_uri, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (response.error_description) {
                return $mol_fail(new Error(response.error_description));
            }
            const token = response.access_token;
            this.cache({ ...cache, token });
            return token;
        }
        static token(scopes) {
            this.scopes(scopes);
            return this.token_last();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_auth, "cache", null);
    __decorate([
        $mol_mem
    ], $mol_github_auth, "scopes", null);
    __decorate([
        $mol_mem
    ], $mol_github_auth, "code", null);
    __decorate([
        $mol_mem
    ], $mol_github_auth, "token_last", null);
    $.$mol_github_auth = $mol_github_auth;
})($ || ($ = {}));
//mol/github/auth/auth.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_entity extends $mol_model {
        link() {
            return this.json().html_url;
        }
        id() {
            return this.json().id;
        }
        moment_created() {
            return new $mol_time_moment(this.json().created_at);
        }
        moment_updated() {
            return new $mol_time_moment(this.json().updated_at);
        }
        method_put() {
            return 'PATCH';
        }
        resource_url() {
            const auth = this.$.$mol_github_auth;
            return `${this.uri()}?client_id=${auth.id()}&client_secret=${auth.secret()}`;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_entity.prototype, "moment_created", null);
    __decorate([
        $mol_mem
    ], $mol_github_entity.prototype, "moment_updated", null);
    $.$mol_github_entity = $mol_github_entity;
})($ || ($ = {}));
//mol/github/entity/entity.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_user extends $mol_github_entity {
        name() {
            return this.uri().replace(/.*\//, '');
        }
        avatar() {
            return this.json().avatar_url;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_user.prototype, "name", null);
    $.$mol_github_user = $mol_github_user;
})($ || ($ = {}));
//mol/github/user/user.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_label extends $mol_github_entity {
        name() {
            return this.json().name;
        }
        color() {
            return this.json().color;
        }
        default() {
            return this.json().default;
        }
    }
    $.$mol_github_label = $mol_github_label;
})($ || ($ = {}));
//mol/github/label/label.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_comment extends $mol_github_entity {
        json_update(patch) {
            if (patch?.user)
                $mol_github_user.item(patch.user.url).json_update(patch.user);
            return super.json_update(patch);
        }
        issue() {
            return $mol_github_issue.item(this.json().issue_url);
        }
        user() {
            return $mol_github_user.item(this.json().user.url);
        }
        text(next) {
            return this.json($mol_maybe(next).map(next => ({ body: next }))[0]).body;
        }
    }
    $.$mol_github_comment = $mol_github_comment;
})($ || ($ = {}));
//mol/github/comment/comment.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_issue extends $mol_model {
        json_update(patch) {
            if (patch?.user)
                $mol_github_user.item(patch.user.url).json_update(patch.user);
            if (patch?.closed_by)
                $mol_github_user.item(patch.closed_by.url).json_update(patch.closed_by);
            if (patch?.assignees) {
                for (let assignee of patch.assignees) {
                    $mol_github_user.item(assignee.url).json_update(assignee);
                }
            }
            if (patch?.labels) {
                for (let label of patch.labels) {
                    $mol_github_label.item(label.url).json_update(label);
                }
            }
            return super.json_update(patch);
        }
        repository() {
            return $mol_github_repository.item(this.uri().replace(/\/[^\/]*\/[^\/]*$/, ''));
        }
        web_uri() {
            return this.json().html_url;
        }
        author() {
            return $mol_github_user.item(this.json().user.url);
        }
        owner() {
            const url = this.json().repository_url
                .replace(/\/[^\/]+$/, '')
                .replace(/\/repos\//, '/users/');
            return $mol_github_user.item(url);
        }
        number() {
            return this.json().number;
        }
        title() {
            return this.json().title;
        }
        text() {
            return this.json().body ?? this.json(null).body ?? '';
        }
        closer() {
            return $mol_maybe(this.json().closed_by).map(json => $mol_github_user.item(json.url))[0] || null;
        }
        assignees() {
            return this.json().assignees.map(json => $mol_github_user.item(json.url));
        }
        labels() {
            return this.json().labels.map(json => $mol_github_label.item(json.url));
        }
        moment_created() {
            return new $mol_time_moment(this.json().created_at);
        }
        moment_updated() {
            return new $mol_time_moment(this.json().updated_at);
        }
        comments() {
            return $mol_github_issue_comments.item(`${this.uri()}/comments`);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_issue.prototype, "text", null);
    __decorate([
        $mol_mem
    ], $mol_github_issue.prototype, "assignees", null);
    __decorate([
        $mol_mem
    ], $mol_github_issue.prototype, "labels", null);
    __decorate([
        $mol_mem
    ], $mol_github_issue.prototype, "moment_created", null);
    __decorate([
        $mol_mem
    ], $mol_github_issue.prototype, "moment_updated", null);
    __decorate([
        $mol_mem
    ], $mol_github_issue.prototype, "comments", null);
    $.$mol_github_issue = $mol_github_issue;
    class $mol_github_issue_comments extends $mol_model {
        json_update(patch) {
            for (let comment of patch) {
                $mol_github_comment.item(comment.url).json_update(comment);
            }
            return super.json_update(patch);
        }
        items(next) {
            return this.json(next).map(json => $mol_github_comment.item(json.url));
        }
        add(config, next) {
            if (!config)
                return;
            try {
                const json = $mol_fetch.json(this.uri() + '?', {
                    method: 'POST',
                    headers: {
                        'Authorization': `token ${$mol_github_auth.token(['public_repo'])}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ body: config.text })
                });
                const comment = $mol_github_comment.item(json.url);
                comment.json(json);
                this.json(null);
                return comment;
            }
            catch (error) {
                if (error.message === 'Unauthorized') {
                    $mol_github_auth.token_last(undefined, $mol_mem_force_update);
                }
                throw error;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_issue_comments.prototype, "items", null);
    __decorate([
        $mol_mem_key
    ], $mol_github_issue_comments.prototype, "add", null);
    $.$mol_github_issue_comments = $mol_github_issue_comments;
})($ || ($ = {}));
//mol/github/issue/issue.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_repository extends $mol_github_entity {
        json_update(patch) {
            if (patch?.owner)
                $mol_github_user.item(patch.owner.url).json_update(patch.owner);
            return super.json_update(patch);
        }
        owner() {
            return $mol_github_user.item(this.json().owner.url);
        }
        name() {
            return this.uri().match(/[^\/]+$/)[0];
        }
        name_full() {
            return this.uri().match(/[^\/]+\/[^\/]+$/)[0];
        }
        issues() {
            return $mol_github_repository_issues.item(`${this.uri()}/issues`);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_repository.prototype, "issues", null);
    $.$mol_github_repository = $mol_github_repository;
    class $mol_github_repository_issues extends $mol_model {
        json_update(patch) {
            for (let issue of patch) {
                $mol_github_issue.item(issue.url).json_update(issue);
            }
            return super.json_update(patch);
        }
        items(next) {
            return this.json(next).map(json => $mol_github_issue.item(json.url));
        }
        add(config, next, force) {
            if (!config)
                return;
            try {
                const json = $mol_fetch.json(this.uri() + '?', {
                    method: 'POST',
                    headers: {
                        'Authorization': `token ${$mol_github_auth.token(['public_repo'])}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title: config.title, body: config.text })
                });
                const comment = $mol_github_issue.item(json.url);
                comment.json(json);
                this.json(null);
                return comment;
            }
            catch (error) {
                if (error.message === 'Unauthorized') {
                    $mol_github_auth.token_last(undefined, $mol_mem_force_update);
                }
                throw error;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_repository_issues.prototype, "items", null);
    __decorate([
        $mol_mem_key
    ], $mol_github_repository_issues.prototype, "add", null);
    $.$mol_github_repository_issues = $mol_github_repository_issues;
})($ || ($ = {}));
//mol/github/repository/repository.ts
;
"use strict";
var $;
(function ($) {
    class $mol_github_search_issues extends $mol_model {
        json_update(patch) {
            if (patch) {
                for (let issue of patch.items) {
                    $mol_github_issue.item(issue.url).json_update(issue);
                }
            }
            return super.json_update(patch);
        }
        items(next) {
            return this.json(next).items.map(json => $mol_github_issue.item(json.url));
        }
        resource_url() {
            const auth = this.$.$mol_github_auth;
            return `${this.uri()}&client_id=${auth.id()}&client_secret=${auth.secret()}`;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_github_search_issues.prototype, "items", null);
    $.$mol_github_search_issues = $mol_github_search_issues;
})($ || ($ = {}));
//mol/github/search/issues/issues.ts
;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                self['skipWaiting']();
            });
            self.addEventListener('activate', (event) => {
                caches.delete('v1');
                caches.delete('$mol_offline');
                self['clients'].claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET' || !/^https?:/.test(request.url)) {
                    return event.respondWith(fetch(request));
                }
                const fresh = fetch(event.request).then(response => {
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(event.request, response)));
                    return response.clone();
                });
                event.waitUntil(fresh);
                event.respondWith(caches.match(event.request).then(response => response || fresh));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register('web.js');
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//mol/offline/offline.web.ts
;
"use strict";
var $;
(function ($) {
    $mol_offline();
})($ || ($ = {}));
//mol/offline/install/install.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_habhub extends $.$hyoo_habhub {
            search_start(event) {
                event?.preventDefault();
                this.Search().Query().bring();
            }
            uriSource() {
                const search = this.search();
                if (search.length < 2)
                    return 'hyoo/habhub/data/issues.json?';
                this.$.$mol_wait_timeout(500);
                const query = `label:HabHub is:open "${search}"`;
                return `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&per_page=100`;
            }
            gists() {
                return $mol_github_search_issues.item(this.uriSource()).items();
            }
            gists_dict() {
                const dict = {};
                for (let gist of this.gists()) {
                    dict[gist.uri()] = gist;
                }
                return dict;
            }
            gist(uri) {
                return this.gists_dict()[uri];
            }
            gist_current() {
                const uri = this.$.$mol_state_arg.value('gist');
                if (uri)
                    return $mol_github_issue.item(uri);
                if (!this.owner())
                    return null;
                if (!this.repo())
                    return null;
                if (!this.article())
                    return null;
                return $mol_github_issue.item(`https://api.github.com/repos/${this.owner()}/${this.repo()}/issues/${this.article()}`);
            }
            details_link() {
                return `https://github.com/${this.owner()}/${this.repo()}/issues/${this.article()}`;
            }
            Details_body() {
                const gist = this.gist_current();
                return gist ? this.Details(gist).Body() : null;
            }
            owner() {
                return this.$.$mol_state_arg.value('author');
            }
            repo() {
                return this.$.$mol_state_arg.value('repo');
            }
            article() {
                return this.$.$mol_state_arg.value('article');
            }
            pages() {
                const gist = this.gist_current();
                return [
                    this.Menu_page(),
                    ...gist ? [
                        this.Details(gist),
                        ...this.chat_pages(gist),
                    ] : []
                ];
            }
            chat_seed(issue) {
                return issue.uri().replace(/.*\/repos\//, '');
            }
            menu_rows() {
                return this.gists()
                    .map(gist => this.Menu_row(gist.uri()));
            }
            gist_title(uri) {
                return this.gist(uri).title();
            }
            gist_arg(uri) {
                const gist = this.gist(uri);
                return {
                    author: gist.owner().name(),
                    repo: gist.repository().name(),
                    article: String(gist.number()),
                    gist: null,
                };
            }
            gist_current_title() {
                return this.gist_current().title();
            }
            gist_current_content() {
                return this.gist_current().text();
            }
            gist_current_issue() {
                return this.gist_current();
            }
            gist_current_created() {
                return this.gist_current().moment_created().toString('YYYY-MM-DD');
            }
            details_scroll_top(next) {
                const current = this.gist_current();
                return $mol_state_session.value(`${this}.details_scroll_top(${current.uri()})`, next);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "uriSource", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "gists", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "gists_dict", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "gist_current", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "details_link", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "Details_body", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "pages", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_habhub.prototype, "chat_seed", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "menu_rows", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_habhub.prototype, "gist_title", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_habhub.prototype, "gist_arg", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "gist_current_created", null);
        __decorate([
            $mol_mem
        ], $hyoo_habhub.prototype, "details_scroll_top", null);
        $$.$hyoo_habhub = $hyoo_habhub;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/habhub/habhub.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/habhub/habhub.view.css", "[hyoo_habhub] {\n\tmargin: 0;\n}\n\n[hyoo_habhub_created] {\n\tpadding: var(--mol_gap_text);\n}\n\n[hyoo_habhub_search] {\n\tflex: none;\n\talign-self: stretch;\n}\n\n[hyoo_habhub_menu_page_body] {\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_habhub_menu_page] {\n\tflex: 0 0 25rem;\n\twidth: 100%;\n}\n\n[hyoo_habhub_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[hyoo_habhub_placeholder] {\n\t/* flex: 1 1 600px; */\n}\n\n[hyoo_habhub_details] {\n\tflex: 0 0 60rem;\n}\n\n[hyoo_habhub_details_body] {\n\tpadding: 0;\n}\n\n[hyoo_habhub_details_chat] {\n\tbox-shadow: none;\n}\n\n[hyoo_habhub_datails_text] {\n\tpadding: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//hyoo/habhub/-css/habhub.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_portion_indicator extends $mol_view {
        style() {
            return {
                ...super.style(),
                width: this.width_style()
            };
        }
        width_style() {
            return "0";
        }
    }
    $.$mol_portion_indicator = $mol_portion_indicator;
    class $mol_portion extends $mol_view {
        portion() {
            return 0;
        }
        sub() {
            return [
                this.indicator()
            ];
        }
        indicator_width_style() {
            return "0";
        }
        indicator() {
            const obj = new this.$.$mol_portion_indicator();
            obj.width_style = () => this.indicator_width_style();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_portion.prototype, "indicator", null);
    $.$mol_portion = $mol_portion;
})($ || ($ = {}));
//mol/portion/-view.tree/portion.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_portion extends $.$mol_portion {
            indicator_width_style() {
                return this.portion() * 100 + '%';
            }
        }
        $$.$mol_portion = $mol_portion;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/portion/portion.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/portion/portion.view.css", "[mol_portion] {\n\tdisplay: inline-flex;\n\tflex: 0 1 8rem;\n\twidth: 8rem;\n\tmax-height: calc( 1rem + 1.5em );\n\talign-self: stretch;\n\tvertical-align: inherit;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: var(--mol_theme_line);\n}\n\n[mol_portion_indicator] {\n\tpadding: .25rem 0 0;\n\tbackground-color: var(--mol_theme_control);\n\tcolor: var(--mol_theme_control);\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/portion/-css/portion.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_slides_page extends $mol_book2 {
        role() {
            return "";
        }
        contents(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        slide(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Placeholder() {
            return null;
        }
        pages() {
            return [
                this.Speaker(),
                this.Listener()
            ];
        }
        speaker_tools() {
            return [];
        }
        uri_base() {
            return "";
        }
        speaker_content() {
            return [];
        }
        Speaker_content() {
            const obj = new this.$.$mol_text();
            obj.uri_base = () => this.uri_base();
            obj.flow_tokens = () => this.speaker_content();
            return obj;
        }
        Speaker() {
            const obj = new this.$.$mol_page();
            obj.minimal_width = () => 300;
            obj.head = () => this.speaker_tools();
            obj.body = () => [
                this.Speaker_content()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        listener_width() {
            return 600;
        }
        listener_content() {
            return [];
        }
        Listener_content() {
            const obj = new this.$.$mol_text();
            obj.code_sidebar_showed = () => false;
            obj.minimal_height = () => 0;
            obj.uri_base = () => this.uri_base();
            obj.flow_tokens = () => this.listener_content();
            return obj;
        }
        uri_page() {
            return "";
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri_page();
            obj.sub = () => [
                this.uri_page()
            ];
            obj.minimal_height = () => 24;
            return obj;
        }
        progress() {
            return 0;
        }
        Progress() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.progress();
            return obj;
        }
        Listener_head() {
            return this.Listener().Head();
        }
        Listener() {
            const obj = new this.$.$mol_page();
            obj.tools = () => this.tools();
            obj.minimal_width = () => this.listener_width();
            obj.title = () => this.title();
            obj.Tools = () => null;
            obj.sub = () => [
                this.Listener_head(),
                this.Listener_content(),
                this.Link(),
                this.Progress()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "contents", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "slide", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "Speaker_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "Speaker", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "Listener_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "Link", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "Progress", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides_page.prototype, "Listener", null);
    $.$hyoo_slides_page = $hyoo_slides_page;
})($ || ($ = {}));
//hyoo/slides/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_slides_page extends $.$hyoo_slides_page {
            uri_page() {
                return this.uri_base() + `#slide=${this.slide()}`;
            }
            pages() {
                return [
                    ...this.role() === 'listener' ? [] : [this.Speaker()],
                    this.Listener(),
                ];
            }
        }
        $$.$hyoo_slides_page = $hyoo_slides_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/slides/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/slides/page/page.view.css", "[hyoo_slides_page] {\n\tdisplay: flex;\n\theight: 100%;\n\twidth: 100%;\n\tflex: none;\n}\n\n[hyoo_slides_page_listener_title] {\n\tjustify-content: center;\n}\n\n[hyoo_slides_page_speaker] {\n\tflex: 1 1 30rem;\n\tmax-width: 80vw;\n\tmin-width: 20vw;\n}\n\n[hyoo_slides_page_speaker_head] {\n\tflex-wrap: nowrap;\n}\n\n[hyoo_slides_page_listener] {\n\tflex: 1 1 100vh;\n\tbackground-color: var(--mol_theme_back);\n}\n\n[hyoo_slides_page_speaker_body] {\n\tfont-size: 1rem;\n}\n\n[hyoo_slides_page_speaker_body] ,\n[hyoo_slides_page_listener_body] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0;\n}\n\n[hyoo_slides_page_speaker_content] {\n\tflex: 1 0 auto;\n\tmax-width: none;\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_slides_page_listener_content] {\n\tflex: 1 1 auto;\n\tmargin: auto 0;\n\tpadding: .5rem;\n\tmax-width: none;\n\tflex-wrap: wrap;\n\talign-content: space-evenly;\n\tjustify-content: space-evenly;\n\talign-items: flex-start;\n\tbox-shadow: none;\n\tbackground: none;\n\tflex-direction: row;\n}\n[hyoo_slides_page_listener_content] > * {\n\tflex-shrink: 1;\n}\n[hyoo_slides_page_listener_content] [mol_text] {\n\tmax-width: none;\n}\n\n[hyoo_slides_page_slide_number] {\n\tmargin: .5rem;\n\tword-break: normal;\n}\n\n[hyoo_slides_page_listener_content_row] {\n\tmargin: .5rem;\n}\n\n/* [hyoo_slides_page_listener_content_quote] {\n\tmax-width: 30em;\n} */\n\n[hyoo_slides_page] [mol_text_type=\"code\"] ,\n[hyoo_slides_page] [mol_text_type=\"code-indent\"] {\n\twhite-space: pre;\n}\n\n[hyoo_slides_page_listener_content_quote] {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-shadow: none;\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[hyoo_slides_page_progress] {\n\tflex: 0 0 auto;\n\twidth: auto;\n}\n\n[hyoo_slides_page_link] {\n\tpadding: 0 .75rem;\n\tjustify-content: center;\n}\n");
})($ || ($ = {}));
//hyoo/slides/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_microphone extends $mol_icon {
        path() {
            return "M12,2C13.66,2 15,3.34 15,5V11C15,12.66 13.66,14 12,14C10.34,14 9,12.66 9,11V5C9,3.34 10.34,2 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7C7,13.76 9.24,16 12,16C14.76,16 17,13.76 17,11H19Z";
        }
    }
    $.$mol_icon_microphone = $mol_icon_microphone;
})($ || ($ = {}));
//mol/icon/microphone/-view.tree/microphone.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_external extends $mol_icon {
        path() {
            return "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z";
        }
    }
    $.$mol_icon_external = $mol_icon_external;
})($ || ($ = {}));
//mol/icon/external/-view.tree/external.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        get length() {
            return super.length;
        }
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        powered0(mult) {
            return this.map(value => value ** mult);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
        center() {
            const Result = this[0].constructor;
            return new Result(...this[0].map((_, i) => this.reduce((sum, point) => sum + point[i], 0) / this.length));
        }
        distance() {
            let distance = 0;
            for (let i = 1; i < this.length; ++i) {
                distance += this[i - 1].reduce((sum, min, j) => sum + (min - this[i][j]) ** 2, 0) ** (1 / this[i].length);
            }
            return distance;
        }
        transponed() {
            return this[0].map((_, i) => this.map(row => row[i]));
        }
        get x() { return this[0]; }
        set x(next) { this[0] = next; }
        get y() { return this[1]; }
        set y(next) { this[1] = next; }
        get z() { return this[2]; }
        set z(next) { this[2] = next; }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        0;
        1;
        constructor(min, max = min) {
            super(min, max);
            this[0] = min;
            this[1] = max;
        }
        get min() { return this[0]; }
        set min(next) { this[0] = next; }
        get max() { return this[1]; }
        set max(next) { this[1] = next; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//mol/vector/vector.ts
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $mol_plugin {
        start_zoom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        start_distance(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        allow_draw() {
            return true;
        }
        allow_pan() {
            return true;
        }
        allow_zoom() {
            return true;
        }
        action_type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        action_point(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pan(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        pointer_center() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pos(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        draw_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        draw_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none",
                "overscroll-behavior": "none"
            };
        }
        event() {
            return {
                ...super.event(),
                pointerdown: (event) => this.event_start(event),
                pointermove: (event) => this.event_move(event),
                pointerup: (event) => this.event_end(event),
                pointerleave: (event) => this.event_leave(event),
                wheel: (event) => this.event_wheel(event)
            };
        }
        event_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_wheel(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "action_type", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "action_point", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "pointer_center", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw_start", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "draw_end", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//mol/touch/-view.tree/touch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            auto() {
                this.pointer_events();
                this.start_pan();
                this.start_pos();
                this.start_distance();
                this.start_zoom();
                this.action_type();
                this.view_rect();
            }
            pointer_events(next = []) {
                return next;
            }
            pointer_coords() {
                const events = this.pointer_events();
                const touches = events.filter(e => e.pointerType === 'touch');
                const pens = events.filter(e => e.pointerType === 'pen');
                const mouses = events.filter(e => !e.pointerType || e.pointerType === 'mouse');
                const choosen = touches.length ? touches : pens.length ? pens : mouses;
                return new $mol_vector(...choosen.map(event => this.event_coords(event)));
            }
            pointer_center() {
                const coords = this.pointer_coords();
                return coords.length ? coords.center() : new $mol_vector_2d(NaN, NaN);
            }
            event_coords(event) {
                const { left, top } = this.view_rect();
                return new $mol_vector_2d(Math.round(event.pageX - left), Math.round(event.pageY - top));
            }
            action_point() {
                const coord = this.pointer_center();
                if (!coord)
                    return null;
                const zoom = this.zoom();
                const pan = this.pan();
                return new $mol_vector_2d((coord.x - pan.x) / zoom, (coord.y - pan.y) / zoom);
            }
            event_eat(event) {
                if (event instanceof PointerEvent) {
                    const events = this.pointer_events()
                        .filter(e => e instanceof PointerEvent)
                        .filter(e => e.pointerId !== event.pointerId);
                    if (event.type !== 'pointerup' && event.type !== 'pointerleave')
                        events.push(event);
                    this.pointer_events(events);
                    const touch_count = events.filter(e => e.pointerType === 'touch').length;
                    if (this.allow_zoom() && touch_count === 2) {
                        return this.action_type('zoom');
                    }
                    if (this.action_type() === 'zoom' && touch_count === 1) {
                        return this.action_type('zoom');
                    }
                    let button;
                    (function (button) {
                        button[button["left"] = 1] = "left";
                        button[button["right"] = 2] = "right";
                        button[button["middle"] = 4] = "middle";
                    })(button || (button = {}));
                    if (events.length > 0) {
                        if (event.ctrlKey && this.allow_zoom())
                            return this.action_type('zoom');
                        if (event.buttons === button.left && this.allow_draw())
                            return this.action_type('draw');
                        if (event.buttons && this.allow_pan())
                            return this.action_type('pan');
                    }
                    return this.action_type('');
                }
                if (event instanceof WheelEvent) {
                    this.pointer_events([event]);
                    if (event.shiftKey)
                        return this.action_type('pan');
                    return this.action_type('zoom');
                }
                return this.action_type('');
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                const action_type = this.event_eat(event);
                if (!action_type)
                    return;
                const coords = this.pointer_coords();
                this.start_pos(coords.center());
                if (action_type === 'draw') {
                    this.draw_start(event);
                    return;
                }
                this.start_distance(coords.distance());
                this.start_zoom(this.zoom());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const rect = this.view_rect();
                if (!rect)
                    return;
                const start_pan = this.start_pan();
                const action_type = this.event_eat(event);
                const start_pos = this.start_pos();
                let pos = this.pointer_center();
                if (!action_type)
                    return;
                if (!start_pos)
                    return;
                if (action_type === 'draw') {
                    const distance = new $mol_vector(start_pos, pos).distance();
                    if (distance >= 4) {
                        this.draw(event);
                    }
                    return;
                }
                if (action_type === 'pan') {
                    this.dom_node().setPointerCapture(event.pointerId);
                    this.pan(new $mol_vector_2d(start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]));
                }
                const precision = this.swipe_precision();
                if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                    || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                    || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                    && pos[0] - start_pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_right(event);
                }
                if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                    || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                    || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                    && start_pos[0] - pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_left(event);
                }
                if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                    || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                    || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                    && pos[1] - start_pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_bottom(event);
                }
                if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                    || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                    || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                    && start_pos[1] - pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_top(event);
                }
                if (action_type === 'zoom') {
                    const coords = this.pointer_coords();
                    const distance = coords.distance();
                    const start_distance = this.start_distance();
                    const center = coords.center();
                    const start_zoom = this.start_zoom();
                    let mult = Math.abs(distance - start_distance) < 32 ? 1 : distance / start_distance;
                    this.zoom(start_zoom * mult);
                    const pan = new $mol_vector_2d((start_pan[0] - center[0] + pos[0] - start_pos[0]) * mult + center[0], (start_pan[1] - center[1] + pos[1] - start_pos[1]) * mult + center[1]);
                    this.pan(pan);
                }
            }
            event_end(event) {
                const action = this.action_type();
                if (action === 'draw') {
                    this.draw_end(event);
                }
                this.event_leave(event);
            }
            event_leave(event) {
                this.event_eat(event);
                this.dom_node().releasePointerCapture(event.pointerId);
                this.start_pos(null);
            }
            swipe_left(event) {
                if (this.view_rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.view_rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.view_rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.view_rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_wheel(event) {
                if (event.defaultPrevented)
                    return;
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const action_type = this.event_eat(event);
                if (action_type === 'zoom') {
                    const zoom_prev = this.zoom() || 0.001;
                    const zoom_next = zoom_prev * (1 - .001 * Math.min(event.deltaY, 100));
                    const mult = zoom_next / zoom_prev;
                    this.zoom(zoom_next);
                    const pan_prev = this.pan();
                    const center = this.pointer_center();
                    const pan_next = pan_prev.multed0(mult).added1(center.multed0(1 - mult));
                    this.pan(pan_next);
                }
                if (action_type === 'pan') {
                    const pan_prev = this.pan();
                    const pan_next = new $mol_vector_2d(pan_prev.x - event.deltaX, pan_prev.y - event.deltaY);
                    this.pan(pan_next);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_events", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_coords", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "pointer_center", null);
        __decorate([
            $mol_mem
        ], $mol_touch.prototype, "action_point", null);
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/touch/touch.view.ts
;
"use strict";
var $;
(function ($) {
    function $mol_range2(item = index => index, size = () => Number.POSITIVE_INFINITY) {
        return new Proxy(new $mol_range2_array(), {
            get(target, field) {
                if (typeof field === 'string') {
                    if (field === 'length')
                        return size();
                    const index = Number(field);
                    if (index === Math.trunc(index))
                        return item(index);
                }
                return target[field];
            },
            set(target, field) {
                return $mol_fail(new TypeError('Lazy range is read only'));
            },
            ownKeys(target) {
                return [...Array(size())].map((v, i) => String(i)).concat('length');
            },
            getOwnPropertyDescriptor(target, field) {
                if (field === "length")
                    return {
                        value: size(),
                        writable: true,
                        enumerable: false,
                        configurable: false,
                    };
                const index = Number(field);
                if (index === Math.trunc(index))
                    return {
                        get: () => this.get(target, field, this),
                        enumerable: true,
                        configurable: true,
                    };
                return Object.getOwnPropertyDescriptor(target, field);
            }
        });
    }
    $.$mol_range2 = $mol_range2;
    class $mol_range2_array extends Array {
        concat(...tail) {
            if (tail.length === 0)
                return this;
            if (tail.length > 1) {
                let list = this;
                for (let item of tail)
                    list = list.concat(item);
                return list;
            }
            return $mol_range2(index => index < this.length ? this[index] : tail[0][index - this.length], () => this.length + tail[0].length);
        }
        filter(check, context) {
            const filtered = new $mol_range2_array();
            for (let index = 0; index < this.length; ++index) {
                const item = this[index];
                if (check.call(context, item, index, this))
                    filtered.push(item);
            }
            return filtered;
        }
        forEach(proceed, context) {
            for (let [key, value] of this.entries())
                proceed.call(context, value, key, this);
        }
        map(proceed, context) {
            return $mol_range2(index => proceed.call(context, this[index], index, this), () => this.length);
        }
        reduce(merge, result) {
            let index = 0;
            if (arguments.length === 1) {
                result = this[index++];
            }
            for (; index < this.length; ++index) {
                result = merge(result, this[index], index, this);
            }
            return result;
        }
        slice(from = 0, to = this.length) {
            return $mol_range2(index => this[from + index], () => Math.min(to, this.length) - from);
        }
        some(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (check.call(context, this[index], index, this))
                    return true;
            }
            return false;
        }
        every(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (!check.call(context, this[index], index, this))
                    return false;
            }
            return true;
        }
    }
    $.$mol_range2_array = $mol_range2_array;
})($ || ($ = {}));
//mol/range2/range2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_defer = $mol_after_frame;
})($ || ($ = {}));
//mol/defer/defer.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speech extends $mol_plugin {
        static speaker_make() {
            return new Promise(done => {
                const API = $mol_dom_context.speechSynthesis;
                if (API.getVoices().length)
                    return done(API);
                const on_voices = (event) => {
                    if (!API.getVoices().length)
                        return;
                    API.removeEventListener('voiceschanged', on_voices);
                    done(API);
                };
                API.addEventListener('voiceschanged', on_voices);
            });
        }
        static speaker() {
            return $mol_wire_sync(this).speaker_make();
        }
        static voices() {
            const lang = this.$.$mol_locale.lang();
            return this.speaker().getVoices().filter(voice => voice.lang.split('-')[0] === lang);
        }
        static say(text) {
            const speaker = this.speaker();
            speaker.cancel();
            speaker.resume();
            const rate = 1;
            const voice = this.voices()[this.voices().length - 1];
            const pitch = 1;
            var utter = new SpeechSynthesisUtterance(text);
            utter.voice = voice;
            utter.rate = rate;
            utter.pitch = pitch;
            speaker.speak(utter);
            return null;
        }
        static speaking(next = true) {
            if (next)
                this.speaker().resume();
            else
                this.speaker().pause();
            return next;
        }
        static hearer() {
            $mol_wire_solid();
            const API = window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'];
            const api = new API;
            api.interimResults = true;
            api.maxAlternatives = 1;
            api.continuous = true;
            api.lang = $mol_locale.lang();
            api.onnomatch = (event) => {
                api.stop();
                return null;
            };
            api.onresult = (event) => {
                this.recognition_index([...event.results].filter(res => res.isFinal).length);
                const recognition = event.results[event.resultIndex];
                const index = event.resultIndex + this.recognition_offset();
                this.recognition(index, recognition);
                return null;
            };
            api.onerror = (event) => {
                if (event.error === 'no-speech')
                    return null;
                console.log(event);
                console.error(new Error(event.error || event));
                api.stop();
                return null;
            };
            api.onend = (event) => {
                if (this.recognition_index() > 0) {
                    this.recognition_offset(this.recognition_offset() + this.recognition_index());
                }
                this.recognition_index(-1);
                if (this.hearing())
                    api.start();
            };
            api.onspeechend = (event) => {
                api.stop();
            };
            return api;
        }
        static hearing(next) {
            if (next === undefined)
                return false;
            if (next) {
                this.hearer().start();
            }
            else {
                this.hearer().stop();
            }
            return next;
        }
        static recognition_index(next = -1) {
            $mol_wire_solid();
            return next;
        }
        static recognition_offset(next = 0) {
            $mol_wire_solid();
            return next;
        }
        static recognition(index, next) {
            $mol_wire_solid();
            return next ?? null;
        }
        static recognitions() {
            if (!this.hearing())
                return [];
            return $mol_range2(index => this.recognition(index), () => Math.max(0, this.recognition_index() + this.recognition_offset()));
        }
        static commands() {
            return this.recognitions().map(result => result[0].transcript.toLowerCase().trim().replace(/[,\.]/g, ''));
        }
        static text() {
            return this.recognitions().map(result => result[0].transcript).join('');
        }
        commands_skip(next = 0) {
            $mol_wire_solid();
            $mol_speech.hearing();
            return next;
        }
        render() {
            const matchers = this.matchers();
            const commands = $mol_speech.commands();
            for (let i = this.commands_skip(); i < commands.length; ++i) {
                for (let matcher of matchers) {
                    const found = commands[i].match(matcher);
                    if (!found)
                        continue;
                    new $mol_defer(() => {
                        if (this.event_catch(found.slice(1))) {
                            this.commands_skip(i + 1);
                        }
                    });
                    return null;
                }
            }
            return null;
        }
        event_catch(found) {
            return false;
        }
        patterns() {
            return [];
        }
        matchers() {
            return this.patterns().map(pattern => {
                return new RegExp(this.prefix() + pattern + this.suffix(), 'i');
            });
        }
        prefix() {
            return '';
        }
        suffix() {
            return '[,\\s]+(?:please|would you kindly|пожалуйста|пожалуй 100|будь любезен|будь любезна|будь добра?)\.?$';
        }
    }
    __decorate([
        $mol_mem
    ], $mol_speech.prototype, "commands_skip", null);
    __decorate([
        $mol_mem
    ], $mol_speech.prototype, "render", null);
    __decorate([
        $mol_mem
    ], $mol_speech.prototype, "matchers", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "speaker", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "voices", null);
    __decorate([
        $mol_action
    ], $mol_speech, "say", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "speaking", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "hearer", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "hearing", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "recognition_index", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "recognition_offset", null);
    __decorate([
        $mol_mem_key
    ], $mol_speech, "recognition", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "recognitions", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "commands", null);
    __decorate([
        $mol_mem
    ], $mol_speech, "text", null);
    $.$mol_speech = $mol_speech;
})($ || ($ = {}));
//mol/speech/speech.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_slides extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                hyoo_slides_role: this.role()
            };
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none"
            };
        }
        contents(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        auto() {
            return [
                this.message_listener()
            ];
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Slides";
            obj.tools = () => this.menu_tools();
            obj.body = () => [
                this.Menu_items()
            ];
            return obj;
        }
        Menu_item(id) {
            const obj = new this.$.$mol_link();
            obj.title = () => this.menu_item_title(id);
            obj.arg = () => ({
                slides: this.menu_item_uri(id)
            });
            return obj;
        }
        menu_options() {
            return {
                "https://nin-jin.github.io/slides/slides/": "Презентация приложения для проведения презентаций",
                "https://nin-jin.github.io/slides/reactivity/": "Разбираемся в сортах реактивности",
                "https://nin-jin.github.io/slides/orp/": "Объектное Реактивное Программирование",
                "https://nin-jin.github.io/slides/tree/": "Tree - единый AST чтобы править всеми",
                "https://nin-jin.github.io/slides/sourcemap/": "Что не так с сорсмапами и как с ними не связываться?",
                "https://nin-jin.github.io/slides/virt/": "Автоматическая виртуализация рендеринга произвольной вёрстки",
                "https://nin-jin.github.io/slides/css-in-ts/": "Продвинутый CSS-in-TS",
                "https://nin-jin.github.io/slides/mol/": "$mol - лучшее средство от геморроя",
                "https://nin-jin.github.io/slides/fibers/": "Квантовая механика вычисления на JS",
                "https://nin-jin.github.io/slides/testing/": "Фрактальное тестирование",
                "https://nin-jin.github.io/slides/consensus/": "Консистентно о Консенсусе",
                "https://nin-jin.github.io/slides/absurd/": "Проблема останова лжеца Гёделя и брадобрея Кантора"
            };
        }
        Loader() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.uri_slides();
            return obj;
        }
        Page(id) {
            const obj = new this.$.$hyoo_slides_page();
            obj.tools = () => this.tools();
            obj.title = () => this.page_title(id);
            obj.slide = (val) => this.page_slide(id, val);
            obj.uri_base = () => this.uri_base();
            obj.role = () => this.role();
            obj.listener_content = () => this.listener_content(id);
            obj.speaker_content = () => this.speaker_content(id);
            obj.progress = () => this.progress(id);
            obj.speaker_tools = () => this.speaker_tools();
            return obj;
        }
        plugins() {
            return [
                this.Theme(),
                this.Nav(),
                this.Touch(),
                this.Speech_next(),
                this.Speech_next_auto(),
                this.Speech_slide(),
                this.Speech_prev(),
                this.Speech_start(),
                this.Speech_end(),
                this.Speech_about(),
                this.Speech_repeat(),
                this.Speech_on(),
                this.Speech_off(),
                this.Lights_toggle(),
                this.Sing()
            ];
        }
        role() {
            return "";
        }
        message_listener() {
            return null;
        }
        Source_link() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/slides.hyoo.ru";
            return obj;
        }
        menu_tools() {
            return [
                this.Source_link()
            ];
        }
        menu_items() {
            return [];
        }
        Menu_items() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        menu_item_title(id) {
            return "";
        }
        menu_item_uri(id) {
            return "";
        }
        uri_slides() {
            return "";
        }
        tools() {
            return [];
        }
        page_title(id) {
            return "";
        }
        page_slide(id, val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        uri_base() {
            return "";
        }
        listener_content(id) {
            return [];
        }
        speaker_content(id) {
            return [];
        }
        progress(id) {
            return 0;
        }
        Speech_toggle_icon() {
            const obj = new this.$.$mol_icon_microphone();
            return obj;
        }
        speech_enabled(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        speech_toggle_hint() {
            return this.$.$mol_locale.text('$hyoo_slides_speech_toggle_hint');
        }
        Speech_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Speech_toggle_icon();
            obj.checked = (val) => this.speech_enabled(val);
            obj.hint = () => this.speech_toggle_hint();
            return obj;
        }
        speech_text() {
            return "";
        }
        Speech_text() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.speech_text()
            ];
            return obj;
        }
        Paginator() {
            const obj = new this.$.$mol_paginator();
            obj.value = (val) => this.slide(val);
            return obj;
        }
        open_listener_hint() {
            return this.$.$mol_locale.text('$hyoo_slides_open_listener_hint');
        }
        Open_listener_icon() {
            const obj = new this.$.$mol_icon_external();
            return obj;
        }
        Open_listener() {
            const obj = new this.$.$mol_link();
            obj.target = () => "_blank";
            obj.hint = () => this.open_listener_hint();
            obj.arg = () => ({
                role: "listener",
                slide: null
            });
            obj.sub = () => [
                this.Open_listener_icon()
            ];
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                slides: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        speaker_tools() {
            return [
                this.Speech_toggle(),
                this.Speech_text(),
                this.Paginator(),
                this.Open_listener(),
                this.Lights(),
                this.Close()
            ];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        slide_keys() {
            return [];
        }
        slide(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.slide_keys();
            obj.keys_x = () => this.slide_keys();
            obj.current_y = (val) => this.slide(val);
            obj.current_x = (val) => this.slide(val);
            return obj;
        }
        event_next(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_prev(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.swipe_to_left = (event) => this.event_next(event);
            obj.swipe_to_right = (event) => this.event_prev(event);
            return obj;
        }
        speech_next() {
            return [
                "next",
                "forward",
                "дальше",
                "далее",
                "даша",
                "дарья",
                "дай",
                "доля",
                "удали",
                "впер[её]д",
                "период",
                "перевод",
                "следующий слайд"
            ];
        }
        Speech_next() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_next(val);
            obj.patterns = () => this.speech_next();
            return obj;
        }
        speech_next_auto() {
            return [];
        }
        Speech_next_auto() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_next(val);
            obj.suffix = () => "";
            obj.patterns = () => this.speech_next_auto();
            return obj;
        }
        event_slide(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_slide() {
            return [
                "number (\\d+)",
                "(\\d+) slide",
                "номер (\\d+)",
                "(\\d+) слайд"
            ];
        }
        Speech_slide() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_slide(val);
            obj.patterns = () => this.speech_slide();
            return obj;
        }
        speech_prev() {
            return [
                "back",
                "назад",
                "назар",
                "надо",
                "предыдущий слайд"
            ];
        }
        Speech_prev() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_prev(val);
            obj.patterns = () => this.speech_prev();
            return obj;
        }
        event_start(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_start() {
            return [
                "to beginning",
                "first slide",
                "начало",
                "начала",
                "первый слайд",
                "первый слой"
            ];
        }
        Speech_start() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_start(val);
            obj.patterns = () => this.speech_start();
            return obj;
        }
        event_end(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_end() {
            return [
                "to ending",
                "last slide",
                "конец",
                "последний слайд"
            ];
        }
        Speech_end() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_end(val);
            obj.patterns = () => this.speech_end();
            return obj;
        }
        event_about(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_about() {
            return [
                "about( \\S+?)+",
                "search( \\S+?)+",
                "про( \\S+?)+",
                "найти( \\S+?)+",
                "найди( \\S+?)+"
            ];
        }
        Speech_about() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_about(val);
            obj.patterns = () => this.speech_about();
            return obj;
        }
        event_repeat(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_repeat() {
            return [
                "repeat",
                "повтори",
                "повторите"
            ];
        }
        Speech_repeat() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_repeat(val);
            obj.patterns = () => this.speech_repeat();
            return obj;
        }
        event_speech_on(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_on() {
            return [
                "continue",
                "продолжай"
            ];
        }
        Speech_on() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_speech_on(val);
            obj.patterns = () => this.speech_on();
            return obj;
        }
        event_speech_off(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        speech_off() {
            return [
                "shut up",
                "hush",
                "замолчи",
                "помолчи"
            ];
        }
        Speech_off() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_speech_off(val);
            obj.patterns = () => this.speech_off();
            return obj;
        }
        event_lights_toggle(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        lights_toggle() {
            return [
                "lights off",
                "lights on",
                "toggle lights",
                "свет",
                "след",
                "цвет"
            ];
        }
        Lights_toggle() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_lights_toggle(val);
            obj.patterns = () => this.lights_toggle();
            return obj;
        }
        event_sing(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        sing() {
            return [
                "sing( \\S+?)*",
                "спой( \\S+?)*"
            ];
        }
        Sing() {
            const obj = new this.$.$mol_speech();
            obj.event_catch = (val) => this.event_sing(val);
            obj.patterns = () => this.sing();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "contents", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_slides.prototype, "Menu_item", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Loader", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_slides.prototype, "Page", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Source_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Menu_items", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_slides.prototype, "page_slide", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_toggle_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "speech_enabled", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_text", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Paginator", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Open_listener_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Open_listener", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "slide", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_next", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_prev", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Touch", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_next", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_next_auto", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_slide", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_slide", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_prev", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_end", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_end", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_about", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_about", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_repeat", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_repeat", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_speech_on", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_on", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_speech_off", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Speech_off", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_lights_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Lights_toggle", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "event_sing", null);
    __decorate([
        $mol_mem
    ], $hyoo_slides.prototype, "Sing", null);
    $.$hyoo_slides = $hyoo_slides;
})($ || ($ = {}));
//hyoo/slides/-view.tree/slides.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_slides extends $.$hyoo_slides {
            sub() {
                if (!this.uri_slides()) {
                    return [this.Menu()];
                }
                return [
                    this.Loader(),
                    ...this.$.$mol_print.active()
                        ? $mol_range2(index => this.Page(index), () => this.slide_keys().length)
                        : [this.Page(this.slide())]
                ];
            }
            uri_base() {
                return this.uri_slides().replace(/[^/]*$/, '');
            }
            menu_items() {
                return Object.keys(this.menu_options()).map(uri => this.Menu_item(uri));
            }
            menu_item_uri(uri) {
                return uri;
            }
            menu_item_title(uri) {
                return this.menu_options()[uri];
            }
            contents(next = '') {
                if (!this.uri_slides())
                    return '';
                this.Loader().window();
                return next;
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async((event) => {
                    const data = event.data;
                    if (!Array.isArray(data))
                        return;
                    if (data[0] !== 'done')
                        return;
                    this.contents(data[1]);
                }));
            }
            content_pages() {
                return this.contents().split(/^(?=[#=])/mg);
            }
            page_tokens(index) {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.content_pages()[index] || '', (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            page_title(index) {
                for (let token of this.page_tokens(index)) {
                    if (token.name === 'header')
                        return token.chunks[2];
                }
                return '';
            }
            title() {
                return this.page_title(this.slide()) || super.title();
            }
            speaker_content(index) {
                return this.page_tokens(index).filter(token => {
                    if (token.name === 'header')
                        return false;
                    if (token.name !== 'block')
                        return false;
                    if (token.found.indexOf('![') >= 0)
                        return false;
                    if (token.found.indexOf('""') >= 0)
                        return false;
                    return true;
                });
            }
            listener_content(index) {
                return this.page_tokens(index).filter(token => {
                    if (token.name === 'header')
                        return false;
                    if (token.name !== 'block')
                        return true;
                    if (token.found.indexOf('![') >= 0)
                        return true;
                    if (token.found.indexOf('""') >= 0)
                        return true;
                    return false;
                });
            }
            slide(next) {
                if (next !== undefined) {
                    const count = this.content_pages().length;
                    if (next >= count)
                        next = count - 1;
                    if (next < 0)
                        next = 0;
                }
                const local = $mol_state_local.value(`slide(${JSON.stringify(this.uri_slides())})`, next);
                const arg = $mol_state_arg.value('slide', next?.valueOf && String(next));
                return (local ?? Number(arg)) || 0;
            }
            page_slide(index, next) {
                if (next !== undefined)
                    this.slide(next);
                return index;
            }
            slide_keys() {
                return this.content_pages().map((_, index) => index);
            }
            role(next) {
                return $mol_state_arg.value(this.state_key('role'), next) || 'speaker';
            }
            uri_slides() {
                return $mol_state_arg.value(this.state_key('slides')) ?? '';
            }
            event_next(next) {
                this.slide(this.slide() + 1);
            }
            event_prev(next) {
                this.slide(this.slide() - 1);
            }
            event_start(next) {
                this.slide(0);
            }
            event_end(next) {
                this.slide(this.content_pages().length - 1);
            }
            event_slide([numb]) {
                this.slide(Number(numb));
            }
            event_about([topic]) {
                let matcher = topic;
                const pages = this.content_pages();
                while (matcher.length > 2) {
                    for (let i = 0; i < pages.length; ++i) {
                        if (!pages[i].toLowerCase().match(matcher))
                            continue;
                        this.slide(i);
                        return;
                    }
                    matcher = matcher.substring(0, matcher.length - 1);
                }
                matcher = topic;
                while (matcher.length > 2) {
                    for (let i = 0; i < pages.length; ++i) {
                        if (!pages[i].toLowerCase().match(matcher))
                            continue;
                        this.slide(i);
                        return;
                    }
                    matcher = matcher.substring(0, matcher.length - 1);
                }
            }
            event_repeat(next) {
                const commands = $mol_speech.commands();
                const command = commands[commands.length - 2];
                if (command)
                    $mol_speech.say(command);
            }
            event_speech_on(next) {
                $mol_speech.speaking(true);
            }
            event_speech_off(next) {
                $mol_speech.speaking(false);
            }
            event_sing() {
                this.$.$mol_speech.say('Не хочу! Не буду!');
            }
            speech_enabled(next) {
                return $mol_speech.hearing(next);
            }
            speech_text() {
                const commands = $mol_speech.commands();
                return commands.length && commands[commands.length - 1] || '';
            }
            lights(next) {
                return this.$.$mol_lights(next);
            }
            event_lights_toggle() {
                this.lights(!this.lights());
            }
            timings() {
                return this.content_pages().map(page => page.length);
            }
            timing_total() {
                return this.timings().slice(1).reduce((a, b) => a + b, 0);
            }
            progress(index) {
                const timing = this.timings().slice(1, index + 1).reduce((a, b) => a + b, 0);
                return timing / this.timing_total();
            }
            speech_next_auto() {
                const texts = this.speaker_content(this.slide());
                if (texts.length === 0)
                    return [];
                const found = /[\s\S]*\s([a-zа-яё]+)[^a-zа-яё]*?/ui.exec(texts[texts.length - 1].found);
                if (!found)
                    return [];
                const suffix = found[1].replace(/(.)$/, '$1?');
                return [suffix];
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "menu_items", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "contents", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "message_listener", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "content_pages", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_slides.prototype, "page_tokens", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_slides.prototype, "page_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "title", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_slides.prototype, "speaker_content", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_slides.prototype, "listener_content", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "slide", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "slide_keys", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "lights", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "timings", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "timing_total", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_slides.prototype, "progress", null);
        __decorate([
            $mol_mem
        ], $hyoo_slides.prototype, "speech_next_auto", null);
        $$.$hyoo_slides = $hyoo_slides;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/slides/slides.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/slides/slides.view.css", "[hyoo_slides] {\n\t-webkit-print-color-adjust: exact;\n\tflex-direction: column;\n}\n[hyoo_slides][hyoo_slides_role=\"listener\"] [hyoo_slides_page_listener_content] {\n\tfont-size: 1.5em;\n}\n\n[hyoo_slides_menu] {\n\tmax-width: 40rem;\n\tflex: auto;\n}\n\n[hyoo_slides_loader] {\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n[hyoo_slides_loader]:not([mol_view_error]) {\n\tvisibility: hidden;\n}\n\n[hyoo_slides_speech_toggle] {\n\talign-items: center;\n}\n\n[hyoo_slides_speech_text] {\n\tline-height: 1;\n\tdisplay: flex;\n\talign-items: flex-end;\n\talign-self: center;\n\tflex: 1 1 auto;\n\tmax-height: 2rem;\n}\n");
})($ || ($ = {}));
//hyoo/slides/-css/slides.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_expander extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return true;
        }
        label() {
            return [
                this.title()
            ];
        }
        Trigger() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.expanded(val);
            obj.expandable = () => this.expandable();
            obj.label = () => this.label();
            return obj;
        }
        Tools() {
            return null;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Trigger(),
                this.Tools()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//mol/expander/-view.tree/expander.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/expander/expander.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));
//mol/expander/-css/expander.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_apps extends $mol_book2 {
        Placeholder() {
            return null;
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        pages() {
            return [
                this.Menu(),
                this.App("id")
            ];
        }
        groups() {
            return {
                release: this.$.$mol_locale.text('$hyoo_apps_groups_release'),
                develop: this.$.$mol_locale.text('$hyoo_apps_groups_develop'),
                preview: this.$.$mol_locale.text('$hyoo_apps_groups_preview')
            };
        }
        apps() {
            return {
                idea: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_idea_title'),
                    uri: "https://idea.hyoo.ru/"
                },
                board: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_board_title'),
                    uri: "https://board.hyoo.ru/"
                },
                notes: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_notes_title'),
                    uri: "https://notes.hyoo.ru/"
                },
                page: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_page_title'),
                    uri: "https://page.hyoo.ru/"
                },
                slides: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_slides_title'),
                    uri: "https://slides.hyoo.ru/"
                },
                search: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_search_title'),
                    uri: "https://search.hyoo.ru/"
                },
                lingua: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_lingua_title'),
                    uri: "https://lingua.hyoo.ru/"
                },
                talks: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_talks_title'),
                    uri: "https://talks.hyoo.ru/#!chat=fsh1o2_jdzewo"
                },
                map: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_map_title'),
                    uri: "https://map.hyoo.ru/"
                },
                scout: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_scout_title'),
                    uri: "https://scout.hyoo.ru/"
                },
                fallacy: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_fallacy_title'),
                    uri: "https://fallacy.hyoo.ru/"
                },
                meme: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_meme_title'),
                    uri: "https://meme.hyoo.ru/"
                },
                calc: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_calc_title'),
                    uri: "https://calc.hyoo.ru/#!title=a*x**2%20%2B%20b*x%20%2B%20c%20%3D%200/A1=x%20%3D%20%5B%0A%09%28%20-_.b%20%2B%20sqrt%28_.D%29%20%29%20%2F%202%20%2F%20_.a%2C%0A%09%28%20-_.b%20-%20sqrt%28_.D%29%20%29%20%2F%202%20%2F%20_.a%2C%0A%5D/A2=D%20%3D%20_.b**2%20-%204*_.a*_.c/C1=a%20%3D%203/C2=b%20%3D%206/C3=c%20%3D%20-9"
                },
                play: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_play_title'),
                    uri: "https://play.hyoo.ru/"
                },
                life: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_life_title'),
                    uri: "https://life.hyoo.ru/"
                },
                iq: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_iq_title'),
                    uri: "https://iq.hyoo.ru/"
                },
                todomvc: {
                    target: "release",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_todomvc_title'),
                    uri: "https://todomvc.hyoo.ru/"
                },
                game: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_game_title'),
                    uri: "https://game.hyoo.ru/"
                },
                draw: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_draw_title'),
                    uri: "https://draw.hyoo.ru/"
                },
                artist: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_artist_title'),
                    uri: "https://artist.hyoo.ru/"
                },
                invest: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_invest_title'),
                    uri: "https://invest.hyoo.ru/"
                },
                lamps: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_lamps_title'),
                    uri: "https://lamps.hyoo.ru/"
                },
                questions: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_questions_title'),
                    uri: "https://mol.js.org/app/questions/-/"
                },
                shelter: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_shelter_title'),
                    uri: "https://shelter.hyoo.ru/#login=user"
                },
                mail: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_mail_title'),
                    uri: "https://mail.hyoo.ru/#!folder=inbox/mail=qwe"
                },
                gazporn: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_gazporn_title'),
                    uri: "https://nin-jin.github.io/chart/"
                },
                toys: {
                    target: "preview",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_toys_title'),
                    uri: "https://toys.hyoo.ru/#size=M/popular"
                },
                mol: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_mol_title'),
                    uri: "https://mol.hyoo.ru/"
                },
                sync: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_sync_title'),
                    uri: "https://sync.hyoo.ru/watch/"
                },
                piterjs: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_piterjs_title'),
                    uri: "https://piterjs.org/"
                },
                habhub: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_habhub_title'),
                    uri: "https://habhub.hyoo.ru/"
                },
                jseval: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_jseval_title'),
                    uri: "https://eval.js.hyoo.ru/"
                },
                jsperf: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_jsperf_title'),
                    uri: "https://perf.js.hyoo.ru/#!prefix=let%20res/sources=%5B\"res%20%3D%20window.location.href\"%2C\"res%20%3D%20document.location.href\"%2C\"res%20%3D%20location.href\"%5D/postfix=%24mol_assert_like%28%20res%2C%20location.href%20%29"
                },
                jsopt: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_jsopt_title'),
                    uri: "https://opt.js.hyoo.ru/"
                },
                bench: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_bench_title'),
                    uri: "https://bench.hyoo.ru/#bench=https%3A%2F%2Fhyoo-ru.github.io%2Ftodomvc%2Fbenchmark%2F/sort=fill"
                },
                toxic: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_toxic_title'),
                    uri: "https://nin-jin.github.io/toxic-repos/"
                },
                request: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_request_title'),
                    uri: "https://http.hyoo.ru/#uri=https%3A%2F%2Fapi.github.com%2Frepos%2Fhyoo-ru%2Fmam_mol"
                },
                tree: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_tree_title'),
                    uri: "https://tree.hyoo.ru/"
                },
                icons: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_icons_title'),
                    uri: "https://nin-jin.github.io/mol_icon/"
                },
                rdf: {
                    target: "develop",
                    title: this.$.$mol_locale.text('$hyoo_apps_apps_rdf_title'),
                    uri: "http://rdf.hyoo.ru/"
                }
            };
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/apps.hyoo.ru";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        tools() {
            return [
                this.Source(),
                this.Lights()
            ];
        }
        filter(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Filter() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.filter(next);
            return obj;
        }
        group_name(id) {
            return "";
        }
        group_expanded(id, next) {
            if (next !== undefined)
                return next;
            return true;
        }
        app_uri_default(id) {
            return "";
        }
        app_arg(id) {
            return {};
        }
        app_title(id) {
            return "";
        }
        Menu_link_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.app_title(id);
            obj.needle = () => this.filter();
            return obj;
        }
        Menu_link_out(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.app_uri_default(id);
            obj.arg = () => this.app_arg(id);
            obj.sub = () => [
                this.Menu_link_title(id)
            ];
            return obj;
        }
        Menu_link_in_icon(id) {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Menu_link_in(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.app_arg(id);
            obj.sub = () => [
                this.Menu_link_in_icon(id)
            ];
            return obj;
        }
        Menu_item(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Menu_link_out(id),
                this.Menu_link_in(id)
            ];
            return obj;
        }
        group_items(id) {
            return [
                this.Menu_item(id)
            ];
        }
        Group(id) {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.group_name(id);
            obj.expanded = (next) => this.group_expanded(id, next);
            obj.content = () => this.group_items(id);
            return obj;
        }
        group_list() {
            return [
                this.Group("id")
            ];
        }
        Menu_items() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.group_list();
            return obj;
        }
        Menu_title() {
            return this.Menu().Title();
        }
        Menu_tools() {
            return this.Menu().Tools();
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_apps_Menu_title');
            obj.tools = () => this.tools();
            obj.head = () => [
                this.Menu_title(),
                this.Menu_tools(),
                this.Filter()
            ];
            obj.body = () => [
                this.Menu_items()
            ];
            return obj;
        }
        app_uri_embed(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        App(id) {
            const obj = new this.$.$mol_frame();
            obj.uri = (next) => this.app_uri_embed(id, next);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "filter", null);
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "Filter", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "group_expanded", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "Menu_link_title", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "Menu_link_out", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "Menu_link_in_icon", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "Menu_link_in", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "Menu_item", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "Group", null);
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "Menu_items", null);
    __decorate([
        $mol_mem
    ], $hyoo_apps.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "app_uri_embed", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_apps.prototype, "App", null);
    $.$hyoo_apps = $hyoo_apps;
})($ || ($ = {}));
//hyoo/apps/-view.tree/apps.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_apps extends $.$hyoo_apps {
            app() {
                return this.$.$mol_state_arg.value('app');
            }
            group_name(id) {
                return this.groups()[id];
            }
            group_list() {
                return Object.keys(this.groups()).map(group => this.Group(group));
            }
            group_items(group) {
                const apps = this.apps();
                const filter = this.filter();
                return Object.keys(this.apps())
                    .filter(app => apps[app].target === group)
                    .filter($mol_match_text(filter, app => [
                    app,
                    apps[app].title,
                    apps[app].uri,
                ]))
                    .map(app => this.Menu_item(app));
            }
            pages() {
                const app = this.app();
                return [
                    this.Menu(),
                    ...app ? [this.App(app)] : [],
                ];
            }
            app_title(app) {
                return this.apps()[app].title;
            }
            app_uri_default(app, next) {
                return this.apps()[app].uri;
            }
            app_uri_embed(app, next) {
                const lights = this.$.$mol_lights();
                if (this.app() === app) {
                    const arg = this.$.$mol_state_arg.value('uri', next);
                    if (arg)
                        return arg.replace(/mol_lights=(true|false)/, `mol_lights=${lights}`);
                }
                return this.app_uri_default(app) + `#mol_lights=${lights}`;
            }
            app_arg(app) {
                return { app, uri: null };
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_apps.prototype, "group_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_apps.prototype, "group_items", null);
        __decorate([
            $mol_mem
        ], $hyoo_apps.prototype, "pages", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_apps.prototype, "app_uri_embed", null);
        $$.$hyoo_apps = $hyoo_apps;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/apps/apps.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/apps/apps.view.css", "[hyoo_apps_menu] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_apps_menu_link_out] {\n\tflex-grow: 1;\n}\n\n[hyoo_apps_app] {\n\tflex: 1 0 25rem;\n}\n\n[hyoo_apps_filter] {\n\talign-self: stretch;\n}\n");
})($ || ($ = {}));
//hyoo/apps/-css/apps.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_example extends $mol_view {
        tags() {
            return [];
        }
    }
    $.$mol_example = $mol_example;
})($ || ($ = {}));
//mol/example/-view.tree/example.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/example/example.view.css", "[mol_example] {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/example/-css/example.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_example_small extends $mol_example {
    }
    $.$mol_example_small = $mol_example_small;
})($ || ($ = {}));
//mol/example/small/-view.tree/small.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/example/small/small.view.css", "[mol_example_small] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n\tgap: var(--mol_gap_block);\n}\n\n[mol_example_small] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/example/small/-css/small.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_example_large extends $mol_example {
    }
    $.$mol_example_large = $mol_example_large;
})($ || ($ = {}));
//mol/example/large/-view.tree/large.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/example/large/large.view.css", "[mol_example_large] {\n\tflex: 1 1 auto;\n\tflex-direction: column;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n\tmax-width: 100%;\n\tmax-height: 100%;\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/example/large/-css/large.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_status extends $mol_view {
        status() {
            return this.title();
        }
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.message()
            ];
        }
        message() {
            return "";
        }
    }
    $.$mol_status = $mol_status;
})($ || ($ = {}));
//mol/status/-view.tree/status.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_status extends $.$mol_status {
            message() {
                try {
                    return this.status() ?? null;
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    return error.message;
                }
            }
        }
        $$.$mol_status = $mol_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/status/status.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/status/status.view.css", "[mol_status] {\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: block;\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]) {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]):empty {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/status/-css/status.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_information extends $mol_icon {
        path() {
            return "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_information = $mol_icon_information;
})($ || ($ = {}));
//mol/icon/information/-view.tree/information.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_information_outline extends $mol_icon {
        path() {
            return "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,17H13V11H11V17Z";
        }
    }
    $.$mol_icon_information_outline = $mol_icon_information_outline;
})($ || ($ = {}));
//mol/icon/information/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_settings extends $mol_icon {
        path() {
            return "M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
        }
    }
    $.$mol_icon_settings = $mol_icon_settings;
})($ || ($ = {}));
//mol/icon/settings/-view.tree/settings.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_app_demo extends $mol_book2 {
        editor_title() {
            return this.detail_title();
        }
        source_prefix() {
            return "https://github.com/hyoo-ru/mam_mol/tree/master/";
        }
        repo_dict() {
            return {
                mol: "hyoo-ru/mam_mol"
            };
        }
        pages() {
            return this.blocks();
        }
        plugins() {
            return [
                this.Theme(),
                this.Search_start()
            ];
        }
        demo_block_list() {
            return [
                "$mol_example_small",
                "$mol_example_large"
            ];
        }
        Menu() {
            const obj = new this.$.$mol_app_demo_menu();
            obj.names = () => this.names_demo_filtered();
            obj.filter_suggests = () => this.filter_suggests();
            obj.tools = () => this.tools();
            return obj;
        }
        chat_pages(id) {
            return this.Detail(id).chat_pages();
        }
        Detail(id) {
            const obj = new this.$.$mol_app_demo_detail();
            obj.chat_seed = () => this.chat_seed(id);
            obj.title = () => this.detail_title();
            obj.description = () => this.detail_description();
            obj.edit_uri = () => this.edit_uri();
            obj.Demo = () => this.Demo();
            return obj;
        }
        Readme_page() {
            const obj = new this.$.$mol_app_demo_readme();
            obj.repo = () => this.repo();
            obj.module = () => this.module();
            obj.source_link = () => this.source_link();
            return obj;
        }
        Detail_empty_message() {
            const obj = new this.$.$mol_status();
            obj.sub = () => [
                this.detail_empty_prefix(),
                this.selected(),
                this.detail_empty_postfix()
            ];
            return obj;
        }
        detail_title() {
            return "$mol";
        }
        blocks() {
            return [];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        search_start(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Search_start() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                F: (next) => this.search_start(next)
            });
            obj.mod_ctrl = () => true;
            return obj;
        }
        names_demo_filtered() {
            return [];
        }
        filter_suggests() {
            return [];
        }
        sources_uri() {
            return "https://github.com/hyoo-ru/mam_mol/";
        }
        Sources() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.sources_uri();
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        tools() {
            return [
                this.Sources(),
                this.Lights()
            ];
        }
        chat_seed(id) {
            return "p9zx0v_nsmx1d";
        }
        detail_description() {
            return "";
        }
        edit_uri() {
            return "";
        }
        Demo() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        repo() {
            return "";
        }
        module() {
            return [];
        }
        source_link() {
            return "";
        }
        detail_empty_prefix() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_empty_prefix');
        }
        selected() {
            return "";
        }
        detail_empty_postfix() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_empty_postfix');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_app_demo.prototype, "Detail", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Readme_page", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Detail_empty_message", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "search_start", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Search_start", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Sources", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo.prototype, "Demo", null);
    $.$mol_app_demo = $mol_app_demo;
    class $mol_app_demo_menu extends $mol_page {
        names() {
            return [];
        }
        filter_suggests() {
            return [];
        }
        title() {
            return this.$.$mol_locale.text('$mol_app_demo_menu_title');
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.List()
            ];
            return obj;
        }
        Option(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.option_arg(id);
            obj.sub = () => [
                this.Option_title(id)
            ];
            return obj;
        }
        filter(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Filter() {
            const obj = new this.$.$mol_search();
            obj.query = (val) => this.filter(val);
            return obj;
        }
        options() {
            return [];
        }
        Options() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.options();
            return obj;
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Filter(),
                this.Options()
            ];
            return obj;
        }
        option_arg(id) {
            return {};
        }
        option_title(id) {
            return "";
        }
        Option_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_title(id);
            obj.needle = () => this.filter();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_app_demo_menu.prototype, "Body", null);
    __decorate([
        $mol_mem_key
    ], $mol_app_demo_menu.prototype, "Option", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_menu.prototype, "filter", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_menu.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_menu.prototype, "Options", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_menu.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_app_demo_menu.prototype, "Option_title", null);
    $.$mol_app_demo_menu = $mol_app_demo_menu;
    class $mol_app_demo_detail extends $mol_page {
        description() {
            return "";
        }
        tools() {
            return [
                this.Readme(),
                this.Chat(),
                this.Edit(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Demo()
            ];
        }
        readme_icon() {
            const obj = new this.$.$mol_icon_information_outline();
            return obj;
        }
        Readme() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                readme: ""
            });
            obj.hint = () => this.$.$mol_locale.text('$mol_app_demo_detail_Readme_hint');
            obj.sub = () => [
                this.readme_icon()
            ];
            return obj;
        }
        chat_seed() {
            return "0_0";
        }
        chat_pages() {
            return this.Chat().pages();
        }
        Chat() {
            const obj = new this.$.$mol_chat();
            obj.seed = () => this.chat_seed();
            return obj;
        }
        edit_hint() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_edit_hint');
        }
        Edit_speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => "β";
            return obj;
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_settings();
            return obj;
        }
        edit_uri() {
            return "";
        }
        Edit() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.edit_hint();
            obj.sub = () => [
                this.Edit_speck(),
                this.Edit_icon()
            ];
            obj.uri = () => this.edit_uri();
            return obj;
        }
        close_hint() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_close_hint');
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        close_arg() {
            return {
                demo: null
            };
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.close_hint();
            obj.sub = () => [
                this.Close_icon()
            ];
            obj.arg = () => this.close_arg();
            return obj;
        }
        Demo() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "readme_icon", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Readme", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Chat", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Edit_speck", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Edit_icon", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_detail.prototype, "Demo", null);
    $.$mol_app_demo_detail = $mol_app_demo_detail;
    class $mol_app_demo_readme extends $mol_page {
        link_template() {
            return "https://raw.githubusercontent.com/{repo}/master/{module}/readme.md";
        }
        repo() {
            return "";
        }
        module() {
            return [];
        }
        title() {
            return this.$.$mol_locale.text('$mol_app_demo_readme_title');
        }
        tools() {
            return [
                this.Source_link(),
                this.Close()
            ];
        }
        Readme() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.readme();
            obj.uri_base = () => this.uri_base();
            return obj;
        }
        Not_found() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Not_found_caption()
            ];
            return obj;
        }
        source_link() {
            return "";
        }
        source_hint() {
            return this.$.$mol_locale.text('$mol_app_demo_readme_source_hint');
        }
        Source_link() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.source_link();
            obj.hint = () => this.source_hint();
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        close_arg() {
            return {
                readme: null
            };
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$mol_app_demo_readme_Close_hint');
            obj.sub = () => [
                this.Close_icon()
            ];
            obj.arg = () => this.close_arg();
            return obj;
        }
        readme() {
            return "";
        }
        uri_base(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Not_found_caption() {
            return this.$.$mol_locale.text('$mol_app_demo_readme_Not_found_caption');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_app_demo_readme.prototype, "Readme", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_readme.prototype, "Not_found", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_readme.prototype, "Source_link", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_readme.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_readme.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_readme.prototype, "uri_base", null);
    $.$mol_app_demo_readme = $mol_app_demo_readme;
})($ || ($ = {}));
//mol/app/demo/-view.tree/demo.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//mol/func/is/class/class.ts
;
"use strict";
var $;
(function ($) {
    class $mol_app_demo_main extends $mol_page {
        minimal_width() {
            return 400;
        }
        title() {
            return "$mol libs for web ui";
        }
        tools() {
            return [
                this.Lights(),
                this.Project()
            ];
        }
        body() {
            return [
                this.Description()
            ];
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        project_uri() {
            return "https://github.com/eigenmethod/mol/tree/master/";
        }
        Project() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.project_uri();
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            obj.uri_base = () => this.project_uri();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_app_demo_main.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_main.prototype, "Project", null);
    __decorate([
        $mol_mem
    ], $mol_app_demo_main.prototype, "Description", null);
    $.$mol_app_demo_main = $mol_app_demo_main;
})($ || ($ = {}));
//mol/app/demo/main/-view.tree/main.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_demo_main extends $.$mol_app_demo_main {
            description() {
                return $mol_file.relative('mol/readme.md').text();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_app_demo_main.prototype, "description", null);
        $$.$mol_app_demo_main = $mol_app_demo_main;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/app/demo/main/main.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const compare_names = (a, b) => {
            if (a[0] === '$' && b[0] !== '$')
                return 1;
            if (a[0] !== '$' && b[0] === '$')
                return -1;
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        };
        class $mol_app_demo extends $.$mol_app_demo {
            component_name(name) {
                return '$' + name.split('_demo')?.[0] ?? name;
            }
            detail_title() {
                const selected = this.selected();
                return selected ? this.component_name(selected) : super.title();
            }
            detail_description() {
                return this.Demo().title();
            }
            names_demo_all() {
                const next = [];
                for (const name in this.$) {
                    if (typeof this.$[name] !== 'function')
                        continue;
                    if (!$mol_func_is_class(this.$[name]))
                        continue;
                    if (!(this.$[name].prototype instanceof $mol_example))
                        continue;
                    if (this.demo_block_list().includes(name))
                        continue;
                    next.push(name.substring(1));
                }
                return next.sort();
            }
            widget_tags(name) {
                const component_name = this.component_name(name);
                const tags = this.Widget(name).tags().map(tag => tag.toLowerCase());
                if (tags.length === 0) {
                    console.warn(`Demo widget without tags: ${name}`);
                    return ['untagged', component_name];
                }
                else {
                    return [...tags, component_name];
                }
            }
            widget_title(name) {
                return this.Widget(name).title();
            }
            search_start(event) {
                this.Menu().Filter().Query().bring();
                event?.preventDefault();
            }
            filter() {
                return this.Menu().filter();
            }
            filter_last_word_completed() {
                return /[^\s]+\s+$/.test(this.filter());
            }
            filter_words() {
                const filter = this.filter().trim();
                const words = filter !== '' ? filter.split(/\s+/) : [];
                return [...new Set(words)].map(word => word.toLowerCase());
            }
            names_demo_filtered() {
                const words = this.filter_words();
                if (words.length !== 0) {
                    return this.names_demo_all().filter(name => {
                        const title = this.widget_title(name);
                        const component_keywords = [
                            ...(title ? [title.toLowerCase()] : []),
                            ...this.widget_tags(name)
                        ];
                        return words.every(word => component_keywords.some(kw => kw.includes(word)));
                    });
                }
                else {
                    return this.names_demo_all();
                }
            }
            tags_demo_filtered() {
                return [...new Set(this.names_demo_filtered().flatMap(name => this.widget_tags(name)))]
                    .map(tag => tag.trim().toLowerCase())
                    .filter(tag => tag !== '')
                    .sort(compare_names);
            }
            filter_suggests() {
                const filter_words = this.filter_words();
                if (filter_words.length === 0)
                    return this.tags_demo_filtered();
                const filtered_names = this.names_demo_filtered();
                if (filtered_names.length <= 1)
                    return [];
                const tags = this.tags_demo_filtered();
                const filter_last_word = filter_words.slice(-1)[0];
                const filter_last_word_completed = this.filter_last_word_completed();
                const suggests = [];
                for (const tag of tags) {
                    if (filter_words.includes(tag))
                        continue;
                    if (filter_last_word_completed) {
                        suggests.push(`${filter_words.join(' ')} ${tag}`);
                    }
                    else if (tag.indexOf(filter_last_word) === 0 &&
                        (filter_last_word.length < tag.length)) {
                        suggests.push(`${filter_words.slice(0, -1).join(' ')} ${tag}`);
                    }
                }
                return suggests;
            }
            selected() {
                return $mol_state_arg.value('demo') || '';
            }
            readme_page() {
                return $mol_state_arg.value('readme') === '';
            }
            selected_class_name() {
                return '$' + this.selected();
            }
            Widget(name) {
                const Class = this.$['$' + name];
                return new Class();
            }
            names_demo() {
                const selected = this.selected();
                return [selected];
            }
            blocks() {
                let sub = [];
                sub.push(this.Menu());
                const selected = this.selected();
                if (!selected)
                    return sub;
                sub.push(this.Detail(selected));
                const readme_page = this.readme_page();
                if (readme_page)
                    sub.push(this.Readme_page());
                sub.push(...this.chat_pages(selected));
                return sub;
            }
            Demo() {
                return this.Widget(this.selected());
            }
            logo_uri() {
                return $mol_file.relative('/mol/logo/logo.svg').path();
            }
            source_link() {
                const demo = $mol_state_arg.value('demo');
                if (!demo)
                    return this.source_prefix();
                const pieces = demo.split('_').slice(1);
                const source_link = this.source_prefix() + pieces.join('/');
                return source_link;
            }
            name_parse(name) {
                const split = name.replace(/_demo.*$/, '').split('_');
                const keys = split.map((_, index) => split.slice(0, -1 - index).join('_'));
                const key = keys.find(key => this.repo_dict()[key]);
                if (!key)
                    throw new Error(`${this}.name_parse("${name}"): Key "${key}" not found`);
                const repo = this.repo_dict()[key];
                const module = split.slice(key.split('_').length);
                return { repo, module };
            }
            repo() {
                return this.name_parse($mol_state_arg.value('demo')).repo;
            }
            module() {
                return this.name_parse($mol_state_arg.value('demo')).module;
            }
            chat_link() {
                return $mol_state_arg.make_link({ demo: this.selected() });
            }
            edit_uri() {
                const source = encodeURIComponent(`$${''}my_app $${this.selected()}`);
                const pack = encodeURIComponent(this.$.$mol_state_arg.make_link({}));
                return `https://studio.hyoo.ru/#!pack=${pack}/source=${source}/preview`;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_app_demo.prototype, "component_name", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "names_demo_all", null);
        __decorate([
            $mol_mem_key
        ], $mol_app_demo.prototype, "widget_tags", null);
        __decorate([
            $mol_mem_key
        ], $mol_app_demo.prototype, "widget_title", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "filter_last_word_completed", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "filter_words", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "names_demo_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "tags_demo_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "filter_suggests", null);
        __decorate([
            $mol_mem_key
        ], $mol_app_demo.prototype, "Widget", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "names_demo", null);
        __decorate([
            $mol_mem_key
        ], $mol_app_demo.prototype, "name_parse", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo.prototype, "edit_uri", null);
        $$.$mol_app_demo = $mol_app_demo;
        class $mol_app_demo_menu extends $.$mol_app_demo_menu {
            filter(next) {
                return this.$.$mol_state_session.value('filter', next === '' ? null : next) ?? super.filter();
            }
            options() {
                return this.names().map(id => this.Option(id));
            }
            option_arg(id) {
                return { 'demo': id };
            }
            option_title(id) {
                return '$' + id.replace('_demo_', '/').replace('_demo', '');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_app_demo_menu.prototype, "filter", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo_menu.prototype, "options", null);
        $$.$mol_app_demo_menu = $mol_app_demo_menu;
        class $mol_app_demo_readme_not_found_error extends Error {
            module;
            constructor(module) {
                super('Readme not found');
                this.module = module;
            }
        }
        $$.$mol_app_demo_readme_not_found_error = $mol_app_demo_readme_not_found_error;
        class $mol_app_demo_readme extends $.$mol_app_demo_readme {
            link(module) {
                return this.link_template().replace('{repo}', this.repo()).replace('{module}', module.join('/'));
            }
            uri_base(next = '') {
                $mol_wire_solid();
                return next;
            }
            readme() {
                let module = this.module();
                while (module.length) {
                    try {
                        const link = this.link(module);
                        const text = this.$.$mol_fetch.text(link);
                        this.uri_base(`https://github.com/${this.repo()}/tree/master/${module.join('/')}/`);
                        return text;
                    }
                    catch (error) {
                        if (error instanceof Promise)
                            $mol_fail_hidden(error);
                        module = module.slice(0, -1);
                    }
                }
                throw new $mol_app_demo_readme_not_found_error(module);
            }
            body() {
                try {
                    this.readme();
                    return [this.Readme()];
                }
                catch (err) {
                    if (err instanceof Promise)
                        $mol_fail_hidden(err);
                    return [this.Not_found()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_app_demo_readme.prototype, "uri_base", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo_readme.prototype, "readme", null);
        __decorate([
            $mol_mem
        ], $mol_app_demo_readme.prototype, "body", null);
        $$.$mol_app_demo_readme = $mol_app_demo_readme;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/app/demo/demo.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/app/demo/demo.view.css", "[mol_app_demo_menu] {\n\tflex: 0 0 18rem;\n}\n\n[mol_app_demo_menu_list] {\n\tdisplay: flex;\n}\n\n[mol_app_demo_menu_tools] {\n\tpadding: 0;\n}\n\n[mol_app_demo_main],\n[mol_app_demo_detail],\n[mol_app_empty_message] {\n\tflex: 1000 0 40rem;\n}\n\n[mol_app_demo_menu_filter] {\n\talign-self: stretch;\n\tflex: 0 0 auto;\n}\n\n[mol_app_demo_nav_table] {\n\twidth: 100%;\n\tbox-sizing: border-box;\n}\n\n[mol_app_demo_nav_row] {\n\tdisplay: flex;\n}\n\n[mol_app_demo_nav_option] {\n\tpadding: 0 .5rem 0 0;\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n\tbox-shadow: none;\n}\n\n[mol_app_demo_nav_expand] {\n\talign-self: stretch;\n\talign-items: center;\n\tpadding-right: .25rem;\n}\n\n[mol_app_demo_nav_content] {\n\tflex-grow: 1;\n}\n\n[mol_app_demo_menu_themes] {\n\tflex: none;\n}\n\n[mol_app_demo_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-content: flex-start;\n\talign-items: flex-start;\n}\n\n[mol_app_demo_screen] {\n\tmax-height: 45%;\n}\n\n[mol_app_demo_detail_body] {\n\tdisplay: flex;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n}\n\n[mol_app_demo_detail_list] {\n\tflex: 1 0 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_app_demo_page_close] {\n\tcolor: inherit;\n\talign-items: center;\n\tpadding: 1rem;\n}\n\n[mol_app_demo_welcome] {\n\tflex: 1 1 auto;\n}\n\n[mol_app_demo_option_link] {\n\tpadding: 0;\n}\n\n[mol_app_demo_sample_large] {\n\tbox-sizing: border-box;\n}\n\n[mol_app_demo_detail_empty_message] {\n\tmargin: auto;\n}\n\n[mol_app_demo_chat] {\n\tflex: none;\n}\n\n[mol_app_demo_readme] {\n\tflex: 1 0 40rem;\n}\n\n[mol_app_demo_readme_not_found] {\n\tdisplay: flex;\n\tflex: 1 0;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 2rem;\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/app/demo/-css/demo.view.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));
//mol/dom/serialize/serialize.ts
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $mol_fail(new Error(`${value} ≠ false`));
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
        $mol_fail(new Error('Not failed'));
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
                    $mol_fail(new Error(`Not equal (${i + 1}:${j + 1})\n${args[i]}\n${args[j]}`));
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
                    $mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let [index, value] of Object.entries(tail)) {
            if (!$mol_compare_deep(value, head)) {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    try {
                        return JSON.stringify(val);
                    }
                    catch (error) {
                        console.error(error);
                        return val;
                    }
                };
                return $mol_fail(new Error(`Not like (1:${+index + 2})\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
    function $mol_assert_dom(left, right) {
        $mol_assert_equal($mol_dom_serialize(left), $mol_dom_serialize(right));
    }
    $.$mol_assert_dom = $mol_assert_dom;
})($ || ($ = {}));
//mol/assert/assert.ts
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $mol_object2 {
        static module(uri) {
            return $mol_wire_sync(this).module_async(uri);
        }
        static module_async(uri) {
            return import(uri);
        }
        static script(uri) {
            return $mol_wire_sync(this).script_async(uri);
        }
        static script_async(uri) {
            const doc = $mol_dom_context.document;
            const script = doc.createElement('script');
            script.src = uri;
            doc.head.appendChild(script);
            return new Promise((done, fail) => {
                script.onload = () => done($mol_dom_context);
                script.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
        static style(uri) {
            return $mol_wire_sync(this).style_async(uri);
        }
        static style_async(uri) {
            const doc = $mol_dom_context.document;
            const style = doc.createElement('link');
            style.rel = 'stylesheet';
            style.href = uri;
            doc.head.appendChild(style);
            return new Promise((done, fail) => {
                style.onload = () => done(style.sheet);
                style.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//mol/import/import.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sort extends $mol_icon {
        path() {
            return "M10,13V11H18V13H10M10,19V17H14V19H10M10,7V5H22V7H10M6,17H8.5L5,20.5L1.5,17H4V7H1.5L5,3.5L8.5,7H6V17Z";
        }
    }
    $.$mol_icon_sort = $mol_icon_sort;
})($ || ($ = {}));
//mol/icon/sort/-view.tree/sort.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sort_asc extends $mol_icon {
        path() {
            return "M10,11V13H18V11H10M10,5V7H14V5H10M10,17V19H22V17H10M6,7H8.5L5,3.5L1.5,7H4V20H6V7Z";
        }
    }
    $.$mol_icon_sort_asc = $mol_icon_sort_asc;
})($ || ($ = {}));
//mol/icon/sort/asc/-view.tree/asc.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_bench extends $mol_grid {
        records() {
            return this.result();
        }
        col_sort(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Col_head(id) {
            const obj = new this.$.$mol_bench_head();
            obj.event_click = (val) => this.event_sort_toggle(id, val);
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        cell_content_number(id) {
            return [
                this.result_value(id),
                this.Result_portion(id)
            ];
        }
        result() {
            return {};
        }
        event_sort_toggle(id, val) {
            if (val !== undefined)
                return val;
            return null;
        }
        col_head_title(id) {
            return "";
        }
        Col_head_sort(id) {
            const obj = new this.$.$mol_icon_sort_asc();
            return obj;
        }
        col_head_content(id) {
            return [
                this.col_head_title(id),
                this.Col_head_sort(id)
            ];
        }
        result_value(id) {
            return "";
        }
        result_portion(id) {
            return 0;
        }
        Result_portion(id) {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.result_portion(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_bench.prototype, "col_sort", null);
    __decorate([
        $mol_mem_key
    ], $mol_bench.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_bench.prototype, "event_sort_toggle", null);
    __decorate([
        $mol_mem_key
    ], $mol_bench.prototype, "Col_head_sort", null);
    __decorate([
        $mol_mem_key
    ], $mol_bench.prototype, "Result_portion", null);
    $.$mol_bench = $mol_bench;
    class $mol_bench_head extends $mol_float {
        horizontal() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                click: (val) => this.event_click(val)
            };
        }
        attr() {
            return {
                ...super.attr(),
                title: this.hint()
            };
        }
        event_click(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_bench_head_hint');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_bench_head.prototype, "event_click", null);
    $.$mol_bench_head = $mol_bench_head;
})($ || ($ = {}));
//mol/bench/-view.tree/bench.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_bench extends $.$mol_bench {
            col_sort(next) {
                return $mol_state_arg.value(this.state_key('sort'), next) ?? '';
            }
            row_ids() {
                const result = this.result();
                const keys = Object.keys(result).map(key => ['', key]);
                const col = this.col_sort();
                if (col) {
                    keys.sort((a, b) => {
                        return this.result_number({ row: a, col }) - this.result_number({ row: b, col });
                    });
                }
                return keys;
            }
            result_value(id) {
                return this.result()[id.row[id.row.length - 1]][id.col];
            }
            result_number(id) {
                return parseInt(this.result_value(id), 10);
            }
            result_value_max(col) {
                let max = 0;
                const rows = this.row_ids();
                rows.forEach(row => {
                    const numb = this.result_number({ row, col });
                    if (numb > max)
                        max = numb;
                });
                return max;
            }
            result_portion(id) {
                return this.result_number(id) / this.result_value_max(id.col);
            }
            col_head_title(col) {
                return col;
            }
            event_sort_toggle(col, next) {
                this.col_sort(col);
            }
            col_type(col) {
                if (col === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col];
                if (!isNaN(parseFloat(val)))
                    return 'number';
                return 'text';
            }
            cell_content_number(id) {
                return [
                    this.result_value(id),
                    ...(this.col_sort() === id.col) ? [this.Result_portion(id)] : []
                ];
            }
            col_head_content(col) {
                return [
                    this.col_head_title(col),
                    ...(this.col_sort() === col) ? [' ', this.Col_head_sort(col)] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_bench.prototype, "col_sort", null);
        __decorate([
            $mol_mem
        ], $mol_bench.prototype, "row_ids", null);
        __decorate([
            $mol_mem_key
        ], $mol_bench.prototype, "result_value_max", null);
        __decorate([
            $mol_mem_key
        ], $mol_bench.prototype, "col_type", null);
        $$.$mol_bench = $mol_bench;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/bench/bench.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bench/bench.view.css", "[mol_bench_col_head] {\n\tcursor: pointer;\n}\n\n[mol_bench_cell_number] {\n\twhite-space: nowrap;\n\ttext-align: right;\n}\n\n[mol_bench_result_portion] {\n\tmargin-left: .75rem;\n}\n\n[mol_bench_row]:nth-child(1) [mol_portion_indicator] {\n\tbackground: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/bench/-css/bench.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//mol/icon/minus/-view.tree/minus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value_min() {
            return -Infinity;
        }
        value_max() {
            return +Infinity;
        }
        value(next) {
            if (next !== undefined)
                return next;
            return +NaN;
        }
        enabled() {
            return true;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        type() {
            return "tel";
        }
        value_string(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        string_enabled() {
            return this.enabled();
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => this.type();
            obj.value = (val) => this.value_string(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            return obj;
        }
        event_dec(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (next) => this.event_dec(next);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (next) => this.event_inc(next);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//mol/number/-view.tree/number.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/number/-css/number.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            value_limited(next) {
                if (next === undefined)
                    return this.value();
                if (next === '')
                    return this.value(null);
                const min = this.value_min();
                const max = this.value_max();
                const val = Number(next);
                if (val < min)
                    return this.value(min);
                if (val > max)
                    return this.value(max);
                return this.value(val);
            }
            event_dec(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change());
            }
            value_string(next) {
                const next_num = this.value_limited(next);
                const precisionView = this.precision_view();
                if (next_num === 0)
                    return '0';
                if (!next_num)
                    return '';
                if (precisionView >= 1) {
                    return (next_num / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return next_num.toFixed(Math.ceil(fixedNumber));
                }
            }
            dec_enabled() {
                return this.enabled() && (!((this.value() || 0) <= this.value_min()));
            }
            inc_enabled() {
                return this.enabled() && (!((this.value() || 0) >= this.value_max()));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "dec_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "inc_enabled", null);
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/number/number.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_bench_app extends $mol_book2 {
        samples(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        pages() {
            return [
                this.Addon_page(),
                this.Main_page(),
                this.Sandbox_page()
            ];
        }
        Menu_option(id) {
            const obj = new this.$.$mol_check_box();
            obj.minimal_height = () => 36;
            obj.checked = (val) => this.menu_option_checked(id, val);
            obj.title = () => this.sample_title(id);
            return obj;
        }
        Param(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.param_title(id);
            obj.content = () => [
                this.Param_value(id)
            ];
            return obj;
        }
        result_col_title_sample() {
            return this.$.$mol_locale.text('$hyoo_bench_app_result_col_title_sample');
        }
        addon_title() {
            return this.$.$mol_locale.text('$hyoo_bench_app_addon_title');
        }
        filter(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Filter() {
            const obj = new this.$.$mol_search();
            obj.query = (val) => this.filter(val);
            return obj;
        }
        source_link() {
            return "https://github.com/hyoo-ru/bench.hyoo.ru";
        }
        Source_link() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.source_link();
            return obj;
        }
        menu_tools() {
            return [
                this.Source_link()
            ];
        }
        menu_options() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_options();
            return obj;
        }
        Menu_tools() {
            return this.Addon_page().Tools();
        }
        Addon_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.addon_title();
            obj.head = () => [
                this.Filter(),
                this.Menu_tools()
            ];
            obj.tools = () => this.menu_tools();
            obj.body = () => [
                this.Menu()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Descr() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        param_fields() {
            return [];
        }
        Param_fields() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.param_fields();
            return obj;
        }
        result() {
            return null;
        }
        result_col_title(id) {
            return "";
        }
        result_col_sort(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Result() {
            const obj = new this.$.$mol_bench();
            obj.result = () => this.result();
            obj.col_head_title = (id) => this.result_col_title(id);
            obj.col_sort = (val) => this.result_col_sort(val);
            return obj;
        }
        Main_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            obj.body = () => [
                this.Descr(),
                this.Param_fields(),
                this.Result()
            ];
            return obj;
        }
        sandbox_title() {
            return this.$.$mol_locale.text('$hyoo_bench_app_sandbox_title');
        }
        bench(val) {
            if (val !== undefined)
                return val;
            return "//bench.hyoo.ru/list/";
        }
        Sandbox() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.bench();
            return obj;
        }
        Sandbox_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.sandbox_title();
            obj.Body = () => this.Sandbox();
            return obj;
        }
        menu_option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sample_title(id) {
            return "";
        }
        param_title(id) {
            return "";
        }
        param_value(id, val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        param_precision(id) {
            return 0;
        }
        Param_value(id) {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.param_value(id, val);
            obj.precision_change = () => this.param_precision(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "samples", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_bench_app.prototype, "Menu_option", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_bench_app.prototype, "Param", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "filter", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Source_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Addon_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Descr", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Param_fields", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "result_col_sort", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Result", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Main_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "bench", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Sandbox", null);
    __decorate([
        $mol_mem
    ], $hyoo_bench_app.prototype, "Sandbox_page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_bench_app.prototype, "menu_option_checked", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_bench_app.prototype, "param_value", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_bench_app.prototype, "Param_value", null);
    $.$hyoo_bench_app = $hyoo_bench_app;
})($ || ($ = {}));
//hyoo/bench/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_compare_text(item = (item) => String(item)) {
        return (a, b) => {
            const text_a = item(a).trim().toLowerCase();
            const text_b = item(b).trim().toLowerCase();
            const parts_a = text_a.split(/(\d+)/);
            const parts_b = text_b.split(/(\d+)/);
            const count = Math.max(parts_a.length, parts_b.length);
            for (let i = 0; i < count; ++i) {
                const part_a = parts_a[i] || '';
                const part_b = parts_b[i] || '';
                const diff = Number(part_a) - Number(part_b);
                if (diff)
                    return diff;
                if (part_a > part_b)
                    return 1;
                if (part_a < part_b)
                    return -1;
            }
            return parts_a.length - parts_b.length;
        };
    }
    $.$mol_compare_text = $mol_compare_text;
})($ || ($ = {}));
//mol/compare/text/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_bench_app extends $.$hyoo_bench_app {
            bench(next) {
                return $mol_state_arg.value('bench', next) || super.bench();
            }
            sandbox() {
                return this.Sandbox().window();
            }
            command_last(next) {
                return next || null;
            }
            command_result(command) {
                $mol_wire_solid();
                return $mol_wire_sync(this).command_result_async(command);
            }
            command_result_async(command) {
                const sandbox = this.sandbox();
                this.command_last(command);
                return new Promise(done => requestAnimationFrame(() => {
                    const handle = (event) => {
                        if (event.data[0] !== 'done')
                            return;
                        window.removeEventListener('message', handle);
                        done(event.data[1]);
                    };
                    window.addEventListener('message', handle);
                    sandbox.postMessage(command, '*');
                }));
            }
            meta() {
                return this.command_result(['meta']);
            }
            source_link() {
                return this.meta().source || super.source_link();
            }
            samples_all(next) {
                return Object.keys(this.meta().samples).sort($mol_compare_text(sample => this.sample_title(sample)));
            }
            samples(next) {
                const arg = $mol_state_arg.value('sample', next && next.join('~'));
                const all = this.samples_all();
                return arg ? arg.split('~').sort().filter(name => all.indexOf(name) >= 0) : [];
            }
            steps(next) {
                return Object.keys(this.meta().steps);
            }
            title() {
                const title = this.meta().title;
                return title[$mol_locale.lang()] || title['en'] || super.title();
            }
            description() {
                const descr = this.meta().descr;
                return descr[$mol_locale.lang()] || descr['en'] || '';
            }
            result_sample(sample_id) {
                const result = {
                    sample: this.sample_title(sample_id),
                };
                this.steps().forEach(step => {
                    result[step] = this.command_result([step, sample_id, this.param_dict()]);
                });
                return result;
            }
            result() {
                const result = {};
                this.samples().forEach(sample => {
                    result[sample] = this.result_sample(sample);
                });
                return result;
            }
            sandbox_title() {
                const command = this.command_last();
                if (!command)
                    return super.sandbox_title();
                if (command[0] === 'meta')
                    return super.sandbox_title();
                return `${this.sample_title(command[1])}: ${this.step_title(command[0])}`;
            }
            result_col_title(col_id) {
                if (col_id === 'sample')
                    return this.result_col_title_sample();
                return this.step_title(col_id).join(' ');
            }
            step_title(step) {
                const title = this.meta().steps[step].title;
                return [title[$mol_locale.lang()] || title['en']];
            }
            result_col_sort(next) {
                return $mol_state_arg.value('sort', next) || '';
            }
            menu_options() {
                const filter = this.filter().toLowerCase();
                return this.samples_all()
                    .filter(sample => this.sample_title(sample).toLowerCase().match(filter))
                    .map(sample => this.Menu_option(sample));
            }
            sample_title(sample) {
                const title = this.meta().samples[sample].title;
                return title[$mol_locale.lang()] || title['en'];
            }
            menu_option_checked(sample, next) {
                if (next === void 0)
                    return this.samples().indexOf(sample) !== -1;
                if (next)
                    this.samples(this.samples().concat(sample));
                else
                    this.samples(this.samples().filter(s => s !== sample));
                return next;
            }
            params() {
                return Object.keys(this.meta().params || {});
            }
            param_fields() {
                return this.params().map(param => this.Param(param));
            }
            param_title(id) {
                const title = this.meta().params[id].title;
                return title[$mol_locale.lang()] || title['en'];
            }
            param_value(id, next) {
                let next_2 = Number($mol_state_arg.value(id, next));
                return next_2 || this.meta().params[id].default;
            }
            param_precision(id) {
                return this.meta().params[id].precision;
            }
            param_dict() {
                const param_dict = {};
                const params = this.params();
                for (let param of params) {
                    param_dict[param] = this.param_value(param);
                }
                return param_dict;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "bench", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "sandbox", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "command_last", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_bench_app.prototype, "command_result", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "meta", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "samples_all", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "samples", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "steps", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "description", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_bench_app.prototype, "result_sample", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "result", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "sandbox_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "result_col_sort", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "menu_options", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_bench_app.prototype, "menu_option_checked", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_bench_app.prototype, "param_value", null);
        __decorate([
            $mol_mem
        ], $hyoo_bench_app.prototype, "param_dict", null);
        $$.$hyoo_bench_app = $hyoo_bench_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/bench/app/app.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/bench/app/app.view.css", "[hyoo_bench_app_main_page] {\n\tflex: 0 0 45rem;\n}\n\n[hyoo_bench_app_main_page_body] {\n\tdisplay: flex;\n\toverflow: auto;\n\tz-index: 1;\n}\n\n[hyoo_bench_app_addon_page] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_bench_app_sandbox_page] {\n\tflex: 1000 0 20rem;\n}\n\n[hyoo_bench_app_result_page] {\n\tflex: 1 1 auto;\n}\n\n[hyoo_bench_app_sandbox] {\n\tborder: none;\n\tbackground: white;\n}\n\n[hyoo_bench_app_descr] {\n\tflex: 0 1 auto;\n\tmax-width: none;\n}\n\n[hyoo_bench_app_param_fields] {\n\tflex: none;\n}\n\n[hyoo_bench_app_result] {\n\tflex: none;\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_bench_app_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[hyoo_bench_app_addon_page_tools] {\n\tflex-grow: 1;\n}\n\n[hyoo_bench_app_result_head] {\n\tcursor: pointer;\n}\n\n[hyoo_bench_app_result_cell_number] {\n\twhite-space: nowrap;\n\ttext-align: right;\n}\n\n[hyoo_bench_app_result_portion] {\n\tdisplay: inline-flex;\n\tvertical-align: bottom;\n\tmargin-left: .5rem;\n\twidth: 5vw;\n}\n");
})($ || ($ = {}));
//hyoo/bench/app/-css/app.view.css.ts
;
"use strict";
let $hyoo_sync_revision = "7ca4736";
//hyoo/sync/-meta.tree/revision.meta.tree.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    function $mol_int62_string_ensure(str) {
        if (typeof str !== 'string')
            return null;
        return $mol_int62_from_string(str) && str;
    }
    $.$mol_int62_string_ensure = $mol_int62_string_ensure;
    $.$mol_int62_max = (2 ** 30) - 1;
    $.$mol_int62_min = -(2 ** 30);
    $.$mol_int62_range = $.$mol_int62_max - $.$mol_int62_min + 1;
    function $mol_int62_to_string({ lo, hi }) {
        lo = (lo + $.$mol_int62_range) % $.$mol_int62_range;
        hi = (hi + $.$mol_int62_range) % $.$mol_int62_range;
        return lo.toString(36) + '_' + hi.toString(36);
    }
    $.$mol_int62_to_string = $mol_int62_to_string;
    function $mol_int62_from_string(str) {
        const [str_lo, str_hi] = str.split('_');
        const int_lo = parseInt(str_lo, 36);
        const int_hi = parseInt(str_hi, 36);
        if (int_lo.toString(36) !== str_lo || int_hi.toString(36) !== str_hi) {
            return null;
        }
        return {
            lo: (int_lo - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
            hi: (int_hi - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
        };
    }
    $.$mol_int62_from_string = $mol_int62_from_string;
    function $mol_int62_compare(left_lo, left_hi, right_lo, right_hi) {
        return (right_hi - left_hi) || (right_lo - left_lo);
    }
    $.$mol_int62_compare = $mol_int62_compare;
    function $mol_int62_inc(lo, hi, max = $.$mol_int62_max) {
        if (lo === max) {
            return { lo: -max, hi: hi + 1 };
        }
        else {
            return { lo: lo + 1, hi };
        }
    }
    $.$mol_int62_inc = $mol_int62_inc;
    function $mol_int62_random() {
        return {
            lo: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
            hi: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
        };
    }
    $.$mol_int62_random = $mol_int62_random;
    function $mol_int62_hash_string(str) {
        return $mol_int62_to_string($mol_int62_hash_buffer($mol_charset_encode(str)));
    }
    $.$mol_int62_hash_string = $mol_int62_hash_string;
    function $mol_int62_hash_buffer(buf, seed = { lo: 0, hi: 0 }) {
        let h1 = 0xdeadbeef ^ seed.lo;
        let h2 = 0x41c6ce57 ^ seed.hi;
        for (const byte of buf) {
            h1 = Math.imul(h1 ^ byte, 2654435761);
            h2 = Math.imul(h2 ^ byte, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return { lo: h1 << 1 >> 1, hi: h2 << 1 >> 1 };
    }
    $.$mol_int62_hash_buffer = $mol_int62_hash_buffer;
})($ || ($ = {}));
//mol/int62/int62.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = crypto;
})($ || ($ = {}));
//mol/crypto/native/native.web.ts
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'ECDSA',
        hash: 'SHA-256',
        namedCurve: "P-256",
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $mol_crypto_native.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size = 86;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, algorithm, true, ['verify']));
        }
        async serial() {
            const { x, y } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y;
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        static size = 129;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, algorithm, true, ['sign']));
        }
        async serial() {
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y + d;
        }
        async sign(data) {
            return await $mol_crypto_native.subtle.sign(algorithm, this.native, data);
        }
        async public() {
            return await $mol_crypto_auditor_public.from($mol_crypto_auditor_private_to_public(await this.serial()));
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial) {
        return serial.slice(0, 86);
    }
    $.$mol_crypto_auditor_private_to_public = $mol_crypto_auditor_private_to_public;
})($ || ($ = {}));
//mol/crypto/auditor/auditor.ts
;
"use strict";
var $;
(function ($) {
    let $hyoo_crowd_peer_level;
    (function ($hyoo_crowd_peer_level) {
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["get"] = 0] = "get";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["add"] = 1] = "add";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["mod"] = 2] = "mod";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["law"] = 3] = "law";
    })($hyoo_crowd_peer_level = $.$hyoo_crowd_peer_level || ($.$hyoo_crowd_peer_level = {}));
    class $hyoo_crowd_peer extends Object {
        key_public;
        key_public_serial;
        key_private;
        key_private_serial;
        id;
        constructor(key_public, key_public_serial, key_private, key_private_serial) {
            super();
            this.key_public = key_public;
            this.key_public_serial = key_public_serial;
            this.key_private = key_private;
            this.key_private_serial = key_private_serial;
            this.id = $mol_int62_hash_string(this.key_public_serial);
        }
        static async generate() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const serial = await pair.private.serial();
            return new this(pair.public, $mol_crypto_auditor_private_to_public(serial), pair.private, serial);
        }
        static async restore(serial) {
            return new this(await $$.$mol_crypto_auditor_public.from(serial), $mol_crypto_auditor_private_to_public(serial), await $$.$mol_crypto_auditor_private.from(serial), serial);
        }
    }
    $.$hyoo_crowd_peer = $hyoo_crowd_peer;
})($ || ($ = {}));
//hyoo/crowd/peer/peer.ts
;
"use strict";
var $;
(function ($) {
    async function $hyoo_sync_peer(path) {
        let serial = $mol_state_local.value('$hyoo_sync_peer');
        if (typeof serial === 'string') {
            return await $hyoo_crowd_peer.restore(serial);
        }
        else {
            serial = $mol_state_local.value(path);
            if (typeof serial === 'string') {
                $mol_state_local.value('$hyoo_sync_peer', serial);
                $mol_state_local.value(path, null);
            }
        }
        const frame = $mol_jsx("iframe", { src: "https://sync.hyoo.ru/auth/" });
        frame.style.display = 'none';
        await new Promise((done, fail) => {
            frame.onload = done;
            frame.onerror = fail;
            frame.onabort = fail;
            document.body.appendChild(frame);
        });
        const serial_ext = await new Promise((done, fail) => {
            window.addEventListener('message', event => {
                if (!Array.isArray(event.data))
                    return;
                if (event.data[0] !== '$hyoo_sync_peer')
                    return;
                done(event.data[1]);
            });
            frame.contentWindow.postMessage(['$hyoo_sync_peer', serial], '*');
            setTimeout(() => done(serial), 5000);
        });
        document.body.removeChild(frame);
        if (typeof serial_ext === 'string') {
            if (!serial)
                $mol_state_local.value('$hyoo_sync_peer', serial_ext);
            return await $hyoo_crowd_peer.restore(serial_ext);
        }
        const peer = await $hyoo_crowd_peer.generate();
        $mol_state_local.value('$hyoo_sync_peer', peer.key_private_serial);
        return peer;
    }
    $.$hyoo_sync_peer = $hyoo_sync_peer;
})($ || ($ = {}));
//hyoo/sync/peer/peer.web.tsx
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_enum(name, dict) {
        const index = {};
        for (let key in dict) {
            if (Number.isNaN(Number(key))) {
                index[dict[key]] = key;
            }
        }
        return $mol_data_setup((value) => {
            if (typeof index[value] !== 'string') {
                return $mol_fail(new $mol_data_error(`${value} is not value of ${name} enum`));
            }
            return value;
        }, { name, dict });
    }
    $.$mol_data_enum = $mol_data_enum;
})($ || ($ = {}));
//mol/data/enum/enum.ts
;
"use strict";
var $;
(function ($) {
    const level = $mol_data_enum('level', $hyoo_crowd_peer_level);
    let $hyoo_crowd_unit_kind;
    (function ($hyoo_crowd_unit_kind) {
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["grab"] = 0] = "grab";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["join"] = 1] = "join";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["give"] = 2] = "give";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["data"] = 3] = "data";
    })($hyoo_crowd_unit_kind = $.$hyoo_crowd_unit_kind || ($.$hyoo_crowd_unit_kind = {}));
    let $hyoo_crowd_unit_group;
    (function ($hyoo_crowd_unit_group) {
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["auth"] = 0] = "auth";
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["data"] = 1] = "data";
    })($hyoo_crowd_unit_group = $.$hyoo_crowd_unit_group || ($.$hyoo_crowd_unit_group = {}));
    class $hyoo_crowd_unit extends Object {
        land;
        auth;
        head;
        self;
        next;
        prev;
        time;
        data;
        bin;
        constructor(land, auth, head, self, next, prev, time, data, bin) {
            super();
            this.land = land;
            this.auth = auth;
            this.head = head;
            this.self = self;
            this.next = next;
            this.prev = prev;
            this.time = time;
            this.data = data;
            this.bin = bin;
        }
        kind() {
            if (this.head === this.self && this.auth === this.self) {
                if (this.head === this.land) {
                    return $hyoo_crowd_unit_kind.grab;
                }
                else {
                    return $hyoo_crowd_unit_kind.join;
                }
            }
            if (this.head === this.land) {
                return $hyoo_crowd_unit_kind.give;
            }
            return $hyoo_crowd_unit_kind.data;
        }
        group() {
            return this.kind() === $hyoo_crowd_unit_kind.data
                ? $hyoo_crowd_unit_group.data
                : $hyoo_crowd_unit_group.auth;
        }
        level() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab: return $hyoo_crowd_peer_level.law;
                case $hyoo_crowd_unit_kind.give: return level(this.data);
                default: $mol_fail(new Error(`Wrong unit kind for getting level: ${this.kind()}`));
            }
        }
        [Symbol.toPrimitive]() {
            return JSON.stringify(this);
        }
        [$mol_dev_format_head]() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), ' 👑');
                case $hyoo_crowd_unit_kind.join:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🔑 ', this.self));
                case $hyoo_crowd_unit_kind.give:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🏅 ', this.self, ' '), $mol_dev_format_native($hyoo_crowd_peer_level[this.data] ?? this.data));
                case $hyoo_crowd_unit_kind.data:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 📦 ', this.head, '!', this.self, ' '), $mol_dev_format_native(this.data));
            }
        }
    }
    $.$hyoo_crowd_unit = $hyoo_crowd_unit;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        auth_lo: 8,
        auth_hi: 12,
        head_lo: 16,
        head_hi: 20,
        self_lo: 24,
        self_hi: 28,
        next_lo: 32,
        next_hi: 36,
        prev_lo: 40,
        prev_hi: 44,
        time: 48,
        size: 54,
        data: 56,
    };
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer) {
            const size = Math.ceil(Math.abs(buffer[offset.size / 2]) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
            return new this(buffer.slice(0, size / 2).buffer);
        }
        static from_unit(unit) {
            if (unit.bin)
                return unit.bin;
            const type = unit.data === null
                ? 0
                : unit.data instanceof Uint8Array
                    ? -1
                    : 1;
            const buff = type === 0 ? null
                : type > 0 ? $mol_charset_encode(JSON.stringify(unit.data))
                    : unit.data;
            const size = buff?.byteLength ?? 0;
            if (type > 0 && size > 2 ** 15 - 1)
                throw new Error(`Too large json data: ${size} > ${2 ** 15 - 1}`);
            if (type < 0 && size > 2 ** 15)
                throw new Error(`Too large binary data: ${size} > ${2 ** 15}`);
            const total = offset.data + Math.ceil(size / 8) * 8 + $mol_crypto_auditor_sign_size;
            const mem = new Uint8Array(total);
            const bin = new $hyoo_crowd_unit_bin(mem.buffer);
            const land = $mol_int62_from_string(unit.land);
            bin.setInt32(offset.land_lo, land.lo, true);
            bin.setInt32(offset.land_hi, land.hi, true);
            const auth = $mol_int62_from_string(unit.auth);
            bin.setInt32(offset.auth_lo, auth.lo, true);
            bin.setInt32(offset.auth_hi, auth.hi, true);
            const head = $mol_int62_from_string(unit.head);
            bin.setInt32(offset.head_lo, head.lo, true);
            bin.setInt32(offset.head_hi, head.hi, true);
            const self = $mol_int62_from_string(unit.self);
            bin.setInt32(offset.self_lo, self.lo, true);
            bin.setInt32(offset.self_hi, self.hi, true);
            const next = $mol_int62_from_string(unit.next);
            bin.setInt32(offset.next_lo, next.lo, true);
            bin.setInt32(offset.next_hi, next.hi, true);
            const prev = $mol_int62_from_string(unit.prev);
            bin.setInt32(offset.prev_lo, prev.lo, true);
            bin.setInt32(offset.prev_hi, prev.hi, true);
            bin.setInt32(offset.time, unit.time, true);
            bin.setInt16(offset.size, type * size, true);
            if (buff)
                mem.set(buff, offset.data);
            return bin;
        }
        sign(next) {
            const sign_offset = this.byteOffset + this.byteLength - $mol_crypto_auditor_sign_size;
            const buff = new Uint8Array(this.buffer, sign_offset, $mol_crypto_auditor_sign_size);
            if (!next)
                return buff;
            buff.set(next);
            return buff;
        }
        size() {
            return Math.ceil(Math.abs(this.getInt16(offset.size, true)) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
        }
        sens() {
            return new Uint8Array(this.buffer, this.byteOffset, this.size() - $mol_crypto_auditor_sign_size);
        }
        unit() {
            const land = $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
            const auth = $mol_int62_to_string({
                lo: this.getInt32(offset.auth_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.auth_hi, true) << 1 >> 1,
            });
            const head = $mol_int62_to_string({
                lo: this.getInt32(offset.head_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.head_hi, true) << 1 >> 1,
            });
            const self = $mol_int62_to_string({
                lo: this.getInt32(offset.self_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.self_hi, true) << 1 >> 1,
            });
            const next = $mol_int62_to_string({
                lo: this.getInt32(offset.next_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.next_hi, true) << 1 >> 1,
            });
            const prev = $mol_int62_to_string({
                lo: this.getInt32(offset.prev_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.prev_hi, true) << 1 >> 1,
            });
            const time = this.getInt32(offset.time, true) << 1 >> 1;
            const type_size = this.getInt16(offset.size, true);
            let data = null;
            if (type_size) {
                try {
                    var buff = new Uint8Array(this.buffer, this.byteOffset + offset.data, Math.abs(type_size));
                }
                catch (error) {
                    error['message'] += `\nhead=${head};self=${self}`;
                    $mol_fail_hidden(error);
                }
                if (type_size < 0)
                    data = buff;
                else
                    data = JSON.parse($mol_charset_decode(buff));
            }
            return new $hyoo_crowd_unit(land, auth, head, self, next, prev, time, data, this);
        }
    }
    $.$hyoo_crowd_unit_bin = $hyoo_crowd_unit_bin;
    function $hyoo_crowd_unit_compare(left, right) {
        return (left.group() - right.group())
            || (left.time - right.time)
            || ((left.auth > right.auth) ? 1 : (left.auth < right.auth) ? -1 : 0)
            || ((left.self > right.self) ? 1 : (left.self < right.self) ? -1 : 0)
            || ((left.head > right.head) ? 1 : (left.head < right.head) ? -1 : 0)
            || ((left.prev > right.prev) ? 1 : (left.prev < right.prev) ? -1 : 0)
            || ((left.next > right.next) ? 1 : (left.next < right.next) ? -1 : 0)
            || ((left.land > right.land) ? 1 : (left.land < right.land) ? -1 : 0);
    }
    $.$hyoo_crowd_unit_compare = $hyoo_crowd_unit_compare;
})($ || ($ = {}));
//hyoo/crowd/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_crowd_time_now() {
        return Math.floor(Date.now() / 100) - 1767e7;
    }
    $.$hyoo_crowd_time_now = $hyoo_crowd_time_now;
    function $hyoo_crowd_time_stamp(time) {
        return 1767e9 + time * 100;
    }
    $.$hyoo_crowd_time_stamp = $hyoo_crowd_time_stamp;
})($ || ($ = {}));
//hyoo/crowd/time/time.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        static begin = -1 * 2 ** 30;
        last_time = $hyoo_crowd_clock.begin;
        constructor(entries) {
            super(entries);
            if (!entries)
                return;
            for (const [peer, time] of entries) {
                this.see_time(time);
            }
        }
        sync(right) {
            for (const [peer, time] of right) {
                this.see_peer(peer, time);
            }
        }
        see_time(time) {
            if (time < this.last_time)
                return;
            this.last_time = time;
        }
        see_peer(peer, time) {
            if (!this.fresh(peer, time))
                return;
            this.set(peer, time);
            this.see_time(time);
        }
        see_bin(bin, group) {
            for (let cursor = offset.clocks; cursor < bin.byteLength; cursor += 16) {
                this.see_peer($mol_int62_to_string({
                    lo: bin.getInt32(cursor + 0, true) << 1 >> 1,
                    hi: bin.getInt32(cursor + 4, true) << 1 >> 1,
                }), bin.getInt32(cursor + 8 + 4 * group, true));
            }
        }
        fresh(peer, time) {
            return time > this.time(peer);
        }
        ahead(clock) {
            for (const [peer, time] of this) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        time(peer) {
            return this.get(peer) ?? $hyoo_crowd_clock.begin;
        }
        now() {
            return $hyoo_crowd_time_now();
        }
        last_stamp() {
            return $hyoo_crowd_time_stamp(this.last_time);
        }
        tick(peer) {
            let time = this.now();
            if (time <= this.last_time) {
                time = this.last_time + 1;
            }
            this.see_peer(peer, time);
            return time;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ' + new Date(this.last_stamp()).toISOString().replace('T', ' ')));
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        clocks: 8,
    };
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id, clocks) {
            const size = offset.clocks + clocks[0].size * 16;
            const mem = new Uint8Array(size);
            const bin = new $hyoo_crowd_clock_bin(mem.buffer);
            const land = $mol_int62_from_string(land_id);
            bin.setInt32(offset.land_lo, land.lo ^ (1 << 31), true);
            bin.setInt32(offset.land_hi, land.hi, true);
            let cursor = offset.clocks;
            for (const [peer_id, time] of clocks[0]) {
                const peer = $mol_int62_from_string(peer_id);
                bin.setInt32(cursor + 0, peer.lo, true);
                bin.setInt32(cursor + 4, peer.hi, true);
                bin.setInt32(cursor + 8, time, true);
                bin.setInt32(cursor + 12, clocks[1].get(peer_id) ?? $hyoo_crowd_clock.begin, true);
                cursor += 16;
            }
            return bin;
        }
        land() {
            return $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
        }
    }
    $.$hyoo_crowd_clock_bin = $hyoo_crowd_clock_bin;
})($ || ($ = {}));
//hyoo/crowd/clock/clock.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node extends $mol_object2 {
        land;
        head;
        constructor(land = new $hyoo_crowd_land, head = '0_0') {
            super();
            this.land = land;
            this.head = head;
        }
        static for(land, head) {
            return new this(land, head);
        }
        id() {
            return this.head === '0_0'
                ? this.land.id()
                : `${this.land.id()}!${this.head}`;
        }
        world() {
            return this.land.world();
        }
        as(Node) {
            return this.world()?.Fund(Node).Item(`${this.land.id()}!${this.head}`) ?? new Node(this.land, this.head);
        }
        units() {
            return this.land.unit_alives(this.head);
        }
        nodes(Node) {
            const fund = this.world()?.Fund(Node);
            return this.units().map(unit => fund?.Item(`${this.land.id()}!${unit.self}`) ?? new Node(this.land, unit.self));
        }
        virgin() {
            return this.land.unit_list(this.head).length === 0;
        }
        [Symbol.toPrimitive]() {
            return `${this.constructor.name}("${this.land.id()}","${this.head}")`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(':'), $mol_dev_format_auto(this.land.unit_list(this.head)));
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_node.prototype, "nodes", null);
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));
//hyoo/crowd/node/node.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next) {
            const unit = this.units()[0];
            if (next === undefined)
                return unit?.data ?? null;
            if ($mol_compare_deep(unit?.data, next))
                return next;
            this.land.put(this.head, unit?.self ?? this.land.id_new(), '0_0', next);
            return next;
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next));
        }
        bool(next) {
            return Boolean(this.value(next));
        }
        yoke(law = [''], mod = [], add = []) {
            const world = this.world();
            let land_id = $mol_int62_string_ensure(this.value());
            if (land_id)
                return world.land_sync(land_id);
            if (this.land.level(this.land.peer().id) < $hyoo_crowd_peer_level.add)
                return null;
            const land = $mol_wire_sync(world).grab(law, mod, add);
            this.value(land.id());
            world.land_init(land);
            return land;
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));
//hyoo/crowd/reg/reg.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub(key, Node) {
            const head = $mol_int62_hash_string(key + '\n' + this.head);
            return this.world()?.Fund(Node).Item(`${this.land.id()}!${head}`) ?? new Node(this.land, head);
        }
        yoke(key, Node, law = [''], mod = [], add = []) {
            const land = this.sub(key, $hyoo_crowd_reg).yoke(law, mod, add);
            return land?.chief.sub(key, Node) ?? null;
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));
//hyoo/crowd/struct/struct.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_land extends $mol_object {
        id() {
            return $mol_int62_to_string($mol_int62_random());
        }
        toJSON() {
            return this.id();
        }
        peer() {
            return this.world()?.peer;
        }
        peer_id() {
            return this.peer()?.id ?? '0_0';
        }
        world() {
            return null;
        }
        get clock_auth() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.auth];
        }
        get clock_data() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.data];
        }
        get clocks() {
            this.pub.promote();
            return this._clocks;
        }
        pub = new $mol_wire_pub;
        _clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
        _unit_all = new Map();
        unit(head, self) {
            return this._unit_all.get(`${head}!${self}`);
        }
        _unit_lists = new Map();
        _unit_alives = new Map();
        size() {
            return this._unit_all.size;
        }
        unit_list(head) {
            let kids = this._unit_lists.get(head);
            if (!kids)
                this._unit_lists.set(head, kids = Object.assign([], { dirty: false }));
            return kids;
        }
        unit_alives(head) {
            this.pub.promote();
            let kids = this._unit_alives.get(head);
            if (!kids) {
                const all = this.unit_list(head);
                if (all.dirty)
                    this.resort(head);
                kids = all.filter(kid => kid.data !== null);
                this._unit_alives.set(head, kids);
            }
            return kids;
        }
        node(head, Node) {
            return new Node(this, head);
        }
        chief = this.node('0_0', $hyoo_crowd_struct);
        id_new() {
            for (let i = 0; i < 1000; ++i) {
                const id = $mol_int62_to_string($mol_int62_random());
                if (id === '0_0')
                    continue;
                if (id === this.id())
                    continue;
                if (this._unit_lists.has(id))
                    continue;
                return id;
            }
            throw new Error(`Can't generate ID after 1000 times`);
        }
        fork(auth) {
            const fork = $hyoo_crowd_land.make({
                id: $mol_const(this.id()),
                peer: $mol_const(auth),
            });
            return fork.apply(this.delta());
        }
        delta(clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            this.pub.promote();
            const delta = [];
            for (const unit of this._unit_all.values()) {
                const time = clocks[unit.group()].time(unit.auth);
                if (unit.time <= time)
                    continue;
                delta.push(unit);
            }
            delta.sort($hyoo_crowd_unit_compare);
            return delta;
        }
        resort(head) {
            const kids = this._unit_lists.get(head);
            if (!kids.dirty)
                return kids;
            if (kids.length < 2) {
                kids.dirty = true;
                return kids;
            }
            const queue = kids.splice(0).sort((left, right) => -$hyoo_crowd_unit_compare(left, right));
            const locate = (self) => {
                for (let i = kids.length - 1; i >= 0; --i) {
                    if (kids[i].self === self)
                        return i;
                }
                return -1;
            };
            while (queue.length) {
                kids.push(queue.pop());
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let index = 0;
                    if (kid.prev !== '0_0') {
                        index = locate(kid.prev) + 1;
                        if (!index)
                            continue;
                    }
                    while (kids[index] && ($hyoo_crowd_unit_compare(kids[index], kid) > 0))
                        ++index;
                    const exists = locate(kid.self);
                    if (index === exists) {
                        if (cursor === queue.length - 1)
                            queue.pop();
                        continue;
                    }
                    if (exists >= 0) {
                        kids.splice(exists, 1);
                        if (exists < index)
                            --index;
                    }
                    kids.splice(index, 0, kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            kids.dirty = false;
            return kids;
        }
        apply(delta) {
            for (const next of delta) {
                this._clocks[next.group()].see_peer(next.auth, next.time);
                const kids = this.unit_list(next.head);
                const next_id = `${next.head}!${next.self}`;
                let prev = this._unit_all.get(next_id);
                if (prev) {
                    if ($hyoo_crowd_unit_compare(prev, next) > 0)
                        continue;
                    kids[kids.indexOf(prev)] = next;
                }
                else {
                    kids.push(next);
                }
                this._unit_all.set(next_id, next);
                if (kids.length > 1)
                    kids.dirty = true;
                this._unit_alives.set(next.head, undefined);
            }
            this.pub.emit();
            return this;
        }
        _joined = false;
        join() {
            if (this._joined)
                return;
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}!${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (auth_unit?.data)
                return this._joined = true;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, auth.key_public_serial, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = true;
            this.pub.emit();
        }
        leave() {
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}!${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (!auth_unit || !auth_unit.data)
                return this._joined = false;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, null, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = false;
            this.pub.emit();
        }
        allowed_add(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.add;
        }
        allowed_mod(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.mod;
        }
        allowed_law(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.law;
        }
        level_base(next) {
            this.level('0_0', next);
        }
        level(peer, next) {
            if (next)
                this.join();
            else
                this.pub.promote();
            if (!peer)
                peer = this.peer_id();
            const level_id = `${this.id()}!${peer}`;
            const prev = this._unit_all.get(level_id)?.level()
                ?? this._unit_all.get(`${this.id()}!0_0`)?.level()
                ?? (this.id() === peer ? $hyoo_crowd_peer_level.law : $hyoo_crowd_peer_level.get);
            if (next === undefined)
                return prev;
            if (next <= prev)
                return prev;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(peer);
            const auth = this.peer_id();
            const level_unit = new $hyoo_crowd_unit(this.id(), auth, this.id(), peer, '0_0', '0_0', time, next, null);
            this._unit_all.set(level_id, level_unit);
            this.pub.emit();
            return next;
        }
        grabbed() {
            if (this.id() === this.peer_id())
                return true;
            this.pub.promote();
            return this._unit_all.size > 0;
        }
        peers() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                switch (unit.kind()) {
                    case $hyoo_crowd_unit_kind.data: continue;
                    case $hyoo_crowd_unit_kind.join: continue;
                    default: lords.push(unit.self);
                }
            }
            return lords;
        }
        residents() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                if (unit.data === null)
                    continue;
                if (unit.kind() !== $hyoo_crowd_unit_kind.join)
                    continue;
                lords.push(unit.self);
            }
            return lords;
        }
        authors() {
            this.pub.promote();
            const authors = new Set();
            for (const unit of this._unit_all.values()) {
                if (unit.kind() !== $hyoo_crowd_unit_kind.data)
                    continue;
                if (unit.data === null)
                    continue;
                authors.add(unit.auth);
            }
            return authors;
        }
        steal_rights(donor) {
            for (const peer of donor.peers()) {
                this.level(peer, donor.level(peer));
            }
        }
        first_stamp() {
            this.pub.promote();
            const grab_unit = this._unit_all.get(`${this.id()}!${this.id()}`);
            return (grab_unit && $hyoo_crowd_time_stamp(grab_unit.time)) ?? null;
        }
        last_stamp() {
            this.pub.promote();
            return this.clock_data.last_stamp();
        }
        selection(peer) {
            return this.world().land_sync(peer).chief.sub('$hyoo_crowd_land..selection', $hyoo_crowd_reg);
        }
        put(head, self, prev, data) {
            this.join();
            const old_id = `${head}!${self}`;
            let unit_old = this._unit_all.get(old_id);
            let unit_prev = prev !== '0_0'
                ? this._unit_all.get(`${head}!${prev}`)
                : null;
            const unit_list = this.unit_list(head);
            if (unit_old)
                unit_list.splice(unit_list.indexOf(unit_old), 1);
            const seat = unit_prev ? unit_list.indexOf(unit_prev) + 1 : 0;
            const next = unit_list[seat]?.self ?? '0_0';
            const auth = this.peer_id();
            const time = this._clocks[$hyoo_crowd_unit_group.data].tick(auth);
            const unit_new = new $hyoo_crowd_unit(this.id(), auth, head, self, next, prev, time, data, null);
            this._unit_all.set(old_id, unit_new);
            unit_list.splice(seat, 0, unit_new);
            unit_list.dirty = true;
            this._unit_alives.set(head, undefined);
            this.pub.emit();
            return unit_new;
        }
        wipe(unit) {
            if (unit.data === null)
                return unit;
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const prev = seat > 0 ? unit_list[seat - 1].self : seat < 0 ? unit.prev : '0_0';
            return this.put(unit.head, unit.self, prev, null);
        }
        move(unit, head, prev) {
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const next = unit_list[seat + 1];
            this.wipe(unit);
            if (next)
                this.put(next.head, next.self, unit_list[unit_list.indexOf(next) - 2]?.self ?? '0_0', next.data);
            this.put(head, unit.self, prev, unit.data);
        }
        insert(unit, head, seat) {
            const list = this.unit_list(head);
            const prev = seat ? list[seat - 1].self : '0_0';
            return this.move(unit, head, prev);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crowd_land.prototype, "id", null);
    $.$hyoo_crowd_land = $hyoo_crowd_land;
})($ || ($ = {}));
//hyoo/crowd/land/land.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_fund extends $mol_object {
        world;
        Node;
        constructor(world, Node) {
            super();
            this.world = world;
            this.Node = Node;
        }
        Item(id) {
            const [land, head] = id.split('!');
            if (!head)
                return this.Item(`${land}!0_0`);
            return this.world.land_sync(land).node(head, this.Node);
        }
        make(law = [''], mod = [], add = []) {
            const land = $mol_wire_sync(this.world).grab(law, mod, add);
            return this.Item(land.id());
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_fund.prototype, "Item", null);
    __decorate([
        $mol_action
    ], $hyoo_crowd_fund.prototype, "make", null);
    $.$hyoo_crowd_fund = $hyoo_crowd_fund;
})($ || ($ = {}));
//hyoo/crowd/fund/fund.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dict_key = $mol_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_key(key));
        }
        has(key) {
            return super.has($mol_key(key));
        }
        set(key, value) {
            return super.set($mol_key(key), value);
        }
        delete(key) {
            return super.delete($mol_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        keys() {
            const iterator = super.keys();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = JSON.parse(iteration.value);
                    return iteration;
                }
            };
        }
        entries() {
            const iterator = super.entries();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = [JSON.parse(iteration.value[0]), iteration.value[1]];
                    return iteration;
                }
            };
        }
        [Symbol.iterator]() {
            return this.entries();
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//mol/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_world extends $mol_object {
        peer;
        constructor(peer) {
            super();
            this.peer = peer;
            if (peer)
                this._knights.set(peer.id, peer);
        }
        lands_pub = new $mol_wire_pub;
        _lands = new Map();
        get lands() {
            this.lands_pub.promote();
            return this._lands;
        }
        land_init(id) { }
        land(id) {
            const exists = this._lands.get(id);
            if (exists)
                return exists;
            const land = $hyoo_crowd_land.make({
                id: $mol_const(id),
                world: $mol_const(this),
            });
            this._lands.set(id, land);
            this.lands_pub.emit();
            return land;
        }
        land_sync(id) {
            const land = this.land(id);
            this.land_init(land);
            return land;
        }
        Fund(Item) {
            return new $hyoo_crowd_fund(this, Item);
        }
        home() {
            return this.land_sync(this.peer.id);
        }
        _knights = new $mol_dict();
        _signs = new WeakMap();
        async grab(law = [''], mod = [], add = []) {
            const knight = await $hyoo_crowd_peer.generate();
            this._knights.set(knight.id, knight);
            const land_inner = this.land(knight.id);
            const land_outer = $hyoo_crowd_land.make({
                id: $mol_const(knight.id),
                peer: $mol_const(knight),
            });
            for (const peer of law)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.law);
            for (const peer of mod)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.mod);
            for (const peer of add)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.add);
            land_inner.apply(land_outer.delta());
            return land_inner;
        }
        sign_units(units) {
            return Promise.all(units.map(async (unit) => {
                if (unit.bin)
                    return unit;
                const bin = $hyoo_crowd_unit_bin.from_unit(unit);
                let sign = this._signs.get(unit);
                if (!sign) {
                    const knight = this._knights.get(unit.auth);
                    sign = new Uint8Array(await knight.key_private.sign(bin.sens()));
                }
                bin.sign(sign);
                unit.bin = bin;
                this._signs.set(unit, sign);
                return unit;
            }));
        }
        delta_land(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            return this.sign_units(land.delta(clocks));
        }
        async delta_batch(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            const units = await this.delta_land(land, clocks);
            let size = 0;
            const bins = [];
            for (const unit of units) {
                const bin = unit.bin;
                bins.push(bin);
                size += bin.byteLength;
            }
            const batch = new Uint8Array(size);
            let offset = 0;
            for (const bin of bins) {
                batch.set(new Uint8Array(bin.buffer, bin.byteOffset, bin.byteLength), offset);
                offset += bin.byteLength;
            }
            return batch;
        }
        async *delta(clocks = new Map()) {
            for (const land of this.lands.values()) {
                yield await this.delta_batch(land, clocks.get(land.id()));
            }
        }
        async apply(delta) {
            const units = [];
            let bin_offset = 0;
            while (bin_offset < delta.byteLength) {
                const buf = new Int16Array(delta.buffer, delta.byteOffset + bin_offset);
                const bin = $hyoo_crowd_unit_bin.from_buffer(buf);
                units.push(bin.unit());
                bin_offset += bin.size();
            }
            const land = this.land(units[0].land);
            const report = await this.audit_delta(land, units);
            land.apply(report.allow);
            return report;
        }
        async audit_delta(land, delta) {
            const all = new Map();
            const desync = 60 * 60 * 10;
            const deadline = land.clock_data.now() + desync;
            const get_unit = (id) => {
                return all.get(id) ?? land._unit_all.get(id);
            };
            const get_level = (head, self) => {
                return get_unit(`${head}!${self}`)?.level()
                    ?? get_unit(`${head}!0_0`)?.level()
                    ?? $hyoo_crowd_peer_level.get;
            };
            const check_unit = async (unit) => {
                const bin = unit.bin;
                if (unit.time > deadline)
                    return 'Far future';
                const auth_unit = get_unit(`${unit.auth}!${unit.auth}`);
                const kind = unit.kind();
                switch (kind) {
                    case $hyoo_crowd_unit_kind.grab:
                    case $hyoo_crowd_unit_kind.join: {
                        const key_str = auth_unit?.data ?? unit.data;
                        if (typeof key_str !== 'string')
                            return 'No join key';
                        const self = $mol_int62_hash_string(key_str);
                        if (unit.self !== self)
                            return 'Alien join key';
                        const key = await $mol_crypto_auditor_public.from(key_str);
                        const sign = bin.sign();
                        const valid = await key.verify(bin.sens(), sign);
                        if (!valid)
                            return 'Wrong join sign';
                        all.set(`${unit.head}!${unit.auth}`, unit);
                        this._signs.set(unit, sign);
                        return '';
                    }
                    case $hyoo_crowd_unit_kind.give: {
                        const lord_level = get_level(land.id(), unit.auth);
                        if (lord_level < $hyoo_crowd_peer_level.law)
                            return `Level too low`;
                        const peer_level = get_level(land.id(), unit.self);
                        if (peer_level > unit.level())
                            return `Cancel unsupported`;
                        break;
                    }
                    case $hyoo_crowd_unit_kind.data: {
                        const level = get_level(land.id(), unit.auth);
                        if (level >= $hyoo_crowd_peer_level.mod)
                            break;
                        if (level === $hyoo_crowd_peer_level.add) {
                            const exists = get_unit(`${unit.head}!${unit.self}`);
                            if (!exists)
                                break;
                            if (exists.auth === unit.auth)
                                break;
                        }
                        return `Level too low`;
                    }
                }
                const key_str = auth_unit?.data;
                if (typeof key_str !== 'string')
                    return 'No auth key';
                const key = await $mol_crypto_auditor_public.from(key_str);
                const sign = bin.sign();
                const valid = await key.verify(bin.sens(), sign);
                if (!valid)
                    return 'Wrong auth sign';
                all.set(`${unit.head}!${unit.self}`, unit);
                this._signs.set(unit, sign);
                return '';
            };
            const allow = [];
            const forbid = new Map();
            const proceed_unit = async (unit) => {
                const error = await check_unit(unit);
                if (error)
                    forbid.set(unit, error);
                else
                    allow.push(unit);
            };
            const tasks = [];
            for (const unit of delta) {
                const task = proceed_unit(unit);
                tasks.push(task);
                if (unit.group() === $hyoo_crowd_unit_group.auth)
                    await task;
            }
            await Promise.all(tasks);
            return { allow, forbid };
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_world.prototype, "Fund", null);
    $.$hyoo_crowd_world = $hyoo_crowd_world;
})($ || ($ = {}));
//hyoo/crowd/world/world.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_race(...tasks) {
        const results = tasks.map(task => {
            try {
                return task();
            }
            catch (error) {
                return error;
            }
        });
        const promises = results.filter(res => res instanceof Promise);
        if (promises.length)
            $mol_fail(Promise.race(promises));
        const error = results.find(res => res instanceof Error);
        if (error)
            $mol_fail(error);
        return results;
    }
    $.$mol_wire_race = $mol_wire_race;
})($ || ($ = {}));
//mol/wire/race/race.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//mol/log3/log3.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.values(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i] === 'string') ? ' ⦙ %s' : ' ⦙ %o';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl, style, ...chunks);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));
//mol/log3/log3.web.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_sync_masters = [
        `wss://sync.hyoo.ru/`,
        `wss://crowd.up.railway.app/`,
        'wss://sync-hyoo-ru.herokuapp.com/',
    ];
})($ || ($ = {}));
//hyoo/sync/masters/masters.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_yard extends $mol_object2 {
        log_pack(data) {
            return data;
        }
        peer() {
            return $mol_wire_sync($hyoo_sync_peer)(this + '.peer()');
        }
        world() {
            const world = new this.$.$hyoo_crowd_world(this.peer());
            world.land_init = land => this.land_init(land);
            return world;
        }
        land_init(land) {
            this.db_land_init(land);
        }
        land(id) {
            return this.world().land_sync(id);
        }
        land_grab(law = [''], mod = [], add = []) {
            return $mol_wire_sync(this.world()).grab(law, mod, add);
        }
        home() {
            return this.land(this.peer().id);
        }
        land_search(query) {
            const stat = new Map();
            for (const prefix of query.match(/\p{Letter}{2,}/gu) ?? []) {
                const caps = prefix.slice(0, 1).toUpperCase() + prefix.slice(1);
                const prefs = new Set([
                    caps, ' ' + caps,
                    prefix, ' ' + prefix,
                ]);
                const lands = new Set();
                const founds = $mol_wire_race(...[...prefs].map(pref => () => $mol_wire_sync(this).db_land_search(pref)));
                for (const found of founds) {
                    for (const land of [...found].reverse())
                        lands.add(land);
                }
                for (const land of lands) {
                    stat.set(land, (stat.get(land) ?? 0) + 1);
                }
            }
            return [...stat].sort((left, right) => right[1] - left[1]).map(pair => pair[0]);
        }
        sync() {
            this.server();
            for (const land of this.world().lands.values()) {
                this.db_land_sync(land);
            }
            const master = this.master();
            if (master)
                $mol_wire_race(...[...this.world().lands.values()].map(land => () => this.line_land_sync({ line: master, land })));
            $mol_wire_race(...this.slaves().map(line => () => this.line_sync(line)));
        }
        land_sync(land) {
            this.db_land_init(land);
            try {
                this.db_land_sync(land);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                const master = this.master();
                if (master)
                    this.line_land_sync({ line: master, land });
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                $mol_wire_race(...this.slaves()
                    .filter(line => this.line_lands(line).includes(land))
                    .map(line => () => this.line_land_sync({ line, land })));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        db_land_clocks(land, next) {
            $mol_wire_solid();
            return next;
        }
        db_land_sync(land) {
            this.db_land_init(land);
            const db_clocks = this.db_land_clocks(land.id());
            land.clocks;
            const units = land.delta(db_clocks);
            if (!units.length)
                return;
            $mol_wire_sync(this.world()).sign_units(units);
            $mol_wire_sync(this).db_land_save(land, units);
            for (const unit of units) {
                db_clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
        }
        db_land_init(land) {
            try {
                var units = $mol_wire_sync(this).db_land_load(land);
            }
            catch (error) {
                if (!(error instanceof Error))
                    $mol_fail_hidden(error);
                this.$.$mol_log3_fail({
                    place: this,
                    land: land.id(),
                    message: error.message,
                });
                units = [];
            }
            units.sort($hyoo_crowd_unit_compare);
            const clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
            this.db_land_clocks(land.id(), clocks);
            land.apply(units);
            for (const unit of units) {
                clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
        }
        async db_land_load(land) {
            return [];
        }
        async db_land_search(from, to = from) {
            return new Set();
        }
        async db_land_save(land, units) { }
        master_cursor(next = 0) {
            return next;
        }
        master_link() {
            return this.$.$hyoo_sync_masters[this.master_cursor()];
        }
        master() {
            return null;
        }
        server() {
            return null;
        }
        slaves(next = []) {
            return next;
        }
        line_lands(line, next = []) {
            return next;
        }
        line_land_clocks({ line, land }, next) {
            $mol_wire_solid();
            this.master();
            return next;
        }
        line_sync(line) {
            $mol_wire_race(...this.line_lands(line).map(land => () => this.line_land_sync({ line, land })));
        }
        line_land_sync({ line, land }) {
            this.line_land_init({ line, land });
            let clocks = this.line_land_clocks({ line, land });
            if (!clocks)
                return;
            const units = land.delta(clocks);
            if (!units.length)
                return;
            $mol_wire_sync(this).line_send_units(line, units);
            this.$.$mol_log3_rise({
                place: this,
                land: land.id(),
                message: 'Sync Sent',
                line: $mol_key(line),
                units: this.log_pack(units),
            });
            for (const unit of units) {
                clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
        }
        line_land_init({ line, land }) {
            this.db_land_init(land);
            this.line_send_clocks(line, land);
        }
        line_land_neck({ line, land }, next = []) {
            return next;
        }
        async line_receive(line, message) {
            if (!message.byteLength)
                return;
            const view = new DataView(message.buffer, message.byteOffset, message.byteLength);
            const int0 = view.getInt32(0, true);
            const int1 = view.getInt32(4, true);
            const land_id = $mol_int62_to_string({
                lo: int0 << 1 >> 1,
                hi: int1 << 1 >> 1,
            });
            const handle = async (prev) => {
                if (prev)
                    await prev;
                const world = this.world();
                const land = await $mol_wire_async(world).land(land_id);
                let clocks = this.line_land_clocks({ line, land });
                if (!clocks)
                    this.line_land_clocks({ line, land }, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]);
                if (int0 << 1 >> 1 ^ int0) {
                    const bin = new $hyoo_crowd_clock_bin(message.buffer, message.byteOffset, message.byteLength);
                    for (let group = 0; group < clocks.length; ++group) {
                        clocks[group].see_bin(bin, group);
                    }
                    const lands = this.line_lands(line);
                    if (lands.includes(land)) {
                        this.$.$mol_log3_warn({
                            place: this,
                            land: land.id(),
                            message: 'Already syncing',
                            hint: 'Bug at $hyoo_sync_yard',
                            line: $mol_key(line),
                            clocks,
                        });
                    }
                    else {
                        this.line_lands(line, [...lands, land]);
                    }
                    return;
                }
                const { allow, forbid } = await world.apply(message);
                for (const [unit, error] of forbid) {
                    this.$.$mol_log3_fail({
                        place: this,
                        land: land.id(),
                        message: error,
                        line: $mol_key(line),
                        unit,
                    });
                }
                if (!allow.length)
                    return;
                for (const unit of allow) {
                    clocks[unit.group()].see_peer(unit.auth, unit.time);
                }
                this.$.$mol_log3_rise({
                    place: this,
                    land: land.id(),
                    message: 'Sync Gain',
                    line: $mol_key(line),
                    units: this.log_pack(allow),
                });
            };
            this.line_land_neck({ line, land: land_id }, [
                handle(this.line_land_neck({ line, land: land_id })[0])
            ]);
        }
        line_send_clocks(line, land) { }
        async line_send_units(line, units) { }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "world", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_init", null);
    __decorate([
        $mol_action
    ], $hyoo_sync_yard.prototype, "land_search", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_init", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "slaves", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_lands", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_init", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_neck", null);
    $.$hyoo_sync_yard = $hyoo_sync_yard;
})($ || ($ = {}));
//hyoo/sync/yard/yard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));
//mol/db/response/response.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));
//mol/db/store/store.ts
;
"use strict";
//mol/db/store/store_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));
//mol/db/index/index.ts
;
"use strict";
//mol/db/index/index_schema.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));
//mol/db/db.ts
;
"use strict";
//mol/db/db_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly')).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite'));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.warn;
            return $mol_db_response(request);
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));
//mol/db/database/database.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name) => new $mol_db_store(this.native.objectStore(name)),
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            if (this.native.error)
                return;
            this.native.abort();
        }
        commit() {
            this.native.commit?.();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));
//mol/db/transaction/transaction.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_client extends $hyoo_sync_yard {
        async db() {
            const db1 = await this.$.$mol_db('$hyoo_sync_client_db');
            await db1.kill();
            return await this.$.$mol_db('$hyoo_sync_client_db2', mig => mig.store_make('Unit'), mig => mig.stores.Unit.index_make('Land', ['land']), mig => mig.stores.Unit.index_make('Data', ['data']));
        }
        async db_land_load(land) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
            const Unit = db.read('Unit').Unit;
            const recs = await Unit.indexes.Land.select([land.id()]);
            if (!recs)
                return [];
            const units = recs.map(rec => new $hyoo_crowd_unit(rec.land, rec.auth, rec.head, rec.self, rec.next, rec.prev, rec.time, rec.data, new $hyoo_crowd_unit_bin(rec.bin.buffer)));
            return units;
        }
        async db_land_search(from, to = from + '\uFFFF') {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return new Set();
            }
            const Unit = db.read('Unit').Unit;
            const query = IDBKeyRange.bound([from], [to]);
            const recs = await Unit.indexes.Data.select(query);
            return new Set(recs.map(rec => rec.land));
        }
        async db_land_save(land, units) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return;
            }
            const trans = db.change('Unit');
            const Unit = trans.stores.Unit;
            for (const unit of units) {
                Unit.put(unit, [unit.land, unit.head, unit.self]);
            }
            await trans.commit();
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_link();
            const line = new $mol_dom_context.WebSocket(link);
            line.binaryType = 'arraybuffer';
            line.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    await this.line_receive(line, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            line.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 5000);
            };
            Object.assign(line, {
                destructor: () => line.close()
            });
            return new Promise((done, fail) => {
                line.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected to Master',
                        line: $mol_key(line),
                        server: link,
                    });
                    interval = setInterval(() => line.send(new Uint8Array), 30000);
                    done(line);
                };
                line.onerror = () => {
                    this.master_cursor((this.master_cursor() + 1) % this.$.$hyoo_sync_masters.length);
                    fail(new Error(`Master is unabailable`));
                };
            });
        }
        line_send_clocks(line, land) {
            if (line instanceof WebSocket) {
                const message = new Uint8Array($hyoo_crowd_clock_bin.from(land.id(), land._clocks).buffer);
                line.send(message);
            }
            else {
                const message = land._clocks;
                line.postMessage(['hyoo_sync_clocks', land.id(), message]);
            }
        }
        async line_send_units(line, units) {
            if (line instanceof WebSocket) {
                await this.world().sign_units(units);
                const message = new Blob(units.map(unit => unit.bin));
                line.send(message);
            }
            else {
                line.postMessage(['hyoo_sync_units', units[0].land, units]);
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_sync_client.prototype, "db", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "master", null);
    $.$hyoo_sync_client = $hyoo_sync_client;
})($ || ($ = {}));
//hyoo/sync/client/client.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_js_perf_case extends $hyoo_crowd_struct {
        title(next) {
            return this.sub('title', $hyoo_crowd_reg).str(next);
        }
        setup(next) {
            return this.sub('setup', $hyoo_crowd_reg).str(next);
        }
        measure(next) {
            return this.sub('measure', $hyoo_crowd_reg).str(next);
        }
        steal(donor) {
            this.title(donor.title());
            this.setup(donor.setup());
            this.measure(donor.measure());
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case.prototype, "setup", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case.prototype, "measure", null);
    __decorate([
        $mol_action
    ], $hyoo_js_perf_case.prototype, "steal", null);
    $.$hyoo_js_perf_case = $hyoo_js_perf_case;
})($ || ($ = {}));
//hyoo/js/perf/case/case.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_bookmark extends $mol_icon {
        path() {
            return "M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
        }
    }
    $.$mol_icon_bookmark = $mol_icon_bookmark;
})($ || ($ = {}));
//mol/icon/bookmark/-view.tree/bookmark.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_bookmark_outline extends $mol_icon {
        path() {
            return "M17,18L12,15.82L7,18V5H17M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
        }
    }
    $.$mol_icon_bookmark_outline = $mol_icon_bookmark_outline;
})($ || ($ = {}));
//mol/icon/bookmark/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_play extends $mol_icon {
        path() {
            return "M8,5.14V19.14L19,12.14L8,5.14Z";
        }
    }
    $.$mol_icon_play = $mol_icon_play;
})($ || ($ = {}));
//mol/icon/play/-view.tree/play.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        symbols_alt() {
            return {
                comma: "<",
                period: ">",
                dash: "−",
                equals: "≈",
                graveAccent: "́",
                forwardSlash: "÷",
                E: "€",
                X: "×",
                C: "©",
                P: "§",
                H: "₽",
                key0: "°",
                key8: "•",
                key2: "@",
                key3: "#",
                key4: "$",
                key6: "^",
                key7: "&",
                bracketOpen: "[",
                bracketClose: "]",
                slashBack: "|"
            };
        }
        symbols_alt_shift() {
            return {
                V: "✅",
                X: "❌",
                O: "⭕",
                key1: "❗",
                key4: "💲",
                key7: "❓",
                comma: "«",
                period: "»",
                semicolon: "“",
                quoteSingle: "”",
                dash: "—",
                equals: "≠",
                graveAccent: "̱",
                bracketOpen: "{",
                bracketClose: "}"
            };
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        spellcheck() {
            return true;
        }
        length_max() {
            return +Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        bring() {
            return this.Edit().bring();
        }
        Edit() {
            const obj = new this.$.$mol_textarea_edit();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.spellcheck = () => this.spellcheck();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            obj.submit = (next) => this.submit(next);
            obj.submit_with_ctrl = () => true;
            return obj;
        }
        row_numb(id) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (id) => this.row_numb(id);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
    class $mol_textarea_edit extends $mol_string {
        dom_name() {
            return "textarea";
        }
        enter() {
            return "enter";
        }
        field() {
            return {
                ...super.field(),
                scrollTop: 0
            };
        }
    }
    $.$mol_textarea_edit = $mol_textarea_edit;
})($ || ($ = {}));
//mol/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    let end = start + rows[i].length;
                    if (end >= from && start <= to) {
                        if (to === from || start !== to) {
                            rows[i] = '\t' + rows[i];
                            to += 1;
                            end += 1;
                        }
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from + 1, to]);
            }
            indent_dec() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    const end = start + rows[i].length;
                    if (end >= from && start <= to && rows[i].startsWith('\t')) {
                        rows[i] = rows[i].slice(1);
                        to -= 1;
                        if (start < from)
                            from -= 1;
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from, to]);
            }
            symbol_insert(event) {
                const symbol = event.shiftKey
                    ? this.symbols_alt_shift()[$mol_keyboard_code[event.keyCode]]
                    : this.symbols_alt()[$mol_keyboard_code[event.keyCode]];
                if (!symbol)
                    return;
                document.execCommand('insertText', false, symbol);
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                if (event.altKey && !event.ctrlKey) {
                    this.symbol_insert(event);
                }
                else {
                    switch (event.keyCode) {
                        case !event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_inc();
                            break;
                        case event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_dec();
                            break;
                        default: return;
                    }
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tword-break: break-word;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/textarea/-css/textarea.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_flash extends $mol_icon {
        path() {
            return "M7,2V13H10V22L17,10H13L17,2H7Z";
        }
    }
    $.$mol_icon_flash = $mol_icon_flash;
})($ || ($ = {}));
//mol/icon/flash/-view.tree/flash.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_follower extends $mol_ghost {
        Anchor() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        offset() {
            return [
                0,
                0
            ];
        }
        style() {
            return {
                ...super.style(),
                transform: this.transform()
            };
        }
        transform() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_follower.prototype, "Anchor", null);
    $.$mol_follower = $mol_follower;
})($ || ($ = {}));
//mol/follower/-view.tree/follower.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_follower extends $.$mol_follower {
            pos() {
                const self_rect = this.view_rect();
                const prev = $mol_wire_probe(() => this.pos());
                const anchor_rect = this.Anchor()?.view_rect();
                if (!anchor_rect)
                    return null;
                const left = Math.floor((prev?.left ?? 0)
                    - (self_rect?.left ?? 0)
                    - (self_rect?.width ?? 0) / 2
                    + (anchor_rect?.left ?? 0)
                    + this.offset()[0] * (anchor_rect?.width ?? 0));
                const top = Math.floor((prev?.top ?? 0)
                    - (self_rect?.top ?? 0)
                    - (self_rect?.height ?? 0) / 2
                    + (anchor_rect?.top ?? 0)
                    + this.offset()[1] * (anchor_rect?.height ?? 0));
                return { left, top };
            }
            transform() {
                const pos = this.pos();
                if (!pos)
                    return 'scale(0)';
                const { left, top } = pos;
                return `translate( ${left}px, ${top}px )`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_follower.prototype, "pos", null);
        __decorate([
            $mol_mem
        ], $mol_follower.prototype, "transform", null);
        $$.$mol_follower = $mol_follower;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/follower/follower.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/follower/follower.view.css", "[mol_follower] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\ttransition: none;\n}\n");
})($ || ($ = {}));
//mol/follower/-css/follower.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dump_value extends $mol_view {
        value() {
            return null;
        }
        preview_show() {
            return true;
        }
        sub() {
            return [
                this.Simple(),
                this.Expand()
            ];
        }
        simple() {
            return "";
        }
        Simple() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.simple();
            return obj;
        }
        expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        expandable() {
            return true;
        }
        expand_all(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        expand_title() {
            return "";
        }
        Expand_title() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.expand_title();
            return obj;
        }
        Expand_head() {
            const obj = new this.$.$mol_check_expand();
            obj.minimal_height = () => 24;
            obj.minimal_width = () => 24;
            obj.expanded = (next) => this.expanded(next);
            obj.expandable = () => this.expandable();
            obj.clicks = (next) => this.expand_all(next);
            obj.label = () => [
                this.Expand_title()
            ];
            return obj;
        }
        preview_dom() {
            return null;
        }
        preview() {
            return null;
        }
        Preview_dom() {
            const obj = new this.$.$mol_view();
            obj.dom_node = () => this.preview_dom();
            obj.render = () => this.preview();
            return obj;
        }
        Preview() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Preview_dom()
            ];
            return obj;
        }
        row_values(id) {
            return [];
        }
        prototypes() {
            return false;
        }
        Row(id) {
            const obj = new this.$.$mol_dump_list();
            obj.values = () => this.row_values(id);
            obj.prototypes = () => this.prototypes();
            obj.preview_show = () => this.preview_show();
            return obj;
        }
        expand_content() {
            return [
                this.Preview(),
                this.Row("0")
            ];
        }
        Expand() {
            const obj = new this.$.$mol_expander();
            obj.expanded = (next) => this.expanded(next);
            obj.Trigger = () => this.Expand_head();
            obj.content = () => this.expand_content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "Simple", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "expanded", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "expand_all", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "Expand_title", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "Expand_head", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "Preview_dom", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "Preview", null);
    __decorate([
        $mol_mem_key
    ], $mol_dump_value.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_dump_value.prototype, "Expand", null);
    $.$mol_dump_value = $mol_dump_value;
})($ || ($ = {}));
//mol/dump/value/-view.tree/value.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));
//mol/try/try.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dump_value extends $.$mol_dump_value {
            sub() {
                const value = this.value();
                if (!value)
                    return [this.Simple()];
                if (typeof value === 'object')
                    return [this.Expand()];
                if (typeof value === 'function')
                    return [this.Expand()];
                return [this.Simple()];
            }
            simple() {
                const value = this.value();
                return value ? String(value) : JSON.stringify(value) ?? 'undefined';
            }
            expand_title() {
                const value = this.value();
                if (typeof value === 'function') {
                    const name = Reflect.getOwnPropertyDescriptor(value, 'name')?.value;
                    const source = Function.prototype.toString.call(value);
                    const args = source.match(/^[^{=>]*?\(([\s\S]*?)\)/)?.[1] ?? source.match(/^([$\w]+)\s+=>/)?.[1] ?? '';
                    if (name)
                        return name + '(' + args + ')';
                }
                if (value instanceof RegExp)
                    return String(value);
                if (value instanceof Date)
                    return value.toISOString();
                const kind = Reflect.getOwnPropertyDescriptor(value, Symbol.toStringTag)?.value
                    ?? value.constructor.name
                    ?? 'Object';
                if (value instanceof Node) {
                    try {
                        switch (value.nodeType) {
                            case value.TEXT_NODE: return kind + ' ' + value.nodeValue?.trim();
                            case value.ELEMENT_NODE: return `<${value.localName}> ${value.id}`;
                            case value.DOCUMENT_NODE: return kind + ' ' + value.baseURI;
                        }
                    }
                    catch { }
                }
                return kind;
            }
            rows_values() {
                let value = this.value();
                const res = [];
                if (value instanceof Map) {
                    for (const [key, val] of value) {
                        res.push([key, '🡒', val]);
                    }
                }
                if (value instanceof Set) {
                    for (const val of value) {
                        res.push([val]);
                    }
                }
                if (value instanceof Function) {
                    let source = Function.prototype.toString.call(value)
                        .replace(/^.*?\{\r?\n?/, '')
                        .replace(/}$/, '')
                        .trimEnd();
                    const indent = source.match(/^\s*/)[0];
                    source = source.replace(new RegExp(`^${indent}`, 'gm'), '\t');
                    res.push([source]);
                }
                if (value instanceof Element) {
                    try {
                        for (const kid of value.childNodes) {
                            res.push([kid]);
                        }
                        for (const attr of value.attributes) {
                            if (attr.nodeName === 'id')
                                continue;
                            res.push([attr.nodeName, '=', attr.nodeValue]);
                        }
                    }
                    catch { }
                }
                if (value && (typeof value === 'object' || typeof value === 'function')) {
                    for (const key of Reflect.ownKeys(value)) {
                        const prefix = String(key) + '∶';
                        const descr = Reflect.getOwnPropertyDescriptor(value, key);
                        if ('value' in descr) {
                            const line = [prefix, descr.value];
                            res.push(line);
                        }
                        else {
                            res.push([prefix, descr.get, descr.set]);
                        }
                    }
                    if (this.prototypes()) {
                        res.push(['__proto__:', Reflect.getPrototypeOf(value)]);
                    }
                }
                return res;
            }
            preview_dom() {
                const value = this.value();
                if (value instanceof Element) {
                    if ($mol_try(() => value.localName) instanceof Error)
                        return null;
                    if (value.isConnected)
                        return null;
                    return value;
                }
                return null;
            }
            expand_content() {
                return [
                    ...this.preview_show() && this.preview_dom() ? [this.Preview()] : [],
                    ...this.rows_values().map((_, index) => this.Row(index)),
                ];
            }
            expandable() {
                return this.expand_content().length > 0;
            }
            row_values(index) {
                return this.rows_values()[index];
            }
            expand_all(event, blacklist = new Set) {
                if (blacklist.has(this.value()))
                    return;
                blacklist.add(this.value());
                this.expanded(true);
                for (const row of this.expand_content()) {
                    if (!(row instanceof $mol_dump_list))
                        continue;
                    if (row.values()[0] === '__proto__:')
                        continue;
                    row.expand_all(event, blacklist);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dump_value.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_dump_value.prototype, "simple", null);
        __decorate([
            $mol_mem
        ], $mol_dump_value.prototype, "expand_title", null);
        __decorate([
            $mol_mem
        ], $mol_dump_value.prototype, "rows_values", null);
        __decorate([
            $mol_mem
        ], $mol_dump_value.prototype, "preview_dom", null);
        __decorate([
            $mol_mem
        ], $mol_dump_value.prototype, "expand_content", null);
        $$.$mol_dump_value = $mol_dump_value;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dump/value/value.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dump/value/value.view.css", "[mol_dump_value] {\n\tmin-height: 2.5rem;\n\tmin-width: 2.5rem;\n}\n\n[mol_dump_value_simple] {\n\tpadding: 0;\n}\n\n[mol_dump_value_expand_content] {\n\tpadding-left: 1.5rem;\n\talign-items: flex-start;\n}\n\n[mol_dump_value_expand_title_rows],\n[mol_dump_value_simple_rows],\n[mol_dump_value_expand_head] {\n\tpadding: 0;\n\tgap: 0;\n}\n");
})($ || ($ = {}));
//mol/dump/value/-css/value.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dump_list extends $mol_view {
        values() {
            return [];
        }
        sub() {
            return [
                this.Dump("0")
            ];
        }
        dump_value(id) {
            return null;
        }
        dump_expanded(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        prototypes() {
            return false;
        }
        preview_show() {
            return true;
        }
        Dump(id) {
            const obj = new this.$.$mol_dump_value();
            obj.value = () => this.dump_value(id);
            obj.expanded = (next) => this.dump_expanded(id, next);
            obj.prototypes = () => this.prototypes();
            obj.preview_show = () => this.preview_show();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dump_list.prototype, "dump_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_dump_list.prototype, "Dump", null);
    $.$mol_dump_list = $mol_dump_list;
})($ || ($ = {}));
//mol/dump/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dump_list extends $.$mol_dump_list {
            sub() {
                return this.values().map((_, index) => this.Dump(index));
            }
            dump_value(index) {
                return this.values()[index];
            }
            expand_all(event, blacklist = new Set) {
                this.Dump(1).expand_all(event, blacklist);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dump_list.prototype, "sub", null);
        $$.$mol_dump_list = $mol_dump_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dump/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dump/list/list.view.css", "[mol_dump_list] {\n\talign-items: flex-start;\n\tgap: var(--mol_gap_space);\n}\n\n[mol_dump_list_dump]:first-child {\n\tposition: sticky;\n\ttop: 0;\n}\n");
})($ || ($ = {}));
//mol/dump/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_js_eval extends $mol_book2 {
        Placeholder() {
            return null;
        }
        plugins() {
            return [
                this.Theme(),
                this.Submit()
            ];
        }
        bookmark_list(next) {
            if (next !== undefined)
                return next;
            return [
                "// Example Notebook\n\n// load external script\nconst {\n\t$mol_compare_deep: compare\n} = $mol_import.module(\n\t'https://esm.sh/mol_compare_deep'\n).default\n\n// local vars\nconst one = [1]\none.push( one )\nconst left =  { a: [1,one], b:    one  }\nconst right = { a:    one,  b: [1,one] }\n\n// result\ncompare( left, right )"
            ];
        }
        pages() {
            return [
                this.Menu_page(),
                this.Code_page(),
                this.Result_page()
            ];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (next) => this.submit(next)
            });
            obj.mod_ctrl = () => true;
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                code: null
            });
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/eval.js.hyoo.ru";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        menu_link_title(id) {
            return "";
        }
        menu_link_code(id) {
            return "";
        }
        Menu_link(id) {
            const obj = new this.$.$mol_link();
            obj.title = () => this.menu_link_title(id);
            obj.arg = () => ({
                code: this.menu_link_code(id)
            });
            return obj;
        }
        menu() {
            return [
                this.Menu_link("default")
            ];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu();
            return obj;
        }
        Menu_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_eval_Menu_page_title');
            obj.tools = () => [
                this.Clear(),
                this.Source(),
                this.Lights()
            ];
            obj.body = () => [
                this.Menu()
            ];
            return obj;
        }
        perf() {
            return "";
        }
        Perf() {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => "";
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_eval_Perf_hint');
            obj.uri = () => this.perf();
            return obj;
        }
        Bookmark_icon() {
            const obj = new this.$.$mol_icon_bookmark_outline();
            return obj;
        }
        bookmark(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Bookmark() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Bookmark_icon();
            obj.checked = (val) => this.bookmark(val);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_eval_Bookmark_hint');
            return obj;
        }
        Run_icon() {
            const obj = new this.$.$mol_icon_play();
            return obj;
        }
        run(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Run() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Run_icon();
            obj.checked = (val) => this.run(val);
            obj.hint = () => this.result_label();
            return obj;
        }
        code(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        bring() {
            return this.Code().bring();
        }
        Code() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "javascript..";
            obj.sidebar_showed = () => true;
            obj.spellcheck = () => false;
            obj.value = (val) => this.code(val);
            return obj;
        }
        error_anchor() {
            return null;
        }
        error_offset() {
            return [
                0,
                0
            ];
        }
        error_message() {
            return "";
        }
        Error_icon() {
            const obj = new this.$.$mol_icon_flash();
            return obj;
        }
        Error_view() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.error_message()
            });
            obj.sub = () => [
                this.Error_icon()
            ];
            return obj;
        }
        Error_mark() {
            const obj = new this.$.$mol_follower();
            obj.Anchor = () => this.error_anchor();
            obj.offset = () => this.error_offset();
            obj.Sub = () => this.Error_view();
            return obj;
        }
        Code_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_eval_Code_page_title');
            obj.bring = () => this.bring();
            obj.tools = () => [
                this.Perf(),
                this.Bookmark(),
                this.Run()
            ];
            obj.body = () => [
                this.Code(),
                this.Error_mark()
            ];
            return obj;
        }
        result_label() {
            return this.$.$mol_locale.text('$hyoo_js_eval_result_label');
        }
        Results_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Results_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                run: "false"
            });
            obj.sub = () => [
                this.Results_close_icon()
            ];
            return obj;
        }
        log(id) {
            return [];
        }
        Log(id) {
            const obj = new this.$.$mol_dump_list();
            obj.values = () => this.log(id);
            obj.prototypes = () => true;
            return obj;
        }
        logs() {
            return [
                this.Log("0")
            ];
        }
        Result() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.logs();
            return obj;
        }
        Result_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.result_label();
            obj.tools = () => [
                this.Results_close()
            ];
            obj.body = () => [
                this.Result()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "bookmark_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Lights", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_eval.prototype, "Menu_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Menu_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Perf", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Bookmark_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "bookmark", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Bookmark", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Run_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "run", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Run", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "code", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Code", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Error_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Error_view", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Error_mark", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Code_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Results_close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Results_close", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_eval.prototype, "Log", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Result", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_eval.prototype, "Result_page", null);
    $.$hyoo_js_eval = $hyoo_js_eval;
})($ || ($ = {}));
//hyoo/js/eval/-view.tree/eval.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_field(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const _get = descr?.get || $mol_const(descr?.value);
        const _set = descr?.set || function (next) {
            $mol_wire_atom.solo(this, _get).put(next);
        };
        const sup = Reflect.getPrototypeOf(host);
        const sup_descr = Reflect.getOwnPropertyDescriptor(sup, field);
        Object.defineProperty(_get, 'name', { value: sup_descr?.get?.name ?? field });
        Object.defineProperty(_set, 'name', { value: sup_descr?.set?.name ?? field });
        function get() {
            return $mol_wire_atom.solo(this, _get).sync();
        }
        const temp = $mol_wire_task.getter(_set);
        function set(next) {
            temp(this, [next]).sync();
        }
        Object.defineProperty(get, 'name', { value: _get.name + '$' });
        Object.defineProperty(set, 'name', { value: _set.name + '@' });
        Object.assign(get, { orig: _get });
        Object.assign(set, { orig: _set });
        const { value, writable, ...descr2 } = { ...descr, get, set };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_field = $mol_wire_field;
})($ || ($ = {}));
//mol/wire/field/field.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_easing(next) {
        const atom = $mol_wire_auto();
        if (!(atom instanceof $mol_wire_atom))
            $mol_fail(new Error('Allowed only inside atom'));
        const prev = atom.result() ?? next;
        if (typeof prev !== 'number')
            return next;
        const current = (prev * 2 + next) / 3;
        const diff = Math.abs(current - next);
        if (diff < 1)
            return next;
        $mol_state_time.now(0);
        return current;
    }
    $.$mol_wire_easing = $mol_wire_easing;
})($ || ($ = {}));
//mol/wire/easing/easing.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_patch(obj) {
        for (const field of Reflect.ownKeys(obj)) {
            const descr = Reflect.getOwnPropertyDescriptor(obj, field);
            if (!descr.configurable)
                continue;
            if (!descr.get)
                continue;
            const get = descr.get ?? (() => descr.value);
            const set = descr.set ?? (next => descr.value = next);
            Reflect.defineProperty(obj, field, {
                configurable: true,
                enumerable: descr.enumerable,
                get() {
                    const atom = $mol_wire_atom.solo(obj, get);
                    atom.watch();
                    return atom.sync();
                },
                set(next) {
                    const atom = $mol_wire_atom.solo(obj, get);
                    set.call(this, next);
                    atom.refresh();
                },
            });
        }
    }
    $.$mol_wire_patch = $mol_wire_patch;
})($ || ($ = {}));
//mol/wire/patch/patch.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_let(host) {
        for (const field of Object.keys(host)) {
            host[field] = new $mol_wire_atom(field, host[field], host).channel();
        }
        return host;
    }
    $.$mol_wire_let = $mol_wire_let;
})($ || ($ = {}));
//mol/wire/let/let.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_set extends Set {
        pub = new $mol_wire_pub;
        has(value) {
            this.pub.promote();
            return super.has(value);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        add(value) {
            if (super.has(value))
                return this;
            super.add(value);
            this.pub.emit();
            return this;
        }
        delete(value) {
            const res = super.delete(value);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(val, next) {
            if (next === undefined)
                return this.has(val);
            if (next)
                this.add(val);
            else
                this.delete(val);
            return next;
        }
    }
    $.$mol_wire_set = $mol_wire_set;
})($ || ($ = {}));
//mol/wire/set/set.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_dict extends Map {
        pub = new $mol_wire_pub;
        has(key) {
            this.pub.promote();
            return super.has(key);
        }
        get(key) {
            this.pub.promote();
            return super.get(key);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        set(key, value) {
            if (super.get(key) === value)
                return this;
            super.set(key, value);
            this.pub.emit();
            return this;
        }
        delete(key) {
            const res = super.delete(key);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(key, next) {
            if (next === undefined)
                return this.get(key) ?? null;
            if (next === null)
                this.delete(key);
            else
                this.set(key, next);
            return next;
        }
    }
    $.$mol_wire_dict = $mol_wire_dict;
})($ || ($ = {}));
//mol/wire/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_log extends $mol_object2 {
        static watch(task) {
            return task;
        }
        static track(fiber) {
            const prev = $mol_wire_probe(() => this.track(fiber));
            let next;
            try {
                next = fiber.sync();
            }
            finally {
                for (const pub of fiber.pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
            if (fiber.host === this)
                return next;
            if ($mol_compare_deep(prev, next)) {
                this.$.$mol_log3_rise({
                    message: '💧 Same',
                    place: fiber,
                });
            }
            else if (prev !== undefined) {
                this.$.$mol_log3_rise({
                    message: '🔥 Next',
                    place: fiber,
                    prev,
                });
            }
            return next;
        }
        static active() {
            try {
                this.watch()?.();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            finally {
                for (const pub of $mol_wire_auto().pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_wire_log, "watch", null);
    __decorate([
        $mol_mem_key
    ], $mol_wire_log, "track", null);
    __decorate([
        $mol_mem
    ], $mol_wire_log, "active", null);
    $.$mol_wire_log = $mol_wire_log;
})($ || ($ = {}));
//mol/wire/log/log.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_js_eval extends $.$hyoo_js_eval {
            code(next) {
                return this.$.$mol_state_arg.value('code', next) ?? '';
            }
            run(next) {
                return this.$.$mol_state_arg.value('run', next?.valueOf && String(next)) === 'true';
            }
            submit() {
                this.run(true);
            }
            perf() {
                const sources = encodeURIComponent(JSON.stringify([this.code()]));
                return `https://perf.js.hyoo.ru/#!sources=${sources}`;
            }
            pages() {
                return [
                    this.Menu_page(),
                    this.Code_page(),
                    ...this.run() ? [this.Result_page()] : [],
                ];
            }
            bookmark_list(next) {
                return this.$.$mol_state_local.value('snippets', next) ?? super.bookmark_list();
            }
            bookmark(next) {
                const prev = this.bookmark_list();
                const code = this.code();
                if (next === undefined) {
                    return prev.includes(code);
                }
                else {
                    const list = prev.filter(str => str !== code);
                    if (next)
                        list.unshift(code);
                    this.bookmark_list(list);
                    return next;
                }
            }
            menu() {
                return this.bookmark_list().map((_, index) => this.Menu_link(index));
            }
            menu_link_code(index) {
                return this.bookmark_list()[index];
            }
            menu_link_title(index) {
                return this.bookmark_list()[index]
                    .replace(/\n[\s\S]*/, '')
                    .replace(/^\/\/ +/, '');
            }
            code_enhanced() {
                let code = this.code();
                code = code.replaceAll(/^([ \t]*)(?:const|var|let|class|function) +(\w+)/mig, (found, indent, name) => `__spy__( "${indent}${name} =", ()=>[ ${name} ] );${found}`);
                return code;
            }
            execute() {
                if (!this.run())
                    return [];
                this.code();
                this.result([]);
                const console = new Proxy(this.$.console, {
                    get: (target, field) => {
                        if (typeof target[field] !== 'function')
                            return target[field];
                        return (...args) => {
                            this.spy(`${String(field)}:`, () => [...args]);
                            return target[field](...args);
                        };
                    }
                });
                const __spy__ = this.spy.bind(this);
                let __res__;
                try {
                    __res__ = ['=', eval(this.code_enhanced())];
                }
                catch (error) {
                    __res__ = ['=', error];
                }
                __spy__('=', () => __res__.slice(1));
                this.spy_run();
                return __res__;
            }
            error_pos() {
                const [eq, val] = this.execute();
                if (!(val instanceof Error))
                    return null;
                const pos = val.stack.match(/(?:<anonymous>| eval).*:(\d+:\d+)/);
                if (!pos)
                    return null;
                const [line, col] = pos[1].split(':').map(Number);
                const row = this.Code().View().Row(line);
                const shift = this.code_enhanced().split('\n')[line - 1]
                    ?.match(/^\w*__spy__\( .*?\);/)?.[0]?.length ?? 0;
                return row.find_pos(col - 1 - shift);
            }
            error_anchor() {
                return this.error_pos()?.token;
            }
            error_offset() {
                const pos = this.error_pos();
                return [pos.offset / pos.token.haystack().length, 0];
            }
            error_message() {
                return this.execute()[1]?.message;
            }
            Error_mark() {
                return this.run() ? super.Error_mark() : null;
            }
            spy_queue = [];
            spy_run() {
                this.result([
                    ...this.result(),
                    ...this.spy_queue.splice(0).map(([name, task]) => [name, ...[].concat($mol_try(() => task()))]),
                ]);
            }
            spy(name, task) {
                this.spy_queue.push([name, task]);
                if (this.spy_queue.length > 1)
                    return;
                Promise.resolve().then(() => this.spy_run());
            }
            result(next = []) {
                return next;
            }
            logs() {
                this.execute();
                return this.result().map((_, index) => this.Log(index));
            }
            log(index) {
                return this.result()[index];
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "code", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "run", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "perf", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "bookmark_list", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "bookmark", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "menu", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_eval.prototype, "menu_link_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "code_enhanced", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "execute", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "error_pos", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "error_offset", null);
        __decorate([
            $mol_action
        ], $hyoo_js_eval.prototype, "spy_run", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "result", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_eval.prototype, "logs", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_eval.prototype, "log", null);
        $$.$hyoo_js_eval = $hyoo_js_eval;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/js/eval/eval.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/js/eval/eval.view.css", "[hyoo_js_eval_menu_page] {\n\tflex: 0 0 auto;\n}\n\n[hyoo_js_eval_code_page] {\n\tflex: 1 0 auto;\n}\n\n[hyoo_js_eval_code_page_body] {\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_js_eval_code] {\n\tflex: 0 0 auto;\n}\n\n[hyoo_js_eval_result] {\n\tpadding: var(--mol_gap_text);\n}\n\n[hyoo_js_eval_result_page] {\n\tflex: 0 0 50%;\n}\n\n[hyoo_js_eval_result_page_body] {\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_js_eval_error_icon] {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));
//hyoo/js/eval/-css/eval.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_double_down extends $mol_icon {
        path() {
            return "M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z";
        }
    }
    $.$mol_icon_chevron_double_down = $mol_icon_chevron_double_down;
})($ || ($ = {}));
//mol/icon/chevron/double/down/-view.tree/down.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_unfold_more_horizontal extends $mol_icon {
        path() {
            return "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z";
        }
    }
    $.$mol_icon_unfold_more_horizontal = $mol_icon_unfold_more_horizontal;
})($ || ($ = {}));
//mol/icon/unfold/more/horizontal/-view.tree/horizontal.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string_button extends $mol_string {
    }
    $.$mol_string_button = $mol_string_button;
})($ || ($ = {}));
//mol/string/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/button/button.view.css", "[mol_string_button]:not(:placeholder-shown):not(:focus):not(:hover):not(:disabled) {\n\tcolor: var(--mol_theme_control);\n\tbackground: transparent;\n\tbox-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/string/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_js_perf_case_result extends $mol_view {
        result() {
            const obj = new this.$.$hyoo_js_perf_stats();
            return obj;
        }
        sub() {
            return [
                this.Portions(),
                this.Stats(),
                this.Error()
            ];
        }
        frequency_portion() {
            return 0;
        }
        Frequency_portion() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.frequency_portion();
            return obj;
        }
        memory_portion() {
            return 0;
        }
        Memory_portion() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.memory_portion();
            return obj;
        }
        size_portion() {
            return 0;
        }
        Size_portion() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.size_portion();
            return obj;
        }
        deps_portion() {
            return 0;
        }
        Deps_portion() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.deps_portion();
            return obj;
        }
        portions() {
            return [
                this.Frequency_portion(),
                this.Memory_portion(),
                this.Size_portion(),
                this.Deps_portion()
            ];
        }
        Portions() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.portions();
            return obj;
        }
        title() {
            return "";
        }
        frequency_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_frequency_hint');
        }
        frequency() {
            return "";
        }
        Frequency() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.frequency_hint()
            });
            obj.sub = () => [
                this.frequency()
            ];
            return obj;
        }
        time_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_time_hint');
        }
        time_total() {
            return "";
        }
        Time() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.time_hint()
            });
            obj.sub = () => [
                this.time_total()
            ];
            return obj;
        }
        iterations_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_iterations_hint');
        }
        iterations() {
            return "";
        }
        Iterations() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.iterations_hint()
            });
            obj.sub = () => [
                this.iterations()
            ];
            return obj;
        }
        Stats_main() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title(),
                this.Frequency(),
                "≈",
                this.Time(),
                "×",
                this.Iterations()
            ];
            return obj;
        }
        memory_per_iteration_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_memory_per_iteration_hint');
        }
        memory_per_iteration() {
            return "";
        }
        Memory_per_iteration() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.memory_per_iteration_hint()
            });
            obj.sub = () => [
                this.memory_per_iteration()
            ];
            return obj;
        }
        memory_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_memory_hint');
        }
        memory_total() {
            return "";
        }
        Memory() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.memory_hint()
            });
            obj.sub = () => [
                this.memory_total()
            ];
            return obj;
        }
        Stats_mem() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "×",
                this.Memory_per_iteration(),
                "=",
                this.Memory()
            ];
            return obj;
        }
        size_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_size_hint');
        }
        size() {
            return 0;
        }
        Size() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.size_hint()
            });
            obj.sub = () => [
                this.size()
            ];
            return obj;
        }
        Stats_size() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title(),
                this.Size()
            ];
            return obj;
        }
        deps_hint() {
            return this.$.$mol_locale.text('$hyoo_js_perf_case_result_deps_hint');
        }
        deps() {
            return "";
        }
        Deps() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                title: this.deps_hint()
            });
            obj.sub = () => [
                this.deps()
            ];
            return obj;
        }
        Stats_deps() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "📦",
                this.Deps()
            ];
            return obj;
        }
        stats() {
            return [
                this.Stats_main(),
                this.Stats_mem(),
                this.Stats_size(),
                this.Stats_deps()
            ];
        }
        Stats() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.stats();
            return obj;
        }
        error() {
            return "";
        }
        Error() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.error()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "result", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Frequency_portion", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Memory_portion", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Size_portion", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Deps_portion", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Portions", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Frequency", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Time", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Iterations", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Stats_main", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Memory_per_iteration", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Memory", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Stats_mem", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Size", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Stats_size", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Deps", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Stats_deps", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Stats", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_result.prototype, "Error", null);
    $.$hyoo_js_perf_case_result = $hyoo_js_perf_case_result;
})($ || ($ = {}));
//hyoo/js/perf/case/result/-view.tree/result.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_si_prefix;
    (function ($mol_si_prefix) {
        $mol_si_prefix[$mol_si_prefix["y"] = -8] = "y";
        $mol_si_prefix[$mol_si_prefix["z"] = -7] = "z";
        $mol_si_prefix[$mol_si_prefix["a"] = -6] = "a";
        $mol_si_prefix[$mol_si_prefix["f"] = -5] = "f";
        $mol_si_prefix[$mol_si_prefix["p"] = -4] = "p";
        $mol_si_prefix[$mol_si_prefix["n"] = -3] = "n";
        $mol_si_prefix[$mol_si_prefix["\u00B5"] = -2] = "\u00B5";
        $mol_si_prefix[$mol_si_prefix["m"] = -1] = "m";
        $mol_si_prefix[$mol_si_prefix[""] = 0] = "";
        $mol_si_prefix[$mol_si_prefix["k"] = 1] = "k";
        $mol_si_prefix[$mol_si_prefix["M"] = 2] = "M";
        $mol_si_prefix[$mol_si_prefix["G"] = 3] = "G";
        $mol_si_prefix[$mol_si_prefix["T"] = 4] = "T";
        $mol_si_prefix[$mol_si_prefix["P"] = 5] = "P";
        $mol_si_prefix[$mol_si_prefix["E"] = 6] = "E";
        $mol_si_prefix[$mol_si_prefix["Z"] = 7] = "Z";
        $mol_si_prefix[$mol_si_prefix["Y"] = 8] = "Y";
    })($mol_si_prefix = $.$mol_si_prefix || ($.$mol_si_prefix = {}));
})($ || ($ = {}));
//mol/si/prefix.ts
;
"use strict";
var $;
(function ($) {
    function $mol_si_short(numb, unit = '') {
        let magnitude = Math.floor(Math.log10(Math.abs(numb)) / 3);
        if (!Number.isFinite(magnitude)) {
            const prefix = isNaN(numb) ? `∅` : numb.toLocaleString();
            const suffix = unit ? ' ' + unit : '';
            return prefix + suffix;
        }
        let normal = numb / 10 ** (3 * magnitude);
        if (Math.round(Math.abs(normal)) === 1000) {
            normal /= 1000;
            ++magnitude;
        }
        const prefix = normal.toPrecision(3);
        if (unit) {
            return prefix + ' ' + $mol_si_prefix[magnitude] + unit;
        }
        else {
            return prefix + $mol_si_prefix[magnitude];
        }
    }
    $.$mol_si_short = $mol_si_short;
})($ || ($ = {}));
//mol/si/short/short.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_js_perf_case_result extends $.$hyoo_js_perf_case_result {
            sub() {
                if (!this.result())
                    return [];
                return this.result().error ? [this.Error()] : [this.Stats(), this.Portions()];
            }
            portions() {
                const result = this.result();
                return [
                    ...result.frequency ? [this.Frequency_portion()] : [],
                    ...result.memory ? [this.Memory_portion()] : [],
                    ...result.size ? [this.Size_portion(), this.Deps_portion()] : [],
                ];
            }
            stats() {
                const result = this.result();
                return [
                    ...result.frequency ? [this.Stats_main()] : [],
                    ...result.memory ? [this.Stats_mem()] : [],
                    ...result.size ? [this.Stats_size(), this.Stats_deps()] : [],
                ];
            }
            error() {
                return `${this.result().error}`;
            }
            iterations() {
                return $mol_si_short(this.result().iterations, 'It');
            }
            frequency() {
                return $mol_si_short(this.result().frequency, 'Hz');
            }
            time_total() {
                return $mol_si_short(this.result().time / 1000, 's');
            }
            memory_total() {
                const val = this.result().memory;
                return val ? $mol_si_short(val, 'B') : '?B';
            }
            memory_per_iteration() {
                const val = this.result().memory_per_iteration;
                return val ? $mol_si_short(val, 'B') : '?B';
            }
            size() {
                return this.result().size;
            }
            deps() {
                return $mol_si_short(this.result().deps, 'B');
            }
            frequency_portion() {
                return this.result().frequency_portion;
            }
            memory_portion() {
                return this.result().memory_portion;
            }
            size_portion() {
                return this.result().size_portion;
            }
            deps_portion() {
                return this.result().deps_portion;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_js_perf_case_result.prototype, "portions", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf_case_result.prototype, "stats", null);
        $$.$hyoo_js_perf_case_result = $hyoo_js_perf_case_result;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/js/perf/case/result/result.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/js/perf/case/result/result.view.css", "[hyoo_js_perf_case_result] {\n\tpadding: .5rem .75rem .25rem;\n\tflex-direction: column;\n\tflex: 1 1 24rem;\n}\n\n[hyoo_js_perf_case_result] > * {\n\tdisplay: flex;\n}\n\n[hyoo_js_perf_case_result_stats] {\n\tdisplay: flex;\n\twhite-space: pre;\n\tjustify-content: space-between;\n}\n\n[hyoo_js_perf_case_result_stats] > * {\n\tword-break: keep-all;\n\twhite-space: nowrap;\n\t/* margin: 0 .5rem; */\n}\n\n[hyoo_js_perf_case_result_stats_main],\n[hyoo_js_perf_case_result_stats_mem] {\n\tdisplay: contents;\n}\n\n[hyoo_js_perf_case_result_perf],\n[hyoo_js_perf_case_result_memory] {\n\tflex-direction: column;\n}\n\n[hyoo_js_perf_case_result_frequency],\n[hyoo_js_perf_case_result_memory_per_iteration] {\n\ttext-shadow: 0 0;\n}\n\n[hyoo_js_perf_case_result_error] {\n\tcolor: crimson;\n\ttext-shadow: 0 0;\n}\n\n[hyoo_js_perf_case_result_portions] {\n\tgap: .75rem;\n}\n\n[hyoo_js_perf_case_result] [mol_portion] {\n\tflex: 1 1 50%;\n\twidth: auto;\n}\n\n[hyoo_js_perf_case_result]:nth-child(1) [mol_portion_indicator] {\n\tbackground-color: dimgray;\n}\n\n[hyoo_js_perf_case_result]:nth-child(2) [mol_portion_indicator] {\n\tbackground-color: royalblue;\n}\n\n[hyoo_js_perf_case_result]:nth-child(3) [mol_portion_indicator] {\n\tbackground-color: orange;\n}\n\n[hyoo_js_perf_case_result]:nth-child(2) [hyoo_js_perf_case_result_frequency],\n[hyoo_js_perf_case_result]:nth-child(2) [hyoo_js_perf_case_result_memory_per_iteration] {\n\tcolor: royalblue;\n}\n\n[hyoo_js_perf_case_result]:nth-child(3) [hyoo_js_perf_case_result_frequency],\n[hyoo_js_perf_case_result]:nth-child(3) [hyoo_js_perf_case_result_memory_per_iteration] {\n\tcolor: orange;\n}\n");
})($ || ($ = {}));
//hyoo/js/perf/case/result/-css/result.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_js_perf_case_row extends $mol_view {
        results() {
            return [];
        }
        Eval_result() {
            return this.Eval().Result();
        }
        Eval() {
            const obj = new this.$.$hyoo_js_eval();
            obj.code = () => this.sample();
            obj.run = () => this.eval_showed();
            return obj;
        }
        sub() {
            return this.columns();
        }
        sample() {
            return "";
        }
        prefix_showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        drop(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Drop_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Drop() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.drop(next);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Drop_hint');
            obj.sub = () => [
                this.Drop_icon()
            ];
            return obj;
        }
        dupe(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Dupe_icon() {
            const obj = new this.$.$mol_icon_chevron_double_down();
            return obj;
        }
        Dupe() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.dupe(next);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Dupe_hint');
            obj.sub = () => [
                this.Dupe_icon()
            ];
            return obj;
        }
        swap(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Swap_icon() {
            const obj = new this.$.$mol_icon_unfold_more_horizontal();
            return obj;
        }
        Swap() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.swap(next);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Swap_hint');
            obj.sub = () => [
                this.Swap_icon()
            ];
            return obj;
        }
        prefix_tools() {
            return [
                this.Drop(),
                this.Dupe(),
                this.Swap()
            ];
        }
        Prefix_tools() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => this.prefix_tools();
            return obj;
        }
        changable() {
            return true;
        }
        prefix(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Prefix_code() {
            const obj = new this.$.$mol_textarea();
            obj.enabled = () => this.changable();
            obj.spellcheck = () => false;
            obj.value = (val) => this.prefix(val);
            obj.hint = () => "let count = {#}";
            return obj;
        }
        Prefix() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Prefix_title');
            obj.expanded = (next) => this.prefix_showed(next);
            obj.minimal_width = () => 150;
            obj.Tools = () => this.Prefix_tools();
            obj.content = () => [
                this.Prefix_code()
            ];
            return obj;
        }
        source_showed(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        measurable(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        Measurable() {
            const obj = new this.$.$mol_check_box();
            obj.checked = (next) => this.measurable(next);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Measurable_hint');
            return obj;
        }
        title(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Title() {
            const obj = new this.$.$mol_string_button();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Title_hint');
            obj.enabled = () => this.changable();
            obj.value = (next) => this.title(next);
            return obj;
        }
        eval_standalone() {
            return "";
        }
        Eval_sandalone() {
            const obj = new this.$.$mol_link_iconed();
            obj.title = () => "";
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Eval_sandalone_hint');
            obj.uri = () => this.eval_standalone();
            return obj;
        }
        Source_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Measurable(),
                this.Title(),
                this.Eval_sandalone()
            ];
            return obj;
        }
        source(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Source_code() {
            const obj = new this.$.$mol_textarea();
            obj.enabled = () => this.changable();
            obj.spellcheck = () => false;
            obj.value = (val) => this.source(val);
            obj.hint = () => "res = {#} % count";
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_expander();
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Source_title');
            obj.expanded = (next) => this.source_showed(next);
            obj.minimal_width = () => 150;
            obj.Tools = () => this.Source_tools();
            obj.content = () => [
                this.Source_code()
            ];
            return obj;
        }
        eval_showed(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Eval_labeler() {
            const obj = new this.$.$mol_expander();
            obj.expanded = (next) => this.eval_showed(next);
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_perf_case_row_Eval_labeler_title');
            obj.Content = () => this.Eval_result();
            return obj;
        }
        result_title(id) {
            return "";
        }
        result(id) {
            const obj = new this.$.$hyoo_js_perf_stats();
            return obj;
        }
        Result(id) {
            const obj = new this.$.$hyoo_js_perf_case_result();
            obj.title = () => this.result_title(id);
            obj.result = () => this.result(id);
            return obj;
        }
        result_rows() {
            return [
                this.Result("0"),
                this.Result("1"),
                this.Result("2")
            ];
        }
        Results() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.result_rows();
            return obj;
        }
        columns() {
            return [
                this.Prefix(),
                this.Source(),
                this.Eval_labeler(),
                this.Results()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Eval", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "prefix_showed", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Drop_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Drop", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "dupe", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Dupe_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Dupe", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "swap", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Swap_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Swap", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Prefix_tools", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "prefix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Prefix_code", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Prefix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "source_showed", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "measurable", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Measurable", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Eval_sandalone", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Source_tools", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "source", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Source_code", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "eval_showed", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Eval_labeler", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf_case_row.prototype, "result", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf_case_row.prototype, "Result", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_case_row.prototype, "Results", null);
    $.$hyoo_js_perf_case_row = $hyoo_js_perf_case_row;
})($ || ($ = {}));
//hyoo/js/perf/case/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_js_perf_case_row extends $.$hyoo_js_perf_case_row {
            columns() {
                return [
                    this.Prefix(),
                    this.Source(),
                    ...this.results().length > 1
                        ? [this.Results()]
                        : this.source()
                            ? [this.Eval_labeler()]
                            : [this.Results()]
                ];
            }
            result(level) {
                return this.results()[level];
            }
            result_title(level) {
                return ['🔠', '🥶', '🥵'][level] ?? '';
            }
            eval_standalone() {
                const code = this.sample();
                return `https://eval.js.hyoo.ru/#!code=${encodeURIComponent(code)}/run=true`;
            }
            prefix_tools() {
                return this.changable() ? super.prefix_tools() : [];
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_js_perf_case_row.prototype, "columns", null);
        $$.$hyoo_js_perf_case_row = $hyoo_js_perf_case_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/js/perf/case/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/js/perf/case/row/row.view.css", "[hyoo_js_perf_case_row] {\n\tflex: 0 1 auto;\n\tflex-wrap: wrap;\n\tbackground: var(--mol_theme_card);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[hyoo_js_perf_case_row_prefix] ,\n[hyoo_js_perf_case_row_source] {\n\tflex: 1 1 40rem;\n\tvertical-align: top;\n\tpadding: 0.75rem;\n}\n\n[hyoo_js_perf_case_row_source_tools] {\n\tflex-grow: 1000;\n}\n\n[hyoo_js_perf_case_row_eval_labeler] {\n\tflex: 1 1 26rem;\n\tpadding: var(--mol_gap_block);\n}\n[hyoo_js_perf_case_row_results] {\n\tflex: 1 1 26rem;\n\tflex-wrap: wrap;\n\tpadding: var(--mol_gap_block);\n\talign-content: flex-start;\n}\n\n[hyoo_js_perf_case_row_eval_labeler_trigger] {\n\tflex-grow: 0;\n}\n");
})($ || ($ = {}));
//hyoo/js/perf/case/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_avatar extends $mol_icon {
        view_box() {
            return "0 0 24 24";
        }
        id() {
            return "";
        }
        path() {
            return "M 12 12 l 0 0 M 0 0 l 0 0 M 24 24 l 0 0 M 0 24 l 0 0 M 24 0 l 0 0";
        }
    }
    $.$mol_avatar = $mol_avatar;
})($ || ($ = {}));
//mol/avatar/-view.tree/avatar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));
//mol/hash/string/string.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_avatar extends $.$mol_avatar {
            path() {
                const id = $mol_hash_string(this.id());
                const p = 2.1;
                const m = 2.7;
                let path = '';
                for (let x = 0; x < 4; ++x) {
                    for (let y = 0; y < 8; ++y) {
                        if ((id >> (x + y * 7)) & 1) {
                            const mxp = Math.ceil(m * x + p);
                            const myp = Math.ceil(m * y + p);
                            path += `M ${mxp} ${myp} l 0 0 ` + `M ${24 - mxp} ${myp} l 0 0 `;
                        }
                    }
                }
                return path;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_avatar.prototype, "path", null);
        $$.$mol_avatar = $mol_avatar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/avatar/avatar.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/avatar/avatar.view.css", "[mol_avatar] {\n\tstroke-linecap: round;\n\tstroke-width: 3.5px;\n\tfill: none;\n\tstroke: currentColor;\n\t/* width: 1.5rem;\n\theight: 1.5rem;\n\tmargin: 0 -.25rem; */\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n}\n");
})($ || ($ = {}));
//mol/avatar/-css/avatar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sync extends $mol_icon {
        path() {
            return "M12,18C8.69,18 6,15.31 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12C4,16.42 7.58,20 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6C15.31,6 18,8.69 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12C20,7.58 16.42,4 12,4Z";
        }
    }
    $.$mol_icon_sync = $mol_icon_sync;
})($ || ($ = {}));
//mol/icon/sync/-view.tree/sync.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sync_off extends $mol_icon {
        path() {
            return "M20,4H14V10L16.24,7.76C17.32,8.85 18,10.34 18,12C18,13 17.75,13.94 17.32,14.77L18.78,16.23C19.55,15 20,13.56 20,12C20,9.79 19.09,7.8 17.64,6.36L20,4M2.86,5.41L5.22,7.77C4.45,9 4,10.44 4,12C4,14.21 4.91,16.2 6.36,17.64L4,20H10V14L7.76,16.24C6.68,15.15 6,13.66 6,12C6,11 6.25,10.06 6.68,9.23L14.76,17.31C14.5,17.44 14.26,17.56 14,17.65V19.74C14.79,19.53 15.54,19.2 16.22,18.78L18.58,21.14L19.85,19.87L4.14,4.14L2.86,5.41M10,6.35V4.26C9.2,4.47 8.45,4.8 7.77,5.22L9.23,6.68C9.5,6.56 9.73,6.44 10,6.35Z";
        }
    }
    $.$mol_icon_sync_off = $mol_icon_sync_off;
})($ || ($ = {}));
//mol/icon/sync/off/-view.tree/off.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_online extends $mol_link {
        minimal_width() {
            return 40;
        }
        minimal_height() {
            return 40;
        }
        yard() {
            const obj = new this.$.$hyoo_sync_yard();
            return obj;
        }
        uri() {
            return this.master_link();
        }
        sub() {
            return [
                this.Well(),
                this.Fail()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                title: this.message()
            };
        }
        master_link() {
            return "";
        }
        Well() {
            const obj = new this.$.$mol_avatar();
            obj.id = () => this.master_link();
            return obj;
        }
        Fail() {
            const obj = new this.$.$mol_icon_sync_off();
            return obj;
        }
        hint() {
            return "$hyoo_sync";
        }
        message() {
            return this.hint();
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "yard", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Well", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_online.prototype, "Fail", null);
    $.$hyoo_sync_online = $hyoo_sync_online;
})($ || ($ = {}));
//hyoo/sync/online/-view.tree/online.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sync_online extends $.$hyoo_sync_online {
            message() {
                try {
                    this.yard().sync();
                    return this.hint();
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return String(error);
                }
            }
            sub() {
                try {
                    this.yard().sync();
                    return [this.Well()];
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return [this.Fail()];
                }
            }
            hint() {
                return super.hint() + ' ' + $hyoo_sync_revision;
            }
            master_link() {
                return this.yard().master_link().replace(/^ws(s?):/, 'http$1:');
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "message", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "hint", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "master_link", null);
        $$.$hyoo_sync_online = $hyoo_sync_online;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sync/online/online.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sync/online/online.view.css", "[hyoo_sync_online] {\n\tpadding: var(--mol_gap_text);\n}\n\n[hyoo_sync_online_well] {\n\tcolor: var(--mol_theme_current);\n}\n\n[hyoo_sync_online_fail] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[hyoo_sync_online][mol_view_error=\"Promise\"] {\n\tanimation: hyoo_sync_online_wait 1s linear infinite;\n}\n\n@keyframes hyoo_sync_online_wait {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: .5;\n\t}\n}\n");
})($ || ($ = {}));
//hyoo/sync/online/-css/online.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_group extends $mol_check_box {
        checks() {
            return [];
        }
        full() {
            return true;
        }
    }
    $.$mol_check_group = $mol_check_group;
})($ || ($ = {}));
//mol/check/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_check extends $mol_icon {
        path() {
            return "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
        }
    }
    $.$mol_icon_check = $mol_icon_check;
})($ || ($ = {}));
//mol/icon/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_check_all extends $mol_icon {
        path() {
            return "M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z";
        }
    }
    $.$mol_icon_check_all = $mol_icon_check_all;
})($ || ($ = {}));
//mol/icon/check/all/-view.tree/all.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_group extends $.$mol_check_group {
            checked(next) {
                if (next !== undefined) {
                    for (const check of this.checks()) {
                        check.checked(next);
                    }
                    return next;
                }
                return this.checks().some(check => check.checked());
            }
            full() {
                return this.checks().every(check => check.checked());
            }
            Icon() {
                return this.full() ? new $mol_icon_check_all : new $mol_icon_tick;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_group.prototype, "checked", null);
        __decorate([
            $mol_mem
        ], $mol_check_group.prototype, "full", null);
        __decorate([
            $mol_mem
        ], $mol_check_group.prototype, "Icon", null);
        $$.$mol_check_group = $mol_check_group;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/group/group.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_share extends $mol_icon {
        path() {
            return "M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z";
        }
    }
    $.$mol_icon_share = $mol_icon_share;
})($ || ($ = {}));
//mol/icon/share/-view.tree/share.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_share_variant extends $mol_icon {
        path() {
            return "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8C19.66,8 21,6.66 21,5C21,3.34 19.66,2 18,2C16.34,2 15,3.34 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9C4.34,9 3,10.34 3,12C3,13.66 4.34,15 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19C20.92,17.39 19.61,16.08 18,16.08Z";
        }
    }
    $.$mol_icon_share_variant = $mol_icon_share_variant;
})($ || ($ = {}));
//mol/icon/share/variant/-view.tree/variant.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_share extends $mol_button_minor {
        uri() {
            return "";
        }
        capture() {
            return null;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_button_share_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_share_variant();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_share.prototype, "Icon", null);
    $.$mol_button_share = $mol_button_share;
})($ || ($ = {}));
//mol/button/share/-view.tree/share.view.tree.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_dom_capture_image(el) {
        function wait_load(el) {
            return new Promise((done, fail) => {
                el.onload = () => done(el);
                el.onerror = fail;
            });
        }
        function restyle(el, styles) {
            for (let i = 0; i < styles.length; ++i) {
                const prop = styles[i];
                el.style[prop] = styles[prop];
            }
        }
        function clone(el) {
            const re = el.cloneNode();
            if (el instanceof HTMLImageElement && !/^(data|blob):/.test(el.src)) {
                const canvas = $mol_jsx("canvas", { width: el.naturalWidth, height: el.naturalHeight });
                const context = canvas.getContext('2d');
                context.drawImage(el, 0, 0);
                try {
                    re['src'] = canvas.toDataURL();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            if (re instanceof HTMLInputElement) {
                re.setAttribute('value', el['value']);
                if (el['checked'])
                    re.setAttribute('checked', '');
            }
            if (re instanceof HTMLTextAreaElement) {
                re.setAttribute('value', el['value']);
            }
            const styles = $mol_dom_context.getComputedStyle(el);
            restyle(re, styles);
            const before = $mol_dom_context.getComputedStyle(el, ':before');
            if (before.content !== 'none') {
                const kid = $mol_jsx("span", null, JSON.parse(before.content));
                restyle(kid, before);
                re.appendChild(kid);
            }
            for (const kid of el.childNodes) {
                const dup = (kid.nodeType === kid.ELEMENT_NODE)
                    ? clone(kid)
                    : kid.cloneNode();
                re.appendChild(dup);
            }
            const after = $mol_dom_context.getComputedStyle(el, ':after');
            if (after.content !== 'none') {
                const kid = $mol_jsx("span", null, JSON.parse(after.content));
                restyle(kid, after);
                re.appendChild(kid);
            }
            return re;
        }
        const { width, height } = el.getBoundingClientRect();
        const svg = $mol_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${width} ${height}`, width: String(width), height: String(height) },
            $mol_jsx("foreignObject", { xmlns: "http://www.w3.org/2000/svg", width: String(width), height: String(height) }, clone(el)));
        const xml = $mol_dom_serialize(svg);
        const uri = 'data:image/svg+xml,' + encodeURIComponent(xml);
        const image = $mol_jsx("img", { src: uri });
        await wait_load(image);
        return image;
    }
    $.$mol_dom_capture_image = $mol_dom_capture_image;
    async function $mol_dom_capture_canvas(el) {
        const image = await $mol_dom_capture_image(el);
        const canvas = $mol_jsx("canvas", { width: image.width, height: image.height });
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        return canvas;
    }
    $.$mol_dom_capture_canvas = $mol_dom_capture_canvas;
})($ || ($ = {}));
//mol/dom/capture/capture.tsx
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_share extends $.$mol_button_share {
            capture() {
                return this.$.$mol_dom_context.document.body;
            }
            uri() {
                return this.$.$mol_state_arg.href();
            }
            async click() {
                const title = this.title();
                const url = this.uri() ?? undefined;
                const files = [];
                let el = this.capture();
                if (el) {
                    if (el instanceof $mol_view)
                        el = el.dom_tree();
                    const canvas = await $mol_dom_capture_canvas(el);
                    const blob = await new Promise(done => canvas.toBlob(done));
                    const file = new File([blob], title + '.png', { type: blob.type });
                    files.push(file);
                }
                await this.$.$mol_dom_context.navigator.share({ title, files, url });
            }
        }
        $$.$mol_button_share = $mol_button_share;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/share/share.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_directions extends $mol_icon {
        path() {
            return "M14,14.5V12H10V15H8V11C8,10.45 8.45,10 9,10H14V7.5L17.5,11M21.71,11.29L12.71,2.29H12.7C12.31,1.9 11.68,1.9 11.29,2.29L2.29,11.29C1.9,11.68 1.9,12.32 2.29,12.71L11.29,21.71C11.68,22.09 12.31,22.1 12.71,21.71L21.71,12.71C22.1,12.32 22.1,11.68 21.71,11.29Z";
        }
    }
    $.$mol_icon_directions = $mol_icon_directions;
})($ || ($ = {}));
//mol/icon/directions/-view.tree/directions.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_directions_fork extends $mol_icon {
        path() {
            return "M3,4V12.5L6,9.5L9,13C10,14 10,15 10,15V21H14V14C14,14 14,13 13.47,12C12.94,11 12,10 12,10L9,6.58L11.5,4M18,4L13.54,8.47L14,9C14,9 14.93,10 15.47,11C15.68,11.4 15.8,11.79 15.87,12.13L21,7";
        }
    }
    $.$mol_icon_directions_fork = $mol_icon_directions_fork;
})($ || ($ = {}));
//mol/icon/directions/fork/-view.tree/fork.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus_box extends $mol_icon {
        path() {
            return "M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z";
        }
    }
    $.$mol_icon_plus_box = $mol_icon_plus_box;
})($ || ($ = {}));
//mol/icon/plus/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_help extends $mol_icon {
        path() {
            return "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5C10.34,5 9,6.34 9,8H6C6,4.69 8.69,2 12,2Z";
        }
    }
    $.$mol_icon_help = $mol_icon_help;
})($ || ($ = {}));
//mol/icon/help/-view.tree/help.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_help_circle extends $mol_icon {
        path() {
            return "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7C10.9,7 10,7.9 10,9H8C8,6.79 9.79,5 12,5C14.21,5 16,6.79 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.47 17.5,2 12,2Z";
        }
    }
    $.$mol_icon_help_circle = $mol_icon_help_circle;
})($ || ($ = {}));
//mol/icon/help/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_help_circle_outline extends $mol_icon {
        path() {
            return "M11,18H13V16H11V18M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6C9.79,6 8,7.79 8,10H10C10,8.9 10.9,8 12,8C13.1,8 14,8.9 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10C16,7.79 14.21,6 12,6Z";
        }
    }
    $.$mol_icon_help_circle_outline = $mol_icon_help_circle_outline;
})($ || ($ = {}));
//mol/icon/help/circle/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_js_perf extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_js_perf_title');
        }
        yard() {
            const obj = new this.$.$hyoo_sync_client();
            return obj;
        }
        titles() {
            return [];
        }
        prefixes() {
            return [];
        }
        sources() {
            return [];
        }
        plugins() {
            return [
                this.Theme(),
                this.Hotkey()
            ];
        }
        Body() {
            const obj = new this.$.$mol_book2();
            obj.pages = () => [
                this.Common(),
                this.Cases_pane()
            ];
            return obj;
        }
        Case_measurable(id) {
            return this.Case(id).Measurable();
        }
        Case(id) {
            const obj = new this.$.$hyoo_js_perf_case_row();
            obj.title = (next) => this.case_title(id, next);
            obj.prefix = (next) => this.case_prefix(id, next);
            obj.source = (next) => this.source(id, next);
            obj.measurable = (next) => this.case_measurable(id, next);
            obj.sample = () => this.case_sample(id);
            obj.results = (next) => this.results(id, next);
            obj.changable = () => this.changable();
            obj.drop = (next) => this.case_drop(id, next);
            obj.dupe = (next) => this.case_dupe(id, next);
            obj.swap = (next) => this.case_swap(id, next);
            return obj;
        }
        Title() {
            const obj = new this.$.$mol_string_button();
            obj.value = (next) => this.bench_title(next);
            obj.hint = () => this.title();
            return obj;
        }
        tools() {
            return [
                this.Measurable_all(),
                this.Run(),
                this.Share(),
                this.Fork(),
                this.New(),
                this.About()
            ];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        run(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => true;
            obj.key = () => ({
                enter: (event) => this.run(event)
            });
            return obj;
        }
        Online() {
            const obj = new this.$.$hyoo_sync_online();
            obj.yard = () => this.yard();
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/perf.js.hyoo.ru";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        changable() {
            return true;
        }
        prefix(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Prefix_code() {
            const obj = new this.$.$mol_textarea();
            obj.enabled = () => this.changable();
            obj.spellcheck = () => false;
            obj.value = (val) => this.prefix(val);
            obj.hint = () => "let res = 0";
            return obj;
        }
        Prefix() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_perf_Prefix_title');
            obj.Content = () => this.Prefix_code();
            return obj;
        }
        postfix(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Postfix_code() {
            const obj = new this.$.$mol_textarea();
            obj.enabled = () => this.changable();
            obj.spellcheck = () => false;
            obj.value = (val) => this.postfix(val);
            obj.hint = () => "$mol_assert_like( res, {#} - 1 )";
            return obj;
        }
        Postfix() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$hyoo_js_perf_Postfix_title');
            obj.Content = () => this.Postfix_code();
            return obj;
        }
        hint() {
            return "### Results Legend\n🔠 Source Size 📦 Bundle Size\n🥶 Cold Run 🥵 Hot Run\n\n### Iterations count / number\n\t{#}\n\n### Load generic Script\n\n\tconst { some } = $mol_import.script(\n\t\t'https://unpkg.org/...'\n\t)\n\n### Load ESM Module\n\n\tconst { some } = $mol_import.module(\n\t\t'https://esm.sh/...'\n\t).default\n\n### Assert equality\n\n\t$mol_assert_like( [777], [777] )\n\n### Measure memory\n\nCall Chrome with:\n\t--js-flags=\"--expose-gc\"\n\t--enable-precise-memory-info\n\n### Other JS Tools\n\n[V8 Optimizations](https://opt.js.hyoo.ru/) [Sandbox](https://eval.js.hyoo.ru)";
        }
        Hint() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.hint();
            return obj;
        }
        Common_content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Prefix(),
                this.Postfix(),
                this.Hint()
            ];
            return obj;
        }
        Common() {
            const obj = new this.$.$mol_page();
            obj.Head = () => null;
            obj.foot = () => [
                this.Online(),
                this.Source(),
                this.Lights()
            ];
            obj.body = () => [
                this.Common_content()
            ];
            return obj;
        }
        cases() {
            return [];
        }
        Cases() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.cases();
            return obj;
        }
        cases_pane_content() {
            return [
                this.Cases()
            ];
        }
        Cases_pane() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.cases_pane_content();
            return obj;
        }
        case_title(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        case_prefix(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        source(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        case_measurable(id, next) {
            if (next !== undefined)
                return next;
            return true;
        }
        case_sample(id) {
            return "";
        }
        results(id, next) {
            if (next !== undefined)
                return next;
            return [];
        }
        case_drop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        case_dupe(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        case_swap(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        bench_title(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        measurable_all() {
            return [];
        }
        Measurable_all() {
            const obj = new this.$.$mol_check_group();
            obj.checks = () => this.measurable_all();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_Measurable_all_hint');
            return obj;
        }
        Run_icon() {
            const obj = new this.$.$mol_icon_play();
            return obj;
        }
        Run() {
            const obj = new this.$.$mol_button_major();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_Run_hint');
            obj.click = (event) => this.run(event);
            obj.sub = () => [
                this.Run_icon()
            ];
            return obj;
        }
        Share() {
            const obj = new this.$.$mol_button_share();
            obj.capture = () => this.Cases();
            return obj;
        }
        bench_fork(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Fork_icon() {
            const obj = new this.$.$mol_icon_directions_fork();
            return obj;
        }
        Fork() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_Fork_hint');
            obj.click = (next) => this.bench_fork(next);
            obj.sub = () => [
                this.Fork_icon()
            ];
            return obj;
        }
        bench_new(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        New_icon() {
            const obj = new this.$.$mol_icon_plus_box();
            return obj;
        }
        New() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_js_perf_New_hint');
            obj.click = (next) => this.bench_new(next);
            obj.sub = () => [
                this.New_icon()
            ];
            return obj;
        }
        About_icon() {
            const obj = new this.$.$mol_icon_help_circle_outline();
            return obj;
        }
        About() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://habhub.hyoo.ru/#author=nin-jin/repo=HabHub/article=42";
            obj.sub = () => [
                this.About_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "yard", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Body", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "Case", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "run", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Online", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "prefix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Prefix_code", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Prefix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "postfix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Postfix_code", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Postfix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Hint", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Common_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Common", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Cases", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Cases_pane", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "case_title", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "case_prefix", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "source", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "case_measurable", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "results", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "case_drop", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "case_dupe", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_js_perf.prototype, "case_swap", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "bench_title", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Measurable_all", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Run_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Run", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Share", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "bench_fork", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Fork_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "Fork", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "bench_new", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "New_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "New", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "About_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf.prototype, "About", null);
    $.$hyoo_js_perf = $hyoo_js_perf;
})($ || ($ = {}));
//hyoo/js/perf/-view.tree/perf.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, }) {
        if (!update)
            update = (next, prev, lead) => insert(next, drop(prev, lead));
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        if (to > prev.length)
            $mol_fail(new RangeError(`To(${to}) greater then length(${prev.length})`));
        if (from > to)
            $mol_fail(new RangeError(`From(${to}) greater then to(${to})`));
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = prev[p];
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));
//mol/reconcile/reconcile.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next) {
            const units = this.units();
            if (next === undefined) {
                return units.map(unit => unit.data);
            }
            else {
                this.insert(next, 0, units.length);
                return next;
            }
        }
        set(next) {
            return new Set(this.list(next && [...next]));
        }
        insert(next, from = this.units().length, to = from) {
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(prev.data, next),
                drop: (prev, lead) => this.land.wipe(prev),
                insert: (next, lead) => this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', next),
                update: (next, prev, lead) => this.land.put(prev.head, prev.self, lead?.self ?? '0_0', next),
            });
        }
        move(from, to) {
            const units = this.units();
            const lead = to ? units[to - 1] : null;
            this.land.move(units[from], this.head, lead?.self ?? '0_0');
        }
        cut(seat) {
            return this.land.wipe(this.units()[seat]);
        }
        has(val) {
            for (const unit of this.units()) {
                if (unit.data === val)
                    return true;
            }
            return false;
        }
        add(val) {
            if (this.has(val))
                return;
            this.insert([val]);
        }
        drop(val) {
            for (const unit of this.units()) {
                if (unit.data !== val)
                    continue;
                this.land.wipe(unit);
            }
        }
        node_make(val, Node) {
            this.insert([val]);
            const unit = this.units().at(-1);
            return this.land.node(unit.self, Node);
        }
    }
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));
//hyoo/crowd/list/list.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_js_perf_bench extends $hyoo_crowd_struct {
        title(next) {
            return this.sub('title', $hyoo_crowd_reg).str(next);
        }
        prefix(next) {
            return this.sub('prefix', $hyoo_crowd_reg).str(next);
        }
        postfix(next) {
            return this.sub('postfix', $hyoo_crowd_reg).str(next);
        }
        cases() {
            return this.sub('cases', $hyoo_crowd_list).nodes($hyoo_js_perf_case);
        }
        case_ensure(index) {
            return this.cases()[index] ?? this.case_add();
        }
        case_add() {
            this.sub('cases', $hyoo_crowd_list).insert([{}]);
            return this.cases().slice(-1)[0];
        }
        case_drop(index) {
            this.sub('cases', $hyoo_crowd_list).cut(index);
        }
        case_dupe(index) {
            this.sub('cases', $hyoo_crowd_list).insert([{}], index + 1);
            const [prev, next] = this.cases().slice(index, index + 2);
            next.steal(prev);
            return next;
        }
        case_swap(index) {
            const list = this.sub('cases', $hyoo_crowd_list);
            const pos = index ? index - 1 : list.units().length;
            list.move(index, pos);
            return pos;
        }
        steal(donor) {
            this.title(donor.title());
            this.prefix(donor.prefix());
            this.postfix(donor.postfix());
            for (const _case of donor.cases()) {
                this.case_add().steal(_case);
            }
        }
        changable() {
            return this.land.level('') >= $hyoo_crowd_peer_level.mod;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_bench.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_bench.prototype, "prefix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_bench.prototype, "postfix", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_bench.prototype, "cases", null);
    __decorate([
        $mol_action
    ], $hyoo_js_perf_bench.prototype, "case_add", null);
    __decorate([
        $mol_action
    ], $hyoo_js_perf_bench.prototype, "case_drop", null);
    __decorate([
        $mol_action
    ], $hyoo_js_perf_bench.prototype, "case_dupe", null);
    __decorate([
        $mol_action
    ], $hyoo_js_perf_bench.prototype, "case_swap", null);
    __decorate([
        $mol_action
    ], $hyoo_js_perf_bench.prototype, "steal", null);
    __decorate([
        $mol_mem
    ], $hyoo_js_perf_bench.prototype, "changable", null);
    $.$hyoo_js_perf_bench = $hyoo_js_perf_bench;
})($ || ($ = {}));
//hyoo/js/perf/bench/bench.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = requestIdleCallback(task, { timeout: delay });
        }
        destructor() {
            cancelIdleCallback(this.id);
        }
    }
    $.$mol_after_work = $mol_after_work;
    if (typeof requestIdleCallback !== 'function') {
        $.$mol_after_work = $mol_after_timeout;
    }
})($ || ($ = {}));
//mol/after/work/work.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_rest_async() {
        return new Promise(done => {
            new this.$mol_after_work(16, () => done(null));
        });
    }
    $.$mol_wait_rest_async = $mol_wait_rest_async;
    function $mol_wait_rest() {
        return this.$mol_wire_sync(this).$mol_wait_rest_async();
    }
    $.$mol_wait_rest = $mol_wait_rest;
})($ || ($ = {}));
//mol/wait/rest/rest.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_js_perf_stats extends $mol_object2 {
            elapsed;
            iterations;
            frequency_portion;
            error;
            memory;
            memory_portion;
            size;
            size_portion;
            deps;
            deps_portion;
            get time() { return this.elapsed / this.iterations; }
            get frequency() { return this.iterations * 1000 / this.elapsed; }
            get memory_per_iteration() { return this.memory / this.iterations; }
        }
        $$.$hyoo_js_perf_stats = $hyoo_js_perf_stats;
        class $hyoo_js_perf extends $.$hyoo_js_perf {
            title() {
                return (this.bench_title() ? this.bench_title() + ' | ' : '') + super.title();
            }
            bench_fund() {
                return this.yard().world().Fund($hyoo_js_perf_bench);
            }
            bench() {
                const id = $mol_int62_string_ensure(this.$.$mol_state_arg.value('bench'));
                if (!id)
                    return null;
                return this.bench_fund().Item(id);
            }
            bench_new() {
                const bench = this.bench_fund().make();
                this.$.$mol_state_arg.go({ bench: bench.land.id() });
                return bench;
            }
            bench_fork() {
                const prev = this.bench();
                const prefix = this.prefix();
                const postfix = this.postfix();
                const titles = this.titles();
                const prefixes = this.prefixes();
                const sources = this.sources();
                const next = this.bench_new();
                if (prev) {
                    next.steal(prev);
                }
                else {
                    next.prefix(prefix);
                    next.postfix(postfix);
                    const count = this.cases_count();
                    for (let i = 0; i < count; ++i) {
                        const case_ = next.case_add();
                        case_.title(titles[i] ?? '');
                        case_.setup(prefixes[i] ?? '');
                        case_.measure(sources[i] ?? '');
                    }
                }
                return next;
            }
            bench_changable() {
                const bench = this.bench();
                if (bench?.changable())
                    return bench;
                return this.bench_fork();
            }
            titles(next) {
                const bench = this.bench();
                if (bench)
                    return bench.cases().map(case_ => case_.title());
                return JSON.parse(this.$.$mol_state_arg.value('titles', next === undefined ? undefined : JSON.stringify(next)) || '[]');
            }
            prefixes(next) {
                const bench = this.bench();
                if (bench)
                    return bench.cases().map(case_ => case_.setup());
                return JSON.parse(this.$.$mol_state_arg.value('prefixes', next === undefined ? undefined : JSON.stringify(next)) || '[]');
            }
            sources(next) {
                const bench = this.bench();
                if (bench)
                    return bench.cases().map(case_ => case_.measure());
                return JSON.parse(this.$.$mol_state_arg.value('sources', next === undefined ? undefined : JSON.stringify(next)) || '[]');
            }
            bench_title(next) {
                if (next === undefined) {
                    return this.bench()?.title()
                        ?? this.$.$mol_state_arg.value('title')
                        ?? '';
                }
                else {
                    return this.bench_changable().title(next);
                }
            }
            prefix(next) {
                if (next === undefined) {
                    return this.bench()?.prefix()
                        ?? this.$.$mol_state_arg.value('prefix')
                        ?? this.$.$mol_state_arg.value('common')
                        ?? '';
                }
                else {
                    return this.bench_changable().prefix(next);
                }
            }
            postfix(next) {
                if (next === undefined) {
                    return this.bench()?.postfix()
                        ?? this.$.$mol_state_arg.value('postfix')
                        ?? '';
                }
                else {
                    return this.bench_changable().postfix(next);
                }
            }
            case_drop(index) {
                if ((this.bench()?.cases().length ?? 0) <= index)
                    return;
                this.bench_changable().case_drop(index);
            }
            case_dupe(index) {
                if ((this.bench()?.cases().length ?? 0) <= index)
                    return;
                this.bench_changable().case_dupe(index);
            }
            case_swap(index) {
                if ((this.bench()?.cases().length ?? 0) <= index)
                    return;
                this.bench_changable().case_swap(index);
            }
            cases_count() {
                return Math.max(this.prefixes().length, this.sources().length, this.titles().length);
            }
            cases() {
                return $mol_range2(index => this.Case(index), () => Math.max(1, this.cases_count()));
            }
            case_title(index, next) {
                if (next === undefined) {
                    return this.bench()?.cases()[index]?.title()
                        ?? this.titles()[index]
                        ?? '';
                }
                else {
                    return this.bench_changable().case_ensure(index).title(next);
                }
            }
            case_prefix(index, next) {
                if (next === undefined) {
                    return this.bench()?.cases()[index]?.setup()
                        ?? this.prefixes()[index]
                        ?? '';
                }
                else {
                    return this.bench_changable().case_ensure(index).setup(next);
                }
            }
            source(index, next) {
                if (next === undefined) {
                    return this.bench()?.cases()[index]?.measure()
                        ?? this.sources()[index]
                        ?? '';
                }
                else {
                    return this.bench_changable().case_ensure(index).measure(next);
                }
            }
            case_sample(index) {
                const token = this.token();
                const code = this.prefix()
                    + '\n\n' + this.case_prefix(index)
                    + '\n\n' + this.source(index)
                    + '\n\n' + this.postfix();
                return code.trim().replace(/\{#\}/g, '0');
            }
            case_size(index) {
                return (this.case_prefix(index) + '\n' + this.source(index))
                    .replace(/(\/\*)?\/\/.*$/gm, '')
                    .match(/\w+/g)?.length ?? 0;
            }
            case_deps_names(index) {
                const src = (this.case_prefix(index) + '\n' + this.source(index));
                const found = src.matchAll(/\$mol_import\.(?:script|module)\s*\(\s*['"]https?:\/\/[^/]*\/((?:@[\w.-]*\/)?[\w.-]*)/g);
                return [...found].map(([imp, mod]) => mod);
            }
            case_deps(index) {
                return this.case_deps_names(index)
                    .reduce((sum, name) => sum + this.module_size(name), 0);
            }
            case_measurable(index, next) {
                const bench = this.bench();
                if (!bench)
                    return next ?? true;
                const key = `${this}.case_measurable("${bench.cases()[index].id()}")`;
                return this.$.$mol_state_local.value(key, next) ?? true;
            }
            module_size(name) {
                return this.$.$mol_fetch.json(`https://bundlephobia.com/api/size?record=true&package=${name}`).gzip;
            }
            measures_for(index, next) {
                this.prefix();
                this.postfix();
                this.sources();
                this.prefixes();
                return next || [];
            }
            measures() {
                return this.sources().map((_, index) => this.measures_for(index));
            }
            max_frequency() {
                return this.measures().reduce((max, measure) => {
                    return Math.max(max, measure.reduce((max, level) => {
                        return Math.max(max, level.frequency || 0);
                    }, 0));
                }, 0);
            }
            max_memory() {
                return this.measures().reduce((max, measure) => {
                    return Math.max(max, measure.reduce((max, level) => {
                        return Math.max(max, level.memory_per_iteration);
                    }, 0));
                }, 0);
            }
            max_size() {
                return this.measures()
                    .map((_, i) => this.case_size(i))
                    .reduce((max, size) => Math.max(max, size), 0);
            }
            max_deps() {
                return this.measures()
                    .map((_, i) => {
                    try {
                        return this.case_deps(i);
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return 0;
                    }
                })
                    .reduce((max, size) => Math.max(max, size), 0);
            }
            results(index) {
                const measure = this.measures_for(index);
                if (!measure)
                    return [];
                return [
                    $hyoo_js_perf_stats.create(stats2 => {
                        try {
                            stats2.size = this.case_size(index);
                            stats2.size_portion = this.case_size(index) / this.max_size();
                            stats2.deps = this.case_deps(index);
                            stats2.deps_portion = this.case_deps(index) / this.max_deps();
                        }
                        catch (error) {
                            $mol_fail_log(error);
                            stats2.error = error.message;
                        }
                    }),
                    ...measure.map((stats) => $hyoo_js_perf_stats.create(stats2 => {
                        stats2.frequency_portion = stats.frequency / this.max_frequency();
                        stats2.memory_portion = stats.memory_per_iteration / this.max_memory();
                        stats2.memory = stats.memory;
                        stats2.elapsed = stats.elapsed;
                        stats2.iterations = stats.iterations;
                        stats2.error = stats.error;
                    })),
                ];
            }
            token() {
                return Math.random().toString(16).substring(2);
            }
            measure_step(count, prefix, inner, postfix) {
                this.$.$mol_wait_rest();
                const token = this.token();
                let total = -performance.now();
                prefix = prefix.replace(/\{#\}/g, `${count}`);
                postfix = postfix.replace(/\{#\}/g, `${count}`);
                inner = Array.from({ length: count }, (_, i) => inner.replace(/\{#\}/g, `${i}`)).join(';\n');
                const source = [
                    prefix,
                    `const backup_${token} = $mol_wire_auto()`,
                    `$mol_wire_auto( null )`,
                    `if( window.gc ) gc(), gc()`,
                    `let mem_${token} = -performance.memory?.usedJSHeapSize ?? 0`,
                    `let time_${token} = -performance.now()`,
                    inner,
                    `time_${token} += performance.now()`,
                    postfix,
                    `if( window.gc ) gc(), gc()`,
                    `mem_${token} += performance.memory?.usedJSHeapSize ?? 0`,
                    `$mol_wire_auto( backup_${token} )`,
                    `return { time: time_${token}, mem: window.gc ? mem_${token} : 0 }`,
                ].join(';\n');
                let func = new Function('', source);
                let { time, mem } = func();
                total += performance.now();
                return { total, time, mem };
            }
            measure_precise(prefix, inner, postfix) {
                const one = this.measure_step(1, prefix, inner, postfix);
                const iterations_raw = Math.ceil(1 + (1000 - one.total) / one.time);
                const iterations = Math.min(Math.max(1, iterations_raw), 100_000);
                let avg_last = 0;
                const times = [];
                const mems = [];
                const avg = (numbs) => Math.pow(numbs.reduce((a, b) => a * b), 1 / numbs.length);
                const med = (numbs) => numbs.sort((l, r) => l - r)[numbs.length / 2 | 0];
                while (times.length < 100) {
                    const { time, mem } = this.measure_step(iterations, prefix, inner, postfix);
                    times.push(time);
                    mems.push(mem);
                    const avg_next = avg(times);
                    if (times.length > 4 && Math.abs(avg_next - avg_last) / avg_next < 0.001)
                        break;
                    avg_last = avg_next;
                }
                return $hyoo_js_perf_stats.create(stats => {
                    stats.elapsed = med(times);
                    stats.memory = med(mems);
                    stats.iterations = iterations;
                });
            }
            measure_safe(index, prefix, inner, postfix) {
                try {
                    return this.measure_precise(prefix, inner, postfix);
                }
                catch (error) {
                    if (error instanceof Promise) {
                        const stats = $hyoo_js_perf_stats.create(stats => {
                            stats.error = `Measure ${++this._run_iteration}`;
                        });
                        this.measures_for(index, [stats]);
                        $mol_fail_hidden(error);
                    }
                    $mol_fail_log(error);
                    return $hyoo_js_perf_stats.create(stats => {
                        stats.error = error.message;
                        stats.elapsed = 0;
                        stats.memory = 0;
                        stats.iterations = Number.NEGATIVE_INFINITY;
                    });
                }
            }
            _run_iteration = 0;
            iterations_reset() {
                this._run_iteration = 0;
            }
            measurable_all() {
                return [...this.sources().entries()]
                    .filter(([index, inner]) => inner.trim())
                    .map(([index]) => this.Case_measurable(index));
            }
            run() {
                for (const [index, inner] of this.sources().entries()) {
                    this.measures_for(index, []);
                }
                const prefix = this.prefix();
                const prefixes = this.prefixes();
                const postfix = this.postfix();
                const token = this.token();
                for (const [index, inner] of this.sources().entries()) {
                    if (!inner.trim())
                        continue;
                    if (!this.case_measurable(index))
                        continue;
                    const cold = this.measure_safe(index, [
                        '/*cold*/',
                        prefix,
                        prefixes[index] || '',
                        `let accum_${token}`,
                        `const case_${token} = iter_${token} => {\n accum_${token} = iter_${token} \n};`,
                    ].join(';\n'), `case_${token}({#});\n` + inner, postfix);
                    const hot = this.measure_safe(index, [
                        '/*hot*/',
                        prefix,
                        prefixes[index] || '',
                        `let accum_${token}`,
                        `const case_${token} = iter_${token} => {\n ${inner.replace(/\{#\}/g, `iter_${token}`)} \n};`,
                    ].join(';\n'), `case_${token}({#})`, postfix);
                    this.measures_for(index, [cold, hot]);
                    this.iterations_reset();
                }
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "bench_fund", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "bench", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "bench_new", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "bench_fork", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "bench_changable", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "titles", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "prefixes", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "sources", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "bench_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "prefix", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "postfix", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "cases_count", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "cases", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_title", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_prefix", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "source", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_sample", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_size", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_deps_names", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_deps", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "case_measurable", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "module_size", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "measures_for", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "measures", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "max_frequency", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "max_memory", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "max_size", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "max_deps", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_js_perf.prototype, "results", null);
        __decorate([
            $mol_memo.method
        ], $hyoo_js_perf.prototype, "token", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "measure_step", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "measure_precise", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "measure_safe", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "iterations_reset", null);
        __decorate([
            $mol_mem
        ], $hyoo_js_perf.prototype, "measurable_all", null);
        __decorate([
            $mol_action
        ], $hyoo_js_perf.prototype, "run", null);
        $$.$hyoo_js_perf = $hyoo_js_perf;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/js/perf/perf.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/js/perf/perf.view.css", "[hyoo_js_perf_tools] {\n\tflex-grow: 0;\n}\n\n[hyoo_js_perf_body] {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding: 0;\n}\n\n[hyoo_js_perf_common] {\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\tmin-width: 20rem;\n}\n\n[hyoo_js_perf_common_content] {\n\tgap: var(--mol_gap_block);\n}\n\n[hyoo_js_perf_cases_pane] {\n\tflex: 1000 0 120rem;\n\tbackground: var(--mol_theme_back);\n}\n\n[hyoo_js_perf_cases] {\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n}\n\n[hyoo_js_perf_common_foot] {\n\tpadding: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//hyoo/js/perf/-css/perf.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 0 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"][disabled] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_deck extends $mol_list {
        items() {
            return [];
        }
        rows() {
            return [
                this.Switch(),
                this.Content()
            ];
        }
        current(val) {
            if (val !== undefined)
                return val;
            return "0";
        }
        switch_options() {
            return {};
        }
        Switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.current(val);
            obj.options = () => this.switch_options();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "current", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Content", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//mol/deck/-view.tree/deck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[this.current()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/deck/deck.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_poll extends $mol_icon {
        path() {
            return "M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z";
        }
    }
    $.$mol_icon_poll = $mol_icon_poll;
})($ || ($ = {}));
//mol/icon/poll/-view.tree/poll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_mol_bench extends $mol_book2_catalog {
        menu_title() {
            return this.$.$mol_locale.text('$hyoo_mol_bench_menu_title');
        }
        Placeholder() {
            return null;
        }
        Close_item() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                bench: null
            });
            obj.sub = () => [
                this.Close_item_icon()
            ];
            return obj;
        }
        param() {
            return "bench";
        }
        spreads() {
            return {
                equals: this.equals(),
                changelog: this.Chanelog(),
                toxic: this.Toxic(),
                markdown: this.Markdown(),
                rope: this.Rope(),
                dbmon: this.DBMon(),
                habr: this.Habr(),
                init: this.Init(),
                reactivity: this.Reactivity(),
                sierp: this.Sierp(),
                todomvc: this.Todomvc(),
                moment: this.moment()
            };
        }
        Close_item_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        equals() {
            const obj = new this.$.$hyoo_mol_bench_perf();
            obj.title = () => "Deep Equals";
            obj.analysis_uri = () => "https://t.me/mol_bench/31";
            obj.Close = () => this.Close_item();
            obj.Common = () => null;
            obj.prefix = () => "const make = i => {\n\n\tconst next = {\n\t\tobj: {\n\t\t\tx: new Map([[ el, /3/ ]]),\n\t\t\ty: new Set([ new Date(1) ]),\n\t\t},\n\t\tval: [ true, 1, '2', i ],\n\t}\n\n\tnext.val.push( next, next.obj, next.val )\n\n\treturn next\n}\n\nlet el = document.createElement( 'div' )\nlet base = make(-1)\nlet res = true";
            obj.postfix = () => "$mol_assert_ok( res )\n$mol_assert_not( compare( make(1), make(2) ) )\n$mol_assert_ok( compare( make(1), make(1) ) )";
            obj.titles = () => [
                "$mol_compare_deep",
                "fast-equals",
                "ramda",
                "deep-eql",
                "lodash",
                "deep-equal"
            ];
            obj.prefixes = () => [
                "const compare = $mol_import.module(\n\t'https://esm.sh/mol_compare_deep'\n).default.$mol_compare_deep",
                "const compare = $mol_import.module(\n\t'https://esm.sh/fast-equals'\n).circularDeepEqual",
                "const compare = $mol_import.module(\n\t'https://esm.sh/ramda'\n).equals",
                "const compare = $mol_import.module(\n\t'https://esm.sh/deep-eql'\n).default",
                "const compare = $mol_import.module(\n\t'https://esm.sh/lodash'\n).default.isEqual",
                "const compare = $mol_import.module(\n\t'https://esm.sh/deep-equal'\n).default"
            ];
            obj.sources = () => [
                "const next{#} = make({#})\nres &&= compare( base, next{#} )\nres ||= compare( base.obj, next{#}.obj )\nbase = next{#}",
                "const next{#} = make({#})\nres &&= compare( base, next{#} )\nres ||= compare( base.obj, next{#}.obj )\nbase = next{#}",
                "const next{#} = make({#})\nres &&= compare( base, next{#} )\nres ||= compare( base.obj, next{#}.obj )\nbase = next{#}",
                "const next{#} = make({#})\nres &&= compare( base, next{#} )\nres ||= compare( base.obj, next{#}.obj )\nbase = next{#}",
                "const next{#} = make({#})\nres &&= compare( base, next{#} )\nres ||= compare( base.obj, next{#}.obj )\nbase = next{#}",
                "const next{#} = make({#})\nres &&= compare( base, next{#}, { strict: true } )\nres ||= compare( base.obj, next{#}.obj, { strict: true } )\nbase = next{#}"
            ];
            return obj;
        }
        Chanelog_mol() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "$mol";
            obj.uri = () => "https://nin-jin.github.io/my_gitlab/";
            return obj;
        }
        Changelog_vue() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Vue";
            obj.uri = () => "https://gitlab.com/gitlab-org/frontend/playground/echarts/-/commit/562ba199b271bc46621cf1a9a9b37e679a3f47d3";
            return obj;
        }
        Changelog_vanilla() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Vanilla";
            obj.uri = () => "https://github.com/github/accessibilityjs/commit/2e78680ad0a852973b8f87d793e191d184be9cf8";
            return obj;
        }
        Chanelog() {
            const obj = new this.$.$hyoo_mol_bench_visual();
            obj.title = () => "Long ChangeLog";
            obj.analysis_uri = () => "https://t.me/mol_bench/30";
            obj.Close = () => this.Close_item();
            obj.items = () => [
                this.Chanelog_mol(),
                this.Changelog_vue(),
                this.Changelog_vanilla()
            ];
            return obj;
        }
        Toxic_mol() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "$mol";
            obj.uri = () => "https://nin-jin.github.io/toxic-repos/";
            return obj;
        }
        Toxic_vue() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Vue";
            obj.uri = () => "https://toxic-repos.ru/";
            return obj;
        }
        Toxic() {
            const obj = new this.$.$hyoo_mol_bench_visual();
            obj.title = () => "Toxic Repos";
            obj.analysis_uri = () => "https://t.me/mol_bench/28?single";
            obj.Close = () => this.Close_item();
            obj.items = () => [
                this.Toxic_mol(),
                this.Toxic_vue()
            ];
            return obj;
        }
        Markdown() {
            const obj = new this.$.$hyoo_mol_bench_perf();
            obj.title = () => "Markdown Parse";
            obj.analysis_uri = () => "https://t.me/mol_bench/27";
            obj.Close = () => this.Close_item();
            obj.Common = () => null;
            obj.prefix = () => "const { marked } = $mol_import.script( 'https://unpkg.com/marked' )\nlet res";
            obj.titles = () => [
                "$mol_syntax2_md",
                "marked"
            ];
            obj.sources = () => [
                "res = []\n$mol_syntax2_md_line.tokenize(\n\t'begin **' + {#} + '** end',\n\t( ... args )=> res.push( args ),\n)",
                "res = marked.lexer( 'begin **' + {#} + '** end' )"
            ];
            return obj;
        }
        Rope() {
            const obj = new this.$.$hyoo_mol_bench_bench();
            obj.title = () => "Rope Charts";
            obj.analysis_uri = () => "https://t.me/mol_bench/24";
            obj.Close = () => this.Close_item();
            obj.bench = () => "https://bench.hyoo.ru/chart/rope/";
            return obj;
        }
        DBMon_mol() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "$mol";
            obj.uri = () => "https://mol.js.org/perf/dbmon/-/index.html";
            return obj;
        }
        DBMon_vue() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Vue";
            obj.uri = () => "https://mathieuancelin.github.io/js-repaint-perfs/vue2";
            return obj;
        }
        DBMon_react() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "React";
            obj.uri = () => "https://mathieuancelin.github.io/js-repaint-perfs/react";
            return obj;
        }
        DBMon_vanilla() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Vanilla";
            obj.uri = () => "https://mathieuancelin.github.io/js-repaint-perfs/vanilla-simple/";
            return obj;
        }
        DBMon() {
            const obj = new this.$.$hyoo_mol_bench_visual();
            obj.title = () => "DB Monitor";
            obj.analysis_uri = () => "https://t.me/mol_bench/23";
            obj.Close = () => this.Close_item();
            obj.items = () => [
                this.DBMon_mol(),
                this.DBMon_vue(),
                this.DBMon_react(),
                this.DBMon_vanilla()
            ];
            return obj;
        }
        Habr_mol() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "$mol";
            obj.uri = () => "https://nin-jin.github.io/habrcomment/#!article=423889/comment=22820664";
            return obj;
        }
        Habr_vue() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Vue";
            obj.uri = () => "https://habr.com/ru/post/423889/#comment_22820664";
            return obj;
        }
        Habr() {
            const obj = new this.$.$hyoo_mol_bench_visual();
            obj.title = () => "Habr Comments";
            obj.analysis_uri = () => "https://t.me/mol_bench/21";
            obj.Close = () => this.Close_item();
            obj.items = () => [
                this.Habr_mol(),
                this.Habr_vue()
            ];
            return obj;
        }
        Init() {
            const obj = new this.$.$hyoo_mol_bench_perf();
            obj.title = () => "Reactive Init";
            obj.analysis_uri = () => "https://github.com/nin-jin/HabHub/issues/48";
            obj.Close = () => this.Close_item();
            obj.Common = () => null;
            obj.prefix = () => "";
            obj.postfix = () => "";
            obj.titles = () => [
                "$mol_wire",
                "MobX"
            ];
            obj.prefixes = () => [
                "class App extends $mol_object {\n\tfix( next = true ) { return next }\n\tsrc() { return Math.random() }\n\tres() { return this.fix() ? 0 : this.src() }\n}\n$mol_mem( App.prototype, 'fix' )\n$mol_mem( App.prototype, 'src' )\n$mol_mem( App.prototype, 'res' )",
                "const mobx = $mol_import.script(\n\t'https://unpkg.com/mobx'\n).mobx\n\nclass App extends Object {\n\tfix = true\n\tget src() { return Math.random() }\n\tget res() { return this.fix ? 0 : this.src }\n\tconstructor() {\n\t\tmobx.makeAutoObservable( super() )\n\t}\n}"
            ];
            obj.sources = () => [
                "const app{#} = new App()\napp{#}.res()",
                "const app{#} = new App()\nconst root{#} = mobx.autorun(\n\t()=> app{#}.res\n)"
            ];
            return obj;
        }
        Reactivity() {
            const obj = new this.$.$hyoo_mol_bench_perf();
            obj.title = () => "Reactive Updates";
            obj.analysis_uri = () => "https://github.com/nin-jin/HabHub/issues/48";
            obj.Close = () => this.Close_item();
            obj.Common = () => null;
            obj.prefix = () => "let res";
            obj.postfix = () => "";
            obj.titles = () => [
                "$mol_wire",
                "MobX"
            ];
            obj.prefixes = () => [
                "class App extends $mol_object {\n\tfix( next = true ) { return next }\n\tsrc() { return Math.random() }\n\tres() { return this.fix() ? 0 : this.src() }\n}\n$mol_mem( App.prototype, 'fix' )\n$mol_mem( App.prototype, 'src' )\n$mol_mem( App.prototype, 'res' )\n\nconst app = new App()\napp.res()",
                "const mobx = $mol_import.script(\n\t'https://unpkg.com/mobx'\n).mobx\n\nclass App extends Object {\n\tfix = true\n\tget src() { return Math.random() }\n\tget res() { return this.fix ? 0 : this.src }\n\tconstructor() {\n\t\tmobx.makeAutoObservable( super() )\n\t}\n}\n\nconst app = new App()\nconst root = mobx.autorun( ()=> app.res )"
            ];
            obj.sources = () => [
                "app.fix( {#}%2 === 0 )\nres = app.res()",
                "app.fix = {#}%2 === 0\nres = app.res"
            ];
            return obj;
        }
        Sierp_mol() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "$mol";
            obj.uri = () => "https://mol.js.org/perf/sierp/-/";
            return obj;
        }
        Sierp_react() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "React";
            obj.uri = () => "https://nin-jin.github.io/sierpinski/fiber.html";
            return obj;
        }
        Sierp_glimmer() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => "Glimmer";
            obj.uri = () => "https://lifeart.github.io/sierpinski-glimmer/";
            return obj;
        }
        Sierp() {
            const obj = new this.$.$hyoo_mol_bench_visual();
            obj.title = () => "Sierpinski Triangle";
            obj.analysis_uri = () => "https://t.me/mol_bench/19";
            obj.Close = () => this.Close_item();
            obj.items = () => [
                this.Sierp_mol(),
                this.Sierp_react(),
                this.Sierp_glimmer()
            ];
            return obj;
        }
        Todomvc() {
            const obj = new this.$.$hyoo_mol_bench_bench();
            obj.title = () => "ToDoMVC";
            obj.analysis_uri = () => "https://t.me/mol_bench/13";
            obj.Close = () => this.Close_item();
            obj.bench = () => "https://hyoo-ru.github.io/todomvc/benchmark/";
            return obj;
        }
        moment() {
            const obj = new this.$.$hyoo_mol_bench_perf();
            obj.title = () => "Time Moments";
            obj.analysis_uri = () => "https://t.me/mol_bench/10";
            obj.Close = () => this.Close_item();
            obj.Common = () => null;
            obj.prefix = () => "const iso = '2015-07-20T07:48:28.338Z'\nlet res";
            obj.postfix = () => "$mol_assert_equal( res, '20.07.2015' )";
            obj.titles = () => [
                "$mol_time",
                "Moment",
                "Luxon",
                "DayJS",
                "JSJoda"
            ];
            obj.prefixes = () => [
                "$mol_import.script(\n\t'https://unpkg.com/mol_time_all@1.1.12/web.js'\n)",
                "$mol_import.script(\n\t'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js'\n)",
                "$mol_import.script(\n\t'https://unpkg.com/luxon@1.24.1/build/global/luxon.min.js'\n)",
                "$mol_import.script(\n\t'https://unpkg.com/dayjs@1.8.21/dayjs.min.js'\n)",
                "$mol_import.script(\n\t'https://cdn.jsdelivr.net/npm/@js-joda/core@1.11.0/dist/js-joda.js'\n)\nconst pattern = JSJoda.DateTimeFormatter.ofPattern( 'dd.MM.yyyy' )"
            ];
            obj.sources = () => [
                "res = new $mol_time_moment( iso )\n\t.toString( 'DD.MM.YYYY' )",
                "res = moment( iso )\n\t.format( 'DD.MM.YYYY' )",
                "res = luxon.DateTime.fromISO( iso ).toUTC()\n\t.toFormat( 'dd.MM.yyyy' )",
                "res = dayjs( iso )\n\t.format( 'DD.MM.YYYY' )",
                "res = JSJoda.ZonedDateTime.parse( iso )\n\t.format( pattern )"
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Close_item", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Close_item_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "equals", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Chanelog_mol", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Changelog_vue", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Changelog_vanilla", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Chanelog", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Toxic_mol", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Toxic_vue", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Toxic", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Markdown", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Rope", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "DBMon_mol", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "DBMon_vue", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "DBMon_react", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "DBMon_vanilla", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "DBMon", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Habr_mol", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Habr_vue", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Habr", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Init", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Reactivity", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Sierp_mol", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Sierp_react", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Sierp_glimmer", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Sierp", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "Todomvc", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench.prototype, "moment", null);
    $.$hyoo_mol_bench = $hyoo_mol_bench;
    class $hyoo_mol_bench_bench extends $hyoo_bench_app {
        addon_title() {
            return this.title();
        }
        menu_tools() {
            return [
                this.Analysis(),
                this.Close()
            ];
        }
        analysis_uri() {
            return "";
        }
        Analysis() {
            const obj = new this.$.$hyoo_mol_bench_analysis();
            obj.uri = () => this.analysis_uri();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_bench.prototype, "Analysis", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_bench.prototype, "Close", null);
    $.$hyoo_mol_bench_bench = $hyoo_mol_bench_bench;
    class $hyoo_mol_bench_perf extends $hyoo_js_perf {
        changable() {
            return false;
        }
        head() {
            return [
                this.Title(),
                this.Run(),
                this.Analysis(),
                this.Tools()
            ];
        }
        tools() {
            return [
                this.Close()
            ];
        }
        analysis_uri() {
            return "";
        }
        Analysis() {
            const obj = new this.$.$hyoo_mol_bench_analysis();
            obj.uri = () => this.analysis_uri();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_perf.prototype, "Analysis", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_perf.prototype, "Close", null);
    $.$hyoo_mol_bench_perf = $hyoo_mol_bench_perf;
    class $hyoo_mol_bench_visual extends $mol_page {
        head() {
            return [
                this.Title(),
                this.Switch(),
                this.Tools()
            ];
        }
        tools() {
            return [
                this.Analysis(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Deck()
            ];
        }
        analysis_uri() {
            return "";
        }
        Analysis() {
            const obj = new this.$.$hyoo_mol_bench_analysis();
            obj.uri = () => this.analysis_uri();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        items() {
            return [];
        }
        Switch() {
            return this.Deck().Switch();
        }
        Content() {
            return this.Deck().Content();
        }
        Deck() {
            const obj = new this.$.$mol_deck();
            obj.rows = () => [
                this.Content()
            ];
            obj.items = () => this.items();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_visual.prototype, "Analysis", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_visual.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_visual.prototype, "Deck", null);
    $.$hyoo_mol_bench_visual = $hyoo_mol_bench_visual;
    class $hyoo_mol_bench_analysis extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$hyoo_mol_bench_analysis_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_poll();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_mol_bench_analysis.prototype, "Icon", null);
    $.$hyoo_mol_bench_analysis = $hyoo_mol_bench_analysis;
})($ || ($ = {}));
//hyoo/mol/bench/-view.tree/bench.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/mol/bench/bench.view.css", "[hyoo_mol_bench_menu] {\n\tflex: 0 0 15rem;\n}\n\n[hyoo_mol_bench_perf] {\n\tflex: 1 0 auto;\n}\n\n[hyoo_mol_bench_perf_title] {\n\tflex-grow: 1;\n}\n\n[hyoo_mol_bench_perf_tools] {\n\tflex-grow: 1000;\n}\n\n[hyoo_mol_bench_visual] {\n\tflex: 1 0 auto;\n}\n\n[hyoo_mol_bench_visual_deck_switch] {\n\tflex-grow: 1000;\n}\n\n[hyoo_mol_bench_visual_title] {\n\tflex-grow: 1;\n}\n\n[hyoo_mol_bench_visual_deck] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//hyoo/mol/bench/-css/bench.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//mol/span/span.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//mol/error/syntax/syntax.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start, pos - error_start + 1);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Undexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//mol/tree2/from/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//mol/tree2/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//mol/tree2/tree2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree2_error extends Error {
        spans;
        constructor(message, spans) {
            super(message);
            this.spans = spans;
        }
        toJSON() {
            return {
                message: this.message,
                spans: this.spans
            };
        }
    }
    $.$mol_view_tree2_error = $mol_view_tree2_error;
    class $mol_view_tree2_error_suggestions {
        suggestions;
        constructor(suggestions) {
            this.suggestions = suggestions;
        }
        toString() {
            return this.suggestions.map(suggestion => `\`${suggestion}\``).join(', ');
        }
        toJSON() {
            return this.suggestions;
        }
    }
    $.$mol_view_tree2_error_suggestions = $mol_view_tree2_error_suggestions;
    function $mol_view_tree2_error_str(strings, ...parts) {
        const spans = [];
        for (const part of parts) {
            if (part instanceof $mol_span)
                spans.push(part);
            if (Array.isArray(part) && part.length > 0 && part[0] instanceof $mol_span)
                spans.push(...part);
        }
        return new $mol_view_tree2_error(join(strings, parts), spans);
    }
    $.$mol_view_tree2_error_str = $mol_view_tree2_error_str;
    function join(strings, objects) {
        let result = '';
        let obj_pos = 0;
        let obj_len = objects.length;
        for (const str of strings) {
            result += str;
            if (obj_pos < obj_len) {
                const obj = objects[obj_pos++];
                if (Array.isArray(obj))
                    result += obj.map(item => `\`${item}\``).join(', ');
                else
                    result += `\`${String(obj)}\``;
            }
        }
        return result;
    }
})($ || ($ = {}));
//mol/view/tree2/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_child(tree) {
        if (tree.kids.length === 0) {
            return this.$mol_fail($mol_view_tree2_error_str `Required one child at ${tree.span}`);
        }
        if (tree.kids.length > 1) {
            return this.$mol_fail($mol_view_tree2_error_str `Should be only one child at ${tree.span}`);
        }
        return tree.kids[0];
    }
    $.$mol_view_tree2_child = $mol_view_tree2_child;
})($ || ($ = {}));
//mol/view/tree2/child.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_classes(defs) {
        return defs.clone(defs.hack({
            '-': () => []
        }));
    }
    $.$mol_view_tree2_classes = $mol_view_tree2_classes;
})($ || ($ = {}));
//mol/view/tree2/classes.ts
;
"use strict";
var $;
(function ($_1) {
    class $mol_view_tree2_context extends $mol_object2 {
        parents;
        locales;
        methods;
        types;
        added_nodes;
        array;
        constructor($, parents, locales, methods, types = true, added_nodes = new Map(), array) {
            super();
            this.parents = parents;
            this.locales = locales;
            this.methods = methods;
            this.types = types;
            this.added_nodes = added_nodes;
            this.array = array;
            this.$ = $;
        }
        clone(prefixes, array) {
            return new this.$.$mol_view_tree2_context(this.$, prefixes, this.locales, this.methods, this.types, this.added_nodes, array);
        }
        parent(prefix) {
            const parents = this.parents.slice();
            parents.push(prefix);
            return this.clone(parents, this.array);
        }
        root() {
            return this.clone(this.parents.slice(0, 1));
        }
        locale_disable(array) {
            if (this.array)
                return this;
            return this.clone(this.parents, array);
        }
        get_method({ name, src, key, next }) {
            const prev = this.added_nodes.get(name.value);
            if (!prev)
                return;
            if ((prev.key && !key) || (!prev.key && key) || (prev.next && !next) || (!prev.next && next))
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${src.type} at ${src.span} is not same as ${prev.src.type} at ${prev.src.span}`);
            const current_default = src.kids.length > 0 ? src.kids[0] : undefined;
            const prev_default = prev.src.kids.length > 0 ? prev.src.kids[0] : undefined;
            if (prev_default?.toString() !== current_default?.toString())
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${name.value} at ${current_default?.span ?? name.span} already defined with another default value at ${prev_default?.span ?? prev.name.span}`);
            return prev;
        }
        check_scope_vars({ name, key, next }) {
            let finded_key;
            let finded_next;
            const parents = this.parents;
            for (let i = 1; i < parents.length; i++) {
                const parent = parents[i];
                if (next && parent.next)
                    finded_next = parent.next;
            }
            if (next && !finded_next)
                return this.$.$mol_fail($mol_view_tree2_error_str `Next ${next.value} at ${next.span} not found at ${this.parents.map(parent => parent.src.span)}`);
            const first_method = parents.length > 1 ? parents[1] : undefined;
            if (name.value === first_method?.name.value)
                return this.$.$mol_fail($mol_view_tree2_error_str `Method ${name.value} at ${name.span} already defined at ${first_method.name.span}`);
        }
        index(owner) {
            this.added_nodes.set(owner.name.value, owner);
            const index = this.methods.length;
            return index;
        }
        method(index, method) {
            this.methods.push(...method);
        }
        locale_nodes = new Map();
        locale(operator) {
            const parents = this.parents;
            const val = operator.kids.length === 1 ? operator.kids[0] : undefined;
            if (!val)
                return this.$.$mol_fail($mol_view_tree2_error_str `Need a one child at ${operator.span}, use \`some @ \\localized value\``);
            if (this.array)
                return this.$.$mol_fail($mol_view_tree2_error_str `Can\'t use \`@\` at ${operator.span} inside array at ${this.array.span}`);
            let key = '';
            const body = [];
            const last = parents.length > 0 ? parents[parents.length - 1] : undefined;
            for (const parent of parents) {
                body.push(parent.name);
                key += parent.name.value;
                if (parent === last)
                    break;
                body.push(parent.name.data('_'));
                key += '_';
            }
            const prev = this.locale_nodes.get(key);
            if (prev)
                return this.$.$mol_fail($mol_view_tree2_error_str `Locale key \`${key}\` at ${operator.span} conflicts with same at ${prev.span}`);
            this.locale_nodes.set(key, val);
            this.locales[key] = val.text();
            return operator.struct('line', body);
        }
    }
    $_1.$mol_view_tree2_context = $mol_view_tree2_context;
})($ || ($ = {}));
//mol/view/tree2/context.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_normalize(defs) {
        return defs.clone($mol_view_tree2_classes(defs).kids.map(cl => cl.clone([
            this.$mol_view_tree2_class_super(cl).clone(this.$mol_view_tree2_class_props(cl))
        ])));
    }
    $.$mol_view_tree2_normalize = $mol_view_tree2_normalize;
})($ || ($ = {}));
//mol/view/tree2/normalize.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_prop_split(src) {
        const prop_name = src.type;
        let key_pos = prop_name.indexOf('*');
        let next_pos = prop_name.indexOf('?');
        let next_pos_orig = next_pos;
        if (next_pos === -1)
            next_pos = prop_name.length;
        const name_end = (key_pos === -1) ? next_pos : key_pos;
        if (key_pos > next_pos)
            return this.$mol_fail(err `Index argument must be before next argument at ${src.span}, use ${example1}`);
        const name = prop_name.substring(0, name_end);
        const key = key_pos < 0 ? '' : prop_name.substring(key_pos + 1, next_pos);
        const next = prop_name.substring(next_pos + 1);
        if ((key && !regular_regex.test(key))
            || (next && !regular_regex.test(next)))
            return this.$mol_fail(err `Only regular chars and digits allowed ${key} ${next} at ${src.span}, use ${example2}`);
        return {
            src,
            name: $mol_tree2.data(name, [], src.span.slice(0, name.length)),
            key: key_pos >= 0 ? $mol_tree2.data(key ? JSON.stringify(key) : 'id', [], src.span.slice(key_pos, key_pos + key.length)) : undefined,
            next: next_pos_orig >= 0 ? $mol_tree2.data(next || 'next', [], src.span.slice(next_pos, next_pos + next.length)) : undefined
        };
    }
    $.$mol_view_tree2_prop_split = $mol_view_tree2_prop_split;
    const regular_regex = /^\w+$/;
    const example1 = new $mol_view_tree2_error_suggestions([
        'having!key?next <= owner!key?next'
    ]);
    const example2 = new $mol_view_tree2_error_suggestions([
        'having#',
        'having#key',
        'having#key?next',
        'having',
    ]);
})($ || ($ = {}));
//mol/view/tree2/prop/split.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_prop_name(prop) {
        return this.$mol_view_tree2_prop_split(prop).name.value;
    }
    $.$mol_view_tree2_prop_name = $mol_view_tree2_prop_name;
    function $mol_view_tree2_prop_key(prop) {
        return this.$mol_view_tree2_prop_split(prop).key?.value;
    }
    $.$mol_view_tree2_prop_key = $mol_view_tree2_prop_key;
    function $mol_view_tree2_prop_next(prop) {
        return this.$mol_view_tree2_prop_split(prop).next?.value;
    }
    $.$mol_view_tree2_prop_next = $mol_view_tree2_prop_next;
})($ || ($ = {}));
//mol/view/tree2/prop/prop.ts
;
"use strict";
var $;
(function ($) {
    const regular_regex = /^\w+$/;
    function $mol_view_tree2_prop_quote(name) {
        if (regular_regex.test(name.value))
            return name;
        return name.data(JSON.stringify(name.value));
    }
    $.$mol_view_tree2_prop_quote = $mol_view_tree2_prop_quote;
})($ || ($ = {}));
//mol/view/tree2/prop/quote.ts
;
"use strict";
var $;
(function ($) {
    const { begin, end, latin_only: letter, optional, repeat_greedy } = $mol_regexp;
    $.$mol_view_tree2_prop_signature = $mol_regexp.from([
        begin,
        { name: repeat_greedy(letter, 1) },
        { key: optional(['*', repeat_greedy(letter, 0)]) },
        { next: optional(['?', repeat_greedy(letter, 0)]) },
        end,
    ]);
})($ || ($ = {}));
//mol/view/tree2/prop/sigrature.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_class_super(klass) {
        if (!class_regex.test(klass.type))
            return this.$mol_fail(err `Wrong class name at ${klass.span}`);
        const superclass = klass.kids.length === 1 ? klass.kids[0] : undefined;
        if (!superclass)
            return this.$mol_fail(err `No super class at ${klass.span}`);
        if (!class_regex.test(superclass.type))
            return this.$mol_fail(err `Wrong super class name at ${superclass.span}`);
        return superclass;
    }
    $.$mol_view_tree2_class_super = $mol_view_tree2_class_super;
    const class_regex = /^[$A-Z]\w+$/;
})($ || ($ = {}));
//mol/view/tree2/class/super.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_class_props(klass) {
        let props = this.$mol_view_tree2_class_super(klass);
        props = props.clone(props.hack({
            '': (node, belt) => {
                const normal = node.type.replace(/!\w+/, '*');
                if (node.type === normal)
                    return [node.clone(node.hack(belt))];
                return [node.struct(normal, node.hack(belt))];
            }
        }));
        const props_inner = [];
        const props_root = props.hack({
            '<=': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
            '<=>': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
        });
        return [...props_root, ...props_inner];
    }
    $.$mol_view_tree2_class_props = $mol_view_tree2_class_props;
})($ || ($ = {}));
//mol/view/tree2/class/props.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_value_type(val) {
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
        const first_char = val.type && val.type[0];
        if (first_char === '/')
            return 'list';
        if (Number(val.type).toString() == val.type)
            return 'number';
        if (/^[$A-Z]/.test(first_char))
            return 'object';
        return this.$mol_fail(err `Unknown value type ${val.type} at ${val.span}`);
    }
    $.$mol_view_tree2_value_type = $mol_view_tree2_value_type;
})($ || ($ = {}));
//mol/view/tree2/value/type.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_value(value) {
        const type = value.type;
        const kids = value.kids;
        if (type === '') {
            if (kids.length === 0)
                return value.data(JSON.stringify(value.value));
            return value.data(JSON.stringify(kids.map(node => node.value).join('\n')));
        }
        if (kids.length !== 0)
            return this.$mol_fail(err `Kids are not allowed at ${value.span}, use ${example}`);
        if (type === 'false' || type === 'true')
            return value.data(type);
        if (type === 'null')
            return value.data(type);
        if (Number(type).toString() === type.replace(/^\+/, ''))
            return value.data(type);
        return this.$mol_fail(err `Value ${value.toString()} not allowed at ${value.span}, use ${example}`);
    }
    $.$mol_view_tree2_value = $mol_view_tree2_value;
    const example = new $mol_view_tree2_error_suggestions([
        'false',
        'true',
        '123',
        'null',
        '\\some'
    ]);
})($ || ($ = {}));
//mol/view/tree2/value/value.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_string(text) {
        let res = '';
        function visit(text, prefix, inline) {
            if (text.type === 'indent') {
                if (inline)
                    res += '\n';
                for (let kid of text.kids) {
                    visit(kid, prefix + '\t', false);
                }
                if (inline)
                    res += prefix;
            }
            else if (text.type === 'line') {
                if (!inline)
                    res += prefix;
                for (let kid of text.kids) {
                    visit(kid, prefix, true);
                }
                if (!inline)
                    res += '\n';
            }
            else {
                if (!inline)
                    res += prefix;
                res += text.text();
                if (!inline)
                    res += '\n';
            }
        }
        for (let kid of text.kids) {
            visit(kid, '', false);
        }
        return res;
    }
    $.$mol_tree2_text_to_string = $mol_tree2_text_to_string;
})($ || ($ = {}));
//mol/tree2/text/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_bind_both_parts(operator) {
        if (operator.type !== '<=>')
            return this.$mol_fail(err `Need an \`<=>\` at ${operator.span}, use ${example}`);
        const owner = operator.kids.length === 1 ? operator.kids[0] : undefined;
        if (!owner)
            return this.$mol_fail(err `Need an owner part at ${operator.span}, use ${example}`);
        if (owner.kids.length > 1)
            return this.$mol_fail(err `Only one sub allowed at ${owner.span}, use ${example}`);
        const owner_parts = this.$mol_view_tree2_prop_split(owner);
        if (!owner_parts.next)
            return this.$mol_fail(err `Next argument required at ${owner.span}, use ${example}`);
        const default_value = owner.kids.length === 1 ? owner.kids[0] : undefined;
        return {
            owner_parts,
            default_value
        };
    }
    $.$mol_view_tree2_bind_both_parts = $mol_view_tree2_bind_both_parts;
    const example = new $mol_view_tree2_error_suggestions([
        'having?next <=> owner?next',
        'having?next <=> owner?next \\default',
        'having!key?next <=> owner!key?next',
    ]);
})($ || ($ = {}));
//mol/view/tree2/bind/both_parts.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_bind_left_parts(operator, having_parts) {
        if (operator.type !== '<=')
            return this.$mol_fail(err `Need an \`<=\` at ${operator.span}`);
        const owner = operator.kids.length === 1 ? operator.kids[0] : undefined;
        if (!owner)
            return this.$mol_fail(err `Need an owner part at ${operator.span}`);
        if (owner.kids.length > 1)
            return this.$mol_fail(err `Owner at ${owner.span} can't have more that 1 value, given ${owner.kids.map(node => node.span)}`);
        const default_value = owner.kids.length === 1 ? owner.kids[0] : undefined;
        const owner_parts = this.$mol_view_tree2_prop_split(owner);
        const owner_call_parts = owner_parts.next
            ? { ...owner_parts, next: undefined }
            : owner_parts;
        return {
            default_value,
            owner_call_parts,
            owner_parts
        };
    }
    $.$mol_view_tree2_bind_left_parts = $mol_view_tree2_bind_left_parts;
})($ || ($ = {}));
//mol/view/tree2/bind/left_parts.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_bind_right_parts(operator, having_parts, factory) {
        if (operator.type !== '=>')
            return this.$mol_fail(err `Need an \`=>\` at ${operator.span}, use ${example}`);
        const owner = operator.kids.length === 1 ? operator.kids[0] : undefined;
        if (!owner)
            return this.$mol_fail(err `Need an owner part at ${operator.span}, use ${example}`);
        if (owner.kids.length !== 0)
            return this.$mol_fail(err `Owner at ${owner.span} can\'t have values at ${owner.kids.map(node => node.span)}, use ${example}`);
        const owner_parts = this.$mol_view_tree2_prop_split(owner);
        const owner_key = owner_parts.key;
        const having_key = having_parts.key;
        if (owner_key && having_key && having_key.data !== owner_key.data)
            return this.$mol_fail(err `Key ${owner_key.value} at ${owner_key.span} must be equal to key ${having_key.span} at ${having_key.span}, ${example}`);
        if (!owner_key && having_key)
            return this.$mol_fail(err `Name ${owner_parts.name.value} at ${owner_parts.name.span} need a key like ${having_key.value} at ${having_key.span}, ${example}`);
        if (owner_key && (!having_key && !factory.key))
            return this.$mol_fail(err `Can't use key ${owner_key.value} at ${owner_key.span} without key at ${having_parts.name.span} or at ${factory.src.span}, ${example}`);
        const owner_next = owner_parts.next;
        const having_next = having_parts.next;
        if (owner_next && !having_next)
            return this.$mol_fail(err `Can't use next ${owner_next.value} at ${owner_next.span} without next at ${having_parts.name.span}, ${example}`);
        return {
            owner_parts
        };
    }
    $.$mol_view_tree2_bind_right_parts = $mol_view_tree2_bind_right_parts;
    const example = new $mol_view_tree2_error_suggestions([
        'having => owner',
        'having?next => owner?next',
        'having!key => owner!key',
        'having!key?next => owner!key?next'
    ]);
})($ || ($ = {}));
//mol/view/tree2/bind/right_parts.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_bind_both(operator, context) {
        const { owner_parts, default_value } = this.$mol_view_tree2_bind_both_parts(operator);
        context.check_scope_vars(owner_parts);
        if (default_value && !context.get_method(owner_parts)) {
            this.$mol_view_tree2_ts_method_body(owner_parts, context.root());
        }
        return [operator.struct('line', [
                owner_parts.name.data('this.'),
                this.$mol_view_tree2_ts_function_call(owner_parts),
            ])];
    }
    $.$mol_view_tree2_ts_bind_both = $mol_view_tree2_ts_bind_both;
    const example = new $mol_view_tree2_error_suggestions([
        'having?next <=> owner?next',
        'having?next <=> owner?next \\default',
        'having!key?next <=> owner!key?next',
    ]);
})($ || ($ = {}));
//mol/view/tree2/ts/bind/both.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_bind_left(operator, context, having_parts) {
        const { default_value, owner_parts, owner_call_parts } = this.$mol_view_tree2_bind_left_parts(operator, having_parts);
        context.check_scope_vars(owner_call_parts);
        if (default_value && !context.get_method(owner_parts)) {
            this.$mol_view_tree2_ts_method_body(owner_parts, context.root());
        }
        return [operator.struct('line', [
                owner_parts.name.data('this.'),
                this.$mol_view_tree2_ts_function_call(owner_call_parts),
            ])];
    }
    $.$mol_view_tree2_ts_bind_left = $mol_view_tree2_ts_bind_left;
})($ || ($ = {}));
//mol/view/tree2/ts/bind/left.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_bind_right(operator, having_parts, factory, context) {
        const { owner_parts } = this.$mol_view_tree2_bind_right_parts(operator, having_parts, factory);
        const prev = context.get_method(owner_parts);
        if (prev)
            return this.$mol_fail(err `Method ${owner_parts.name.value} at ${owner_parts.name.span} already defined at ${prev.src.span}, ${example}`);
        const index = context.index(owner_parts);
        const body = operator.struct('indent', [
            operator.struct('line', [
                owner_parts.name.data('return this.'),
                this.$mol_view_tree2_ts_function_call({ ...factory, key: factory.key?.data('id') }),
                owner_parts.name.data('.'),
                this.$mol_view_tree2_ts_function_call(having_parts),
            ])
        ]);
        const method = [
            ...this.$mol_view_tree2_ts_comment_doc(owner_parts.src),
            operator.struct('line', [
                owner_parts.name,
                $mol_view_tree2_ts_function_declaration(owner_parts, context.types),
                owner_parts.name.data(' {'),
            ]),
            body,
            owner_parts.name.data('}'),
        ];
        context.method(index, method);
    }
    $.$mol_view_tree2_ts_bind_right = $mol_view_tree2_ts_bind_right;
    const example = new $mol_view_tree2_error_suggestions([
        'having => owner',
        'having?next => owner?next',
        'having!key => owner!key',
        'having!key?next => owner!key?next'
    ]);
})($ || ($ = {}));
//mol/view/tree2/ts/bind/right.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_class(klass, locales) {
        const superclass = this.$mol_view_tree2_class_super(klass);
        const body = [];
        const class_parts = this.$mol_view_tree2_prop_split(klass);
        const context = new $mol_view_tree2_context(this, [class_parts], locales, body);
        const props = this.$mol_view_tree2_class_props(klass);
        for (const having of props) {
            const having_parts = this.$mol_view_tree2_prop_split(having);
            if (context.get_method(having_parts))
                continue;
            this.$mol_view_tree2_ts_method_body(having_parts, context);
        }
        return klass.struct('indent', [
            klass.struct('line', [
                klass.data('export class '),
                klass.data(klass.type),
                klass.data(' extends '),
                superclass.data(superclass.type),
                klass.data(' {'),
            ]),
            klass.struct('indent', body),
            klass.data('}'),
            klass.data(''),
        ]);
    }
    $.$mol_view_tree2_ts_class = $mol_view_tree2_ts_class;
})($ || ($ = {}));
//mol/view/tree2/ts/class.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_value(src) {
        const converted = this.$mol_view_tree2_value(src);
        if (src.type === 'null')
            return [converted.struct('line', [
                    converted.data(converted.value),
                    converted.data(' as any'),
                ])];
        return [converted];
    }
    $.$mol_view_tree2_ts_value = $mol_view_tree2_ts_value;
})($ || ($ = {}));
//mol/view/tree2/ts/value.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_locale(operator, context) {
        return [operator.struct('line', [
                operator.data('this.$.$mol_locale.text( \''),
                context.locale(operator),
                operator.data('\' )'),
            ])];
    }
    $.$mol_view_tree2_ts_locale = $mol_view_tree2_ts_locale;
})($ || ($ = {}));
//mol/view/tree2/ts/locale.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_module(tree2_module, locales) {
        tree2_module = $mol_view_tree2_classes(tree2_module);
        const classes = [
            tree2_module.data('namespace $ {')
        ];
        let has_data = false;
        for (const item of tree2_module.kids) {
            const class_node = this.$mol_view_tree2_ts_class(item, locales);
            classes.push(class_node);
            has_data = true;
        }
        classes.push(tree2_module.data('}'), tree2_module.data(''));
        return tree2_module.list(has_data ? classes : []);
    }
    $.$mol_view_tree2_ts_module = $mol_view_tree2_ts_module;
})($ || ($ = {}));
//mol/view/tree2/ts/module.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_function_declaration({ name, key, next }, types = false) {
        const sub = [name.data('(')];
        if (key)
            sub.push(key.data('id'));
        if (types && key)
            sub.push(key.data(': any'));
        if (key && next)
            sub.push(name.data(', '));
        if (next)
            sub.push(next);
        if (types && next)
            sub.push(next.data('?: any'));
        sub.push(name.data(')'));
        return name.struct('line', sub);
    }
    $.$mol_view_tree2_ts_function_declaration = $mol_view_tree2_ts_function_declaration;
    function $mol_view_tree2_ts_function_call({ name, key, next }) {
        const sub = [
            name,
            name.data('('),
        ];
        if (key)
            sub.push(key);
        if (next && key)
            sub.push(key.data(', '));
        if (next)
            sub.push(next);
        sub.push(name.data(')'));
        return name.struct('line', sub);
    }
    $.$mol_view_tree2_ts_function_call = $mol_view_tree2_ts_function_call;
})($ || ($ = {}));
//mol/view/tree2/ts/function.ts
;
"use strict";
var $;
(function ($_1) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_spread(spread_prop) {
        const spread_prop_parts = this.$mol_view_tree2_prop_split(spread_prop);
        return spread_prop.struct('line', [
            spread_prop.data('...this.'),
            this.$mol_view_tree2_ts_function_call(spread_prop_parts)
        ]);
    }
    $_1.$mol_view_tree2_ts_spread = $mol_view_tree2_ts_spread;
    class $mol_view_tree2_ts_spread_factory extends $mol_object2 {
        prop_parts;
        super_spread = undefined;
        constructor($, prop_parts) {
            super();
            this.prop_parts = prop_parts;
            this.$ = $;
        }
        create(prop) {
            const spread_prop = prop.kids.length === 1 ? prop.kids[0] : undefined;
            if (spread_prop)
                return this.$.$mol_view_tree2_ts_spread(spread_prop);
            const super_spread = this.super_spread;
            if (super_spread)
                return this.$.$mol_fail(err `Only one \`^\` operator allowed at ${prop.span}, first was at ${super_spread.span}`);
            if (!this.prop_parts)
                return this.$.$mol_fail(err `Operator \`^\` not allowed at ${prop.span}`);
            this.super_spread = prop.struct('line', [
                prop.data('...super.'),
                this.$.$mol_view_tree2_ts_function_call(this.prop_parts)
            ]);
            return this.super_spread;
        }
    }
    $_1.$mol_view_tree2_ts_spread_factory = $mol_view_tree2_ts_spread_factory;
})($ || ($ = {}));
//mol/view/tree2/ts/spread.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_comment(item) {
        return item.kids.map(chunk => item.data('// ' + chunk.type));
    }
    $.$mol_view_tree2_ts_comment = $mol_view_tree2_ts_comment;
    function $mol_view_tree2_ts_comment_doc(item) {
        const chunks = item.toString().trim().split('\n');
        return [
            item.data(''),
            item.data('/**'),
            item.data(' * ```tree'),
            ...chunks.map(chunk => item.data(' * ' + chunk)),
            item.data(' * ```'),
            item.data(' */'),
        ];
    }
    $.$mol_view_tree2_ts_comment_doc = $mol_view_tree2_ts_comment_doc;
})($ || ($ = {}));
//mol/view/tree2/ts/comment.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_compile(tree2_module) {
        const locales = {};
        const ts_module = this.$mol_view_tree2_ts_module(tree2_module, locales);
        const script = this.$mol_tree2_text_to_string(ts_module);
        return { script, locales };
    }
    $.$mol_view_tree2_ts_compile = $mol_view_tree2_ts_compile;
})($ || ($ = {}));
//mol/view/tree2/ts/compile.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_dictionary(dictionary, dictionary_context, super_method) {
        if (dictionary.type !== '*')
            return this.$mol_fail(err `Need a \`*\` operator at ${dictionary.span}`);
        const sub = [];
        const kids = dictionary.kids;
        const last = kids.length > 0 ? kids[kids.length - 1] : undefined;
        const spread_factory = new this.$mol_view_tree2_ts_spread_factory(this, super_method);
        for (const opt of kids) {
            let value;
            const info = this.$mol_view_tree2_prop_split(opt);
            if (opt.type === '^') {
                const child_sub = [spread_factory.create(opt)];
                if (opt !== last)
                    child_sub.push(opt.data(','));
                sub.push(opt.struct('line', child_sub));
                continue;
            }
            const context = dictionary_context.parent(info);
            const operator = opt.kids.length > 0 ? opt.kids[0] : undefined;
            if (!operator)
                return this.$mol_fail(err `Need an operator at ${opt.span}`);
            const type = operator.type;
            if (type === '<=')
                value = this.$mol_view_tree2_ts_bind_left(operator, context);
            else if (type === '*')
                value = this.$mol_view_tree2_ts_dictionary(operator, context);
            else if (type[0] === '/')
                value = this.$mol_view_tree2_ts_array(operator, context);
            else if (type === '<=>')
                value = this.$mol_view_tree2_ts_bind_both(operator, context);
            else if (type === '@')
                value = this.$mol_view_tree2_ts_locale(operator, context);
            else
                value = this.$mol_view_tree2_ts_value(operator);
            const child_sub = [
                $mol_view_tree2_prop_quote(info.name),
                info.name.data(': '),
            ];
            if (info.next || info.key)
                child_sub.push($mol_view_tree2_ts_function_declaration(info, context.types), opt.data(' => '));
            child_sub.push(...value);
            if (opt !== last)
                child_sub.push(opt.data(','));
            sub.push(opt.struct('line', child_sub));
        }
        return [
            dictionary.data('{'),
            dictionary.struct('indent', sub),
            dictionary.data('}'),
        ];
    }
    $.$mol_view_tree2_ts_dictionary = $mol_view_tree2_ts_dictionary;
})($ || ($ = {}));
//mol/view/tree2/ts/dictionary.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_factory(klass, factory, factory_context) {
        if (!/^[$A-Z]/.test(klass.type))
            return this.$mol_fail(err `Need a valid class name at ${klass.span}, use ${example}`);
        const obj_node = klass.data('obj');
        const body = [];
        let last_array;
        let constructor_args;
        for (const child of klass.kids) {
            const child_parts = this.$mol_view_tree2_prop_split(child);
            const context = factory_context.parent(child_parts);
            if (child.type[0] === '/') {
                if (last_array)
                    return this.$mol_fail(err `Only one \`/\` operator allowed in factory at ${child.span}, prev at ${last_array.span}`);
                last_array = child;
                constructor_args = this.$mol_view_tree2_ts_array_body(child, context);
                continue;
            }
            const operator = this.$mol_view_tree2_child(child);
            const type = operator.type;
            let value;
            if (type === '<=')
                value = this.$mol_view_tree2_ts_bind_left(operator, context, child_parts);
            else if (type === '<=>')
                value = this.$mol_view_tree2_ts_bind_both(operator, context);
            else if (type === '=>') {
                this.$mol_view_tree2_ts_bind_right(operator, child_parts, factory, factory_context);
                continue;
            }
            else if (type === '@')
                value = this.$mol_view_tree2_ts_locale(operator, context);
            else if (type === '*')
                value = [child.struct('line', [
                        child.data('('),
                        ...this.$mol_view_tree2_ts_dictionary(operator, context),
                        child.data(')'),
                    ])];
            else if (type[0] === '/')
                value = this.$mol_view_tree2_ts_array(operator, context);
            else
                value = this.$mol_view_tree2_ts_value(operator);
            const call = child.struct('line', [
                obj_node,
                child.data('.'),
                child_parts.name,
                child_parts.name.data(' = '),
                $mol_view_tree2_ts_function_declaration(child_parts, context.types),
                child.data(' => '),
                ...value,
            ]);
            body.push(call);
        }
        const init = [
            klass.data('const '),
            obj_node,
            klass.data(' = new this.$.'),
            klass.data(klass.type),
        ];
        if (constructor_args)
            init.push(klass.data('('), constructor_args, klass.data(')'));
        else
            init.push(klass.data('()'));
        const sub = [
            klass.struct('line', init),
            klass.data(''),
        ];
        if (body.length > 0)
            sub.push(...body);
        if (body.length > 0 && !constructor_args)
            sub.push(klass.data(''));
        sub.push(obj_node.struct('line', [
            klass.data('return '),
            obj_node
        ]));
        return klass.struct('indent', sub);
    }
    $.$mol_view_tree2_ts_factory = $mol_view_tree2_ts_factory;
    const example = new $mol_view_tree2_error_suggestions([
        'Factory_name!key?next $' + 'my_class'
    ]);
})($ || ($ = {}));
//mol/view/tree2/ts/factory.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_array_body(operator, parent_context, super_method) {
        if (operator.type[0] !== '/')
            return this.$mol_fail(err `Need a \`/\` at ${operator.span}`);
        const spread = new this.$mol_view_tree2_ts_spread_factory(this, super_method);
        const context = parent_context.locale_disable(operator);
        const kids = operator.kids;
        const last = kids.length > 0 ? kids[kids.length - 1] : undefined;
        const sub = [];
        for (const opt of kids) {
            const type = opt.type;
            let value;
            if (type === '^')
                value = [spread.create(opt)];
            else if (type === '<=')
                value = this.$mol_view_tree2_ts_bind_left(opt, context);
            else if (type === '*')
                value = this.$mol_view_tree2_ts_dictionary(opt, context);
            else if (type[0] === '/')
                value = this.$mol_view_tree2_ts_array(opt, context);
            else
                value = this.$mol_view_tree2_ts_value(opt);
            const child_sub = value;
            if (opt !== last)
                child_sub.push(operator.data(','));
            sub.push(opt.struct('line', child_sub));
        }
        return operator.struct('indent', sub);
    }
    $.$mol_view_tree2_ts_array_body = $mol_view_tree2_ts_array_body;
})($ || ($ = {}));
//mol/view/tree2/ts/array/body.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_array(operator, context, super_method) {
        if (operator.type[0] !== '/')
            return this.$mol_fail(err `Need a \`/\` at ${operator.span}`);
        const type_str = operator.type.substring(1);
        const type_body = [
            operator.data('] as '),
        ];
        if (type_str === '') {
            type_body.push(operator.data('readonly any[]'));
        }
        else if (type_str === 'const') {
            type_body.push(operator.data('const'));
        }
        else {
            const type = $mol_tree2.data(type_str, [], operator.span.slice(1, type_str.length));
            const is_array = type.value.indexOf('[') !== -1;
            type_body.push(operator.data('readonly '));
            if (is_array)
                type_body.push(operator.data('('));
            type_body.push(type);
            if (is_array)
                type_body.push(operator.data(')'));
            type_body.push(operator.data('[]'));
        }
        const body = this.$mol_view_tree2_ts_array_body(operator, context, super_method);
        return [
            operator.data('['),
            body,
            operator.struct('line', type_body)
        ];
    }
    $.$mol_view_tree2_ts_array = $mol_view_tree2_ts_array;
})($ || ($ = {}));
//mol/view/tree2/ts/array/array.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function $mol_view_tree2_ts_method_body(having_parts, parent_context) {
        const context = parent_context.parent(having_parts);
        const having = having_parts.src;
        const operator = having.kids.length === 1 ? having.kids[0] : undefined;
        if (!operator)
            return this.$mol_fail(err `Need an child part in a class body at ${having.span}`);
        const type = operator.type;
        const index = context.index(having_parts);
        let body;
        if (type === '<=')
            body = add_return(operator, this.$mol_view_tree2_ts_bind_left(operator, context, having_parts));
        else if (type === '<=>')
            body = add_return(operator, this.$mol_view_tree2_ts_bind_both(operator, context));
        else if (type === '@')
            body = add_return(operator, this.$mol_view_tree2_ts_locale(operator, context));
        else if (type === '*')
            body = add_return(operator, this.$mol_view_tree2_ts_dictionary(operator, context, having_parts));
        else if (type[0] === '/')
            body = add_return(operator, this.$mol_view_tree2_ts_array(operator, context, having_parts));
        else if (/^[$A-Z]/.test(type))
            body = this.$mol_view_tree2_ts_factory(operator, having_parts, context);
        else
            body = add_return(operator, this.$mol_view_tree2_ts_value(operator));
        const method = this.$mol_view_tree2_ts_method(having_parts, body, context.types);
        context.method(index, method);
    }
    $.$mol_view_tree2_ts_method_body = $mol_view_tree2_ts_method_body;
    function add_return(op, value) {
        return op.struct('indent', [
            op.struct('line', [
                op.data('return '),
                ...value
            ])
        ]);
    }
})($ || ($ = {}));
//mol/view/tree2/ts/method/body.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_method(owner_parts, body, types = false) {
        const { name, key, next, src } = owner_parts;
        const operator = src.kids.length === 1 ? src.kids[0] : undefined;
        const type = operator?.type;
        const is_class = type && /^[$A-Z]/.test(type);
        const is_delegate = type === '<=' || type === '<=>';
        let need_cache = false;
        if (is_delegate)
            need_cache = false;
        else if (next !== undefined)
            need_cache = true;
        else if (is_class)
            need_cache = true;
        const sub = this.$mol_view_tree2_ts_comment_doc(src);
        if (need_cache && key)
            sub.push(name.data(`@ $${''}mol_mem_key`));
        if (need_cache && !key)
            sub.push(name.data(`@ $${''}mol_mem`));
        sub.push(name.struct('line', [
            name,
            $mol_view_tree2_ts_function_declaration(owner_parts, types),
            name.data(' {'),
        ]));
        if (next && need_cache)
            sub.push(next.struct('indent', [
                next.struct('line', [
                    next.data('if ( '),
                    next,
                    next.data(' !== undefined ) return '),
                    next,
                    next.data(' as never'),
                ])
            ]));
        sub.push(body, name.data('}'));
        return sub;
    }
    $.$mol_view_tree2_ts_method = $mol_view_tree2_ts_method;
})($ || ($ = {}));
//mol/view/tree2/ts/method/method.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_to_text(tree2_module) {
        const locales = {};
        const ts_module = this.$mol_view_tree2_ts_module(tree2_module, locales);
        return ts_module;
    }
    $.$mol_view_tree2_to_text = $mol_view_tree2_to_text;
})($ || ($ = {}));
//mol/view/tree2/to/text/text.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));
//mol/tree2/from/json/json.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_json(tree) {
        if (!tree.type)
            return tree.text();
        if (tree.type === '-')
            return undefined;
        if (tree.type === 'true')
            return true;
        if (tree.type === 'false')
            return false;
        if (tree.type === 'null')
            return null;
        if (tree.type === '*') {
            const obj = {};
            for (const kid of tree.kids) {
                if (kid.type === '-')
                    continue;
                const key = kid.type || kid.clone(kid.kids.slice(0, -1)).text();
                const val = this.$mol_tree2_to_json(kid.kids[kid.kids.length - 1]);
                if (val !== undefined)
                    obj[key] = val;
            }
            return obj;
        }
        if (tree.type === '/') {
            const res = [];
            for (const kid of tree.kids) {
                if (kid.type === '-')
                    continue;
                var val = this.$mol_tree2_to_json(kid);
                if (val !== undefined)
                    res.push(val);
            }
            return res;
        }
        const numb = Number(tree.type);
        if (!Number.isNaN(numb) || tree.type === 'NaN')
            return numb;
        this.$mol_fail(new Error(`Unknown json type (${tree.type}) at ${tree.span}`));
    }
    $.$mol_tree2_to_json = $mol_tree2_to_json;
})($ || ($ = {}));
//mol/tree2/to/json/json.ts
;
"use strict";
var $;
(function ($) {
    const keywords = new Set([
        '',
        '.byte',
        '.sequence',
        '.set_of',
        '.optional',
        '.list_of',
        '.any_of',
        '.except',
        '.with_delimiter',
    ]);
    function $mol_tree2_grammar_check(grammar) {
        function visit(node) {
            check: {
                if (keywords.has(node.type))
                    break check;
                if (grammar.select(node.type).kids.length)
                    break check;
                $mol_fail(node.error(`Wrong pattern name`));
            }
            for (const kid of node.kids) {
                visit(kid);
            }
        }
        visit(grammar);
        return grammar;
    }
    $.$mol_tree2_grammar_check = $mol_tree2_grammar_check;
})($ || ($ = {}));
//mol/tree2/grammar/check/check.ts
;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));
//mol/html/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function attrs_belt(separator) {
        return {
            '': (input) => [
                input.data(' '),
                input.data($mol_html_encode(input.type)),
                ...input.value ? [
                    input.data('"'),
                    input.data($mol_html_encode(input.value)),
                    input.data('"'),
                ] : [],
                ...input.hack({
                    '': (input) => {
                        if (!input.type)
                            return [
                                input.data(separator),
                                input.data('"'),
                                input.data($mol_html_encode(input.text())),
                                input.data('"'),
                            ];
                        $mol_fail(new SyntaxError('Wrong attribute value'));
                    },
                }),
            ],
        };
    }
    function $mol_tree2_xml_to_text(xml) {
        return xml.list(xml.hack({
            '@': (input, belt) => [],
            '--': (input, belt) => [
                xml.struct('line', [
                    input.data('<!-- '),
                    ...input.hack(belt),
                    input.data(' -->'),
                ]),
            ],
            '?': (input, belt) => [
                xml.struct('line', [
                    input.data('<?'),
                    input.kids[0].data(input.kids[0].type),
                    ...input.kids[0].hack(attrs_belt('=')),
                    input.data('?>'),
                ]),
            ],
            '!': (input, belt) => [
                xml.struct('line', [
                    input.data('<!'),
                    input.kids[0].data(input.kids[0].type),
                    ...input.kids[0].hack(attrs_belt(' ')),
                    input.data('>'),
                ]),
            ],
            '': (input, belt) => {
                if (!input.type)
                    return [
                        input.data($mol_html_encode(input.text())),
                    ];
                const attrs = input.select('@', null).hack(attrs_belt('='));
                const content = input.hack(belt);
                return [
                    input.struct('line', [
                        input.data(`<`),
                        input.data(input.type),
                        ...attrs,
                        ...content.length ? [
                            input.data(`>`),
                            input.struct('indent', content),
                            input.data(`</`),
                            input.data(input.type),
                            input.data(`>`),
                        ] : [
                            input.data(` />`),
                        ]
                    ]),
                ];
            },
        }));
    }
    $.$mol_tree2_xml_to_text = $mol_tree2_xml_to_text;
})($ || ($ = {}));
//mol/tree2/xml/to/text/text.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_xml_from_dom(dom) {
        switch (dom.nodeType) {
            case dom.DOCUMENT_NODE: {
                let kids = [];
                for (const kid of dom.childNodes) {
                    kids.push($mol_tree2_xml_from_dom(kid));
                }
                return $mol_tree2.list(kids);
            }
            case dom.PROCESSING_INSTRUCTION_NODE: {
                return $mol_tree2.struct('?', [
                    $mol_tree2.struct(dom.nodeName, dom.nodeValue.split(' ').map(chunk => {
                        const [, name, value] = /^(.*?)(?:="(.*?)")?$/.exec(chunk);
                        const kids = value ? [$mol_tree2.data(value)] : [];
                        return $mol_tree2.struct(name, kids);
                    }))
                ]);
            }
            case dom.DOCUMENT_TYPE_NODE: {
                const dom2 = dom;
                return $mol_tree2.struct('!', [
                    $mol_tree2.struct('DOCTYPE', [
                        $mol_tree2.struct(dom2.name)
                    ])
                ]);
            }
            case dom.ELEMENT_NODE: {
                let kids = [];
                for (const attr of dom.attributes) {
                    kids.push($mol_tree2.struct('@', [
                        $mol_tree2.struct(attr.nodeName, [
                            $mol_tree2.data(attr.nodeValue)
                        ])
                    ]));
                }
                for (const kid of dom.childNodes) {
                    const k = $mol_tree2_xml_from_dom(kid);
                    if (k.type || k.value)
                        kids.push(k);
                }
                return $mol_tree2.struct(dom.nodeName, kids);
            }
            case dom.COMMENT_NODE: {
                return $mol_tree2.struct('--', [
                    $mol_tree2.data(dom.nodeValue)
                ]);
            }
            case dom.TEXT_NODE: {
                if (!dom.nodeValue.trim())
                    return $mol_tree2.list([]);
                return $mol_tree2.data(dom.nodeValue.replace(/\s+/g, ' '));
            }
        }
        return $mol_fail(new Error(`Unsupported node ${dom.nodeName}`));
    }
    $.$mol_tree2_xml_from_dom = $mol_tree2_xml_from_dom;
})($ || ($ = {}));
//mol/tree2/xml/from/dom/dom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_js_to_text(js) {
        function sequence(open, separator, close) {
            return (input, belt) => [
                input.struct('line', [
                    ...open ? [input.data(open)] : [],
                    input.struct(separator && input.kids.length > 2 ? 'indent' : 'line', [].concat(...input.kids.map((kid, index) => [
                        kid.struct('line', [
                            ...kid.list([kid]).hack(belt),
                            ...(separator && index < input.kids.length - 1) ? [input.data(separator)] : [],
                        ]),
                    ]))),
                    ...close ? [input.data(close)] : [],
                ]),
            ];
        }
        function block(open, separator, close) {
            return (input, belt) => [
                ...open ? [input.data(open)] : [],
                ...input.kids.length === 0 ? [] : [input.struct('indent', input.kids.map((kid, index) => kid.struct('line', [
                        ...kid.list([kid]).hack(belt),
                        ...(separator) ? [input.data(separator)] : [],
                    ])))],
                ...close ? [input.data(close)] : [],
            ];
        }
        function duplet(open, separator, close) {
            return (input, belt) => [
                input.struct('line', [
                    ...open ? [input.data(open)] : [],
                    ...input.list(input.kids.slice(0, 1)).hack(belt),
                    ...(separator && input.kids.length > 1) ? [input.data(separator)] : [],
                    ...input.list(input.kids.slice(1, 2)).hack(belt),
                    ...close ? [input.data(close)] : [],
                ]),
            ];
        }
        function triplet(open, separator12, separator23, close) {
            return (input, belt) => [
                input.struct('line', [
                    ...open ? [input.data(open)] : [],
                    ...input.list(input.kids.slice(0, 1)).hack(belt),
                    ...(separator12 && input.kids.length > 1) ? [input.data(separator12)] : [],
                    ...input.list(input.kids.slice(1, 2)).hack(belt),
                    ...(separator23 && input.kids.length > 2) ? [input.data(separator23)] : [],
                    ...input.list(input.kids.slice(2, 3)).hack(belt),
                    ...close ? [input.data(close)] : [],
                ]),
            ];
        }
        return js.list(js.hack({
            '+': sequence('+'),
            '-': sequence('-'),
            '!': sequence('!'),
            '~': sequence('~'),
            'return': sequence('return '),
            'break': sequence('break '),
            'continue': sequence('continue '),
            'yield': sequence('yield '),
            'yield*': sequence('yield* '),
            'await': sequence('await '),
            'void': sequence('void '),
            'delete': sequence('delete '),
            'typeof': sequence('typeof '),
            'new': sequence('new '),
            '...': sequence('...'),
            '@++': sequence('', '', '++'),
            '@--': sequence('', '', '--'),
            '(in)': sequence('(', ' in ', ')'),
            '(instanceof)': sequence('(', ' instanceof ', ')'),
            '(+)': sequence('(', ' + ', ')'),
            '(-)': sequence('(', ' - ', ')'),
            '(*)': sequence('(', ' * ', ')'),
            '(/)': sequence('(', ' / ', ')'),
            '(%)': sequence('(', ' % ', ')'),
            '(**)': sequence('(', ' ** ', ')'),
            '(<)': sequence('(', ' < ', ')'),
            '(<=)': sequence('(', ' <= ', ')'),
            '(>)': sequence('(', ' > ', ')'),
            '(>=)': sequence('(', ' >= ', ')'),
            '(==)': sequence('(', ' == ', ')'),
            '(!=)': sequence('(', ' != ', ')'),
            '(===)': sequence('(', ' === ', ')'),
            '(!==)': sequence('(', ' !== ', ')'),
            '(<<)': sequence('(', ' << ', ')'),
            '(>>)': sequence('(', ' >> ', ')'),
            '(>>>)': sequence('(', ' >>> ', ')'),
            '(&)': sequence('(', ' & ', ')'),
            '(|)': sequence('(', ' | ', ')'),
            '(^)': sequence('(', ' ^ ', ')'),
            '(&&)': sequence('(', ' && ', ')'),
            '(||)': sequence('(', ' || ', ')'),
            '(,)': sequence('(', ', ', ')'),
            '{;}': block('{', ';', '}'),
            ';': block('', ';', ''),
            '[,]': sequence('[', ', ', ']'),
            '{,}': sequence('{', ', ', '}'),
            '()': sequence('(', '', ')'),
            '{}': block('{', '', '}'),
            '[]': (input, belt) => {
                const first = input.kids[0];
                if (first.type)
                    return sequence('[', '', ']')(input, belt);
                else
                    return [input.data('.' + first.text())];
            },
            ':': (input, belt) => {
                const first = input.kids[0];
                if (first.type)
                    return duplet('[', ']: ')(input, belt);
                else
                    return duplet('', ': ')(input, belt);
            },
            'let': duplet('let ', ' = '),
            'const': duplet('const ', ' = '),
            'var': duplet('var ', ' = '),
            '=': duplet('', ' = '),
            '+=': duplet('', ' += '),
            '-=': duplet('', ' -= '),
            '*=': duplet('', ' *= '),
            '/=': duplet('', ' /= '),
            '%=': duplet('', ' %= '),
            '**=': duplet('', ' **= '),
            '<<=': duplet('', ' <<= '),
            '>>=': duplet('', ' >>= '),
            '>>>=': duplet('', ' >>>= '),
            '&=': duplet('', ' &= '),
            '|=': duplet('', ' |= '),
            '^=': duplet('', ' ^= '),
            '&&=': duplet('', ' &&= '),
            '||=': duplet('', ' ||= '),
            '=>': duplet('', ' => '),
            'async=>': duplet('async ', ' => '),
            'function': triplet('function '),
            'function*': triplet('function* '),
            'async': triplet('async function '),
            'async*': triplet('async function* '),
            'class': triplet('class ', ' '),
            'extends': sequence('extends ', '', ' '),
            'if': triplet('if', ' ', 'else'),
            '?:': triplet('', ' ? ', ' : '),
            '.': (input, belt) => {
                const first = input.kids[0];
                if (first.type)
                    return triplet('[', ']')(input, belt);
                else
                    return [
                        input.data(first.text()),
                        ...input.list(input.kids.slice(1)).hack(belt),
                    ];
            },
            'get': triplet('get [', ']'),
            'set': triplet('set [', ']'),
            'static': triplet('static [', ']'),
            '/./': sequence(),
            '.global': sequence('g'),
            '.multiline': sequence('m'),
            '.ignoreCase': sequence('i'),
            '.source': (input, belt) => [
                input.data('/'),
                input.data(JSON.stringify(input.text()).slice(1, -1)),
                input.data('/'),
            ],
            '``': (input, belt) => {
                return [
                    input.struct('line', [
                        input.data('`'),
                        ...[].concat(...input.kids.map(kid => {
                            if (kid.type) {
                                return [
                                    kid.data('${'),
                                    ...kid.list([kid]).hack(belt),
                                    kid.data('}'),
                                ];
                            }
                            else {
                                return [
                                    input.data(JSON.stringify(kid.text()).slice(1, -1)),
                                ];
                            }
                        })),
                        input.data('`'),
                    ]),
                ];
            },
            '': (input, belt) => {
                if (!input.type)
                    return [
                        input.data(JSON.stringify(input.text())),
                    ];
                if (/^[\w$#][\w0-9$]*$/i.test(input.type))
                    return [
                        input.data(input.type),
                    ];
                if (input.type === 'NaN' || !Number.isNaN(Number(input.type)))
                    return [
                        input.data(input.type)
                    ];
                $mol_fail(new SyntaxError(`Wrong node type`));
            },
        }));
    }
    $.$mol_tree2_js_to_text = $mol_tree2_js_to_text;
})($ || ($ = {}));
//mol/tree2/js/to/text/text.ts
;
"use strict";
var $;
(function ($) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    function $mol_vlq_encode(val) {
        const sign = val < 0 ? 1 : 0;
        if (sign)
            val = -val;
        let index = sign | ((val & 0b1111) << 1);
        val >>>= 4;
        let res = '';
        while (val) {
            index |= 1 << 5;
            res += alphabet[index];
            if (!val)
                break;
            index = val & 0b11111;
            val >>>= 5;
        }
        res += alphabet[index];
        return res;
    }
    $.$mol_vlq_encode = $mol_vlq_encode;
})($ || ($ = {}));
//mol/vlq/vlq.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_sourcemap(tree) {
        let col = 1;
        let prev_span;
        let prev_index = 0;
        let prev_col = 1;
        let mappings = '';
        let line = [];
        const file_indexes = new Map();
        const file_sources = new Map();
        function span2index(span) {
            if (file_indexes.has(span.uri))
                return file_indexes.get(span.uri);
            const index = file_indexes.size;
            file_indexes.set(span.uri, index);
            file_sources.set(span.uri, span.source);
            return index;
        }
        function next_line() {
            if (!line.length)
                return;
            mappings += line.join(',') + ';';
            line = [];
            col = 1;
            prev_col = 1;
        }
        function visit(text, prefix, inline) {
            function indent() {
                col += prefix;
            }
            if (inline && text.type === 'indent')
                next_line();
            if (prev_span !== text.span || col === 1) {
                const index = span2index(text.span);
                line.push($mol_vlq_encode(col - prev_col) +
                    $mol_vlq_encode(index - prev_index) +
                    $mol_vlq_encode(text.span.row - (prev_span?.row ?? 1)) +
                    $mol_vlq_encode(text.span.col - (prev_span?.col ?? 1)));
                prev_col = col;
                prev_span = text.span;
                prev_index = index;
            }
            if (text.type === 'indent') {
                for (let kid of text.kids) {
                    visit(kid, prefix + 1, false);
                }
                if (inline)
                    next_line();
            }
            else if (text.type === 'line') {
                if (!inline)
                    indent();
                for (let kid of text.kids) {
                    visit(kid, prefix, true);
                }
                if (!inline)
                    next_line();
            }
            else {
                if (!inline)
                    indent();
                col += text.text().length;
                if (!inline)
                    next_line();
            }
        }
        for (let kid of tree.kids) {
            visit(kid, 0, false);
        }
        next_line();
        const map = {
            version: 3,
            sources: [...file_sources.keys()],
            sourcesContent: [...file_sources.values()],
            mappings,
        };
        return map;
    }
    $.$mol_tree2_text_to_sourcemap = $mol_tree2_text_to_sourcemap;
})($ || ($ = {}));
//mol/tree2/text/to/sourcemap/sourcemap.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_string_mapped(text, type) {
        const code = this.$mol_tree2_text_to_string(text);
        const map = this.$mol_tree2_text_to_sourcemap(text);
        map.mappings = ';;' + map.mappings;
        let res = code;
        const map_uri = `data:application/json,${this.encodeURIComponent(JSON.stringify(map))}`;
        if (type === 'js')
            res += `\n//# sourceMappingURL=${map_uri}`;
        else
            res += `\n/*# sourceMappingURL=${map_uri} */`;
        return res;
    }
    $.$mol_tree2_text_to_string_mapped = $mol_tree2_text_to_string_mapped;
    function $mol_tree2_text_to_string_mapped_js(text) {
        return this.$mol_tree2_text_to_string_mapped(text, 'js');
    }
    $.$mol_tree2_text_to_string_mapped_js = $mol_tree2_text_to_string_mapped_js;
    function $mol_tree2_text_to_string_mapped_css(text) {
        return this.$mol_tree2_text_to_string_mapped(text, 'css');
    }
    $.$mol_tree2_text_to_string_mapped_css = $mol_tree2_text_to_string_mapped_css;
})($ || ($ = {}));
//mol/tree2/text/to/string/mapped/mapped.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_sourcemap_vis(text) {
        const code = this.$mol_tree2_text_to_string(text);
        const map = this.$mol_tree2_text_to_sourcemap(text);
        const uri = [
            'https://sokra.github.io/source-map-visualization/#base64',
            btoa(code),
            btoa(JSON.stringify(map)),
            ...map.sourcesContent.map(btoa),
        ].join(',');
        return uri;
    }
    $.$mol_tree2_text_to_sourcemap_vis = $mol_tree2_text_to_sourcemap_vis;
})($ || ($ = {}));
//mol/tree2/text/to/sourcemap/vis/vis.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_span_imprint(tree) {
        const sources = new Map();
        const res = tree.clone(tree.hack({
            '': (input, belt) => {
                if (!sources.has(input.span.uri)) {
                    sources.set(input.span.uri, tree.struct(input.span.uri, [
                        tree.data(input.span.source)
                    ]));
                }
                return [
                    input.clone([
                        input.data(input.span.toString()),
                        ...input.hack(belt),
                    ]),
                ];
            },
        }));
        return tree.clone([
            ...sources.values(),
            res,
        ]);
    }
    $.$mol_tree2_span_imprint = $mol_tree2_span_imprint;
})($ || ($ = {}));
//mol/tree2/span/imprint/imprint.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_span_reuse(tree) {
        const sources = new Map();
        return tree.clone(tree.hack({
            '': (input, belt) => {
                if (input.type) {
                    sources.set(input.type, input.kids[0].text());
                    return [];
                }
                return input.hack({
                    '': (input, belt) => {
                        const kids = input.list(input.kids.slice(1)).hack(belt);
                        const [_, uri, row, col, length] = /^(.*)#(\d+):(\d+)\/(\d+)$/.exec(input.kids[0].text());
                        const span = new $mol_span(uri, sources.get(uri), Number(row), Number(col), Number(length));
                        return [
                            new $mol_tree2(input.type, input.value, kids, span),
                        ];
                    },
                });
            },
        }));
    }
    $.$mol_tree2_span_reuse = $mol_tree2_span_reuse;
})($ || ($ = {}));
//mol/tree2/span/reuse/reuse.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_bin_to_bytes(tree) {
        return Uint8Array.from(tree.kids, kid => parseInt(kid.value, 16));
    }
    $.$mol_tree2_bin_to_bytes = $mol_tree2_bin_to_bytes;
    function $mol_tree2_bin_from_bytes(bytes, span) {
        return $mol_tree2.list(Array.from(bytes, code => {
            return $mol_tree2.data(code.toString(16).padStart(2, '0'), [], span);
        }), span);
    }
    $.$mol_tree2_bin_from_bytes = $mol_tree2_bin_from_bytes;
    function $mol_tree2_bin_from_string(str, span) {
        return $mol_tree2_bin_from_bytes([...new TextEncoder().encode(str)], span);
    }
    $.$mol_tree2_bin_from_string = $mol_tree2_bin_from_string;
})($ || ($ = {}));
//mol/tree2/bin/bin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_leb128_encode(val) {
        const length = Math.max(1, Math.ceil(Math.log2(val) / 7));
        const bytes = new Uint8Array(length);
        for (let i = 0; i < bytes.length; ++i) {
            bytes[i] = ((val >> (7 * i)) & 0xFF) | (1 << 7);
        }
        bytes[bytes.length - 1] ^= (1 << 7);
        return bytes;
    }
    $.$mol_leb128_encode = $mol_leb128_encode;
    function $mol_leb128_decode(bytes) {
        let val = 0;
        for (let i = 0; i < bytes.length; ++i) {
            val |= (bytes[i] & ~(1 << 7)) << (7 * i);
        }
        return val;
    }
    $.$mol_leb128_decode = $mol_leb128_decode;
})($ || ($ = {}));
//mol/leb128/leb128.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wasm_bin_section;
    (function ($mol_wasm_bin_section) {
        $mol_wasm_bin_section[$mol_wasm_bin_section["custom"] = 0] = "custom";
        $mol_wasm_bin_section[$mol_wasm_bin_section["type"] = 1] = "type";
        $mol_wasm_bin_section[$mol_wasm_bin_section["import"] = 2] = "import";
        $mol_wasm_bin_section[$mol_wasm_bin_section["func"] = 3] = "func";
        $mol_wasm_bin_section[$mol_wasm_bin_section["table"] = 4] = "table";
        $mol_wasm_bin_section[$mol_wasm_bin_section["memory"] = 5] = "memory";
        $mol_wasm_bin_section[$mol_wasm_bin_section["global"] = 6] = "global";
        $mol_wasm_bin_section[$mol_wasm_bin_section["export"] = 7] = "export";
        $mol_wasm_bin_section[$mol_wasm_bin_section["start"] = 8] = "start";
        $mol_wasm_bin_section[$mol_wasm_bin_section["element"] = 9] = "element";
        $mol_wasm_bin_section[$mol_wasm_bin_section["code"] = 10] = "code";
        $mol_wasm_bin_section[$mol_wasm_bin_section["data"] = 11] = "data";
    })($mol_wasm_bin_section = $.$mol_wasm_bin_section || ($.$mol_wasm_bin_section = {}));
    let $mol_wasm_bin_external;
    (function ($mol_wasm_bin_external) {
        $mol_wasm_bin_external[$mol_wasm_bin_external["func"] = 0] = "func";
        $mol_wasm_bin_external[$mol_wasm_bin_external["table"] = 1] = "table";
        $mol_wasm_bin_external[$mol_wasm_bin_external["mem"] = 2] = "mem";
        $mol_wasm_bin_external[$mol_wasm_bin_external["global"] = 3] = "global";
    })($mol_wasm_bin_external = $.$mol_wasm_bin_external || ($.$mol_wasm_bin_external = {}));
    let $mol_wasm_bin_valtype;
    (function ($mol_wasm_bin_valtype) {
        $mol_wasm_bin_valtype[$mol_wasm_bin_valtype["i32"] = 127] = "i32";
        $mol_wasm_bin_valtype[$mol_wasm_bin_valtype["i64"] = 126] = "i64";
        $mol_wasm_bin_valtype[$mol_wasm_bin_valtype["f32"] = 125] = "f32";
        $mol_wasm_bin_valtype[$mol_wasm_bin_valtype["f64"] = 124] = "f64";
    })($mol_wasm_bin_valtype = $.$mol_wasm_bin_valtype || ($.$mol_wasm_bin_valtype = {}));
    let $mol_wasm_bin_instr;
    (function ($mol_wasm_bin_instr) {
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["block"] = 2] = "block";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["loop"] = 3] = "loop";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["if"] = 4] = "if";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["else"] = 5] = "else";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["br"] = 12] = "br";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["br_if"] = 13] = "br_if";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["br_table"] = 14] = "br_table";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["call"] = 16] = "call";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["call_indirect"] = 17] = "call_indirect";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["ref.null"] = 208] = "ref.null";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["ref.is_null"] = 209] = "ref.is_null";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["ref.func"] = 210] = "ref.func";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["drop"] = 26] = "drop";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["select"] = 27] = "select";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["select2"] = 28] = "select2";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["memory.size"] = 63] = "memory.size";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["memory.grow"] = 64] = "memory.grow";
        $mol_wasm_bin_instr[$mol_wasm_bin_instr["mem"] = 252] = "mem";
    })($mol_wasm_bin_instr = $.$mol_wasm_bin_instr || ($.$mol_wasm_bin_instr = {}));
    let $mol_wasm_bin_instr_nullary;
    (function ($mol_wasm_bin_instr_nullary) {
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["unreachable"] = 0] = "unreachable";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["nop"] = 1] = "nop";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["end"] = 11] = "end";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["return"] = 15] = "return";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.eqz"] = 69] = "i32.eqz";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.eq"] = 70] = "i32.eq";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.ne"] = 71] = "i32.ne";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.lt_s"] = 72] = "i32.lt_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.lt_u"] = 73] = "i32.lt_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.gt_s"] = 74] = "i32.gt_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.gt_u"] = 75] = "i32.gt_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.le_s"] = 76] = "i32.le_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.le_u"] = 77] = "i32.le_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.ge_s"] = 78] = "i32.ge_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.ge_u"] = 79] = "i32.ge_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.eqz"] = 80] = "i64.eqz";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.eq"] = 81] = "i64.eq";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.ne"] = 82] = "i64.ne";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.lt_s"] = 83] = "i64.lt_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.lt_u"] = 84] = "i64.lt_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.gt_s"] = 85] = "i64.gt_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.gt_u"] = 86] = "i64.gt_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.le_s"] = 87] = "i64.le_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.le_u"] = 88] = "i64.le_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.ge_s"] = 89] = "i64.ge_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.ge_u"] = 90] = "i64.ge_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f32.eq"] = 91] = "f32.eq";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f32.ne"] = 92] = "f32.ne";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f32.lt"] = 93] = "f32.lt";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f32.gt"] = 94] = "f32.gt";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f32.le"] = 95] = "f32.le";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f32.ge"] = 96] = "f32.ge";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f64.eq"] = 97] = "f64.eq";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f64.ne"] = 98] = "f64.ne";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f64.lt"] = 99] = "f64.lt";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f64.gt"] = 100] = "f64.gt";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f64.le"] = 101] = "f64.le";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["f64.ge"] = 102] = "f64.ge";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.clz"] = 103] = "i32.clz";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.ctz"] = 104] = "i32.ctz";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.popcnt"] = 105] = "i32.popcnt";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.add"] = 106] = "i32.add";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.sub"] = 107] = "i32.sub";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.mul"] = 108] = "i32.mul";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.div_s"] = 109] = "i32.div_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.div_u"] = 110] = "i32.div_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.rem_s"] = 111] = "i32.rem_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.rem_u"] = 112] = "i32.rem_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.and"] = 113] = "i32.and";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.or"] = 114] = "i32.or";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.xor"] = 115] = "i32.xor";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.shl"] = 116] = "i32.shl";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.shr_s"] = 117] = "i32.shr_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.shr_u"] = 118] = "i32.shr_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.rotl"] = 119] = "i32.rotl";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i32.rotr"] = 120] = "i32.rotr";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.clz"] = 121] = "i64.clz";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.ctz"] = 122] = "i64.ctz";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.popcnt"] = 123] = "i64.popcnt";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.add"] = 124] = "i64.add";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.sub"] = 125] = "i64.sub";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.mul"] = 126] = "i64.mul";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.div_s"] = 127] = "i64.div_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.div_u"] = 128] = "i64.div_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.rem_s"] = 129] = "i64.rem_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.rem_u"] = 130] = "i64.rem_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.and"] = 131] = "i64.and";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.or"] = 132] = "i64.or";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.xor"] = 133] = "i64.xor";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.shl"] = 134] = "i64.shl";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.shr_s"] = 135] = "i64.shr_s";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.shr_u"] = 136] = "i64.shr_u";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.rotl"] = 137] = "i64.rotl";
        $mol_wasm_bin_instr_nullary[$mol_wasm_bin_instr_nullary["i64.rotr"] = 138] = "i64.rotr";
    })($mol_wasm_bin_instr_nullary = $.$mol_wasm_bin_instr_nullary || ($.$mol_wasm_bin_instr_nullary = {}));
    let $mol_wasm_bin_instr_unary;
    (function ($mol_wasm_bin_instr_unary) {
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["local.get"] = 32] = "local.get";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["local.set"] = 33] = "local.set";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["local.tee"] = 34] = "local.tee";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["global.get"] = 35] = "global.get";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["global.set"] = 36] = "global.set";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["table.get"] = 37] = "table.get";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["table.set"] = 38] = "table.set";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["i32.const"] = 65] = "i32.const";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["i64.const"] = 66] = "i64.const";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["f32.const"] = 67] = "f32.const";
        $mol_wasm_bin_instr_unary[$mol_wasm_bin_instr_unary["f64.const"] = 68] = "f64.const";
    })($mol_wasm_bin_instr_unary = $.$mol_wasm_bin_instr_unary || ($.$mol_wasm_bin_instr_unary = {}));
    let $mol_wasm_bin_instr_binary;
    (function ($mol_wasm_bin_instr_binary) {
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.load"] = 40] = "i32.load";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load"] = 41] = "i64.load";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["f32.load"] = 42] = "f32.load";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["f64.load"] = 43] = "f64.load";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.load8_s"] = 44] = "i32.load8_s";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.load8_u"] = 45] = "i32.load8_u";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.load16_s"] = 46] = "i32.load16_s";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.load16_u"] = 47] = "i32.load16_u";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load8_s"] = 48] = "i64.load8_s";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load8_u"] = 49] = "i64.load8_u";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load16_s"] = 50] = "i64.load16_s";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load16_u"] = 51] = "i64.load16_u";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load32_s"] = 52] = "i64.load32_s";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.load32_u"] = 53] = "i64.load32_u";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.store"] = 54] = "i32.store";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.store"] = 55] = "i64.store";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["f32.store"] = 56] = "f32.store";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["f64.store"] = 57] = "f64.store";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.store8"] = 58] = "i32.store8";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i32.store16"] = 59] = "i32.store16";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.store8"] = 60] = "i64.store8";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.store16"] = 61] = "i64.store16";
        $mol_wasm_bin_instr_binary[$mol_wasm_bin_instr_binary["i64.store32"] = 62] = "i64.store32";
    })($mol_wasm_bin_instr_binary = $.$mol_wasm_bin_instr_binary || ($.$mol_wasm_bin_instr_binary = {}));
    let $mol_wasm_bin_instr_mem;
    (function ($mol_wasm_bin_instr_mem) {
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i32.trunc_sat_f32_s"] = 0] = "i32.trunc_sat_f32_s";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i32.trunc_sat_f32_u"] = 1] = "i32.trunc_sat_f32_u";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i32.trunc_sat_f64_s"] = 2] = "i32.trunc_sat_f64_s";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i32.trunc_sat_f64_u"] = 3] = "i32.trunc_sat_f64_u";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i64.trunc_sat_f32_s"] = 4] = "i64.trunc_sat_f32_s";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i64.trunc_sat_f32_u"] = 5] = "i64.trunc_sat_f32_u";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i64.trunc_sat_f64_s"] = 6] = "i64.trunc_sat_f64_s";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["i64.trunc_sat_f64_u"] = 7] = "i64.trunc_sat_f64_u";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["memory.init"] = 8] = "memory.init";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["data.drop"] = 9] = "data.drop";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["memory.copy"] = 10] = "memory.copy";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["memory.fill"] = 11] = "memory.fill";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["table.init"] = 12] = "table.init";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["elem.drop"] = 13] = "elem.drop";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["table.copy"] = 14] = "table.copy";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["table.grow"] = 15] = "table.grow";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["table.size"] = 16] = "table.size";
        $mol_wasm_bin_instr_mem[$mol_wasm_bin_instr_mem["table.fill"] = 17] = "table.fill";
    })($mol_wasm_bin_instr_mem = $.$mol_wasm_bin_instr_mem || ($.$mol_wasm_bin_instr_mem = {}));
})($ || ($ = {}));
//mol/wasm/bin/bin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_wasm_to_bin(code) {
        const bytes = (bytes, span) => $mol_tree2_bin_from_bytes(bytes, span).kids;
        const int = (int, span) => bytes($mol_leb128_encode(int), span);
        const dyn = (items, span) => [...int(items.length, span), ...items];
        const str = (str, span) => dyn($mol_tree2_bin_from_string(str, span).kids, span);
        const array_prolog = (input, span = input.span) => int(input.kids.length, span);
        const pending = (input) => $mol_fail(input.error('Pending implementation'));
        const prolog = this.$mol_tree2_from_string(`
			\\00
			\\61
			\\73
			\\6D
			\\01
			\\00
			\\00
			\\00
		`, '$mol_tree2_wasm_to_bin_prolog');
        const body = [];
        const types_mapping = new Map();
        customs: {
            const customs = code.select('custom');
            for (const custom of customs.kids) {
                const name = custom.kids[0];
                const section = [];
                section.push(...str(name.type, name.span));
                body.push(...bytes([$mol_wasm_bin_section.custom], custom.span));
                body.push(...dyn(section, custom.span));
            }
        }
        types: {
            const types = code.select('type');
            if (types.kids.length === 0)
                break types;
            const section = [];
            for (const type of types.kids) {
                section.push(...bytes([0x60], type.span));
                const name = type.kids[0];
                types_mapping.set(name.type, types_mapping.size);
                const params = name.select('=>', null);
                section.push(...array_prolog(params));
                for (const param of params.kids) {
                    section.push(...bytes([$mol_wasm_bin_valtype[param.type]], param.span));
                }
                const results = name.select('<=', null);
                section.push(...array_prolog(results));
                for (const result of results.kids) {
                    section.push(...bytes([$mol_wasm_bin_valtype[result.type]], result.span));
                }
            }
            body.push(...bytes([$mol_wasm_bin_section.type], prolog.span), ...dyn([
                ...array_prolog(types, prolog.span),
                ...section,
            ], prolog.span));
        }
        imports: {
            const imports = code.select('import');
            if (imports.kids.length === 0)
                break imports;
            const section = [];
            for (const import_ of imports.kids) {
                const path = import_.kids[0];
                const kind = path.kids[0];
                for (const name of path.type.split('.')) {
                    section.push(...str(name, path.span));
                }
                if (kind.type === 'func') {
                    const name = kind.kids[0];
                    const index = types_mapping.get(name.type);
                    if (index === undefined)
                        this.$mol_fail(name.error('Unknown type'));
                    section.push(...bytes([$mol_wasm_bin_external.func], kind.span), ...int(index, name.span));
                }
            }
            body.push(...bytes([$mol_wasm_bin_section.import], prolog.span), ...dyn([
                ...array_prolog(imports, prolog.span),
                ...section,
            ], prolog.span));
        }
        funcs: {
            const funcs = code.select('func');
            if (funcs.kids.length === 0)
                break funcs;
            const section = [];
            for (const func of funcs.kids) {
                const name = func.kids[0];
                const index = types_mapping.get(name.type);
                if (index === undefined)
                    this.$mol_fail(name.error('Unknown type'));
                section.push(...int(index, name.span));
            }
            body.push(...bytes([$mol_wasm_bin_section.func], prolog.span), ...dyn([
                ...array_prolog(funcs, prolog.span),
                ...section,
            ], prolog.span));
        }
        exports: {
            const exports = code.select('export');
            if (exports.kids.length === 0)
                break exports;
            const section = [];
            for (const export_ of exports.kids) {
                const path = export_.kids[0];
                const kind = path.kids[0];
                section.push(...str(path.type, path.span));
                if (kind.type === 'func') {
                    const name = kind.kids[0];
                    const index = types_mapping.get(name.type);
                    if (index === undefined)
                        this.$mol_fail(name.error('Unknown type'));
                    section.push(...bytes([$mol_wasm_bin_external.func], kind.span), ...int(index, name.span));
                }
            }
            body.push(...bytes([$mol_wasm_bin_section.export], prolog.span), ...dyn([
                ...array_prolog(exports, prolog.span),
                ...section,
            ], prolog.span));
        }
        codes: {
            const funcs = code.select('func');
            if (funcs.kids.length === 0)
                break codes;
            const section = [];
            for (const func of funcs.kids) {
                const body = [];
                body.push(...int(0, func.span));
                for (const expr of func.kids[0].kids) {
                    if (typeof $mol_wasm_bin_instr_unary[expr.type] === 'number') {
                        body.push(...bytes([$mol_wasm_bin_instr_unary[expr.type]], expr.span), ...int(Number(expr.kids[0].type), expr.kids[0].span));
                        continue;
                    }
                    if (typeof $mol_wasm_bin_instr_nullary[expr.type] === 'number') {
                        body.push(...bytes([$mol_wasm_bin_instr_nullary[expr.type]], expr.span));
                        continue;
                    }
                    $mol_fail(expr.error('Unknown wasm instruction'));
                }
                body.push(...bytes([$mol_wasm_bin_instr_nullary.end], func.span));
                section.push(...dyn(body, func.span));
            }
            body.push(...bytes([$mol_wasm_bin_section.code], prolog.span), ...dyn([
                ...array_prolog(funcs, prolog.span),
                ...section,
            ], prolog.span));
        }
        return code.list([
            ...prolog.kids,
            ...body,
        ]);
    }
    $.$mol_tree2_wasm_to_bin = $mol_tree2_wasm_to_bin;
})($ || ($ = {}));
//mol/tree2/wasm/to/bin/bin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_to_locale(tree2_module) {
        const locales = {};
        this.$mol_view_tree2_ts_module(tree2_module, locales);
        return locales;
    }
    $.$mol_view_tree2_to_locale = $mol_view_tree2_to_locale;
})($ || ($ = {}));
//mol/view/tree2/to/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));
//mol/guard/defined.ts
;
"use strict";
//mol/type/enforce/enforce.ts
;
"use strict";
var $;
(function ($) {
    function name_of(prop) {
        return [...prop.type.matchAll($mol_view_tree2_prop_signature)][0].groups.name;
    }
    function params_of(prop, ...val) {
        const { key, next } = [...prop.type.matchAll($mol_view_tree2_prop_signature)][0].groups;
        return prop.struct('line', [
            prop.data('( '),
            ...key ? [
                prop.data('id'),
                prop.data(': any, '),
            ] : [],
            ...next ? [
                prop.data('next'),
                prop.data('?: '),
                ...val,
                prop.data(' '),
            ] : [],
            prop.data(')'),
        ]);
    }
    function $mol_view_tree2_to_dts(descr) {
        descr = $mol_view_tree2_classes(descr);
        const types = [];
        for (const klass of descr.kids) {
            const parent = klass.kids[0];
            const props = this.$mol_view_tree2_class_props(klass);
            const aliases = [];
            types.push(klass.struct('line', [
                klass.data('export class '),
                klass.data(klass.type),
                parent.data(' extends '),
                parent.data(parent.type),
                klass.data(' {'),
            ]), ...props.map(prop => {
                const { name, key, next } = [...prop.type.matchAll($mol_view_tree2_prop_signature)][0].groups;
                const bind_res = (bind) => [
                    bind.data('ReturnType< '),
                    klass.data(klass.type),
                    bind.data('["'),
                    bind.kids[0].data(name_of(bind.kids[0])),
                    bind.data('"] >'),
                ];
                const val = prop.hack({
                    'null': (val, belt) => [val.data('any')],
                    'true': (val, belt) => [val.data('boolean')],
                    'false': (val, belt) => [val.data('boolean')],
                    '@': (locale, belt) => locale.hack(belt),
                    '<=>': bind_res,
                    '<=': bind_res,
                    '=>': bind_res,
                    '*': (obj, belt) => [
                        ...obj.select('^').kids.map(inherit => inherit.struct('line', [
                            inherit.data('ReturnType< '),
                            parent.data(parent.type),
                            inherit.data('["'),
                            prop.data(name),
                            inherit.data('"] > & '),
                        ])),
                        obj.data('({ '),
                        obj.struct('indent', obj.kids.map(field => {
                            if (field.type === '^')
                                return null;
                            return field.struct('line', [
                                field.data(field.type),
                                field.data(': '),
                                ...field.hack(belt),
                                field.data(','),
                            ]);
                        }).filter(this.$mol_guard_defined)),
                        obj.data('})'),
                    ],
                    '': (input, belt) => {
                        if (input.type[0] === '/')
                            return [
                                input.data('readonly '),
                                input.data(input.type.slice(1)),
                                input.data('[]'),
                            ];
                        if (Number(input.type).toString() === input.type.replace(/^\+/, ''))
                            return [
                                input.data('number'),
                            ];
                        if (/^[$A-Z]/.test(input.type)) {
                            const first = input.kids[0];
                            if (first && first.type === '/') {
                                types.push(first.data(`type ${input.type}__${this.$mol_guid()} = $mol_type_enforce< `), first.struct('indent', [
                                    first.struct('line', [
                                        ...input.hack(belt),
                                        input.data(','),
                                    ]),
                                    input.data(`Parameters< ${input.type} >`),
                                ]), input.data('>'));
                            }
                            else {
                                for (const over of input.kids) {
                                    const name = name_of(over);
                                    const bind = over.kids[0];
                                    if (bind.type === '=>') {
                                        const pr = bind.kids[0];
                                        const res = [
                                            bind.data('ReturnType< '),
                                            klass.data(input.type),
                                            bind.data('["'),
                                            over.data(name),
                                            bind.data('"] >'),
                                        ];
                                        aliases.push(pr.struct('indent', [
                                            pr.struct('line', [
                                                pr.data(name_of(pr)),
                                                bind.data(': '),
                                                params_of(pr, ...res),
                                                bind.data('=> '),
                                                ...res,
                                            ]),
                                        ]));
                                    }
                                    types.push(over.data(`type ${input.type}__${name}_${this.$mol_guid()} = $mol_type_enforce< `), over.struct('indent', [
                                        over.struct('line', [
                                            ...over.hack(belt),
                                            input.data(','),
                                        ]),
                                        over.struct('line', [
                                            input.data('ReturnType< '),
                                            input.data(input.type),
                                            input.data('["'),
                                            over.data(name),
                                            input.data('"] >'),
                                        ]),
                                    ]), input.data('>'));
                                }
                            }
                            return [
                                input.data(input.type),
                            ];
                        }
                        return [
                            input.data(input.type || 'string'),
                        ];
                    },
                });
                return prop.struct('indent', [
                    prop.struct('line', [
                        prop.data(name),
                        params_of(prop, ...val),
                        prop.data(': '),
                        ...val,
                    ])
                ]);
            }), ...aliases, klass.data('}'), descr.data(''));
        }
        return descr.list([
            descr.data('declare namespace $ {'),
            descr.data(''),
            descr.struct('indent', types),
            descr.data('}'),
        ]);
    }
    $.$mol_view_tree2_to_dts = $mol_view_tree2_to_dts;
})($ || ($ = {}));
//mol/view/tree2/to/dts/dts.ts
;
"use strict";
var $;
(function ($) {
    const err = $mol_view_tree2_error_str;
    function prop_parts(prop) {
        return [...prop.type.matchAll($mol_view_tree2_prop_signature)][0].groups;
    }
    function name_of(prop) {
        return prop_parts(prop).name;
    }
    function params_of(prop, bidi = true) {
        const { key, next } = prop_parts(prop);
        return prop.struct('(,)', [
            ...key ? [prop.struct('id')] : [],
            ...(bidi && next) ? [prop.struct('next')] : [],
        ]);
    }
    function args_of(prop, bidi = true) {
        const { key, next } = prop_parts(prop);
        return prop.struct('(,)', [
            ...key ? [prop.data(key.length > 1 ? key.slice(1) : 'id')] : [],
            ...(bidi && next) ? [prop.struct('next')] : [],
        ]);
    }
    const localized_string = $$.$mol_tree2_from_string(`
		()
			this
			[] \\$
			[] \\$mol_locale
			[] \\text
			(,) #key
	`, 'localized_string');
    function klass_body(acc, prop) {
        const { klass, members, addons } = acc;
        const { name, key, next } = prop_parts(prop);
        const decorate = () => {
            return prop.struct('()', [
                prop.struct(key ? '$mol_mem_key' : '$mol_mem'),
                prop.struct('(,)', [
                    prop.struct('()', [
                        klass.struct('$'),
                        prop.struct('[]', [
                            klass.data(klass.type),
                        ]),
                        prop.struct('[]', [
                            prop.data('prototype'),
                        ]),
                    ]),
                    prop.data(name),
                ]),
            ]);
        };
        if (next)
            addons.push(decorate());
        const val = prop.hack({
            '@': (locale, belt) => localized_string.hack({
                '#key': key => [locale.data(`${klass.type}_${name}`)],
            }),
            '<=': bind => [
                bind.struct('()', [
                    bind.kids[0].struct('this'),
                    bind.kids[0].struct('[]', [
                        bind.kids[0].data(name_of(bind.kids[0])),
                    ]),
                    args_of(bind.kids[0], false),
                ]),
            ],
            '<=>': bind => [
                bind.struct('()', [
                    bind.kids[0].struct('this'),
                    bind.kids[0].struct('[]', [
                        bind.kids[0].data(name_of(bind.kids[0])),
                    ]),
                    args_of(bind.kids[0], true),
                ]),
            ],
            '=>': bind => [],
            '^': (ref) => [
                ref.struct('...', [
                    ref.struct('()', [
                        ref.struct('super'),
                        ref.struct('[]', [
                            ref.data(name),
                        ]),
                        ref.struct('(,)')
                    ]),
                ]),
            ],
            '*': (obj, belt) => [
                obj.struct('{,}', obj.kids.map(field => {
                    if (field.type === '^')
                        return field.list([field]).hack(belt)[0];
                    return field.struct(':', [
                        field.data(name_of(field)),
                        field.kids[0].type === '<=>'
                            ? field.struct('=>', [
                                params_of(field),
                                ...field.hack(belt),
                            ])
                            : field.hack(belt)[0],
                    ]);
                }).filter(this.$mol_guard_defined)),
            ],
            '': (input, belt) => {
                if (input.type[0] === '/')
                    return [
                        input.struct('[,]', input.hack(belt)),
                    ];
                if (/^[$A-Z]/.test(input.type)) {
                    if (!next)
                        addons.push(decorate());
                    const overrides = [];
                    for (const over of input.kids) {
                        if (over.type === '/')
                            continue;
                        const oname = name_of(over);
                        const bind = over.kids[0];
                        if (bind.type === '@') {
                            overrides.push(over.struct('=', [
                                over.struct('()', [
                                    over.struct('obj'),
                                    over.struct('[]', [
                                        over.data(oname),
                                    ]),
                                ]),
                                over.struct('=>', [
                                    params_of(over),
                                    ...localized_string.hack({
                                        '#key': key => [bind.data(`${klass.type}_${name}_${oname}`)],
                                    }),
                                ]),
                            ]));
                        }
                        else if (bind.type === '=>') {
                            const pr = bind.kids[0];
                            members.push(pr.struct('.', [
                                pr.data(name_of(pr)),
                                params_of(pr),
                                bind.struct('{;}', [
                                    over.struct('return', [
                                        over.struct('()', [
                                            over.struct('this'),
                                            over.struct('[]', [
                                                over.data(oname),
                                            ]),
                                            args_of(over),
                                        ]),
                                    ])
                                ]),
                            ]));
                        }
                        else {
                            overrides.push(over.struct('=', [
                                over.struct('()', [
                                    over.struct('obj'),
                                    over.struct('[]', [
                                        over.data(oname),
                                    ]),
                                ]),
                                over.struct('=>', [
                                    args_of(over),
                                    over.struct('()', over.hack(belt)),
                                ]),
                            ]));
                        }
                    }
                    return [
                        input.struct('const', [
                            input.struct('obj'),
                            input.struct('new', [
                                input.struct(input.type),
                                input.struct('(,)', input.select('/', null).hack(belt)),
                            ]),
                        ]),
                        ...overrides,
                        input.struct('obj'),
                    ];
                }
                return [input];
            },
        });
        members.push(prop.struct('.', [
            prop.data(name),
            params_of(prop),
            prop.struct('{;}', [
                ...next ? [
                    prop.struct('if', [
                        prop.struct('(!==)', [
                            prop.struct('next'),
                            prop.struct('undefined'),
                        ]),
                        prop.struct('return', [
                            prop.struct('next'),
                        ]),
                    ]),
                ] : [],
                ...val.slice(0, -1),
                prop.struct('return', val.slice(-1)),
            ]),
        ]));
        return acc;
    }
    function $mol_view_tree2_to_js(descr) {
        descr = $mol_view_tree2_classes(descr);
        const definitions = [];
        for (const klass of descr.kids) {
            const parent = klass.kids[0];
            const props = this.$mol_view_tree2_class_props(klass);
            const addons = [];
            const members = [];
            const acc = { klass, addons, members };
            for (const prop of props) {
                try {
                    klass_body.call(this, acc, prop);
                }
                catch (e) {
                    e.message += ` at ${prop.span}`;
                    $mol_fail_hidden(e);
                }
            }
            definitions.push(klass.struct('=', [
                klass.struct('()', [
                    klass.struct('$'),
                    klass.struct('[]', [
                        klass.data(klass.type),
                    ]),
                ]),
                klass.struct('class', [
                    klass.struct(klass.type),
                    parent.struct('extends', [
                        parent.struct('()', [
                            parent.struct('$'),
                            parent.struct('[]', [
                                parent.data(parent.type),
                            ]),
                        ]),
                    ]),
                    klass.struct('{}', members),
                ]),
            ]), ...addons);
        }
        return descr.list([
            descr.struct(';', definitions)
        ]);
    }
    $.$mol_view_tree2_to_js = $mol_view_tree2_to_js;
})($ || ($ = {}));
//mol/view/tree2/to/js/js.ts
;
"use strict";
var $;
(function ($) {
    const { optional, slash_back, char_any, char_except, repeat } = $mol_regexp;
    $.$hyoo_marked_line_content = repeat(char_except('\r\n'), 1);
    const uri = repeat(char_except(slash_back));
    function with_marker(marker, content = $mol_regexp.from({
        content: $.$hyoo_marked_line_content
    })) {
        return $mol_regexp.from([{ marker }, content, marker]);
    }
    const strong = with_marker('**');
    const emphasis = with_marker('//');
    const insertion = with_marker('++');
    const deletion = with_marker('--');
    const code = with_marker(';;');
    const with_uri = $mol_regexp.from([
        optional([
            { content: $.$hyoo_marked_line_content },
            slash_back
        ]),
        { uri },
    ]);
    const link = with_marker('\\\\', with_uri);
    const embed = with_marker('""', with_uri);
    const inline = $mol_regexp.from({ strong, emphasis, insertion, deletion, code, link, embed });
    $.$hyoo_marked_line = $mol_regexp.from({ inline });
})($ || ($ = {}));
//hyoo/marked/line/line.ts
;
"use strict";
var $;
(function ($) {
    const marker2name = {
        '**': 'strong',
        '//': 'emphasis',
        '++': 'insertion',
        '--': 'deletion',
        ';;': 'code',
        '\\\\': 'link',
        '""': 'embed',
    };
    function $hyoo_marked_tree_from_line(code, span_entire = $mol_span.entire('unknown', code)) {
        let span = span_entire.slice(0, 0);
        const nodes = [];
        for (const found of code.matchAll($hyoo_marked_line)) {
            const token = found.groups;
            if (token) {
                const uri_sep_length = token.uri.length + (token.uri && token.content ? 1 : 0);
                span = span.after(token.marker.length * 2 + token.content.length + uri_sep_length);
                const span_content = span.slice(token.marker.length, -token.marker.length);
                const content = token.code
                    ? [$mol_tree2.data(token.content, [], span_content)]
                    : [
                        ...token.uri ? [
                            $mol_tree2.data(token.uri, [], span_content.slice(-uri_sep_length))
                        ] : [],
                        ...token.content ? this.$hyoo_marked_tree_from_line(token.content, span_content.slice(0, -uri_sep_length)).kids : [],
                    ];
                const name = marker2name[token.marker];
                if (!name)
                    this.$mol_fail(`Undefined name for marker ${token.marker}`);
                nodes.push($mol_tree2.struct(name, content, span));
            }
            else {
                span = span.after(found[0].length);
                nodes.push($mol_tree2.data(found[0], [], span));
            }
        }
        return $mol_tree2.list(nodes, span_entire);
    }
    $.$hyoo_marked_tree_from_line = $hyoo_marked_tree_from_line;
})($ || ($ = {}));
//hyoo/marked/tree/from/line/line.ts
;
"use strict";
var $;
(function ($) {
    const templates = $$.$mol_tree2_from_string(`
		body {;}
			var
				parent
				(||)
					parent
					()
						document
						[] \\createElement
						(,) \\body
			%body
		element const
			child
			()
				document
				[] \\createElement
				(,) %name
		attr ()
			child
			[] \\setAttribute
			(,)
				%name
				%value
		text const
			child
			()
				document
				[] \\createTextNode
				(,) %text
		content ()
			(,) =>
				parent
				%content
			(,) child
		append ()
			parent
			[] \\appendChild
			(,) child
	`, '$hyoo_marked_tree_to_js_templates');
    const wrap_body = templates.select('body', null);
    const wrap_element = templates.select('element', null);
    const wrap_attr = templates.select('attr', null);
    const wrap_text = templates.select('text', null);
    const wrap_content = templates.select('content', null);
    const append_child = templates.select('append', null);
    function hack_inline(name, link_attr) {
        return (input, belt, context) => {
            const uri = link_attr ? input.kids[0] : null;
            const content = link_attr ? input.kids.slice(1) : input.kids;
            return [
                input.struct('{;}', [
                    ...wrap_element.hack({ '%name': () => [input.data(name)] }, { ...context, span: input.span }),
                    ...uri ? [
                        ...wrap_attr.hack({
                            '%name': () => [uri.data(link_attr)],
                            '%value': () => [uri],
                        }, { ...context, span: input.span }),
                    ] : [],
                    ...content.length ? [
                        ...wrap_content.hack({ '%content': () => input.list(content).hack(belt, context) }, { ...context, span: input.span }),
                    ] : [],
                    ...append_child.hack({}, { ...context, span: input.span.slice(-2, -1) }),
                ])
            ];
        };
    }
    function hack_text(input, belt, context) {
        return [
            input.struct('{;}', [
                ...wrap_text.hack({ '%text': () => [input] }, { ...context, span: input.span }),
                ...append_child.hack({}, { ...context, span: input.span }),
            ]),
        ];
    }
    function $hyoo_marked_tree_to_js(mt) {
        return mt.list(wrap_body.hack({
            '%body': () => mt.hack({
                'strong': hack_inline('strong'),
                'emphasis': hack_inline('em'),
                'insertion': hack_inline('ins'),
                'deletion': hack_inline('del'),
                'code': hack_inline('code'),
                'link': hack_inline('a', 'href'),
                'embed': hack_inline('object', 'data'),
                '': hack_text,
            }),
        }));
    }
    $.$hyoo_marked_tree_to_js = $hyoo_marked_tree_to_js;
})($ || ($ = {}));
//hyoo/marked/tree/to/js/js.ts
;
"use strict";
var $;
(function ($) {
    function $mol_json_from_string(str) {
        return JSON.parse(str);
    }
    $.$mol_json_from_string = $mol_json_from_string;
    function $mol_json_to_string(str) {
        return JSON.stringify(str, null, '\t');
    }
    $.$mol_json_to_string = $mol_json_to_string;
})($ || ($ = {}));
//mol/json/json.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jack = {
        no: (input, belt) => [],
        list: (input, belt) => input.hack(belt),
        tree: input => input.kids,
        type: (input, belt) => input.hack(belt).map(kid => kid.data(kid.type)),
        kids: (input, belt) => [].concat(...input.hack(belt).map(kid => kid.kids)),
        head: (input, belt) => input.hack(belt).slice(0, 1),
        headless: (input, belt) => input.hack(belt).slice(1),
        reversed: (input, belt) => input.hack(belt).reverse(),
        count: (input, belt) => [input.struct(input.hack(belt).length.toString())],
        struct: (input, belt) => {
            const res = input.hack(belt);
            return [res[0].struct(res[0].value, res.slice(1))];
        },
        data: (input, belt) => {
            const res = input.hack(belt);
            return [res[0].data(res[0].value, res.slice(1))];
        },
        jack: (input, belt) => input.hack(Object.create(belt)),
        hack: (input, belt) => {
            const def = input.kids[0];
            if (Reflect.getOwnPropertyDescriptor(belt, def.type)) {
                $mol_fail(def.error('Already hacked'));
            }
            belt[def.type] = (arg, belt_inner, context) => {
                return def.hack(Object.create(Object.assign(Object.create(belt), {
                    from: (input, b, c) => {
                        return arg.hack(Object.assign(Object.create(belt_inner), b), c);
                    },
                    clone: (input, b, c) => [
                        arg.clone(input.hack(b, c)),
                    ],
                })), { ...context, span: arg.span });
            };
            return [];
        },
        test: (input, belt) => {
            const cases = input.select('case').kids;
            const results = cases.map(Case => Case.hack(belt));
            $mol_assert_equal(...results.map(String));
            return [input];
        },
        '+math': (input, belt, context) => input.hack(Object.assign(Object.create(belt), {
            ...belt,
            sum: (input, belt) => [
                input.struct(input.hack(belt, context)
                    .reduce((s, k) => s + Number(k.type), 0)
                    .toString())
            ],
        }), context),
    };
    function $mol_jack_transform(code) {
        return code.list(code.hack(Object.create($.$mol_jack)));
    }
    $.$mol_jack_transform = $mol_jack_transform;
})($ || ($ = {}));
//mol/jack/jack.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wasm_instance extends $mol_object2 {
        module;
        imports;
        native;
        constructor(module, imports) {
            super();
            this.module = module;
            this.imports = imports;
            this.native = new WebAssembly.Instance(module, imports);
        }
        memory(offset, length) {
            const memory = this.native['exports'].memory;
            return new Uint8Array(memory.buffer, offset, length);
        }
        string(offset, length, encoding = 'utf-8') {
            return new TextDecoder(encoding).decode(this.memory(offset, length));
        }
        get(name) {
            return this.native.exports[name];
        }
    }
    $.$mol_wasm_instance = $mol_wasm_instance;
})($ || ($ = {}));
//mol/wasm/instance/instance.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wasm_module extends $mol_object2 {
        buffer;
        native;
        constructor(buffer) {
            super();
            this.buffer = buffer;
            this.native = new WebAssembly.Module(buffer);
        }
        instance(imports) {
            return new $mol_wasm_instance(this.native, imports);
        }
    }
    $.$mol_wasm_module = $mol_wasm_module;
})($ || ($ = {}));
//mol/wasm/module/module.ts
;
"use strict";
var $;
(function ($) {
    function $mol_js_eval(code) {
        return new Function('', code)();
    }
    $.$mol_js_eval = $mol_js_eval;
})($ || ($ = {}));
//mol/js/eval/eval.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Menu()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select_list extends $mol_view {
        value(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        dictionary() {
            return {};
        }
        Badge(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.badge_title(id);
            obj.click = (event) => this.remove(id, event);
            obj.hint = () => this.badge_hint();
            obj.enabled = () => this.drop_enabled();
            return obj;
        }
        Pick() {
            const obj = new this.$.$mol_select();
            obj.align_hor = () => this.align_hor();
            obj.options = () => this.options_pickable();
            obj.value = (val) => this.pick(val);
            obj.option_label = (id) => this.option_title(id);
            obj.trigger_enabled = () => this.pick_enabled();
            obj.hint = () => this.pick_hint();
            obj.Trigger_icon = () => this.Pick_icon();
            return obj;
        }
        badge_title(id) {
            return "badge";
        }
        remove(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        badge_hint() {
            return this.$.$mol_locale.text('$mol_select_list_badge_hint');
        }
        enabled() {
            return true;
        }
        drop_enabled() {
            return this.enabled();
        }
        align_hor() {
            return "right";
        }
        options() {
            return [];
        }
        options_pickable() {
            return this.options();
        }
        pick(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_title(id) {
            return "";
        }
        pick_enabled() {
            return this.enabled();
        }
        pick_hint() {
            return this.$.$mol_locale.text('$mol_select_list_pick_hint');
        }
        Pick_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select_list.prototype, "Badge", null);
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "Pick", null);
    __decorate([
        $mol_mem_key
    ], $mol_select_list.prototype, "remove", null);
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "pick", null);
    __decorate([
        $mol_mem
    ], $mol_select_list.prototype, "Pick_icon", null);
    $.$mol_select_list = $mol_select_list;
})($ || ($ = {}));
//mol/select/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_list extends $.$mol_select_list {
            value(val) {
                return super.value(val);
            }
            pick(key) {
                if (!key)
                    return '';
                this.value([...this.value(), key]);
                new $mol_after_frame(() => {
                    if (!this.pick_enabled())
                        return;
                    this.Pick().Trigger().focused(true);
                    this.Pick().open();
                });
                return '';
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_pickable() {
                if (!this.enabled())
                    return [];
                const exists = new Set(this.value());
                return this.options().filter(key => !exists.has(key));
            }
            option_title(key) {
                const value = this.dictionary()[key];
                return value == null ? key : value;
            }
            badge_title(index) {
                return this.option_title(this.value()[index]);
            }
            pick_enabled() {
                return this.options_pickable().length > 0;
            }
            sub() {
                return [
                    this.Pick(),
                    ...this.value()
                        .map((_, index) => this.Badge(index))
                        .reverse(),
                ];
            }
            title() {
                return this.value().map(key => this.option_title(key)).join(' + ');
            }
            remove(index) {
                const value = this.value();
                this.value([
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options_pickable", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "title", null);
        __decorate([
            $mol_action
        ], $mol_select_list.prototype, "remove", null);
        $$.$mol_select_list = $mol_select_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_select_list, {
            flex: {
                wrap: 'wrap',
                shrink: 1,
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/list/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_tree extends $mol_book2 {
        transform_map() {
            return {
                "$mol_tree2_from_string": {
                    input: "text",
                    output: "tree"
                },
                "$mol_tree2_to_string": {
                    input: "tree",
                    output: "text"
                },
                "$mol_tree2_from_json": {
                    input: "json",
                    output: "tree"
                },
                "$mol_tree2_to_json": {
                    input: "tree",
                    output: "json"
                },
                "$mol_tree2_grammar_check": {
                    input: "grammar.tree",
                    output: "grammar.tree"
                },
                "$mol_dom_parse": {
                    input: "text",
                    output: "dom"
                },
                "$mol_tree2_xml_to_text": {
                    input: "xml.tree",
                    output: "text.tree"
                },
                "$mol_tree2_xml_from_dom": {
                    input: "dom",
                    output: "xml.tree"
                },
                "$mol_tree2_js_to_text": {
                    input: "js.tree",
                    output: "text.tree"
                },
                "$mol_tree2_text_to_string": {
                    input: "text.tree",
                    output: "text"
                },
                "$mol_tree2_text_to_string_mapped_js": {
                    input: "text.tree",
                    output: "text"
                },
                "$mol_tree2_text_to_string_mapped_css": {
                    input: "text.tree",
                    output: "text"
                },
                "$mol_tree2_text_to_sourcemap": {
                    input: "text.tree",
                    output: "map.json"
                },
                "$mol_tree2_text_to_sourcemap_vis": {
                    input: "text.tree",
                    output: "map.vis.url"
                },
                "$mol_tree2_span_imprint": {
                    input: "tree",
                    output: "span.tree"
                },
                "$mol_tree2_span_reuse": {
                    input: "span.tree",
                    output: "tree"
                },
                "$mol_tree2_wasm_to_bin": {
                    input: "wasm.tree",
                    output: "bin.tree"
                },
                "$mol_tree2_bin_from_string": {
                    input: "text",
                    output: "bin.tree"
                },
                "$mol_tree2_bin_from_bytes": {
                    input: "bytes.json",
                    output: "bin.tree"
                },
                "$mol_tree2_bin_to_bytes": {
                    input: "bin.tree",
                    output: "bin"
                },
                "$mol_view_tree2_to_text": {
                    input: "view.tree",
                    output: "text.tree"
                },
                "$mol_view_tree2_to_locale": {
                    input: "view.tree",
                    output: "json"
                },
                "$mol_view_tree2_to_dts": {
                    input: "view.tree",
                    output: "text.tree"
                },
                "$mol_view_tree2_to_js": {
                    input: "view.tree",
                    output: "js.tree"
                },
                "$hyoo_marked_tree_from_line": {
                    input: "text",
                    output: "marked.tree"
                },
                "$hyoo_marked_tree_to_js": {
                    input: "marked.tree",
                    output: "js.tree"
                },
                "$mol_json_from_string": {
                    input: "text",
                    output: "json"
                },
                "$mol_json_to_string": {
                    input: "json",
                    output: "text"
                },
                "$mol_jack_transform": {
                    input: "jack.tree",
                    output: "tree"
                },
                "$mol_wasm_module": {
                    input: "wasm.bin",
                    output: "wasm.module"
                },
                "$mol_js_eval": {
                    input: "text",
                    output: ""
                }
            };
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        pipeline(val) {
            return this.pipeline_default();
        }
        Placeholder() {
            return null;
        }
        pages() {
            return [
                this.Presets(),
                this.Source(),
                this.Result()
            ];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        pipeline_default() {
            return [];
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        Github() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/tree.hyoo.ru/";
            return obj;
        }
        View() {
            const obj = new this.$.$mol_link();
            obj.title = () => "view.tree ⇒ TS";
            obj.uri = () => "#!source=%24my_app%20%24mol_page%0A%09spec%20%5Chttps%3A%2F%2Fgithub.com%2Fhyoo-ru%2Fmam_mol%2Ftree%2Fmaster%2Fview%23viewtree%0A%09params%20*%20foo%20<%3D%20changable%3Fval%20%2Fstring%0A%09body%20%2F%0A%09%09<%3D%20Info%20%24my_widget%0A%09%09%09empty%20%40%20%5CNo%20content%0A%09%09%09value%3Fval%20<%3D>%20info_value%3Fval%20NaN%0A%09%09%09kids%20<%3D%20info_kids%20%2F%24mol_view_content%0A/pipeline=%24mol_tree2_from_string~%24mol_view_tree2_to_text~%24mol_tree2_text_to_string";
            return obj;
        }
        Json() {
            const obj = new this.$.$mol_link();
            obj.title = () => "JSON ⇒ json.tree";
            obj.uri = () => "#!source=%7B%0A%09\"primitives\"%3A%20%5B%0A%09%09\"https%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fjson.tree\"%2C%0A%09%09true%2C%0A%09%09777%2C%0A%09%09null%0A%09%5D%2C%0A%09\"foo%5Cnbar\"%3A\"xxx%5Cnyyy\"%0A%7D/pipeline=%24mol_json_from_string~%24mol_tree2_from_json";
            return obj;
        }
        Xml() {
            const obj = new this.$.$mol_link();
            obj.title = () => "xml.tree ⇒ XML";
            obj.uri = () => "#!source=!%20doctype%20html%0A%3F%20xml%20version%20%5C1.0%0A--%20%5Centry%20point%0Ahtml%0A%09meta%20%40%20charset%20%5Cutf-8%0A%09body%0A%09%09a%0A%09%09%09%40%20href%20%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fxml.tree%0A%09%09%09%5Cxml.tree%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_xml_to_text~%24mol_tree2_text_to_string";
            return obj;
        }
        Js() {
            const obj = new this.$.$mol_link();
            obj.title = () => "js.tree ⇒ JS";
            obj.uri = () => "#!source=function%0A%09main%0A%09%28%2C%29%0A%09%09one%0A%09%09%3D%0A%09%09%09two%0A%09%09%092%0A%09%7B%3B%7D%0A%09%09const%0A%09%09%09%5B%2C%5D%0A%09%09%09%09self%0A%09%09%09%09samples%0A%09%09%09%5B%2C%5D%0A%09%09%09%09this%0A%09%09%09%09%7B%2C%7D%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Cvoid%0A%09%09%09%09%09%09%5B%2C%5D%0A%09%09%09%09%09%09%09null%0A%09%09%09%09%09%09%09undefined%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Cboolean%0A%09%09%09%09%09%09%5B%2C%5D%0A%09%09%09%09%09%09%09true%0A%09%09%09%09%09%09%09false%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09777%0A%09%09%09%09%09%09%5B%2C%5D%0A%09%09%09%09%09%09%091e%2B5%0A%09%09%09%09%09%09%09NaN%0A%09%09%09%09%09%09%09Infinity%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%28%29%0A%09%09%09%09%09%09%09Symbol%0A%09%09%09%09%09%09%09%5B%5D%20%5CtoStringTag%0A%09%09%09%09%09%09%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fjs.tree%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Ctemplate%0A%09%09%09%09%09%09%60%60%0A%09%09%09%09%09%09%09%5Cfoo%3D%20%0A%09%09%09%09%09%09%09foo%0A%09%09%09%09%09%09%09%5C!%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Cregexp%0A%09%09%09%09%09%09%2F.%2F%0A%09%09%09%09%09%09%09.source%20%5C%5Ct%0A%09%09%09%09%09%09%09.multiline%0A%09%09%09%09%09%09%09.ignoreCase%0A%09%09%09%09%09%09%09.global%0A%09%09%09%09%09...%20foo%0A%09%09%2B%3D%0A%09%09%09two%0A%09%09%09%28*%29%0A%09%09%09%092%0A%09%09%09%093%0A%09%09%09%09%28%29%0A%09%09%09%09%09Math%0A%09%09%09%09%09%5B%5D%20%5Csin%0A%09%09%09%09%09%28%2C%29%200%0A%09%09delete%20samples%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_js_to_text~%24mol_tree2_text_to_string";
            return obj;
        }
        Wasm() {
            const obj = new this.$.$mol_link();
            obj.title = () => "wasm.tree ⇒ WASM";
            obj.uri = () => "#!source=custom%20xxx%0A%0Atype%20xxx%0A%09%3D>%20i32%0A%09%3D>%20i64%0A%09%3D>%20f32%0A%09<%3D%20f64%0A%0Aimport%20foo.bar%20func%20xxx%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_wasm_to_bin~%24mol_tree2_bin_to_bytes~%24mol_wasm_module";
            return obj;
        }
        jack() {
            const obj = new this.$.$mol_link();
            obj.title = () => "jack.tree ⇒ JS eval";
            obj.uri = () => "#!pipeline=%24mol_tree2_from_string~%24mol_jack_transform~%24mol_tree2_js_to_text~%24mol_tree2_text_to_string~%24mol_js_eval/source=hack%20%2Bpipe%0A%09hack%20%7C>%20var%0A%09%09pipe%0A%09%09from%0A%09hack%20<%7C%20pipe%0A%09from%0A%0Ahack%20%2Bmath%20%2Bpipe%0A%09hack%20square%20%28**%29%0A%09%09<%7C%0A%09%092%0A%09hack%20next%20%28%2B%29%0A%09%09<%7C%0A%09%091%0A%09from%0A%0Ahack%20%2Bdebug%0A%09hack%20log%20%28%29%0A%09%09console%0A%09%09%5B%5D%20%5Clog%0A%09%09%28%2C%29%20from%0A%09from%0A%0A%2Bmath%20%2Bdebug%20%7B%3B%7D%0A%09%7C>%203%0A%09%7C>%20square%0A%09%7C>%20next%0A%09log%20<%7C%0A%09return%20<%7C%0A";
            return obj;
        }
        Mt() {
            const obj = new this.$.$mol_link();
            obj.title = () => "MarkedText ⇒ JS + SM";
            obj.uri = () => "#!source=%5C%5C**MarkedText**%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2FHabHub%2Fissues%2F39%5C%5C/pipeline=%24hyoo_marked_tree_from_line~%24hyoo_marked_tree_to_js~%24mol_tree2_js_to_text~%24mol_tree2_text_to_sourcemap_vis";
            return obj;
        }
        Grammar() {
            const obj = new this.$.$mol_link();
            obj.title = () => "grammar.tree check";
            obj.uri = () => "#!source=%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fgrammar.tree%0A%0Atree%20.optional%20.list_of%20line%0A%0Aline%20.sequence%0A%09.optional%20indent%0A%09.optional%20nodes%0A%09new_line%0A%0Anodes%20.sequence%0A%09.optional%20.list_of%20struct%0A%09.optional%20data%0A%09.with_delimiter%20space%0A%0Astruct%20.list_of%20.byte%0A%09.except%20special%0A%0Adata%20.sequence%0A%09data_prefix%0A%09.optional%20.list_of%20.byte%0A%09%09.except%20new_line%0A%0Aspecial%20.any_of%0A%09new_line%0A%09data_prefix%0A%09indent%0A%09space%0A%0Anew_line%20.byte%20%5C0A%0Aindent%20.list_of%20.byte%20%5C09%0Adata_prefix%20.byte%20%5C5C%0Aspace%20.byte%20%5C20%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_grammar_check";
            return obj;
        }
        Span() {
            const obj = new this.$.$mol_link();
            obj.title = () => "span.tree imprint/reuse";
            obj.uri = () => "#!source=foo%0A%09bar%0A%09%09%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fspan.tree%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_span_imprint~%24mol_tree2_span_reuse~%24mol_tree2_span_imprint";
            return obj;
        }
        Presets_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.View(),
                this.Json(),
                this.Xml(),
                this.Js(),
                this.Wasm(),
                this.jack(),
                this.Mt(),
                this.Grammar(),
                this.Span()
            ];
            return obj;
        }
        Presets() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_tree_Presets_title');
            obj.tools = () => [
                this.Lights(),
                this.Github()
            ];
            obj.body = () => [
                this.Presets_list()
            ];
            return obj;
        }
        source_tools() {
            return [];
        }
        source_default() {
            return "";
        }
        source(val) {
            return this.source_default();
        }
        source_hint() {
            return this.$.$mol_locale.text('$hyoo_tree_source_hint');
        }
        Source_text() {
            const obj = new this.$.$mol_textarea();
            obj.value = (val) => this.source(val);
            obj.hint = () => this.source_hint();
            obj.sidebar_showed = () => true;
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_tree_Source_title');
            obj.tools = () => this.source_tools();
            obj.body = () => [
                this.Source_text()
            ];
            return obj;
        }
        transform_options() {
            return [];
        }
        add_hint() {
            return this.$.$mol_locale.text('$hyoo_tree_add_hint');
        }
        result_title() {
            return this.Pipeline().title();
        }
        Pipeline() {
            const obj = new this.$.$mol_select_list();
            obj.value = (val) => this.pipeline(val);
            obj.options_pickable = () => this.transform_options();
            obj.pick_hint = () => this.add_hint();
            return obj;
        }
        result_text() {
            return null;
        }
        Result_text() {
            const obj = new this.$.$mol_text_code();
            obj.render_visible_only = () => false;
            obj.text = () => this.result_text();
            return obj;
        }
        Result() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.result_title();
            obj.head = () => [
                this.Pipeline()
            ];
            obj.body = () => [
                this.Result_text()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Github", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "View", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Json", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Xml", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Js", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Wasm", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "jack", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Mt", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Grammar", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Span", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Presets_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Presets", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Source_text", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Pipeline", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Result_text", null);
    __decorate([
        $mol_mem
    ], $hyoo_tree.prototype, "Result", null);
    $.$hyoo_tree = $hyoo_tree;
})($ || ($ = {}));
//hyoo/tree/-view.tree/tree.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));
//mol/base64/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function binary_string(bytes) {
        let binary = '';
        if (typeof bytes !== 'string') {
            for (const byte of bytes)
                binary += String.fromCharCode(byte);
        }
        else {
            binary = unescape(encodeURIComponent(bytes));
        }
        return binary;
    }
    function $mol_base64_encode_web(str) {
        return $mol_dom_context.btoa(binary_string(str));
    }
    $.$mol_base64_encode_web = $mol_base64_encode_web;
    $.$mol_base64_encode = $mol_base64_encode_web;
})($ || ($ = {}));
//mol/base64/encode/encode.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_tree extends $.$hyoo_tree {
            pipeline(next) {
                const str = this.$.$mol_state_arg.value('pipeline', next && next.join('~'));
                return str && str.split('~').filter(Boolean) || super.pipeline();
            }
            add(index, next) {
                if (next) {
                    this.pipeline([
                        ...this.pipeline().slice(0, index + 1),
                        next,
                    ]);
                }
                return '';
            }
            source(next) {
                return this.$.$mol_state_arg.value('source', next) ?? super.source();
            }
            transform(index, next) {
                let pipeline = this.pipeline();
                if (next)
                    pipeline = this.pipeline([
                        ...pipeline.slice(0, index),
                        next,
                        ...pipeline.slice(index + 1),
                    ]);
                return pipeline[index] ?? null;
            }
            transform_options() {
                const map = this.transform_map();
                const pipeline = this.pipeline();
                const last = pipeline[pipeline.length - 1];
                const type = last ? map[last].output.split('.').filter(Boolean).reverse() : ['text'];
                if (!type.length)
                    return Object.keys(map);
                return Object.keys(map).filter(id => {
                    const diff = $mol_diff_path(type, map[id].input.split('.').reverse());
                    if (!diff.prefix.length)
                        return false;
                    if (diff.suffix.every(s => s.length))
                        return false;
                    return true;
                });
            }
            result(index) {
                const func = this.pipeline()[index];
                if (!func)
                    return '';
                const arg = index ? this.result(index - 1) : this.source();
                if ($mol_func_is_class(this.$[func])) {
                    return new this.$[func](arg) ?? null;
                }
                else {
                    return this.$[func](arg) ?? null;
                }
            }
            result_text() {
                let res = $mol_try(() => this.result(this.pipeline().length - 1));
                if (res instanceof Promise)
                    $mol_fail_hidden(res);
                if (typeof res === 'string')
                    return res;
                if (Object(res) !== res)
                    return String(res);
                if (res instanceof $mol_dom_context.Node)
                    return $mol_dom_serialize(res);
                if (!Reflect.getPrototypeOf(Reflect.getPrototypeOf(res)))
                    return JSON.stringify(res, null, '\t');
                if (Array.isArray(res))
                    return JSON.stringify(res, null, '\t');
                let mime = 'application/octet-stream';
                if (res instanceof $mol_wasm_module) {
                    res = new Uint8Array(res.buffer);
                    mime = 'application/wasm';
                }
                if (res instanceof Uint8Array) {
                    return `data:${mime};base64,${$mol_base64_encode(res)}`;
                }
                return String(res);
            }
            close(index) {
                this.pipeline([
                    ...this.pipeline().slice(0, index),
                    ...this.pipeline().slice(index + 1),
                ]);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_tree.prototype, "pipeline", null);
        __decorate([
            $mol_mem
        ], $hyoo_tree.prototype, "source", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_tree.prototype, "transform", null);
        __decorate([
            $mol_mem
        ], $hyoo_tree.prototype, "transform_options", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_tree.prototype, "result", null);
        __decorate([
            $mol_mem
        ], $hyoo_tree.prototype, "result_text", null);
        $$.$hyoo_tree = $hyoo_tree;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/tree/tree.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/tree/tree.view.css", "[hyoo_tree_presets] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_tree_source] {\n\tflex: 1 0 30rem;\n}\n\n[hyoo_tree_result] {\n\tflex: 1 0 30rem;\n}\n");
})($ || ($ = {}));
//hyoo/tree/-css/tree.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_list extends $mol_text {
        auto_scroll() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_list_type: this.type()
            };
        }
        Paragraph(id) {
            const obj = new this.$.$mol_text_list_item();
            obj.index = () => this.item_index(id);
            obj.sub = () => this.block_content(id);
            return obj;
        }
        type() {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_list.prototype, "Paragraph", null);
    $.$mol_text_list = $mol_text_list;
    class $mol_text_list_item extends $mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_list_item_index: this.index()
            };
        }
        index() {
            return 0;
        }
    }
    $.$mol_text_list_item = $mol_text_list_item;
})($ || ($ = {}));
//mol/text/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));
//mol/text/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_mol extends $mol_book2_catalog {
        plugins() {
            return [
                this.Theme()
            ];
        }
        Placeholder() {
            return null;
        }
        menu_title() {
            return this.$.$mol_locale.text('$hyoo_mol_menu_title');
        }
        menu_tools() {
            return this.tools_root();
        }
        param() {
            return "section";
        }
        spreads() {
            return {
                "": this.Main(),
                articles: this.Articles(),
                slides: this.Slides(),
                apps: this.Apps(),
                demos: this.Demos(),
                bench: this.Bench(),
                "view.tree": this.View_tree(),
                icons: this.Icons()
            };
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        Sources() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/mam_mol";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        tools_root() {
            return [
                this.Sources(),
                this.Lights()
            ];
        }
        Memes_icon() {
            const obj = new this.$.$mol_icon_emoticon();
            return obj;
        }
        Memes() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_mol_Memes_hint');
            obj.uri = () => "https://t.me/mol_memes";
            obj.sub = () => [
                this.Memes_icon()
            ];
            return obj;
        }
        Video_icon() {
            const obj = new this.$.$mol_icon_youtube_subscription();
            return obj;
        }
        Video() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_mol_Video_hint');
            obj.uri = () => "https://www.youtube.com/channel/UCwRUyzIG4mC8uGhGQsn5FBQ";
            obj.sub = () => [
                this.Video_icon()
            ];
            return obj;
        }
        News_icon() {
            const obj = new this.$.$mol_icon_rss_box();
            return obj;
        }
        News() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_mol_News_hint');
            obj.uri = () => "https://t.me/mol_news";
            obj.sub = () => [
                this.News_icon()
            ];
            return obj;
        }
        Chat_icon() {
            const obj = new this.$.$mol_icon_forum();
            return obj;
        }
        Chat() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_mol_Chat_hint');
            obj.uri = () => "https://t.me/mam_mol";
            obj.sub = () => [
                this.Chat_icon()
            ];
            return obj;
        }
        description() {
            return "";
        }
        sources_uri() {
            return "https://github.com/hyoo-ru/mam_mol/tree/master/";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            obj.uri_base = () => this.sources_uri();
            return obj;
        }
        Main() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_mol_Main_title');
            obj.tools = () => [
                this.Memes(),
                this.Video(),
                this.News(),
                this.Chat()
            ];
            obj.body = () => [
                this.Description()
            ];
            return obj;
        }
        Articles() {
            const obj = new this.$.$hyoo_habhub();
            obj.menu_title = () => this.$.$mol_locale.text('$hyoo_mol_Articles_menu_title');
            obj.tools_root = () => [
                this.Spread_close()
            ];
            return obj;
        }
        Slides() {
            const obj = new this.$.$hyoo_slides();
            obj.title = () => this.$.$mol_locale.text('$hyoo_mol_Slides_title');
            obj.Open_listener = () => null;
            obj.Lights = () => null;
            obj.menu_tools = () => [
                this.Spread_close()
            ];
            return obj;
        }
        Apps() {
            const obj = new this.$.$hyoo_apps();
            obj.title = () => this.$.$mol_locale.text('$hyoo_mol_Apps_title');
            obj.tools = () => [
                this.Spread_close()
            ];
            return obj;
        }
        Demos() {
            const obj = new this.$.$mol_app_demo();
            obj.title = () => this.$.$mol_locale.text('$hyoo_mol_Demos_title');
            obj.tools = () => [
                this.Spread_close()
            ];
            return obj;
        }
        Bench() {
            const obj = new this.$.$hyoo_mol_bench();
            obj.menu_tools = () => [
                this.Spread_close()
            ];
            return obj;
        }
        tree_pipeline() {
            return [
                "$mol_tree2_from_string",
                "$mol_view_tree2_to_text",
                "$mol_tree2_text_to_string"
            ];
        }
        tree_source() {
            return "$hyoo_mol_example $mol_page\n\ttitle \\Example\n\tparams * foo <= changable?val /string\n\tbody /\n\t\t<= Select $hyoo_mol_example_selector\n\t\t\tempty @ \\No content\n\t\t\tvalue?val <=> info_value?val +NaN\n\t\t\tkids <= info_kids /$mol_view_content\n";
        }
        View_tree() {
            const obj = new this.$.$hyoo_tree();
            obj.title = () => this.$.$mol_locale.text('$hyoo_mol_View_tree_title');
            obj.Presets = () => null;
            obj.source_tools = () => [
                this.Spread_close()
            ];
            obj.pipeline_default = () => this.tree_pipeline();
            obj.source_default = () => this.tree_source();
            return obj;
        }
        Icons() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.$.$mol_locale.text('$hyoo_mol_Icons_title');
            obj.uri = () => "https://nin-jin.github.io/mol_icon/";
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Sources", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Memes_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Memes", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Video_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Video", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "News_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "News", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Chat_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Chat", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Description", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Main", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Articles", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Slides", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Apps", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Demos", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Bench", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "View_tree", null);
    __decorate([
        $mol_mem
    ], $hyoo_mol.prototype, "Icons", null);
    $.$hyoo_mol = $hyoo_mol;
})($ || ($ = {}));
//hyoo/mol/-view.tree/mol.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_mol extends $.$hyoo_mol {
            description() {
                return $mol_file.relative('mol/readme.md').text();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_mol.prototype, "description", null);
        $$.$hyoo_mol = $hyoo_mol;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/mol/mol.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/mol/mol.view.css", "[hyoo_mol_menu] {\n\tflex: 0 0 18rem;\n}\n\n[hyoo_mol_main] {\n\tflex: 0 0 60rem;\n}\n\n[hyoo_mol_slides] {\n\tflex: 1000 0 80rem;\n}\n\n[hyoo_mol_view_tree] {\n\tflex: 1000 0 60rem;\n}\n\n[hyoo_mol_icons] {\n\tflex: 1000 0 40rem;\n}\n");
})($ || ($ = {}));
//hyoo/mol/-css/mol.view.css.ts

//# sourceMappingURL=web.js.map
