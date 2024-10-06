declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
        step(): Promise<null>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;
declare const cache: Map<string, any>;

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "focus" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "block" | "blur" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly ($mol_view | Node | string | number | boolean)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: null | string): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		field( ): ({ 
			'tabIndex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    let $mol_layer: Record<string, $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_view__title__BPGNF8US = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): ReturnType< $mol_book2['pages'] >
		minimal_width( ): number
		Placeholder( ): $mol_view
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_pop_bubble__align__G821DAL2 = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__5ZSL011H = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__SW2MMBWZ = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        abstract drop(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
        open(...modes: readonly ('create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append')[]): number;
        toJSON(): string;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    enum $mol_file_mode_open {
        create,
        exists_truncate,
        exists_fail,
        read_only,
        write_only,
        read_write,
        append
    }
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        ensure(): void;
        drop(): void;
        buffer(next?: Uint8Array): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): undefined;
        open(...modes: readonly (keyof typeof $mol_file_mode_open)[]): number;
    }
}

declare namespace $ {
    class $mol_state_local_node<Value> extends $mol_state_local<Value> {
        static dir(): $mol_file;
        static value<Value>(key: string, next?: Value | null): Value | null;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl__4BEICO13 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__Z2ET4W1O = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__2YJT4XXR = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value__O15C2EQR = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_speck | $mol_view_content)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style__SVFZOAFX = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__4QTTK4YK = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub__XCUZLO7R = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__FFSMFX3J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key__F972VR69 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__A5I9YRW3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__KJP3KU78 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__YMCN27G6 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__ZJJNV96U = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__8SJT5FX7 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__2ZGC1AUB = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__7FP8J3SI = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__0BPIQQXI = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__M891VR3B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__6FARFO3K = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__LDWIF8PC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__I12Q0IB6 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__Z6EQQ1F5 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__KB4EHH2M = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__X8IA2O2W = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__UMWYOXTZ = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__TO2FT0BW = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__JZQXKVYQ = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($.$mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($.$mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__dom_name__JR4NACEH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__PR09ATCT = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__HZES6WWI = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__P2TIKMZU = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__5RR6259D = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__CXDXMBJA = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__247AOP26 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__3I5KGOF2 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__5VPFPF3W = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__QHX6HGBI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__YCNZQW66 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		field( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_search__query__T6ND3CST = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__needle__39121F4X = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__30CXJW8L = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_link__arg__VNVED01L = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__EV34VIK5 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows__XYPV6DCQ = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_links'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__WK2SYJ9K = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Logo__SQZ9TVQ5 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_logo'] >
		,
		ReturnType< $mol_page['Logo'] >
	>
	type $mol_page__tools__ZVXL0RHX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__head__06ZR9ESG = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_head'] >
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body__9Y1OWTV2 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot__YYQ5NZ4T = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_foot'] >
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_link__arg__88ZXMU37 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_close_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__5KTDX23G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__PXMQ1LN9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_book2_catalog extends $mol_book2 {
		Menu_title( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Title'] >
		menu_title( ): string
		Menu_tools( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Tools'] >
		Menu_logo( ): any
		menu_head( ): readonly(any)[]
		menu_filter( next?: string ): string
		Menu_filter( ): $mol_search
		arg( id: any): Record<string, any>
		spread_title( id: any): string
		Menu_link_title( id: any): $mol_dimmer
		menu_link_content( id: any): readonly(any)[]
		Menu_link( id: any): $mol_link
		menu_links( ): readonly(any)[]
		Menu_links( ): $mol_list
		menu_body( ): readonly(any)[]
		menu_foot( ): readonly(any)[]
		Menu( ): $mol_page
		spread_close_arg( ): Record<string, any>
		Spread_close_icon( ): $mol_icon_close
		param( ): string
		spread( next?: string ): string
		spreads( ): Record<string, any>
		Spread( id: any): $mol_view
		Spread_default( ): any
		spread_ids( ): readonly(string)[]
		menu_filter_enabled( ): boolean
		spread_ids_filtered( ): readonly(string)[]
		menu_tools( ): readonly(any)[]
		addon_tools( ): readonly(any)[]
		pages( ): readonly(any)[]
		Spread_close( ): $mol_link
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2_catalog extends $.$mol_book2_catalog {
        pages(): any[];
        spread_ids(): readonly string[];
        menu_body(): ($.$mol_list | $.$mol_search)[];
        menu_filter_enabled(): boolean;
        menu_links(): $.$mol_link[];
        spread_ids_filtered(): string[];
        Spread(id: string): $mol_view;
        Spread_default(): any;
        spread(next?: string): string;
        arg(spread: string): {
            [x: string]: string | null;
        };
        spread_close_arg(): {
            [x: string]: null;
        };
        spread_title(spread: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		theme( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__JZGQ0LH9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_6 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=6.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_6
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {

	type $mol_check__minimal_width__N3ZJMHR8 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__XLSFQ96A = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__Z63LFK4B = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__28F265GA = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__LLOP90ST = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__AICZFL6N = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__6F0SHNC7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack__2ANBOWD0 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__ZA2HRWD6 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__T6R051WT = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__MTEARZXR = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__L0IIM256 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__ZR8R5NT1 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__01JSY6VE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__6W7DYXM0 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__VA1SKDB6 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__70JIPZPA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__GD36T4SN = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__KOJAODLK = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__882NJVNF = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__Y6FOMSVD = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($.$mol_search | $mol_button_minor)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    let $hyoo_lingua_langs: {
        af: string;
        am: string;
        ar: string;
        ast: string;
        az: string;
        ba: string;
        be: string;
        bg: string;
        bn: string;
        br: string;
        bs: string;
        ca: string;
        ceb: string;
        cs: string;
        cy: string;
        da: string;
        de: string;
        el: string;
        en: string;
        es: string;
        et: string;
        fa: string;
        ff: string;
        fi: string;
        fr: string;
        fy: string;
        ga: string;
        gd: string;
        gl: string;
        gu: string;
        ha: string;
        he: string;
        hi: string;
        hr: string;
        ht: string;
        hu: string;
        hy: string;
        id: string;
        ig: string;
        ilo: string;
        is: string;
        it: string;
        ja: string;
        jv: string;
        ka: string;
        kk: string;
        km: string;
        kn: string;
        ko: string;
        lb: string;
        lg: string;
        ln: string;
        lo: string;
        lt: string;
        lv: string;
        mg: string;
        mk: string;
        ml: string;
        mn: string;
        mr: string;
        ms: string;
        my: string;
        ne: string;
        nl: string;
        no: string;
        ns: string;
        oc: string;
        or: string;
        pa: string;
        pl: string;
        ps: string;
        pt: string;
        ro: string;
        ru: string;
        sd: string;
        si: string;
        sk: string;
        sl: string;
        so: string;
        sq: string;
        sr: string;
        ss: string;
        su: string;
        sv: string;
        sw: string;
        ta: string;
        th: string;
        tl: string;
        tn: string;
        tr: string;
        uk: string;
        ur: string;
        uz: string;
        vi: string;
        wo: string;
        xh: string;
        yi: string;
        yo: string;
        zh: string;
        zu: string;
    };
}

declare namespace $ {

	export class $mol_locale_select extends $mol_select {
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_locale_select extends $.$mol_locale_select {
        value(next?: string): string;
        dictionary(): {
            af: string;
            am: string;
            ar: string;
            ast: string;
            az: string;
            ba: string;
            be: string;
            bg: string;
            bn: string;
            br: string;
            bs: string;
            ca: string;
            ceb: string;
            cs: string;
            cy: string;
            da: string;
            de: string;
            el: string;
            en: string;
            es: string;
            et: string;
            fa: string;
            ff: string;
            fi: string;
            fr: string;
            fy: string;
            ga: string;
            gd: string;
            gl: string;
            gu: string;
            ha: string;
            he: string;
            hi: string;
            hr: string;
            ht: string;
            hu: string;
            hy: string;
            id: string;
            ig: string;
            ilo: string;
            is: string;
            it: string;
            ja: string;
            jv: string;
            ka: string;
            kk: string;
            km: string;
            kn: string;
            ko: string;
            lb: string;
            lg: string;
            ln: string;
            lo: string;
            lt: string;
            lv: string;
            mg: string;
            mk: string;
            ml: string;
            mn: string;
            mr: string;
            ms: string;
            my: string;
            ne: string;
            nl: string;
            no: string;
            ns: string;
            oc: string;
            or: string;
            pa: string;
            pl: string;
            ps: string;
            pt: string;
            ro: string;
            ru: string;
            sd: string;
            si: string;
            sk: string;
            sl: string;
            so: string;
            sq: string;
            sr: string;
            ss: string;
            su: string;
            sv: string;
            sw: string;
            ta: string;
            th: string;
            tl: string;
            tn: string;
            tr: string;
            uk: string;
            ur: string;
            uz: string;
            vi: string;
            wo: string;
            xh: string;
            yi: string;
            yo: string;
            zh: string;
            zu: string;
        };
    }
}

declare namespace $ {
    type $mol_int62_string = `${string}_${string}`;
    function $mol_int62_string_ensure(str: unknown): `${string}_${string}` | null;
    type $mol_int62_pair = {
        readonly lo: number;
        readonly hi: number;
    };
    const $mol_int62_max: number;
    const $mol_int62_min: number;
    const $mol_int62_range: number;
    function $mol_int62_to_string({ lo, hi }: $mol_int62_pair): $mol_int62_string;
    function $mol_int62_from_string(str: string): null | $mol_int62_pair;
    function $mol_int62_compare(left_lo: number, left_hi: number, right_lo: number, right_hi: number): number;
    function $mol_int62_inc(lo: number, hi: number, max?: number): $mol_int62_pair;
    function $mol_int62_random(): $mol_int62_pair;
    function $mol_int62_hash_string(str: string): `${string}_${string}`;
    function $mol_int62_hash_buffer(buf: Uint8Array, seed?: {
        lo: number;
        hi: number;
    }): $mol_int62_pair;
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    function $mol_data_enum<Dict extends Record<number | string, number | string>>(name: string, dict: Dict): ((value: Dict[keyof Dict]) => Dict[keyof Dict]) & {
        config: {
            name: string;
            dict: Dict;
        };
        Value: Dict[keyof Dict];
    };
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_node(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_decode_node(base64Str: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array): string;
    function $mol_base64_url_decode(str: string): Uint8Array;
}

declare namespace $ {
    function $mol_crypto_auditor_pair(this: $): Promise<{
        public: $mol_crypto_auditor_public;
        private: $mol_crypto_auditor_private;
    }>;
    class $mol_crypto_auditor_public extends Object {
        readonly native: CryptoKey & {
            type: 'public';
        };
        static size_str: number;
        static size_bin: number;
        constructor(native: CryptoKey & {
            type: 'public';
        });
        static from(serial: string | Uint8Array): Promise<$mol_crypto_auditor_public>;
        serial(): Promise<string>;
        toArray(): Promise<Uint8Array>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_auditor_private extends Object {
        readonly native: CryptoKey & {
            type: 'private';
        };
        static size_str: number;
        static size_bin: number;
        constructor(native: CryptoKey & {
            type: 'private';
        });
        static from(serial: string | Uint8Array): Promise<$mol_crypto_auditor_private>;
        serial(): Promise<string>;
        toArray(): Promise<Uint8Array>;
        sign(data: BufferSource): Promise<ArrayBuffer>;
        public(): Promise<$mol_crypto_auditor_public>;
    }
    const $mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial: string): string;
}

declare namespace $ {
    enum $hyoo_crowd_peer_level {
        get = 0,
        add = 1,
        mod = 2,
        law = 3
    }
    class $hyoo_crowd_peer extends Object {
        readonly key_public: $mol_crypto_auditor_public;
        readonly key_public_serial: string;
        readonly key_private: $mol_crypto_auditor_private;
        readonly key_private_serial: string;
        id: $mol_int62_string;
        constructor(key_public: $mol_crypto_auditor_public, key_public_serial: string, key_private: $mol_crypto_auditor_private, key_private_serial: string);
        static generate(): Promise<$hyoo_crowd_peer>;
        static restore(serial: string): Promise<$hyoo_crowd_peer>;
    }
}

declare namespace $ {
    type $hyoo_crowd_unit_id = `${$mol_int62_string}!${$mol_int62_string}`;
    enum $hyoo_crowd_unit_kind {
        grab = 0,
        join = 1,
        give = 2,
        data = 3
    }
    enum $hyoo_crowd_unit_group {
        auth = 0,
        data = 1
    }
    class $hyoo_crowd_unit extends Object {
        readonly land: $mol_int62_string;
        readonly auth: $mol_int62_string;
        readonly head: $mol_int62_string;
        readonly self: $mol_int62_string;
        readonly next: $mol_int62_string;
        readonly prev: $mol_int62_string;
        readonly time: number;
        readonly data: unknown;
        bin: $hyoo_crowd_unit_bin | null;
        constructor(land: $mol_int62_string, auth: $mol_int62_string, head: $mol_int62_string, self: $mol_int62_string, next: $mol_int62_string, prev: $mol_int62_string, time: number, data: unknown, bin: $hyoo_crowd_unit_bin | null);
        kind(): $hyoo_crowd_unit_kind;
        group(): $hyoo_crowd_unit_group;
        level(): $hyoo_crowd_peer_level;
        [Symbol.toPrimitive](): string;
    }
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer: Int16Array): $hyoo_crowd_unit_bin;
        static from_unit(unit: $hyoo_crowd_unit): $hyoo_crowd_unit_bin;
        sign(next?: Uint8Array): Uint8Array;
        size(): number;
        sens(): Uint8Array;
        unit(): $hyoo_crowd_unit;
    }
    function $hyoo_crowd_unit_compare(left: $hyoo_crowd_unit, right: $hyoo_crowd_unit): number;
}

declare namespace $ {
    class $hyoo_crowd_node extends $mol_object2 {
        readonly land: $hyoo_crowd_land;
        readonly head: $mol_int62_string;
        constructor(land?: $hyoo_crowd_land, head?: $mol_int62_string);
        static for<Node extends typeof $hyoo_crowd_node>(this: Node, land: $hyoo_crowd_land, head: $mol_int62_string): InstanceType<Node>;
        static toJSON(): string;
        id(): `${string}_${string}`;
        world(): $hyoo_crowd_world | null;
        as<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>;
        units(): readonly $hyoo_crowd_unit[];
        nodes<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>[];
        virgin(): boolean;
        [Symbol.toPrimitive](): string;
        toJSON(): `${string}_${string}`;
    }
}

declare namespace $ {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next?: unknown): {} | null;
        str(next?: string): string;
        numb(next?: number): number;
        bool(next?: boolean): boolean;
        yoke(law?: readonly ($mol_int62_string | "")[], mod?: readonly ($mol_int62_string | "")[], add?: readonly ($mol_int62_string | "")[]): $hyoo_crowd_land | null;
    }
}

declare namespace $ {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
        yoke<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node, law?: readonly ($mol_int62_string | "")[], mod?: readonly ($mol_int62_string | "")[], add?: readonly ($mol_int62_string | "")[]): InstanceType<Node> | null;
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    let $hyoo_crowd_tokenizer: RegExp;
}

declare namespace $ {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next?: readonly unknown[]): readonly unknown[];
        set(next?: ReadonlySet<string | number | boolean | null>): Set<unknown>;
        insert(next: readonly unknown[], from?: number, to?: number): void;
        move(from: number, to: number): void;
        cut(seat: number): $hyoo_crowd_unit;
        has(val: string | number | boolean | null, next?: boolean): boolean;
        add(val: string | number | boolean | null): void;
        drop(val: string | number | boolean | null): void;
        node_make<Node extends typeof $hyoo_crowd_node>(val: unknown, Node: Node): InstanceType<Node>;
    }
}

declare namespace $ {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next?: string): string;
        str(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): readonly [$mol_int62_string, number];
        offset_by_point([self, offset]: [$mol_int62_string, number]): readonly [$mol_int62_string, number];
        selection(peer: $mol_int62_string, next?: number[]): number[];
    }
}

declare namespace $ {
    class $hyoo_crowd_fund<Node extends typeof $hyoo_crowd_node> extends $mol_object {
        world: $hyoo_crowd_world;
        node_class: Node;
        constructor(world: $hyoo_crowd_world, node_class: Node);
        Item(id: $mol_int62_string | `${$mol_int62_string}!${$mol_int62_string}`): InstanceType<Node>;
        make(law?: readonly ($mol_int62_string | "")[], mod?: readonly ($mol_int62_string | "")[], add?: readonly ($mol_int62_string | "")[]): InstanceType<Node>;
    }
}

declare namespace $ {
    let $mol_dict_key: typeof $mol_key;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value | undefined;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        keys(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<undefined> | IteratorYieldResult<Key>;
        };
        entries(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<undefined> | IteratorYieldResult<[Key, Value]>;
        };
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<undefined> | IteratorYieldResult<[Key, Value]>;
        };
    }
}

declare namespace $ {
    function $hyoo_crowd_time_now(): number;
    function $hyoo_crowd_time_stamp(time: number): number;
}

declare namespace $ {
    class $hyoo_crowd_clock extends Map<$mol_int62_string, number> {
        static begin: number;
        last_time: number;
        constructor(entries?: Iterable<readonly [$mol_int62_string, number]>);
        sync(right: $hyoo_crowd_clock): void;
        see_time(time: number): void;
        see_peer(peer: $mol_int62_string, time: number): void;
        see_bin(bin: $hyoo_crowd_clock_bin, group: $hyoo_crowd_unit_group): void;
        fresh(peer: $mol_int62_string, time: number): boolean;
        ahead(clock: $hyoo_crowd_clock): boolean;
        time(peer: $mol_int62_string): number;
        now(): number;
        last_stamp(): number;
        tick(peer: $mol_int62_string): number;
    }
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id: $mol_int62_string, clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock], count: number): $hyoo_crowd_clock_bin;
        land(): `${string}_${string}`;
        count(): number;
    }
}

declare namespace $ {
    class $hyoo_crowd_world extends $mol_object {
        readonly peer?: $hyoo_crowd_peer | undefined;
        constructor(peer?: $hyoo_crowd_peer | undefined);
        readonly lands_pub: $mol_wire_pub;
        _lands: Map<`${string}_${string}`, $hyoo_crowd_land>;
        get lands(): Map<`${string}_${string}`, $hyoo_crowd_land>;
        land_init(id: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_sync(id: $mol_int62_string): $hyoo_crowd_land;
        Fund<Item extends typeof $hyoo_crowd_node>(Item: Item): $hyoo_crowd_fund<Item>;
        home(): $hyoo_crowd_land;
        _knights: $mol_dict<`${string}_${string}`, $hyoo_crowd_peer>;
        _signs: WeakMap<$hyoo_crowd_unit, Uint8Array>;
        grab(law?: readonly ($mol_int62_string | "")[], mod?: readonly ($mol_int62_string | "")[], add?: readonly ($mol_int62_string | "")[]): Promise<$hyoo_crowd_land>;
        sign_units(units: readonly $hyoo_crowd_unit[]): Promise<$hyoo_crowd_unit[]>;
        delta_land(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<$hyoo_crowd_unit[]>;
        delta_batch(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<Uint8Array>;
        delta(clocks?: Map<`${string}_${string}`, readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]>): AsyncGenerator<Uint8Array, void, unknown>;
        merge(donor: $hyoo_crowd_world): Promise<void>;
        apply(delta: Uint8Array): Promise<{
            allow: $hyoo_crowd_unit[];
            forbid: Map<$hyoo_crowd_unit, string>;
        }>;
        audit_delta(land: $hyoo_crowd_land, delta: $hyoo_crowd_unit[]): Promise<{
            allow: $hyoo_crowd_unit[];
            forbid: Map<$hyoo_crowd_unit, string>;
        }>;
    }
}

declare namespace $ {
    class $hyoo_crowd_land extends $mol_object {
        id(): `${string}_${string}`;
        toJSON(): `${string}_${string}`;
        peer(): $hyoo_crowd_peer;
        peer_id(): `${string}_${string}`;
        world(): $hyoo_crowd_world | null;
        get clock_auth(): $hyoo_crowd_clock;
        get clock_data(): $hyoo_crowd_clock;
        get clocks(): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        get clocks_bin(): Uint8Array;
        readonly pub: $mol_wire_pub;
        readonly _clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        _unit_all: Map<`${string}_${string}!${string}_${string}`, $hyoo_crowd_unit>;
        unit(head: $mol_int62_string, self: $mol_int62_string): $hyoo_crowd_unit | undefined;
        _unit_lists: Map<`${string}_${string}`, ($hyoo_crowd_unit[] & {
            dirty: boolean;
        }) | undefined>;
        _unit_alives: Map<`${string}_${string}`, $hyoo_crowd_unit[] | undefined>;
        size(): number;
        unit_list(head: $mol_int62_string): $hyoo_crowd_unit[] & {
            dirty: boolean;
        };
        unit_alives(head: $mol_int62_string): readonly $hyoo_crowd_unit[];
        node<Node extends typeof $hyoo_crowd_node>(head: $mol_int62_string, Node: Node): InstanceType<Node>;
        chief: $hyoo_crowd_struct;
        id_new(): $mol_int62_string;
        fork(auth: $hyoo_crowd_peer): $hyoo_crowd_land;
        delta(clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly $hyoo_crowd_unit[];
        resort(head: $mol_int62_string): $hyoo_crowd_unit[] & {
            dirty: boolean;
        };
        apply(delta: readonly $hyoo_crowd_unit[]): this;
        _joined: boolean;
        join(): true | undefined;
        leave(): false | undefined;
        allowed_add(peer?: `${string}_${string}`): boolean;
        allowed_mod(peer?: `${string}_${string}`): boolean;
        allowed_law(peer?: `${string}_${string}`): boolean;
        level_base(next?: $hyoo_crowd_peer_level): void;
        level(peer: $mol_int62_string | '', next?: $hyoo_crowd_peer_level): $hyoo_crowd_peer_level;
        grabbed(): boolean;
        peers(): Readonly<`${string}_${string}`[]>;
        residents(): Readonly<`${string}_${string}`[]>;
        authors(): Set<`${string}_${string}`>;
        steal_rights(donor: $hyoo_crowd_land): void;
        first_stamp(): number | null;
        last_stamp(): number;
        selection(peer: $mol_int62_string): $hyoo_crowd_reg;
        put(head: $mol_int62_string, self: $mol_int62_string, prev: $mol_int62_string, data: unknown): $hyoo_crowd_unit;
        wipe(unit: $hyoo_crowd_unit): $hyoo_crowd_unit;
        move(unit: $hyoo_crowd_unit, head: $mol_int62_string, prev: $mol_int62_string): void;
        insert(unit: $hyoo_crowd_unit, head: $mol_int62_string, seat: number): void;
    }
}

declare namespace $ {
    class $hyoo_meta_model extends $hyoo_crowd_struct {
        editable(): boolean;
        editors(): readonly `${string}_${string}`[];
        title_node(): $hyoo_crowd_text;
        title(next?: string): string;
        title_selection(next?: number[]): number[];
        steal_rights(node: $hyoo_crowd_node): void;
        whole(next?: $hyoo_meta_model | null): $hyoo_meta_model;
    }
}

declare namespace $ {
    class $hyoo_crowd_dict extends $hyoo_crowd_node {
        keys(next?: string[]): string[];
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
        has(key: string): boolean;
        add(key: string): void;
        drop(key: string): void;
    }
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {
    class $hyoo_crowd_blob extends $hyoo_crowd_list {
        uri(): string;
        type(next?: string): string;
        blob(next?: $mol_blob): Blob;
        buffer(next?: Uint8Array, type?: string): Uint8Array;
        str(next?: string, type?: string): string;
        json(next?: any, type?: string): any;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $hyoo_page_side extends $hyoo_meta_model {
        referrers_node(): $hyoo_crowd_dict | null;
        referrers_list(): string[];
        referrers_stat(uri: string): number;
        referrers_track(uri: string): void | undefined;
        details_node(): $hyoo_crowd_text | null;
        details(next?: string): string;
        details_selection(next?: number[]): number[];
        release_node(): $hyoo_crowd_blob | null;
        release(next?: string): string;
        released(): boolean;
        publish(): void;
        content(): string;
        content_full(): string;
        changed_moment(): $mol_time_moment;
        book(next?: $hyoo_page_side | null): $hyoo_page_side | null;
        books(): readonly $hyoo_page_side[];
        bookmarks_node(next?: readonly $hyoo_page_side[]): $hyoo_crowd_list;
        bookmarks(next?: readonly $hyoo_page_side[]): $hyoo_page_side[];
        pages_node(): $hyoo_crowd_list;
        pages(next?: readonly $hyoo_page_side[]): $hyoo_page_side[];
        following(): $hyoo_page_side;
        following_in(): $hyoo_page_side | null;
        following_out(): $hyoo_page_side | null;
        bookmarked(id: $mol_int62_string, next?: boolean): boolean;
        authors(): `${string}_${string}`[];
        aura(next?: string): string;
        aura_effective(): string;
        history_node(): $hyoo_crowd_list | null;
        history(): Set<$mol_int62_string>;
        history_add(id: $mol_int62_string): void;
        news(): $hyoo_page_side[];
    }
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_meta_link extends $.$hyoo_meta_link {
        title(): string;
        uri(): string;
    }
}

declare namespace $ {

	type $mol_avatar__id__5ST8S6J8 = $mol_type_enforce<
		ReturnType< $hyoo_meta_link['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_dimmer__haystack__GKG5P0LU = $mol_type_enforce<
		ReturnType< $hyoo_meta_link['title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__CN77DS88 = $mol_type_enforce<
		ReturnType< $hyoo_meta_link['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	export class $hyoo_meta_link extends $mol_link {
		id( ): ReturnType< ReturnType< $hyoo_meta_link['meta'] >['id'] >
		title( ): ReturnType< ReturnType< $hyoo_meta_link['meta'] >['title'] >
		Avatar( ): $mol_avatar
		highlight( ): string
		Title( ): $mol_dimmer
		minimal_height( ): number
		meta( ): $hyoo_meta_model
		param( ): string
		all_title( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_page_side_news extends $.$hyoo_page_side_news {
        items(): $.$hyoo_meta_link[];
        item(side: $hyoo_page_side): $hyoo_page_side;
        item_title(side: $hyoo_page_side): string;
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__PJYTAO15 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_news['item'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__title__37GWF52A = $mol_type_enforce<
		ReturnType< $hyoo_page_side_news['item_title'] >
		,
		ReturnType< $hyoo_meta_link['title'] >
	>
	type $hyoo_meta_link__Avatar__JOVTTZQD = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_meta_link['Avatar'] >
	>
	type $mol_list__rows__DVQXAFN1 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_news['items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_page_side_news extends $mol_page {
		news( ): ReturnType< ReturnType< $hyoo_page_side_news['side'] >['news'] >
		item( id: any): $hyoo_page_side
		item_title( id: any): string
		Item( id: any): $hyoo_meta_link
		items( ): readonly(any)[]
		Section_list( ): $mol_list
		side( ): $hyoo_page_side
		title( ): string
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $mol_page['attr'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=news.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_magnify extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=magnify.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pencil extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pencil.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pencil_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node_external(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {

	export class $mol_drag extends $mol_ghost {
		start( next?: any ): any
		drag_start( next?: ReturnType< $mol_drag['start'] > ): ReturnType< $mol_drag['start'] >
		move( next?: any ): any
		drag_move( next?: ReturnType< $mol_drag['move'] > ): ReturnType< $mol_drag['move'] >
		end( next?: any ): any
		drag_end( next?: ReturnType< $mol_drag['end'] > ): ReturnType< $mol_drag['end'] >
		status( next?: string ): string
		event( ): ({ 
			dragstart( next?: ReturnType< $mol_drag['drag_start'] > ): ReturnType< $mol_drag['drag_start'] >,
			drag( next?: ReturnType< $mol_drag['drag_move'] > ): ReturnType< $mol_drag['drag_move'] >,
			dragend( next?: ReturnType< $mol_drag['drag_end'] > ): ReturnType< $mol_drag['drag_end'] >,
		}) 
		attr( ): ({ 
			'draggable': boolean,
			'mol_drag_status': ReturnType< $mol_drag['status'] >,
		}) 
		transfer( ): ({ 
			'text/plain': string,
			'text/html': string,
			'text/uri-list': string,
		}) 
		allow_copy( ): boolean
		allow_link( ): boolean
		allow_move( ): boolean
		image( ): ReturnType< $mol_drag['dom_node'] >
	}
	
}

//# sourceMappingURL=drag.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drag extends $.$mol_drag {
        status(next?: "ready" | "drag"): "ready" | "drag";
        drag_start(event: DragEvent): void;
        drag_end(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_drop extends $mol_ghost {
		enter( next?: any ): any
		move( next?: any ): any
		leave( next?: any ): any
		drop( next?: any ): any
		status( next?: string ): string
		enabled( next?: boolean ): boolean
		event( ): ({ 
			dragenter( next?: ReturnType< $mol_drop['enter'] > ): ReturnType< $mol_drop['enter'] >,
			dragover( next?: ReturnType< $mol_drop['move'] > ): ReturnType< $mol_drop['move'] >,
			dragleave( next?: ReturnType< $mol_drop['leave'] > ): ReturnType< $mol_drop['leave'] >,
			drop( next?: ReturnType< $mol_drop['drop'] > ): ReturnType< $mol_drop['drop'] >,
		}) 
		attr( ): ({ 
			'mol_drop_status': ReturnType< $mol_drop['status'] >,
		}) 
		adopt( next?: Record<string, any> ): Record<string, any>
		receive( next?: any ): any
		allow( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=drop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drop extends $.$mol_drop {
        status(next?: "ready" | "drag"): "ready" | "drag";
        protected _target: EventTarget | null;
        enter(event: DragEvent): void;
        move(event: DragEvent): void;
        decide_action(event: DragEvent): any;
        leave(event: DragEvent): void;
        receive(transfer: unknown): unknown;
        drop(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_icon_pin extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pin.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pin_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_meta_menu_items extends $.$hyoo_meta_menu_items {
        id(): `${string}_${string}`;
        editable(): boolean;
        item_editable(id: $mol_int62_string): boolean;
        ids(): readonly $mol_int62_string[];
        items(): $.$mol_list[];
        item(id: $mol_int62_string): $hyoo_meta_model;
        item_expandable(id: $mol_int62_string): boolean;
        item_content(id: $mol_int62_string): $mol_view[];
        item_row(id: $mol_int62_string): ($mol_button_minor | $.$mol_drop)[];
        item_remove(id: $mol_int62_string): void;
        item_pin(id: $mol_int62_string): void;
        add(): any;
        item_html(id: $mol_int62_string): string;
        item_text(id: $mol_int62_string): string;
        transfer_adopt(transfer: DataTransfer): `${string}_${string}` | null | undefined;
        receive_after(anchor: $mol_int62_string, dropped: $mol_int62_string): void;
        receive_inside(anchor: $mol_int62_string, dropped: $mol_int62_string): void;
    }
}

declare namespace $ {

	type $hyoo_meta_menu_items_item_title__UT6C3Y0A = $mol_type_enforce<
		Parameters< $hyoo_meta_menu_items['item_title'] >[0]
		,
		Parameters< $hyoo_meta_menu_items['item'] >[0]
	>
	type $mol_check_expand__expandable__0F7TPWYK = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__expanded__6QMHG0N4 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	type $hyoo_meta_link__meta__XZZOIJXX = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__param__DQ2LCK5E = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['param'] >
		,
		ReturnType< $hyoo_meta_link['param'] >
	>
	type $hyoo_meta_link__highlight__6AMA03A6 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['highlight'] >
		,
		ReturnType< $hyoo_meta_link['highlight'] >
	>
	type $hyoo_meta_link__Avatar__Z3S2N6X7 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_meta_link['Avatar'] >
	>
	type $mol_drag__end__FIH5VYBF = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_drag_end'] >
		,
		ReturnType< $mol_drag['end'] >
	>
	type $mol_drag__transfer__6J4TG2Y9 = $mol_type_enforce<
		({ 
			'text/plain': ReturnType< $hyoo_meta_menu_items['item_text'] >,
			'text/html': ReturnType< $hyoo_meta_menu_items['item_html'] >,
			'text/uri-list': ReturnType< $hyoo_meta_menu_items['item_uri'] >,
		}) 
		,
		ReturnType< $mol_drag['transfer'] >
	>
	type $mol_drag__Sub__LPYL6NKZ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['Item_link'] >
		,
		ReturnType< $mol_drag['Sub'] >
	>
	type $mol_drop__enabled__XCRLDG9H = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['editable'] >
		,
		ReturnType< $mol_drop['enabled'] >
	>
	type $mol_drop__adopt__AG03M59B = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__G9PQQ0GF = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['receive_after'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow__8OV4XD6A = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub__QBEF17WO = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['Item_drag'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__hint__2AE95P28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__9L28RVK2 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__8MICD27Q = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__9VH7NTV1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__38WJKEBS = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_pin'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__DCPYANBG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__BDPIPANM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__WPSW7HBI = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__3YESW7T5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__enabled__HOFB6RSI = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['editable'] >
		,
		ReturnType< $mol_drop['enabled'] >
	>
	type $mol_drop__adopt__B754PYEE = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__AKJV5OXF = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['receive_inside'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow__1XQTR7HZ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub__X84HJJBO = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['Item_add'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_view__sub__PLQHZV59 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_row'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_meta_menu_items__editing__EKF2ELRY = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['editing'] >
		,
		ReturnType< $hyoo_meta_menu_items['editing'] >
	>
	type $hyoo_meta_menu_items__list__3R7VT8L6 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_list'] >
		,
		ReturnType< $hyoo_meta_menu_items['list'] >
	>
	type $hyoo_meta_menu_items__item__SQ05RSK7 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item'] >
		,
		ReturnType< $hyoo_meta_menu_items['item'] >
	>
	type $hyoo_meta_menu_items__item_moved__DJNB5FQX = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
	>
	type $hyoo_meta_menu_items__item_expanded__0R58T83H = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
	>
	type $hyoo_meta_menu_items__item_list__XLEWCDNI = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_list'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_list'] >
	>
	type $hyoo_meta_menu_items__item_uri__BC4WBW1I = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
	>
	type $hyoo_meta_menu_items__highlight__Y82FLWKD = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['highlight'] >
		,
		ReturnType< $hyoo_meta_menu_items['highlight'] >
	>
	type $hyoo_meta_menu_items__item_add__35504BYC = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_add'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_add'] >
	>
	type $mol_list__rows__TU2Y1YER = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_meta_menu_items extends $mol_list {
		ids( ): ReturnType< ReturnType< $hyoo_meta_menu_items['list'] >['list'] >
		item_title( id: any): ReturnType< ReturnType< $hyoo_meta_menu_items['item'] >['title'] >
		item_expandable( id: any): boolean
		item_expanded( id: any, next?: boolean ): boolean
		Item_expand( id: any): $mol_check_expand
		editable( ): boolean
		transfer_adopt( next?: any ): any
		receive_after( id: any, next?: any ): any
		item_drag_end( id: any, next?: any ): any
		item_text( id: any): string
		item_html( id: any): string
		item_uri( id: any): string
		param( ): string
		highlight( ): string
		Item_link( id: any): $hyoo_meta_link
		Item_drag( id: any): $mol_drag
		Item_drop_after( id: any): $mol_drop
		item_remove( id: any, next?: any ): any
		Item_remove_icon( id: any): $mol_icon_close
		Item_remove( id: any): $mol_button_minor
		item_pin( id: any, next?: any ): any
		Item_pin_icon( id: any): $mol_icon_pin_outline
		Item_pin( id: any): $mol_button_minor
		receive_inside( id: any, next?: any ): any
		item_add( id: any, next?: any ): any
		Item_add_icon( id: any): $mol_icon_plus
		Item_add( id: any): $mol_button_minor
		Item_drop_inside( id: any): $mol_drop
		item_row( id: any): readonly(any)[]
		Item_row( id: any): $mol_view
		Item_items( id: any): $hyoo_meta_menu_items
		item_content( id: any): readonly(any)[]
		Item( id: any): $mol_list
		items( ): readonly(any)[]
		id( ): string
		editing( ): boolean
		drop_allow( ): readonly(any)[]
		list( ): $hyoo_crowd_list
		item( id: any): $hyoo_meta_model
		item_list( id: any): $hyoo_crowd_list
		item_moved( id: any, next?: any ): any
		rows( ): ReturnType< $hyoo_meta_menu_items['items'] >
	}
	
}

//# sourceMappingURL=items.view.tree.d.ts.map
declare namespace $ {
}

declare let $hyoo_sync_revision: string;

declare namespace $ {
    function $hyoo_sync_peer(path: string, next?: string): Promise<$hyoo_crowd_peer>;
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    let $hyoo_sync_masters: string[];
}

declare namespace $ {
    class $hyoo_sync_yard<Line> extends $mol_object2 {
        db_unit_persisted: WeakSet<$hyoo_crowd_unit>;
        log_pack(data: any): any;
        peer(next?: string): $hyoo_crowd_peer;
        world(): $hyoo_crowd_world;
        land_init(land: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_grab(law?: readonly ($mol_int62_string | "")[], mod?: readonly ($mol_int62_string | "")[], add?: readonly ($mol_int62_string | "")[]): $hyoo_crowd_land;
        home(): $hyoo_crowd_land;
        land_search(query: string): `${string}_${string}`[];
        sync(): void;
        land_sync(land: $hyoo_crowd_land): void;
        db_land_clocks(land: $mol_int62_string, next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock] | undefined;
        db_land_sync(land: $hyoo_crowd_land): void;
        db_land_init(land: $hyoo_crowd_land): void;
        db_land_load(land: $hyoo_crowd_land): Promise<$hyoo_crowd_unit[]>;
        db_land_search(from: string | number, to?: string | number): Promise<Set<`${string}_${string}`>>;
        db_land_save(land: $hyoo_crowd_land, units: readonly $hyoo_crowd_unit[]): Promise<void>;
        master_cursor(next?: number): number;
        master_list(): string[];
        master_link(): string;
        master(): any;
        server(): any;
        slaves(next?: readonly Line[]): readonly Line[];
        line_lands(line: Line, next?: $hyoo_crowd_land[]): $hyoo_crowd_land[];
        line_land_clocks({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }, next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock] | undefined;
        line_sync(line: Line): void;
        line_land_sync({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }): void;
        line_land_init({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }): void;
        line_land_neck({ line, land }: {
            line: Line;
            land: $mol_int62_string;
        }, next?: Promise<any>[]): Promise<any>[];
        line_receive(line: Line, message: Uint8Array): Promise<void>;
        line_send_clocks(line: Line, land: $hyoo_crowd_land): void;
        line_send_units(line: Line, units: readonly $hyoo_crowd_unit[]): Promise<void>;
    }
}

declare namespace $.$$ {
    class $hyoo_meta_menu extends $.$hyoo_meta_menu {
        id(): `${string}_${string}`;
        head(): ($mol_view | $.$mol_search)[];
        editable(): boolean;
        item_editable(id: $mol_int62_string): boolean;
        tools(): readonly any[];
        body(): ($.$mol_drop | $.$hyoo_meta_menu_items)[];
        search_show(next?: boolean): boolean;
        item(id: $mol_int62_string): $hyoo_meta_model;
        found(): `${string}_${string}`[];
        add(): any;
        transfer_adopt(transfer: DataTransfer): `${string}_${string}` | null | undefined;
        receive_end(dropped: $mol_int62_string): void;
    }
}

declare namespace $ {

	type $hyoo_meta_menu_item_title__3TKHT6VK = $mol_type_enforce<
		Parameters< $hyoo_meta_menu['item_title'] >[0]
		,
		Parameters< $hyoo_meta_menu['item'] >[0]
	>
	type $mol_search__query__UWTEGJDC = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['search'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_check_icon__hint__N79W815R = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__UQ7P437H = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['search_show'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__4AGMNNOG = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['Search_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__JZRIYI0H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__RH71EF8W = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__JTAX7GGT = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['Editing_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_button_minor__hint__58LZZC5L = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__TS2TDS3Z = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__WIR7JH0W = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_meta_menu_items__editing__GJUTTX3E = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editing'] >
		,
		ReturnType< $hyoo_meta_menu_items['editing'] >
	>
	type $hyoo_meta_menu_items__drop_allow__3IN3FAM1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
	>
	type $hyoo_meta_menu_items__list__FRSKKYV2 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['list'] >
		,
		ReturnType< $hyoo_meta_menu_items['list'] >
	>
	type $hyoo_meta_menu_items__ids__XAPPARAQ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['found'] >
		,
		ReturnType< $hyoo_meta_menu_items['ids'] >
	>
	type $hyoo_meta_menu_items__highlight__IZ0ALC8Z = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['search'] >
		,
		ReturnType< $hyoo_meta_menu_items['highlight'] >
	>
	type $hyoo_meta_menu_items__item_uri__TRLEIWKN = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_uri'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
	>
	type $hyoo_meta_menu_items__item_moved__67EONMVG = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_moved'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
	>
	type $hyoo_meta_menu_items__item_add__7KGHM8LL = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_add'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_add'] >
	>
	type $hyoo_meta_menu_items__editing__UQDARIJL = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editing'] >
		,
		ReturnType< $hyoo_meta_menu_items['editing'] >
	>
	type $hyoo_meta_menu_items__drop_allow__LMW1M9GQ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['drop_allow'] >
		,
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
	>
	type $hyoo_meta_menu_items__list__BWDGS9IX = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['list'] >
		,
		ReturnType< $hyoo_meta_menu_items['list'] >
	>
	type $hyoo_meta_menu_items__item_uri__0931U7NQ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_uri'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
	>
	type $hyoo_meta_menu_items__item_expanded__N6PCHZD4 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_expanded'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
	>
	type $hyoo_meta_menu_items__item_moved__80DTV1Z5 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_moved'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
	>
	type $hyoo_meta_menu_items__item_list__E8158V0A = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_list'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_list'] >
	>
	type $hyoo_meta_menu_items__item_add__XBZEZL5E = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_add'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_add'] >
	>
	type $mol_drop__enabled__N1G5GO2O = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editable'] >
		,
		ReturnType< $mol_drop['enabled'] >
	>
	type $mol_drop__adopt__4SZY5U10 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__76XPFMTF = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['receive_end'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__1MUDMUBE = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['Drop_zone'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_drop__allow__LH2BXOQW = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['drop_allow'] >
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_avatar__id__Q3G8UTCX = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	export class $hyoo_meta_menu extends $mol_page {
		item_title( id: any): ReturnType< ReturnType< $hyoo_meta_menu['item'] >['title'] >
		ids( ): ReturnType< ReturnType< $hyoo_meta_menu['list'] >['list'] >
		world( ): ReturnType< ReturnType< $hyoo_meta_menu['list'] >['world'] >
		id( ): string
		search( next?: string ): string
		Search( ): $mol_search
		search_show( next?: boolean ): boolean
		Search_icon( ): $mol_icon_magnify
		Search_toggle( ): $mol_check_icon
		editing( next?: boolean ): boolean
		Editing_icon( ): $mol_icon_pencil_outline
		Editing( ): $mol_check_icon
		add( next?: any ): any
		Add_icon( ): $mol_icon_plus
		Add( ): $mol_button_minor
		found( ): readonly($mol_int62_string)[]
		item_uri( id: any): string
		item_add( id: any, next?: any ): any
		Found( ): $hyoo_meta_menu_items
		item_expanded( id: any, next?: boolean ): boolean
		Content( ): $hyoo_meta_menu_items
		transfer_adopt( next?: any ): any
		receive_end( next?: any ): any
		Drop_zone( ): $mol_view
		Drop_end( ): $mol_drop
		editable( ): boolean
		item_moved( id: any, next?: any ): any
		yard( ): $hyoo_sync_yard<any>
		item( id: any): $hyoo_meta_model
		list( ): $hyoo_crowd_list
		item_list( id: any): $hyoo_crowd_list
		drop_allow( ): readonly(any)[]
		Logo( ): $mol_avatar
		tools_ext( ): readonly(any)[]
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_page_side_menu extends $.$hyoo_page_side_menu {
        item_expanded(id: $mol_int62_string, next?: boolean): boolean;
        item_moved(what: $mol_int62_string, where: $mol_int62_string | null): void;
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__VBVIMY43 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_menu['side'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	export class $hyoo_page_side_menu extends $hyoo_meta_menu {
		title( ): ReturnType< ReturnType< $hyoo_page_side_menu['side'] >['title'] >
		side( ): $hyoo_page_side
		side_current( ): $hyoo_page_side
		Title( ): $hyoo_meta_link
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__hint__NY0ZGQQB = $mol_type_enforce<
		ReturnType< $mol_paginator['backward_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__KIFCR9DZ = $mol_type_enforce<
		ReturnType< $mol_paginator['backward'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__0U05I8W8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__BO02OMSB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint__P5OV1X6S = $mol_type_enforce<
		ReturnType< $mol_paginator['forward_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__PPQ7MPM3 = $mol_type_enforce<
		ReturnType< $mol_paginator['forward'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__RWZJDC2L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_paginator extends $mol_bar {
		backward_hint( ): string
		backward( next?: any ): any
		Backward_icon( ): $mol_icon_chevron_left
		Backward( ): $mol_button_minor
		value( next?: number ): number
		Value( ): $mol_view
		forward_hint( ): string
		forward( next?: any ): any
		Forward_icon( ): $mol_icon_chevron_right
		Forward( ): $mol_button_minor
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paginator.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paginator extends $.$mol_paginator {
        backward(event: Event): void;
        forward(event: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_search_jumper_forward__6HQ6QMON = $mol_type_enforce<
		Parameters< $mol_search_jumper['forward'] >[0]
		,
		Parameters< ReturnType< $mol_search_jumper['Index'] >['forward'] >[0]
	>
	type $mol_search_jumper_backward__X6H3EQMT = $mol_type_enforce<
		Parameters< $mol_search_jumper['backward'] >[0]
		,
		Parameters< ReturnType< $mol_search_jumper['Index'] >['backward'] >[0]
	>
	type $mol_hotkey__mod_shift__1ZD9UU2M = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_shift'] >
	>
	type $mol_hotkey__key__OL4GCO8Y = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_search_jumper['backward'] > ): ReturnType< $mol_search_jumper['backward'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_hotkey__key__EF3EJ32C = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_search_jumper['forward'] > ): ReturnType< $mol_search_jumper['forward'] >,
			escape( next?: ReturnType< $mol_search_jumper['escape'] > ): ReturnType< $mol_search_jumper['escape'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_paginator__value__VGOQHZGA = $mol_type_enforce<
		ReturnType< $mol_search_jumper['index'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	export class $mol_search_jumper extends $mol_search {
		index( next?: number ): number
		forward( next?: ReturnType< ReturnType< $mol_search_jumper['Index'] >['forward'] > ): ReturnType< ReturnType< $mol_search_jumper['Index'] >['forward'] >
		backward( next?: ReturnType< ReturnType< $mol_search_jumper['Index'] >['backward'] > ): ReturnType< ReturnType< $mol_search_jumper['Index'] >['backward'] >
		Backward( ): $mol_hotkey
		escape( next?: any ): any
		Forward( ): $mol_hotkey
		Root( ): $mol_view
		Index( ): $mol_paginator
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=jumper.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search_jumper extends $.$mol_search_jumper {
        results(): $mol_view[][];
        index(next?: number): number;
        anchor_content(): ($.$mol_string | $mol_button_minor | $.$mol_paginator)[];
    }
}

declare namespace $ {

	export class $mol_icon_information extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=information.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_information_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_bookmark extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=bookmark.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_bookmark_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: Array<{
            regExp: RegExp;
            name: string;
            size: number;
        }>;
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        spoiler: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        grid: RegExp;
        cut: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code: RegExp;
        insert: RegExp;
        delete: RegExp;
        embed: RegExp;
        link: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-word': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {

	type $mol_view__sub__7T5YRGE4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type__65EK0WGD = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack__7T0X7TLA = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle__4N2GNMS4 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack__04LK5177 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle__IHJIROPP = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri__GW8UOQB3 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_row extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        tokens(path: number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        sub(): $mol_view[];
        row_content(path: number[]): $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        token_uri(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__WO7RQ0XK = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__ASFORD2L = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {

	type $mol_text_code_row__numb_showed__A06LFZL1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__numb__EPUAXQSA = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_row['numb'] >
	>
	type $mol_text_code_row__text__O49O2QI6 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__syntax__DYFDC4ID = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_text_code_row__uri_resolve__KWGTZ3UD = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__highlight__7V1MA9NP = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_list__render_visible_only__N9VGCKGT = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows__1UEW7BN5 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint__09EAGULG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text__WWLJJG4M = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_row
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $.$mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): any;
        sub(): ($.$mol_list | $.$mol_button_copy)[];
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_base(): string;
        uri_resolve(uri: string): string;
        text_export(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	type $mol_grid_table__sub__QZ14EKXV = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle__CWIQJ8SU = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__YVQP6AXQ = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells__AQXODQT0 = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height__V93799S0 = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width__8R2K2ZLC = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells__TF8O5SJG = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub__8IYZ2OBE = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub__MZUKJV0A = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name__8YRLITKG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub__EWP4P666 = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level__BZ9TEJXV = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label__ZKGC1122 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded__MB4P79W9 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		field( ): Record<string, any> & ReturnType< $mol_view['field'] >
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image extends $.$mol_image {
        natural_width(next?: null): number;
        natural_height(next?: null): number;
        load(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri__7N1TWYBH = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title__SBH1VBAO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link__uri__43185B0R = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__EEUMFENE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		mime( ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		uri( next?: string ): string
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'data': ReturnType< $mol_embed_native['uri'] >,
			'type': ReturnType< $mol_embed_native['mime'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        message_listener(): $mol_dom_listener;
        message_receive(event?: MessageEvent<[string, string]>): void;
        uri_change(event: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		allow( ): string
		uri( next?: string ): string
		html( ): any
		dom_name( ): string
		attr( ): ({ 
			'data': any,
			'type': any,
			'allow': ReturnType< $mol_frame['allow'] >,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
		})  & ReturnType< $mol_embed_native['attr'] >
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title__2XRTAQ6X = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__3BCH4Q0F = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title__2Y708UYO = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri__ZD5L00ZT = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_service extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_service['active'] > ): ReturnType< $mol_embed_service['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=service.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_service extends $.$mol_embed_service {
        sub(): $.$mol_frame[] | ($.$mol_image | $mol_icon_youtube)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_embed_youtube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_youtube extends $.$mol_embed_youtube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	export class $mol_embed_rutube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=rutube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_rutube extends $.$mol_embed_rutube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	type $mol_image__title__5ATOWKI4 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__4YAQZIKV = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title__WZWZZUV6 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__XXG8O9SE = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title__4XSJJ22R = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri__FXQZ6YB7 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	type $mol_embed_rutube__title__G9V6SY05 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_rutube['title'] >
	>
	type $mol_embed_rutube__uri__FUEKV6WJ = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_rutube['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
		Rutube( ): $mol_embed_rutube
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_any extends $.$mol_embed_any {
        type(): "object" | "image" | "youtube" | "rutube";
        sub(): $.$mol_image[] | $.$mol_embed_youtube[] | $.$mol_embed_native[];
    }
}

declare namespace $ {

	type $mol_check_expand__checked__A38PAIQ8 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable__7AGJCTU2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label__KOOSB9ES = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub__4EZRR6SO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__C766BJ9D = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text__text__7E2SDX8K = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text__GXERASRD = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_content'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_paragraph__sub__82LG9I8R = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__uri_resolve__INBIFWAA = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__TOMQXPDB = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight__U4TQ7ZRG = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__auto_scroll__M7X7L9QH = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text_list__uri_resolve__6GGO2S1N = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__type__3F3BNTL1 = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text__WMOMUBZQ = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight__3ODROUSN = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_header__minimal_height__OD7EWT5K = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level__Z8EFPVDS = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content__MVG08SEQ = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg__KR7X6WPU = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text__FI1GDLKF = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__highlight__U6RU010T = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve__TIYV94RP = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed__7BQQK64W = $mol_type_enforce<
		ReturnType< $mol_text['pre_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name__UW82TGZY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells__6HGRM4UY = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows__RSA1DG99 = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells__K6DC8GZ4 = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll__FEIQE02A = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight__Y40B87EF = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve__O6842OKW = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__Q90ABMM0 = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__rows__6Z7OMQDY = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells__TUKQEUWS = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll__BGFHEGWC = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight__HM61KPKW = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve__VI18T5UL = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__JXZP4DOX = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_dimmer__dom_name__33LY8MWT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle__OLYD2DRC = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__0FJM2FPC = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name__Q2MUG1JD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type__LGYMVYOI = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub__LM424T61 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_row__numb_showed__ZL8MMD89 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__highlight__RJ3TGIE7 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_text_code_row__text__N30U1UF3 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__uri_resolve__SA3SQAMM = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__syntax__RY2ZYD2P = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_link_iconed__uri__HISJ4Y25 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__XP5W6KQ5 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri__UG9RICVD = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__V0R2KLMM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri__NHDNN4DV = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title__QH9OKPCJ = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	type $mol_expander__label__XDP6CNVD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content__OJQQLAJU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		uri_resolve( id: any): string
		quote_text( id: any): string
		highlight( ): string
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		code_sidebar_showed( ): boolean
		pre_sidebar_showed( ): ReturnType< $mol_text['code_sidebar_showed'] >
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		spoiler_label( id: any): string
		Spoiler_label( id: any): $mol_text
		spoiler_content( id: any): string
		Spoiler_content( id: any): $mol_text
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_row
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
		Spoiler( id: any): $mol_expander
	}
	
	type $mol_link__arg__NHCP1ZD6 = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__4ZY3LIZC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__V1QPHT60 = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        flow_tokens(): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        block_type(index: number): string;
        rows(): ($mol_view | $.$mol_paragraph | $.$mol_text_code | $.$mol_grid)[];
        param(): string;
        header_level(index: number): number;
        header_arg(index: number): {
            [x: string]: string;
        };
        list_type(index: number): string;
        item_index(index: number): number;
        pre_text(index: number): string;
        quote_text(index: number): string;
        list_text(index: number): string;
        cell_content(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $.$mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        table_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        grid_content(indexBlock: number): string[][];
        grid_rows(blockId: number): $mol_grid_row[];
        grid_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        grid_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
        uri_base_abs(): URL;
        uri_resolve(uri: string): string;
        code_syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        block_text(index: number): string;
        block_content(index: number): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        line_tokens(path: readonly number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        link_host(path: readonly number[]): string;
        auto_scroll(): void;
        spoiler_rows(index: number): string[];
        spoiler_label(index: number): string;
        spoiler_content(index: number): string;
    }
    class $mol_text_header extends $.$mol_text_header {
        dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_calendar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar_today extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=today.view.tree.d.ts.map
declare namespace $ {

	export class $mol_format extends $mol_string {
		mask( id: any): string
		allow( ): string
		hint( ): ReturnType< $mol_format['mask'] >
		keyboard( ): string
	}
	
}

//# sourceMappingURL=format.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_format extends $.$mol_format {
        selection([from, to]?: [number, number]): number[];
        value_changed(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hor extends $mol_view {
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__CJW9KOCC = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__UVC3JQBP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__DEFL5Q6L = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub__496F84VT = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__holiday__BULWEH7C = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub__A1LEKABV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub__87FRHD2G = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost__KB6FRQAQ = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday__J59AJ93N = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected__D8U629A4 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today__E2O2JU3N = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme__AE3YXRQH = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub__HSYPS43X = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
	}
	
	export class $mol_calendar_day extends $mol_view {
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        today(): $mol_time_moment;
        day_today(day: string): boolean;
        day_ghost(day: string): boolean;
        day_theme(day: string): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {

	type $mol_button_minor__hint__XJQ0AJN2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__7CASUE5L = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__ALR3XLE9 = $mol_type_enforce<
		ReturnType< $mol_date['today_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__J2852JIH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_date_value_changed__PSUETCOH = $mol_type_enforce<
		Parameters< $mol_date['value_changed'] >[0]
		,
		Parameters< ReturnType< $mol_date['Input'] >['value_changed'] >[0]
	>
	type $mol_format__value__33D4EW1S = $mol_type_enforce<
		ReturnType< $mol_date['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask__286KABVN = $mol_type_enforce<
		ReturnType< $mol_date['input_mask'] >
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__enabled__9J4UX7KO = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_button_minor__hint__OKLLME6K = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__BV3RGE9H = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__OGIEJAZG = $mol_type_enforce<
		ReturnType< $mol_date['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__B3UFEP6B = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__1HKFHEPE = $mol_type_enforce<
		ReturnType< $mol_date['input_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint__9RAZPP30 = $mol_type_enforce<
		ReturnType< $mol_date['prev_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__Q0ALSUL4 = $mol_type_enforce<
		ReturnType< $mol_date['prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__R4MV81L1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__MZOZ1935 = $mol_type_enforce<
		ReturnType< $mol_date['next_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__O1J9QGE6 = $mol_type_enforce<
		ReturnType< $mol_date['next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__V330YO2P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__LA7LD8O5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date_calendar__enabled__HH8WFIDR = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_date_calendar['enabled'] >
	>
	type $mol_date_calendar__month_moment__EEMMEJZS = $mol_type_enforce<
		ReturnType< $mol_date['month_moment'] >
		,
		ReturnType< $mol_date_calendar['month_moment'] >
	>
	type $mol_date_calendar__day_selected__B77J8Z6N = $mol_type_enforce<
		ReturnType< $mol_date['day_selected'] >
		,
		ReturnType< $mol_date_calendar['day_selected'] >
	>
	type $mol_date_calendar__day_click__BAX9WONB = $mol_type_enforce<
		ReturnType< $mol_date['day_click'] >
		,
		ReturnType< $mol_date_calendar['day_click'] >
	>
	type $mol_date_calendar__head__D04APSAV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_date_calendar['head'] >
	>
	export class $mol_date extends $mol_pick {
		enabled( ): boolean
		today_click( next?: any ): any
		Today_icon( ): $mol_icon_calendar_today
		Today( ): $mol_button_minor
		value( next?: string ): string
		value_changed( next?: ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] > ): ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] >
		input_mask( id: any): string
		Input( ): $mol_format
		clear( next?: any ): any
		Clear_icon( ): $mol_icon_trash_can_outline
		Clear( ): $mol_button_minor
		input_content( ): readonly(any)[]
		Input_row( ): $mol_view
		month_moment( ): ReturnType< $mol_date['value_moment'] >
		day_selected( id: any): boolean
		day_click( id: any, next?: any ): any
		Calendar_title( ): ReturnType< ReturnType< $mol_date['Calendar'] >['Title'] >
		prev_hint( ): string
		prev( next?: any ): any
		Prev_icon( ): $mol_icon_chevron_left
		Prev( ): $mol_button_minor
		next_hint( ): string
		next( next?: any ): any
		Next_icon( ): $mol_icon_chevron_right
		Next( ): $mol_button_minor
		Calendar_tools( ): $mol_view
		Calendar( ): $mol_date_calendar
		Icon( ): $mol_icon_calendar
		bubble_content( ): readonly(any)[]
		value_number( next?: number ): number
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
	type $mol_button_minor__title__G61Y3QZV = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_text'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__event_click__A02972DF = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_click'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__minimal_height__ND7LC56V = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__enabled__VM21XJNW = $mol_type_enforce<
		ReturnType< $mol_date_calendar['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	export class $mol_date_calendar extends $mol_calendar {
		day_click( id: any, next?: any ): any
		enabled( ): boolean
		Day_button( id: any): $mol_button_minor
		day_content( id: any): readonly(any)[]
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): (string | $mol_icon_calendar)[];
        input_mask(val: string): "____-__-__ __:__" | "____-__-__ ";
        input_content(): ($mol_button_minor | $.$mol_format)[];
        value(val?: string): string;
        value_moment(next?: $mol_time_moment): $mol_time_moment;
        value_number(next?: number): number;
        value_moment_today(): $mol_time_moment;
        clear(): void;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
        today_click(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_list_item__index__XLAI2IGX = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub__FAOSTXVQ = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_page_side_view extends $.$hyoo_page_side_view {
        head(): ($mol_view | $.$mol_search_jumper)[];
        bookmark(next?: boolean): boolean;
        public(next?: boolean): boolean | undefined;
        Edit_toggle(): any;
        edit_toggle_label(): $mol_speck[];
        search_show(next?: boolean): boolean;
        search_start(event?: KeyboardEvent): void;
        search_stop(event?: KeyboardEvent): void;
        details(): string;
        Following(): $.$hyoo_meta_link;
        author_list(): $.$hyoo_meta_link[];
        slides_send(): void;
        history_mark(): void;
        author_link(id: $mol_int62_string): string;
    }
}

declare namespace $ {

	type $hyoo_page_side_view_title__CLTNADVJ = $mol_type_enforce<
		Parameters< $hyoo_page_side_view['title'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_view['side'] >['title'] >[0]
	>
	type $hyoo_page_side_view_side_details__PTRNBAK1 = $mol_type_enforce<
		Parameters< $hyoo_page_side_view['side_details'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_view['side'] >['details'] >[0]
	>
	type $mol_hotkey__key__2MU1F3TF = $mol_type_enforce<
		({ 
			F( next?: ReturnType< $hyoo_page_side_view['search_start'] > ): ReturnType< $hyoo_page_side_view['search_start'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_hotkey__mod_ctrl__4OZFB8NV = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_avatar__id__C1K483ZV = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_check__checked__PBZRMY9J = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['menu_showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__hint__9WBXZOX0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__sub__TXQOZU8L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_search_jumper__query__XFAN6VAZ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_query'] >
		,
		ReturnType< $mol_search_jumper['query'] >
	>
	type $mol_search_jumper__Root__MZH1NTUZ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Details'] >
		,
		ReturnType< $mol_search_jumper['Root'] >
	>
	type $mol_search_jumper__clear__7CR8P4T2 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_stop'] >
		,
		ReturnType< $mol_search_jumper['clear'] >
	>
	type $mol_check_icon__hint__GV4JTV3W = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__ADOC0R2R = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__Z6CUF82X = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Edit_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__label__A2AD5O3T = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['edit_toggle_label'] >
		,
		ReturnType< $mol_check_icon['label'] >
	>
	type $mol_check_icon__hint__TJTWBGO3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__0Z8L0V82 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_show'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__SGX3Z7RJ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Search_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__90WFTRVJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__EM7KRG4T = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['info'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__EXHKX83O = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Info_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__I49NY6ME = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__FD9A0O1Q = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['bookmark'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__ASL64WM5 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Bookmark_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_text__text__HJY4T54I = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['details'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight__8SZG5NBI = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_query'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_date__value_moment__ZUTGZ1WK = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['changed_moment'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $hyoo_meta_link__meta__31U347QH = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['peer'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__uri__M426BEEX = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['author_link'] >
		,
		ReturnType< $hyoo_meta_link['uri'] >
	>
	type $mol_view__sub__SVAP0VUJ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['author_list'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_meta_link__meta__KNMU55Y1 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['following'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $mol_view__sub__SKV4MXAZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_page_side_view extends $mol_page {
		id( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['id'] >
		editable( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['editable'] >
		title( next?: ReturnType< ReturnType< $hyoo_page_side_view['side'] >['title'] > ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['title'] >
		side_details( next?: ReturnType< ReturnType< $hyoo_page_side_view['side'] >['details'] > ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['details'] >
		released( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['released'] >
		side_release( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['release'] >
		changed_moment( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['changed_moment'] >
		authors( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['authors'] >
		following( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['following'] >
		search_start( next?: any ): any
		Search_start( ): $mol_hotkey
		slides_send( ): any
		history_mark( ): any
		menu_showed( next?: boolean ): boolean
		Avatar( ): $mol_avatar
		Menu_toggle( ): $mol_check
		search_query( next?: string ): string
		search_stop( next?: any ): any
		Search( ): $mol_search_jumper
		editing( next?: boolean ): boolean
		Edit_icon( ): $mol_icon_pencil_outline
		Unreleased( ): $mol_speck
		edit_toggle_label( ): readonly(any)[]
		Edit_toggle( ): $mol_check_icon
		search_show( next?: boolean ): boolean
		Search_icon( ): $mol_icon_magnify
		Search_toggle( ): $mol_check_icon
		info( next?: boolean ): boolean
		Info_icon( ): $mol_icon_information_outline
		Info_toggle( ): $mol_check_icon
		bookmark( next?: boolean ): boolean
		Bookmark_icon( ): $mol_icon_bookmark_outline
		Bookmark_toggle( ): $mol_check_icon
		details( ): string
		Details( ): $mol_text
		Changed( ): $mol_date
		author_link( id: any): string
		Author_link( id: any): $hyoo_meta_link
		author_list( ): readonly(any)[]
		Author_list( ): $mol_view
		Following( ): $hyoo_meta_link
		Signature( ): $mol_view
		profile( ): $hyoo_page_side
		peer( id: any): $hyoo_page_side
		book( ): $hyoo_page_side
		highlight( ): string
		side( ): $hyoo_page_side
		plugins( ): readonly(any)[]
		auto( ): readonly(any)[]
		Logo( ): ReturnType< $hyoo_page_side_view['Menu_toggle'] >
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_publish extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=publish.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_export extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=export.view.tree.d.ts.map
declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: null | Set<string>;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {

	export class $mol_icon_download extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_download extends $.$mol_button_download {
        uri(): string;
        click(): void;
    }
}

declare namespace $ {

	export class $mol_button_download extends $mol_button_minor {
		Icon( ): $mol_icon_download
		title( ): string
		blob( ): any
		uri( ): string
		file_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_shield extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=shield.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_shield_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea_edit__value__AWDFTBZB = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint__T37UD1EQ = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled__V8ZNAWSK = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck__VF90CCAA = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max__2ZYYN1RI = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection__SGD150LL = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit__VOFF8TUM = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl__W12L18XV = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text__I7DMVZY7 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only__PLMLJA62 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb__RRU8OM0C = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed__LD9SG0YP = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight__9T7H40YX = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        symbol_insert(event: KeyboardEvent): void;
        clickable(next?: boolean): boolean;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_string_button extends $mol_string {
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__GBYZJVQ7 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__SASH9N28 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__SDA3XCGZ = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__3JJHNFN9 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__9BW5WBJS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub__WTTPOZXD = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_row__sub__VNIFPQXV = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		submit( next?: any ): any
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $hyoo_marked_cut: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_line_content: $mol_regexp<{}>;
    let $hyoo_marked_line: $mol_regexp<{
        [x: string]: string;
        readonly inline: string;
        readonly code: string;
        readonly embed: string;
        readonly strong: string;
        readonly emphasis: string;
        readonly insertion: string;
        readonly deletion: string;
        readonly link: string;
        readonly marker: string;
        readonly uri: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_header: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_list_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_list_item: $mol_regexp<{
        [x: string]: string;
        readonly kids: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_list: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly kids: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_quote_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_quote: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_table_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_table_row: $mol_regexp<{
        [x: string]: string;
        readonly content: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
    }>;
    let $hyoo_marked_table: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_script_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
    let $hyoo_marked_script: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_paragraph: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_flow: $mol_regexp<{
        [x: string]: string;
        readonly list: string;
        readonly header: string;
        readonly table: string;
        readonly quote: string;
        readonly cut: string;
        readonly paragraph: string;
        readonly script: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
        readonly kids: string;
        readonly indent: string;
        readonly marker: string;
    }>;
}

declare namespace $ {
    function $hyoo_marked_to_dom(this: $, marked: string): $mol_jsx.JSX.Element;
}

declare namespace $ {
    function $hyoo_marked_to_html(this: $, marked: string): string;
}

declare namespace $.$$ {
    class $hyoo_page_side_edit extends $.$hyoo_page_side_edit {
        publish(): void;
        permalink(): string;
        export_sign(): string;
        download_name(): string;
        copy_text(): string;
        download_blob(): Blob;
        copy_html(): string;
    }
}

declare namespace $ {

	type $hyoo_page_side_edit_title__X4P8S011 = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['title'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['title'] >[0]
	>
	type $hyoo_page_side_edit_details__5VDFIMP5 = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['details'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['details'] >[0]
	>
	type $hyoo_page_side_edit_details_selection__NNNTZC90 = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['details_selection'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['details_selection'] >[0]
	>
	type $hyoo_page_side_edit_aura__O9ZODFBL = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['aura'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['aura'] >[0]
	>
	type $mol_link_iconed__hint__0QT6LABQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__PGQ2F9VC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__icon__J4FRCOUL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['icon'] >
	>
	type $mol_link_iconed__title__45XPSXI6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_button_minor__click__YMKV8U8I = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['publish'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__disabled__VFK42LLH = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['released'] >
		,
		ReturnType< $mol_button_minor['disabled'] >
	>
	type $mol_button_minor__hint__SAVO3N3Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__IVY8EZSW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_download__title__4N9ODY92 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['title'] >
	>
	type $mol_button_download__file_name__P8AZWTJS = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['download_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_button_download__blob__7BF3KSNL = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['download_blob'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_copy__title__MDIGGK27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__text__NFRX6J7T = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['copy_text'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_button_copy__html__2680KZOP = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['copy_html'] >
		,
		ReturnType< $mol_button_copy['html'] >
	>
	type $mol_pick__hint__3U9AMVKH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['hint'] >
	>
	type $mol_pick__trigger_content__XJ30TOIY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content__2P04Z0ZE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $mol_check_icon__hint__MIW0Z1IM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__GZFRBCDA = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['rights'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__VN5YLGC5 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['Rights_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_button_minor__click__Z7IV94YQ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__HZ2TXJRD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_textarea__hint__973FIWNW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__P6QX4O1O = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['details'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection__OZNPHC1L = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['details_selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	type $mol_textarea__enabled__3EL6PW2Y = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['editable'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_string_button__hint__UAJMS37O = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $mol_string_button__value__DMTWLJJX = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['aura'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__enabled__EELQF6N5 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['editable'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	type $mol_form_field__name__C42ZHX6Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__UEQQ747E = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['Aura'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string_button__hint__9RJ2LLLB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $mol_string_button__value__J1OEW8VT = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__enabled__KFO8F3LF = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['editable'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	export class $hyoo_page_side_edit extends $mol_page {
		title( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['title'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['title'] >
		details( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details'] >
		details_selection( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details_selection'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details_selection'] >
		content_full( ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['content_full'] >
		aura( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['aura'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['aura'] >
		editable( ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['editable'] >
		released( ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['released'] >
		Syntax( ): $mol_link_iconed
		publish( next?: any ): any
		Publish_icon( ): $mol_icon_publish
		Publish( ): $mol_button_minor
		Export_icon( ): $mol_icon_export
		download_name( ): string
		download_blob( ): $mol_blob
		Download( ): $mol_button_download
		copy_text( ): string
		copy_html( ): string
		Copy_html( ): $mol_button_copy
		Export( ): $mol_pick
		rights( next?: boolean ): boolean
		Rights_icon( ): $mol_icon_shield_account
		Rights_toggle( ): $mol_check_icon
		close( next?: any ): any
		Close_icon( ): $mol_icon_close
		Close( ): $mol_button_minor
		Details_edit( ): $mol_textarea
		Aura( ): $mol_string_button
		Aura_field( ): $mol_form_field
		side( ): $hyoo_page_side
		Title( ): $mol_string_button
		export_sign( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=edit.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {
    enum $mol_si_prefix {
        y = -8,
        z = -7,
        a = -6,
        f = -5,
        p = -4,
        n = -3,
        µ = -2,
        m = -1,
        '' = 0,
        k = 1,
        M = 2,
        G = 3,
        T = 4,
        P = 5,
        E = 6,
        Z = 7,
        Y = 8
    }
}

declare namespace $ {
    function $mol_si_short(numb: number, unit?: string): string;
}

declare namespace $ {
    function $mol_text_profile(text: string): Map<string, number>;
}

declare namespace $.$$ {
    class $hyoo_page_side_info extends $.$hyoo_page_side_info {
        slides_uri(): string;
        section_indexes(): number[];
        section_list(): $.$mol_link[];
        section_title(index: number): string;
        ref_list(): $mol_view[];
        ref_uri(uri: string): string;
        ref_stat(uri: string): number;
        weight(): string;
        word_stat(): Map<string, number>;
        word_list_items(): $mol_view[];
        word_item_text(word: string): string;
        word_item_stat(word: string): number;
        size(): string;
        chars(): string;
        words(): string;
    }
}

declare namespace $ {

	type $hyoo_page_side_info_text_header_title__T4CMMMXP = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['text_header_title'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['Text'] >['block_text'] >[0]
	>
	type $hyoo_page_side_info_section_arg__UXJUIQF9 = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['section_arg'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['Text'] >['header_arg'] >[0]
	>
	type $hyoo_page_side_info_section_level__Y0X8VU9J = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['section_level'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['Text'] >['header_level'] >[0]
	>
	type $hyoo_page_side_info_referrers_stat__BOY60A7A = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['referrers_stat'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['side'] >['referrers_stat'] >[0]
	>
	type $mol_link_iconed__hint__TCP23B99 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__TDTL42ZI = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['slides_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__RI0Z3QC2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_button_minor__click__I9IG7W5L = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__GURJD8AA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_labeler__title__G8TTD4DQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__3XIT3BE0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title__D1SSYLYB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__VUFHHY9W = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title__LXZKRWVS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__FL0KV6KL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title__RI1ELUAH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__7G9Q23CK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub__873AWJXB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__arg__JHFBZWR1 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__9TNIC3OT = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_expander__title__CB4DFXNX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__UQA7FY2E = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__content__QJQFNV2V = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_list'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_link_iconed__uri__XP4WDSOI = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['ref_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_view__sub__WV873Q45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__W3WLLHEH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_expander__title__EWSHIVF6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__JPOHD0EA = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['ref_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__content__O391JNU0 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['ref_list'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_view__sub__QODDQ1PN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_speck__value__QYTOTB92 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['word_item_stat'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_speck__theme__2KGTZ3S1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_speck['theme'] >
	>
	type $mol_view__sub__WW4DX1O3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_row__sub__K4IPXXP7 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['word_list_items'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_expander__title__98SKJLR3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content__1DXKHCGZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $hyoo_page_side_info extends $mol_page {
		text_tokens( ): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['flow_tokens'] >
		text_header_title( id: any): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['block_text'] >
		section_arg( id: any): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['header_arg'] >
		section_level( id: any): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['header_level'] >
		details( ): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['details'] >
		details_node( ): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['details_node'] >
		referrers_list( ): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['referrers_list'] >
		referrers_stat( id: any): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['referrers_stat'] >
		slides_uri( ): string
		Slides( ): $mol_link_iconed
		close( next?: any ): any
		Close_icon( ): $mol_icon_close
		Close( ): $mol_button_minor
		size( ): string
		Size( ): $mol_labeler
		chars( ): string
		Chars( ): $mol_labeler
		words( ): string
		Words( ): $mol_labeler
		weight( ): string
		Weight( ): $mol_labeler
		Stat( ): $mol_view
		section_expanded( next?: boolean ): boolean
		section_title( id: any): string
		Section_link( id: any): $mol_link
		section_list( ): readonly(any)[]
		Section_list( ): $mol_expander
		ref_expanded( next?: boolean ): boolean
		ref_uri( id: any): string
		Ref_item_link( id: any): $mol_link_iconed
		ref_stat( id: any): number
		Ref_item_stat( id: any): $mol_view
		Ref_item( id: any): $mol_view
		ref_list( ): readonly(any)[]
		Ref_list( ): $mol_expander
		word_item_text( id: any): string
		Word_item_text( id: any): $mol_view
		word_item_stat( id: any): number
		Word_item_stat( id: any): $mol_speck
		Word_item( id: any): $mol_view
		word_list_items( ): readonly(any)[]
		Word_list_items( ): $mol_row
		Word_list( ): $mol_expander
		Text( ): $mol_text
		side( ): $hyoo_page_side
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=info.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {
    class $hyoo_meta_person extends $hyoo_meta_model {
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_meta_rights extends $.$hyoo_meta_rights {
        editable(): boolean;
        blocks(): ($.$mol_list | $.$mol_form_field)[];
        editor_list(): $.$hyoo_meta_link[];
        editor_add_rows(): ($mol_button_minor | $.$hyoo_meta_link | $mol_bar)[];
        editor_add_id(next?: string): $mol_int62_string;
        editor_add_allowed(): boolean;
        editor_add_bid(): string;
        editor_fill_all(): void;
        editor_add_submit(): void;
        editor_add_preview(): $hyoo_meta_person;
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__0HQHL13U = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['peer'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $mol_list__rows__HVGO25GS = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_string__hint__8J83BUUU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__LVXG3UV9 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_id'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__2F8YOCYM = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editable'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_button_major__enabled__SKBERRL1 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_allowed'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__click__FUGXELV0 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__16MZ9KY6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_bar__sub__2GD993UR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $hyoo_meta_link__meta__F5BKSUYW = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_preview'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $mol_button_minor__title__KKWL6MDS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__6YWA3KRJ = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_fill_all'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_list__rows__ZTYWNORA = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_form_field__name__DK1K4G6I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__JAD7ZT65 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__485FSOJU = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['Editor_add_form'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows__8KYP5JSA = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['blocks'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_meta_rights extends $mol_page {
		editors( ): ReturnType< ReturnType< $hyoo_meta_rights['meta'] >['editors'] >
		peer( id: any): $hyoo_meta_person
		Editor_link( id: any): $hyoo_meta_link
		editor_list( ): readonly(any)[]
		Editor_list( ): $mol_list
		editor_add_bid( ): string
		editor_add_id( next?: string ): string
		editable( ): boolean
		Editor_add_id( ): $mol_string
		editor_add_allowed( ): boolean
		editor_add_submit( next?: any ): any
		Editor_add_icon( ): $mol_icon_plus
		Editor_add_submit( ): $mol_button_major
		Editor_add_bar( ): $mol_bar
		editor_add_preview( ): $hyoo_meta_model
		Editor_add_preview( ): $hyoo_meta_link
		editor_fill_all( next?: any ): any
		Editor_fill_all( ): $mol_button_minor
		editor_add_rows( ): readonly(any)[]
		Editor_add_form( ): $mol_list
		Editor_add( ): $mol_form_field
		blocks( ): readonly(any)[]
		Content( ): $mol_list
		title( ): string
		meta( ): $hyoo_meta_model
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=rights.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_eye extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=eye.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__type__J4OSC55Y = $mol_type_enforce<
		ReturnType< $mol_password['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__hint__7B9SL8Y2 = $mol_type_enforce<
		ReturnType< $mol_password['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__D9UN9KBN = $mol_type_enforce<
		ReturnType< $mol_password['value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit__IO4ZVCJZ = $mol_type_enforce<
		ReturnType< $mol_password['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__DZQPVN2G = $mol_type_enforce<
		ReturnType< $mol_password['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_check_icon__checked__DJUJ08U0 = $mol_type_enforce<
		ReturnType< $mol_password['checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__QY54TYMG = $mol_type_enforce<
		ReturnType< $mol_password['Show_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	export class $mol_password extends $mol_view {
		hint( ): string
		value( next?: string ): string
		submit( next?: any ): any
		enabled( ): boolean
		Pass( ): $mol_string
		checked( next?: boolean ): boolean
		Show_icon( ): $mol_icon_eye
		Show( ): $mol_check_icon
		content( ): readonly(any)[]
		type( next?: string ): string
		sub( ): ReturnType< $mol_password['content'] >
	}
	
}

//# sourceMappingURL=password.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_password extends $.$mol_password {
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_crypto_hash(data: Uint8Array): Uint8Array;
}

declare namespace $ {
    class $mol_crypto_secret extends Object {
        readonly native: CryptoKey & {
            type: 'secret';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'secret';
        });
        static generate(): Promise<$mol_crypto_secret>;
        static from(serial: BufferSource): Promise<$mol_crypto_secret>;
        static pass(pass: string, salt: Uint8Array): Promise<$mol_crypto_secret>;
        static derive(private_serial: string, public_serial: string): Promise<$mol_crypto_secret>;
        serial(): Promise<Uint8Array>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array>;
    }
}

declare namespace $ {
    class $mol_after_work extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wait_rest_async(this: $): Promise<unknown>;
    function $mol_wait_rest(this: $): unknown;
}

declare namespace $.$$ {
    class $hyoo_meta_safe extends $.$hyoo_meta_safe {
        password_bid(): string;
        content(): $.$mol_list[];
        recall(next?: string): string;
        recall_enabled(): boolean;
        peer_current(): `${string}_${string}`;
        peer_new(): `${string}_${string}`;
        key_import(next?: string | null): string | null;
        key_new(): string | null;
        import_switch(): void;
        key_export(): string;
        export_rows(): ($.$mol_list | $.$mol_link)[];
        import_rows(): ($.$mol_list | $mol_button_minor)[];
        export_link(): string;
    }
}

declare namespace $ {

	type $mol_text__text__CAFSEZ5S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_password__value__9YG4ZLOW = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['password'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_form_field__name__J8LKPMNW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bids__IHVQLJVP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['bids'] >
	>
	type $mol_form_field__Content__AUPPZ1MB = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['Password'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__enabled__CQ5Q7X1C = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['recall_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__value__J22PKGKV = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['recall'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__AEXYZF1H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__URHCNMAZ = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['Recall'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows__T9JZ27W5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_link__uri__44PESAKC = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['export_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__6CE40SYQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__rows__PP99ZASO = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['export_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_text__text__GVOX9BT9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__RZIYC5P7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_avatar__id__BNDESLQU = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['peer_new'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_button_minor__click__66Y98MTU = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['import_switch'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__V2LJTB0Q = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__OXAXV6AX = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['import_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows__GMDNW1QD = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_meta_safe extends $mol_page {
		Expot_bid( ): $mol_text
		password_bid( ): string
		password( next?: string ): string
		Password( ): $mol_password
		Password_field( ): $mol_form_field
		recall_enabled( ): boolean
		recall( next?: string ): string
		Recall( ): $mol_string
		Recall_field( ): $mol_form_field
		Export_pass( ): $mol_list
		export_link( ): string
		Export_link( ): $mol_link
		export_rows( ): readonly(any)[]
		Export_block( ): $mol_list
		Iport_descr( ): $mol_text
		Import_pass( ): $mol_list
		import_switch( next?: any ): any
		peer_new( ): string
		Peer_new( ): $mol_avatar
		impot_switch_title( ): string
		Import_switch( ): $mol_button_minor
		import_rows( ): readonly(any)[]
		Import_block( ): $mol_list
		content( ): readonly(any)[]
		Content( ): $mol_list
		title( ): string
		yard( ): $hyoo_sync_yard<any>
		bid_pass_long( ): string
		key_size( ): number
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $mol_page['attr'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=safe.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_sync extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sync.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync_off extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=off.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sync_online extends $.$hyoo_sync_online {
        message(): string;
        link_content(): $mol_icon_sync_off[];
        hint(): string;
        master_link(): string;
        master_id(index: number): string;
        option_label(index: number): string;
        value(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $hyoo_sync_online_master_cursor__32X0B268 = $mol_type_enforce<
		Parameters< $hyoo_sync_online['master_cursor'] >[0]
		,
		Parameters< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] >[0]
	>
	type $mol_avatar__id__LJ0YU7FV = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_avatar__id__LWV1PY2I = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_link'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_link__uri__1GWIXQTF = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__XRU9RI7W = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint__4ZSORW7Q = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['message'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	export class $hyoo_sync_online extends $mol_select {
		dictionary( ): ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_list'] >
		master_cursor( next?: ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] > ): ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] >
		master_id( id: any): string
		Option_logo( id: any): $mol_avatar
		master_link( ): string
		Well( ): $mol_avatar
		Fail( ): $mol_icon_sync_off
		link_content( ): readonly(any)[]
		hint( ): string
		message( ): ReturnType< $hyoo_sync_online['hint'] >
		Link( ): $mol_link
		minimal_width( ): number
		minimal_height( ): number
		yard( ): $hyoo_sync_yard<any>
		Filter( ): any
		option_content( id: any): readonly(any)[]
		trigger_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=online.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=key.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_image extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_page_menu extends $.$hyoo_page_menu {
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__LW6O5ZF9 = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['side'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__hint__TNC2Y417 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_meta_link['hint'] >
	>
	type $hyoo_meta_link__Title__ZRU40D1K = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_meta_link['Title'] >
	>
	type $hyoo_meta_link__relation__15PFSIU7 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_meta_link['relation'] >
	>
	type $hyoo_sync_online__yard__VRICPW8F = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['yard'] >
		,
		ReturnType< $hyoo_sync_online['yard'] >
	>
	type $mol_check_icon__hint__OFM4T7AF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__X0YMGWO5 = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['Safe_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__0JHLXW9Q = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['safe_showing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_link_iconed__hint__1VRJ8CXW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__title__C85FG738 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__MGUO9WY0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_check_icon__hint__AJFDQ0EY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__PNJRUT4W = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['Aura_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__99CVFC8S = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['aura_showing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	export class $hyoo_page_menu extends $hyoo_meta_menu {
		side( ): $hyoo_page_side
		Profile( ): $hyoo_meta_link
		Online( ): $hyoo_sync_online
		Safe_icon( ): $mol_icon_key_variant
		safe_showing( next?: boolean ): boolean
		Safe_showing( ): $mol_check_icon
		About( ): $mol_link_iconed
		Aura_icon( ): $mol_icon_image
		aura_showing( next?: boolean ): boolean
		Aura_showing( ): $mol_check_icon
		Lights( ): $mol_lights_toggle
		title( ): string
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $hyoo_meta_menu['attr'] >
		head( ): readonly(any)[]
		Logo( ): any
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema["Doc"];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $hyoo_sync_client extends $hyoo_sync_yard<WebSocket | Window> {
        db(): Promise<$mol_db_database<{
            Unit: {
                Key: [$mol_int62_string, $mol_int62_string, $mol_int62_string];
                Doc: $hyoo_crowd_unit;
                Indexes: {
                    Land: [$mol_int62_string];
                    Data: [$mol_int62_string];
                };
            };
        }>>;
        db_land_load(land: $hyoo_crowd_land): Promise<$hyoo_crowd_unit[]>;
        db_land_search(from: string, to?: string): Promise<Set<`${string}_${string}`>>;
        db_land_save(land: $hyoo_crowd_land, units: readonly $hyoo_crowd_unit[]): Promise<void>;
        reconnects(reset?: null): number;
        master(): WebSocket;
        line_send_clocks(line: WebSocket | Window, land: $hyoo_crowd_land): void;
        line_send_units(line: WebSocket | Window, units: readonly $hyoo_crowd_unit[]): Promise<void>;
    }
}

declare namespace $ {
    function $mol_wire_stale<Res>(task: () => Res): Res | undefined;
}

declare namespace $ {
    function $mol_offline(): void;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_page extends $.$hyoo_page {
        profile(): $hyoo_page_side;
        title(): string;
        aura_showing(next?: boolean): boolean;
        aura_image(): string;
        editing(next?: boolean): boolean;
        rights(next?: boolean): boolean;
        info(next?: boolean): boolean;
        safe(next?: boolean): boolean;
        edit_close(): void;
        rights_close(): void;
        info_close(): void;
        safe_close(): void;
        side(id: $mol_int62_string): $hyoo_page_side;
        side_uri(id: $mol_int62_string): string;
        side_current_id(): $mol_int62_string;
        side_current(): $hyoo_page_side;
        side_current_book(): $hyoo_page_side;
        book_id(): "" | `${string}_${string}`;
        book_side(): $hyoo_page_side;
        book_pages_node(): $hyoo_crowd_list;
        side_menu_showed(next?: boolean): boolean;
        pages(): ($mol_view | $.$hyoo_page_side_menu | $.$hyoo_page_side_view | $.$hyoo_page_side_edit | $.$hyoo_page_side_info | $.$hyoo_meta_rights | $.$hyoo_meta_safe)[];
        page_add(): void;
        side_add(id: $mol_int62_string): void;
        ref_track(): void;
    }
}

declare namespace $ {

	type $hyoo_page_side_title__ILH15Y9A = $mol_type_enforce<
		Parameters< $hyoo_page['side_title'] >[0]
		,
		Parameters< $hyoo_page['side'] >[0]
	>
	type $hyoo_page_pages_node__EH2KTS4N = $mol_type_enforce<
		Parameters< $hyoo_page['pages_node'] >[0]
		,
		Parameters< $hyoo_page['side'] >[0]
	>
	type $hyoo_page_side_news__side__10HP4C2F = $mol_type_enforce<
		ReturnType< $hyoo_page['profile'] >
		,
		ReturnType< $hyoo_page_side_news['side'] >
	>
	type $hyoo_page_side_menu__yard__5UTAEPUN = $mol_type_enforce<
		ReturnType< $hyoo_page['yard'] >
		,
		ReturnType< $hyoo_page_side_menu['yard'] >
	>
	type $hyoo_page_side_menu__side__36V6CHED = $mol_type_enforce<
		ReturnType< $hyoo_page['book_side'] >
		,
		ReturnType< $hyoo_page_side_menu['side'] >
	>
	type $hyoo_page_side_menu__side_current__RCYLQS47 = $mol_type_enforce<
		ReturnType< $hyoo_page['side_current'] >
		,
		ReturnType< $hyoo_page_side_menu['side_current'] >
	>
	type $hyoo_page_side_menu__list__9PBCIMLT = $mol_type_enforce<
		ReturnType< $hyoo_page['book_pages_node'] >
		,
		ReturnType< $hyoo_page_side_menu['list'] >
	>
	type $hyoo_page_side_menu__item_list__SIMAP5YY = $mol_type_enforce<
		ReturnType< $hyoo_page['pages_node'] >
		,
		ReturnType< $hyoo_page_side_menu['item_list'] >
	>
	type $hyoo_page_side_menu__item_uri__5RV76AMZ = $mol_type_enforce<
		ReturnType< $hyoo_page['side_uri'] >
		,
		ReturnType< $hyoo_page_side_menu['item_uri'] >
	>
	type $hyoo_page_side_menu__item_add__GK388LGS = $mol_type_enforce<
		ReturnType< $hyoo_page['side_add'] >
		,
		ReturnType< $hyoo_page_side_menu['item_add'] >
	>
	type $hyoo_page_side_menu__tools_ext__RBVTP16V = $mol_type_enforce<
		ReturnType< $hyoo_page['tools_ext'] >
		,
		ReturnType< $hyoo_page_side_menu['tools_ext'] >
	>
	type $hyoo_page_View_details__556Y7TFZ = $mol_type_enforce<
		Parameters< $hyoo_page['View_details'] >[0]
		,
		Parameters< $hyoo_page['View'] >[0]
	>
	type $hyoo_page_side_view__side__4F4TT0EY = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_view['side'] >
	>
	type $hyoo_page_side_view__peer__CFBPQUZ8 = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_view['peer'] >
	>
	type $hyoo_page_side_view__profile__7IPS03EQ = $mol_type_enforce<
		ReturnType< $hyoo_page['profile'] >
		,
		ReturnType< $hyoo_page_side_view['profile'] >
	>
	type $hyoo_page_side_view__menu_showed__SA3I3YMY = $mol_type_enforce<
		ReturnType< $hyoo_page['side_menu_showed'] >
		,
		ReturnType< $hyoo_page_side_view['menu_showed'] >
	>
	type $hyoo_page_side_view__editing__OULWJ8TA = $mol_type_enforce<
		ReturnType< $hyoo_page['editing'] >
		,
		ReturnType< $hyoo_page_side_view['editing'] >
	>
	type $hyoo_page_side_view__info__FOCXCVCO = $mol_type_enforce<
		ReturnType< $hyoo_page['info'] >
		,
		ReturnType< $hyoo_page_side_view['info'] >
	>
	type $hyoo_page_side_view__highlight__417F05PR = $mol_type_enforce<
		ReturnType< $hyoo_page['search'] >
		,
		ReturnType< $hyoo_page_side_view['highlight'] >
	>
	type $hyoo_page_side_edit__side__ARXVII1U = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_edit['side'] >
	>
	type $hyoo_page_side_edit__rights__I90C4SJF = $mol_type_enforce<
		ReturnType< $hyoo_page['rights'] >
		,
		ReturnType< $hyoo_page_side_edit['rights'] >
	>
	type $hyoo_page_side_edit__close__R0FH8LQZ = $mol_type_enforce<
		ReturnType< $hyoo_page['edit_close'] >
		,
		ReturnType< $hyoo_page_side_edit['close'] >
	>
	type $hyoo_page_side_info__side__KQB62FGZ = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_info['side'] >
	>
	type $hyoo_page_side_info__close__GM7VV2BR = $mol_type_enforce<
		ReturnType< $hyoo_page['info_close'] >
		,
		ReturnType< $hyoo_page_side_info['close'] >
	>
	type $hyoo_page_side_info__Text__OPZ4YM45 = $mol_type_enforce<
		ReturnType< $hyoo_page['View_details'] >
		,
		ReturnType< $hyoo_page_side_info['Text'] >
	>
	type $mol_button_minor__click__DIJBBV3K = $mol_type_enforce<
		ReturnType< $hyoo_page['rights_close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__4LU9LMRS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_meta_rights__meta__5RO7N63A = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_meta_rights['meta'] >
	>
	type $hyoo_meta_rights__peer__M9DZBWDB = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_meta_rights['peer'] >
	>
	type $hyoo_meta_rights__tools__UMTS97R7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_rights['tools'] >
	>
	type $mol_button_minor__click__M1ENHCMR = $mol_type_enforce<
		ReturnType< $hyoo_page['safe_close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__ZKX6WJQX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_meta_safe__yard__HJ76V5FF = $mol_type_enforce<
		ReturnType< $hyoo_page['yard'] >
		,
		ReturnType< $hyoo_meta_safe['yard'] >
	>
	type $hyoo_meta_safe__tools__CT32R3DF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_safe['tools'] >
	>
	type $hyoo_page_menu__yard__1LZN00RH = $mol_type_enforce<
		ReturnType< $hyoo_page['yard'] >
		,
		ReturnType< $hyoo_page_menu['yard'] >
	>
	type $hyoo_page_menu__side__JRB9BGWP = $mol_type_enforce<
		ReturnType< $hyoo_page['profile'] >
		,
		ReturnType< $hyoo_page_menu['side'] >
	>
	type $hyoo_page_menu__list__WUJZV009 = $mol_type_enforce<
		ReturnType< $hyoo_page['bookmarks_node'] >
		,
		ReturnType< $hyoo_page_menu['list'] >
	>
	type $hyoo_page_menu__item_uri__R0PBCUMO = $mol_type_enforce<
		ReturnType< $hyoo_page['side_uri'] >
		,
		ReturnType< $hyoo_page_menu['item_uri'] >
	>
	type $hyoo_page_menu__add__RVGGYWGP = $mol_type_enforce<
		ReturnType< $hyoo_page['page_add'] >
		,
		ReturnType< $hyoo_page_menu['add'] >
	>
	type $hyoo_page_menu__item_add__V4ZQRB47 = $mol_type_enforce<
		ReturnType< $hyoo_page['side_add'] >
		,
		ReturnType< $hyoo_page_menu['item_add'] >
	>
	type $hyoo_page_menu__aura_showing__ZU3VRLJ1 = $mol_type_enforce<
		ReturnType< $hyoo_page['aura_showing'] >
		,
		ReturnType< $hyoo_page_menu['aura_showing'] >
	>
	type $hyoo_page_menu__safe_showing__K3UP7M5E = $mol_type_enforce<
		ReturnType< $hyoo_page['safe'] >
		,
		ReturnType< $hyoo_page_menu['safe_showing'] >
	>
	export class $hyoo_page extends $mol_book2 {
		side_title( id: any): ReturnType< ReturnType< $hyoo_page['side'] >['title'] >
		pages_node( id: any): ReturnType< ReturnType< $hyoo_page['side'] >['pages_node'] >
		bookmarks_node( ): ReturnType< ReturnType< $hyoo_page['profile'] >['bookmarks_node'] >
		aura_image( ): string
		Theme( ): $mol_theme_auto
		ref_track( ): any
		News( ): $hyoo_page_side_news
		book_side( ): $hyoo_page_side
		book_pages_node( ): any
		side_uri( id: any): string
		side_add( id: any, next?: any ): any
		tools_ext( ): readonly(any)[]
		Side_menu( ): $hyoo_page_side_menu
		side_menu_showed( next?: boolean ): boolean
		editing( next?: boolean ): boolean
		info( next?: boolean ): boolean
		View_details( id: any): ReturnType< ReturnType< $hyoo_page['View'] >['Details'] >
		View( id: any): $hyoo_page_side_view
		rights( next?: boolean ): boolean
		edit_close( id: any, next?: any ): any
		Edit( id: any): $hyoo_page_side_edit
		info_close( id: any, next?: any ): any
		Info( id: any): $hyoo_page_side_info
		rights_close( next?: any ): any
		Close_icon( ): $mol_icon_close
		Rights_close( ): $mol_button_minor
		Rights( id: any): $hyoo_meta_rights
		safe_close( next?: any ): any
		Safe_icon( ): $mol_icon_close
		Safe_close( ): $mol_button_minor
		Safe( ): $hyoo_meta_safe
		page_add( next?: any ): any
		aura_showing( next?: boolean ): boolean
		safe( next?: boolean ): boolean
		search( ): ReturnType< ReturnType< $hyoo_page['Menu'] >['search'] >
		Menu( ): $hyoo_page_menu
		side_main_id( ): string
		yard( ): $hyoo_sync_client
		side( id: any): $hyoo_page_side
		side_current( ): $hyoo_page_side
		profile( ): $hyoo_page_side
		style( ): ({ 
			'backgroundImage': ReturnType< $hyoo_page['aura_image'] >,
		})  & ReturnType< $mol_book2['style'] >
		plugins( ): readonly(any)[]
		auto( ): readonly(any)[]
		pages( ): readonly(any)[]
		Placeholder( ): ReturnType< $hyoo_page['Menu'] >
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {
    type $hyoo_apps_app = {
        target: string;
        title: string;
        uri: string;
    };
}

declare namespace $.$$ {
    class $hyoo_apps extends $.$hyoo_apps {
        app(): string | null;
        group_name(id: keyof ReturnType<typeof this.groups>): string;
        group_list(): $.$mol_expander[];
        group_items(group: string): $mol_view[];
        pages(): ($mol_page | $.$mol_frame)[];
        app_title(app: string): string;
        app_uri_default(app: string, next?: string): string;
        app_uri_embed(app: string, next?: string): string;
        app_arg(app: string): {
            app: string;
            uri: null;
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link_source__uri__Z0L1V66N = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_search__query__SA0729CL = $mol_type_enforce<
		ReturnType< $hyoo_apps['filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__haystack__X3E9GVQW = $mol_type_enforce<
		ReturnType< $hyoo_apps['app_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__S471XNQT = $mol_type_enforce<
		ReturnType< $hyoo_apps['filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_link_iconed__uri__F7OO7U2S = $mol_type_enforce<
		ReturnType< $hyoo_apps['app_uri_default'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__arg__0PANWVAK = $mol_type_enforce<
		ReturnType< $hyoo_apps['app_arg'] >
		,
		ReturnType< $mol_link_iconed['arg'] >
	>
	type $mol_link_iconed__sub__2HP4EPPZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['sub'] >
	>
	type $mol_link__arg__44H51DCT = $mol_type_enforce<
		ReturnType< $hyoo_apps['app_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__VKLZ77VQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub__CTD44B57 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_expander__title__2IX4FLVB = $mol_type_enforce<
		ReturnType< $hyoo_apps['group_name'] >
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__6T3M5ZCB = $mol_type_enforce<
		ReturnType< $hyoo_apps['group_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__content__HJ2NQBWY = $mol_type_enforce<
		ReturnType< $hyoo_apps['group_items'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_list__rows__30ZXZUNQ = $mol_type_enforce<
		ReturnType< $hyoo_apps['group_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__XDFDV3QY = $mol_type_enforce<
		ReturnType< $hyoo_apps['menu_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__BHWQCS10 = $mol_type_enforce<
		ReturnType< $hyoo_apps['tools'] >
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__head__M2OLU4GZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body__RFV0LGU4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_frame__uri__7Q1SPRIZ = $mol_type_enforce<
		ReturnType< $hyoo_apps['app_uri_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $hyoo_apps extends $mol_book2 {
		Theme( ): $mol_theme_auto
		menu_title( ): string
		Source( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		tools( ): readonly(any)[]
		Menu_title( ): ReturnType< ReturnType< $hyoo_apps['Menu'] >['Title'] >
		Menu_tools( ): ReturnType< ReturnType< $hyoo_apps['Menu'] >['Tools'] >
		filter( next?: string ): string
		Filter( ): $mol_search
		group_name( id: any): string
		group_expanded( id: any, next?: boolean ): boolean
		app_uri_default( id: any): string
		app_arg( id: any): Record<string, any>
		app_title( id: any): string
		Menu_link_title( id: any): $mol_dimmer
		Menu_link_out( id: any): $mol_link_iconed
		Menu_link_in_icon( id: any): $mol_icon_chevron_right
		Menu_link_in( id: any): $mol_link
		Menu_item( id: any): $mol_view
		group_items( id: any): readonly(any)[]
		Group( id: any): $mol_expander
		group_list( ): readonly(any)[]
		Menu_items( ): $mol_list
		Menu( ): $mol_page
		app_uri_embed( id: any, next?: string ): string
		App( id: any): $mol_frame
		Placeholder( ): any
		plugins( ): readonly(any)[]
		pages( ): readonly(any)[]
		groups( ): ({ 
			'release': string,
			'develop': string,
			'preview': string,
		}) 
		apps( ): Record<string, $hyoo_apps_app>
	}
	
}

//# sourceMappingURL=apps.view.tree.d.ts.map
declare namespace $ {
    function $mol_compare_text<Item>(item?: (item: Item) => string): (a: Item, b: Item) => number;
}

declare namespace $ {

	type $mol_tag_tree__ids_tags__D65B9TG0 = $mol_type_enforce<
		ReturnType< $mol_tag_tree['ids_tags'] >
		,
		ReturnType< $mol_tag_tree['ids_tags'] >
	>
	type $mol_tag_tree__path__QGOG6K6C = $mol_type_enforce<
		ReturnType< $mol_tag_tree['tag_path'] >
		,
		ReturnType< $mol_tag_tree['path'] >
	>
	type $mol_tag_tree__Item__EYDUOJCT = $mol_type_enforce<
		ReturnType< $mol_tag_tree['Item'] >
		,
		ReturnType< $mol_tag_tree['Item'] >
	>
	type $mol_tag_tree__item_title__8Z8UA2N9 = $mol_type_enforce<
		ReturnType< $mol_tag_tree['item_title'] >
		,
		ReturnType< $mol_tag_tree['item_title'] >
	>
	type $mol_tag_tree__tag_expanded__AVYJCVHO = $mol_type_enforce<
		ReturnType< $mol_tag_tree['tag_expanded'] >
		,
		ReturnType< $mol_tag_tree['tag_expanded'] >
	>
	type $mol_tag_tree__tag_name__Q46MUP31 = $mol_type_enforce<
		ReturnType< $mol_tag_tree['tag_name'] >
		,
		ReturnType< $mol_tag_tree['tag_name'] >
	>
	type $mol_tag_tree_sub__C6VR94DE = $mol_type_enforce<
		ReturnType< $mol_tag_tree['tag_list'] >[number]
		,
		$mol_view
	>
	type $mol_tag_tree_sub__LG7BG0JB = $mol_type_enforce<
		ReturnType< $mol_tag_tree['item_list'] >[number]
		,
		$mol_view
	>
	type $mol_view__sub__15D70RP7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_expander__expandable__DH25ZKUA = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_expander['expandable'] >
	>
	type $mol_expander__expanded__YHDOORF1 = $mol_type_enforce<
		ReturnType< $mol_tag_tree['tag_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__title__5G39QOMM = $mol_type_enforce<
		ReturnType< $mol_tag_tree['tag_name'] >
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content__0SR801AQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_tag_tree extends $mol_list {
		tag_list( ): readonly($mol_view)[]
		item_list( ): readonly($mol_view)[]
		item_title( id: any): string
		tag_expanded( id: any, next?: boolean ): boolean
		tag_name( id: any): string
		tag_path( id: any): readonly(string)[]
		Tag_tree( id: any): $mol_tag_tree
		path( ): readonly(string)[]
		ids_tags( ): Record<string, any>
		ids( ): readonly(any)[]
		tags( ): readonly(string)[]
		levels_expanded( ): number
		sub( ): readonly($mol_view)[]
		Item( id: any): $mol_view
		Tag( id: any): $mol_expander
	}
	
}

//# sourceMappingURL=tree.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_tag_tree extends $.$mol_tag_tree {
        ids(): string[];
        item_list(): $mol_view[];
        tags(): string[];
        tag_list(): $.$mol_expander[];
        tag_path(id: string): string[];
        tag_expanded(id: readonly string[], next?: boolean): boolean;
        tag_expanded_default(id: readonly string[]): boolean;
        tag_name(id: string): string;
        item_title(id: readonly string[]): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_search__query__P0CULN4A = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_tag_tree__Item__TMNFCDZW = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['Option'] >
		,
		ReturnType< $mol_tag_tree['Item'] >
	>
	type $mol_tag_tree__ids_tags__RO4X0FQ5 = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['ids_tags'] >
		,
		ReturnType< $mol_tag_tree['ids_tags'] >
	>
	type $mol_tag_tree__levels_expanded__XHSCBSHR = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['levels_expanded'] >
		,
		ReturnType< $mol_tag_tree['levels_expanded'] >
	>
	type $mol_dimmer__haystack__SBJRVQZA = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['option_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__N0D0QRR5 = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_link__arg__DHS5Q18O = $mol_type_enforce<
		ReturnType< $mol_app_demo_menu['option_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__ZWFMZNP9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_app_demo_menu extends $mol_page {
		filter( next?: string ): string
		Filter( ): $mol_search
		ids_tags( ): Record<string, any>
		levels_expanded_default( ): number
		levels_expanded( ): ReturnType< $mol_app_demo_menu['levels_expanded_default'] >
		Tree( ): $mol_tag_tree
		option_arg( id: any): Record<string, any>
		option_title( id: any): string
		Option_title( id: any): $mol_dimmer
		names( ): readonly(string)[]
		widget_tags( id: any): readonly(string)[]
		widget_aspects( id: any): readonly(string)[]
		widget_title( id: any): string
		search_start( next?: any ): any
		body( ): readonly(any)[]
		Option( id: any): $mol_link
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_demo_menu extends $.$mol_app_demo_menu {
        filter(next?: string): string;
        option_arg(id: readonly string[]): {
            demo: string | undefined;
        };
        option_title(path_id: readonly string[]): string;
        search_start(event?: Event): void;
        filter_last_word_completed(): boolean;
        filter_words(): string[];
        ids_tags(): Record<string, string[]>;
        tags_filtered(): string[];
        filter_suggests(): string[];
        levels_expanded(): number;
        names_filtered(): string[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_forum extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=forum.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_forum_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_open_in_new extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=new.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__uri__49QCIOAF = $mol_type_enforce<
		ReturnType< $mol_chat['standalone'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__D8RZTNUG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__2BWFAWZ6 = $mol_type_enforce<
		({ 
			'mol_chat': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__D3614U4C = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_frame__uri__J2L4RF2A = $mol_type_enforce<
		ReturnType< $mol_chat['embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	type $mol_page__title__QO17DZVV = $mol_type_enforce<
		ReturnType< $mol_chat['title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__L4FRAD03 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__Body__COS7S6AQ = $mol_type_enforce<
		ReturnType< $mol_chat['Embed'] >
		,
		ReturnType< $mol_page['Body'] >
	>
	export class $mol_chat extends $mol_link {
		Icon( ): $mol_icon_forum_outline
		title( ): string
		standalone( ): string
		Standalone_icon( ): $mol_icon_open_in_new
		Esternal( ): $mol_link
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		embed( ): string
		Embed( ): $mol_frame
		Page( ): $mol_page
		seed( ): string
		opened( ): boolean
		arg( ): ({ 
			'mol_chat': string,
		}) 
		hint( ): ReturnType< $mol_chat['title'] >
		sub( ): readonly(any)[]
		pages( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chat.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chat extends $.$mol_chat {
        opened(): boolean;
        pages(): $mol_page[];
        standalone(): string;
        embed(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_settings extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=settings.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_icon__checked__6RLIHKZ5 = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['readme'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__hint__V73LTJ9N = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__JZXYLV6P = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['readme_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_chat__seed__OG1X745A = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['chat_seed'] >
		,
		ReturnType< $mol_chat['seed'] >
	>
	type $mol_speck__value__NSOEC6VD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_link__hint__TGPMN0QJ = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['edit_hint'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__4BOQNHNV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__uri__5K34URTP = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['edit_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__hint__3WVNCQUI = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['close_hint'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__V9R3X6LC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__RT33IKT6 = $mol_type_enforce<
		ReturnType< $mol_app_demo_detail['close_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	export class $mol_app_demo_detail extends $mol_page {
		readme( next?: boolean ): boolean
		readme_icon( ): $mol_icon_information_outline
		Readme( ): $mol_check_icon
		chat_pages( ): ReturnType< ReturnType< $mol_app_demo_detail['Chat'] >['pages'] >
		chat_seed( ): string
		Chat( ): $mol_chat
		edit_hint( ): string
		Edit_speck( ): $mol_speck
		Edit_icon( ): $mol_icon_settings
		edit_uri( ): string
		Edit( ): $mol_link
		close_hint( ): string
		Close_icon( ): $mol_icon_close
		close_arg( ): ({ 
			'demo': any,
		}) 
		Close( ): $mol_link
		Demo( ): $mol_view
		description( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=detail.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_example extends $mol_view {
		tags( ): readonly(string)[]
		aspects( ): readonly(string)[]
	}
	
}

//# sourceMappingURL=example.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_example_small extends $mol_example {
	}
	
}

//# sourceMappingURL=small.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_example_large extends $mol_example {
	}
	
}

//# sourceMappingURL=large.view.tree.d.ts.map
declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        blob(): Blob;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {

	type $mol_link_source__uri__28M8E6P4 = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['source_link'] >
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_link_source__hint__V5CZ13WY = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['source_hint'] >
		,
		ReturnType< $mol_link_source['hint'] >
	>
	type $mol_button_minor__hint__XVH3YVD7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__LUZ9AIWK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click__172N1EFP = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_text__text__XYA6Q0L4 = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['readme'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__uri_base__KMWD00CS = $mol_type_enforce<
		ReturnType< $mol_app_demo_readme['uri_base'] >
		,
		ReturnType< $mol_text['uri_base'] >
	>
	type $mol_view__sub__NO9WYCPF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_app_demo_readme extends $mol_page {
		source_link( ): string
		source_hint( ): string
		Source_link( ): $mol_link_source
		Close_icon( ): $mol_icon_close
		close( next?: any ): any
		Close( ): $mol_button_minor
		readme( ): string
		uri_base( next?: string ): string
		Not_found_caption( ): string
		readme_link_template( ): string
		source_link_template( ): string
		repo( ): string
		module( ): readonly(string)[]
		title( ): string
		opened( next?: boolean ): boolean
		tools( ): readonly(any)[]
		Readme( ): $mol_text
		Not_found( ): $mol_view
	}
	
}

//# sourceMappingURL=readme.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_demo_readme_not_found_error extends Error {
        module: readonly string[];
        constructor(module: readonly string[]);
    }
    class $mol_app_demo_readme extends $.$mol_app_demo_readme {
        close(): void;
        link(template: string, repo: string, module: readonly string[]): string;
        uri_base(next?: string): string;
        source_link(): string;
        readme(): string;
        body(): $mol_view[];
    }
}

declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_status extends $.$mol_status {
        message(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {

	type $mol_link_source__uri__DLHPZ40N = $mol_type_enforce<
		ReturnType< $mol_app_demo_main['project_uri'] >
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_text__text__GUOH5F8Q = $mol_type_enforce<
		ReturnType< $mol_app_demo_main['description'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__uri_base__LLDB7QSG = $mol_type_enforce<
		ReturnType< $mol_app_demo_main['project_uri'] >
		,
		ReturnType< $mol_text['uri_base'] >
	>
	export class $mol_app_demo_main extends $mol_page {
		Lights( ): $mol_lights_toggle
		project_uri( ): string
		Project( ): $mol_link_source
		description( ): string
		Description( ): $mol_text
		minimal_width( ): number
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=main.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_demo_main extends $.$mol_app_demo_main {
        description(): string;
    }
}

declare namespace $ {

	type $mol_hotkey__key__E7VTJQPQ = $mol_type_enforce<
		({ 
			F( next?: ReturnType< $mol_app_demo['search_start'] > ): ReturnType< $mol_app_demo['search_start'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_hotkey__mod_ctrl__GZYVD5T5 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_app_demo_search_start__2YDPI8VN = $mol_type_enforce<
		Parameters< $mol_app_demo['search_start'] >[0]
		,
		Parameters< ReturnType< $mol_app_demo['Menu'] >['search_start'] >[0]
	>
	type $mol_link_source__uri__X95PME6V = $mol_type_enforce<
		ReturnType< $mol_app_demo['sources_uri'] >
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_app_demo_chat_pages__FL9QXZBM = $mol_type_enforce<
		Parameters< $mol_app_demo['chat_pages'] >[0]
		,
		Parameters< $mol_app_demo['Detail'] >[0]
	>
	type $mol_app_demo_menu__title__MV5WO13X = $mol_type_enforce<
		ReturnType< $mol_app_demo['menu_title'] >
		,
		ReturnType< $mol_app_demo_menu['title'] >
	>
	type $mol_app_demo_menu__names__VHD2HFK5 = $mol_type_enforce<
		ReturnType< $mol_app_demo['names'] >
		,
		ReturnType< $mol_app_demo_menu['names'] >
	>
	type $mol_app_demo_menu__widget_tags__WL6U07PQ = $mol_type_enforce<
		ReturnType< $mol_app_demo['widget_tags'] >
		,
		ReturnType< $mol_app_demo_menu['widget_tags'] >
	>
	type $mol_app_demo_menu__widget_aspects__A06RZVXE = $mol_type_enforce<
		ReturnType< $mol_app_demo['widget_aspects'] >
		,
		ReturnType< $mol_app_demo_menu['widget_aspects'] >
	>
	type $mol_app_demo_menu__widget_title__RF6DGM8S = $mol_type_enforce<
		ReturnType< $mol_app_demo['widget_title'] >
		,
		ReturnType< $mol_app_demo_menu['widget_title'] >
	>
	type $mol_app_demo_menu__tools__TJRDSQ1Q = $mol_type_enforce<
		ReturnType< $mol_app_demo['tools'] >
		,
		ReturnType< $mol_app_demo_menu['tools'] >
	>
	type $mol_app_demo_detail__chat_seed__SOTQA7AA = $mol_type_enforce<
		ReturnType< $mol_app_demo['chat_seed'] >
		,
		ReturnType< $mol_app_demo_detail['chat_seed'] >
	>
	type $mol_app_demo_detail__title__5TH1FPFI = $mol_type_enforce<
		ReturnType< $mol_app_demo['detail_title'] >
		,
		ReturnType< $mol_app_demo_detail['title'] >
	>
	type $mol_app_demo_detail__description__4LMP9EX1 = $mol_type_enforce<
		ReturnType< $mol_app_demo['detail_description'] >
		,
		ReturnType< $mol_app_demo_detail['description'] >
	>
	type $mol_app_demo_detail__edit_uri__HZFKNV7W = $mol_type_enforce<
		ReturnType< $mol_app_demo['edit_uri'] >
		,
		ReturnType< $mol_app_demo_detail['edit_uri'] >
	>
	type $mol_app_demo_detail__readme__340H6UP9 = $mol_type_enforce<
		ReturnType< $mol_app_demo['readme_page'] >
		,
		ReturnType< $mol_app_demo_detail['readme'] >
	>
	type $mol_app_demo_detail__Demo__SGW3N2Z1 = $mol_type_enforce<
		ReturnType< $mol_app_demo['Demo'] >
		,
		ReturnType< $mol_app_demo_detail['Demo'] >
	>
	type $mol_app_demo_readme__repo__S4IQ1MNH = $mol_type_enforce<
		ReturnType< $mol_app_demo['repo'] >
		,
		ReturnType< $mol_app_demo_readme['repo'] >
	>
	type $mol_app_demo_readme__opened__XIMGXVZ5 = $mol_type_enforce<
		ReturnType< $mol_app_demo['readme_page'] >
		,
		ReturnType< $mol_app_demo_readme['opened'] >
	>
	type $mol_app_demo_readme__module__QZTSO1Y8 = $mol_type_enforce<
		ReturnType< $mol_app_demo['module'] >
		,
		ReturnType< $mol_app_demo_readme['module'] >
	>
	type $mol_status__sub__KC8X3J7Q = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_status['sub'] >
	>
	export class $mol_app_demo extends $mol_book2 {
		detail_title( ): string
		Theme( ): $mol_theme_auto
		Search_start( ): $mol_hotkey
		menu_title( ): string
		names( ): readonly(string)[]
		widget_tags( id: any): readonly(string)[]
		widget_aspects( id: any): readonly(string)[]
		widget_title( id: any): string
		search_start( next?: ReturnType< ReturnType< $mol_app_demo['Menu'] >['search_start'] > ): ReturnType< ReturnType< $mol_app_demo['Menu'] >['search_start'] >
		sources_uri( ): string
		Sources( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		tools( ): readonly(any)[]
		chat_seed( id: any): string
		chat_pages( id: any): ReturnType< ReturnType< $mol_app_demo['Detail'] >['chat_pages'] >
		detail_description( ): string
		edit_uri( ): string
		readme_page( next?: boolean ): boolean
		Demo( ): $mol_view
		repo( ): string
		module( ): readonly(string)[]
		detail_empty_prefix( ): string
		selected( ): string
		detail_empty_postfix( ): string
		editor_title( ): ReturnType< $mol_app_demo['detail_title'] >
		meta_bundle_base( ): string
		repo_dict( ): Record<string, any>
		plugins( ): readonly(any)[]
		demo_block_list( ): readonly(any)[]
		Menu( ): $mol_app_demo_menu
		Detail( id: any): $mol_app_demo_detail
		Readme_page( ): $mol_app_demo_readme
		Detail_empty_message( ): $mol_status
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_demo extends $.$mol_app_demo {
        component_name(name: string): string;
        detail_title(): string;
        detail_description(): string;
        names(): string[];
        widget_tags(name: string): string[];
        widget_title(name: string): string;
        widget_aspects(name: string): readonly string[];
        selected(): string;
        readme_page(next?: boolean): boolean;
        selected_class_name(): string;
        Widget(name: string): $mol_example;
        names_demo(): string[];
        pages(): $mol_view[];
        Demo(): $mol_example;
        logo_uri(): string;
        meta_bundle_base(): string;
        repo_dict(): Record<string, string>;
        name_parse(name: string): {
            repo: string;
            module: string[];
        };
        repo(): string;
        module(): string[];
        chat_link(): string;
        edit_uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_sort extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sort.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sort_asc extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=asc.view.tree.d.ts.map
declare namespace $ {

	export class $mol_portion_indicator extends $mol_view {
		width_style( ): string
		style( ): ({ 
			'width': ReturnType< $mol_portion_indicator['width_style'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
	type $mol_portion_indicator__width_style__QHQ3P2YB = $mol_type_enforce<
		ReturnType< $mol_portion['indicator_width_style'] >
		,
		ReturnType< $mol_portion_indicator['width_style'] >
	>
	export class $mol_portion extends $mol_view {
		indicator_width_style( ): string
		indicator( ): $mol_portion_indicator
		portion( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=portion.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_portion extends $.$mol_portion {
        indicator_width_style(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_portion__portion__H9U1EGZ7 = $mol_type_enforce<
		ReturnType< $mol_bench['result_portion'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_bench_head__event_click__XB1EKPIP = $mol_type_enforce<
		ReturnType< $mol_bench['event_sort_toggle'] >
		,
		ReturnType< $mol_bench_head['event_click'] >
	>
	type $mol_bench_head__sub__D1WC0SHH = $mol_type_enforce<
		ReturnType< $mol_bench['col_head_content'] >
		,
		ReturnType< $mol_bench_head['sub'] >
	>
	export class $mol_bench extends $mol_grid {
		result( ): Record<string, any>
		event_sort_toggle( id: any, next?: any ): any
		col_head_title( id: any): string
		Col_head_sort( id: any): $mol_icon_sort_asc
		col_head_content( id: any): readonly(any)[]
		result_value( id: any): string
		result_portion( id: any): number
		Result_portion( id: any): $mol_portion
		records( ): ReturnType< $mol_bench['result'] >
		col_sort( next?: string ): string
		Col_head( id: any): $mol_bench_head
		cell_content_number( id: any): readonly(any)[]
	}
	
	export class $mol_bench_head extends $mol_float {
		event_click( next?: any ): any
		hint( ): string
		horizontal( ): boolean
		event( ): ({ 
			click( next?: ReturnType< $mol_bench_head['event_click'] > ): ReturnType< $mol_bench_head['event_click'] >,
		})  & ReturnType< $mol_float['event'] >
		attr( ): ({ 
			'title': ReturnType< $mol_bench_head['hint'] >,
		})  & ReturnType< $mol_float['attr'] >
	}
	
}

//# sourceMappingURL=bench.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_bench extends $.$mol_bench {
        col_sort(next?: string): string;
        row_ids(): string[][];
        result_value(id: {
            row: string[];
            col: string;
        }): any;
        result_number(id: {
            row: string[];
            col: string;
        }): number;
        result_value_max(col: string): number;
        result_portion(id: {
            row: string[];
            col: string;
        }): number;
        col_head_title(col: string): string;
        event_sort_toggle(col: string, next?: Event): void;
        col_type(col: string): "number" | "text" | "branch";
        cell_content_number(id: {
            row: string[];
            col: string;
        }): any[];
        col_head_content(col: string): (string | $mol_icon_sort_asc)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_minus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=minus.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_string__type__TO5USWNZ = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value__9OOHWQJ6 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__0WL7Y6XM = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled__1JAVOYN4 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit__K07X9NSR = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click__CH583LRL = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled__VTP1QJGC = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub__O135JA8Y = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__event_click__WLTMCHYA = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled__HAOV1OTU = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub__IRQYS4ZN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		event_dec( next?: any ): any
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_minus
		Dec( ): $mol_button_minor
		event_inc( next?: any ): any
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_plus
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        value_limited(next?: any): number;
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): string;
        dec_enabled(): boolean;
        inc_enabled(): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_bench_app extends $.$hyoo_bench_app {
        bench(next?: string): string;
        sandbox(): any;
        command_last(next?: any[] | null): any[] | null;
        command_result<Result>(command: any[]): Result;
        command_result_async(command: any[]): Promise<unknown>;
        meta(): {
            source: string;
            title: {
                [lang: string]: string;
            };
            descr: {
                [lang: string]: string;
            };
            samples: {
                [sample: string]: {
                    title: {
                        [lang: string]: string;
                    };
                };
            };
            steps: {
                [step: string]: {
                    title: {
                        [lang: string]: string;
                    };
                };
            };
            params: {
                [param: string]: {
                    title: {
                        [lang: string]: string;
                    };
                    default: number;
                    type: string;
                    precision: number;
                };
            };
        };
        source_link(): string;
        samples_all(next?: string[]): string[];
        samples(next?: string[]): string[];
        steps(next?: string[]): string[];
        title(): string;
        description(): string;
        result_sample(sample_id: string): {
            [key: string]: any;
        };
        result(): {
            [sample: string]: {
                [step: string]: any;
            };
        };
        sandbox_title(): string;
        result_col_title(col_id: string): string;
        step_title(step: string): string[];
        result_col_sort(next?: string): string;
        menu_options(): $mol_check_box[];
        sample_title(sample: string): string;
        menu_option_checked(sample: string, next?: boolean): boolean;
        params(): string[];
        param_fields(): $mol_labeler[];
        param_title(id: string): string;
        param_value(id: string, next?: any): number;
        param_precision(id: string): number;
        param_dict(): Record<string, number>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_search__query__IFG9WKEL = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_link_source__uri__0QO3IIV4 = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['source_link'] >
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_list__rows__UPSRG6U8 = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['menu_options'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__63CK0P2O = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['addon_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__head__YWPJKPAT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__tools__GH1UER1R = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['menu_tools'] >
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__BLN4GCM9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_text__text__WFK77IL5 = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['description'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub__GSFPVI4S = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['param_fields'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_bench__result__ETL4CPKJ = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['result'] >
		,
		ReturnType< $mol_bench['result'] >
	>
	type $mol_bench__col_head_title__16H61OYK = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['result_col_title'] >
		,
		ReturnType< $mol_bench['col_head_title'] >
	>
	type $mol_bench__col_sort__0FTNGQMF = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['result_col_sort'] >
		,
		ReturnType< $mol_bench['col_sort'] >
	>
	type $mol_page__title__3VUW8XAY = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body__R5T7GQ4F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_frame__uri__KUUOLQG4 = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['bench'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	type $mol_page__title__OF0PVS6L = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['sandbox_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Body__7XKUFUK7 = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['Sandbox'] >
		,
		ReturnType< $mol_page['Body'] >
	>
	type $mol_number__value__VUDSSLSS = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['param_value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__2E4C8RMH = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['param_precision'] >
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_check_box__minimal_height__49NVZZM8 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_box['minimal_height'] >
	>
	type $mol_check_box__checked__QSV43WJ0 = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['menu_option_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__MACGGLEN = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['sample_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_labeler__title__BYIREALM = $mol_type_enforce<
		ReturnType< $hyoo_bench_app['param_title'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__2GCNIKZK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	export class $hyoo_bench_app extends $mol_book2 {
		addon_title( ): string
		Menu_tools( ): ReturnType< ReturnType< $hyoo_bench_app['Addon_page'] >['Tools'] >
		filter( next?: string ): string
		Filter( ): $mol_search
		source_link( ): string
		Source_link( ): $mol_link_source
		menu_tools( ): readonly(any)[]
		menu_options( ): readonly(any)[]
		Menu( ): $mol_list
		Addon_page( ): $mol_page
		description( ): string
		Descr( ): $mol_text
		param_fields( ): readonly(any)[]
		Param_fields( ): $mol_view
		result( ): any
		result_col_title( id: any): string
		result_col_sort( next?: string ): string
		Result( ): $mol_bench
		Main_page( ): $mol_page
		sandbox_title( ): string
		bench( next?: string ): string
		Sandbox( ): $mol_frame
		Sandbox_page( ): $mol_page
		menu_option_checked( id: any, next?: boolean ): boolean
		sample_title( id: any): string
		param_title( id: any): string
		param_value( id: any, next?: number ): number
		param_precision( id: any): number
		Param_value( id: any): $mol_number
		samples( next?: readonly(string)[] ): readonly(string)[]
		pages( ): readonly(any)[]
		Menu_option( id: any): $mol_check_box
		Param( id: any): $mol_labeler
		result_col_title_sample( ): string
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=help.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help_circle extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=circle.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help_circle_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_assert_ok(value: any): void;
    function $mol_assert_not(value: any): void;
    function $mol_assert_fail(handler: () => any, ErrorRight: string | typeof Error | typeof Promise): any;
    function $mol_assert_like<Value>(...args: [Value, Value, ...Value[]]): void;
    function $mol_assert_unique(...args: [any, any, ...any[]]): void;
    function $mol_assert_equal<Value>(...args: Value[]): undefined;
}

declare namespace $ {
    class $mol_import extends $mol_object2 {
        static module(uri: string): any;
        static module_async(uri: string): Promise<any>;
        static script(uri: string): any;
        static script_async(uri: string): Promise<any>;
        static style(uri: string): any;
        static style_async(uri: string): any;
    }
}

declare namespace $ {
    class $hyoo_js_perf_case extends $hyoo_crowd_struct {
        title(next?: string): string;
        setup(next?: string): string;
        measure(next?: string): string;
        steal(donor: $hyoo_js_perf_case): void;
    }
}

declare namespace $ {

	export class $mol_icon_chevron_double_down extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=down.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_unfold_more_horizontal extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=horizontal.view.tree.d.ts.map
declare namespace $ {
    class $hyoo_js_perf_stats extends $mol_object2 {
        elapsed: number;
        iterations: number;
        frequency_portion: number;
        error: string;
        memory: number;
        memory_portion: number;
        size: number;
        size_portion: number;
        deps: number;
        deps_portion: number;
        get time(): number;
        get frequency(): number;
        get memory_per_iteration(): number;
    }
}

declare namespace $.$$ {
    class $hyoo_js_perf_case_result extends $.$hyoo_js_perf_case_result {
        sub(): $mol_view[];
        portions(): $.$mol_portion[];
        stats(): $mol_view[];
        error(): string;
        iterations(): string;
        frequency(): string;
        time_total(): string;
        memory_total(): string;
        memory_per_iteration(): string;
        size(): number;
        deps(): string;
        frequency_portion(): number;
        memory_portion(): number;
        size_portion(): number;
        deps_portion(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_portion__portion__ZTFKI0BL = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_result['frequency_portion'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_portion__portion__VAY8VU4N = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_result['memory_portion'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_portion__portion__NTOX0Q6H = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_result['size_portion'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_portion__portion__8G9876G3 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_result['deps_portion'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_view__sub__Z9IF62HE = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_result['portions'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__UY729U0C = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['frequency_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__008PS8F5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__R6FRMT2C = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['time_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__ZVH8N1IB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__6GYBIZDF = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['iterations_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__C5TYHWR8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__8QISSU5F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__ARRDTV1K = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['memory_per_iteration_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__654C35JX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__938BYCXP = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['memory_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__42WE7X0I = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__E2RZTE0K = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__H2DE8TZI = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['size_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__ZDPQT0GV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__IUB33VIQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__2ZP6B6UW = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_perf_case_result['deps_hint'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__KMI3C6YW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__L1IA322L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__CQHXO864 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_result['stats'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__SBE9VW2A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_js_perf_case_result extends $mol_view {
		frequency_portion( ): number
		Frequency_portion( ): $mol_portion
		memory_portion( ): number
		Memory_portion( ): $mol_portion
		size_portion( ): number
		Size_portion( ): $mol_portion
		deps_portion( ): number
		Deps_portion( ): $mol_portion
		portions( ): readonly(any)[]
		Portions( ): $mol_view
		title( ): string
		frequency_hint( ): string
		frequency( ): string
		Frequency( ): $mol_view
		time_hint( ): string
		time_total( ): string
		Time( ): $mol_view
		iterations_hint( ): string
		iterations( ): string
		Iterations( ): $mol_view
		Stats_main( ): $mol_view
		memory_per_iteration_hint( ): string
		memory_per_iteration( ): string
		Memory_per_iteration( ): $mol_view
		memory_hint( ): string
		memory_total( ): string
		Memory( ): $mol_view
		Stats_mem( ): $mol_view
		size_hint( ): string
		size( ): number
		Size( ): $mol_view
		Stats_size( ): $mol_view
		deps_hint( ): string
		deps( ): string
		Deps( ): $mol_view
		Stats_deps( ): $mol_view
		stats( ): readonly(any)[]
		Stats( ): $mol_view
		error( ): string
		Error( ): $mol_view
		result( ): $hyoo_js_perf_stats
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=result.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_play extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=play.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_flash extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=flash.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		offset( ): readonly(any)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_follower extends $.$mol_follower {
        pos(): {
            left: number;
            top: number;
        } | null;
        transform(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_code__text__JYTK41NB = $mol_type_enforce<
		ReturnType< $mol_dump_value['simple'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__text__AAHX2UY9 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_title'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_check_expand__minimal_height__PH88FF3V = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_height'] >
	>
	type $mol_check_expand__minimal_width__XVJNGDK6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_width'] >
	>
	type $mol_check_expand__expanded__ZTX5UZ9J = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	type $mol_check_expand__expandable__ASIKYGGF = $mol_type_enforce<
		ReturnType< $mol_dump_value['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__clicks__35B4CS4Y = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_all'] >
		,
		ReturnType< $mol_check_expand['clicks'] >
	>
	type $mol_check_expand__label__ZUDF3P97 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__dom_node__694CF39F = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_dom'] >
		,
		ReturnType< $mol_view['dom_node'] >
	>
	type $mol_view__render__3DJQFFKO = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub__6FOWAG5C = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dump_list__values__TC5ADNAR = $mol_type_enforce<
		ReturnType< $mol_dump_value['row_values'] >
		,
		ReturnType< $mol_dump_list['values'] >
	>
	type $mol_dump_list__prototypes__2R0RJ195 = $mol_type_enforce<
		ReturnType< $mol_dump_value['prototypes'] >
		,
		ReturnType< $mol_dump_list['prototypes'] >
	>
	type $mol_dump_list__preview_show__T931C6C9 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_show'] >
		,
		ReturnType< $mol_dump_list['preview_show'] >
	>
	type $mol_expander__expanded__9B5L096R = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__Trigger__2VEP9CVL = $mol_type_enforce<
		ReturnType< $mol_dump_value['Expand_head'] >
		,
		ReturnType< $mol_expander['Trigger'] >
	>
	type $mol_expander__content__ANK8VXT6 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_content'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_dump_value extends $mol_view {
		simple( ): string
		Simple( ): $mol_text_code
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		expand_all( next?: any ): any
		expand_title( ): string
		Expand_title( ): $mol_text_code
		Expand_head( ): $mol_check_expand
		preview_dom( ): any
		preview( ): any
		Preview_dom( ): $mol_view
		Preview( ): $mol_view
		row_values( id: any): readonly(any)[]
		prototypes( ): boolean
		Row( id: any): $mol_dump_list
		expand_content( ): readonly(any)[]
		Expand( ): $mol_expander
		value( next?: any ): any
		preview_show( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=value.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_value extends $.$mol_dump_value {
        sub(): $.$mol_expander[] | $.$mol_text_code[];
        simple(): string;
        expand_title(): any;
        rows_values(): any[][];
        preview_dom(): Element | null;
        expand_content(): ($mol_view | $.$mol_dump_list)[];
        expandable(): boolean;
        row_values(index: number): any[];
        expand_all(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_dump_value__value__HO9DJ90P = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_dump_value__expanded__0PF8YRXK = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_expanded'] >
		,
		ReturnType< $mol_dump_value['expanded'] >
	>
	type $mol_dump_value__prototypes__72GHEN8T = $mol_type_enforce<
		ReturnType< $mol_dump_list['prototypes'] >
		,
		ReturnType< $mol_dump_value['prototypes'] >
	>
	type $mol_dump_value__preview_show__AJP846UI = $mol_type_enforce<
		ReturnType< $mol_dump_list['preview_show'] >
		,
		ReturnType< $mol_dump_value['preview_show'] >
	>
	export class $mol_dump_list extends $mol_view {
		dump_value( id: any): any
		dump_expanded( id: any, next?: boolean ): boolean
		prototypes( ): boolean
		preview_show( ): boolean
		Dump( id: any): $mol_dump_value
		values( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_list extends $.$mol_dump_list {
        sub(): $.$mol_dump_value[];
        dump_value(index: number): any;
        expand_all(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_wire_field<Host extends object, Field extends keyof Host, Value extends Host[Field]>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Value>): any;
}

declare namespace $ {
    function $mol_wire_easing(next: any): any;
}

declare namespace $ {
    function $mol_wire_patch(obj: object): void;
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    function $mol_wire_let<Host extends {}>(host: Host): Host & { [Field in keyof Host]: {
        atom: $mol_wire_atom<Host, Parameters<Extract<Host[Field], (...args: any[]) => any>>, $mol_type_result<Host[Field]>>;
    }; };
}

declare namespace $ {
    class $mol_wire_set<Value> extends Set<Value> {
        pub: $mol_wire_pub;
        has(value: Value): boolean;
        entries(): SetIterator<[Value, Value]>;
        keys(): SetIterator<Value>;
        values(): SetIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): SetIterator<Value>;
        get size(): number;
        add(value: Value): this;
        delete(value: Value): boolean;
        clear(): void;
        item(val: Value, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_wire_dict<Key, Value> extends Map<Key, Value> {
        pub: $mol_wire_pub;
        has(key: Key): boolean;
        get(key: Key): Value | undefined;
        entries(): MapIterator<[Key, Value]>;
        keys(): MapIterator<Key>;
        values(): MapIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): MapIterator<[Key, Value]>;
        get size(): number;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        clear(): void;
        item(key: Key, next?: Value | null): NonNullable<Value> | null;
    }
}

declare namespace $ {
    class $mol_wire_log extends $mol_object2 {
        static watch(task?: () => any): (() => any) | undefined;
        static track(fiber: $mol_wire_fiber<any, any, any>): any;
        static active(): void;
    }
}

declare namespace $.$$ {
    class $hyoo_js_eval extends $.$hyoo_js_eval {
        code(next?: string): string;
        run(next?: boolean): boolean;
        submit(): void;
        perf(): string;
        pages(): $mol_page[];
        bookmark_list(next?: string[]): readonly string[];
        bookmark(next?: boolean): boolean;
        menu(): $.$mol_link[];
        menu_link_code(index: number): string;
        menu_link_title(index: number): string;
        code_enhanced(): string;
        execute(): any[];
        error_pos(): any;
        error_anchor(): any;
        error_offset(): number[];
        error_message(): any;
        Error_mark(): any;
        spy_queue: [string, () => any[]][];
        _defer_spy: any;
        spy_run(): void;
        spy(name: string, task: () => any[]): void;
        result(next?: any[]): any[];
        rejection_listener(): $mol_dom_listener;
        logs(): $.$mol_dump_list[];
        log(index: number): any;
        html(next?: string): (query: string) => Element | null;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key__QMTYSEJT = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $hyoo_js_eval['submit'] > ): ReturnType< $hyoo_js_eval['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_hotkey__mod_ctrl__DNQJSWVT = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_link__arg__R4Z5AO87 = $mol_type_enforce<
		({ 
			'code': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__EMO508ZQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link_source__uri__1Q7W2QTO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_link__title__BWXRFFT5 = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['menu_link_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__INAZ8K3M = $mol_type_enforce<
		({ 
			'code': ReturnType< $hyoo_js_eval['menu_link_code'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_list__rows__O2XIIHUQ = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['menu'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__9VX9CHFQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__PZ06E1RQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__QZWIIBZT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_link_iconed__title__TTPMU9CK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__hint__W5BKSVB5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__G9CW34S5 = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['perf'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_check_icon__Icon__6U1DKLE5 = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['Bookmark_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__X17QFWJQ = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['bookmark'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__hint__7YBEW81W = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__QJPYAGY1 = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['Run_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__J7L34C8S = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['run'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__hint__CNNT50M6 = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['result_label'] >
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_textarea__hint__CDARERRI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__sidebar_showed__P5XQZEZQ = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['sidebar_showed'] >
	>
	type $mol_textarea__spellcheck__7GAZCPP4 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['spellcheck'] >
	>
	type $mol_textarea__value__UHLW2UAY = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['code'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_view__attr__QDKUAM99 = $mol_type_enforce<
		({ 
			'title': ReturnType< $hyoo_js_eval['error_message'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__WB1SYVJ3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_follower__Anchor__0KV2RLUJ = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['error_anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__offset__49IVT78N = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['error_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__Sub__MXTXOPFE = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['Error_view'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	type $mol_page__title__WHRRCWB4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__bring__H1RBLH5X = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['bring'] >
		,
		ReturnType< $mol_page['bring'] >
	>
	type $mol_page__tools__77VWF2BJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__I3GBT1BU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_link__arg__TBAH0YAE = $mol_type_enforce<
		({ 
			'run': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__FZL0DFGQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__sub_visible__3RSWGB2K = $mol_type_enforce<
		any
		,
		ReturnType< $mol_list['sub_visible'] >
	>
	type $mol_dump_list__values__DRB2EVMG = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['log'] >
		,
		ReturnType< $mol_dump_list['values'] >
	>
	type $mol_dump_list__prototypes__8FWWQ4KY = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_dump_list['prototypes'] >
	>
	type $mol_list__rows__VZ5PD2CT = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['logs'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__V1XD3W9F = $mol_type_enforce<
		ReturnType< $hyoo_js_eval['result_label'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__VJ25BNC8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__H0DK6JAW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $hyoo_js_eval_bookmark_list__HFXQ92K0 = $mol_type_enforce<
		`// Example Notebook

// load external script
const {
	$mol_compare_deep: compare
} = $mol_import.module(
	'https://esm.sh/mol_compare_deep'
).default

// local vars
const one = [1]
one.push( one )
const left =  { a: [1,one], b:    one  }
const right = { a:    one,  b: [1,one] }

// result
compare( left, right )`
		,
		string
	>
	export class $hyoo_js_eval extends $mol_book2 {
		Theme( ): $mol_theme_auto
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		Clear_icon( ): $mol_icon_plus
		Clear( ): $mol_link
		Source( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		menu_link_title( id: any): string
		menu_link_code( id: any): string
		Menu_link( id: any): $mol_link
		menu( ): readonly(any)[]
		Menu( ): $mol_list
		Menu_page( ): $mol_page
		perf( ): string
		Perf( ): $mol_link_iconed
		Bookmark_icon( ): $mol_icon_bookmark_outline
		bookmark( next?: boolean ): boolean
		Bookmark( ): $mol_check_icon
		Run_icon( ): $mol_icon_play
		run( next?: boolean ): boolean
		Run( ): $mol_check_icon
		bring( ): ReturnType< ReturnType< $hyoo_js_eval['Code'] >['bring'] >
		code( next?: string ): string
		Code( ): $mol_textarea
		error_anchor( ): any
		error_offset( ): readonly(any)[]
		error_message( ): string
		Error_icon( ): $mol_icon_flash
		Error_view( ): $mol_view
		Error_mark( ): $mol_follower
		Code_page( ): $mol_page
		result_label( ): string
		Results_close_icon( ): $mol_icon_close
		Results_close( ): $mol_link
		UI( ): $mol_list
		log( id: any): readonly(any)[]
		Log( id: any): $mol_dump_list
		logs( ): readonly(any)[]
		Result( ): $mol_list
		Result_page( ): $mol_page
		Placeholder( ): any
		plugins( ): readonly(any)[]
		bookmark_list( next?: readonly(string)[] ): readonly(string)[]
		pages( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=eval.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_js_perf_case_row extends $.$hyoo_js_perf_case_row {
        columns(): $mol_view[];
        result(level: number): any;
        result_title(level: number): string;
        eval_standalone(): string;
        edit_tools(): readonly any[];
        prefix_showed(next?: boolean): boolean;
        source_showed(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_check_box__checked__TX0XTOO7 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['measurable'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__6F2JXE25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_string_button__hint__H16PETP8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $mol_string_button__enabled__6VX2GUGJ = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['changable'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	type $mol_string_button__value__80NI0Q5G = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_link_iconed__title__PL2IP8KW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__hint__PUS9SUVI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__2ARZ7MY5 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['eval_standalone'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_bar__sub__O4H5AAIJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_textarea__enabled__DPSKRGVD = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['changable'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__spellcheck__9X0G5XW6 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['spellcheck'] >
	>
	type $mol_textarea__value__SZHFH0DK = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['prefix'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__hint__0SDBS2H3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_expander__title__GSRWD47Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__4PLT6KZL = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['prefix_showed'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__minimal_width__NJ235O4U = $mol_type_enforce<
		number
		,
		ReturnType< $mol_expander['minimal_width'] >
	>
	type $mol_expander__Tools__FUV4N37X = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['Prefix_tools'] >
		,
		ReturnType< $mol_expander['Tools'] >
	>
	type $mol_expander__content__Y9WB1UA1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_button_minor__click__KCBP2PYK = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__hint__637EH4E3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__28G04MTM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click__9LD0P7PK = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['dupe'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__hint__2L21W6V1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__CAE9NWVR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click__UP5EJXOP = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['swap'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__hint__8DABXXFS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__8AJ1C7QV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__NWICYOTA = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['edit_tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_textarea__enabled__MOKK1LFG = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['changable'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__spellcheck__Z9H67X5M = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['spellcheck'] >
	>
	type $mol_textarea__value__1ZQVXVZ1 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['source'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__hint__BZFZKWEO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_expander__title__9PP7SGJL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__4RI9C39C = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['source_showed'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__minimal_width__7P5IDXBB = $mol_type_enforce<
		number
		,
		ReturnType< $mol_expander['minimal_width'] >
	>
	type $mol_expander__Tools__23LLXDJ4 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['Source_tools'] >
		,
		ReturnType< $mol_expander['Tools'] >
	>
	type $mol_expander__content__8M309FDQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_expander__expanded__HAZTPFJD = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['eval_showed'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__title__UCSVHRNH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content__7L0HZPGK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $hyoo_js_perf_case_result__title__20I25UI4 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['result_title'] >
		,
		ReturnType< $hyoo_js_perf_case_result['title'] >
	>
	type $hyoo_js_perf_case_result__result__EFNPO7PA = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['result'] >
		,
		ReturnType< $hyoo_js_perf_case_result['result'] >
	>
	type $mol_view__sub__NKSD9CCY = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['result_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_js_eval__code__OJNNDXA8 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['sample'] >
		,
		ReturnType< $hyoo_js_eval['code'] >
	>
	type $hyoo_js_eval__run__T951SJX6 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf_case_row['eval_showed'] >
		,
		ReturnType< $hyoo_js_eval['run'] >
	>
	export class $hyoo_js_perf_case_row extends $mol_view {
		sample( ): string
		Eval_result( ): ReturnType< ReturnType< $hyoo_js_perf_case_row['Eval'] >['Result'] >
		prefix_showed( next?: boolean ): boolean
		measurable( next?: boolean ): boolean
		Measurable( ): $mol_check_box
		changable( ): boolean
		title( next?: string ): string
		Title( ): $mol_string_button
		eval_standalone( ): string
		Eval_sandalone( ): $mol_link_iconed
		Prefix_tools( ): $mol_bar
		prefix( next?: string ): string
		Prefix_code( ): $mol_textarea
		Prefix( ): $mol_expander
		source_showed( next?: boolean ): boolean
		drop( next?: any ): any
		Drop_icon( ): $mol_icon_close
		Drop( ): $mol_button_minor
		dupe( next?: any ): any
		Dupe_icon( ): $mol_icon_chevron_double_down
		Dupe( ): $mol_button_minor
		swap( next?: any ): any
		Swap_icon( ): $mol_icon_unfold_more_horizontal
		Swap( ): $mol_button_minor
		edit_tools( ): readonly(any)[]
		Source_tools( ): $mol_view
		source( next?: string ): string
		Source_code( ): $mol_textarea
		Source( ): $mol_expander
		eval_showed( next?: boolean ): boolean
		Eval_labeler( ): $mol_expander
		result_title( id: any): string
		result( id: any): $hyoo_js_perf_stats
		Result( id: any): $hyoo_js_perf_case_result
		result_rows( ): readonly(any)[]
		Results( ): $mol_view
		columns( ): readonly(any)[]
		results( ): readonly(any)[]
		Eval( ): $hyoo_js_eval
		sub( ): ReturnType< $hyoo_js_perf_case_row['columns'] >
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_check extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_check_all extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=all.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_group extends $mol_check_box {
		checks( ): readonly($mol_check)[]
		full( ): boolean
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_group extends $.$mol_check_group {
        checked(next?: boolean): boolean;
        full(): boolean;
        Icon(): $mol_icon_tick | $mol_icon_check_all;
    }
}

declare namespace $ {

	export class $mol_icon_share extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=share.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_share_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    function $mol_dom_capture_svg(el: Element): Promise<$mol_jsx.JSX.Element>;
    function $mol_dom_capture_image(el: Element): Promise<HTMLImageElement>;
    function $mol_dom_capture_canvas(el: Element): Promise<HTMLCanvasElement>;
}

declare namespace $ {

	export class $mol_button_share extends $mol_button_minor {
		Icon( ): $mol_icon_share_variant
		title( ): string
		uri( ): string
		capture( ): any
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=share.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_share extends $.$mol_button_share {
        capture(): any;
        uri(): string;
        click(): Promise<void>;
    }
}

declare namespace $ {

	export class $mol_icon_directions extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=directions.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_directions_fork extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=fork.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus_box extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {
    class $hyoo_js_perf_bench extends $hyoo_crowd_struct {
        title(next?: string): string;
        prefix(next?: string): string;
        postfix(next?: string): string;
        cases(): $hyoo_js_perf_case[];
        case_ensure(index: number): $hyoo_js_perf_case;
        case_add(): $hyoo_js_perf_case;
        case_drop(index: number): void;
        case_dupe(index: number): $hyoo_js_perf_case;
        case_swap(index: number): number;
        steal(donor: $hyoo_js_perf_bench): void;
        changable(): boolean;
    }
}

declare namespace $ {
    function $mol_range2<Item = number>(item?: Item[] | ((index: number) => Item), size?: () => number): Item[];
    class $mol_range2_array<Item> extends Array<Item> {
        concat(...tail: Item[][]): Item[];
        filter<Context>(check: (val: Item, index: number, list: Item[]) => boolean, context?: Context): Item[];
        forEach<Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => void, context?: Context): void;
        map<Item_out, Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => Item_out, context?: Context): Item_out[];
        reduce<Result>(merge: (result: Result, val: Item, index: number, list: Item[]) => Result, result?: Result): Result | undefined;
        toReversed(): Item[];
        slice(from?: number, to?: number): Item[];
        some<Context>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
        every<Narrow extends Item, Context = null>(check: (value: Item, index: number, array: Item[]) => value is Narrow, context?: Context): this is Narrow[];
        reverse(): never;
        sort(): never;
        [Symbol.toPrimitive](): string;
    }
}

declare namespace $.$$ {
    class $hyoo_js_perf extends $.$hyoo_js_perf {
        bench_fund(): $hyoo_crowd_fund<typeof $hyoo_js_perf_bench>;
        bench_id(): `${string}_${string}` | null;
        permalink(): string;
        bench(): $hyoo_js_perf_bench;
        bench_new(): $hyoo_js_perf_bench;
        bench_fork(): $hyoo_js_perf_bench;
        bench_changable(): $hyoo_js_perf_bench;
        titles(next?: string[]): string[];
        prefixes(next?: string[]): string[];
        sources(next?: string[]): string[];
        bench_title(next?: string): string;
        menu_title(): string;
        prefix(next?: string): string;
        postfix(next?: string): string;
        case_drop(index: number): void;
        case_dupe(index: number): void;
        case_swap(index: number): void;
        cases_count(): number;
        cases(): $.$hyoo_js_perf_case_row[];
        case_title(index: number, next?: string): string;
        case_prefix(index: number, next?: string): string;
        source(index: number, next?: string): string;
        case_sample(index: number): string;
        case_size(index: number): number;
        case_deps_names(index: number): string[];
        case_deps(index: number): number;
        case_measurable(index: number, next?: boolean): boolean;
        module_size(name: string): number;
        measures_for(index: number, next?: $hyoo_js_perf_stats[]): $hyoo_js_perf_stats[];
        measures(): $hyoo_js_perf_stats[][];
        max_frequency(): number;
        max_memory(): number;
        max_size(): number;
        max_deps(): number;
        results(index: number): $hyoo_js_perf_stats[];
        token(): string;
        measure_step(count: number, prefix: string, inner: string, postfix: string): {
            total: number;
            time: any;
            mem: any;
        };
        measure_precise(prefix: string, inner: string, postfix: string): $hyoo_js_perf_stats;
        measure_safe(index: number, prefix: string, inner: string, postfix: string): $hyoo_js_perf_stats;
        _run_iteration: number;
        iterations_reset(): void;
        measurable_all(): $mol_check_box[];
        run(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl__59WYRZ2E = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__L5TBT43N = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $hyoo_js_perf['run'] > ): ReturnType< $hyoo_js_perf['run'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $hyoo_sync_online__yard__J2XGQTY2 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['yard'] >
		,
		ReturnType< $hyoo_sync_online['yard'] >
	>
	type $mol_link_source__uri__VEX5GKZG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_link__uri__MYXCC60V = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__10X2GLY6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_textarea__enabled__RLM7VGCJ = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['changable'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__spellcheck__K1Q4FE1J = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['spellcheck'] >
	>
	type $mol_textarea__value__LBFC533S = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['prefix'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__hint__001MHH82 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_labeler__title__ZC6P2PTG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__JHWA2KDP = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['Prefix_code'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_textarea__enabled__HOGYK2KC = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['changable'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__spellcheck__KMPVQDO9 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['spellcheck'] >
	>
	type $mol_textarea__value__36L9HU5C = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['postfix'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__hint__Y6AKG4O6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_labeler__title__779XK3WF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__WOYN8B4G = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['Postfix_code'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_text__text__ACC7685Y = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['hint'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__Z4F0WJ5I = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__7R2V1LCI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__A6KDQ3XH = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['menu_tools'] >
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__foot__1HLLN2FV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_page__body__5YAO4HV0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_string_button__value__XJV1BSJL = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['bench_title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__hint__MMSHHCF7 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['menu_title'] >
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $mol_string_button__enabled__53V5UEKD = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['changable'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	type $hyoo_js_perf_Case_measurable__OWQEF7FQ = $mol_type_enforce<
		Parameters< $hyoo_js_perf['Case_measurable'] >[0]
		,
		Parameters< $hyoo_js_perf['Case'] >[0]
	>
	type $hyoo_js_perf_case_row__title__H242G8GV = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_title'] >
		,
		ReturnType< $hyoo_js_perf_case_row['title'] >
	>
	type $hyoo_js_perf_case_row__prefix__SVDXWM1G = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_prefix'] >
		,
		ReturnType< $hyoo_js_perf_case_row['prefix'] >
	>
	type $hyoo_js_perf_case_row__source__DQ77R4S4 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['source'] >
		,
		ReturnType< $hyoo_js_perf_case_row['source'] >
	>
	type $hyoo_js_perf_case_row__measurable__9PLLEHY6 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_measurable'] >
		,
		ReturnType< $hyoo_js_perf_case_row['measurable'] >
	>
	type $hyoo_js_perf_case_row__sample__C78W5DBT = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_sample'] >
		,
		ReturnType< $hyoo_js_perf_case_row['sample'] >
	>
	type $hyoo_js_perf_case_row__results__D2V4C5FC = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['results'] >
		,
		ReturnType< $hyoo_js_perf_case_row['results'] >
	>
	type $hyoo_js_perf_case_row__changable__BLOCZZI3 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['changable'] >
		,
		ReturnType< $hyoo_js_perf_case_row['changable'] >
	>
	type $hyoo_js_perf_case_row__drop__FSGYYJPK = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_drop'] >
		,
		ReturnType< $hyoo_js_perf_case_row['drop'] >
	>
	type $hyoo_js_perf_case_row__dupe__YE9ARY17 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_dupe'] >
		,
		ReturnType< $hyoo_js_perf_case_row['dupe'] >
	>
	type $hyoo_js_perf_case_row__swap__BOC9E4J0 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['case_swap'] >
		,
		ReturnType< $hyoo_js_perf_case_row['swap'] >
	>
	type $mol_list__rows__XMJ9BVO8 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['cases'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_check_group__checks__W8D8T8UX = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['measurable_all'] >
		,
		ReturnType< $mol_check_group['checks'] >
	>
	type $mol_check_group__hint__UHPNX85L = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_group['hint'] >
	>
	type $mol_button_major__hint__XWXD0U4J = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click__XS2S57OW = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['run'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__AE0AJZQ9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_button_share__capture__G7P9Z02G = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['Cases'] >
		,
		ReturnType< $mol_button_share['capture'] >
	>
	type $mol_button_minor__hint__I3R2TVQD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__6SZ58P22 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['bench_fork'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__R7YLXBX5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__IMC6CE7F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__MDVIQPUK = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['bench_new'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__UVQ0L54B = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__XTOUVG5P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__title__SPIGAMQ7 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['bench_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Title__89BQTC79 = $mol_type_enforce<
		ReturnType< $hyoo_js_perf['Title'] >
		,
		ReturnType< $mol_page['Title'] >
	>
	type $mol_page__body__H2CBPPD8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__tools__65FDQXHR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	export class $hyoo_js_perf extends $mol_book2 {
		Theme( ): $mol_theme_auto
		run( next?: any ): any
		Hotkey( ): $mol_hotkey
		menu_tools( ): readonly(any)[]
		Online( ): $hyoo_sync_online
		Source( ): $mol_link_source
		About_icon( ): $mol_icon_help_circle_outline
		About( ): $mol_link
		Lights( ): $mol_lights_toggle
		changable( ): boolean
		prefix( next?: string ): string
		Prefix_code( ): $mol_textarea
		Prefix( ): $mol_labeler
		postfix( next?: string ): string
		Postfix_code( ): $mol_textarea
		Postfix( ): $mol_labeler
		hint( ): string
		Hint( ): $mol_text
		Common_content( ): $mol_list
		Common( ): $mol_page
		bench_title( next?: string ): string
		Title( ): $mol_string_button
		case_title( id: any, next?: string ): string
		case_prefix( id: any, next?: string ): string
		source( id: any, next?: string ): string
		case_measurable( id: any, next?: boolean ): boolean
		Case_measurable( id: any): ReturnType< ReturnType< $hyoo_js_perf['Case'] >['Measurable'] >
		case_sample( id: any): string
		results( id: any, next?: readonly(any)[] ): readonly(any)[]
		case_drop( id: any, next?: any ): any
		case_dupe( id: any, next?: any ): any
		case_swap( id: any, next?: any ): any
		Case( id: any): $hyoo_js_perf_case_row
		cases( ): readonly(any)[]
		Cases( ): $mol_list
		measurable_all( ): readonly(any)[]
		Measurable_all( ): $mol_check_group
		Run_icon( ): $mol_icon_play
		Run( ): $mol_button_major
		Share( ): $mol_button_share
		bench_fork( next?: any ): any
		Fork_icon( ): $mol_icon_directions_fork
		Fork( ): $mol_button_minor
		bench_new( next?: any ): any
		New_icon( ): $mol_icon_plus_box
		New( ): $mol_button_minor
		Tool_buttons( ): $mol_view
		Cases_pane( ): $mol_page
		yard( ): $hyoo_sync_client
		bench_id( ): any
		bench( ): $hyoo_js_perf_bench
		titles( ): readonly(string)[]
		prefixes( ): readonly(string)[]
		sources( ): readonly(string)[]
		menu_title( ): string
		permalink( ): string
		plugins( ): readonly(any)[]
		pages( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=perf.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked__9XQN6V5O = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__Z9Y342BH = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__LQ2NLXH2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__AAU6P4GO = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__7SUGP66V = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {

	type $mol_switch__value__CV5OTC9J = $mol_type_enforce<
		ReturnType< $mol_deck['current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__9VHNWCBK = $mol_type_enforce<
		ReturnType< $mol_deck['switch_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	export class $mol_deck extends $mol_list {
		current( next?: string ): string
		switch_options( ): Record<string, any>
		Switch( ): $mol_switch
		Content( ): $mol_view
		items( ): readonly($mol_view)[]
		rows( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=deck.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): $mol_view;
    }
}

declare namespace $ {

	export class $mol_icon_poll extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=poll.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $hyoo_mol_bench_perf__bench_title__NGMQA0R6 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_title'] >
	>
	type $hyoo_mol_bench_perf__analysis_uri__OS3ZJA6T = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['analysis_uri'] >
	>
	type $hyoo_mol_bench_perf__Close__6XOX0H0Y = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_perf['Close'] >
	>
	type $hyoo_mol_bench_perf__bench_id__5YI4H9HT = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_id'] >
	>
	type $hyoo_mol_bench_perf__bench_title__6N7FAMV7 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_title'] >
	>
	type $hyoo_mol_bench_perf__analysis_uri__7MDLAZUE = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['analysis_uri'] >
	>
	type $hyoo_mol_bench_perf__Close__P3MJL8B8 = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_perf['Close'] >
	>
	type $hyoo_mol_bench_perf__bench_id__WHJ50JOC = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_id'] >
	>
	type $hyoo_mol_bench_perf__bench_title__HBGMRNS5 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_title'] >
	>
	type $hyoo_mol_bench_perf__analysis_uri__K40NQE33 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['analysis_uri'] >
	>
	type $hyoo_mol_bench_perf__Close__D3M63TRV = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_perf['Close'] >
	>
	type $hyoo_mol_bench_perf__bench_id__E7UBBF3Z = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_id'] >
	>
	type $hyoo_mol_bench_perf__bench_title__TT2JISHU = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_title'] >
	>
	type $hyoo_mol_bench_perf__analysis_uri__JFYT7IW9 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['analysis_uri'] >
	>
	type $hyoo_mol_bench_perf__Close__UH73PE1P = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_perf['Close'] >
	>
	type $hyoo_mol_bench_perf__bench_id__X9VQ4J27 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_id'] >
	>
	type $hyoo_mol_bench_perf__bench_title__2HTXXSXC = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_title'] >
	>
	type $hyoo_mol_bench_perf__Close__CJOZZDOJ = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_perf['Close'] >
	>
	type $hyoo_mol_bench_perf__bench_id__M7EBO3EU = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_id'] >
	>
	type $hyoo_mol_bench_perf__bench_title__83CA9CJT = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_title'] >
	>
	type $hyoo_mol_bench_perf__analysis_uri__14N8JPDT = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['analysis_uri'] >
	>
	type $hyoo_mol_bench_perf__Close__7G7M21B0 = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_perf['Close'] >
	>
	type $hyoo_mol_bench_perf__bench_id__GWIBJ0X2 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_perf['bench_id'] >
	>
	type $hyoo_mol_bench_bench__title__NRZ3DRGI = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_bench['title'] >
	>
	type $hyoo_mol_bench_bench__analysis_uri__JGN8FA80 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_bench['analysis_uri'] >
	>
	type $hyoo_mol_bench_bench__Close__4BS6RDSJ = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_bench['Close'] >
	>
	type $hyoo_mol_bench_bench__bench__MX37P5QW = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_bench['bench'] >
	>
	type $hyoo_mol_bench_bench__title__4DFUGN1Z = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_bench['title'] >
	>
	type $hyoo_mol_bench_bench__analysis_uri__O6N1NN3Q = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_bench['analysis_uri'] >
	>
	type $hyoo_mol_bench_bench__Close__DPPF13ZV = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_bench['Close'] >
	>
	type $hyoo_mol_bench_bench__bench__V5ZVVFQI = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_bench['bench'] >
	>
	type $mol_embed_native__title__154WVCT1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__DP1G15M3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__9DAVVMV1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__48VKWVSL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__IWDWG3XV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__MRHAJRWA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $hyoo_mol_bench_visual__title__4SD1R218 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['title'] >
	>
	type $hyoo_mol_bench_visual__analysis_uri__OEIHL1FW = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['analysis_uri'] >
	>
	type $hyoo_mol_bench_visual__Close__9DTCCR40 = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_visual['Close'] >
	>
	type $hyoo_mol_bench_visual__items__0UZXHQTV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_mol_bench_visual['items'] >
	>
	type $mol_embed_native__title__XOBPMHII = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__R753GXJG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__HB9LWVQS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__4KZOOYP3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $hyoo_mol_bench_visual__title__51A8A5P9 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['title'] >
	>
	type $hyoo_mol_bench_visual__analysis_uri__NTO0LXQW = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['analysis_uri'] >
	>
	type $hyoo_mol_bench_visual__Close__HIZ73YVC = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_visual['Close'] >
	>
	type $hyoo_mol_bench_visual__items__Y6T5C8DE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_mol_bench_visual['items'] >
	>
	type $mol_embed_native__title__82SWF13E = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__WQ5IKF4J = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__JTUXQOCC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__9NHXDG3F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__IYQ17UFY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__1RJD1BM5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__166T657F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__KBV0AQNW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $hyoo_mol_bench_visual__title__J5YW5S4U = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['title'] >
	>
	type $hyoo_mol_bench_visual__analysis_uri__FMOHZ9WU = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['analysis_uri'] >
	>
	type $hyoo_mol_bench_visual__Close__U3GIREM8 = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_visual['Close'] >
	>
	type $hyoo_mol_bench_visual__items__31JV2IAW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_mol_bench_visual['items'] >
	>
	type $mol_embed_native__title__YNHUJIHS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__W1LD8NPI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__OSJZ7AJ9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__H0WU570G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $hyoo_mol_bench_visual__title__J0TLOO0N = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['title'] >
	>
	type $hyoo_mol_bench_visual__analysis_uri__Y93UOF1S = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['analysis_uri'] >
	>
	type $hyoo_mol_bench_visual__Close__H72HISUN = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_visual['Close'] >
	>
	type $hyoo_mol_bench_visual__items__P53N23DY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_mol_bench_visual['items'] >
	>
	type $mol_embed_native__title__3KV64PMM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__0PVQYVIX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__R0THKHXP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__OGKQ1LE6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_native__title__CDGJZIU8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__U3F83RE1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $hyoo_mol_bench_visual__title__X0VV3ZNV = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['title'] >
	>
	type $hyoo_mol_bench_visual__analysis_uri__QWHAYI8W = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_mol_bench_visual['analysis_uri'] >
	>
	type $hyoo_mol_bench_visual__Close__WX6QKKHJ = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench['Close_item'] >
		,
		ReturnType< $hyoo_mol_bench_visual['Close'] >
	>
	type $hyoo_mol_bench_visual__items__B2OXLNYX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_mol_bench_visual['items'] >
	>
	type $mol_link__arg__30723B51 = $mol_type_enforce<
		({ 
			'bench': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__EPAFBFIW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $hyoo_mol_bench extends $mol_book2_catalog {
		Close_item_icon( ): $mol_icon_close
		Init( ): $hyoo_mol_bench_perf
		equals( ): $hyoo_mol_bench_perf
		moment( ): $hyoo_mol_bench_perf
		Markdown( ): $hyoo_mol_bench_perf
		Runtype( ): $hyoo_mol_bench_perf
		Immutable( ): $hyoo_mol_bench_perf
		Rope( ): $hyoo_mol_bench_bench
		Todomvc( ): $hyoo_mol_bench_bench
		Chanelog_mol( ): $mol_embed_native
		Changelog_vue( ): $mol_embed_native
		Changelog_vanilla( ): $mol_embed_native
		Chanelog( ): $hyoo_mol_bench_visual
		Toxic_mol( ): $mol_embed_native
		Toxic_vue( ): $mol_embed_native
		Toxic( ): $hyoo_mol_bench_visual
		DBMon_mol( ): $mol_embed_native
		DBMon_vue( ): $mol_embed_native
		DBMon_react( ): $mol_embed_native
		DBMon_vanilla( ): $mol_embed_native
		DBMon( ): $hyoo_mol_bench_visual
		Habr_mol( ): $mol_embed_native
		Habr_vue( ): $mol_embed_native
		Habr( ): $hyoo_mol_bench_visual
		Sierp_mol( ): $mol_embed_native
		Sierp_react( ): $mol_embed_native
		Sierp_glimmer( ): $mol_embed_native
		Sierp( ): $hyoo_mol_bench_visual
		menu_title( ): string
		Placeholder( ): any
		Close_item( ): $mol_link
		param( ): string
		spreads( ): ({ 
			'reactivity': ReturnType< $hyoo_mol_bench['Init'] >,
			'equals': ReturnType< $hyoo_mol_bench['equals'] >,
			'moment': ReturnType< $hyoo_mol_bench['moment'] >,
			'markdown': ReturnType< $hyoo_mol_bench['Markdown'] >,
			'runtype': ReturnType< $hyoo_mol_bench['Runtype'] >,
			'imutable': ReturnType< $hyoo_mol_bench['Immutable'] >,
			'rope': ReturnType< $hyoo_mol_bench['Rope'] >,
			'todomvc': ReturnType< $hyoo_mol_bench['Todomvc'] >,
			'changelog': ReturnType< $hyoo_mol_bench['Chanelog'] >,
			'toxic': ReturnType< $hyoo_mol_bench['Toxic'] >,
			'dbmon': ReturnType< $hyoo_mol_bench['DBMon'] >,
			'habr': ReturnType< $hyoo_mol_bench['Habr'] >,
			'sierp': ReturnType< $hyoo_mol_bench['Sierp'] >,
		}) 
	}
	
	type $hyoo_mol_bench_analysis__uri__36SVHRHX = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench_bench['analysis_uri'] >
		,
		ReturnType< $hyoo_mol_bench_analysis['uri'] >
	>
	export class $hyoo_mol_bench_bench extends $hyoo_bench_app {
		analysis_uri( ): string
		Analysis( ): $hyoo_mol_bench_analysis
		Close( ): $mol_view
		addon_title( ): ReturnType< $hyoo_mol_bench_bench['title'] >
		menu_tools( ): readonly(any)[]
	}
	
	type $mol_link_iconed__title__5CDGGX6O = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__hint__X6Y82FVW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__UPSIDS4R = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench_perf['permalink'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $hyoo_mol_bench_analysis__uri__F4AMA928 = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench_perf['analysis_uri'] >
		,
		ReturnType< $hyoo_mol_bench_analysis['uri'] >
	>
	export class $hyoo_mol_bench_perf extends $hyoo_js_perf {
		Permalink( ): $mol_link_iconed
		analysis_uri( ): string
		Analysis( ): $hyoo_mol_bench_analysis
		Close( ): $mol_view
		changable( ): boolean
		Share( ): any
		Fork( ): any
		New( ): any
		menu_tools( ): readonly(any)[]
	}
	
	type $hyoo_mol_bench_analysis__uri__W668LNBT = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench_visual['analysis_uri'] >
		,
		ReturnType< $hyoo_mol_bench_analysis['uri'] >
	>
	type $mol_deck__rows__7CKXOXGH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_deck['rows'] >
	>
	type $mol_deck__items__4QH2Z4PE = $mol_type_enforce<
		ReturnType< $hyoo_mol_bench_visual['items'] >
		,
		ReturnType< $mol_deck['items'] >
	>
	export class $hyoo_mol_bench_visual extends $mol_page {
		analysis_uri( ): string
		Analysis( ): $hyoo_mol_bench_analysis
		Close( ): $mol_view
		Switch( ): ReturnType< ReturnType< $hyoo_mol_bench_visual['Deck'] >['Switch'] >
		Content( ): ReturnType< ReturnType< $hyoo_mol_bench_visual['Deck'] >['Content'] >
		items( ): readonly(any)[]
		Deck( ): $mol_deck
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body_content( ): readonly(any)[]
	}
	
	export class $hyoo_mol_bench_analysis extends $mol_link {
		Icon( ): $mol_icon_poll
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=bench.view.tree.d.ts.map
declare namespace $ {
    class $mol_view_tree2_error extends Error {
        readonly spans: readonly $mol_span[];
        constructor(message: string, spans: readonly $mol_span[]);
        toJSON(): {
            message: string;
            spans: readonly $mol_span[];
        };
    }
    class $mol_view_tree2_error_suggestions {
        readonly suggestions: readonly string[];
        constructor(suggestions: readonly string[]);
        toString(): string;
        toJSON(): readonly string[];
    }
    function $mol_view_tree2_error_str(strings: readonly string[], ...parts: readonly ($mol_span | readonly $mol_span[] | string | number | $mol_view_tree2_error_suggestions)[]): $mol_view_tree2_error;
}

declare namespace $ {
    function $mol_view_tree2_child(this: $, tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_classes(defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_normalize(this: $, defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    let $mol_view_tree2_prop_signature: $mol_regexp<{
        readonly name: string;
        readonly key: string;
        readonly next: string;
    }>;
}

declare namespace $ {
    function $mol_view_tree2_prop_parts(this: $, prop: $mol_tree2): {
        name: string;
        key: string;
        next: string;
    };
}

declare namespace $ {
    function $mol_view_tree2_prop_quote(name: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_match(klass?: $mol_tree2): boolean;
}

declare namespace $ {
    function $mol_view_tree2_class_super(this: $, klass: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_props(this: $, klass: $mol_tree2): $mol_tree2[];
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    function $mol_view_tree2_value_type(this: $, val: $mol_tree2): "locale" | "list" | "object" | "number" | "string" | "null" | "bool" | "dict" | "get" | "bind" | "put";
}

declare namespace $ {
    function $mol_view_tree2_value(this: $, value: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_value_number(type: string): boolean | RegExpMatchArray;
}

declare namespace $ {
    function $mol_view_tree2_to_js(this: $, descr: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_js_to_text(this: $, js: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_text_to_string(this: $, text: $mol_tree2): string;
}

declare namespace $ {

	type $mol_select_list_filter_pattern__F8UWP49B = $mol_type_enforce<
		Parameters< $mol_select_list['filter_pattern'] >[0]
		,
		Parameters< ReturnType< $mol_select_list['Pick'] >['filter_pattern'] >[0]
	>
	type $mol_select__event_select__4EAGL9K3 = $mol_type_enforce<
		ReturnType< $mol_select_list['event_select'] >
		,
		ReturnType< $mol_select['event_select'] >
	>
	type $mol_select__align_hor__ZO1E86JY = $mol_type_enforce<
		ReturnType< $mol_select_list['align_hor'] >
		,
		ReturnType< $mol_select['align_hor'] >
	>
	type $mol_select__options__083BEMH4 = $mol_type_enforce<
		ReturnType< $mol_select_list['options_pickable'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__value__X2B3IX15 = $mol_type_enforce<
		ReturnType< $mol_select_list['pick'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__option_label__DYQ85RMH = $mol_type_enforce<
		ReturnType< $mol_select_list['option_title'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_select__trigger_enabled__WJ41J958 = $mol_type_enforce<
		ReturnType< $mol_select_list['pick_enabled'] >
		,
		ReturnType< $mol_select['trigger_enabled'] >
	>
	type $mol_select__hint__9TV6LVRQ = $mol_type_enforce<
		ReturnType< $mol_select_list['pick_hint'] >
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__Trigger_icon__MHTGDR81 = $mol_type_enforce<
		ReturnType< $mol_select_list['Pick_icon'] >
		,
		ReturnType< $mol_select['Trigger_icon'] >
	>
	type $mol_button_minor__title__IJP89MPY = $mol_type_enforce<
		ReturnType< $mol_select_list['badge_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__VC8MBY28 = $mol_type_enforce<
		ReturnType< $mol_select_list['remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__hint__LLTJPSBZ = $mol_type_enforce<
		ReturnType< $mol_select_list['badge_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__TDJKK5SA = $mol_type_enforce<
		ReturnType< $mol_select_list['drop_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_select_list_sub__DOLIVIT2 = $mol_type_enforce<
		ReturnType< $mol_select_list['badges_list'] >[number]
		,
		$mol_view
	>
	export class $mol_select_list extends $mol_view {
		Badges( ): readonly($mol_view)[]
		badge_title( id: any): string
		remove( id: any, next?: any ): any
		badge_hint( ): string
		enabled( ): boolean
		drop_enabled( ): ReturnType< $mol_select_list['enabled'] >
		event_select( id: any, next?: any ): any
		align_hor( ): string
		options( ): readonly(string)[]
		options_pickable( ): ReturnType< $mol_select_list['options'] >
		pick( next?: string ): string
		option_title( id: any): string
		pick_enabled( ): ReturnType< $mol_select_list['enabled'] >
		pick_hint( ): string
		filter_pattern( next?: ReturnType< ReturnType< $mol_select_list['Pick'] >['filter_pattern'] > ): ReturnType< ReturnType< $mol_select_list['Pick'] >['filter_pattern'] >
		Pick_icon( ): $mol_icon_plus
		Pick( ): $mol_select
		value( next?: readonly(string)[] ): readonly(string)[]
		dictionary( ): Record<string, any>
		badges_list( ): ReturnType< $mol_select_list['Badges'] >
		Badge( id: any): $mol_button_minor
		sub( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select_list extends $.$mol_select_list {
        value(val?: readonly string[]): readonly string[];
        pick(key?: string): string;
        event_select(id: string, event?: MouseEvent): void;
        options(): readonly string[];
        options_pickable(): readonly string[];
        option_title(key: string): string;
        badge_title(key: string): string;
        pick_enabled(): boolean;
        Badges(): $mol_button_minor[];
        title(): string;
        remove(key: string): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    function $mol_tree2_to_json(this: $, tree: $mol_tree2): unknown;
}

declare namespace $ {
    function $mol_tree2_grammar_check(grammar: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_to_text(xml: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_from_dom(dom: Node): $mol_tree2;
}

declare namespace $ {
    function $mol_vlq_encode(val: number): string;
}

declare namespace $ {
    type $mol_sourcemap_segment = [number] | [number, number, number, number] | [number, number, number, number, number];
    type $mol_sourcemap_line = $mol_sourcemap_segment[];
    type $mol_sourcemap_mappings = $mol_sourcemap_line[];
    interface $mol_sourcemap_raw {
        version: number;
        sources: string[];
        names?: string[];
        sourceRoot?: string;
        sourcesContent?: (string | null)[];
        mappings: string | $mol_sourcemap_line[];
        file?: string;
    }
}

declare namespace $ {
    function $mol_tree2_text_to_sourcemap(this: $, tree: $mol_tree2): $mol_sourcemap_raw;
}

declare namespace $ {
    function $mol_sourcemap_url(this: $, uri: string, type?: "js" | "css"): string;
}

declare namespace $ {
    function $mol_sourcemap_dataurl_decode(this: $, data: string): $mol_sourcemap_raw | undefined;
    function $mol_sourcemap_dataurl_encode(this: $, map: $mol_sourcemap_raw, type?: "js" | "css"): string;
}

declare namespace $ {
    function $mol_tree2_text_to_string_mapped(this: $, text: $mol_tree2, type: 'js' | 'css'): string;
    function $mol_tree2_text_to_string_mapped_js(this: $, text: $mol_tree2): string;
    function $mol_tree2_text_to_string_mapped_css(this: $, text: $mol_tree2): string;
}

declare namespace $ {
    function $mol_tree2_text_to_sourcemap_vis(this: $, text: $mol_tree2): string;
}

declare namespace $ {
    function $mol_tree2_span_imprint(tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_span_reuse(tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_bin_to_bytes(tree: $mol_tree2): Uint8Array;
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span?: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_leb128_encode(val: number): Uint8Array;
    function $mol_leb128_decode(bytes: Uint8Array): number;
}

declare namespace $ {
    enum $mol_wasm_bin_section {
        custom = 0,
        type = 1,
        import = 2,
        func = 3,
        table = 4,
        memory = 5,
        global = 6,
        export = 7,
        start = 8,
        element = 9,
        code = 10,
        data = 11
    }
    enum $mol_wasm_bin_external {
        func = 0,
        table = 1,
        mem = 2,
        global = 3
    }
    enum $mol_wasm_bin_valtype {
        i32 = 127,
        i64 = 126,
        f32 = 125,
        f64 = 124
    }
    enum $mol_wasm_bin_instr {
        'block' = 2,
        'loop' = 3,
        'if' = 4,
        'else' = 5,
        'br' = 12,
        'br_if' = 13,
        'br_table' = 14,
        'call' = 16,
        'call_indirect' = 17,
        'ref.null' = 208,
        'ref.is_null' = 209,
        'ref.func' = 210,
        'drop' = 26,
        'select' = 27,
        'select2' = 28,
        'memory.size' = 63,
        'memory.grow' = 64,
        mem = 252
    }
    enum $mol_wasm_bin_instr_nullary {
        'unreachable' = 0,
        'nop' = 1,
        'end' = 11,
        'return' = 15,
        'i32.eqz' = 69,
        'i32.eq' = 70,
        'i32.ne' = 71,
        'i32.lt_s' = 72,
        'i32.lt_u' = 73,
        'i32.gt_s' = 74,
        'i32.gt_u' = 75,
        'i32.le_s' = 76,
        'i32.le_u' = 77,
        'i32.ge_s' = 78,
        'i32.ge_u' = 79,
        'i64.eqz' = 80,
        'i64.eq' = 81,
        'i64.ne' = 82,
        'i64.lt_s' = 83,
        'i64.lt_u' = 84,
        'i64.gt_s' = 85,
        'i64.gt_u' = 86,
        'i64.le_s' = 87,
        'i64.le_u' = 88,
        'i64.ge_s' = 89,
        'i64.ge_u' = 90,
        'f32.eq' = 91,
        'f32.ne' = 92,
        'f32.lt' = 93,
        'f32.gt' = 94,
        'f32.le' = 95,
        'f32.ge' = 96,
        'f64.eq' = 97,
        'f64.ne' = 98,
        'f64.lt' = 99,
        'f64.gt' = 100,
        'f64.le' = 101,
        'f64.ge' = 102,
        'i32.clz' = 103,
        'i32.ctz' = 104,
        'i32.popcnt' = 105,
        'i32.add' = 106,
        'i32.sub' = 107,
        'i32.mul' = 108,
        'i32.div_s' = 109,
        'i32.div_u' = 110,
        'i32.rem_s' = 111,
        'i32.rem_u' = 112,
        'i32.and' = 113,
        'i32.or' = 114,
        'i32.xor' = 115,
        'i32.shl' = 116,
        'i32.shr_s' = 117,
        'i32.shr_u' = 118,
        'i32.rotl' = 119,
        'i32.rotr' = 120,
        'i64.clz' = 121,
        'i64.ctz' = 122,
        'i64.popcnt' = 123,
        'i64.add' = 124,
        'i64.sub' = 125,
        'i64.mul' = 126,
        'i64.div_s' = 127,
        'i64.div_u' = 128,
        'i64.rem_s' = 129,
        'i64.rem_u' = 130,
        'i64.and' = 131,
        'i64.or' = 132,
        'i64.xor' = 133,
        'i64.shl' = 134,
        'i64.shr_s' = 135,
        'i64.shr_u' = 136,
        'i64.rotl' = 137,
        'i64.rotr' = 138
    }
    enum $mol_wasm_bin_instr_unary {
        'local.get' = 32,
        'local.set' = 33,
        'local.tee' = 34,
        'global.get' = 35,
        'global.set' = 36,
        'table.get' = 37,
        'table.set' = 38,
        'i32.const' = 65,
        'i64.const' = 66,
        'f32.const' = 67,
        'f64.const' = 68
    }
    enum $mol_wasm_bin_instr_binary {
        'i32.load' = 40,
        'i64.load' = 41,
        'f32.load' = 42,
        'f64.load' = 43,
        'i32.load8_s' = 44,
        'i32.load8_u' = 45,
        'i32.load16_s' = 46,
        'i32.load16_u' = 47,
        'i64.load8_s' = 48,
        'i64.load8_u' = 49,
        'i64.load16_s' = 50,
        'i64.load16_u' = 51,
        'i64.load32_s' = 52,
        'i64.load32_u' = 53,
        'i32.store' = 54,
        'i64.store' = 55,
        'f32.store' = 56,
        'f64.store' = 57,
        'i32.store8' = 58,
        'i32.store16' = 59,
        'i64.store8' = 60,
        'i64.store16' = 61,
        'i64.store32' = 62
    }
    enum $mol_wasm_bin_instr_mem {
        'i32.trunc_sat_f32_s' = 0,
        'i32.trunc_sat_f32_u' = 1,
        'i32.trunc_sat_f64_s' = 2,
        'i32.trunc_sat_f64_u' = 3,
        'i64.trunc_sat_f32_s' = 4,
        'i64.trunc_sat_f32_u' = 5,
        'i64.trunc_sat_f64_s' = 6,
        'i64.trunc_sat_f64_u' = 7,
        'memory.init' = 8,
        'data.drop' = 9,
        'memory.copy' = 10,
        'memory.fill' = 11,
        'table.init' = 12,
        'elem.drop' = 13,
        'table.copy' = 14,
        'table.grow' = 15,
        'table.size' = 16,
        'table.fill' = 17
    }
}

declare namespace $ {
    function $mol_tree2_wasm_to_bin(this: $, code: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_to_text(this: $, tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_to_locale(this: $, module: $mol_tree2): Record<string, string>;
}

declare namespace $ {
    function $mol_view_tree2_to_dts(this: $, tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $hyoo_marked_tree_from_line(this: $, code: string, span_entire?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $hyoo_marked_tree_to_js(this: $, mt: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_json_from_string(str: string): any;
    function $mol_json_to_string(str: string): string;
}

declare namespace $ {
    const $mol_jack: $mol_tree2_belt<{}>;
    function $mol_jack_transform(code: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    class $mol_wasm_instance extends $mol_object2 {
        readonly module: WebAssembly.Module;
        readonly imports?: Record<string, Record<string, WebAssembly.ImportValue>> | undefined;
        native: WebAssembly.Instance;
        constructor(module: WebAssembly.Module, imports?: Record<string, Record<string, WebAssembly.ImportValue>> | undefined);
        memory(offset: number, length: number): Uint8Array;
        string(offset: number, length: number, encoding?: string): string;
        get(name: string): WebAssembly.ExportValue;
    }
}

declare namespace $ {
    class $mol_wasm_module extends $mol_object2 {
        readonly buffer: ArrayBuffer;
        native: WebAssembly.Module;
        constructor(buffer: ArrayBuffer);
        instance<Imports extends {
            [mod in string]: {
                [func in string]: WebAssembly.ImportValue;
            };
        }>(imports?: Imports): $mol_wasm_instance;
    }
}

declare namespace $ {
    function $mol_js_eval(this: $, code: string): any;
}

declare namespace $ {
    function $mol_diff_path<Item>(...paths: Item[][]): {
        prefix: Item[];
        suffix: Item[][];
    };
}

declare namespace $.$$ {
    class $hyoo_tree extends $.$hyoo_tree {
        pipeline(next?: string[]): readonly string[];
        add(index: number, next?: string): string;
        source(next?: string): string;
        transform(index: number, next?: string): string;
        transform_options(): string[];
        result(index: number): string | $mol_tree2 | Uint8Array | $mol_wasm_module;
        result_text(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link_source__uri__95KCZG4Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_link__title__PDW1ESWP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__DJ4UKPWB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__7DV6ZZQR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__EYFHVZ60 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__3YDM64VT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__7PDX4498 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__OK7AYUJ7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__8TQ1YEY1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__WSMQNOC0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__7MGYZ8VD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__IHB5RW20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__FJNT8T7Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__MMV1RN3V = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__9UCX32P3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__KB14GL8D = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__Z4PBHJL0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__MNWIDVIA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__AJG2GM7K = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__G1FUKWZV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__BY27IMFZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__URG9L9RL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__6K7SLYDW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__YFFUBPLL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__5HPQSXRG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_list__rows__B4AA14FX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__7RMU0UP9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__T7A6U0F5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__Q9Q71R9J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_textarea__value__K0DS004E = $mol_type_enforce<
		ReturnType< $hyoo_tree['source'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__hint__QU287TJJ = $mol_type_enforce<
		ReturnType< $hyoo_tree['source_hint'] >
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__sidebar_showed__UUI3EMPZ = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['sidebar_showed'] >
	>
	type $mol_page__title__YPPU9GYL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__P0OI9TM0 = $mol_type_enforce<
		ReturnType< $hyoo_tree['source_tools'] >
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__IMD68U7G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_select_list__value__LFL1DRZ4 = $mol_type_enforce<
		ReturnType< $hyoo_tree['pipeline'] >
		,
		ReturnType< $mol_select_list['value'] >
	>
	type $mol_select_list__options_pickable__U4BBJ4ED = $mol_type_enforce<
		ReturnType< $hyoo_tree['transform_options'] >
		,
		ReturnType< $mol_select_list['options_pickable'] >
	>
	type $mol_select_list__pick_hint__MVJWZV4V = $mol_type_enforce<
		ReturnType< $hyoo_tree['add_hint'] >
		,
		ReturnType< $mol_select_list['pick_hint'] >
	>
	type $mol_text_code__sidebar_showed__WF822TIK = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__text__0YOHJMPJ = $mol_type_enforce<
		ReturnType< $hyoo_tree['result_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_page__title__BJQJ17RP = $mol_type_enforce<
		ReturnType< $hyoo_tree['result_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__head__41SJ5YDP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body__DYUU9X0L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	export class $hyoo_tree extends $mol_book2 {
		Theme( ): $mol_theme_auto
		pipeline_default( ): readonly(string)[]
		Lights( ): $mol_lights_toggle
		Github( ): $mol_link_source
		View2JS( ): $mol_link
		View2DTS( ): $mol_link
		View2L10n( ): $mol_link
		Json( ): $mol_link
		Xml( ): $mol_link
		XmlTree( ): $mol_link
		Js( ): $mol_link
		Wasm( ): $mol_link
		jack( ): $mol_link
		Mt( ): $mol_link
		Grammar( ): $mol_link
		Span( ): $mol_link
		Presets_list( ): $mol_list
		Presets( ): $mol_page
		source_tools( ): readonly($mol_view_content)[]
		source_default( ): string
		source( next?: ReturnType< $hyoo_tree['source_default'] > ): ReturnType< $hyoo_tree['source_default'] >
		source_hint( ): string
		Source_text( ): $mol_textarea
		Source( ): $mol_page
		result_title( ): ReturnType< ReturnType< $hyoo_tree['Pipeline'] >['title'] >
		transform_options( ): readonly(string)[]
		add_hint( ): string
		Pipeline( ): $mol_select_list
		result_text( ): any
		Result_text( ): $mol_text_code
		Result( ): $mol_page
		transform_map( ): ({ 
			'$mol_tree2_from_string': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_to_string': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_from_json': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_to_json': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_grammar_check': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_dom_parse': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_xml_to_text': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_xml_from_dom': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_js_to_text': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_text_to_string': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_text_to_string_mapped_js': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_text_to_string_mapped_css': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_text_to_sourcemap': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_text_to_sourcemap_vis': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_span_imprint': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_span_reuse': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_wasm_to_bin': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_bin_from_string': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_bin_from_bytes': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_tree2_bin_to_bytes': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_view_tree2_to_text': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_view_tree2_to_locale': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_view_tree2_to_dts': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_view_tree2_to_js': ({ 
				'input': string,
				'output': string,
			}) ,
			'$hyoo_marked_tree_from_line': ({ 
				'input': string,
				'output': string,
			}) ,
			'$hyoo_marked_tree_to_js': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_json_from_string': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_json_to_string': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_jack_transform': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_wasm_module': ({ 
				'input': string,
				'output': string,
			}) ,
			'$mol_js_eval': ({ 
				'input': string,
				'output': string,
			}) ,
		}) 
		plugins( ): readonly(any)[]
		pipeline( next?: ReturnType< $hyoo_tree['pipeline_default'] > ): ReturnType< $hyoo_tree['pipeline_default'] >
		Placeholder( ): any
		pages( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=tree.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__dom_name__F8SAD7UH = $mol_type_enforce<
		ReturnType< $mol_section['title_dom_name'] >
		,
		ReturnType< $mol_paragraph['dom_name'] >
	>
	type $mol_paragraph__title__GSCPS6BS = $mol_type_enforce<
		ReturnType< $mol_section['title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub__GM2Z4B3B = $mol_type_enforce<
		ReturnType< $mol_section['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__OYXL4TNN = $mol_type_enforce<
		ReturnType< $mol_section['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__LWHPFLCW = $mol_type_enforce<
		ReturnType< $mol_section['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_section extends $mol_list {
		title_dom_name( ): string
		Title( ): $mol_paragraph
		tools( ): readonly(any)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		level( ): number
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=section.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_section extends $.$mol_section {
        title_dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_crowd_app extends $.$hyoo_crowd_app {
        sync_enabled(): boolean;
        sync(next?: Event): number;
    }
    class $hyoo_crowd_app_peer extends $.$hyoo_crowd_app_peer {
        store(): $hyoo_crowd_land;
        sync_clocks(next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        text(next?: string): string;
        delta(): readonly $hyoo_crowd_unit[];
        delta_view(): {
            kind: string;
            Land: `${string}_${string}`;
            Auth: `${string}_${string}`;
            Head: `${string}_${string}`;
            Self: `${string}_${string}`;
            Next: `${string}_${string}`;
            Prev: `${string}_${string}`;
            Time: string;
            Data: string;
        }[];
        changes(): number;
        size_text(): number;
        units_alive(): number;
        units_total(): number;
        units_dead(): number;
        size_state_bin(): number;
        size_delta_bin(): number;
        stats(): string;
    }
}

declare namespace $ {

	type $mol_button_major__title__6E9I3T94 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__enabled__SPIUFI5E = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app['sync_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__click__ID7VEEGC = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app['sync'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $hyoo_crowd_app_peer__title__9YY8P1J3 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_crowd_app_peer['title'] >
	>
	type $hyoo_crowd_app_peer__hint__8F75SL8Q = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_crowd_app_peer['hint'] >
	>
	type $hyoo_crowd_app_peer__sync__439BIZQI = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app['sync'] >
		,
		ReturnType< $hyoo_crowd_app_peer['sync'] >
	>
	type $hyoo_crowd_app_peer__tools__CE0215VN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_crowd_app_peer['tools'] >
	>
	type $mol_link_source__uri__TPQS6XIR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $hyoo_crowd_app_peer__title__NZ7SM4FO = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_crowd_app_peer['title'] >
	>
	type $hyoo_crowd_app_peer__hint__RJE034GR = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_crowd_app_peer['hint'] >
	>
	type $hyoo_crowd_app_peer__sync__3YB9PQ7D = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app['sync'] >
		,
		ReturnType< $hyoo_crowd_app_peer['sync'] >
	>
	type $hyoo_crowd_app_peer__tools__2ZVN8XJ4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_crowd_app_peer['tools'] >
	>
	export class $hyoo_crowd_app extends $mol_book2 {
		Theme( ): $mol_theme_auto
		sync_enabled( ): boolean
		sync( next?: any ): any
		Sync( ): $mol_button_major
		Left( ): $hyoo_crowd_app_peer
		Lights( ): $mol_lights_toggle
		Source( ): $mol_link_source
		Right( ): $hyoo_crowd_app_peer
		Placeholder( ): any
		plugins( ): readonly(any)[]
		pages( ): readonly(any)[]
	}
	
	type $mol_textarea__hint__MXDHT1SS = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app_peer['hint'] >
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__8Z8D6OE6 = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app_peer['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__sidebar_showed__D0SMLNJV = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['sidebar_showed'] >
	>
	type $mol_text__text__1HZ0RY5D = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app_peer['stats'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__records__R3B6R973 = $mol_type_enforce<
		ReturnType< $hyoo_crowd_app_peer['delta_view'] >
		,
		ReturnType< $mol_grid['records'] >
	>
	type $mol_section__title__F24LRPF1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__Y3EBLBQP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	export class $hyoo_crowd_app_peer extends $mol_page {
		hint( ): string
		text( next?: string ): string
		Text( ): $mol_textarea
		stats( ): string
		Stats( ): $mol_text
		delta_view( ): Record<string, any>
		Delta( ): $mol_grid
		Delta_section( ): $mol_section
		store( ): $hyoo_crowd_land
		sync( ): number
		sync_clocks( next?: readonly($hyoo_crowd_clock)[] ): readonly($hyoo_crowd_clock)[]
		changes( ): number
		delta( ): readonly($hyoo_crowd_unit)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $hyoo_crowd_text_demo extends $mol_example_large {
		Sandbox( ): $hyoo_crowd_app
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__hint__PZVB3NWG = $mol_type_enforce<
		ReturnType< $mol_app_hello['name_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__HJRYK6R8 = $mol_type_enforce<
		ReturnType< $mol_app_hello['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_view__sub__KCK92NEI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_app_hello extends $mol_view {
		name_hint( ): string
		name( next?: string ): string
		Name( ): $mol_string
		greeting( ): string
		Greeting( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=hello.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_hello extends $.$mol_app_hello {
        greeting(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_app_hello_demo extends $mol_example_large {
		App( ): $mol_app_hello
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_external extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=external.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_decode(text: string): string;
}

declare namespace $ {

	type $mol_link_source__uri__YO18PI9I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_list__rows__Y4RQG092 = $mol_type_enforce<
		ReturnType< $mol_app_questions['menu_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_link__uri__C4O1JYC0 = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_permalink'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__92VLS9LI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__sub__7BRAKIO6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__0LY0KD24 = $mol_type_enforce<
		({ 
			'question': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_text__text__W0UXQDS8 = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_descr'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__EN4XFYKI = $mol_type_enforce<
		ReturnType< $mol_app_questions['answers'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub__WEC3R3I9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__PU2NRDUU = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_tags_by_index'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__title__3ILRAVE0 = $mol_type_enforce<
		ReturnType< $mol_app_questions['title_default'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__NGEXHB9R = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__2NKQ8OJT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__XX426T8V = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__GEJ8X3ST = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__6VLN9MTV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_text__text__TA4GRBPC = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_answer'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_link__minimal_width__Y015M653 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_link['minimal_width'] >
	>
	type $mol_link__minimal_height__F1VG4P6D = $mol_type_enforce<
		number
		,
		ReturnType< $mol_link['minimal_height'] >
	>
	type $mol_link__arg__ZWYGMQSJ = $mol_type_enforce<
		ReturnType< $mol_app_questions['question_arg_by_index'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__DQZQ4WPR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub__EU2X2PD2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_app_questions extends $mol_book2 {
		Themme( ): $mol_theme_auto
		title_default( ): string
		Lights( ): $mol_lights_toggle
		Source_link( ): $mol_link_source
		menu_rows( ): readonly(any)[]
		Menu_links( ): $mol_list
		question_title( id: any): string
		question_permalink( id: any): string
		Details_permalink_icon( id: any): $mol_icon_external
		Details_permalink( id: any): $mol_link
		Details_close_icon( id: any): $mol_icon_close
		Details_close( id: any): $mol_link
		question_descr( id: any): string
		Details_descr( id: any): $mol_text
		answers( id: any): readonly(any)[]
		Answers( id: any): $mol_list
		question_answer( id: any): string
		question_arg_by_index( id: any): Record<string, any>
		question_title_by_index( id: any): string
		Question_title( id: any): $mol_view
		question_tags_by_index( id: any): readonly(any)[]
		Question_tags( id: any): $mol_view
		tag_name( id: any): string
		plugins( ): readonly(any)[]
		Menu( ): $mol_page
		Details( id: any): $mol_page
		Answer( id: any): $mol_text
		Question_link( id: any): $mol_link
		Tag( id: any): $mol_view
	}
	
}

//# sourceMappingURL=questions.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_questions extends $.$mol_app_questions {
        pages(): $mol_page[];
        Placeholder(): any;
        menu_rows(): any;
        question_cur_id(): number;
        question_tags_by_index(index: number): $mol_view[];
        tag_name(id: {
            row: number;
            tag: number;
        }): string;
        question_title_by_index(index: number): string;
        question_arg_by_index(index: number): {
            question: number;
        };
        question_title(id: number): string;
        question_descr(id: number): string;
        question_permalink(id: number): string;
        question_short(index: number): {
            title: string;
            creation_date: number;
            question_id: number;
            tags: string[];
            owner: {
                display_name: string;
            };
        };
        questions_count(): number;
        questions_data(page: number): {
            items: Array<{
                title: string;
                creation_date: number;
                question_id: number;
                tags: string[];
                owner: {
                    display_name: string;
                };
            }>;
        };
        data_page_size(): number;
        question_full(id: number): {
            title: string;
            body_markdown: string;
            link: string;
        };
        question_answers(id: number): {
            score: number;
            body_markdown: string;
            share_link: string;
        }[];
        answers(id: number): $.$mol_text[];
        question_answer(id: {
            question: number;
            answer: number;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_app_questions_demo extends $mol_example_large {
		App( ): $mol_app_questions
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_text__text__RCGZDZTU = $mol_type_enforce<
		ReturnType< $mol_app_quine['content'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $mol_app_quine extends $mol_page {
		content( ): string
		Text( ): $mol_text
		title( ): string
		body( ): readonly(any)[]
		paths( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=quine.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_app_quine extends $.$mol_app_quine {
        content(): string;
    }
}

declare namespace $ {

	export class $mol_app_quine_demo extends $mol_example_large {
		App( ): $mol_app_quine
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__2BSK89NL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_app_report_rower__cells__TI9MQYVK = $mol_type_enforce<
		ReturnType< $mol_app_report['headCells'] >
		,
		ReturnType< $mol_app_report_rower['cells'] >
	>
	type $mol_app_report_tabler__rows__UX57XPRO = $mol_type_enforce<
		ReturnType< $mol_app_report['rows'] >
		,
		ReturnType< $mol_app_report_tabler['rows'] >
	>
	type $mol_app_report_rower__cells__R1JTMHQM = $mol_type_enforce<
		ReturnType< $mol_app_report['rowerCells'] >
		,
		ReturnType< $mol_app_report_rower['cells'] >
	>
	type $mol_app_report_cell__content__S5A0WIIO = $mol_type_enforce<
		ReturnType< $mol_app_report['cell_content'] >
		,
		ReturnType< $mol_app_report_cell['content'] >
	>
	type $mol_app_report_cell__rows__TOAF4C37 = $mol_type_enforce<
		ReturnType< $mol_app_report['cellrows'] >
		,
		ReturnType< $mol_app_report_cell['rows'] >
	>
	type $mol_app_report_cell__cols__1V5MZCYR = $mol_type_enforce<
		ReturnType< $mol_app_report['cellCols'] >
		,
		ReturnType< $mol_app_report_cell['cols'] >
	>
	type $mol_view__sub__B0QXNF9E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__value__MS4K6F42 = $mol_type_enforce<
		ReturnType< $mol_app_report['cell_value'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__3QNV174W = $mol_type_enforce<
		ReturnType< $mol_app_report['cell_options'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_number__value__RWRBL0LJ = $mol_type_enforce<
		ReturnType< $mol_app_report['cell_value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	export class $mol_app_report extends $mol_page {
		description( ): string
		descriptor( ): $mol_view
		headCells( ): readonly(any)[]
		headRower( ): $mol_app_report_rower
		rows( ): readonly(any)[]
		tabler( ): $mol_app_report_tabler
		rowerCells( id: any): readonly(any)[]
		cell_content( id: any): any
		cellrows( id: any): number
		cellCols( id: any): number
		cell_value( id: any, next?: any ): any
		cell_options( id: any): Record<string, any>
		title( ): string
		body( ): readonly(any)[]
		rower( id: any): $mol_app_report_rower
		cell( id: any): $mol_app_report_cell
		texter( id: any): $mol_view
		select( id: any): $mol_select
		number( id: any): $mol_number
	}
	
	export class $mol_app_report_tabler extends $mol_view {
		rows( ): readonly(any)[]
		dom_name( ): string
		sub( ): ReturnType< $mol_app_report_tabler['rows'] >
	}
	
	export class $mol_app_report_rower extends $mol_view {
		cells( ): readonly(any)[]
		dom_name( ): string
		sub( ): ReturnType< $mol_app_report_rower['cells'] >
	}
	
	export class $mol_app_report_cell extends $mol_view {
		cols( ): number
		rows( ): number
		content( ): any
		dom_name( ): string
		attr( ): ({ 
			'colspan': ReturnType< $mol_app_report_cell['cols'] >,
			'rowspan': ReturnType< $mol_app_report_cell['rows'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=report.view.tree.d.ts.map
declare namespace $.$$ {
    type $mol_app_report_formatCol = {
        title: string;
    } | {
        title: string;
        sub: $mol_app_report_formatCol[];
    } | {
        title: string;
        field: string;
    };
    interface $mol_app_report_formatRow {
        title: string;
        field?: string;
        sub?: $mol_app_report_formatRow[];
    }
    type $mol_app_report_scheme = {
        type: 'number';
        mask: string;
        unit: string;
    } | {
        type: 'enum';
        options: {
            [name: string]: string;
        };
    };
    class $mol_app_report extends $.$mol_app_report {
        formatCols(): $mol_app_report_formatCol[];
        format_rows(): $mol_app_report_formatRow[];
        scheme(): {
            [field: string]: $mol_app_report_scheme;
        };
        data(): {
            [field: string]: string;
        };
        description(): string;
        headCells(): $mol_app_report_cell[];
        rows(): $mol_app_report_rower[];
        formatRow(pos: number[]): $mol_app_report_formatRow;
        rowerCells(pos: number[]): $mol_app_report_cell[];
        cellCols(pos: number[]): 1 | 2 | 0;
        cell_content(pos: number[]): $mol_view;
        cell_options(pos: number[]): never[] | {
            [name: string]: string;
        };
        cell_value(pos: number[], next: any): any;
        cell_contentName(pos: number[]): string;
        cell_contentValue(pos: number[]): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_app_report_demo extends $mol_example_large {
		App( ): $mol_app_report
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_array_chunks<Item>(array: Item[], br: (item: Item, index: number) => boolean): Item[][];
}

declare namespace $ {
}

declare namespace $ {

	type $hyoo_js_eval__Menu_page__D8ADI85S = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_js_eval['Menu_page'] >
	>
	type $hyoo_js_eval__Perf__GIPSARDA = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_js_eval['Perf'] >
	>
	type $hyoo_js_eval__Bookmark__VYHNNSN1 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_js_eval['Bookmark'] >
	>
	type $hyoo_js_eval__code__QNI1D3W1 = $mol_type_enforce<
		ReturnType< $mol_example_code['code'] >
		,
		ReturnType< $hyoo_js_eval['code'] >
	>
	export class $mol_example_code extends $mol_example {
		code( next?: string ): string
		Sandbox( ): $hyoo_js_eval
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $ {

	export class $mol_array_chunks_demo extends $mol_example_code {
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_array_lottery<Value>(list: readonly Value[]): Value;
}

declare namespace $ {

	export class $mol_array_lottery_demo extends $mol_example_code {
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {

	export class $mol_array_trim_demo extends $mol_example_code {
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_assert_demo extends $mol_example_code {
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files__RBQ0GMK1 = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__DXPCWGF7 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__7HU85BNM = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(any)[] ): readonly(any)[]
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(any)[] ): readonly(any)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_row__sub__MEQ1EL8S = $mol_type_enforce<
		ReturnType< $mol_attach['content'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_image__title__O2BLIJJI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__HEGD62RN = $mol_type_enforce<
		ReturnType< $mol_attach['item_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_button_open__title__ELREV3AA = $mol_type_enforce<
		ReturnType< $mol_attach['attach_title'] >
		,
		ReturnType< $mol_button_open['title'] >
	>
	type $mol_button_open__files__Q2W0XI03 = $mol_type_enforce<
		ReturnType< $mol_attach['attach_new'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_button_minor__click__HETM697W = $mol_type_enforce<
		ReturnType< $mol_attach['item_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__3VNGI351 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_attach extends $mol_view {
		content( ): readonly($mol_view)[]
		Content( ): $mol_row
		attach_title( ): string
		attach_new( next?: any ): any
		item_drop( id: any, next?: any ): any
		item_uri( id: any): string
		Image( id: any): $mol_image
		items( next?: readonly(string)[] ): readonly(string)[]
		sub( ): readonly(any)[]
		Add( ): $mol_button_open
		Item( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=attach.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(files: File[]): void;
        content(): ($mol_button_minor | $mol_button_open)[];
        item_uri(index: number): string;
        item_drop(index: number, event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_attach__items__UVXG1J1Q = $mol_type_enforce<
		ReturnType< $mol_attach_demo['filled_items'] >
		,
		ReturnType< $mol_attach['items'] >
	>
	export class $mol_attach_demo extends $mol_example_small {
		filled_items( next?: readonly(any)[] ): readonly(any)[]
		Filled( ): $mol_attach
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare module 'web-audio-api';
declare namespace $ {
    class $mol_audio_context extends $mol_object {
        time(): number;
        native(reset?: null): {
            readonly baseLatency: number;
            readonly outputLatency: number;
            close: () => void;
            createMediaElementSource: (mediaElement: HTMLMediaElement) => MediaElementAudioSourceNode;
            createMediaStreamDestination: () => MediaStreamAudioDestinationNode;
            createMediaStreamSource: (mediaStream: MediaStream) => MediaStreamAudioSourceNode;
            getOutputTimestamp: () => AudioTimestamp;
            resume: () => void;
            suspend: () => void;
            addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => void;
            removeEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined) => void;
            readonly audioWorklet: AudioWorklet;
            readonly currentTime: number;
            readonly destination: AudioDestinationNode;
            readonly listener: AudioListener;
            onstatechange: ((ev: Event) => any) | null;
            readonly sampleRate: number;
            readonly state: AudioContextState;
            createAnalyser: () => AnalyserNode;
            createBiquadFilter: () => BiquadFilterNode;
            createBuffer: (numberOfChannels: number, length: number, sampleRate: number) => AudioBuffer;
            createBufferSource: () => AudioBufferSourceNode;
            createChannelMerger: (numberOfInputs?: number | undefined) => ChannelMergerNode;
            createChannelSplitter: (numberOfOutputs?: number | undefined) => ChannelSplitterNode;
            createConstantSource: () => ConstantSourceNode;
            createConvolver: () => ConvolverNode;
            createDelay: (maxDelayTime?: number | undefined) => DelayNode;
            createDynamicsCompressor: () => DynamicsCompressorNode;
            createGain: () => GainNode;
            createIIRFilter: (feedforward: Iterable<number>, feedback: Iterable<number>) => IIRFilterNode;
            createOscillator: () => OscillatorNode;
            createPanner: () => PannerNode;
            createPeriodicWave: (real: Iterable<number>, imag: Iterable<number>, constraints?: PeriodicWaveConstraints | undefined) => PeriodicWave;
            createScriptProcessor: (bufferSize?: number | undefined, numberOfInputChannels?: number | undefined, numberOfOutputChannels?: number | undefined) => ScriptProcessorNode;
            createStereoPanner: () => StereoPannerNode;
            createWaveShaper: () => WaveShaperNode;
            decodeAudioData: (audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback | null | undefined, errorCallback?: DecodeErrorCallback | null | undefined) => AudioBuffer;
            dispatchEvent: (event: Event) => boolean;
        };
        state(next?: null | AudioContextState): AudioContextState;
        active(next?: boolean): boolean;
    }
    const $mol_audio_context_main: $mol_audio_context;
}

declare namespace $ {
    class $mol_audio_node extends $mol_object {
        context(next?: $mol_audio_context): $mol_audio_context;
        input(next?: readonly $mol_audio_node[]): readonly $mol_audio_node[];
        input_connected(): readonly $mol_audio_node[];
        active(next?: boolean): boolean;
        inputs_active(): boolean;
        node(): AudioNode;
        output(): ReturnType<this["node"]>;
        time_cut(): number;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_audio_gain extends $mol_audio_node {
        node(reset?: null): GainNode;
        output(): ReturnType<this["node"]>;
        gain_default(): number;
        gain(next?: number | null): number | null | undefined;
    }
}

declare namespace $ {
    const $mol_audio_tone_indices: {
        'b#': number;
        a: number;
        'a#': number;
        b: number;
        c: number;
        'c#': number;
        d: number;
        'd#': number;
        e: number;
        f: number;
        'f#': number;
        g: number;
    };
    type $mol_audio_tone_key = keyof typeof $mol_audio_tone_indices;
    type $mol_audio_tone_note = {
        key: $mol_audio_tone_key | null;
        octave?: number | null;
        duration?: number | null;
    };
    const $mol_audio_tone_base_freq = 440;
    function $mol_audio_tone_key_freq(name: $mol_audio_tone_key, octave?: number | null): number;
    function $mol_audio_tone_parse(raw: string): $mol_audio_tone_note;
}

declare namespace $ {
    class $mol_audio_instrument extends $mol_audio_node {
        node(reset?: null): AudioScheduledSourceNode;
        node_destruct(): AudioScheduledSourceNode & {
            destructor: (e?: Event | undefined) => void;
        };
        output(): ReturnType<this["node"]>;
        protected onended(node: AudioScheduledSourceNode, e?: Event): void;
        end(): void;
        node_started(): boolean | null;
        start_at(next?: number): number;
        note(next?: $mol_audio_tone_note): $mol_audio_tone_note | null;
        stop_at(next?: number): number;
        active(next?: boolean): boolean;
        start(): void;
    }
}

declare namespace $ {
    type $mol_audio_vibe_shape = OscillatorType;
    class $mol_audio_vibe extends $mol_audio_instrument {
        node(reset?: null): OscillatorNode;
        freq_default(): number;
        freq(next?: number | null): number;
        shape_default(): $mol_audio_vibe_shape;
        shape(next?: $mol_audio_vibe_shape | null): OscillatorType;
        output(): ReturnType<this["node"]>;
    }
}

declare namespace $ {
    class $mol_audio_melody extends $mol_audio_gain {
        notes(next?: string): string;
        parse(note: string): $mol_audio_tone_note;
        notes_normalized(): $mol_audio_tone_note[];
        clips(): {
            octave: number;
            start_at: number;
            stop_at: number;
            id: number;
            key: $mol_audio_tone_key | null;
            duration?: number | null;
        }[];
        note_length(sec?: number): number;
        note_off_part(): number;
        note_off(): number;
        duration(): number;
        note(index: number): {
            octave: number;
            start_at: number;
            stop_at: number;
            id: number;
            key: $mol_audio_tone_key | null;
            duration?: number | null;
        };
        offset_cut(next: number): number;
        start_at(next?: number): number;
        output(): ReturnType<this["node"]>;
        protected start_at_absolute: number;
        input(next?: readonly $mol_audio_instrument[]): readonly $mol_audio_instrument[];
        stop_at(next?: number): number;
        start(): void;
        offset(next?: number | null): number | null;
        active(next?: boolean): boolean;
        instrument(index: number): $mol_audio_instrument;
    }
}

declare namespace $ {

	export class $mol_icon_power extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=power.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_power_sleep extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sleep.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sleep extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sleep.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pause extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pause.view.tree.d.ts.map
declare namespace $ {
    type $mol_audio_room_status = AudioContextState | 'playing';
    class $mol_audio_room extends $mol_audio_node {
        node(): AudioDestinationNode;
        active(next?: boolean): boolean;
        suspend_time(sec?: number): number;
        suspend_timer(): $mol_after_timeout | null;
        status(next?: $mol_audio_room_status | null): $mol_audio_room_status;
    }
}

declare namespace $ {

	type $mol_button_minor__click__XKBM45XA = $mol_type_enforce<
		ReturnType< $mol_audio_status['wakeup'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled__BKQ93M30 = $mol_type_enforce<
		ReturnType< $mol_audio_status['wakeup_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__hint__DNP8I8MW = $mol_type_enforce<
		ReturnType< $mol_audio_status['status_name'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__UQI6SJJ4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_audio_status extends $mol_view {
		Closed( ): $mol_icon_power_sleep
		Suspended( ): $mol_icon_sleep
		Playing( ): $mol_icon_play
		Running( ): $mol_icon_pause
		wakeup( next?: any ): any
		wakeup_enabled( ): boolean
		status_name( ): ReturnType< $mol_audio_status['status'] >
		Icon( ): $mol_icon_play
		Wakeup( ): $mol_button_minor
		icons( ): ({ 
			'closed': ReturnType< $mol_audio_status['Closed'] >,
			'suspended': ReturnType< $mol_audio_status['Suspended'] >,
			'playing': ReturnType< $mol_audio_status['Playing'] >,
			'running': ReturnType< $mol_audio_status['Running'] >,
		}) 
		status( next?: string ): string
		status_template( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_audio_status extends $.$mol_audio_status {
        status(next?: $mol_audio_room_status): $mol_audio_room_status;
        wakeup(): void;
        Icon(): $mol_icon_play | $mol_icon_power_sleep | $mol_icon_pause | $mol_icon_sleep;
        wakeup_enabled(): boolean;
        status_name(): string;
    }
}

declare namespace $ {

	type $mol_audio_demo_beep_status__FATLSQUF = $mol_type_enforce<
		Parameters< $mol_audio_demo['beep_status'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo['Beep_room'] >['status'] >[0]
	>
	type $mol_audio_melody__note_length__WDY31PF1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_audio_melody['note_length'] >
	>
	type $mol_audio_melody__notes__PJOZ6WPY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_audio_melody['notes'] >
	>
	type $mol_audio_demo_noise_status__B7266QBA = $mol_type_enforce<
		Parameters< $mol_audio_demo['noise_status'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo['Noise_room'] >['status'] >[0]
	>
	type $mol_audio_demo_noise_active__C24YBU11 = $mol_type_enforce<
		Parameters< $mol_audio_demo['noise_active'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo['Noise'] >['active'] >[0]
	>
	type $mol_audio_demo_noise_stop_at__4EC2UIE8 = $mol_type_enforce<
		Parameters< $mol_audio_demo['noise_stop_at'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo['Noise'] >['stop_at'] >[0]
	>
	type $mol_audio_vibe__freq_default__HYTCICNT = $mol_type_enforce<
		ReturnType< $mol_audio_demo['noise_freq'] >
		,
		ReturnType< $mol_audio_vibe['freq_default'] >
	>
	type $mol_button_minor__click__T1PP32UM = $mol_type_enforce<
		ReturnType< $mol_audio_demo['beep_play_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title__50MXK1VG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_audio_status__status__MSKEB2D6 = $mol_type_enforce<
		ReturnType< $mol_audio_demo['beep_status'] >
		,
		ReturnType< $mol_audio_status['status'] >
	>
	type $mol_row__sub__XW85XEXU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_minor__click__825DEHJA = $mol_type_enforce<
		ReturnType< $mol_audio_demo['noise_play_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title__MRW352P2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_audio_status__status__3B4PNCXZ = $mol_type_enforce<
		ReturnType< $mol_audio_demo['noise_status'] >
		,
		ReturnType< $mol_audio_status['status'] >
	>
	type $mol_row__sub__YS6OT15D = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows__8OYGMQ19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_audio_room__input__YHBUC2WW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_audio_room['input'] >
	>
	type $mol_audio_room__input__H62266F6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_audio_room['input'] >
	>
	export class $mol_audio_demo extends $mol_example_small {
		beep_status( next?: ReturnType< ReturnType< $mol_audio_demo['Beep_room'] >['status'] > ): ReturnType< ReturnType< $mol_audio_demo['Beep_room'] >['status'] >
		beep_play( ): ReturnType< ReturnType< $mol_audio_demo['Beep_track'] >['start'] >
		Beep_track( ): $mol_audio_melody
		noise_status( next?: ReturnType< ReturnType< $mol_audio_demo['Noise_room'] >['status'] > ): ReturnType< ReturnType< $mol_audio_demo['Noise_room'] >['status'] >
		noise_active( next?: ReturnType< ReturnType< $mol_audio_demo['Noise'] >['active'] > ): ReturnType< ReturnType< $mol_audio_demo['Noise'] >['active'] >
		noise_stop_at( next?: ReturnType< ReturnType< $mol_audio_demo['Noise'] >['stop_at'] > ): ReturnType< ReturnType< $mol_audio_demo['Noise'] >['stop_at'] >
		noise_freq( ): number
		Noise( ): $mol_audio_vibe
		beep_play_click( next?: any ): any
		Beep_play( ): $mol_button_minor
		Beep_status( ): $mol_audio_status
		Beep_row( ): $mol_row
		noise_play_click( next?: any ): any
		Noise_play( ): $mol_button_minor
		Noise_status( ): $mol_audio_status
		Nouse_row( ): $mol_row
		List( ): $mol_list
		title( ): string
		Beep_room( ): $mol_audio_room
		Noise_room( ): $mol_audio_room
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_audio_demo extends $.$mol_audio_demo {
        noise_freq(): number;
        beep_play_click(e: Event): void;
        noise_play_click(e: Event): void;
    }
}

declare namespace $ {

	type $mol_audio_demo_vibe_room_status__J6HEXUHZ = $mol_type_enforce<
		Parameters< $mol_audio_demo_vibe['room_status'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_vibe['Room'] >['status'] >[0]
	>
	type $mol_audio_demo_vibe_active__DXP6SCTO = $mol_type_enforce<
		Parameters< $mol_audio_demo_vibe['active'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_vibe['Beep_vibe'] >['active'] >[0]
	>
	type $mol_audio_demo_vibe_stop_at__MQ7H97SU = $mol_type_enforce<
		Parameters< $mol_audio_demo_vibe['stop_at'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_vibe['Beep_vibe'] >['stop_at'] >[0]
	>
	type $mol_audio_vibe__freq_default__X550WTZ1 = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['freq'] >
		,
		ReturnType< $mol_audio_vibe['freq_default'] >
	>
	type $mol_audio_vibe__shape_default__84YB8ZWD = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['shape'] >
		,
		ReturnType< $mol_audio_vibe['shape_default'] >
	>
	type $mol_number__precision_change__4UKS672Q = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_number__value__EXRGCNQ9 = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['duration'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title__J3DDIGCI = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['duration_label'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__LU4NSTHB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__precision_change__Q5E9703I = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_number__value__IGCKF9NX = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['freq'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title__E8XA140H = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['frequency_label'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__K431AOWH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_select__Filter__R5RPV90H = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__value__NHHZ9TEM = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['shape'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_audio_demo_vibe_Shape_select__5KDRYFH8 = $mol_type_enforce<
		`sine`
		,
		$mol_audio_vibe_shape
	>
	type $mol_audio_demo_vibe_Shape_select__N5ATABXP = $mol_type_enforce<
		`square`
		,
		$mol_audio_vibe_shape
	>
	type $mol_audio_demo_vibe_Shape_select__525TSOU4 = $mol_type_enforce<
		`sawtooth`
		,
		$mol_audio_vibe_shape
	>
	type $mol_audio_demo_vibe_Shape_select__XC258SO4 = $mol_type_enforce<
		`triangle`
		,
		$mol_audio_vibe_shape
	>
	type $mol_select__options__VCC74Y6Q = $mol_type_enforce<
		readonly($mol_audio_vibe_shape)[]
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_labeler__title__YS4F7TIH = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['shape_label'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__WZGYWVGM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_major__click__O1NQ3NHU = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['beep_vibe_start_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__6UH4D9N5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_audio_status__status__HIHFZ6VH = $mol_type_enforce<
		ReturnType< $mol_audio_demo_vibe['room_status'] >
		,
		ReturnType< $mol_audio_status['status'] >
	>
	type $mol_row__sub__4PSF2KWA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows__GXFNGGO8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_audio_room__input__EERKCE3J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_audio_room['input'] >
	>
	export class $mol_audio_demo_vibe extends $mol_example_small {
		room_status( next?: ReturnType< ReturnType< $mol_audio_demo_vibe['Room'] >['status'] > ): ReturnType< ReturnType< $mol_audio_demo_vibe['Room'] >['status'] >
		active( next?: ReturnType< ReturnType< $mol_audio_demo_vibe['Beep_vibe'] >['active'] > ): ReturnType< ReturnType< $mol_audio_demo_vibe['Beep_vibe'] >['active'] >
		stop_at( next?: ReturnType< ReturnType< $mol_audio_demo_vibe['Beep_vibe'] >['stop_at'] > ): ReturnType< ReturnType< $mol_audio_demo_vibe['Beep_vibe'] >['stop_at'] >
		freq( next?: number ): number
		Beep_vibe( ): $mol_audio_vibe
		duration_label( ): string
		duration( next?: number ): number
		Duration_num( ): $mol_number
		Duration( ): $mol_labeler
		frequency_label( ): string
		Frequency_num( ): $mol_number
		Frequency( ): $mol_labeler
		shape_label( ): string
		shape( next?: any ): any
		Shape_select( ): $mol_select
		Shape( ): $mol_labeler
		beep_vibe_start_click( next?: any ): any
		Play_icon( ): $mol_icon_play
		Play_button( ): $mol_button_major
		Room_status( ): $mol_audio_status
		Button_row( ): $mol_row
		List( ): $mol_list
		title( ): string
		Room( ): $mol_audio_room
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=vibe.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_audio_demo_vibe extends $.$mol_audio_demo_vibe {
        shape(next?: $mol_audio_vibe_shape): $mol_audio_vibe_shape;
        beep_vibe_start_click(e?: Event): void;
    }
}

declare namespace $ {
    class $mol_audio_sample extends $mol_audio_instrument {
        duration(): number;
        buffer(): ArrayBuffer | null;
        audio_buffer(): AudioBuffer | null;
        loop_default(): boolean;
        loop(next?: boolean | null): boolean;
        loop_start_default(): number;
        loop_start(next?: number | null): number;
        loop_end_default(): number;
        loop_end(next?: number | null): number;
        rate_default(): number;
        rate(next?: number | null): number;
        node(reset?: null): AudioBufferSourceNode;
        active(next?: boolean): boolean;
        output(): ReturnType<this["node"]>;
    }
}

declare namespace $ {

	export class $mol_icon_loop extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=loop.view.tree.d.ts.map
declare namespace $ {

	type $mol_audio_demo_sample_room_status__8OFDIETE = $mol_type_enforce<
		Parameters< $mol_audio_demo_sample['room_status'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_sample['Room'] >['status'] >[0]
	>
	type $mol_audio_demo_sample_sample_active__ILVTYOOZ = $mol_type_enforce<
		Parameters< $mol_audio_demo_sample['sample_active'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_sample['Sample'] >['active'] >[0]
	>
	type $mol_audio_demo_sample_loop__ZU65QH1N = $mol_type_enforce<
		Parameters< $mol_audio_demo_sample['loop'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_sample['Sample'] >['loop'] >[0]
	>
	type $mol_audio_sample__loop_default__7MRBVSQI = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_audio_sample['loop_default'] >
	>
	type $mol_audio_sample__buffer__7DQLFOCO = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['sample_buffer'] >
		,
		ReturnType< $mol_audio_sample['buffer'] >
	>
	type $mol_string__value__6VHVM1VN = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['sample_url'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__YA2PVJWV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control__Z8EG3PUB = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['Sample_url'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_check_icon__checked__3J8DZQUI = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['sample_active'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__title__HQBDRNH3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['title'] >
	>
	type $mol_check_icon__Icon__WWDURDLQ = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['Active_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_button_minor__click__I7QMQB9P = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['start_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title__KKC6DA6Y = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_check_icon__checked__5ZZBR0QR = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['loop'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__title__BMA5LIKN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['title'] >
	>
	type $mol_check_icon__Icon__VQJBEC03 = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['Loop_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_row__sub__F1YMRQ6L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_audio_status__status__BN508IKL = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sample['room_status'] >
		,
		ReturnType< $mol_audio_status['status'] >
	>
	type $mol_list__rows__AXW0G6UR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_audio_room__input__467O6809 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_audio_room['input'] >
	>
	export class $mol_audio_demo_sample extends $mol_example_small {
		room_status( next?: ReturnType< ReturnType< $mol_audio_demo_sample['Room'] >['status'] > ): ReturnType< ReturnType< $mol_audio_demo_sample['Room'] >['status'] >
		sample_active( next?: ReturnType< ReturnType< $mol_audio_demo_sample['Sample'] >['active'] > ): ReturnType< ReturnType< $mol_audio_demo_sample['Sample'] >['active'] >
		start( ): ReturnType< ReturnType< $mol_audio_demo_sample['Sample'] >['start'] >
		loop( next?: ReturnType< ReturnType< $mol_audio_demo_sample['Sample'] >['loop'] > ): ReturnType< ReturnType< $mol_audio_demo_sample['Sample'] >['loop'] >
		sample_buffer( ): any
		Sample( ): $mol_audio_sample
		sample_url( next?: string ): string
		Sample_url( ): $mol_string
		Sample_url_field( ): $mol_form_field
		Active_icon( ): $mol_icon_play
		Active( ): $mol_check_icon
		start_click( next?: any ): any
		Start( ): $mol_button_minor
		Loop_icon( ): $mol_icon_loop
		Loop( ): $mol_check_icon
		Controls( ): $mol_row
		Room_status( ): $mol_audio_status
		List( ): $mol_list
		title( ): string
		Room( ): $mol_audio_room
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=sample.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_audio_demo_sample extends $.$mol_audio_demo_sample {
        sample_buffer(): ArrayBuffer;
        start_click(e: Event): void;
    }
}

declare namespace $ {

	export class $mol_icon_play_pause extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pause.view.tree.d.ts.map
declare namespace $ {

	type $mol_audio_demo_sequencer_room_status__6JLCVESK = $mol_type_enforce<
		Parameters< $mol_audio_demo_sequencer['room_status'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_sequencer['Room'] >['status'] >[0]
	>
	type $mol_audio_demo_sequencer_room_active__YBUQ8KCE = $mol_type_enforce<
		Parameters< $mol_audio_demo_sequencer['room_active'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_sequencer['Room'] >['active'] >[0]
	>
	type $mol_audio_demo_sequencer_beep_track_active__ABEJLV0D = $mol_type_enforce<
		Parameters< $mol_audio_demo_sequencer['beep_track_active'] >[0]
		,
		Parameters< ReturnType< $mol_audio_demo_sequencer['Beep_track'] >['active'] >[0]
	>
	type $mol_audio_melody__notes__XJ1Z91YW = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['notes'] >
		,
		ReturnType< $mol_audio_melody['notes'] >
	>
	type $mol_audio_melody__note_length__T14UL2KE = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['note_length'] >
		,
		ReturnType< $mol_audio_melody['note_length'] >
	>
	type $mol_audio_melody__note_off_part__95OHS1JO = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['note_off_part'] >
		,
		ReturnType< $mol_audio_melody['note_off_part'] >
	>
	type $mol_number__precision__B33QBYWG = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_number__value_min__N9UKFVD6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_number__value__G0M5DIZE = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['note_length'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name__FXYXBFCE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control__TVEKIKOF = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['Note_length'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_number__precision__ILBFZJ23 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_number__value_min__KL6EJW2K = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_number__value__ZLE4141K = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['note_off_part'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name__Z63DEGR0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control__KJJV51XE = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['Note_off_part'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_row__sub__T30UE6XV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_textarea__hint__GABV3AD1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__DCU6MSSE = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['notes'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name__FLS7KU5A = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control__45LF54QB = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['Notes'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_check_icon__hint__B3RN77E9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__KGU7ESI4 = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['Beep_active_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__QG214ISB = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['beep_track_active'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_button_minor__click__QY5ZMTJT = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['beep_track_start'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title__0IZG5FEW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_audio_status__status__IHG15DW3 = $mol_type_enforce<
		ReturnType< $mol_audio_demo_sequencer['room_status'] >
		,
		ReturnType< $mol_audio_status['status'] >
	>
	type $mol_row__sub__4B9I9ZL9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows__C1D8F760 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_audio_room__input__NWVFC6KD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_audio_room['input'] >
	>
	export class $mol_audio_demo_sequencer extends $mol_example_small {
		room_status( next?: ReturnType< ReturnType< $mol_audio_demo_sequencer['Room'] >['status'] > ): ReturnType< ReturnType< $mol_audio_demo_sequencer['Room'] >['status'] >
		room_active( next?: ReturnType< ReturnType< $mol_audio_demo_sequencer['Room'] >['active'] > ): ReturnType< ReturnType< $mol_audio_demo_sequencer['Room'] >['active'] >
		beep_track_start( ): ReturnType< ReturnType< $mol_audio_demo_sequencer['Beep_track'] >['start'] >
		beep_track_active( next?: ReturnType< ReturnType< $mol_audio_demo_sequencer['Beep_track'] >['active'] > ): ReturnType< ReturnType< $mol_audio_demo_sequencer['Beep_track'] >['active'] >
		notes( next?: string ): string
		note_length( next?: number ): number
		note_off_part( next?: number ): number
		Beep_track( ): $mol_audio_melody
		Note_length( ): $mol_number
		Note_length_field( ): $mol_form_field
		Note_off_part( ): $mol_number
		Note_off_part_field( ): $mol_form_field
		Note_settings( ): $mol_row
		Notes( ): $mol_textarea
		Notes_field( ): $mol_form_field
		Beep_active_icon( ): $mol_icon_play_pause
		Beep_active( ): $mol_check_icon
		Beep_play( ): $mol_button_minor
		Beep_status( ): $mol_audio_status
		Beep_row( ): $mol_row
		List( ): $mol_list
		title( ): string
		Room( ): $mol_audio_room
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=sequencer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_audio_demo_sequencer extends $.$mol_audio_demo_sequencer {
    }
}

declare namespace $ {

	type $mol_string__value__OR36LAGX = $mol_type_enforce<
		ReturnType< $mol_avatar_demo['avatar_id'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title__X0NI2Q3S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__PF93FQ0R = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_avatar__id__LDBIHSRN = $mol_type_enforce<
		ReturnType< $mol_avatar_demo['avatar_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_labeler__title__TUO7H0FJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__1G43FMET = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	export class $mol_avatar_demo extends $mol_example_small {
		avatar_id( next?: string ): string
		Avatar_id_value( ): $mol_string
		Avatar_id_label( ): $mol_labeler
		Avatar( ): $mol_avatar
		Avatar_label( ): $mol_labeler
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	type $mol_string__hint__ULHPHKBR = $mol_type_enforce<
		ReturnType< $mol_bar_demo['mail_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__B5S7F54U = $mol_type_enforce<
		ReturnType< $mol_bar_demo['mail'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_minor__title__286M4JWV = $mol_type_enforce<
		ReturnType< $mol_bar_demo['submit_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_bar__sub__U9X12Y5Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_string__hint__CZZ6CXNQ = $mol_type_enforce<
		ReturnType< $mol_bar_demo['mail_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__4Y9DARZK = $mol_type_enforce<
		ReturnType< $mol_bar_demo['mail'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_check_box__title__Y5YLDNVF = $mol_type_enforce<
		ReturnType< $mol_bar_demo['confirm_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__YDN04DHJ = $mol_type_enforce<
		ReturnType< $mol_bar_demo['confirmed'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_bar__sub__J6ULCH1A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	export class $mol_bar_demo extends $mol_example_small {
		mail_hint( ): string
		mail( next?: string ): string
		Two_mail( ): $mol_string
		submit_title( ): string
		Two_submit( ): $mol_button_minor
		Two( ): $mol_bar
		Three_mail( ): $mol_string
		confirm_title( ): string
		confirmed( next?: boolean ): boolean
		Three_confirm( ): $mol_check_box
		Three( ): $mol_bar
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_bench__col_sort__FS2JDH4W = $mol_type_enforce<
		ReturnType< $mol_bench_demo['col_sort'] >
		,
		ReturnType< $mol_bench['col_sort'] >
	>
	type $mol_bench__result__BLG7BXT2 = $mol_type_enforce<
		ReturnType< $mol_bench_demo['result'] >
		,
		ReturnType< $mol_bench['result'] >
	>
	export class $mol_bench_demo extends $mol_example_small {
		col_sort( next?: string ): string
		result( ): Record<string, any>
		View( ): $mol_bench
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_bench_demo extends $.$mol_bench_demo {
        result(): {
            bubble: {
                algorithm: string;
                min: string;
                mid: string;
                max: string;
            };
            qsort: {
                algorithm: string;
                min: string;
                mid: string;
                max: string;
            };
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__ICBEBTYV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__GHHNNFJG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__MNKPM7O2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__2MWYW9M9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_book2__Placeholder__OSBVCHEQ = $mol_type_enforce<
		ReturnType< $mol_book2_demo['Side'] >
		,
		ReturnType< $mol_book2['Placeholder'] >
	>
	type $mol_book2__pages__FK2PFQY0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_book2['pages'] >
	>
	export class $mol_book2_demo extends $mol_example_large {
		Side( ): $mol_view
		First( ): $mol_view
		Second( ): $mol_view
		Third( ): $mol_view
		View( ): $mol_book2
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_filler_filler_lines__9URJA1YM = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__6S61H168 = $mol_type_enforce<
		`Donec a diam lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__LXF73U2O = $mol_type_enforce<
		`Sed sit amet ipsum mauris. `
		,
		string
	>
	type $mol_filler_filler_lines__B857BSOA = $mol_type_enforce<
		`Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. `
		,
		string
	>
	type $mol_filler_filler_lines__OTMPIVEH = $mol_type_enforce<
		`Donec et mollis dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__UAMDF99G = $mol_type_enforce<
		`Praesent et diam eget libero egestas mattis sit amet vitae augue. `
		,
		string
	>
	type $mol_filler_filler_lines__VOTIH28E = $mol_type_enforce<
		`Nam tincidunt congue enim, ut porta lorem lacinia consectetur. `
		,
		string
	>
	type $mol_filler_filler_lines__CW4VXC4F = $mol_type_enforce<
		`Donec ut libero sed arcu vehicula ultricies a non tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__16TUCDJI = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__OLW3J3S9 = $mol_type_enforce<
		`Aenean ut gravida lorem. `
		,
		string
	>
	type $mol_filler_filler_lines__NHEH5CN7 = $mol_type_enforce<
		`Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__YOVIBCQU = $mol_type_enforce<
		`Pellentesque auctor nisi id magna consequat sagittis. `
		,
		string
	>
	type $mol_filler_filler_lines__CJD0RX52 = $mol_type_enforce<
		`Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__ABXZ275A = $mol_type_enforce<
		`Ut convallis libero in urna ultrices accumsan. `
		,
		string
	>
	type $mol_filler_filler_lines__TKDSL9Y3 = $mol_type_enforce<
		`Donec sed odio eros. `
		,
		string
	>
	type $mol_filler_filler_lines__JAY31CML = $mol_type_enforce<
		`Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. `
		,
		string
	>
	type $mol_filler_filler_lines__974C88CW = $mol_type_enforce<
		`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. `
		,
		string
	>
	type $mol_filler_filler_lines__XVWBEIXW = $mol_type_enforce<
		`In rutrum accumsan ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__OSATI38K = $mol_type_enforce<
		`Mauris vitae nisi at sem facilisis semper ac in est. `
		,
		string
	>
	type $mol_filler_filler_lines__SRG1G6VB = $mol_type_enforce<
		`Vivamus fermentum semper porta. `
		,
		string
	>
	type $mol_filler_filler_lines__GW43I1B0 = $mol_type_enforce<
		`Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. `
		,
		string
	>
	type $mol_filler_filler_lines__2G5XSWL3 = $mol_type_enforce<
		`Maecenas convallis ullamcorper ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__P0G26DAZ = $mol_type_enforce<
		`Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. `
		,
		string
	>
	type $mol_filler_filler_lines__V3JX6IO0 = $mol_type_enforce<
		`Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. `
		,
		string
	>
	type $mol_filler_filler_lines__PQRKUOC4 = $mol_type_enforce<
		`Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. `
		,
		string
	>
	type $mol_filler_filler_lines__L9H3WX9O = $mol_type_enforce<
		`Fusce eget orci a orci congue vestibulum. `
		,
		string
	>
	type $mol_filler_filler_lines__C0XDBAAI = $mol_type_enforce<
		`Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. `
		,
		string
	>
	type $mol_filler_filler_lines__OB60CC1S = $mol_type_enforce<
		`Curabitur venenatis pulvinar tellus gravida ornare. `
		,
		string
	>
	type $mol_filler_filler_lines__4MDLYWG2 = $mol_type_enforce<
		`Sed et erat faucibus nunc euismod ultricies ut id justo. `
		,
		string
	>
	type $mol_filler_filler_lines__49S23J3O = $mol_type_enforce<
		`Nullam cursus suscipit nisi, et ultrices justo sodales nec. `
		,
		string
	>
	type $mol_filler_filler_lines__G3PLU8OK = $mol_type_enforce<
		`Fusce venenatis facilisis lectus ac semper. `
		,
		string
	>
	type $mol_filler_filler_lines__OPWWKCBL = $mol_type_enforce<
		`Aliquam at massa ipsum. `
		,
		string
	>
	type $mol_filler_filler_lines__SWTKT7WH = $mol_type_enforce<
		`Quisque bibendum purus convallis nulla ultrices ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__XN6542ER = $mol_type_enforce<
		`Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. `
		,
		string
	>
	type $mol_filler_filler_lines__R8QGCFMT = $mol_type_enforce<
		`Fusce vel volutpat elit. `
		,
		string
	>
	type $mol_filler_filler_lines__75WJ09B9 = $mol_type_enforce<
		`Nam sagittis nisi dui. `
		,
		string
	>
	type $mol_filler_filler_lines__BIUJX8JU = $mol_type_enforce<
		`Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. `
		,
		string
	>
	type $mol_filler_filler_lines__55KUQ0BH = $mol_type_enforce<
		`Etiam luctus porttitor lorem, sed suscipit est rutrum non. `
		,
		string
	>
	type $mol_filler_filler_lines__3CC8KXGQ = $mol_type_enforce<
		`Curabitur lobortis nisl a enim congue semper. `
		,
		string
	>
	type $mol_filler_filler_lines__ELB9J448 = $mol_type_enforce<
		`Aenean commodo ultrices imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__EJ4JVXKT = $mol_type_enforce<
		`Vestibulum ut justo vel sapien venenatis tincidunt. `
		,
		string
	>
	type $mol_filler_filler_lines__R125WEIH = $mol_type_enforce<
		`Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__H10E898O = $mol_type_enforce<
		`Aliquam ut massa in turpis dapibus convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__2OZ3VTZZ = $mol_type_enforce<
		`Praesent elit lacus, vestibulum at malesuada et, ornare et est. `
		,
		string
	>
	type $mol_filler_filler_lines__UBBDIANJ = $mol_type_enforce<
		`Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. `
		,
		string
	>
	type $mol_filler_filler_lines__UKROQCJO = $mol_type_enforce<
		`Mauris ut placerat justo. `
		,
		string
	>
	type $mol_filler_filler_lines__JGZWDCW2 = $mol_type_enforce<
		`Mauris in ultricies enim. `
		,
		string
	>
	type $mol_filler_filler_lines__HY2N7VGT = $mol_type_enforce<
		`Quisque nec est eleifend nulla ultrices egestas quis ut quam. `
		,
		string
	>
	type $mol_filler_filler_lines__V2ECMKOS = $mol_type_enforce<
		`Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. `
		,
		string
	>
	type $mol_filler_filler_lines__M5LMQ3N6 = $mol_type_enforce<
		`Cras quis ligula sem, vel elementum mi. `
		,
		string
	>
	type $mol_filler_filler_lines__E0H78IQO = $mol_type_enforce<
		`Phasellus non ullamcorper urna. `
		,
		string
	>
	type $mol_filler_filler_lines__DLDGGE89 = $mol_type_enforce<
		`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. `
		,
		string
	>
	type $mol_filler_filler_lines__DSIXGMF7 = $mol_type_enforce<
		`In euismod ultrices facilisis. `
		,
		string
	>
	type $mol_filler_filler_lines__4FR0XNPY = $mol_type_enforce<
		`Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. `
		,
		string
	>
	type $mol_filler_filler_lines__98SCHPDT = $mol_type_enforce<
		`Proin quis dictum nisl. `
		,
		string
	>
	type $mol_filler_filler_lines__78OUQS4Z = $mol_type_enforce<
		`Morbi id quam sapien, sed vestibulum sem. `
		,
		string
	>
	type $mol_filler_filler_lines__LUGVDWCM = $mol_type_enforce<
		`Duis elementum rutrum mauris sed convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__B80UCQDS = $mol_type_enforce<
		`Proin vestibulum magna mi. `
		,
		string
	>
	type $mol_filler_filler_lines__XWP8D1YF = $mol_type_enforce<
		`Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. `
		,
		string
	>
	type $mol_filler_filler_lines__U32VUP2E = $mol_type_enforce<
		`Sed non tortor sodales quam auctor elementum. `
		,
		string
	>
	type $mol_filler_filler_lines__79XFABE7 = $mol_type_enforce<
		`Donec hendrerit nunc eget elit pharetra pulvinar. `
		,
		string
	>
	type $mol_filler_filler_lines__YABN28U9 = $mol_type_enforce<
		`Suspendisse id tempus tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__WZW5ERXU = $mol_type_enforce<
		`Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. `
		,
		string
	>
	type $mol_filler_filler_lines__BVH2PM4B = $mol_type_enforce<
		`Donec vel. `
		,
		string
	>
	type $mol_filler_filler_lines__U6IVA8X9 = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__HTZ5SJ4F = $mol_type_enforce<
		`Donec a diam lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__M0JA42J0 = $mol_type_enforce<
		`Sed sit amet ipsum mauris. `
		,
		string
	>
	type $mol_filler_filler_lines__ALCR62DV = $mol_type_enforce<
		`Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. `
		,
		string
	>
	type $mol_filler_filler_lines__V8EF6BZ4 = $mol_type_enforce<
		`Donec et mollis dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__LMELML14 = $mol_type_enforce<
		`Praesent et diam eget libero egestas mattis sit amet vitae augue. `
		,
		string
	>
	type $mol_filler_filler_lines__CRFBKTBG = $mol_type_enforce<
		`Nam tincidunt congue enim, ut porta lorem lacinia consectetur. `
		,
		string
	>
	type $mol_filler_filler_lines__KDZE5DVX = $mol_type_enforce<
		`Donec ut libero sed arcu vehicula ultricies a non tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__50XW9PQW = $mol_type_enforce<
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
		,
		string
	>
	type $mol_filler_filler_lines__U7ASTEB9 = $mol_type_enforce<
		`Aenean ut gravida lorem. `
		,
		string
	>
	type $mol_filler_filler_lines__NZHR2F9C = $mol_type_enforce<
		`Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. `
		,
		string
	>
	type $mol_filler_filler_lines__WYSX3NIC = $mol_type_enforce<
		`Pellentesque auctor nisi id magna consequat sagittis. `
		,
		string
	>
	type $mol_filler_filler_lines__7GS6KV81 = $mol_type_enforce<
		`Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__LZOSHI4A = $mol_type_enforce<
		`Ut convallis libero in urna ultrices accumsan. `
		,
		string
	>
	type $mol_filler_filler_lines__Q1SBEGZ4 = $mol_type_enforce<
		`Donec sed odio eros. `
		,
		string
	>
	type $mol_filler_filler_lines__NE1Z5OP0 = $mol_type_enforce<
		`Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. `
		,
		string
	>
	type $mol_filler_filler_lines__Z4HGBAE4 = $mol_type_enforce<
		`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. `
		,
		string
	>
	type $mol_filler_filler_lines__3IQC3OJV = $mol_type_enforce<
		`In rutrum accumsan ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__YF4IHALR = $mol_type_enforce<
		`Mauris vitae nisi at sem facilisis semper ac in est. `
		,
		string
	>
	type $mol_filler_filler_lines__QSEF5NMA = $mol_type_enforce<
		`Vivamus fermentum semper porta. `
		,
		string
	>
	type $mol_filler_filler_lines__XDHYE99J = $mol_type_enforce<
		`Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. `
		,
		string
	>
	type $mol_filler_filler_lines__R52L4LPY = $mol_type_enforce<
		`Maecenas convallis ullamcorper ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__9PMSCMIK = $mol_type_enforce<
		`Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. `
		,
		string
	>
	type $mol_filler_filler_lines__6GA09D2K = $mol_type_enforce<
		`Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. `
		,
		string
	>
	type $mol_filler_filler_lines__7JIA563V = $mol_type_enforce<
		`Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. `
		,
		string
	>
	type $mol_filler_filler_lines__SOAHP0SI = $mol_type_enforce<
		`Fusce eget orci a orci congue vestibulum. `
		,
		string
	>
	type $mol_filler_filler_lines__WIT7TT8X = $mol_type_enforce<
		`Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. `
		,
		string
	>
	type $mol_filler_filler_lines__GO0BX5ID = $mol_type_enforce<
		`Curabitur venenatis pulvinar tellus gravida ornare. `
		,
		string
	>
	type $mol_filler_filler_lines__4Q8AKGLT = $mol_type_enforce<
		`Sed et erat faucibus nunc euismod ultricies ut id justo. `
		,
		string
	>
	type $mol_filler_filler_lines__I6JD4GX8 = $mol_type_enforce<
		`Nullam cursus suscipit nisi, et ultrices justo sodales nec. `
		,
		string
	>
	type $mol_filler_filler_lines__1QYL5ZKL = $mol_type_enforce<
		`Fusce venenatis facilisis lectus ac semper. `
		,
		string
	>
	type $mol_filler_filler_lines__KQBF4X98 = $mol_type_enforce<
		`Aliquam at massa ipsum. `
		,
		string
	>
	type $mol_filler_filler_lines__HEJUTRPY = $mol_type_enforce<
		`Quisque bibendum purus convallis nulla ultrices ultricies. `
		,
		string
	>
	type $mol_filler_filler_lines__7ETDZGJU = $mol_type_enforce<
		`Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. `
		,
		string
	>
	type $mol_filler_filler_lines__PA12EW0M = $mol_type_enforce<
		`Fusce vel volutpat elit. `
		,
		string
	>
	type $mol_filler_filler_lines__8UUR0U1F = $mol_type_enforce<
		`Nam sagittis nisi dui. `
		,
		string
	>
	type $mol_filler_filler_lines__HUF0TVUT = $mol_type_enforce<
		`Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. `
		,
		string
	>
	type $mol_filler_filler_lines__7R4M3P4H = $mol_type_enforce<
		`Etiam luctus porttitor lorem, sed suscipit est rutrum non. `
		,
		string
	>
	type $mol_filler_filler_lines__A5F0CAYU = $mol_type_enforce<
		`Curabitur lobortis nisl a enim congue semper. `
		,
		string
	>
	type $mol_filler_filler_lines__UDYELHAD = $mol_type_enforce<
		`Aenean commodo ultrices imperdiet. `
		,
		string
	>
	type $mol_filler_filler_lines__KQEO8X2Y = $mol_type_enforce<
		`Vestibulum ut justo vel sapien venenatis tincidunt. `
		,
		string
	>
	type $mol_filler_filler_lines__7NEOGVUH = $mol_type_enforce<
		`Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. `
		,
		string
	>
	type $mol_filler_filler_lines__UK7YX6TQ = $mol_type_enforce<
		`Aliquam ut massa in turpis dapibus convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__JGCOEJDZ = $mol_type_enforce<
		`Praesent elit lacus, vestibulum at malesuada et, ornare et est. `
		,
		string
	>
	type $mol_filler_filler_lines__4ZL3UE58 = $mol_type_enforce<
		`Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. `
		,
		string
	>
	type $mol_filler_filler_lines__E15B4F75 = $mol_type_enforce<
		`Mauris ut placerat justo. `
		,
		string
	>
	type $mol_filler_filler_lines__9GPL89TN = $mol_type_enforce<
		`Mauris in ultricies enim. `
		,
		string
	>
	type $mol_filler_filler_lines__2PQJI7J5 = $mol_type_enforce<
		`Quisque nec est eleifend nulla ultrices egestas quis ut quam. `
		,
		string
	>
	type $mol_filler_filler_lines__OHB111M2 = $mol_type_enforce<
		`Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. `
		,
		string
	>
	type $mol_filler_filler_lines__22X8UW48 = $mol_type_enforce<
		`Cras quis ligula sem, vel elementum mi. `
		,
		string
	>
	type $mol_filler_filler_lines__81GHTV3H = $mol_type_enforce<
		`Phasellus non ullamcorper urna. `
		,
		string
	>
	type $mol_filler_filler_lines__R1I2DZUO = $mol_type_enforce<
		`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. `
		,
		string
	>
	type $mol_filler_filler_lines__XU6V9S59 = $mol_type_enforce<
		`In euismod ultrices facilisis. `
		,
		string
	>
	type $mol_filler_filler_lines__ZA2A8UDZ = $mol_type_enforce<
		`Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. `
		,
		string
	>
	type $mol_filler_filler_lines__DFZ3I90U = $mol_type_enforce<
		`Proin quis dictum nisl. `
		,
		string
	>
	type $mol_filler_filler_lines__HYKZP6X3 = $mol_type_enforce<
		`Morbi id quam sapien, sed vestibulum sem. `
		,
		string
	>
	type $mol_filler_filler_lines__42CWL0N1 = $mol_type_enforce<
		`Duis elementum rutrum mauris sed convallis. `
		,
		string
	>
	type $mol_filler_filler_lines__4X1BTX73 = $mol_type_enforce<
		`Proin vestibulum magna mi. `
		,
		string
	>
	type $mol_filler_filler_lines__GU4FG0GC = $mol_type_enforce<
		`Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. `
		,
		string
	>
	type $mol_filler_filler_lines__P44Z6OO6 = $mol_type_enforce<
		`Sed non tortor sodales quam auctor elementum. `
		,
		string
	>
	type $mol_filler_filler_lines__VVEMTSI3 = $mol_type_enforce<
		`Donec hendrerit nunc eget elit pharetra pulvinar. `
		,
		string
	>
	type $mol_filler_filler_lines__8B0VRY5U = $mol_type_enforce<
		`Suspendisse id tempus tortor. `
		,
		string
	>
	type $mol_filler_filler_lines__IWL1I5X4 = $mol_type_enforce<
		`Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. `
		,
		string
	>
	type $mol_filler_filler_lines__AP09RJJM = $mol_type_enforce<
		`Donec vel. `
		,
		string
	>
	export class $mol_filler extends $mol_paragraph {
		filler_lines( ): readonly(string)[]
		min_symbols( ): number
		sub( ): ReturnType< $mol_filler['filler_lines'] >
	}
	
}

//# sourceMappingURL=filler.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_filler extends $.$mol_filler {
        filler_lines(): string[];
    }
}

declare namespace $ {

	type $mol_page__title__YNM9B6S7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__6O69M241 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__1DBQGPOI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__0NEMFUNO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__FAO90F8G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__J4G8BCQW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__ZI5APZXN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__M71S68LT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__1UJVD5YT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_book2_catalog__param__IZ07ZIUL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['param'] >
	>
	type $mol_book2_catalog__menu_title__7N1LL6K0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['menu_title'] >
	>
	type $mol_book2_catalog__menu_tools__P3CP9B8A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_book2_catalog['menu_tools'] >
	>
	type $mol_book2_catalog__spreads__22FPBAMR = $mol_type_enforce<
		({ 
			'pizza': ReturnType< $mol_book2_catalog_demo['Pizza'] >,
			'hot_dogs': ReturnType< $mol_book2_catalog_demo['Hot_dogs'] >,
			'fries': ReturnType< $mol_book2_catalog_demo['Fries'] >,
		}) 
		,
		ReturnType< $mol_book2_catalog['spreads'] >
	>
	type $mol_page__title__TR3EQIJJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__4O7IO7PY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__D8M7F38Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__3XSKJHEM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__CGB3IXE6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__ZTN08WSO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__ISAEDMJA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__4J3RVWHM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__FGDK87N2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__2C552ELG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__BR7HG9BT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__HSN63F4P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__GISH3B4I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__L2DWH7S0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__U35VBY1P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__9R4N9CCC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__Z8EBJAMX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__CACWM0DY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__DFJMBADR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__0HB0WM92 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__FE9HTL1M = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__9M05ZX6F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__6DZML35B = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__SJ6EDS7X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__I1LDES7P = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__S9T6V694 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__97B7HROE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title__YEWDMQYX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__ABQERR64 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__UDQWN30H = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_book2_catalog__param__L1KW6HWR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['param'] >
	>
	type $mol_book2_catalog__menu_title__ELNGSKA0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['menu_title'] >
	>
	type $mol_book2_catalog__menu_tools__YQ5ISDJB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_book2_catalog['menu_tools'] >
	>
	type $mol_book2_catalog__spreads__0WMAZYZQ = $mol_type_enforce<
		({ 
			'cats': ReturnType< $mol_book2_catalog_demo['Cats'] >,
			'dogs': ReturnType< $mol_book2_catalog_demo['Dogs'] >,
			'horses': ReturnType< $mol_book2_catalog_demo['Horses'] >,
			'racoons': ReturnType< $mol_book2_catalog_demo['Racoons'] >,
			'pigs': ReturnType< $mol_book2_catalog_demo['Pigs'] >,
			'rabbits': ReturnType< $mol_book2_catalog_demo['Rabbits'] >,
			'wolfs': ReturnType< $mol_book2_catalog_demo['Wolfs'] >,
			'mice': ReturnType< $mol_book2_catalog_demo['Mice'] >,
			'ants': ReturnType< $mol_book2_catalog_demo['Ants'] >,
			'bugs': ReturnType< $mol_book2_catalog_demo['Bugs'] >,
		}) 
		,
		ReturnType< $mol_book2_catalog['spreads'] >
	>
	type $mol_book2_catalog__param__RYU7YUZ3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['param'] >
	>
	type $mol_book2_catalog__menu_title__EPL81PDL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['menu_title'] >
	>
	type $mol_book2_catalog__spreads__MUTG59YT = $mol_type_enforce<
		({ 
			'foods': ReturnType< $mol_book2_catalog_demo['Foods'] >,
			'animals': ReturnType< $mol_book2_catalog_demo['Animals'] >,
		}) 
		,
		ReturnType< $mol_book2_catalog['spreads'] >
	>
	export class $mol_book2_catalog_demo extends $mol_example_large {
		Spread_close( ): ReturnType< ReturnType< $mol_book2_catalog_demo['Calatog'] >['Spread_close'] >
		Foods_spread_close( ): ReturnType< ReturnType< $mol_book2_catalog_demo['Foods'] >['Spread_close'] >
		Pizza( ): $mol_page
		Hot_dogs( ): $mol_page
		Fries( ): $mol_page
		Foods( ): $mol_book2_catalog
		Animals_spread_close( ): ReturnType< ReturnType< $mol_book2_catalog_demo['Animals'] >['Spread_close'] >
		Cats( ): $mol_page
		Dogs( ): $mol_page
		Horses( ): $mol_page
		Racoons( ): $mol_page
		Pigs( ): $mol_page
		Rabbits( ): $mol_page
		Wolfs( ): $mol_page
		Mice( ): $mol_page
		Ants( ): $mol_page
		Bugs( ): $mol_page
		Animals( ): $mol_book2_catalog
		Calatog( ): $mol_book2_catalog
		title( ): string
		Content( ): $mol_filler
		Empty( ): $mol_status
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_cursor_default extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=default.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_cursor_default_click extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=click.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_cursor_default_click_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_major__title__QZJJMGBD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click__XM8CNICR = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__title__4IPC47G6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__enabled__KNNBHFNO = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_minor__title__38NJN9AX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__QK3L03AJ = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title__ODN1H5I3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__enabled__RXATN7BM = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__0ZBVXFAD = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__NV1MKN6T = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click__W7AYNB4D = $mol_type_enforce<
		ReturnType< $mol_button_demo['fail'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__OINQDVLO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_button_demo extends $mol_example_small {
		fail( next?: any ): any
		Major_enabled( ): $mol_button_major
		Major_disabled( ): $mol_button_major
		Minor_enabled( ): $mol_button_minor
		Minor_disabled( ): $mol_button_minor
		Minor_icon_only_icon( ): $mol_icon_cursor_default_click_outline
		Minor_icon_only( ): $mol_button_minor
		Minor_iconed_icon( ): $mol_icon_cursor_default_click_outline
		Minor_iconed( ): $mol_button_minor
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_demo extends $.$mol_button_demo {
        fail(): void;
    }
}

declare namespace $ {

	type $mol_button_share__title__RY6295OK = $mol_type_enforce<
		ReturnType< $mol_button_share_demo['title'] >
		,
		ReturnType< $mol_button_share['title'] >
	>
	type $mol_button_share__hint__NXMUMM4T = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_share['hint'] >
	>
	type $mol_button_share__title__TTQXO7HN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_share['title'] >
	>
	type $mol_button_share__hint__DDXLA4CK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_share['hint'] >
	>
	type $mol_button_share__uri__GFX1F7ZK = $mol_type_enforce<
		any
		,
		ReturnType< $mol_button_share['uri'] >
	>
	type $mol_button_share__capture__1KNR1OSK = $mol_type_enforce<
		ReturnType< $mol_button_share_demo['Share_hyoo'] >
		,
		ReturnType< $mol_button_share['capture'] >
	>
	type $mol_button_share__title__2D1ILFGK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_share['title'] >
	>
	type $mol_button_share__hint__5OYGFJQ0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_share['hint'] >
	>
	type $mol_button_share__uri__WNEPOVVZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_share['uri'] >
	>
	type $mol_button_share__capture__OO99OEOF = $mol_type_enforce<
		any
		,
		ReturnType< $mol_button_share['capture'] >
	>
	export class $mol_button_share_demo extends $mol_example_small {
		Share_page( ): $mol_button_share
		Share_screenshot( ): $mol_button_share
		Share_hyoo( ): $mol_button_share
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_calendar__month_string__1M3IDRF2 = $mol_type_enforce<
		ReturnType< $mol_calendar_demo_holiday['month'] >
		,
		ReturnType< $mol_calendar['month_string'] >
	>
	type $mol_calendar__day_holiday__K2HWBT3M = $mol_type_enforce<
		ReturnType< $mol_calendar_demo_holiday['holiday'] >
		,
		ReturnType< $mol_calendar['day_holiday'] >
	>
	export class $mol_calendar_demo_holiday extends $mol_example_small {
		month( ): string
		holiday( id: any): boolean
		Calendar( ): $mol_calendar
		title( ): string
		holidays( ): readonly(any)[]
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=holiday.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar_demo_holiday extends $.$mol_calendar_demo_holiday {
        holiday(day: string): boolean;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {

	type $mol_calendar__month_string__5L57QUXA = $mol_type_enforce<
		ReturnType< $mol_calendar_demo_selection['month'] >
		,
		ReturnType< $mol_calendar['month_string'] >
	>
	type $mol_calendar__day_selected__KES7HX8P = $mol_type_enforce<
		ReturnType< $mol_calendar_demo_selection['selected'] >
		,
		ReturnType< $mol_calendar['day_selected'] >
	>
	export class $mol_calendar_demo_selection extends $mol_example_small {
		month( ): string
		selected( id: any): boolean
		Calendar( ): $mol_calendar
		title( ): string
		interval_config( ): ({ 
			'start': string,
			'end': string,
		}) 
		days( ): readonly(any)[]
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=selection.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar_demo_selection extends $.$mol_calendar_demo_selection {
        interval(): $mol_time_interval;
        selected(day: string): boolean;
    }
}

declare namespace $ {

	type $mol_calendar__month_moment__9NYG7H7Q = $mol_type_enforce<
		ReturnType< $mol_calendar_demo_simple['today'] >
		,
		ReturnType< $mol_calendar['month_moment'] >
	>
	export class $mol_calendar_demo_simple extends $mol_example_small {
		today( ): $mol_time_moment
		Calendar( ): $mol_calendar
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=simple.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar_demo_simple extends $.$mol_calendar_demo_simple {
        month_name(): string;
    }
}

declare namespace $ {

	type $mol_view__sub__T7OFLLWV = $mol_type_enforce<
		ReturnType< $mol_card['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__YW72K1KX = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__B7JORPOT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_card extends $mol_list {
		status( ): string
		content( ): readonly($mol_view_content)[]
		Content( ): $mol_view
		status_text( ): ReturnType< $mol_card['status'] >
		Status( ): $mol_view
		attr( ): ({ 
			'mol_card_status_type': ReturnType< $mol_card['status'] >,
		})  & ReturnType< $mol_list['attr'] >
		rows( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=card.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): readonly $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_card__content__7CDRTY1H = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__VRU4W535 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__status__IVF6710X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['status'] >
	>
	export class $mol_card_demo extends $mol_example_small {
		Simple( ): $mol_card
		Pending( ): $mol_card
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_gallery__style__9TRW6AB5 = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items__0M1X6X7F = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_gallery extends $.$mol_gallery {
        sub(): readonly $mol_view[];
        side_items(id: number): $mol_view[];
        side_size(id: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_group extends $mol_svg {
		dom_name( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {

	export class $mol_svg_title extends $mol_svg {
		dom_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=title.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range__YCTCFH8W = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__LECZXUCQ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__P6ZWYIFZ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__AJSCMD3G = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__Y5YPA53E = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__3FY73V3P = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__6JWPSCXZ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__609R5GEA = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__F93FB53A = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['viewport_x'] >, ReturnType< $mol_plot_graph['viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__33WUUKG7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__QWHP0X5Q = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_pane_x'] >, ReturnType< $mol_plot_graph['dimensions_pane_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__037205RJ = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_x'] >, ReturnType< $mol_plot_graph['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__4WWTIPC7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__7G1QMQGN = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['gap_x'] >, ReturnType< $mol_plot_graph['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_svg_title__title__MZVYW0HL = $mol_type_enforce<
		ReturnType< $mol_plot_graph['hint'] >
		,
		ReturnType< $mol_svg_title['title'] >
	>
	export class $mol_plot_graph extends $mol_svg_group {
		type( ): string
		color( ): string
		viewport_x( ): $mol_vector_range<number>
		viewport_y( ): $mol_vector_range<number>
		dimensions_pane_x( ): $mol_vector_range<number>
		dimensions_pane_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		title( ): string
		hint( ): ReturnType< $mol_plot_graph['title'] >
		series_x( ): readonly(number)[]
		series_y( ): readonly(number)[]
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph['type'] >,
		})  & ReturnType< $mol_svg_group['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph['color'] >,
		})  & ReturnType< $mol_svg_group['style'] >
		viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		shift( ): readonly(number)[]
		scale( ): readonly(number)[]
		cursor_position( ): $mol_vector_2d<number>
		dimensions_pane( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		size_real( ): $mol_vector_2d<number>
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		repos_x( id: any): number
		repos_y( id: any): number
		indexes( ): readonly(number)[]
		points( ): readonly(readonly(number)[])[]
		front( ): readonly($mol_svg)[]
		back( ): readonly($mol_svg)[]
		Hint( ): $mol_svg_title
		hue( next?: number ): number
		Sample( ): any
	}
	
	export class $mol_plot_graph_sample extends $mol_view {
		type( ): string
		color( ): string
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph_sample['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph_sample['color'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=graph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        indexes(): readonly number[];
        repos_x(val: number): number;
        repos_y(val: number): number;
        points(): readonly (readonly number[])[];
        series_x(): readonly number[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        color(): string;
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_gallery__items__Y6A4CUXQ = $mol_type_enforce<
		ReturnType< $mol_chart_legend['graph_legends'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_view__sub__1TJ18NR8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__I9GVQMHX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__IVWQ1UBG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_chart_legend extends $mol_scroll {
		graph_legends( ): readonly($mol_view)[]
		Gallery( ): $mol_gallery
		Graph_sample( id: any): any
		Graph_sample_box( id: any): $mol_view
		graph_title( id: any): string
		Graph_title( id: any): $mol_view
		graphs( ): readonly($mol_plot_graph)[]
		graphs_front( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
		Graph_legend( id: any): $mol_view
	}
	
}

//# sourceMappingURL=legend.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): readonly $mol_plot_graph[];
        graph_legends(): readonly $mol_view[];
        graph_title(index: number): string;
        Graph_sample(index: number): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_2d__9NKS9HGE = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__5DVHZIVO = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__PCVM5BFW = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        event_leave(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {

	type $mol_vector_range__G3FH5BX5 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_left'] >, ReturnType< $mol_plot_pane['gap_right'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__F91631FZ = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_bottom'] >, ReturnType< $mol_plot_pane['gap_top'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__BCD16BVC = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__0Z4ISF8Q = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__SL8GS9CT = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__TGSET2U6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__4HTPCJJU = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__HL4S7I73 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__94PL41OD = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__2VF2SWBR = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_touch__zoom__65Z7YZ6F = $mol_type_enforce<
		ReturnType< $mol_plot_pane['zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan__24KBJYLY = $mol_type_enforce<
		ReturnType< $mol_plot_pane['shift'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	type $mol_touch__allow_draw__7EHO5EH6 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_draw'] >
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__DXWLPVRC = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_touch__allow_zoom__CDLAY2DG = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_zoom'] >
		,
		ReturnType< $mol_touch['allow_zoom'] >
	>
	type $mol_touch__draw_start__V615VX0L = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_start'] >
		,
		ReturnType< $mol_touch['draw_start'] >
	>
	type $mol_touch__draw__2UANN4Z3 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw'] >
		,
		ReturnType< $mol_touch['draw'] >
	>
	type $mol_touch__draw_end__Y7588UJO = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_end'] >
		,
		ReturnType< $mol_touch['draw_end'] >
	>
	type $mol_vector_2d__B40P1TX5 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_x'] >, ReturnType< $mol_plot_pane['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__H0YTQUMK = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['shift_limit_x'] >, ReturnType< $mol_plot_pane['shift_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__9GD57NY0 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__VWYUNCPZ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__Z08C6P14 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['scale_limit_x'] >, ReturnType< $mol_plot_pane['scale_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__881VDF9J = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__RNL6A8KJ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__VZQGJOGD = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__ROCCREGY = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__HY9KXNT9 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_x'] >, ReturnType< $mol_plot_pane['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__XA0IU979 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_viewport_x'] >, ReturnType< $mol_plot_pane['dimensions_viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_pane extends $mol_svg_root {
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		shift_limit_x( ): $mol_vector_range<number>
		shift_limit_y( ): $mol_vector_range<number>
		scale_limit_x( ): $mol_vector_range<number>
		scale_limit_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		dimensions_viewport_x( ): $mol_vector_range<number>
		dimensions_viewport_y( ): $mol_vector_range<number>
		graphs_sorted( ): readonly($mol_svg)[]
		graphs( ): readonly($mol_plot_graph)[]
		graphs_positioned( ): ReturnType< $mol_plot_pane['graphs'] >
		graphs_visible( ): ReturnType< $mol_plot_pane['graphs_positioned'] >
		zoom( next?: number ): number
		cursor_position( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['pointer_center'] >
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_type'] >
		action_point( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_point'] >
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		Touch( ): $mol_touch
		aspect( ): string
		hue_base( next?: number ): number
		hue_shift( next?: number ): number
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_right( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_top( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap_bottom( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_default( ): $mol_vector_2d<number>
		shift( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		scale_default( ): $mol_vector_2d<number>
		scale( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_x( next?: number ): number
		scale_y( next?: number ): number
		size( ): $mol_vector_2d<number>
		size_real( ): $mol_vector_2d<number>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions_viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): ReturnType< $mol_plot_pane['graphs_sorted'] >
		graphs_colored( ): ReturnType< $mol_plot_pane['graphs_visible'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pane.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size(): $mol_vector_2d<number>;
        graph_hue(index: number): number;
        graphs_colored(): $.$mol_plot_graph[];
        size_real(): $mol_vector_2d<number>;
        view_box(): string;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        scale_x(next?: number): number;
        scale_y(next?: number): number;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        graph_touched: boolean;
        shift(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        reset(event?: Event): void;
        graphs_visible(): $.$mol_plot_graph[];
        graphs_positioned(): readonly $.$mol_plot_graph[];
        dimensions_viewport(): $mol_vector<$mol_vector_range<number>, 2>;
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_chart_legend__graphs__O3JZFE4P = $mol_type_enforce<
		ReturnType< $mol_chart['graphs_colored'] >
		,
		ReturnType< $mol_chart_legend['graphs'] >
	>
	type $mol_chart_zoom__71Y22TXD = $mol_type_enforce<
		Parameters< $mol_chart['zoom'] >[0]
		,
		Parameters< ReturnType< $mol_chart['Plot'] >['scale_x'] >[0]
	>
	type $mol_plot_pane__zoom__T8FJ1B7Z = $mol_type_enforce<
		ReturnType< $mol_chart['zoom'] >
		,
		ReturnType< $mol_plot_pane['zoom'] >
	>
	type $mol_plot_pane__gap_left__L22KRY6B = $mol_type_enforce<
		ReturnType< $mol_chart['gap_left'] >
		,
		ReturnType< $mol_plot_pane['gap_left'] >
	>
	type $mol_plot_pane__gap_right__FEPXW77A = $mol_type_enforce<
		ReturnType< $mol_chart['gap_right'] >
		,
		ReturnType< $mol_plot_pane['gap_right'] >
	>
	type $mol_plot_pane__gap_bottom__OLMBEJ03 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_bottom'] >
		,
		ReturnType< $mol_plot_pane['gap_bottom'] >
	>
	type $mol_plot_pane__gap_top__41BMEAYN = $mol_type_enforce<
		ReturnType< $mol_chart['gap_top'] >
		,
		ReturnType< $mol_plot_pane['gap_top'] >
	>
	type $mol_plot_pane__graphs__H31XLLTT = $mol_type_enforce<
		ReturnType< $mol_chart['graphs'] >
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	type $mol_plot_pane__hue_base__B9NLEEKN = $mol_type_enforce<
		ReturnType< $mol_chart['hue_base'] >
		,
		ReturnType< $mol_plot_pane['hue_base'] >
	>
	type $mol_plot_pane__hue_shift__Q17KNR8T = $mol_type_enforce<
		ReturnType< $mol_chart['hue_shift'] >
		,
		ReturnType< $mol_plot_pane['hue_shift'] >
	>
	export class $mol_chart extends $mol_view {
		Legend( ): $mol_chart_legend
		zoom( next?: ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] > ): ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] >
		graphs_colored( ): ReturnType< ReturnType< $mol_chart['Plot'] >['graphs_colored'] >
		hue_base( ): number
		hue_shift( ): number
		Plot( ): $mol_plot_pane
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_chart['gap_hor'] >
		gap_right( ): ReturnType< $mol_chart['gap_hor'] >
		gap_bottom( ): ReturnType< $mol_chart['gap_vert'] >
		gap_top( ): ReturnType< $mol_chart['gap_vert'] >
		graphs( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chart.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry__2K4URY1M = $mol_type_enforce<
		ReturnType< $mol_plot_bar['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_plot_graph_sample__color__26X238HA = $mol_type_enforce<
		ReturnType< $mol_plot_bar['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	export class $mol_plot_bar extends $mol_plot_graph {
		stroke_width( ): string
		curve( ): string
		Curve( ): $mol_svg_path
		style( ): ({ 
			'stroke-width': ReturnType< $mol_plot_bar['stroke_width'] >,
		})  & ReturnType< $mol_plot_graph['style'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_bar extends $.$mol_plot_bar {
        indexes(): number[];
        curve(): string;
        stroke_width(): string;
        color(): string;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_graph_sample__color__W1QSGJ7Y = $mol_type_enforce<
		ReturnType< $mol_plot_line['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	type $mol_plot_graph_sample__type__5ENAH8K8 = $mol_type_enforce<
		ReturnType< $mol_plot_line['type'] >
		,
		ReturnType< $mol_plot_graph_sample['type'] >
	>
	export class $mol_plot_line extends $mol_plot_graph {
		curve( ): string
		threshold( ): number
		spacing( ): number
		color_fill( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_plot_line['curve'] >,
		})  & ReturnType< $mol_plot_graph['attr'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_line extends $.$mol_plot_line {
        sub(): readonly any[];
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_coord_pack(high: number, low: number): number;
    function $mol_coord_high(pack: number): number;
    function $mol_coord_low(pack: number): number;
}

declare namespace $ {

	type $mol_svg_path__geometry__WGNVAMZU = $mol_type_enforce<
		ReturnType< $mol_plot_dot['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_plot_graph_sample__color__BDBSU78S = $mol_type_enforce<
		ReturnType< $mol_plot_dot['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	export class $mol_plot_dot extends $mol_plot_graph {
		diameter( ): number
		curve( ): string
		Curve( ): $mol_svg_path
		points_max( ): number
		aspect( ): number
		style( ): ({ 
			'stroke-width': ReturnType< $mol_plot_dot['diameter'] >,
		})  & ReturnType< $mol_plot_graph['style'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=dot.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_graph_sample__sub__A78P7FJF = $mol_type_enforce<
		ReturnType< $mol_plot_group['graph_samples'] >
		,
		ReturnType< $mol_plot_graph_sample['sub'] >
	>
	export class $mol_plot_group extends $mol_plot_graph {
		graphs( ): readonly($mol_plot_graph)[]
		graphs_enriched( ): ReturnType< $mol_plot_group['graphs'] >
		graph_samples( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_plot_group['graphs_enriched'] >
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_group extends $.$mol_plot_group {
        graphs_enriched(): readonly $.$mol_plot_graph[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        graph_samples(): any[];
        back(): $mol_plot_graph[];
        front(): $mol_plot_graph[];
    }
}

declare namespace $ {

	export class $mol_svg_rect extends $mol_svg {
		width( ): string
		height( ): string
		pos_x( ): string
		pos_y( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'width': ReturnType< $mol_svg_rect['width'] >,
			'height': ReturnType< $mol_svg_rect['height'] >,
			'x': ReturnType< $mol_svg_rect['pos_x'] >,
			'y': ReturnType< $mol_svg_rect['pos_y'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=rect.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {

	export class $mol_svg_text extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		align( ): string
		align_hor( ): ReturnType< $mol_svg_text['align'] >
		align_vert( ): string
		text( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_text['pos_x'] >,
			'y': ReturnType< $mol_svg_text['pos_y'] >,
			'text-anchor': ReturnType< $mol_svg_text['align_hor'] >,
			'alignment-baseline': ReturnType< $mol_svg_text['align_vert'] >,
		})  & ReturnType< $mol_svg['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {

	type $mol_svg_rect__pos_x__4NLDTKVL = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_x'] >
		,
		ReturnType< $mol_svg_rect['pos_x'] >
	>
	type $mol_svg_rect__pos_y__QFMZ78L6 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_y'] >
		,
		ReturnType< $mol_svg_rect['pos_y'] >
	>
	type $mol_svg_rect__width__DYUH7XGI = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height__7A9TJZY4 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_path__geometry__LVRTVA03 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text__pos_x__0954HV0J = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_x'] >
		,
		ReturnType< $mol_svg_text['pos_x'] >
	>
	type $mol_svg_text__pos_y__EGSPGMCM = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_y'] >
		,
		ReturnType< $mol_svg_text['pos_y'] >
	>
	type $mol_svg_text__align__22U39T0T = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__text__YC0CTZAY = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_vector_range__QQRSD4OK = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__SJMQMADF = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_text__pos__SJDGHN3G = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_pos'] >
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__text__QE5D083M = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_text'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_svg_text__align__5LX5MDDI = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	export class $mol_plot_ruler extends $mol_plot_graph {
		background_x( ): string
		background_y( ): string
		background_width( ): string
		background_height( ): string
		Background( ): $mol_svg_rect
		curve( ): string
		Curve( ): $mol_svg_path
		labels_formatted( ): readonly(any)[]
		title_pos_x( ): string
		title_pos_y( ): string
		title_align( ): string
		Title( ): $mol_svg_text
		label_pos_x( id: any): string
		label_pos_y( id: any): string
		label_pos( id: any): readonly(any)[]
		label_text( id: any): string
		label_align( ): string
		step( ): number
		scale_axis( ): number
		scale_step( ): number
		shift_axis( ): number
		dimensions_axis( ): $mol_vector_range<number>
		viewport_axis( ): $mol_vector_range<number>
		axis_points( ): readonly(number)[]
		normalize( next?: number ): number
		precision( ): number
		sub( ): readonly(any)[]
		Label( id: any): $mol_svg_text
	}
	
}

//# sourceMappingURL=ruler.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $.$mol_svg_text[];
        step(): number;
        snap_to_grid(coord: number): number;
        axis_points(): number[];
        precision(): number;
        label_text(index: number): string;
        font_size(): number;
        back(): $mol_svg_path[];
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_vert extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_y( ): string
		label_pos_x( id: any): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
		background_height( ): string
		background_width( ): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
	}
	
}

//# sourceMappingURL=vert.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        title_pos_x(): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_hor extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_x( ): string
		title_pos_y( ): string
		label_pos_y( id: any): ReturnType< $mol_plot_ruler_hor['title_pos_y'] >
		background_width( ): string
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        label_pos_x(index: number): string;
        background_y(): string;
        title_pos_y(): string;
        background_height(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
		labels( ): readonly(string)[]
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
        series_x(): readonly number[];
        labels(): readonly string[];
        visible_indexes(): number[];
        curve(): string;
        label_text(index: number): string;
        labels_formatted(): $.$mol_svg_text[];
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(font: string, text: string): number;
}

declare namespace $ {

	type $mol_svg_rect__width__R2ZAN9DQ = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height__N1875XG5 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_rect__pos__H3FLF0KJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_rect['pos'] >
	>
	type $mol_svg_text__pos__S5ODC1UT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__align__GSBSPV2G = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__sub__CFZEES15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['sub'] >
	>
	export class $mol_svg_text_box extends $mol_svg_group {
		box_width( ): string
		box_height( ): string
		box_pos_x( ): ReturnType< $mol_svg_text_box['pos_x'] >
		box_pos_y( ): string
		Back( ): $mol_svg_rect
		pos_x( ): string
		pos_y( ): string
		align( ): string
		text( ): string
		Text( ): $mol_svg_text
		font_size( ): number
		width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text_box extends $.$mol_svg_text_box {
        box_width(): string;
        width(): number;
        box_pos_x(): string;
        box_pos_y(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_range__S3VWRW0N = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__KVWRZ9ZG = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_path__geometry__Y55KEZUQ = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text_box__pos_x__9TDL63S3 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y__VUG326JQ = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text__WO5OA9XF = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_svg_text_box__pos_x__YTESQT6U = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y__C8UFNIH2 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text__LOC3HGQ2 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_vector_2d__5NFDQFRU = $mol_type_enforce<
		[ ReturnType< $mol_plot_mark_cross['dimensions_x'] >, ReturnType< $mol_plot_mark_cross['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_mark_cross extends $mol_plot_graph {
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		curve( ): string
		Curve( ): $mol_svg_path
		title_x_pos_x( ): string
		title_x_pos_y( ): string
		title_x( ): string
		Label_x( ): $mol_svg_text_box
		title_y_pos_x( ): string
		title_y_pos_y( ): string
		title_y( ): string
		Label_y( ): $mol_svg_text_box
		labels( ): readonly(string)[]
		title_x_gap( ): number
		title_y_gap( ): number
		threshold( ): number
		graphs( ): readonly($mol_plot_graph)[]
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
        nearest(): {
            value: $mol_vector_2d<number>;
            scaled: $mol_vector_2d<number>;
            index: number;
        } | null;
        curve(): string;
        title_x(): string;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_y(): string;
        title_y_pos_y(): string;
        title_y_pos_x(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_bar__title__7PX85D3M = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['plan_title'] >
		,
		ReturnType< $mol_plot_bar['title'] >
	>
	type $mol_plot_bar__series_y__JF2V961K = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['plan'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_group__title__5RLORX3K = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['fact_title'] >
		,
		ReturnType< $mol_plot_group['title'] >
	>
	type $mol_plot_group__series_y__F18G3G7Y = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['facts'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__7B8R2SFT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_ruler_vert__title__YID8XTCR = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['vert_title'] >
		,
		ReturnType< $mol_plot_ruler_vert['title'] >
	>
	type $mol_chart_demo_simple_months__1K4EZVQG = $mol_type_enforce<
		`January`
		,
		string
	>
	type $mol_chart_demo_simple_months__UW40MUJV = $mol_type_enforce<
		`February`
		,
		string
	>
	type $mol_chart_demo_simple_months__E5LK8HRM = $mol_type_enforce<
		`March`
		,
		string
	>
	type $mol_chart_demo_simple_months__TJ41GULR = $mol_type_enforce<
		`April`
		,
		string
	>
	type $mol_plot_mark_hor__title__IXY226AV = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['marker_hor_title'] >
		,
		ReturnType< $mol_plot_mark_hor['title'] >
	>
	type $mol_plot_mark_hor__labels__9F3MZLV0 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['months'] >
		,
		ReturnType< $mol_plot_mark_hor['labels'] >
	>
	type $mol_plot_mark_cross__labels__WR5V25OT = $mol_type_enforce<
		ReturnType< $mol_chart_demo_simple['months'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs__5ZWJW6ID = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs__ZL31G38J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	export class $mol_chart_demo_simple extends $mol_example_large {
		plan_title( ): string
		plan( ): readonly(any)[]
		Plan( ): $mol_plot_bar
		fact_title( ): string
		facts( ): readonly(any)[]
		Fact_line( ): $mol_plot_line
		Fact_dots( ): $mol_plot_dot
		Fact( ): $mol_plot_group
		vert_title( ): string
		Vert_ruler( ): $mol_plot_ruler_vert
		marker_hor_title( ): string
		months( ): readonly(string)[]
		Marker_hor( ): $mol_plot_mark_hor
		Marker_cross( ): $mol_plot_mark_cross
		Chart( ): $mol_chart
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_plot_fill extends $mol_plot_line {
		threshold( ): number
	}
	
}

//# sourceMappingURL=fill.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_fill extends $.$mol_plot_fill {
        curve(): string;
        front(): never[];
        back(): this[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_bar__title__70OLS15C = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['receipts_title'] >
		,
		ReturnType< $mol_plot_bar['title'] >
	>
	type $mol_plot_bar__series_x__KOO2HYNZ = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_bar['series_x'] >
	>
	type $mol_plot_bar__series_y__UI9HUWU1 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_2_y'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_bar__title__CHX22N0T = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['receipts_confirmed_title'] >
		,
		ReturnType< $mol_plot_bar['title'] >
	>
	type $mol_plot_bar__series_x__4AH1ISNS = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_bar['series_x'] >
	>
	type $mol_plot_bar__series_y__UKAFNDBV = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_3_y'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_dot__title__67IBAK7A = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['maximum_title'] >
		,
		ReturnType< $mol_plot_dot['title'] >
	>
	type $mol_plot_dot__series_x__T6JRV3G3 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_dot['series_x'] >
	>
	type $mol_plot_dot__series_y__WSA2986D = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_1_y'] >
		,
		ReturnType< $mol_plot_dot['series_y'] >
	>
	type $mol_plot_line__type__XIATUA26 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['type'] >
	>
	type $mol_plot_line__title__TICK16XU = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['waste_title'] >
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_x__NQOO1AF4 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_line['series_x'] >
	>
	type $mol_plot_line__series_y__FZEU3PGD = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_4_y'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_group__title__I6T2MB3Z = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['purchases_title'] >
		,
		ReturnType< $mol_plot_group['title'] >
	>
	type $mol_plot_group__series_x__U5QSAJQQ = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_group['series_x'] >
	>
	type $mol_plot_group__series_y__35KK271C = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_5_y'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__3A0QOK6D = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_line__type__KN1P1R25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['type'] >
	>
	type $mol_plot_group__title__RJJI7WTM = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['taxes_title'] >
		,
		ReturnType< $mol_plot_group['title'] >
	>
	type $mol_plot_group__series_x__83LB3YBQ = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_group['series_x'] >
	>
	type $mol_plot_group__series_y__XSDVMSGS = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_6_y'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__9OBCNHRX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_ruler_vert__title__9G2T3FBK = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['energy_title'] >
		,
		ReturnType< $mol_plot_ruler_vert['title'] >
	>
	type $mol_plot_mark_hor__title__KL7256W2 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['day_title'] >
		,
		ReturnType< $mol_plot_mark_hor['title'] >
	>
	type $mol_plot_mark_hor__series_x__33FFILHQ = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['series_x'] >
		,
		ReturnType< $mol_plot_mark_hor['series_x'] >
	>
	type $mol_chart__graphs__RXZ7NLDM = $mol_type_enforce<
		ReturnType< $mol_chart_demo_styles['graphs'] >
		,
		ReturnType< $mol_chart['graphs'] >
	>
	export class $mol_chart_demo_styles extends $mol_example_large {
		receipts_title( ): string
		series_x( ): readonly(number)[]
		series_2_y( ): readonly(number)[]
		Receipts( ): $mol_plot_bar
		receipts_confirmed_title( ): string
		series_3_y( ): readonly(number)[]
		Receipts_confirmed( ): $mol_plot_bar
		maximum_title( ): string
		series_1_y( ): readonly(number)[]
		Maximum( ): $mol_plot_dot
		waste_title( ): string
		series_4_y( ): readonly(number)[]
		Waste( ): $mol_plot_line
		purchases_title( ): string
		series_5_y( ): readonly(number)[]
		Purchases_fill( ): $mol_plot_fill
		Purchases_line( ): $mol_plot_line
		Purchases_dots( ): $mol_plot_dot
		Purchases( ): $mol_plot_group
		taxes_title( ): string
		series_6_y( ): readonly(number)[]
		Taxes_fill( ): $mol_plot_fill
		Taxes_line( ): $mol_plot_line
		Taxes_dots( ): $mol_plot_dot
		Taxes( ): $mol_plot_group
		energy_title( ): string
		Energy( ): $mol_plot_ruler_vert
		day_title( ): string
		Day( ): $mol_plot_mark_hor
		graphs( ): readonly(any)[]
		Chart( ): $mol_chart
		title( ): string
		samples_count( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chart_demo_styles extends $.$mol_chart_demo_styles {
        limit(): readonly [10, number];
        series_x(): number[];
        series_y(): number[];
        series_1_y(): number[];
        series_2_y(): number[];
        series_3_y(): number[];
        series_4_y(): number[];
        series_5_y(): number[];
        series_6_y(): number[];
    }
}

declare namespace $ {

	type $mol_plot_dot__title__V0X61MEG = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_left_title'] >
		,
		ReturnType< $mol_plot_dot['title'] >
	>
	type $mol_plot_dot__series_x__0GRK4JVX = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_left_x'] >
		,
		ReturnType< $mol_plot_dot['series_x'] >
	>
	type $mol_plot_dot__series_y__RXHE5VG3 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_left_y'] >
		,
		ReturnType< $mol_plot_dot['series_y'] >
	>
	type $mol_plot_dot__points_max__XX37QPXB = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['points_max'] >
		,
		ReturnType< $mol_plot_dot['points_max'] >
	>
	type $mol_plot_dot__title__IZ08IB4E = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_right_title'] >
		,
		ReturnType< $mol_plot_dot['title'] >
	>
	type $mol_plot_dot__series_x__P6JMH5J7 = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_right_x'] >
		,
		ReturnType< $mol_plot_dot['series_x'] >
	>
	type $mol_plot_dot__series_y__RZCOGQVO = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_right_y'] >
		,
		ReturnType< $mol_plot_dot['series_y'] >
	>
	type $mol_plot_dot__points_max__SF5CWYQQ = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['points_max'] >
		,
		ReturnType< $mol_plot_dot['points_max'] >
	>
	type $mol_plot_ruler_vert__title__RGBITFZT = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['vert_title'] >
		,
		ReturnType< $mol_plot_ruler_vert['title'] >
	>
	type $mol_plot_ruler_hor__title__3DWCLGJX = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['hor_title'] >
		,
		ReturnType< $mol_plot_ruler_hor['title'] >
	>
	type $mol_plot_ruler_hor__series_x__GRZUEUDK = $mol_type_enforce<
		ReturnType< $mol_chart_demo_forces['forces_left_x'] >
		,
		ReturnType< $mol_plot_ruler_hor['series_x'] >
	>
	type $mol_plot_mark_cross__graphs__GOPWIBR3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs__NUZZR7MX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	export class $mol_chart_demo_forces extends $mol_example_large {
		forces_left_title( ): string
		forces_left_x( ): readonly(number)[]
		forces_left_y( ): readonly(number)[]
		Forces_left( ): $mol_plot_dot
		forces_right_title( ): string
		forces_right_x( ): readonly(number)[]
		forces_right_y( ): readonly(number)[]
		Forces_right( ): $mol_plot_dot
		vert_title( ): string
		Vert_ruler( ): $mol_plot_ruler_vert
		hor_title( ): string
		Hor_ruler( ): $mol_plot_ruler_hor
		Cross( ): $mol_plot_mark_cross
		Chart( ): $mol_chart
		title( ): string
		samples_count( ): number
		points_max( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=forces.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chart_demo_forces extends $.$mol_chart_demo_forces {
        generate_forces(): readonly [readonly number[], readonly number[]];
        forces_left(): readonly [readonly number[], readonly number[]];
        forces_right(): readonly [readonly number[], readonly number[]];
        forces_left_x(): readonly number[];
        forces_left_y(): readonly number[];
        forces_right_x(): readonly number[];
        forces_right_y(): readonly number[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_chat__seed__TPYJ76JD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chat['seed'] >
	>
	export class $mol_chat_demo extends $mol_example_small {
		chat_pages( ): ReturnType< ReturnType< $mol_chat_demo['Chat'] >['pages'] >
		Chat( ): $mol_chat
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_box__checked__4Z20EFTD = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['base_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__5H3FV924 = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['c1Label'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__title__K8V1I8PH = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['c2Label'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__Y66I27ZO = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['checked_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__6R4DU6A5 = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['c6Label'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__TES32BM6 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__enabled__6J6FXGY4 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_check_box__checked__T7301BCA = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['base_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__checked__VNA2BG3M = $mol_type_enforce<
		ReturnType< $mol_check_box_demo['checked_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__checked__Z6ZIYG5X = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__enabled__54RFIRGW = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_list__rows__RCVEFRUF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_check_box_demo extends $mol_example_small {
		base_checked( next?: boolean ): boolean
		c1Label( ): string
		Labeled_base( ): $mol_check_box
		c2Label( ): string
		checked_checked( next?: boolean ): boolean
		Labeled_checked( ): $mol_check_box
		c6Label( ): string
		Labeled_disabled( ): $mol_check_box
		Alone_base( ): $mol_check_box
		Alone_checked( ): $mol_check_box
		Alone_disabled( ): $mol_check_box
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_list__option_checked__BYAI3WYN = $mol_type_enforce<
		ReturnType< $mol_check_list_demo['right'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options__M1CUHAWW = $mol_type_enforce<
		({ 
			'read': string,
			'write': string,
			'rights': string,
			'backup': string,
			'restart': string,
			'ping': string,
			'api': string,
			'docs': string,
		}) 
		,
		ReturnType< $mol_check_list['options'] >
	>
	export class $mol_check_list_demo extends $mol_example_small {
		right( id: any, next?: boolean ): boolean
		Rights( ): $mol_check_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_expand__checked__FQOEUZ7D = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['base_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__title__I05E3XCE = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['c1Label'] >
		,
		ReturnType< $mol_check_expand['title'] >
	>
	type $mol_check_expand__title__DG5NFZ2O = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['c2Label'] >
		,
		ReturnType< $mol_check_expand['title'] >
	>
	type $mol_check_expand__checked__S5GM0UTS = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['expanded_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__title__01Y6YVKW = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['c5Label'] >
		,
		ReturnType< $mol_check_expand['title'] >
	>
	type $mol_check_expand__disabled__1CUUD7FP = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_expand['disabled'] >
	>
	type $mol_check_expand__checked__E1AGVPGU = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['base_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__checked__VFZ5S8UH = $mol_type_enforce<
		ReturnType< $mol_check_expand_demo['expanded_expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_list__rows__7J41LM09 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_check_expand_demo extends $mol_example_small {
		base_expanded( next?: boolean ): boolean
		c1Label( ): string
		Labeled_base( ): $mol_check_expand
		c2Label( ): string
		expanded_expanded( next?: boolean ): boolean
		Labeled_expanded( ): $mol_check_expand
		c5Label( ): string
		Disabled( ): $mol_check_expand
		Empty_base( ): $mol_check_expand
		Empty_expanded( ): $mol_check_expand
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_check_group__title__7OCUJ45S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_group['title'] >
	>
	type $mol_check_group__checks__DQJ8R2YE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_group['checks'] >
	>
	type $mol_check_box__title__IL8X81ME = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['strength_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__PM4C5L0S = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['strength'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__TFSQBBKT = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['perception_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__UHZEWJ4G = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['perception'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__1AIBDT91 = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['endurance_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__0KQH2R8U = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['endurance'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__3UHNUPQY = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['charisma_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__GITAQM41 = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['charisma'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__9RL3K25E = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['intelligence_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__XFJE7X2J = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['intelligence'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__TTQASSRG = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['agility_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__OCVSA3US = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['agility'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__MS9XE3IF = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['luck_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__OFJHZ7HF = $mol_type_enforce<
		ReturnType< $mol_check_group_demo['luck'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_list__rows__BYNP6CIE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows__HVILYB2Q = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_check_group_demo extends $mol_example_small {
		All( ): $mol_check_group
		strength_title( ): string
		strength( next?: boolean ): boolean
		Strength( ): $mol_check_box
		perception_title( ): string
		perception( next?: boolean ): boolean
		Perception( ): $mol_check_box
		endurance_title( ): string
		endurance( next?: boolean ): boolean
		Endurance( ): $mol_check_box
		charisma_title( ): string
		charisma( next?: boolean ): boolean
		Charisma( ): $mol_check_box
		intelligence_title( ): string
		intelligence( next?: boolean ): boolean
		Intelligence( ): $mol_check_box
		agility_title( ): string
		agility( next?: boolean ): boolean
		Agility( ): $mol_check_box
		luck_title( ): string
		luck( next?: boolean ): boolean
		Luck( ): $mol_check_box
		Partial( ): $mol_list
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_microphone extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=microphone.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_icon__Icon__BEWJIXXY = $mol_type_enforce<
		ReturnType< $mol_check_icon_demo['Base_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__8VZC50QW = $mol_type_enforce<
		ReturnType< $mol_check_icon_demo['base_checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__KFEYDKPD = $mol_type_enforce<
		ReturnType< $mol_check_icon_demo['Checked_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__8P44EJ8E = $mol_type_enforce<
		ReturnType< $mol_check_icon_demo['checked_checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_box__Icon__QN1VVYZE = $mol_type_enforce<
		ReturnType< $mol_check_icon_demo['Disabled_icon'] >
		,
		ReturnType< $mol_check_box['Icon'] >
	>
	type $mol_check_box__checked__4P9EQNQY = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__enabled__LPXGRUQY = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	export class $mol_check_icon_demo extends $mol_example_small {
		Base_icon( ): $mol_icon_microphone
		base_checked( next?: boolean ): boolean
		Base( ): $mol_check_icon
		Checked_icon( ): $mol_icon_microphone
		checked_checked( next?: boolean ): boolean
		Checked( ): $mol_check_icon
		Disabled_icon( ): $mol_icon_microphone
		Disabled( ): $mol_check_box
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare var cordova: any;
declare namespace $ {
    var $mol_cordova: any;
    function $mol_cordova_camera(): any;
}

declare namespace $ {

	type $mol_search__query__0RX2FB35 = $mol_type_enforce<
		ReturnType< $mol_code['value'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__UHPJ963C = $mol_type_enforce<
		ReturnType< $mol_code['hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_button__event_click__B3QIF66O = $mol_type_enforce<
		ReturnType< $mol_code['event_scan'] >
		,
		ReturnType< $mol_button['event_click'] >
	>
	type $mol_button__sub__TWW0RSGY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	export class $mol_code extends $mol_view {
		value( next?: string ): string
		format( ): string
		hint( ): ReturnType< $mol_code['format'] >
		Manual( ): $mol_search
		event_scan( next?: any ): any
		scan_label( ): string
		Scan( ): $mol_button
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_code extends $.$mol_code {
        scan_support(): boolean;
        sub(): ($.$mol_button | $.$mol_search)[];
        event_scan(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_code__format__6RF6XQCF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__ADRO14U3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__Q7HI9UK3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__YK5Z8K6G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__L273G5O6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__60DVR6YM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__Y5X7H15Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__B31MM2Z7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	type $mol_code__format__DD68ISLM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_code['format'] >
	>
	export class $mol_code_demo extends $mol_example_small {
		Qr( ): $mol_code
		Matrix( ): $mol_code
		Upc_e( ): $mol_code
		Upc_a( ): $mol_code
		Ean_8( ): $mol_code
		Ean_13( ): $mol_code
		Code_128( ): $mol_code
		Code_39( ): $mol_code
		Itf( ): $mol_code
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_csv_parse(text: string, delimiter?: string): Record<string, any>[];
}

declare namespace $ {

	export class $mol_csv_parse_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_csv_serial(data: Record<string, any>[], delimiter?: string): string;
}

declare namespace $ {

	export class $mol_csv_serial_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {

	export class $mol_data_array_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {

	export class $mol_data_boolean_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_const<Val>(ref: Val): ((val: Val) => Val) & {
        config: Val;
        Value: Val;
    };
}

declare namespace $ {

	export class $mol_data_const_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_dict<Sub extends $mol_data_value>(sub: Sub): ((val: Readonly<Record<string, ReturnType<Sub>>>) => Readonly<Record<string, ReturnType<Sub>>>) & {
        config: Sub;
        Value: Readonly<Record<string, ReturnType<Sub>>>;
    };
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {

	export class $mol_data_dict_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_pattern(pattern: RegExp): ((val: string) => string) & {
        config: RegExp;
        Value: string;
    };
}

declare namespace $ {
    let $mol_data_email: ((val: string) => string) & {
        config: RegExp;
        Value: string;
    };
}

declare namespace $ {

	export class $mol_data_email_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_data_enum_demo_number extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
	export class $mol_data_enum_demo_string extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_instance<Instance extends new (...args: any[]) => any>(Instance: Instance): ((val: InstanceType<Instance>) => InstanceType<Instance>) & {
        config: Instance;
        Value: InstanceType<Instance>;
    };
}

declare namespace $ {

	export class $mol_data_instance_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {

	export class $mol_data_integer_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    type $mol_data_tagged_type<Value, Tag extends PropertyKey> = Value & {
        [Key in Tag]: Value;
    };
    type $mol_data_tagged_parser<Input, Output> = {
        Value: Output;
    } & ((val: $mol_data_tagged_type<Input, never>) => Output);
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    type $mol_data_nominal_type<Value, Nominal> = Value | {
        $mol_data_nominal: Nominal;
    };
    type $mol_data_nominal_parser<Input extends any[], Output> = {
        Value: Output;
    } & ((...val: Input) => Output);
    export function $mol_data_nominal<Nominal extends string, Sub extends $mol_data_value, Value = $mol_data_nominal_type<ReturnType<Sub>, Nominal>>(config: {
        [key in Nominal]: Sub;
    }): $mol_data_nominal_parser<Parameters<Sub>, Value>;
    export {};
}

declare namespace $ {
    function $mol_data_nullable<Sub extends $mol_data_value>(sub: Sub): ((val: Parameters<Sub>[0] | null) => ReturnType<Sub> | null) & {
        config: Sub;
        Value: ReturnType<Sub> | null;
    };
}

declare namespace $ {

	export class $mol_data_nullable_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_data_number_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_optional<Sub extends $mol_data_value, Fallback extends undefined | (() => ReturnType<Sub>)>(sub: Sub, fallback?: Fallback): ((val: Parameters<Sub>[0] | undefined) => ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>)) & {
        config: {
            sub: Sub;
            fallback: Fallback | undefined;
        };
        Value: ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>);
    };
}

declare namespace $ {

	export class $mol_data_optional_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_data_pattern_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {

	export class $mol_data_pipe_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_range<Value>(from: Value, to: Value): ((val: Value) => Value) & {
        config: Value[];
        Value: Value;
    };
}

declare namespace $ {

	export class $mol_data_range_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<$mol_type_override<Partial<Val>, Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }>, Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, { [Field in keyof { [key in keyof Sub]: Parameters<Sub[key]>[0]; }]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; }[keyof Sub]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }>, Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>>;
    };
}

declare namespace $ {

	export class $mol_data_record_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_data_string_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_data_tagged_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Sub[number]>;
    };
}

declare namespace $ {

	export class $mol_data_variant_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_date__value_moment__R6LO4D9I = $mol_type_enforce<
		ReturnType< $mol_date_demo['date_current'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_view__sub__0EB4XN3G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date__value_moment__HYCY5DJA = $mol_type_enforce<
		ReturnType< $mol_date_demo['date_empty'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	export class $mol_date_demo extends $mol_example_small {
		date_current( next?: $mol_time_moment ): $mol_time_moment
		Current( ): $mol_date
		formatted( ): string
		Formatted( ): $mol_view
		date_empty( next?: any ): any
		Empty( ): $mol_date
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_date_demo extends $.$mol_date_demo {
        formatted(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_card__title__ZVFMFE5G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__H6UY77XH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__BNM1XEZ6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__XRFKSV8I = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__0BB420DQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__IS8KKIOL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__CR0X55TN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__content__E0G949GF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__title__GTTS0L0Y = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['title'] >
	>
	type $mol_card__Content__0MY8K77B = $mol_type_enforce<
		ReturnType< $mol_deck_demo['Spam_content'] >
		,
		ReturnType< $mol_card['Content'] >
	>
	type $mol_deck__items__LH97H2AD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_deck['items'] >
	>
	export class $mol_deck_demo extends $mol_example_small {
		Greeting( ): $mol_card
		Question( ): $mol_card
		Answer( ): $mol_card
		Command( ): $mol_card
		Spam_content( ): $mol_filler
		Spam( ): $mol_card
		Deck( ): $mol_deck
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_dimmer__haystack__0Z3L0YZW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__PZMO2E9H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__BXHTL6VG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__EHO2G2I0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__AG0JBRDK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__JY9IMSBJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__NP1NLWH3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__P0UCWJY7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__LAS8CA7Y = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__HT0X9VFL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__9P6ZRG1Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__RSANCZIQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_list__rows__WIMITEDX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_dimmer_demo extends $mol_example_small {
		One( ): $mol_dimmer
		Two( ): $mol_dimmer
		Three( ): $mol_dimmer
		Four( ): $mol_dimmer
		Five( ): $mol_dimmer
		Six( ): $mol_dimmer
		Cases( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__BFC1CL7D = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_drop__adopt__7PPMU8SX = $mol_type_enforce<
		ReturnType< $mol_drag_demo['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__XJ7JX54H = $mol_type_enforce<
		ReturnType< $mol_drag_demo['receive_trash'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__ME0MMUDZ = $mol_type_enforce<
		ReturnType< $mol_drag_demo['Trash'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_list__rows__Q3Z0QPHY = $mol_type_enforce<
		ReturnType< $mol_drag_demo['task_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__head__MXBGAMQT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__Body_content__AXO0WICO = $mol_type_enforce<
		ReturnType< $mol_drag_demo['List'] >
		,
		ReturnType< $mol_page['Body_content'] >
	>
	type $mol_drop__adopt__VWMU010O = $mol_type_enforce<
		ReturnType< $mol_drag_demo['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__68RY2BHI = $mol_type_enforce<
		ReturnType< $mol_drag_demo['receive'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__E9JVLW4H = $mol_type_enforce<
		ReturnType< $mol_drag_demo['Page'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_link__uri__S2AUWBP5 = $mol_type_enforce<
		ReturnType< $mol_drag_demo['task_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__EC2OIL19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_drop__adopt__9NPJMXYA = $mol_type_enforce<
		ReturnType< $mol_drag_demo['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__JEMO52HH = $mol_type_enforce<
		ReturnType< $mol_drag_demo['receive_before'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__UZ1G3MJ2 = $mol_type_enforce<
		ReturnType< $mol_drag_demo['Task_link'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_drag__transfer__5ZDOQ3DP = $mol_type_enforce<
		({ 
			'text/plain': ReturnType< $mol_drag_demo['task_title'] >,
			'text/html': ReturnType< $mol_drag_demo['task_html'] >,
			'text/uri-list': ReturnType< $mol_drag_demo['task_uri'] >,
		}) 
		,
		ReturnType< $mol_drag['transfer'] >
	>
	type $mol_drag__Sub__UCN0YUUX = $mol_type_enforce<
		ReturnType< $mol_drag_demo['Task_drop'] >
		,
		ReturnType< $mol_drag['Sub'] >
	>
	export class $mol_drag_demo extends $mol_example_large {
		transfer_adopt( next?: any ): any
		receive( next?: any ): any
		receive_trash( next?: any ): any
		Trash_icon( ): $mol_icon_trash_can_outline
		Trash( ): $mol_view
		Trash_drop( ): $mol_drop
		task_rows( ): readonly(any)[]
		List( ): $mol_list
		Page( ): $mol_page
		List_drop( ): $mol_drop
		task_title( id: any): string
		task_html( id: any): string
		task_uri( id: any): string
		receive_before( id: any, next?: any ): any
		Task_link( id: any): $mol_link
		Task_drop( id: any): $mol_drop
		task_count( ): number
		sub( ): readonly(any)[]
		Task_row( id: any): $mol_drag
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    type $mol_drag_demo_task = {
        id: string;
        title: string;
    };
    class $mol_drag_demo extends $.$mol_drag_demo {
        task_list(next?: $mol_drag_demo_task[]): $mol_drag_demo_task[];
        Task(id: string): {
            id: string;
            title: string;
            toJSON: () => string;
        };
        task_rows(): $.$mol_drag[];
        task_title(task: $mol_drag_demo_task): string;
        task_uri(task: $mol_drag_demo_task): string;
        transfer_adopt(transfer: DataTransfer): $mol_drag_demo_task | undefined;
        receive_before(anchor: $mol_drag_demo_task, task: $mol_drag_demo_task): void;
        receive(task: $mol_drag_demo_task): void;
        receive_trash(task: $mol_drag_demo_task): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_dump_value__value__I6QYK8AD = $mol_type_enforce<
		ReturnType< $mol_dump_demo['value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_dump_value__value__4CKPQ6KW = $mol_type_enforce<
		ReturnType< $mol_dump_demo['value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_dump_value__prototypes__W0AXNH3X = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_dump_value['prototypes'] >
	>
	type $mol_list__rows__SVOYL4OD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_dump_demo extends $mol_example_small {
		value( ): any
		Dump_short( ): $mol_dump_value
		Dump_long( ): $mol_dump_value
		Dump_list( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_demo extends $.$mol_dump_demo {
        value(): {
            undefined: undefined;
            null: null;
            boolean: boolean;
            number: number;
            string: string;
            regexp: RegExp;
            date: Date;
            set: Set<any>;
            map: Map<any, any>;
            array: number[];
            buffer: Uint8Array;
        };
    }
}

declare namespace $ {

	type $mol_expander__title__OGHD4ML9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content__0ZOSNC96 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_expander_demo extends $mol_example_small {
		Content( ): $mol_filler
		Expander( ): $mol_expander
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__value__4R6HQ7DL = $mol_type_enforce<
		ReturnType< $mol_fetch_demo['url'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_major__click__F8DNMEPJ = $mol_type_enforce<
		ReturnType< $mol_fetch_demo['fetch_data'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_view__sub__B0II6SKC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dump_value__value__GXHK6CE2 = $mol_type_enforce<
		ReturnType< $mol_fetch_demo['data'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_list__rows__KUK9UGX6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_fetch_demo extends $mol_example_small {
		url( next?: string ): string
		Url( ): $mol_string
		fetch_data( next?: any ): any
		Fetch( ): $mol_button_major
		Request( ): $mol_view
		data( next?: any ): any
		Data( ): $mol_dump_value
		Content( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_fetch_demo extends $.$mol_fetch_demo {
        fetch_data(): void;
    }
}

declare namespace $ {

	type $mol_filler__min_symbols__5SG0UDW4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	export class $mol_filler_demo extends $mol_example_small {
		Filler( ): $mol_filler
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__title__A9SFITYR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_row__sub__1DU1XEEQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_float__sub__SWC77BUA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_list__rows__H1H7HI88 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__Q5HO7Q7B = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $mol_float_demo extends $mol_example_large {
		Head_content( ): $mol_paragraph
		Head_row( ): $mol_row
		Head( ): $mol_float
		Filler1( ): $mol_filler
		Filler2( ): $mol_filler
		Content( ): $mol_list
		Scroll( ): $mol_scroll
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_form_group extends $mol_view {
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	type $mol_attach__items__5XXZWTQR = $mol_type_enforce<
		ReturnType< $mol_form_demo['avatars'] >
		,
		ReturnType< $mol_attach['items'] >
	>
	type $mol_form_field__name__M74CB3UD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__4410WSC3 = $mol_type_enforce<
		ReturnType< $mol_form_demo['avatars_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__W5J82TY1 = $mol_type_enforce<
		ReturnType< $mol_form_demo['Avatars_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint__6EP5S93R = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__YTKT8MMN = $mol_type_enforce<
		ReturnType< $mol_form_demo['name_first'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__XAKATFR3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__12RPAJWA = $mol_type_enforce<
		ReturnType< $mol_form_demo['name_first_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__CLCNTEM4 = $mol_type_enforce<
		ReturnType< $mol_form_demo['Name_first_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint__9T1B2BXS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__96MQYTD9 = $mol_type_enforce<
		ReturnType< $mol_form_demo['name_nick'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__Z03CIDT8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__W9LEEOWZ = $mol_type_enforce<
		ReturnType< $mol_form_demo['name_nick_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__4YCHCD16 = $mol_type_enforce<
		ReturnType< $mol_form_demo['Name_nick_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__hint__NKXULH94 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__RM9CL6JK = $mol_type_enforce<
		ReturnType< $mol_form_demo['name_second'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__7P6QN00K = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__1JSZD7GU = $mol_type_enforce<
		ReturnType< $mol_form_demo['name_second_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__0I8NIEHV = $mol_type_enforce<
		ReturnType< $mol_form_demo['Name_second_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub__BV4O7XEJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_number__value__5XKNOO5N = $mol_type_enforce<
		ReturnType< $mol_form_demo['age'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name__5GMYASSC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__8UP030QZ = $mol_type_enforce<
		ReturnType< $mol_form_demo['age_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__S80OPG3U = $mol_type_enforce<
		ReturnType< $mol_form_demo['Age_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value__ZZCU2ER1 = $mol_type_enforce<
		ReturnType< $mol_form_demo['sex'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__S5TNXNE6 = $mol_type_enforce<
		ReturnType< $mol_form_demo['sex_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name__PVEPKEHN = $mol_type_enforce<
		ReturnType< $mol_form_demo['sex_label'] >
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__GGE54J2U = $mol_type_enforce<
		ReturnType< $mol_form_demo['sex_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__2KAJGX9A = $mol_type_enforce<
		ReturnType< $mol_form_demo['Sex_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_select__value__6Z2X2VQI = $mol_type_enforce<
		ReturnType< $mol_form_demo['color'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__ILRUYIHG = $mol_type_enforce<
		({ 
			'': string,
			'white': string,
			'yellow': string,
			'brown': string,
			'red': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_form_field__name__GEHIA56I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__OPZTEL38 = $mol_type_enforce<
		ReturnType< $mol_form_demo['color_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__411W6LY9 = $mol_type_enforce<
		ReturnType< $mol_form_demo['Color_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub__1DDYJCDH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_string__hint__UVMKUWWW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__TGJGMHQ0 = $mol_type_enforce<
		ReturnType< $mol_form_demo['mail'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__38UF7W2S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__M63VHKUM = $mol_type_enforce<
		ReturnType< $mol_form_demo['mail_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__KOBIEVSC = $mol_type_enforce<
		ReturnType< $mol_form_demo['Mail_control'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_button_major__title__T46TBHVV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click__4UGAWGDB = $mol_type_enforce<
		ReturnType< $mol_form_demo['signup'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__enabled__KOMLCBAS = $mol_type_enforce<
		ReturnType< $mol_form_demo['signup_allowed'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_status__message__GFSI6YEP = $mol_type_enforce<
		ReturnType< $mol_form_demo['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_form__body__EF2TUPKX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['body'] >
	>
	type $mol_form__submit__69GJ7JB7 = $mol_type_enforce<
		ReturnType< $mol_form_demo['signup'] >
		,
		ReturnType< $mol_form['submit'] >
	>
	type $mol_form__buttons__S6SA8QVC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['buttons'] >
	>
	export class $mol_form_demo extends $mol_example {
		avatars_bid( ): string
		avatars( next?: readonly(string)[] ): readonly(string)[]
		Avatars_control( ): $mol_attach
		Avatars_field( ): $mol_form_field
		name_first_bid( ): string
		name_first( next?: string ): string
		Name_first_control( ): $mol_string
		Name_first_field( ): $mol_form_field
		name_nick_bid( ): string
		name_nick( next?: string ): string
		Name_nick_control( ): $mol_string
		Name_nick_field( ): $mol_form_field
		name_second_bid( ): string
		name_second( next?: string ): string
		Name_second_control( ): $mol_string
		Name_second_field( ): $mol_form_field
		Names( ): $mol_form_group
		age_bid( ): string
		age( next?: number ): number
		Age_control( ): $mol_number
		Age_field( ): $mol_form_field
		sex_label( ): string
		sex_bid( ): string
		sex( next?: string ): string
		sex_options( ): ({ 
			'male': string,
			'intersex': string,
			'female': string,
		}) 
		Sex_control( ): $mol_switch
		Sex_field( ): $mol_form_field
		color_bid( ): string
		color( next?: string ): string
		Color_control( ): $mol_select
		Color_field( ): $mol_form_field
		Parameters( ): $mol_form_group
		mail_bid( ): string
		mail( next?: string ): string
		Mail_control( ): $mol_string
		Mail_field( ): $mol_form_field
		signup( next?: any ): any
		signup_allowed( ): ReturnType< ReturnType< $mol_form_demo['Form'] >['submit_allowed'] >
		Signup( ): $mol_button_major
		result( next?: string ): string
		Result( ): $mol_status
		Form( ): $mol_form
		title( ): string
		message( ): ({ 
			'required': string,
			'adult': string,
			'no_spaces': string,
			'need_more_letters': string,
			'need_at': string,
			'only_one_at': string,
			'no_tld': string,
			'dots_inside': string,
			'no_space_domain': string,
			'need_username': string,
		}) 
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_demo extends $.$mol_form_demo {
        name_first(next?: string): string;
        name_first_bid(): string;
        name_nick(next?: string): string;
        name_second(next?: string): string;
        name_second_bid(): string;
        mail(next?: string): string;
        mail_bid(): string;
        color(next?: string): string;
        sex(next?: string): string;
        sex_bid(): string;
        age(next?: number): number;
        age_bid(): string;
        signup(next?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_form_draft extends $mol_form {
		model( ): $mol_object2
		changed( ): boolean
		value_str( id: any, next?: string ): string
		value_bool( id: any, next?: boolean ): boolean
		value_number( id: any, next?: number ): number
		dictionary_bool( id: any, next?: Record<string, any> ): Record<string, any>
		list_string( id: any, next?: readonly(string)[] ): readonly(string)[]
		value_changed( id: any): boolean
		reset( next?: any ): any
	}
	
}

//# sourceMappingURL=draft.view.tree.d.ts.map
declare namespace $.$$ {
    type Primitive = string | number | boolean;
    type Value = readonly Primitive[] | Primitive | Record<string, boolean>;
    export class $mol_form_draft extends $.$mol_form_draft {
        list_string(field: string, next?: readonly string[] | null): string[];
        dictionary_bool(field: string, next?: Record<string, boolean> | null): Record<string, boolean>;
        value_str(field: string, next?: string | null): string;
        value_number(field: string, next?: number | null): number;
        value_bool(field: string, next?: boolean | null): boolean;
        model_pick(field: string, next?: Value | null): Value;
        state_pick(field: string, next?: Value | null): Value | null;
        value<T extends Value>(field: string, next?: T | null): T;
        value_changed(field: string): boolean;
        state(next?: Record<string, Value | null> | null): Record<string, Value | null>;
        changed(): boolean;
        submit_allowed(): boolean;
        reset(next?: unknown): void;
        submit(next?: Event): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_form_draft_demo_article extends $mol_object2 {
		title( next?: string ): string
		type( next?: string ): string
		adult( next?: boolean ): boolean
		content( next?: string ): string
		friends( next?: readonly(string)[] ): readonly(string)[]
		hobbies( next?: Record<string, any> ): Record<string, any>
	}
	
	type $mol_form_draft_demo_publish__P3926CFI = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['publish'] >[0]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['submit'] >[0]
	>
	type $mol_form_draft_demo_value_str__S6LW7YFZ = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['value_str'] >[0]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['value_str'] >[0]
	>
	type $mol_form_draft_demo_value_str__W1MGEKO7 = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['value_str'] >[1]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['value_str'] >[1]
	>
	type $mol_form_draft_demo_list_string__WSNKJR4G = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['list_string'] >[0]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['list_string'] >[0]
	>
	type $mol_form_draft_demo_list_string__CQTLJAZS = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['list_string'] >[1]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['list_string'] >[1]
	>
	type $mol_form_draft_demo_dictionary_bool__Q91R7MJQ = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['dictionary_bool'] >[0]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['dictionary_bool'] >[0]
	>
	type $mol_form_draft_demo_dictionary_bool__2OCC0LIH = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['dictionary_bool'] >[1]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['dictionary_bool'] >[1]
	>
	type $mol_form_draft_demo_reset__NK3P2YVF = $mol_type_enforce<
		Parameters< $mol_form_draft_demo['reset'] >[0]
		,
		Parameters< ReturnType< $mol_form_draft_demo['Form'] >['reset'] >[0]
	>
	type $mol_string__hint__C0RHV51Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__PVOJ4GDM = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['value_str'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__KHUC81AO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bids__VOEG43QJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['bids'] >
	>
	type $mol_form_field__Content__IO3MTIIO = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['Title'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value__G22T0EU7 = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['value_str'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__R2XEBLCM = $mol_type_enforce<
		({ 
			'article': string,
			'news': string,
			'question': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name__XM17EVUU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bids__85HQMGZK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['bids'] >
	>
	type $mol_form_field__Content__JUHPNXWY = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['Type'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value__J88KB70R = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['value_str'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__Y9KE4QDY = $mol_type_enforce<
		({ 
			'false': string,
			'true': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name__G17341AP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__27OHZD2O = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['Adult'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__hint__PYFP8UO0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__47JQNM3E = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['value_str'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name__KP2I4QRQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bids__NRMK4HR6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['bids'] >
	>
	type $mol_form_field__Content__LS07XGY5 = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['Content'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_check_list__dictionary__4X5IRHHB = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['dictionary_bool'] >
		,
		ReturnType< $mol_check_list['dictionary'] >
	>
	type $mol_check_list__options__DKB7CI89 = $mol_type_enforce<
		({ 
			'programming': string,
			'bikinkg': string,
			'fishing': string,
		}) 
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_form_field__name__8H6REFBT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__9CPLLR2A = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['Hobbies'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_select_list__dictionary__R9OZPWNT = $mol_type_enforce<
		({ 
			'jocker': string,
			'harley': string,
			'penguin': string,
			'riddler': string,
			'bane': string,
			'freeze': string,
			'clay': string,
			'mask': string,
		}) 
		,
		ReturnType< $mol_select_list['dictionary'] >
	>
	type $mol_select_list__value__MR46R3FM = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['list_string'] >
		,
		ReturnType< $mol_select_list['value'] >
	>
	type $mol_form_field__name__4J92VP41 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__MVXULRB3 = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['Friends'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub__GBETMNOC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_button_major__title__8NIZR39B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click__NHHZODTH = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['publish'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__enabled__J8E53RIC = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['publish_allowed'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_status__message__OMB71ODX = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_button_minor__title__W6RUD4F7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__N8GGGJT7 = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['reset'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled__FKCQISOB = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['changed'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_form_draft__model__33OQTVBK = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['model'] >
		,
		ReturnType< $mol_form_draft['model'] >
	>
	type $mol_form_draft__form_fields__IQS9Y923 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_draft['form_fields'] >
	>
	type $mol_form_draft__body__GKE3JJBF = $mol_type_enforce<
		ReturnType< $mol_form_draft_demo['form_body'] >
		,
		ReturnType< $mol_form_draft['body'] >
	>
	type $mol_form_draft__buttons__J4XPBY1G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_draft['buttons'] >
	>
	export class $mol_form_draft_demo extends $mol_example {
		model( ): $mol_form_draft_demo_article
		publish( next?: ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['submit'] > ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['submit'] >
		publish_allowed( ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['submit_allowed'] >
		value_str( id: any, next?: ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['value_str'] > ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['value_str'] >
		list_string( id: any, next?: ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['list_string'] > ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['list_string'] >
		dictionary_bool( id: any, next?: ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['dictionary_bool'] > ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['dictionary_bool'] >
		changed( ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['changed'] >
		reset( next?: ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['reset'] > ): ReturnType< ReturnType< $mol_form_draft_demo['Form'] >['reset'] >
		Title( ): $mol_string
		Title_field( ): $mol_form_field
		Type( ): $mol_switch
		Type_field( ): $mol_form_field
		Adult( ): $mol_switch
		Adult_field( ): $mol_form_field
		Content( ): $mol_textarea
		Content_field( ): $mol_form_field
		Hobbies( ): $mol_check_list
		Hobbies_field( ): $mol_form_field
		Friends( ): $mol_select_list
		Friends_field( ): $mol_form_field
		Config( ): $mol_form_group
		form_body( ): readonly(any)[]
		Publish( ): $mol_button_major
		result( next?: string ): string
		Result( ): $mol_status
		Reset( ): $mol_button_minor
		Form( ): $mol_form_draft
		title( ): string
		message_done( ): string
		bid_required( id: any): string
		bid_swearing( id: any): string
		bid_short( id: any): string
		bid_long( id: any): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_draft_demo extends $.$mol_form_draft_demo {
        form_body(): ($.$mol_form_field | $mol_form_group)[];
        bid_required(field: string): string;
        bid_short(field: string): string;
        bid_long(field: string): string;
        bid_swearing(field: string): string;
        result(next?: string): string;
        publish(): void;
    }
}

declare namespace $ {

	export class $mol_phone extends $mol_format {
		mask( id: any): string
		keyboard( ): string
	}
	
}

//# sourceMappingURL=phone.view.tree.d.ts.map
declare namespace $.$$ {
    const $mol_phone_formats: Record<string, string>;
    class $mol_phone extends $.$mol_phone {
        mask(val: string): string;
    }
}

declare namespace $ {

	type $mol_format__mask__W8H8Q2XE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__value__SXRTBBCP = $mol_type_enforce<
		ReturnType< $mol_format_demo['ip'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_card__status__KKP0N2D8 = $mol_type_enforce<
		ReturnType< $mol_format_demo['ip'] >
		,
		ReturnType< $mol_card['status'] >
	>
	type $mol_card__Content__9R4THEDK = $mol_type_enforce<
		ReturnType< $mol_format_demo['Ip'] >
		,
		ReturnType< $mol_card['Content'] >
	>
	type $mol_phone__value__T1YD4DDZ = $mol_type_enforce<
		ReturnType< $mol_format_demo['phone'] >
		,
		ReturnType< $mol_phone['value'] >
	>
	type $mol_card__status__LURX9JWX = $mol_type_enforce<
		ReturnType< $mol_format_demo['phone'] >
		,
		ReturnType< $mol_card['status'] >
	>
	type $mol_card__Content__JU34DBYS = $mol_type_enforce<
		ReturnType< $mol_format_demo['Phone'] >
		,
		ReturnType< $mol_card['Content'] >
	>
	type $mol_format__mask__XTY8W76Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__value__GJI19M6I = $mol_type_enforce<
		ReturnType< $mol_format_demo['card'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_card__status__CP1I1MUF = $mol_type_enforce<
		ReturnType< $mol_format_demo['card'] >
		,
		ReturnType< $mol_card['status'] >
	>
	type $mol_card__Content__EAEYSLDO = $mol_type_enforce<
		ReturnType< $mol_format_demo['Card'] >
		,
		ReturnType< $mol_card['Content'] >
	>
	type $mol_format__mask__DGIFAST2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__value__VO8ZI8AN = $mol_type_enforce<
		ReturnType< $mol_format_demo['moment'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_card__status__WCFZYXYP = $mol_type_enforce<
		ReturnType< $mol_format_demo['moment'] >
		,
		ReturnType< $mol_card['status'] >
	>
	type $mol_card__Content__HQNL199P = $mol_type_enforce<
		ReturnType< $mol_format_demo['Moment'] >
		,
		ReturnType< $mol_card['Content'] >
	>
	export class $mol_format_demo extends $mol_example_small {
		ip( next?: string ): string
		Ip( ): $mol_format
		Ip_card( ): $mol_card
		phone( next?: string ): string
		Phone( ): $mol_phone
		Phone_card( ): $mol_card
		card( next?: string ): string
		Card( ): $mol_format
		Card_card( ): $mol_card
		moment( next?: string ): string
		Moment( ): $mol_format
		Moment_card( ): $mol_card
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_frame__title__86I1T2PA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri__J1S3S02T = $mol_type_enforce<
		string
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_frame_demo extends $mol_example_large {
		Frame( ): $mol_frame
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_gallery__items__3UGGPSVL = $mol_type_enforce<
		ReturnType< $mol_gallery_demo['items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_avatar__id__WODQFVU0 = $mol_type_enforce<
		ReturnType< $mol_gallery_demo['item_title'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_stack__sub__LCGJRAHX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_stack['sub'] >
	>
	export class $mol_gallery_demo extends $mol_example {
		items( ): readonly(any)[]
		App( ): $mol_gallery
		item_title( id: any): string
		Item_image( id: any): $mol_avatar
		title( ): string
		count( ): number
		sub( ): readonly(any)[]
		Item( id: any): $mol_stack
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_gallery_demo extends $.$mol_gallery_demo {
        items(): $mol_stack[];
        item_title(id: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_html_view_heading__level__WNN8AA66 = $mol_type_enforce<
		ReturnType< $mol_html_view['heading_level'] >
		,
		ReturnType< $mol_html_view_heading['level'] >
	>
	type $mol_html_view_heading__sub__JRHEEU82 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_html_view_heading['sub'] >
	>
	type $mol_paragraph__sub__TXRQJMY4 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_list__rows__435PHQVW = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows__JA8BKP3A = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paragraph__sub__T1G7U2U9 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__4PCN84PR = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__K04WPXCF = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__0XFSESF9 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_view__sub__FY1FOOG4 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__DO7XWS68 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__sub__3CQVWKT5 = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_link_iconed__uri__VXVKBOMJ = $mol_type_enforce<
		ReturnType< $mol_html_view['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__0ZHYVPDT = $mol_type_enforce<
		ReturnType< $mol_html_view['content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_image__uri__IMCL572M = $mol_type_enforce<
		ReturnType< $mol_html_view['image_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_paragraph__sub__0GZYCIL3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_dimmer__needle__3D84PN8N = $mol_type_enforce<
		ReturnType< $mol_html_view['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__DXNJZ4QZ = $mol_type_enforce<
		ReturnType< $mol_html_view['text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	export class $mol_html_view extends $mol_list {
		heading_level( id: any): number
		content( id: any): readonly(any)[]
		link_uri( id: any): string
		image_uri( id: any): string
		highlight( ): string
		text( id: any): string
		html( ): string
		dom( ): any
		safe_link( id: any): string
		views( id: any): readonly(any)[]
		xss_uri( ): string
		Heading( id: any): $mol_html_view_heading
		Paragraph( id: any): $mol_paragraph
		List( id: any): $mol_list
		Quote( id: any): $mol_list
		Strong( id: any): $mol_paragraph
		Emphasis( id: any): $mol_paragraph
		Deleted( id: any): $mol_paragraph
		Inserted( id: any): $mol_paragraph
		Subscript( id: any): $mol_view
		Superscript( id: any): $mol_view
		Code( id: any): $mol_paragraph
		Link( id: any): $mol_link_iconed
		Image( id: any): $mol_image
		Break( id: any): $mol_paragraph
		Text( id: any): $mol_dimmer
	}
	
	export class $mol_html_view_heading extends $mol_paragraph {
		level( ): number
		attr( ): ({ 
			'mol_html_view_heading': ReturnType< $mol_html_view_heading['level'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $.$$ {
    class $mol_html_view extends $.$mol_html_view {
        dom(): HTMLElement;
        sub(): $mol_view[];
        content(node: Node): $mol_view[];
        views(node: Node): $mol_view[] | $.$mol_image[] | $.$mol_paragraph[] | $.$mol_link_iconed[];
        text(node: Node): string;
        safe_link(uri: string): string;
        link_uri(node: HTMLAnchorElement): string;
        image_uri(node: HTMLImageElement): string;
        heading_level(node: HTMLHeadingElement): number;
    }
}

declare namespace $ {

	type $mol_html_view__html__FX1CMX4E = $mol_type_enforce<
		string
		,
		ReturnType< $mol_html_view['html'] >
	>
	export class $mol_html_view_demo extends $mol_example {
		Html( ): $mol_html_view
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_width__BWKP60GK = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_view__minimal_height__JN18QYPG = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__K2WCCF63 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_width__GT068Q91 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_view__minimal_height__2GQ0GXDF = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__IXG19HMB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_infinite extends $mol_list {
		before_load( id: any): any
		after_load( id: any): any
		before( id: any): readonly(any)[]
		after( id: any): readonly(any)[]
		row_ids( next?: readonly(any)[] ): readonly(any)[]
		render_over( ): number
		Row( id: any): $mol_view
		Before( id: any): $mol_view
		After( id: any): $mol_view
	}
	
}

//# sourceMappingURL=infinite.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_infinite extends $.$mol_infinite {
        before_load(anchor: any): void;
        after_load(anchor: any): void;
        rows(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        [Symbol.toPrimitive](hint: 'number' | 'string' | 'default'): string | number;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}

declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rub extends $mol_unit_money {
        postfix(): string;
    }
}

declare namespace $ {
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_person_avatar(size?: number): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
    function $mol_stub_message(max_length: number): string;
}

declare namespace $ {

	type $mol_avatar__id__E6SO236U = $mol_type_enforce<
		ReturnType< $mol_infinite_demo['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_paragraph__title__KC8F8U2O = $mol_type_enforce<
		ReturnType< $mol_infinite_demo['name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title__2D9QTK8C = $mol_type_enforce<
		ReturnType< $mol_infinite_demo['city'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__rows__WC95AW6A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_row__sub__WQ2IFVRX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_infinite__before__67QO9VZ6 = $mol_type_enforce<
		ReturnType< $mol_infinite_demo['before'] >
		,
		ReturnType< $mol_infinite['before'] >
	>
	type $mol_infinite__after__Y9HDGJO1 = $mol_type_enforce<
		ReturnType< $mol_infinite_demo['after'] >
		,
		ReturnType< $mol_infinite['after'] >
	>
	type $mol_infinite__Row__AM03WFN8 = $mol_type_enforce<
		ReturnType< $mol_infinite_demo['Item'] >
		,
		ReturnType< $mol_infinite['Row'] >
	>
	type $mol_scroll__sub__LAFPYJL8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $mol_infinite_demo extends $mol_example_large {
		before( id: any): readonly(any)[]
		after( id: any): readonly(any)[]
		id( id: any): string
		Photo( id: any): $mol_avatar
		name( id: any): string
		Name( id: any): $mol_paragraph
		city( id: any): string
		City( id: any): $mol_paragraph
		Info( id: any): $mol_list
		Item( id: any): $mol_row
		List( ): $mol_infinite
		Scroll( ): $mol_scroll
		title( ): string
		chunk_size( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_infinite_demo extends $.$mol_infinite_demo {
        after(anchor_id: number | null): number[];
        id(index: number): string;
        name(index: number): string;
        city(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_labeler__title__VU71INWG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__LLHBNWYY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint__ZBWBGWNR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__FQNAP05U = $mol_type_enforce<
		ReturnType< $mol_labeler_demo['user_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title__O23S9DCI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__81DADL22 = $mol_type_enforce<
		ReturnType< $mol_labeler_demo['Name_control'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	export class $mol_labeler_demo extends $mol_example_small {
		Provider( ): $mol_labeler
		user_name( next?: string ): string
		Name_control( ): $mol_string
		Name( ): $mol_labeler
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    const enum $mol_layout_break {
        taboo = "taboo",
        allow = "allow",
        force = "force"
    }
}

declare namespace $ {
    class $mol_layout extends $mol_object {
        ortho: null | $mol_layout;
        pos: number;
        size: number;
        min: number;
        max: number;
        base: number;
        break_before(): $mol_layout_break;
        break_after(): $mol_layout_break;
        before(): number;
        after(): number;
        padding(): number;
        limit(): number;
        grow(): number;
        shrink(): number;
        up(): void;
        down(): void;
        fresh(): void;
    }
}

declare namespace $ {

	export class $mol_canvas extends $mol_view {
		width( ): number
		height( ): number
		dom_name( ): string
		context( ): CanvasRenderingContext2D
		field( ): ({ 
			'width': ReturnType< $mol_canvas['width'] >,
			'height': ReturnType< $mol_canvas['height'] >,
		})  & ReturnType< $mol_view['field'] >
		paint( ): any
	}
	
}

//# sourceMappingURL=canvas.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_canvas extends $.$mol_canvas {
        context(): CanvasRenderingContext2D;
        width(): number;
        height(): number;
        render(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_layout_tree extends $mol_layout {
        kids: $mol_layout[];
        ortho: null | $mol_layout_tree;
    }
}

declare namespace $ {
    class $mol_layout_stack extends $mol_layout_tree {
        up(): void;
        down(): void;
    }
}

declare namespace $ {
    class $mol_layout_flex extends $mol_layout_tree {
        up(): void;
        down(): void;
    }
}

declare namespace $ {
    class $mol_layout_col extends $mol_layout_stack {
        ortho: $mol_layout_flex;
        down(): void;
    }
}

declare namespace $ {
    class $mol_layout_row extends $mol_layout_flex {
        ortho: $mol_layout_stack;
        down(): void;
    }
}

declare namespace $ {
    class $mol_layout_wrap extends $mol_layout_flex {
        ortho: $mol_layout_flex;
        down(): void;
    }
}

declare namespace $ {

	type $mol_canvas__paint__QNCV5NQU = $mol_type_enforce<
		ReturnType< $mol_layout_demo['paint'] >
		,
		ReturnType< $mol_canvas['paint'] >
	>
	export class $mol_layout_demo extends $mol_example_large {
		paint( ): any
		context( ): ReturnType< ReturnType< $mol_layout_demo['Sample'] >['context'] >
		width( ): ReturnType< ReturnType< $mol_layout_demo['Sample'] >['width'] >
		height( ): ReturnType< ReturnType< $mol_layout_demo['Sample'] >['height'] >
		Sample( ): $mol_canvas
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_layout_demo extends $.$mol_layout_demo {
        font(): string;
        widgets_left(): {
            layout: $mol_layout;
            text: string;
            font: string;
        }[];
        widgets_right(): {
            layout: $mol_layout;
            text: string;
            font: string;
        }[];
        layout(): $mol_layout_col;
        paint(): void;
    }
}

declare namespace $ {

	type $mol_link__sub__3VM1SSQS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__UOZO3DAB = $mol_type_enforce<
		({ 
			'color': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__3GNVLDAM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__QNQSZH1M = $mol_type_enforce<
		({ 
			'color': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__Y0UCNK05 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__HM0L74Y9 = $mol_type_enforce<
		({ 
			'color': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__80MRN6Z5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__uri__PO6GOT25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__8BPQUCZS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__hint__2IGGJNO7 = $mol_type_enforce<
		ReturnType< $mol_link_demo['external_hint'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__uri__UIENRFR8 = $mol_type_enforce<
		ReturnType< $mol_link_demo['object_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__file_name__A26Q4OSF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__sub__P7KAN9KN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows__2L1TE7K4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_link_demo extends $mol_example_small {
		this_label( ): string
		This( ): $mol_link
		red_label( ): string
		Red( ): $mol_link
		green_label( ): string
		Green( ): $mol_link
		blue_label( ): string
		Blue( ): $mol_link
		external_hint( ): string
		External( ): $mol_link
		object_uri( ): string
		Download_icon( ): $mol_icon_download
		download_label( ): string
		Download( ): $mol_link
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_demo extends $.$mol_link_demo {
        object_uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_string__value__E8RJH5R5 = $mol_type_enforce<
		ReturnType< $mol_link_iconed_demo['uri'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_link_iconed__uri__KU9DGCT6 = $mol_type_enforce<
		ReturnType< $mol_link_iconed_demo['uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_list__rows__H2ODLI6C = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_link_iconed_demo extends $mol_example_small {
		uri( next?: string ): string
		Input( ): $mol_string
		Output( ): $mol_link_iconed
		Blocks( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_lazy extends $mol_link {
		generate( next?: any ): any
		uri( next?: string ): string
		uri_generated( ): string
		current( ): boolean
		event( ): ({ 
			mousedown( next?: ReturnType< $mol_link_lazy['generate'] > ): ReturnType< $mol_link_lazy['generate'] >,
		})  & ReturnType< $mol_link['event'] >
	}
	
}

//# sourceMappingURL=lazy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_lazy extends $.$mol_link_lazy {
        generate(event?: Event): void;
    }
}

declare namespace $ {

	type $mol_link_lazy__hint__CTZJN4GK = $mol_type_enforce<
		ReturnType< $mol_link_lazy_demo['title'] >
		,
		ReturnType< $mol_link_lazy['hint'] >
	>
	type $mol_link_lazy__uri_generated__MI5TC5RD = $mol_type_enforce<
		ReturnType< $mol_link_lazy_demo['uri_generated'] >
		,
		ReturnType< $mol_link_lazy['uri_generated'] >
	>
	type $mol_link_lazy__file_name__KD06XSLL = $mol_type_enforce<
		ReturnType< $mol_link_lazy_demo['download_file'] >
		,
		ReturnType< $mol_link_lazy['file_name'] >
	>
	type $mol_link_lazy__sub__7RL1VSOV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_lazy['sub'] >
	>
	export class $mol_link_lazy_demo extends $mol_example_small {
		uri_generated( ): string
		download_file( ): string
		Download_icon( ): $mol_icon_download
		download_label( ): string
		Download( ): $mol_link_lazy
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_lazy_demo extends $.$mol_link_lazy_demo {
        uri_generated(): string;
    }
}

declare namespace $ {

	type $mol_string__value__K1CVNTF2 = $mol_type_enforce<
		ReturnType< $mol_link_source_demo['uri'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_link_source__uri__Y1YXHSVV = $mol_type_enforce<
		ReturnType< $mol_link_source_demo['uri'] >
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_list__rows__8Z0N0M36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_link_source_demo extends $mol_example_small {
		uri( next?: string ): string
		Input( ): $mol_string
		Output( ): $mol_link_source
		Blocks( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_number__value__GUN2OTYH = $mol_type_enforce<
		ReturnType< $mol_list_demo['items_count'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__TQ1CMIP3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_number__value_max__LOKKMRMX = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__9OCYNLRY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__E6NBZ8OT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_link__title__WCH1P5MC = $mol_type_enforce<
		ReturnType< $mol_list_demo['item_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_paragraph__title__CBUF5BC8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__rows__LK4DB6K0 = $mol_type_enforce<
		ReturnType< $mol_list_demo['list_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__Empty__HQIQVR29 = $mol_type_enforce<
		ReturnType< $mol_list_demo['List_empty'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	export class $mol_list_demo extends $mol_example_small {
		items_count( next?: number ): number
		Items_count( ): $mol_number
		Items_count_label( ): $mol_labeler
		item_title( id: any): string
		Item( id: any): $mol_link
		list_items( ): readonly(any)[]
		List_empty( ): $mol_paragraph
		Items( ): $mol_list
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list_demo extends $.$mol_list_demo {
        item_title(id: number): string;
        list_items(): $.$mol_link[];
    }
}

declare namespace $ {
    const $mol_colors: {
        readonly aliceblue: "#f0f8ff";
        readonly antiquewhite: "#faebd7";
        readonly aqua: "#00ffff";
        readonly aquamarine: "#7fffd4";
        readonly azure: "#f0ffff";
        readonly beige: "#f5f5dc";
        readonly bisque: "#ffe4c4";
        readonly black: "#000000";
        readonly blanchedalmond: "#ffebcd";
        readonly blue: "#0000ff";
        readonly blueviolet: "#8a2be2";
        readonly brown: "#a52a2a";
        readonly burlywood: "#deb887";
        readonly cadetblue: "#5f9ea0";
        readonly chartreuse: "#7fff00";
        readonly chocolate: "#d2691e";
        readonly coral: "#ff7f50";
        readonly cornflowerblue: "#6495ed";
        readonly cornsilk: "#fff8dc";
        readonly crimson: "#dc143c";
        readonly cyan: "#00ffff";
        readonly darkblue: "#00008b";
        readonly darkcyan: "#008b8b";
        readonly darkgoldenrod: "#b8860b";
        readonly darkgray: "#a9a9a9";
        readonly darkgreen: "#006400";
        readonly darkgrey: "#a9a9a9";
        readonly darkkhaki: "#bdb76b";
        readonly darkmagenta: "#8b008b";
        readonly darkolivegreen: "#556b2f";
        readonly darkorange: "#ff8c00";
        readonly darkorchid: "#9932cc";
        readonly darkred: "#8b0000";
        readonly darksalmon: "#e9967a";
        readonly darkseagreen: "#8fbc8f";
        readonly darkslateblue: "#483d8b";
        readonly darkslategrey: "#2f4f4f";
        readonly darkturquoise: "#00ced1";
        readonly darkviolet: "#9400d3";
        readonly deeppink: "#ff1493";
        readonly deepskyblue: "#00bfff";
        readonly dimgray: "#696969";
        readonly dimgrey: "#696969";
        readonly dodgerblue: "#1e90ff";
        readonly firebrick: "#b22222";
        readonly floralwhite: "#fffaf0";
        readonly forestgreen: "#228b22";
        readonly fuchsia: "#ff00ff";
        readonly gainsboro: "#dcdcdc";
        readonly ghostwhite: "#f8f8ff";
        readonly gold: "#ffd700";
        readonly goldenrod: "#daa520";
        readonly gray: "#808080";
        readonly green: "#008000";
        readonly greenyellow: "#adff2f";
        readonly grey: "#808080";
        readonly honeydew: "#f0fff0";
        readonly hotpink: "#ff69b4";
        readonly indianred: "#cd5c5c";
        readonly indigo: "#4b0082";
        readonly ivory: "#fffff0";
        readonly khaki: "#f0e68c";
        readonly lavender: "#e6e6fa";
        readonly lavenderblush: "#fff0f5";
        readonly lawngreen: "#7cfc00";
        readonly lemonchiffon: "#fffacd";
        readonly lightblue: "#add8e6";
        readonly lightcoral: "#f08080";
        readonly lightcyan: "#e0ffff";
        readonly lightgoldenrodyellow: "#fafad2";
        readonly lightgray: "#d3d3d3";
        readonly lightgreen: "#90ee90";
        readonly lightgrey: "#d3d3d3";
        readonly lightpink: "#ffb6c1";
        readonly lightsalmon: "#ffa07a";
        readonly lightseagreen: "#20b2aa";
        readonly lightskyblue: "#87cefa";
        readonly lightslategray: "#778899";
        readonly lightslategrey: "#778899";
        readonly lightsteelblue: "#b0c4de";
        readonly lightyellow: "#ffffe0";
        readonly lime: "#00ff00";
        readonly limegreen: "#32cd32";
        readonly linen: "#faf0e6";
        readonly magenta: "#ff00ff";
        readonly maroon: "#800000";
        readonly mediumaquamarine: "#66cdaa";
        readonly mediumblue: "#0000cd";
        readonly mediumorchid: "#ba55d3";
        readonly mediumpurple: "#9370db";
        readonly mediumseagreen: "#3cb371";
        readonly mediumslateblue: "#7b68ee";
        readonly mediumspringgreen: "#00fa9a";
        readonly mediumturquoise: "#48d1cc";
        readonly mediumvioletred: "#c71585";
        readonly midnightblue: "#191970";
        readonly mintcream: "#f5fffa";
        readonly mistyrose: "#ffe4e1";
        readonly moccasin: "#ffe4b5";
        readonly navajowhite: "#ffdead";
        readonly navy: "#000080";
        readonly oldlace: "#fdf5e6";
        readonly olive: "#808000";
        readonly olivedrab: "#6b8e23";
        readonly orange: "#ffa500";
        readonly orangered: "#ff4500";
        readonly orchid: "#da70d6";
        readonly palegoldenrod: "#eee8aa";
        readonly palegreen: "#98fb98";
        readonly paleturquoise: "#afeeee";
        readonly palevioletred: "#db7093";
        readonly papayawhip: "#ffefd5";
        readonly peachpuff: "#ffdab9";
        readonly peru: "#cd853f";
        readonly pink: "#ffc0cb";
        readonly plum: "#dda0dd";
        readonly powderblue: "#b0e0e6";
        readonly purple: "#800080";
        readonly rebeccapurple: "#663399";
        readonly red: "#ff0000";
        readonly rosybrown: "#bc8f8f";
        readonly royalblue: "#4169e1";
        readonly saddlebrown: "#8b4513";
        readonly salmon: "#fa8072";
        readonly sandybrown: "#f4a460";
        readonly seagreen: "#2e8b57";
        readonly seashell: "#fff5ee";
        readonly sienna: "#a0522d";
        readonly silver: "#c0c0c0";
        readonly skyblue: "#87ceeb";
        readonly slateblue: "#6a5acd";
        readonly slategray: "#708090";
        readonly slategrey: "#708090";
        readonly snow: "#fffafa";
        readonly springgreen: "#00ff7f";
        readonly steelblue: "#4682b4";
        readonly tan: "#d2b48c";
        readonly teal: "#008080";
        readonly thistle: "#d8bfd8";
        readonly tomato: "#ff6347";
        readonly turquoise: "#40e0d0";
        readonly violet: "#ee82ee";
        readonly wheat: "#f5deb3";
        readonly white: "#ffffff";
        readonly whitesmoke: "#f5f5f5";
        readonly yellow: "#ffff00";
        readonly yellowgreen: "#9acd32";
    };
}

declare namespace $ {

	type $mol_check_group__checks__GYAFEHTL = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['check_list'] >
		,
		ReturnType< $mol_check_group['checks'] >
	>
	type $mol_check_group__title__HGE113WJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_group['title'] >
	>
	type $mol_row__sub__0UQE4IT2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_check_box__title__EJWQ1A1H = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_id'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__JI44VVNC = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_labeler__title__KCV2Y0M8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__J24RV2DG = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['Id'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_link_iconed__uri__H92Y500M = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__TJ1OIQOI = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_title'] >
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_labeler__title__QMMW2YX1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__GV4JOAW2 = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['Title'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__Q8R6NVBP = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_color'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options__M4AT8JS4 = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['colors'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_labeler__title__8OY5GSAD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__4OBBXJJT = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['Color'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_switch__value__PXKGCNQ9 = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_status'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__P768VH8G = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['status_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__GYM8G41X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__0RGIP5TP = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['Status'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_number__value__2CTAUYVM = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_quantity'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title__G60V1I0X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__8PXHR3UF = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['Quantity'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_date__value_moment__I294UQYX = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_moment'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_labeler__title__UR1LH65E = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__GRZTWUUL = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['Date'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_row__minimal_height__ER616CZ1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_row['minimal_height'] >
	>
	type $mol_row__minimal_width__YHEY710C = $mol_type_enforce<
		number
		,
		ReturnType< $mol_row['minimal_width'] >
	>
	type $mol_row__sub__1U40Y84B = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['row_content'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows__ZSUXD7SZ = $mol_type_enforce<
		ReturnType< $mol_list_demo_table['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_list_demo_table extends $mol_example {
		check_list( ): readonly($mol_check)[]
		Check( ): $mol_check_group
		Head( ): $mol_row
		row_id( id: any, next?: string ): string
		row_checked( id: any, next?: boolean ): boolean
		Id( id: any): $mol_check_box
		Id_labeler( id: any): $mol_labeler
		row_uri( id: any): string
		row_title( id: any): string
		Title( id: any): $mol_link_iconed
		Title_labeler( id: any): $mol_labeler
		row_color( id: any, next?: string ): string
		colors( ): readonly(any)[]
		Color( id: any): $mol_select
		Color_labeler( id: any): $mol_labeler
		row_status( id: any, next?: string ): string
		status_options( ): ({ 
			'minor': string,
			'major': string,
			'critical': string,
		}) 
		Status( id: any): $mol_switch
		Status_labeler( id: any): $mol_labeler
		row_quantity( id: any, next?: number ): number
		Quantity( id: any): $mol_number
		Quantity_labeler( id: any): $mol_labeler
		row_moment( id: any, next?: $mol_time_moment ): $mol_time_moment
		Date( id: any): $mol_date
		Date_labeler( id: any): $mol_labeler
		row_content( id: any): readonly(any)[]
		Row( id: any): $mol_row
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		title( ): string
		count( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=table.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list_demo_table extends $.$mol_list_demo_table {
        rows(): $mol_row[];
        check_list(): $mol_check_box[];
        row_id(id: number): string;
        row_title(id: number): string;
        row_quantity(id: number, next?: number): number;
        row_status(id: number, next?: string): string;
        row_uri(id: number): string;
        row_moment(id: number, next?: $mol_time_moment): $mol_time_moment;
        colors(): string[];
        row_color(id: number, next?: string): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_list__rows__NSCK7XP9 = $mol_type_enforce<
		ReturnType< $mol_list_demo_tree['root_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paragraph__sub__MSYHT5GQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_list__rows__1ZZKFIIM = $mol_type_enforce<
		ReturnType< $mol_list_demo_tree['row_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_expander__label__JU3915E5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__expanded__2VU6I2KN = $mol_type_enforce<
		ReturnType< $mol_list_demo_tree['row_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__expandable__0G8NUYWY = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_expander['expandable'] >
	>
	type $mol_expander__Content__WCF2NHXW = $mol_type_enforce<
		ReturnType< $mol_list_demo_tree['Row_content'] >
		,
		ReturnType< $mol_expander['Content'] >
	>
	export class $mol_list_demo_tree extends $mol_example_large {
		root_rows( ): readonly(any)[]
		Content( ): $mol_list
		row_title( id: any): string
		Row_title( id: any): $mol_paragraph
		row_expanded( id: any, next?: boolean ): boolean
		row_content( id: any): readonly(any)[]
		Row_content( id: any): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		Row( id: any): $mol_expander
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=tree.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list_demo_tree extends $.$mol_list_demo_tree {
        root_rows(): $.$mol_expander[];
        row_title(id: number[]): string;
        row_content(id: number[]): $.$mol_expander[];
        row_expanded(id: number[], next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $mol_geo_search_attribution: string;
    function $mol_geo_search({ query, count }: {
        query: string;
        count?: number;
    }): {
        coord: $mol_vector_2d<number>;
        box: $mol_vector_2d<$mol_vector_range<number>>;
    }[];
}

declare namespace $ {

	type $mol_vector_range__PA83Q6CH = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__BVMH950R = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__9TYF44G4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__SZZJ000I = $mol_type_enforce<
		[ ReturnType< $mol_map_yandex_mark['box_lat'] >, ReturnType< $mol_map_yandex_mark['box_lon'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_map_yandex_mark extends $mol_object {
		box_lat( ): $mol_vector_range<number>
		box_lon( ): $mol_vector_range<number>
		address( ): string
		pos( ): $mol_vector_2d<number>
		box( ): $mol_vector_2d<$mol_vector_range<number>>
		hint( ): string
		title( ): ReturnType< $mol_map_yandex_mark['address'] >
		content( ): string
		object( ): any
	}
	
}

//# sourceMappingURL=mark.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
        object(): any;
        found(): {
            coord: $mol_vector_2d<number>;
            box: $mol_vector_2d<$mol_vector_range<number>>;
        };
        pos(): $mol_vector_2d<number>;
        box(): $mol_vector_2d<$mol_vector_range<number>>;
    }
}

declare namespace $ {

	export class $mol_map_yandex extends $mol_view {
		zoom( next?: number ): number
		center( next?: readonly(any)[] ): readonly(any)[]
		objects( ): readonly($mol_map_yandex_mark)[]
	}
	
}

//# sourceMappingURL=yandex.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_map_yandex extends $.$mol_map_yandex {
        static api_key(): string;
        static api(): any;
        wait_ready(ymaps: any): Promise<unknown>;
        api(next?: any): any;
        update(event?: any): void;
        bounds_updated(): boolean;
        center(next?: readonly [number, number]): $mol_vector_2d<number> | readonly [number, number];
        render(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_map_yandex_mark__title__DCSIC0S3 = $mol_type_enforce<
		ReturnType< $mol_map_yandex_demo['place_title'] >
		,
		ReturnType< $mol_map_yandex_mark['title'] >
	>
	type $mol_map_yandex_mark__address__N9YW3TXW = $mol_type_enforce<
		ReturnType< $mol_map_yandex_demo['place_addres'] >
		,
		ReturnType< $mol_map_yandex_mark['address'] >
	>
	type $mol_map_yandex_mark__content__M9BBS7CG = $mol_type_enforce<
		ReturnType< $mol_map_yandex_demo['place_content'] >
		,
		ReturnType< $mol_map_yandex_mark['content'] >
	>
	type $mol_map_yandex__objects__1Y197PO8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_map_yandex['objects'] >
	>
	export class $mol_map_yandex_demo extends $mol_example_large {
		place_title( ): string
		place_addres( ): string
		place_content( ): string
		Place( ): $mol_map_yandex_mark
		Map( ): $mol_map_yandex
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    type $mol_type_immutable_deep<Val> = {
        readonly [field in keyof Val]: $mol_type_immutable_deep<Val[field]>;
    };
}

declare namespace $ {
    type $mol_mutable_wrapper<Value> = {
        (patch?: (next: $mol_type_immutable_deep<Value>) => $mol_type_immutable_deep<Value>): $mol_type_immutable_deep<Value>;
    } & {
        [Field in keyof Value]: $mol_mutable_wrapper<Value[Field]>;
    };
    function $mol_mutable<Value>(input: Value, update?: (next: Value) => Value): $mol_mutable_wrapper<Value>;
}

declare namespace $ {

	export class $mol_mutable_demo extends $mol_example_code {
		code( next?: string ): string
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_marked_app extends $.$hyoo_marked_app {
        preview(next?: string): string;
        pages(): $mol_page[];
        html(): string;
        marked(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link_source__uri__TNJNBXOV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_switch__value__0MAVTHJH = $mol_type_enforce<
		ReturnType< $hyoo_marked_app['preview'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__1PR9UD9G = $mol_type_enforce<
		({ 
			'html': string,
			'view': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_textarea__value__V37EXWJE = $mol_type_enforce<
		ReturnType< $hyoo_marked_app['marked'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_page__title__XFRR17L6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__JZK1Y292 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__KO3GUS6M = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_text_code__sidebar_showed__BHM594JW = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__text__ETYFTZ0Q = $mol_type_enforce<
		ReturnType< $hyoo_marked_app['html'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_page__title__5XIN4BC3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__EOW4XIU1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__VPNQQ2GL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_text__text__LPUK2DDX = $mol_type_enforce<
		ReturnType< $hyoo_marked_app['marked'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_page__title__ER128HM5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__2D50M2L3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__X68DRQUO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_link__sub__S28XYFAU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__N1RV7SKK = $mol_type_enforce<
		({ 
			'preview': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	export class $hyoo_marked_app extends $mol_book2 {
		Theme( ): $mol_theme_auto
		Lights( ): $mol_lights_toggle
		Source( ): $mol_link_source
		preview( next?: string ): string
		Preview( ): $mol_switch
		marked( next?: string ): string
		Marked_text( ): $mol_textarea
		Marked( ): $mol_page
		html( ): string
		Html_text( ): $mol_text_code
		Html( ): $mol_page
		View_text( ): $mol_text
		View( ): $mol_page
		Preview_close_icon( ): $mol_icon_close
		plugins( ): readonly(any)[]
		pages( ): readonly(any)[]
		Preview_close( ): $mol_link
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $ {

	export class $hyoo_marked_demo extends $mol_example_large {
		Sandbox( ): $hyoo_marked_app
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    type $hyoo_harp_query<Field extends string = string> = {
        [field in Field]: $hyoo_harp_query<never>;
    } & {
        '+'?: boolean;
        '='?: any[][];
        '!='?: any[][];
    };
}

declare namespace $ {
    function $hyoo_harp_from_string(uri: string): $hyoo_harp_query;
}

declare namespace $ {
    function $hyoo_harp_rate(query: $hyoo_harp_query<any>): number;
}

declare namespace $.$$ {
    class $hyoo_harp_app extends $.$hyoo_harp_app {
        uri(next?: string): string;
        json(): $hyoo_harp_query<string>;
        rate(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link_source__uri__IQKHSTM4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_speck__value__2RDK4Y7O = $mol_type_enforce<
		ReturnType< $hyoo_harp_app['rate'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_textarea__hint__ZNAHI9UO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__OY4FOQBI = $mol_type_enforce<
		ReturnType< $hyoo_harp_app['uri'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_dump_value__value__ET53JCI3 = $mol_type_enforce<
		ReturnType< $hyoo_harp_app['json'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_list__rows__GF9D736F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_harp_app extends $mol_page {
		Theme( ): $mol_theme_auto
		Source( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		rate( ): number
		Rate( ): $mol_speck
		uri( next?: string ): string
		Uri( ): $mol_textarea
		json( next?: any ): any
		Json( ): $mol_dump_value
		Content( ): $mol_list
		title( ): string
		plugins( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $ {

	type $hyoo_harp_app__Lights__YT8PEXGT = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_harp_app['Lights'] >
	>
	export class $hyoo_harp_demo extends $mol_example_large {
		title( ): ReturnType< ReturnType< $hyoo_harp_demo['Sandbox'] >['title'] >
		Sandbox( ): $hyoo_harp_app
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_nav__keys_x__55U5OSVW = $mol_type_enforce<
		ReturnType< $mol_nav_demo['tab_list'] >
		,
		ReturnType< $mol_nav['keys_x'] >
	>
	type $mol_nav__current_x__QRKT2POM = $mol_type_enforce<
		ReturnType< $mol_nav_demo['tab_current'] >
		,
		ReturnType< $mol_nav['current_x'] >
	>
	type $mol_nav__keys_y__J3Z1UPVH = $mol_type_enforce<
		ReturnType< $mol_nav_demo['row_list'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__BL85R86S = $mol_type_enforce<
		ReturnType< $mol_nav_demo['row_current'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_switch__value__YLQGCQJJ = $mol_type_enforce<
		ReturnType< $mol_nav_demo['tab_current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__786DMJUO = $mol_type_enforce<
		({ 
			'first': string,
			'second': string,
			'third': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_switch__value__SOZUKEGE = $mol_type_enforce<
		ReturnType< $mol_nav_demo['row_current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__1K7EY5PK = $mol_type_enforce<
		({ 
			'first': string,
			'second': string,
			'third': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_card__content__POJ7I7CL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['content'] >
	>
	type $mol_card__status__PR2GJ3CB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_card['status'] >
	>
	export class $mol_nav_demo extends $mol_example {
		Nav( ): $mol_nav
		tab_list( ): ReturnType< ReturnType< $mol_nav_demo['Tab_list'] >['keys'] >
		tab_current( next?: string ): string
		Tab_list( ): $mol_switch
		row_list( ): ReturnType< ReturnType< $mol_nav_demo['Row_list'] >['keys'] >
		row_current( next?: string ): string
		Row_list( ): $mol_switch
		Demo_items( ): $mol_card
		title( ): string
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_string__value__N4F6I58Q = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__disabled__XCC5RLHG = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_string['disabled'] >
	>
	type $mol_button_major__title__DUACE76H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__enabled__KJ3JS9PD = $mol_type_enforce<
		ReturnType< $mol_number_demo['reset_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__click__EXPXX6AY = $mol_type_enforce<
		ReturnType< $mol_number_demo['reset_value'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_bar__sub__OYNU9AK7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_row__sub__RE860KDB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_section__title__7A6FON6T = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__RHX81D2A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_number__value__Z1HTYYBV = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title__AZGBQIW1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__ODEVK6CY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__hint__7AGASPQZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__value__IABRX1CZ = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title__CK357KYE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__RGFFMSYR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__RDNVUAPX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_section__title__72K6XTEI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__P2XG37IH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_number__hint__NHNWRFDU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__value__BOGFNC2P = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__string_enabled__OZYXKEGD = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_number['string_enabled'] >
	>
	type $mol_labeler__title__6O60TITP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__U7SJIIGU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__hint__CIVOL8E3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__value__CDXI74VY = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__enabled__K9UNYIA9 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_labeler__title__46PCUTEF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__F5S3K98J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__1HVB1G2C = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__dec_enabled__T3NMBQCH = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_number['dec_enabled'] >
	>
	type $mol_labeler__title__093XGWGH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__CHLEPCEK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__ZRVDNDJC = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__inc_enabled__PRQ8P9FS = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_number['inc_enabled'] >
	>
	type $mol_labeler__title__5MLYMX8H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__2BD56317 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__V1VIEPOU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_section__title__DVGPTF4P = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__FMWCKGKY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_number__value__BE4HD2FL = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__LL7R0B8N = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__VI0G8ZZC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__OJXKRAFT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__8Y8A3LE3 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__5PT7DV62 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__5UVHHNHL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__9KWESYQS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__A3SHLI14 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision__OCVN3FM9 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_labeler__title__SRCFF8WO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__91OQOXV3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__R4C6LMX1 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision__T0VFZDRA = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_labeler__title__2FGJGT6K = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__9W37FBAP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__YDJ72CDO = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision__V8KYX2GL = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_labeler__title__1XGJRG1U = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__395M7CDI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__N44AA49F = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision__P0BF0RIH = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_labeler__title__YZYI3OSK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__24WYHFMC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__LOCL583T = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_view__3JC51IDX = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_view'] >
	>
	type $mol_labeler__title__7MDI7BR6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__6HSD4VGX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__USN43375 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_view__OREIUD3E = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_view'] >
	>
	type $mol_labeler__title__E037G5JZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__988ZRU1S = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__41OST1L0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_section__title__XO1804LE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__AFBWKR52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_number__value__O493CZVO = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_min_m5'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__HHCIGIDB = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_labeler__title__3HE491EC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__RMEJVHJO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__CSQMKYJT = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_min_0'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__Q7G8WCMH = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_labeler__title__78S2YCUB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__VK5DF9R8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__LDQMEQKL = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_min_5'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__8HVO5ZIA = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_labeler__title__I989X5NQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__SM877EET = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__37LFFVQ1 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_max_m5'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_max__K3S218BH = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__9N2CAC79 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__5NZ6QIAE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__MXOWART6 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_max_0'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_max__URJ3672G = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__VE1YRH7Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__DGV108X5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__TORGB0RS = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_max_5'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_max__XEKDI13W = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__0O0HQW0X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__IUR4FU88 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__5RATCLMK = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_max_100'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_max__3WCCA91E = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_number__precision_change__Q530BEQV = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__L5ZR9NXY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__U0366VGT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__6TI8CQW7 = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_case1_range'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__IUEHX1OW = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_number__value_max__CJETTTU5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__MCUK6K6F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__I4G5V9GJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__8HERUQJC = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_case2_range'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__8XGBZBBB = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_number__value_max__CJN0FZSH = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__A77JSPFH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__Q7MGUTXG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__5Y9ZL1VH = $mol_type_enforce<
		ReturnType< $mol_number_demo['value_case3_range'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__value_min__QS89H79L = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_min'] >
	>
	type $mol_number__value_max__V15Q8MWN = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['value_max'] >
	>
	type $mol_labeler__title__YNQ4CO9X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__E01WG1GD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__2WMI18KE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_section__title__TXR3PK4D = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__RQ49S68J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_list__rows__5BUM9V99 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_number_demo extends $mol_example_small {
		value_string( ): string
		Value_string( ): $mol_string
		reset_enabled( ): boolean
		reset_value( next?: any ): any
		Reset( ): $mol_button_major
		Section_value_bar( ): $mol_bar
		Section_value_row( ): $mol_row
		Section_value( ): $mol_section
		Initial_number( ): $mol_number
		Initial_number_label( ): $mol_labeler
		Hint_number( ): $mol_number
		Hint_number_label( ): $mol_labeler
		Section_initial_row( ): $mol_row
		Section_initial( ): $mol_section
		Value_field_disabled_number( ): $mol_number
		Value_field_disabled_number_label( ): $mol_labeler
		Disabled_number( ): $mol_number
		Disabled_number_label( ): $mol_labeler
		Dec_disabled_number( ): $mol_number
		Dec_disabled_number_label( ): $mol_labeler
		Inc_disabled_number( ): $mol_number
		Inc_disabled_number_label( ): $mol_labeler
		Section_disabled_row( ): $mol_row
		Section_disabled( ): $mol_section
		Precision_change_10_number( ): $mol_number
		Precision_change_10_number_label( ): $mol_labeler
		Precision_change_01_number( ): $mol_number
		Precision_change_01_number_label( ): $mol_labeler
		Precision_100_number_number( ): $mol_number
		Precision_100_number_label( ): $mol_labeler
		Precision_5_number_number( ): $mol_number
		Precision_5_number_label( ): $mol_labeler
		Precision_01_number_number( ): $mol_number
		Precision_01_number_label( ): $mol_labeler
		Precision_005_number_number( ): $mol_number
		Precision_005_number_label( ): $mol_labeler
		Precision_view_001_number( ): $mol_number
		Precision_view_001_number_label( ): $mol_labeler
		Precision_view_10_number( ): $mol_number
		Precision_view_10_number_label( ): $mol_labeler
		Section_precision_row( ): $mol_row
		Section_precision( ): $mol_section
		value_min_m5( next?: number ): number
		Min_m5_number( ): $mol_number
		Min_m5_number_label( ): $mol_labeler
		value_min_0( next?: number ): number
		Min_0_number( ): $mol_number
		Min_0_number_label( ): $mol_labeler
		value_min_5( next?: number ): number
		Min_5_number( ): $mol_number
		Min_5_number_label( ): $mol_labeler
		value_max_m5( next?: number ): number
		Max_m5_number( ): $mol_number
		Max_m5_number_label( ): $mol_labeler
		value_max_0( next?: number ): number
		Max_0_number( ): $mol_number
		Max_0_number_label( ): $mol_labeler
		value_max_5( next?: number ): number
		Max_5_number( ): $mol_number
		Max_5_number_label( ): $mol_labeler
		value_max_100( next?: number ): number
		Max_100_number( ): $mol_number
		Max_100_number_label( ): $mol_labeler
		value_case1_range( next?: number ): number
		Range_case1_number( ): $mol_number
		Range_number_case1_label( ): $mol_labeler
		value_case2_range( next?: any ): any
		Range_case2_number( ): $mol_number
		Range_number_case2_label( ): $mol_labeler
		value_case3_range( next?: any ): any
		Range_case3_number( ): $mol_number
		Range_number_case3_label( ): $mol_labeler
		Section_range_row( ): $mol_row
		Section_range( ): $mol_section
		Rows( ): $mol_list
		title( ): string
		value( next?: number ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number_demo extends $.$mol_number_demo {
        value_string(): string;
        reset_value(): void;
        reset_enabled(): boolean;
    }
}

declare namespace $ {

	type $mol_button_minor__title__7RJC6CAQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__title__P1H219XB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_page__tools__I2MP1S0H = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__NV5K66GQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot__M7QPQW27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['foot'] >
	>
	export class $mol_page_demo extends $mol_example_large {
		Button_tools( ): $mol_button_minor
		Text( ): $mol_filler
		Button_foot( ): $mol_button_minor
		Page( ): $mol_page
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_paginator__value__B6MI842I = $mol_type_enforce<
		ReturnType< $mol_paginator_demo['page'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	export class $mol_paginator_demo extends $mol_example_small {
		page( next?: number ): number
		Pages( ): $mol_paginator
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_plot_line__type__G7Z5C9JI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['type'] >
	>
	type $mol_plot_group__series_y__VCAV1P8L = $mol_type_enforce<
		ReturnType< $mol_plot_demo['saturation_series'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__KESK45T9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_group__series_y__OPMEYMM8 = $mol_type_enforce<
		ReturnType< $mol_plot_demo['input_series'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs__PKTFW7B7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_bar__series_y__26CRJSC9 = $mol_type_enforce<
		ReturnType< $mol_plot_demo['output_series'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_ruler_vert__title__AXP3VE2N = $mol_type_enforce<
		ReturnType< $mol_plot_demo['Voltage_title'] >
		,
		ReturnType< $mol_plot_ruler_vert['title'] >
	>
	type $mol_plot_ruler_hor__title__4FGVDFJJ = $mol_type_enforce<
		ReturnType< $mol_plot_demo['Time_title'] >
		,
		ReturnType< $mol_plot_ruler_hor['title'] >
	>
	type $mol_plot_pane__graphs__K4UPB77X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	export class $mol_plot_demo extends $mol_example_large {
		saturation_series( ): readonly(any)[]
		Saturation_fill( ): $mol_plot_fill
		Saturation_line( ): $mol_plot_line
		Saturation( ): $mol_plot_group
		input_series( ): readonly(any)[]
		Input_line( ): $mol_plot_line
		Input_dots( ): $mol_plot_dot
		Input( ): $mol_plot_group
		output_series( ): readonly(any)[]
		Output( ): $mol_plot_bar
		Voltage_title( ): string
		Voltage( ): $mol_plot_ruler_vert
		Time_title( ): string
		Time( ): $mol_plot_ruler_hor
		Plot( ): $mol_plot_pane
		title( ): string
		count( next?: number ): number
		frequency( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_demo extends $.$mol_plot_demo {
        series_x(): number[];
        input_series(): number[];
        output_series(): number[];
        saturation_series(): number[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_map_heat_level__hint__66LK8ZEE = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat['level_hint'] >
		,
		ReturnType< $mol_plot_map_heat_level['hint'] >
	>
	type $mol_plot_map_heat_level__points__2E245RXS = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat['level_points'] >
		,
		ReturnType< $mol_plot_map_heat_level['points'] >
	>
	type $mol_plot_map_heat_level__opacity__LQQG9SDY = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat['level_opacity'] >
		,
		ReturnType< $mol_plot_map_heat_level['opacity'] >
	>
	type $mol_plot_map_heat_level__diameter__JFO0BMY4 = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat['level_diameter'] >
		,
		ReturnType< $mol_plot_map_heat_level['diameter'] >
	>
	type $mol_plot_map_heat_level__aspect__57FELZFM = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat['level_aspect'] >
		,
		ReturnType< $mol_plot_map_heat_level['aspect'] >
	>
	type $mol_plot_graph_sample__color__4IH6EQHV = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	export class $mol_plot_map_heat extends $mol_plot_group {
		level_graphs( ): readonly(any)[]
		level_hint( id: any): string
		level_points( id: any): readonly(any)[]
		level_opacity( id: any): string
		level_diameter( ): number
		level_aspect( ): number
		series_z( ): readonly(number)[]
		graphs( ): ReturnType< $mol_plot_map_heat['level_graphs'] >
		Level( id: any): $mol_plot_map_heat_level
		Sample( ): $mol_plot_graph_sample
	}
	
	export class $mol_plot_map_heat_level extends $mol_plot_dot {
		opacity( ): string
		style( ): ({ 
			'opacity': ReturnType< $mol_plot_map_heat_level['opacity'] >,
		})  & ReturnType< $mol_plot_dot['style'] >
	}
	
}

//# sourceMappingURL=heat.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_map_heat extends $.$mol_plot_map_heat {
        levels(): number[];
        level_graphs(): $mol_plot_map_heat_level[];
        level_points(level: number): (readonly number[])[];
        level_opacity(level: number): string;
        level_diameter(): number;
        level_aspect(): number;
        level_hint(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_map_heat_demo_zoom__8QKGJSGQ = $mol_type_enforce<
		Parameters< $mol_plot_map_heat_demo['zoom'] >[0]
		,
		Parameters< ReturnType< $mol_plot_map_heat_demo['Plot'] >['scale_y'] >[0]
	>
	type $mol_plot_map_heat__series_x__CTLAWKGK = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat_demo['terrain_x'] >
		,
		ReturnType< $mol_plot_map_heat['series_x'] >
	>
	type $mol_plot_map_heat__series_y__5KJM6ZO8 = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat_demo['terrain_y'] >
		,
		ReturnType< $mol_plot_map_heat['series_y'] >
	>
	type $mol_plot_map_heat__series_z__D6CV09F2 = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat_demo['terrain_z'] >
		,
		ReturnType< $mol_plot_map_heat['series_z'] >
	>
	type $mol_plot_pane__zoom__MB5OZ70E = $mol_type_enforce<
		ReturnType< $mol_plot_map_heat_demo['zoom'] >
		,
		ReturnType< $mol_plot_pane['zoom'] >
	>
	type $mol_plot_pane__graphs__XNRH3PU9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	export class $mol_plot_map_heat_demo extends $mol_example_large {
		zoom( next?: ReturnType< ReturnType< $mol_plot_map_heat_demo['Plot'] >['scale_y'] > ): ReturnType< ReturnType< $mol_plot_map_heat_demo['Plot'] >['scale_y'] >
		terrain_x( ): readonly(number)[]
		terrain_y( ): readonly(number)[]
		terrain_z( ): readonly(number)[]
		Terrain( ): $mol_plot_map_heat
		Plot( ): $mol_plot_pane
		title( ): string
		count_x( ): number
		count_y( ): number
		count_z( ): number
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_map_heat_demo extends $.$mol_plot_map_heat_demo {
        terrain_x(): number[];
        terrain_y(): number[];
        terrain_z(): number[];
    }
}

declare namespace $ {

	export class $mol_icon_anchor extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=anchor.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_box__hint__B2GUPLUL = $mol_type_enforce<
		ReturnType< $mol_pop_demo['pop_showed_check_hint'] >
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__checked__FI3YT0J0 = $mol_type_enforce<
		ReturnType< $mol_pop_demo['pop_showed'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_labeler__title__Y261OT6N = $mol_type_enforce<
		ReturnType< $mol_pop_demo['show_title'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__WYIPGMMP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_switch__value__IMKMBF4U = $mol_type_enforce<
		ReturnType< $mol_pop_demo['pop_align'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__TQSZ69OV = $mol_type_enforce<
		ReturnType< $mol_pop_demo['aligins'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__7GYITLIT = $mol_type_enforce<
		ReturnType< $mol_pop_demo['align_title'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__SXRV837J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__MRYPMUGN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_major__sub__XJHGBESQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_row__minimal_width__R3H2SH43 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_row['minimal_width'] >
	>
	type $mol_row__sub__A1SP4QFH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_pop__Anchor__R3L0P003 = $mol_type_enforce<
		ReturnType< $mol_pop_demo['Pop_anchor'] >
		,
		ReturnType< $mol_pop['Anchor'] >
	>
	type $mol_pop__showed__X2EW59YN = $mol_type_enforce<
		ReturnType< $mol_pop_demo['pop_showed'] >
		,
		ReturnType< $mol_pop['showed'] >
	>
	type $mol_pop__align__4ZO08BIA = $mol_type_enforce<
		ReturnType< $mol_pop_demo['pop_align'] >
		,
		ReturnType< $mol_pop['align'] >
	>
	type $mol_pop__bubble_content__AY3LKKKM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop['bubble_content'] >
	>
	type $mol_view__sub__YNHJT290 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_pop_demo extends $mol_example {
		show_title( ): string
		pop_showed_check_hint( ): string
		pop_showed( next?: boolean ): boolean
		Show_check( ): $mol_check_box
		Showed( ): $mol_labeler
		align_title( ): string
		pop_align( next?: string ): string
		aligins( ): ({ 
			'left_top': string,
			'left_center': string,
			'left_bottom': string,
			'right_top': string,
			'right_center': string,
			'right_bottom': string,
			'center': string,
			'top_left': string,
			'top_center': string,
			'top_right': string,
			'bottom_left': string,
			'bottom_center': string,
			'bottom_right': string,
		}) 
		Align_select( ): $mol_switch
		Align( ): $mol_labeler
		Manage( ): $mol_row
		anchor_button_icon( ): $mol_icon_anchor
		anchor_button_title( ): string
		Pop_anchor( ): $mol_button_major
		bubble_hint( ): string
		Content( ): $mol_row
		Pop( ): $mol_pop
		Pop_area( ): $mol_view
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_pop_over extends $mol_pop {
		hovered( next?: boolean ): boolean
		event_show( next?: any ): any
		event_hide( next?: any ): any
		showed( ): ReturnType< $mol_pop_over['hovered'] >
		attr( ): ({ 
			'tabindex': number,
		})  & ReturnType< $mol_pop['attr'] >
		event( ): ({ 
			mouseenter( next?: ReturnType< $mol_pop_over['event_show'] > ): ReturnType< $mol_pop_over['event_show'] >,
			mouseleave( next?: ReturnType< $mol_pop_over['event_hide'] > ): ReturnType< $mol_pop_over['event_hide'] >,
		})  & ReturnType< $mol_pop['event'] >
	}
	
}

//# sourceMappingURL=over.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_button_minor__title__WA171TJF = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['open_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__title__UUSJ8EZ9 = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['export_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__title__4PTKNO1G = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['save_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_list__rows__ZRC1JC11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_pop_over__align__IWCM7URY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__Anchor__O009B8YB = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['file_title'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__bubble_content__V1616LNQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	type $mol_button_minor__title__OOIYR68N = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['updates_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__title__CDOFALS5 = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['about_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_list__rows__VLF5F2AP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_pop_over__align__ZKN2LOW5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__Anchor__ONFO4NI6 = $mol_type_enforce<
		ReturnType< $mol_pop_over_demo['help_title'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__bubble_content__AJO4E6XQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	type $mol_row__sub__QD6HX1WG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_pop_over_demo extends $mol_example_small {
		file_title( ): string
		open_title( ): string
		Open( ): $mol_button_minor
		export_title( ): string
		Export( ): $mol_button_minor
		save_title( ): string
		Save( ): $mol_button_minor
		File_menu( ): $mol_list
		File( ): $mol_pop_over
		help_title( ): string
		updates_title( ): string
		Updates( ): $mol_button_minor
		about_title( ): string
		About( ): $mol_button_minor
		Help_menu( ): $mol_list
		Help( ): $mol_pop_over
		Menu( ): $mol_row
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_portion__portion__DIHRMV6X = $mol_type_enforce<
		ReturnType< $mol_portion_demo['fist'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_portion__portion__4CDPJGM1 = $mol_type_enforce<
		ReturnType< $mol_portion_demo['second'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_portion__portion__6R9H1O2E = $mol_type_enforce<
		ReturnType< $mol_portion_demo['third'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	export class $mol_portion_demo extends $mol_example_small {
		fist( ): number
		Empty( ): $mol_portion
		second( ): number
		Partial( ): $mol_portion
		third( ): number
		Full( ): $mol_portion
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_menu extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {

	type $mol_text__text__8ORZERYA = $mol_type_enforce<
		ReturnType< $mol_pick_demo['info_content_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_pick__title__K6QPEFMC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['title'] >
	>
	type $mol_pick__bubble_content__NCXP1AJ7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $mol_button_copy__title__6EQR34N6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__text__9EF81FBI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_button_download__title__F0J9IPQP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['title'] >
	>
	type $mol_button_download__blob__SRD4STRD = $mol_type_enforce<
		ReturnType< $mol_pick_demo['Menu_item_download_blob'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name__DCPLGOCG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_button_major__title__WL75ZNLB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click__PT5OL600 = $mol_type_enforce<
		ReturnType< $mol_pick_demo['delete_confirm'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_pick__align__0TBWJGO7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['align'] >
	>
	type $mol_pick__trigger_content__9TSGXTPE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content__LK8FM37L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $mol_list__rows__0VT8GZCW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_pick__hint__9ZTBIPN6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['hint'] >
	>
	type $mol_pick__trigger_content__1T5MI1OW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content__YAV1KS0Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	export class $mol_pick_demo extends $mol_example_small {
		info_content_text( ): string
		Info_content( ): $mol_text
		Info_pop( ): $mol_pick
		Options_trigger_icon( ): $mol_icon_menu
		Menu_item_copy( ): $mol_button_copy
		Menu_item_download_blob( ): $mol_blob
		Menu_item_download( ): $mol_button_download
		menu_item_delete_icon( ): $mol_icon_trash_can_outline
		menu_item_delete_label( ): string
		delete_confirm( next?: any ): any
		Delete_confirm( ): $mol_button_major
		Menu_item_delete( ): $mol_pick
		Options_content( ): $mol_list
		Options_pop( ): $mol_pick
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick_demo extends $.$mol_pick_demo {
        delete_confirm(): void;
    }
}

declare namespace $ {

	export class $mol_icon_clock extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clock.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clock_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_format__value__F8FMVXID = $mol_type_enforce<
		ReturnType< $mol_pick_time['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask__RSI3WY0B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__allow__V45LNK52 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['allow'] >
	>
	type $mol_format__enabled__PXTXJ79C = $mol_type_enforce<
		ReturnType< $mol_pick_time['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_switch__value__XHI611PS = $mol_type_enforce<
		ReturnType< $mol_pick_time['hour_selected'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__0VN9PYHK = $mol_type_enforce<
		ReturnType< $mol_pick_time['hour_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_paragraph__title__HC3GZ2TB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_switch__value__RGENXJI0 = $mol_type_enforce<
		ReturnType< $mol_pick_time['minute_selected'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__YIMG8L1K = $mol_type_enforce<
		ReturnType< $mol_pick_time['minute_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_row__sub__0R0MQCZM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_pick_time extends $mol_pick {
		enabled( ): boolean
		value( next?: string ): string
		Input( ): $mol_format
		hour_selected( next?: string ): string
		hour_options( ): Record<string, any>
		Hours( ): $mol_switch
		Delimiter( ): $mol_paragraph
		minute_selected( next?: string ): string
		minute_options( ): Record<string, any>
		Minutes( ): $mol_switch
		Pickers( ): $mol_row
		Icon( ): $mol_icon_clock_outline
		trigger_enabled( ): ReturnType< $mol_pick_time['enabled'] >
		bubble_content( ): readonly(any)[]
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
}

//# sourceMappingURL=time.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick_time extends $.$mol_pick_time {
        trigger_content(): (string | $mol_icon_clock_outline)[];
        value_moment(next?: $mol_time_moment): $mol_time_moment;
        value(next?: string): string;
        hour_selected(hour_str?: string): string;
        minute_selected(minute_str?: string): string;
        hour_options(): {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
        };
        minute_options(): {
            '0': string;
            '5': string;
            '10': string;
            '15': string;
            '20': string;
            '25': string;
            '30': string;
            '35': string;
            '40': string;
            '45': string;
            '50': string;
            '55': string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_time_moment__LVKF35ZT = $mol_type_enforce<
		[ string ]
		,
		ConstructorParameters< typeof $mol_time_moment >
	>
	type $mol_pick_time__value_moment__WNB3HC9Q = $mol_type_enforce<
		ReturnType< $mol_pick_time_demo['moment'] >
		,
		ReturnType< $mol_pick_time['value_moment'] >
	>
	export class $mol_pick_time_demo extends $mol_example_small {
		moment( next?: $mol_time_moment ): $mol_time_moment
		Picker( ): $mol_pick_time
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_search__hint__OE4TGS2J = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['name_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query__D9LEPFAZ = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['name'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__suggests__FN6FJAWP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_number__hint__6MCVFRHM = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['count_hint'] >
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__value__N2LA9Z65 = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['count'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_portion__portion__00ZSRFZ1 = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['progress'] >
		,
		ReturnType< $mol_portion['portion'] >
	>
	type $mol_check_box__title__ENFBPNGH = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['publish_label'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__L8JFJR8L = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['publish'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_minor__title__GOD72WAQ = $mol_type_enforce<
		ReturnType< $mol_row_demo_form['drop_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_row__sub__DMA4K4LC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_row_demo_form extends $mol_example {
		name_hint( ): string
		name( next?: string ): string
		suggest1( ): string
		suggest2( ): string
		Name( ): $mol_search
		count_hint( ): string
		count( next?: any ): any
		Count( ): $mol_number
		progress( ): number
		Progress( ): $mol_portion
		publish_label( ): string
		publish( next?: boolean ): boolean
		Publish( ): $mol_check_box
		drop_title( ): string
		Drop( ): $mol_button_minor
		Row( ): $mol_row
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	type $mol_row__sub__9UN4UQO4 = $mol_type_enforce<
		ReturnType< $mol_row_demo_products['products'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_card__minimal_width__POLPFIWR = $mol_type_enforce<
		number
		,
		ReturnType< $mol_card['minimal_width'] >
	>
	type $mol_card__minimal_height__TDLUK4TA = $mol_type_enforce<
		number
		,
		ReturnType< $mol_card['minimal_height'] >
	>
	type $mol_card__title__6Q9QSHNA = $mol_type_enforce<
		ReturnType< $mol_row_demo_products['product_title'] >
		,
		ReturnType< $mol_card['title'] >
	>
	export class $mol_row_demo_products extends $mol_example {
		product_title( id: any): string
		products( ): readonly(any)[]
		Products( ): $mol_row
		title( ): string
		count( ): number
		Product( id: any): $mol_card
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=products.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_row_demo_products extends $.$mol_row_demo_products {
        products(): $.$mol_card[];
        product_title(id: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_list__rows__5P44SGPE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__WQN6FZVS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $mol_scroll_demo extends $mol_example_large {
		Filler0( ): $mol_filler
		Filler1( ): $mol_filler
		Filler2( ): $mol_filler
		Filler3( ): $mol_filler
		Filler4( ): $mol_filler
		Filler5( ): $mol_filler
		Filler6( ): $mol_filler
		Filler7( ): $mol_filler
		Filler8( ): $mol_filler
		Filler9( ): $mol_filler
		Content( ): $mol_list
		Scroll( ): $mol_scroll
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_search__suggests__JP6TP9YV = $mol_type_enforce<
		ReturnType< $mol_search_demo['suggests'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	export class $mol_search_demo extends $mol_example_small {
		query( ): ReturnType< ReturnType< $mol_search_demo['Search'] >['query'] >
		suggests( ): readonly(any)[]
		Search( ): $mol_search
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search_demo extends $.$mol_search_demo {
        suggests(): string[];
    }
}

declare namespace $ {

	type $mol_section__title__H7AU9V15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__PRJBGH8U = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	export class $mol_section_demo extends $mol_example_small {
		Section_content( ): $mol_filler
		Section( ): $mol_section
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_filler__min_symbols__YPOLJLAV = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_filler__min_symbols__V0V8HAAZ = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_filler__min_symbols__SVPQ5SMK = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_filler__min_symbols__ZPFXNIXA = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_filler__min_symbols__3QDU6B1G = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_filler__min_symbols__6R65M990 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_filler__min_symbols__M9WWX76Q = $mol_type_enforce<
		number
		,
		ReturnType< $mol_filler['min_symbols'] >
	>
	type $mol_section__level__Z3KWOI2V = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__BLDZ5EHQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__6TJ9MKUQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_section__level__DKY1PHA5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__PQ90I8WT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__YSJMB12O = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_section__level__E7AY7TAM = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__IJS0BML9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__EKFXAJAZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_section__level__797OZPVX = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__VLWM9138 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__LZ3Q1G0J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_section__level__PN9KX7ZK = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__QHMNV4PW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__8G6IVEVN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_section__level__Y133MR3O = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__IOB0SAUX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__9VTV5ZQ2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_section__level__4MATGO30 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__title__AZZ61IZ0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content__UW2BOENA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	export class $mol_section_demo_level extends $mol_example_small {
		Section1_text( ): $mol_filler
		Section2_text( ): $mol_filler
		Section3_text( ): $mol_filler
		Section4_text( ): $mol_filler
		Section5_text( ): $mol_filler
		Section6_text( ): $mol_filler
		Section7_text( ): $mol_filler
		title( ): string
		sub( ): readonly(any)[]
		Section1( ): $mol_section
		Section2( ): $mol_section
		Section3( ): $mol_section
		Section4( ): $mol_section
		Section5( ): $mol_section
		Section6( ): $mol_section
		Section7( ): $mol_section
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=level.view.tree.d.ts.map
declare namespace $ {

	type $mol_select_colors_color_preview__color__R2DNJM9W = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['option_color'] >
		,
		ReturnType< $mol_select_colors_color_preview['color'] >
	>
	type $mol_dimmer__haystack__EF4OBOYO = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['color_name'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__8BKOF3ZI = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['color_filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_view__sub__PRU88E48 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__85HQY5TB = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_select__value__1E1QNV1V = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['color'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__K1FE2VP8 = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['colors'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__option_label__IY1PKI9U = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['color_name'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_select__option_content__V2DE4ELX = $mol_type_enforce<
		ReturnType< $mol_select_demo_colors['option_content'] >
		,
		ReturnType< $mol_select['option_content'] >
	>
	export class $mol_select_demo_colors extends $mol_example_small {
		color_filter( ): ReturnType< ReturnType< $mol_select_demo_colors['Color'] >['filter_pattern'] >
		color( next?: string ): string
		colors( ): Record<string, any>
		color_name( id: any): string
		option_color( id: any): string
		Color_preview( id: any): $mol_select_colors_color_preview
		Color_name( id: any): $mol_dimmer
		Color_option( id: any): $mol_view
		option_content( id: any): readonly(any)[]
		Color( ): $mol_select
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
	export class $mol_select_colors_color_preview extends $mol_view {
		color( ): string
		style( ): ({ 
			'background': ReturnType< $mol_select_colors_color_preview['color'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=colors.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select_demo_colors extends $.$mol_select_demo_colors {
        color_name(id: keyof typeof $mol_colors): "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";
        option_color(id: keyof typeof $mol_colors): "#f0f8ff" | "#faebd7" | "#00ffff" | "#7fffd4" | "#f0ffff" | "#f5f5dc" | "#ffe4c4" | "#000000" | "#ffebcd" | "#0000ff" | "#8a2be2" | "#a52a2a" | "#deb887" | "#5f9ea0" | "#7fff00" | "#d2691e" | "#ff7f50" | "#6495ed" | "#fff8dc" | "#dc143c" | "#00008b" | "#008b8b" | "#b8860b" | "#a9a9a9" | "#006400" | "#bdb76b" | "#8b008b" | "#556b2f" | "#ff8c00" | "#9932cc" | "#8b0000" | "#e9967a" | "#8fbc8f" | "#483d8b" | "#2f4f4f" | "#00ced1" | "#9400d3" | "#ff1493" | "#00bfff" | "#696969" | "#1e90ff" | "#b22222" | "#fffaf0" | "#228b22" | "#ff00ff" | "#dcdcdc" | "#f8f8ff" | "#ffd700" | "#daa520" | "#808080" | "#008000" | "#adff2f" | "#f0fff0" | "#ff69b4" | "#cd5c5c" | "#4b0082" | "#fffff0" | "#f0e68c" | "#e6e6fa" | "#fff0f5" | "#7cfc00" | "#fffacd" | "#add8e6" | "#f08080" | "#e0ffff" | "#fafad2" | "#d3d3d3" | "#90ee90" | "#ffb6c1" | "#ffa07a" | "#20b2aa" | "#87cefa" | "#778899" | "#b0c4de" | "#ffffe0" | "#00ff00" | "#32cd32" | "#faf0e6" | "#800000" | "#66cdaa" | "#0000cd" | "#ba55d3" | "#9370db" | "#3cb371" | "#7b68ee" | "#00fa9a" | "#48d1cc" | "#c71585" | "#191970" | "#f5fffa" | "#ffe4e1" | "#ffe4b5" | "#ffdead" | "#000080" | "#fdf5e6" | "#808000" | "#6b8e23" | "#ffa500" | "#ff4500" | "#da70d6" | "#eee8aa" | "#98fb98" | "#afeeee" | "#db7093" | "#ffefd5" | "#ffdab9" | "#cd853f" | "#ffc0cb" | "#dda0dd" | "#b0e0e6" | "#800080" | "#663399" | "#ff0000" | "#bc8f8f" | "#4169e1" | "#8b4513" | "#fa8072" | "#f4a460" | "#2e8b57" | "#fff5ee" | "#a0522d" | "#c0c0c0" | "#87ceeb" | "#6a5acd" | "#708090" | "#fffafa" | "#00ff7f" | "#4682b4" | "#d2b48c" | "#008080" | "#d8bfd8" | "#ff6347" | "#40e0d0" | "#ee82ee" | "#f5deb3" | "#ffffff" | "#f5f5f5" | "#ffff00" | "#9acd32";
        colors(): {
            aliceblue: "#f0f8ff";
            antiquewhite: "#faebd7";
            aqua: "#00ffff";
            aquamarine: "#7fffd4";
            azure: "#f0ffff";
            beige: "#f5f5dc";
            bisque: "#ffe4c4";
            black: "#000000";
            blanchedalmond: "#ffebcd";
            blue: "#0000ff";
            blueviolet: "#8a2be2";
            brown: "#a52a2a";
            burlywood: "#deb887";
            cadetblue: "#5f9ea0";
            chartreuse: "#7fff00";
            chocolate: "#d2691e";
            coral: "#ff7f50";
            cornflowerblue: "#6495ed";
            cornsilk: "#fff8dc";
            crimson: "#dc143c";
            cyan: "#00ffff";
            darkblue: "#00008b";
            darkcyan: "#008b8b";
            darkgoldenrod: "#b8860b";
            darkgray: "#a9a9a9";
            darkgreen: "#006400";
            darkgrey: "#a9a9a9";
            darkkhaki: "#bdb76b";
            darkmagenta: "#8b008b";
            darkolivegreen: "#556b2f";
            darkorange: "#ff8c00";
            darkorchid: "#9932cc";
            darkred: "#8b0000";
            darksalmon: "#e9967a";
            darkseagreen: "#8fbc8f";
            darkslateblue: "#483d8b";
            darkslategrey: "#2f4f4f";
            darkturquoise: "#00ced1";
            darkviolet: "#9400d3";
            deeppink: "#ff1493";
            deepskyblue: "#00bfff";
            dimgray: "#696969";
            dimgrey: "#696969";
            dodgerblue: "#1e90ff";
            firebrick: "#b22222";
            floralwhite: "#fffaf0";
            forestgreen: "#228b22";
            fuchsia: "#ff00ff";
            gainsboro: "#dcdcdc";
            ghostwhite: "#f8f8ff";
            gold: "#ffd700";
            goldenrod: "#daa520";
            gray: "#808080";
            green: "#008000";
            greenyellow: "#adff2f";
            grey: "#808080";
            honeydew: "#f0fff0";
            hotpink: "#ff69b4";
            indianred: "#cd5c5c";
            indigo: "#4b0082";
            ivory: "#fffff0";
            khaki: "#f0e68c";
            lavender: "#e6e6fa";
            lavenderblush: "#fff0f5";
            lawngreen: "#7cfc00";
            lemonchiffon: "#fffacd";
            lightblue: "#add8e6";
            lightcoral: "#f08080";
            lightcyan: "#e0ffff";
            lightgoldenrodyellow: "#fafad2";
            lightgray: "#d3d3d3";
            lightgreen: "#90ee90";
            lightgrey: "#d3d3d3";
            lightpink: "#ffb6c1";
            lightsalmon: "#ffa07a";
            lightseagreen: "#20b2aa";
            lightskyblue: "#87cefa";
            lightslategray: "#778899";
            lightslategrey: "#778899";
            lightsteelblue: "#b0c4de";
            lightyellow: "#ffffe0";
            lime: "#00ff00";
            limegreen: "#32cd32";
            linen: "#faf0e6";
            magenta: "#ff00ff";
            maroon: "#800000";
            mediumaquamarine: "#66cdaa";
            mediumblue: "#0000cd";
            mediumorchid: "#ba55d3";
            mediumpurple: "#9370db";
            mediumseagreen: "#3cb371";
            mediumslateblue: "#7b68ee";
            mediumspringgreen: "#00fa9a";
            mediumturquoise: "#48d1cc";
            mediumvioletred: "#c71585";
            midnightblue: "#191970";
            mintcream: "#f5fffa";
            mistyrose: "#ffe4e1";
            moccasin: "#ffe4b5";
            navajowhite: "#ffdead";
            navy: "#000080";
            oldlace: "#fdf5e6";
            olive: "#808000";
            olivedrab: "#6b8e23";
            orange: "#ffa500";
            orangered: "#ff4500";
            orchid: "#da70d6";
            palegoldenrod: "#eee8aa";
            palegreen: "#98fb98";
            paleturquoise: "#afeeee";
            palevioletred: "#db7093";
            papayawhip: "#ffefd5";
            peachpuff: "#ffdab9";
            peru: "#cd853f";
            pink: "#ffc0cb";
            plum: "#dda0dd";
            powderblue: "#b0e0e6";
            purple: "#800080";
            rebeccapurple: "#663399";
            red: "#ff0000";
            rosybrown: "#bc8f8f";
            royalblue: "#4169e1";
            saddlebrown: "#8b4513";
            salmon: "#fa8072";
            sandybrown: "#f4a460";
            seagreen: "#2e8b57";
            seashell: "#fff5ee";
            sienna: "#a0522d";
            silver: "#c0c0c0";
            skyblue: "#87ceeb";
            slateblue: "#6a5acd";
            slategray: "#708090";
            slategrey: "#708090";
            snow: "#fffafa";
            springgreen: "#00ff7f";
            steelblue: "#4682b4";
            tan: "#d2b48c";
            teal: "#008080";
            thistle: "#d8bfd8";
            tomato: "#ff6347";
            turquoise: "#40e0d0";
            violet: "#ee82ee";
            wheat: "#f5deb3";
            white: "#ffffff";
            whitesmoke: "#f5f5f5";
            yellow: "#ffff00";
            yellowgreen: "#9acd32";
            '': string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_select__no_options_message__Q498Z7W2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['no_options_message'] >
	>
	type $mol_select__value__YSKV1MP5 = $mol_type_enforce<
		ReturnType< $mol_select_demo_month['month'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__HPOPRIRE = $mol_type_enforce<
		ReturnType< $mol_select_demo_month['months'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	export class $mol_select_demo_month extends $mol_example_small {
		month( next?: string ): string
		months( ): ({ 
			'jan': string,
			'feb': string,
			'mar': string,
			'apr': string,
			'may': string,
			'jun': string,
			'jul': string,
			'aug': string,
			'sep': string,
			'oct': string,
			'nov': string,
			'dec': string,
		}) 
		Month( ): $mol_select
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=month.view.tree.d.ts.map
declare namespace $ {

	type $mol_select__Filter__0PSASYK9 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__value__QFCFREDS = $mol_type_enforce<
		ReturnType< $mol_select_demo_priority['priority'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options__4AA0MZA7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_select['options'] >
	>
	export class $mol_select_demo_priority extends $mol_example_small {
		priority( next?: string ): string
		Priority( ): $mol_select
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=priority.view.tree.d.ts.map
declare namespace $ {

	type $mol_select_list__value__VZQD6ADV = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['friends'] >
		,
		ReturnType< $mol_select_list['value'] >
	>
	type $mol_select_list__dictionary__CQ2NID7P = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['suggestions'] >
		,
		ReturnType< $mol_select_list['dictionary'] >
	>
	type $mol_select_list__value__HK1H0XWW = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['friends'] >
		,
		ReturnType< $mol_select_list['value'] >
	>
	type $mol_select_list__dictionary__BXO6JWFG = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['suggestions'] >
		,
		ReturnType< $mol_select_list['dictionary'] >
	>
	type $mol_select_list__enabled__Z99NW1WI = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_select_list['enabled'] >
	>
	type $mol_select_list_demo_filter_pattern__2G51L3OC = $mol_type_enforce<
		Parameters< $mol_select_list_demo['filter_pattern'] >[0]
		,
		Parameters< ReturnType< $mol_select_list_demo['Friends_lazy'] >['filter_pattern'] >[0]
	>
	type $mol_select_list__value__IHBCZQ9W = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['friends_lazy'] >
		,
		ReturnType< $mol_select_list['value'] >
	>
	type $mol_select_list__option_title__NUJP0BWH = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['option_title'] >
		,
		ReturnType< $mol_select_list['option_title'] >
	>
	type $mol_select_list__pick_enabled__SF23LXFT = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_select_list['pick_enabled'] >
	>
	type $mol_select_list__dictionary__0PAA1HOM = $mol_type_enforce<
		ReturnType< $mol_select_list_demo['suggestions_lazy'] >
		,
		ReturnType< $mol_select_list['dictionary'] >
	>
	type $mol_list__rows__Y92UVI7T = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_select_list_demo extends $mol_example_small {
		friends( next?: readonly(any)[] ): readonly(any)[]
		suggestions( ): Record<string, string>
		Friends( ): $mol_select_list
		Friends_disabled( ): $mol_select_list
		friends_lazy( next?: readonly(any)[] ): readonly(any)[]
		option_title( id: any): string
		filter_pattern( next?: ReturnType< ReturnType< $mol_select_list_demo['Friends_lazy'] >['filter_pattern'] > ): ReturnType< ReturnType< $mol_select_list_demo['Friends_lazy'] >['filter_pattern'] >
		suggestions_lazy( ): ReturnType< $mol_select_list_demo['suggestions'] >
		Friends_lazy( ): $mol_select_list
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select_list_demo extends $.$mol_select_list_demo {
        suggestions_lazy(): Record<string, string>;
        option_title(id: string): string;
    }
}

declare namespace $ {

	type $mol_speck__value__82C35IGM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_link__sub__RDF70XQH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_speck__value__2FTQK792 = $mol_type_enforce<
		ReturnType< $mol_speck_demo['string_speck'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_view__sub__BSIX1H8P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_speck__value__475UMSFH = $mol_type_enforce<
		ReturnType< $mol_speck_demo['notification_count'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_button_minor__sub__MLKR0IF4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_paragraph__sub__HA0NS058 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_speck_demo extends $mol_example_small {
		Link_speck( ): $mol_speck
		Link_icon( ): $mol_icon_settings
		Link( ): $mol_link
		string_speck( ): string
		String_speck( ): $mol_speck
		String_field( ): $mol_string
		String( ): $mol_view
		notification_count( ): number
		Button_speck( ): $mol_speck
		Button_icon( ): $mol_icon_menu
		Button( ): $mol_button_minor
		Message_speck( ): $mol_speck
		message_text( ): string
		Message( ): $mol_paragraph
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {
    class $mol_speech extends $mol_plugin {
        static speaker_make(): Promise<SpeechSynthesis>;
        static speaker(): SpeechSynthesis;
        static voices(): SpeechSynthesisVoice[];
        static say(text: string): null;
        static speaking(next?: boolean): boolean;
        static hearer(): any;
        static hearing(next?: boolean): boolean;
        static recognition_index(next?: number): number;
        static recognition_offset(next?: number): number;
        static recognition(index: number, next?: SpeechRecognitionResult): SpeechRecognitionResult | null;
        static recognitions(): SpeechRecognitionResult[];
        static commands(): string[];
        static text(): string;
        commands_skip(next?: number): number;
        render(): null;
        event_catch(found?: string[]): boolean;
        patterns(): readonly string[];
        matchers(): RegExp[];
        prefix(): string;
        suffix(): string;
    }
}

declare namespace $ {

	type $mol_check_icon__Icon__ANMZHLV1 = $mol_type_enforce<
		ReturnType< $mol_speech_demo['Toggle_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__S6LOO1P0 = $mol_type_enforce<
		ReturnType< $mol_speech_demo['hearing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_row__sub__IIGNZK93 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_major__click__PEM4IMVS = $mol_type_enforce<
		ReturnType< $mol_speech_demo['speak'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__UPD64OK3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	export class $mol_speech_demo extends $mol_example_small {
		Toggle_icon( ): $mol_icon_microphone
		hearing( next?: boolean ): boolean
		Toggle( ): $mol_check_icon
		message( ): string
		Message( ): $mol_row
		speak( next?: any ): any
		Speak( ): $mol_button_major
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_speech_demo extends $.$mol_speech_demo {
        hearing(next?: boolean): boolean;
        message(): string;
        speak(): void;
    }
}

declare namespace $ {
    class $mol_spell_morphs extends Set<string> {
        readonly max: number;
        constructor(items?: string[]);
    }
    class $mol_spell extends Object {
        static head: $mol_spell_morphs;
        static prefix: $mol_spell_morphs;
        static root: $mol_spell_morphs;
        static postfix: $mol_spell_morphs;
        static foot: $mol_spell_morphs;
        static test(word: string): boolean;
        static test_tail(word: string): boolean;
        static test_body(word: string): boolean;
    }
}

declare namespace $ {
    class $mol_spell_ru extends $mol_spell {
        static prefix: $mol_spell_morphs;
        static root: $mol_spell_morphs;
        static postfix: $mol_spell_morphs;
        static foot: $mol_spell_morphs;
    }
}

declare namespace $ {
    class $mol_spell_any extends Object {
        static test(word: string): boolean;
    }
}

declare namespace $ {

	type $mol_textarea__value__ZBAZTJ6K = $mol_type_enforce<
		ReturnType< $mol_spell_demo['article'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_text_code__text__WG019TEA = $mol_type_enforce<
		ReturnType< $mol_spell_demo['report'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_list__rows__GPJUY9FJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_spell_demo extends $mol_example_small {
		article( next?: string ): string
		Article( ): $mol_textarea
		report( ): string
		Report( ): $mol_text_code
		List( ): $mol_list
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_spell_demo extends $.$mol_spell_demo {
        report(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri__UJXO9I1M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_view__sub__TU35BJQ5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_stack__sub__AJHCR7BL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_stack['sub'] >
	>
	export class $mol_stack_demo extends $mol_example_small {
		Back( ): $mol_image
		Front( ): $mol_view
		Collage( ): $mol_stack
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__value__P0UPN0PO = $mol_type_enforce<
		ReturnType< $mol_string_demo['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__00RN49NV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__J8NHBAYA = $mol_type_enforce<
		ReturnType< $mol_string_demo['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__IL6X6QUN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__QQOXXO0G = $mol_type_enforce<
		ReturnType< $mol_string_demo['broken'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__value__Y4RDGY3A = $mol_type_enforce<
		ReturnType< $mol_string_demo['name2'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__disabled__YXSF35V5 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_string['disabled'] >
	>
	type $mol_string__value__1QTNFPGK = $mol_type_enforce<
		ReturnType< $mol_string_demo['name2'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string_button__value__WJ0JIRB1 = $mol_type_enforce<
		ReturnType< $mol_string_demo['name2'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	export class $mol_string_demo extends $mol_example_small {
		name( next?: string ): string
		Simple( ): $mol_string
		Hint( ): $mol_string
		broken( next?: string ): string
		Broken( ): $mol_string
		name2( next?: string ): string
		Filled( ): $mol_string
		Disabled( ): $mol_string
		Button( ): $mol_string_button
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string_demo extends $.$mol_string_demo {
        broken(next?: string): never;
    }
}

declare namespace $ {

	type $mol_switch__value__1CRH97DP = $mol_type_enforce<
		ReturnType< $mol_switch_demo['color'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__9ETV0EC6 = $mol_type_enforce<
		({ 
			'red': ReturnType< $mol_switch_demo['option_red'] >,
			'green': ReturnType< $mol_switch_demo['option_green'] >,
			'blue': ReturnType< $mol_switch_demo['option_blue'] >,
			'infernal': ReturnType< $mol_switch_demo['option_infernal'] >,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__843E1VN0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__M52NOO4A = $mol_type_enforce<
		ReturnType< $mol_switch_demo['Enabled'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_switch__value__C7YQAQDQ = $mol_type_enforce<
		ReturnType< $mol_switch_demo['color'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__enabled__YCVKTTII = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_switch['enabled'] >
	>
	type $mol_switch__options__MI3YK9KK = $mol_type_enforce<
		({ 
			'red': ReturnType< $mol_switch_demo['option_red'] >,
			'green': ReturnType< $mol_switch_demo['option_green'] >,
			'blue': ReturnType< $mol_switch_demo['option_blue'] >,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__Y4O13WQE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__HQ71WJJP = $mol_type_enforce<
		ReturnType< $mol_switch_demo['Disabled'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_list__sub__FVMRKGMK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	export class $mol_switch_demo extends $mol_example {
		color( next?: string ): string
		option_red( ): string
		option_green( ): string
		option_blue( ): string
		option_infernal( ): string
		Enabled( ): $mol_switch
		Enabled_labeler( ): $mol_labeler
		Disabled( ): $mol_switch
		Disabled_labeler( ): $mol_labeler
		Demo_items( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__title__WKL3DUBR = $mol_type_enforce<
		ReturnType< $mol_tag_tree_demo['item_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_tag_tree__Item__W84IH6VZ = $mol_type_enforce<
		ReturnType< $mol_tag_tree_demo['Item'] >
		,
		ReturnType< $mol_tag_tree['Item'] >
	>
	type $mol_tag_tree__levels_expanded__6B13HR51 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_tag_tree['levels_expanded'] >
	>
	type $mol_tag_tree__ids_tags__FZ3Y74Z8 = $mol_type_enforce<
		({ 
			'Batman': readonly(any)[],
			'Superman': readonly(any)[],
			'Aquaman': readonly(any)[],
			'Flash': readonly(any)[],
			'Jocker': readonly(any)[],
			'Deadshot': readonly(any)[],
			'Ironman': readonly(any)[],
			'Hulk': readonly(any)[],
			'Thor': readonly(any)[],
			'Spiderman': readonly(any)[],
			'Thanos': readonly(any)[],
			'Locky': readonly(any)[],
			'Harley Quinn': readonly(any)[],
			'Wonder Woman': readonly(any)[],
			'Hela': readonly(any)[],
		}) 
		,
		ReturnType< $mol_tag_tree['ids_tags'] >
	>
	export class $mol_tag_tree_demo extends $mol_example {
		item_title( id: any): string
		Item( id: any): $mol_button_minor
		Tree( ): $mol_tag_tree
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_tag_tree_demo extends $.$mol_tag_tree_demo {
        item_title(path: readonly string[]): string;
    }
}

declare namespace $ {

	type $mol_text_code__sidebar_showed__BKM0L1RN = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__text__NRXB1DYT = $mol_type_enforce<
		ReturnType< $mol_text_code_demo['source'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__syntax__DWGJUTLV = $mol_type_enforce<
		ReturnType< $mol_text_code_demo['syntax'] >
		,
		ReturnType< $mol_text_code['syntax'] >
	>
	type $mol_text_code__uri_resolve__DGNNR457 = $mol_type_enforce<
		ReturnType< $mol_text_code_demo['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	export class $mol_text_code_demo extends $mol_example_small {
		source( ): string
		syntax( ): any
		uri_resolve( id: any): string
		Text( ): $mol_text_code
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_demo extends $.$mol_text_code_demo {
        source(): string;
        syntax(): $mol_syntax2<{
            'code-link': RegExp;
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_resolve(uri: string): string;
    }
}

declare namespace $ {

	type $mol_search_jumper__query__N8LHSOC5 = $mol_type_enforce<
		ReturnType< $mol_text_demo['search'] >
		,
		ReturnType< $mol_search_jumper['query'] >
	>
	type $mol_search_jumper__Root__A0U4SKZ1 = $mol_type_enforce<
		ReturnType< $mol_text_demo['View'] >
		,
		ReturnType< $mol_search_jumper['Root'] >
	>
	type $mol_link__arg__ZNWK56YB = $mol_type_enforce<
		({ 
			'edit': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__GA0C5666 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_text__text__DSHPBJNL = $mol_type_enforce<
		ReturnType< $mol_text_demo['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight__WWB1XG7A = $mol_type_enforce<
		ReturnType< $mol_text_demo['search'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_page__title__9PSF2445 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__241G2TBK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__R07FT5OL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_link__arg__9YLNHHDF = $mol_type_enforce<
		({ 
			'edit': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__JOW6F2OC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_textarea__value__SC1DMDV6 = $mol_type_enforce<
		ReturnType< $mol_text_demo['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_page__title__1KWB89ZE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__3DHE54GV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__IUQCFXIH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_book2__Placeholder__05LQWKRM = $mol_type_enforce<
		any
		,
		ReturnType< $mol_book2['Placeholder'] >
	>
	type $mol_book2__pages__WW8RQ8ZR = $mol_type_enforce<
		ReturnType< $mol_text_demo['pages'] >
		,
		ReturnType< $mol_book2['pages'] >
	>
	export class $mol_text_demo extends $mol_example_large {
		search( next?: string ): string
		Search( ): $mol_search_jumper
		Edit_icon( ): $mol_icon_pencil
		Edit( ): $mol_link
		View( ): $mol_text
		View_page( ): $mol_page
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		text( next?: string ): string
		Code( ): $mol_textarea
		Code_page( ): $mol_page
		pages( ): readonly(any)[]
		Book( ): $mol_book2
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_demo extends $.$mol_text_demo {
        edit(): boolean;
        pages(): $mol_page[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_textarea__sidebar_showed__YZVOTCQ8 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['sidebar_showed'] >
	>
	type $mol_textarea__hint__6RAS2AI2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__N4FR2Z0K = $mol_type_enforce<
		ReturnType< $mol_textarea_demo['filled_descr'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_text__text__13MP1LGC = $mol_type_enforce<
		ReturnType< $mol_textarea_demo['symbols_hint'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__6CCEOTCH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_textarea_demo extends $mol_example {
		filled_descr( next?: string ): string
		Filled_descr( ): $mol_textarea
		symbols_hint( ): string
		Disabled( ): $mol_text
		Content( ): $mol_list
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_textarea_demo extends $.$mol_textarea_demo {
        symbols_hint(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_number__value__MDM8JB5X = $mol_type_enforce<
		ReturnType< $mol_theme_demo['hue'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__E4KFYECL = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_form_field__name__SQYO2T29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__QAQU3L3X = $mol_type_enforce<
		ReturnType< $mol_theme_demo['Hue'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__value__4AD6BMWS = $mol_type_enforce<
		ReturnType< $mol_theme_demo['hue_spread'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__11R2PK0Y = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_form_field__name__BR8TQ74W = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__DWEXPO31 = $mol_type_enforce<
		ReturnType< $mol_theme_demo['Hue_spread'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_row__sub__RCRM93CS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_theme_demo_case__theme__BJ5M8G7C = $mol_type_enforce<
		string
		,
		ReturnType< $mol_theme_demo_case['theme'] >
	>
	type $mol_theme_demo_case__theme__6Q4I3NPL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_theme_demo_case['theme'] >
	>
	type $mol_theme_demo_case__theme__WGUP5OVB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_theme_demo_case['theme'] >
	>
	type $mol_theme_demo_case__theme__76NQVVOP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_theme_demo_case['theme'] >
	>
	type $mol_theme_demo_case__title__FD1EXR5V = $mol_type_enforce<
		string
		,
		ReturnType< $mol_theme_demo_case['title'] >
	>
	type $mol_theme_demo_case__inner__7IT14NKW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_theme_demo_case['inner'] >
	>
	type $mol_scroll__sub__LG4MZR9Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $mol_theme_demo extends $mol_example_large {
		hue_deg( ): string
		hue_spread_deg( ): string
		hue( next?: number ): number
		Hue( ): $mol_number
		Hue_field( ): $mol_form_field
		hue_spread( next?: number ): number
		Hue_spread( ): $mol_number
		Hue_spread_field( ): $mol_form_field
		Config( ): $mol_row
		Base( ): $mol_theme_demo_case
		Accent( ): $mol_theme_demo_case
		Current( ): $mol_theme_demo_case
		Special( ): $mol_theme_demo_case
		Cases( ): $mol_theme_demo_case
		Scroll( ): $mol_scroll
		style( ): ({ 
			'--mol_theme_hue': ReturnType< $mol_theme_demo['hue_deg'] >,
			'--mol_theme_hue_spread': ReturnType< $mol_theme_demo['hue_spread_deg'] >,
		}) 
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
	type $mol_button_copy__title__P5KYXU7Q = $mol_type_enforce<
		ReturnType< $mol_theme_demo_case['title'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_row__sub__3ZAX429P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_copy__title__0IPLVWFC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_list__rows__8YDC8RI8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__title__5N718D1O = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__1LDFVXBX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__NIRVUVMP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__0AU7ZAPG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__CR7MFXS4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__SJHPMMO8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__AS41HJJ8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__CSFTEQYQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__BZ3W0K5E = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__title__ZJJ7X5U1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_list__rows__R2ELZZBO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_theme_demo_case extends $mol_view {
		theme( ): string
		Card2_text( ): $mol_button_copy
		Card2( ): $mol_row
		Card1_text( ): $mol_button_copy
		Card1( ): $mol_list
		Back( ): $mol_button_copy
		Line( ): $mol_button_copy
		Text( ): $mol_button_copy
		Field( ): $mol_button_copy
		Shade( ): $mol_button_copy
		Focus( ): $mol_button_copy
		Control( ): $mol_button_copy
		Hover( ): $mol_button_copy
		Current( ): $mol_button_copy
		Special( ): $mol_button_copy
		Self( ): $mol_list
		title( ): ReturnType< $mol_theme_demo_case['theme'] >
		sub( ): readonly(any)[]
		inner( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_theme_demo extends $.$mol_theme_demo {
        hue_deg(): string;
        hue_spread_deg(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_time_duration_demo extends $mol_example_code {
		title( ): string
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_time_interval_demo extends $mol_example_code {
		title( ): string
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	export class $mol_time_moment_demo extends $mol_example_code {
		title( ): string
		code( next?: string ): string
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__AG7EVAYD = $mol_type_enforce<
		ReturnType< $mol_toolbar['items'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_expand__checked__VHJWJDC4 = $mol_type_enforce<
		ReturnType< $mol_toolbar['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	export class $mol_toolbar extends $mol_view {
		items( ): readonly($mol_view)[]
		Bar( ): $mol_view
		expanded( next?: boolean ): boolean
		Expand( ): $mol_check_expand
		attr( ): ({ 
			'mol_toolbar_expanded': ReturnType< $mol_toolbar['expanded'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=toolbar.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_toolbar extends $.$mol_toolbar {
    }
}

declare namespace $ {

	export class $mol_icon_content_copy extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_content_cut extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=cut.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_content_paste extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=paste.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_delete extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=delete.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__hint__ZU0HEFJX = $mol_type_enforce<
		ReturnType< $mol_toolbar_demo['search_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__hint__6EU9FVWG = $mol_type_enforce<
		ReturnType< $mol_toolbar_demo['replace_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_button_major__title__1ZO24RSJ = $mol_type_enforce<
		ReturnType< $mol_toolbar_demo['approve_label'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_minor__title__ZACGO5IX = $mol_type_enforce<
		ReturnType< $mol_toolbar_demo['decline_label'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__sub__KGKWRDQ7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__sub__PQGOERCW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__sub__0YGZ7OXG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__sub__VQUPEIUJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_toolbar__items__DMQS8NKO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_toolbar['items'] >
	>
	export class $mol_toolbar_demo extends $mol_example_small {
		search_hint( ): string
		Search( ): $mol_string
		replace_hint( ): string
		Replace( ): $mol_string
		approve_label( ): string
		Approve( ): $mol_button_major
		decline_label( ): string
		Decline( ): $mol_button_minor
		Copy_icon( ): $mol_icon_content_copy
		Copy( ): $mol_button_minor
		Cut_icon( ): $mol_icon_content_cut
		Cut( ): $mol_button_minor
		Paste_icon( ): $mol_icon_content_paste
		Paste( ): $mol_button_minor
		Delete_icon( ): $mol_icon_delete
		Delete( ): $mol_button_minor
		Toolbar( ): $mol_toolbar
		title( ): string
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_transit extends $mol_ghost {
		animation_name_style( ): string
		reset( next?: any ): any
		style( ): ({ 
			'animationName': ReturnType< $mol_transit['animation_name_style'] >,
		}) 
		event( ): ({ 
			animationend( next?: ReturnType< $mol_transit['reset'] > ): ReturnType< $mol_transit['reset'] >,
		}) 
	}
	
}

//# sourceMappingURL=transit.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_transit extends $.$mol_transit {
        view_rect_prev(reset?: null): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        reset(next?: Event): void;
        animation_name(): string;
        animation_name_style(): string;
        animation_stylesheet(next?: null): HTMLStyleElement | null;
        auto(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_switch__value__QG8GQPBC = $mol_type_enforce<
		ReturnType< $mol_transit_demo['align'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__F878QEN1 = $mol_type_enforce<
		({ 
			'flex-start': string,
			'center': string,
			'flex-end': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_switch__value__EP601IY3 = $mol_type_enforce<
		ReturnType< $mol_transit_demo['justify'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__R836RZKU = $mol_type_enforce<
		({ 
			'flex-start': string,
			'center': string,
			'flex-end': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_list__rows__JPP2T9BJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_transit__Sub__EWJQWZWV = $mol_type_enforce<
		ReturnType< $mol_transit_demo['Float'] >
		,
		ReturnType< $mol_transit['Sub'] >
	>
	export class $mol_transit_demo extends $mol_example_large {
		align( next?: string ): string
		Align( ): $mol_switch
		justify( next?: string ): string
		Justify( ): $mol_switch
		Float( ): $mol_list
		Transit( ): $mol_transit
		title( ): string
		style( ): ({ 
			'justify-content': ReturnType< $mol_transit_demo['justify'] >,
			'align-items': ReturnType< $mol_transit_demo['align'] >,
		}) 
		sub( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_transit_demo extends $.$mol_transit_demo {
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_video_player extends $mol_view {
		uri( ): string
		controls( ): boolean
		autoplay( ): boolean
		inline( ): boolean
		loop( ): boolean
		muted( ): boolean
		poster( ): string
		stream( ): any
		revolume( next?: any ): any
		retime( next?: any ): any
		redurate( next?: any ): any
		playing_event( next?: any ): any
		play_event( next?: any ): any
		pause_event( next?: any ): any
		dom_name( ): string
		playing( next?: boolean ): boolean
		play( ): any
		pause( ): any
		volume( next?: number ): number
		time( next?: number ): number
		duration( ): number
		attr( ): ({ 
			'src': ReturnType< $mol_video_player['uri'] >,
			'controls': ReturnType< $mol_video_player['controls'] >,
			'autoplay': ReturnType< $mol_video_player['autoplay'] >,
			'playsinline': ReturnType< $mol_video_player['inline'] >,
			'loop': ReturnType< $mol_video_player['loop'] >,
			'muted': ReturnType< $mol_video_player['muted'] >,
			'poster': ReturnType< $mol_video_player['poster'] >,
		}) 
		field( ): ({ 
			'srcObject': ReturnType< $mol_video_player['stream'] >,
		}) 
		event( ): ({ 
			volumechange( next?: ReturnType< $mol_video_player['revolume'] > ): ReturnType< $mol_video_player['revolume'] >,
			timeupdate( next?: ReturnType< $mol_video_player['retime'] > ): ReturnType< $mol_video_player['retime'] >,
			durationchange( next?: ReturnType< $mol_video_player['redurate'] > ): ReturnType< $mol_video_player['redurate'] >,
			playing( next?: ReturnType< $mol_video_player['playing_event'] > ): ReturnType< $mol_video_player['playing_event'] >,
			play( next?: ReturnType< $mol_video_player['play_event'] > ): ReturnType< $mol_video_player['play_event'] >,
			pause( next?: ReturnType< $mol_video_player['pause_event'] > ): ReturnType< $mol_video_player['pause_event'] >,
		}) 
	}
	
}

//# sourceMappingURL=player.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_video_player extends $.$mol_video_player {
        dom_node(): HTMLVideoElement;
        volume(next?: number): number;
        time(next?: number): number;
        duration(): number;
        playing(next?: boolean): boolean;
        play(): void;
        pause(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_check_icon__checked__6MOZ9IDK = $mol_type_enforce<
		ReturnType< $mol_video_player_demo['playing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__M386KT5C = $mol_type_enforce<
		ReturnType< $mol_video_player_demo['Playing_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_paragraph__sub__41DF155X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_labeler__title__MXGK848F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__WVY5A15L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__DDT5HPXK = $mol_type_enforce<
		ReturnType< $mol_video_player_demo['time'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_view__FPNIEFM5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_view'] >
	>
	type $mol_labeler__title__545IEC18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__LF9S5KWP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__I3IZ7B5Q = $mol_type_enforce<
		ReturnType< $mol_video_player_demo['volume'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision__F5P15C7C = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision'] >
	>
	type $mol_labeler__title__PITX5KWW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__AQR41JCY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__ZQ92CTRO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_video_player_demo_playing__4W576S61 = $mol_type_enforce<
		Parameters< $mol_video_player_demo['playing'] >[0]
		,
		Parameters< ReturnType< $mol_video_player_demo['Player'] >['playing'] >[0]
	>
	type $mol_video_player_demo_volume__2GNYRK94 = $mol_type_enforce<
		Parameters< $mol_video_player_demo['volume'] >[0]
		,
		Parameters< ReturnType< $mol_video_player_demo['Player'] >['volume'] >[0]
	>
	type $mol_video_player_demo_time__2LYPZ64L = $mol_type_enforce<
		Parameters< $mol_video_player_demo['time'] >[0]
		,
		Parameters< ReturnType< $mol_video_player_demo['Player'] >['time'] >[0]
	>
	type $mol_video_player__uri__ZRXCZW4A = $mol_type_enforce<
		ReturnType< $mol_video_player_demo['uri'] >
		,
		ReturnType< $mol_video_player['uri'] >
	>
	export class $mol_video_player_demo extends $mol_example_large {
		files( ): ReturnType< ReturnType< $mol_video_player_demo['Open'] >['files'] >
		Open( ): $mol_button_open
		Playing_icon( ): $mol_icon_play
		Playing( ): $mol_check_icon
		Duration( ): $mol_paragraph
		Duration_labeler( ): $mol_labeler
		Time( ): $mol_number
		Time_labeler( ): $mol_labeler
		Volume( ): $mol_number
		Volume_labeler( ): $mol_labeler
		Controls( ): $mol_row
		uri( ): string
		playing( next?: ReturnType< ReturnType< $mol_video_player_demo['Player'] >['playing'] > ): ReturnType< ReturnType< $mol_video_player_demo['Player'] >['playing'] >
		volume( next?: ReturnType< ReturnType< $mol_video_player_demo['Player'] >['volume'] > ): ReturnType< ReturnType< $mol_video_player_demo['Player'] >['volume'] >
		time( next?: ReturnType< ReturnType< $mol_video_player_demo['Player'] >['time'] > ): ReturnType< ReturnType< $mol_video_player_demo['Player'] >['time'] >
		duration( ): ReturnType< ReturnType< $mol_video_player_demo['Player'] >['duration'] >
		Player( ): $mol_video_player
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_video_player_demo extends $.$mol_video_player_demo {
        uri(): string;
    }
}

declare namespace $ {

	export class $mol_video_camera extends $mol_video_player {
		transform( ): string
		facing( ): string
		aspect( ): number
		size( ): number
		width( ): ReturnType< $mol_video_camera['size'] >
		height( ): ReturnType< $mol_video_camera['size'] >
		brightness( ): number
		sharpness( ): number
		contrast( ): number
		saturation( ): number
		temperature( ): number
		torch( ): boolean
		controls( ): boolean
		style( ): ({ 
			'transform': ReturnType< $mol_video_camera['transform'] >,
		}) 
		video_constraints( ): ({ 
			'facingMode': ReturnType< $mol_video_camera['facing'] >,
			'aspectRatio': ReturnType< $mol_video_camera['aspect'] >,
			'width': ({ 
				'ideal': ReturnType< $mol_video_camera['width'] >,
			}) ,
			'height': ({ 
				'ideal': ReturnType< $mol_video_camera['height'] >,
			}) ,
		}) 
		video_settings( ): ({ 
			'brightness': ReturnType< $mol_video_camera['brightness'] >,
			'sharpness': ReturnType< $mol_video_camera['sharpness'] >,
			'contrast': ReturnType< $mol_video_camera['contrast'] >,
			'saturation': ReturnType< $mol_video_camera['saturation'] >,
			'advanced': readonly(any)[],
		}) 
	}
	
}

//# sourceMappingURL=camera.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_video_camera extends $.$mol_video_camera {
        stream_raw(): MediaStream & {
            destructor: () => void;
        };
        stream(): MediaStream & {
            destructor: () => void;
        };
        dom_node_actual(): HTMLVideoElement;
        transform(): string;
    }
}

declare namespace $ {

	export class $mol_icon_flashlight extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=flashlight.view.tree.d.ts.map
declare namespace $ {

	type $mol_video_camera__torch__SL7PGNBE = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['torch'] >
		,
		ReturnType< $mol_video_camera['torch'] >
	>
	type $mol_video_camera__brightness__U3GRB5HS = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['brightness'] >
		,
		ReturnType< $mol_video_camera['brightness'] >
	>
	type $mol_video_camera__sharpness__2J2EXB4J = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['sharpness'] >
		,
		ReturnType< $mol_video_camera['sharpness'] >
	>
	type $mol_video_camera__contrast__WOOMFGPF = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['contrast'] >
		,
		ReturnType< $mol_video_camera['contrast'] >
	>
	type $mol_video_camera__saturation__MI3M0LJZ = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['saturation'] >
		,
		ReturnType< $mol_video_camera['saturation'] >
	>
	type $mol_video_camera__temperature__2C396Q67 = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['temperature'] >
		,
		ReturnType< $mol_video_camera['temperature'] >
	>
	type $mol_row__sub__KGTA1OM3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_check_icon__checked__O6N9A4XY = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['torch'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__L8VRCLVK = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['Torch_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_labeler__title__NK3S9Z32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__N909E6Z2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__TWWV4DP5 = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['brightness'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__JJO3YXCO = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__UZKBCQDS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__G3KYTJUM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__BQ5MH4E9 = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['sharpness'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title__CFD4MC0I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__SIEQ2YRK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__24YK7UI7 = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['contrast'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__15B2C9OF = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__7ECFKBZR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__OV0WZS30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__80F9Y1B5 = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['saturation'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__0DQXSYN8 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__RDK50IZ2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__V1E0XXHE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value__57PY8QY8 = $mol_type_enforce<
		ReturnType< $mol_video_camera_demo['temperature'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__precision_change__WYDQS7FW = $mol_type_enforce<
		number
		,
		ReturnType< $mol_number['precision_change'] >
	>
	type $mol_labeler__title__ZV750OJS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__QJ0JAZHF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_row__sub__OD5OYBW7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_scroll__sub__FSYGJC28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	export class $mol_video_camera_demo extends $mol_example_large {
		Player( ): $mol_video_camera
		View( ): $mol_row
		torch( next?: boolean ): boolean
		Torch_icon( ): $mol_icon_flashlight
		Torch( ): $mol_check_icon
		Torch_labeler( ): $mol_labeler
		brightness( next?: number ): number
		Brightness( ): $mol_number
		Brightness_labeler( ): $mol_labeler
		sharpness( next?: number ): number
		Sharpness( ): $mol_number
		Sharpness_labeler( ): $mol_labeler
		contrast( next?: number ): number
		Contrast( ): $mol_number
		Contrast_labeler( ): $mol_labeler
		saturation( next?: number ): number
		Saturation( ): $mol_number
		Saturation_labeler( ): $mol_labeler
		temperature( next?: number ): number
		Temperature( ): $mol_number
		Temperature_labeler( ): $mol_labeler
		Controls( ): $mol_row
		Scroll( ): $mol_scroll
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_password__value__ETFQ2WKY = $mol_type_enforce<
		ReturnType< $mol_password_demo['pass'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_password__value__7Y7F6JVI = $mol_type_enforce<
		ReturnType< $mol_password_demo['pass2'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_password__hint__690GT0KT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_password['hint'] >
	>
	export class $mol_password_demo extends $mol_example_small {
		pass( next?: string ): string
		Simple( ): $mol_password
		pass2( next?: string ): string
		Hint( ): $mol_password
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__plugins__HIM09I6Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['plugins'] >
	>
	type $mol_view__sub__BNC8K9FF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_lights_demo extends $mol_example_small {
		Theme( ): $mol_theme_auto
		Lighter( ): $mol_lights_toggle
		Sample( ): $mol_view
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_labeler__title__WRR0MP3Y = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__9I2K0BHW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_locale_select__dictionary__GYHL4RR2 = $mol_type_enforce<
		({ 
			'ru': string,
			'en': string,
		}) 
		,
		ReturnType< $mol_locale_select['dictionary'] >
	>
	type $mol_labeler__title__JA6G8NSS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__S7Y22Y27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	export class $mol_locale_demo extends $mol_example_small {
		All_languages( ): $mol_locale_select
		All_languages_labeler( ): $mol_labeler
		List_of_languages( ): $mol_locale_select
		List_of_languages_labeler( ): $mol_labeler
		title( ): string
		sub( ): readonly(any)[]
		tags( ): readonly(any)[]
		aspects( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=demo.view.tree.d.ts.map
declare namespace $ {

	type $mol_link_source__uri__DRFL5MBH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $hyoo_page__side_main_id__L5JDN7VN = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_page['side_main_id'] >
	>
	type $hyoo_page__menu_title__Q7MES3P6 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_page['menu_title'] >
	>
	type $hyoo_page__News__NE1I578F = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_page['News'] >
	>
	type $hyoo_page__tools_ext__4PSIFROD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_page['tools_ext'] >
	>
	type $hyoo_apps__menu_title__WRDQ0S9W = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_apps['menu_title'] >
	>
	type $hyoo_apps__tools__GKQD0A6T = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_apps['tools'] >
	>
	type $mol_app_demo__menu_title__NR2UQHG8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_app_demo['menu_title'] >
	>
	type $mol_app_demo__tools__KOROIE5I = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_app_demo['tools'] >
	>
	type $hyoo_mol_bench__menu_tools__7RRCQQPD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_mol_bench['menu_tools'] >
	>
	type $mol_link__hint__Y3DICU6F = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__uri__YZ1C7V5O = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__0VSO35B2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $hyoo_tree__title__NWKTEDXW = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_tree['title'] >
	>
	type $hyoo_tree__Presets__8EEOR563 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_tree['Presets'] >
	>
	type $hyoo_tree__source_tools__3M2KU6ZT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_tree['source_tools'] >
	>
	type $hyoo_tree__pipeline_default__IFKRALVK = $mol_type_enforce<
		ReturnType< $hyoo_mol['tree_pipeline'] >
		,
		ReturnType< $hyoo_tree['pipeline_default'] >
	>
	type $hyoo_tree__source_default__PV003RL2 = $mol_type_enforce<
		ReturnType< $hyoo_mol['tree_source'] >
		,
		ReturnType< $hyoo_tree['source_default'] >
	>
	type $mol_frame__title__FHPM3DGI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri__12XE9X2H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $hyoo_mol extends $mol_book2_catalog {
		Theme( ): $mol_theme_auto
		Sources( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		tools_root( ): readonly(any)[]
		Lang( ): $mol_locale_select
		Docs( ): $hyoo_page
		Apps( ): $hyoo_apps
		Demos( ): $mol_app_demo
		Bench( ): $hyoo_mol_bench
		View_tree_syntax_icon( ): $mol_icon_help
		View_tree_syntax( ): $mol_link
		tree_pipeline( ): readonly(any)[]
		tree_source( ): string
		View_tree( ): $hyoo_tree
		Icons( ): $mol_frame
		plugins( ): readonly(any)[]
		Placeholder( ): any
		menu_title( ): string
		menu_tools( ): ReturnType< $hyoo_mol['tools_root'] >
		menu_foot( ): readonly(any)[]
		param( ): string
		spreads( ): ({ 
			'docs': ReturnType< $hyoo_mol['Docs'] >,
			'apps': ReturnType< $hyoo_mol['Apps'] >,
			'demos': ReturnType< $hyoo_mol['Demos'] >,
			'bench': ReturnType< $hyoo_mol['Bench'] >,
			'view.tree': ReturnType< $hyoo_mol['View_tree'] >,
			'icons': ReturnType< $hyoo_mol['Icons'] >,
		}) 
	}
	
}

//# sourceMappingURL=mol.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_mol extends $.$hyoo_mol {
        hubhabRedirect(): void;
        auto(): void;
        Placeholder(): any;
    }
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=node.d.ts.map
