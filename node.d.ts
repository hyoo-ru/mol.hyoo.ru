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
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        destructor(): void;
        toString(): string;
        toJSON(): any;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
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
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
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
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
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
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
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
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
    }
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, [...Args], Result>;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
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
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
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
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

/// <reference types="node" />
/// <reference types="node" />
declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
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
    function $mol_wire_probe<Value>(task: () => Value, next?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_wire_async<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host : (...args: Args) => Promise<Res> : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => infer Res_1 ? Res_1 extends Promise<any> ? Host[key] : (...args: Args_1) => Promise<Res_1> : Host[key]; };
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
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
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
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale' | 'cubic-bezier';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
    }
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        card: $mol_style_func<"var", "--mol_theme_card">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        special: $mol_style_func<"var", "--mol_theme_special">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: {
        readonly block: $mol_style_func<"var", "--mol_gap_block">;
        readonly text: $mol_style_func<"var", "--mol_gap_text">;
        readonly round: $mol_style_func<"var", "--mol_gap_round">;
        readonly space: $mol_style_func<"var", "--mol_gap_space">;
        readonly blur: $mol_style_func<"var", "--mol_gap_blur">;
    };
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
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
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
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        scroll_top(val?: any): number;
        scroll_left(val?: any): number;
        field(): {
            tabIndex: number;
        };
        event(): {
            scroll: (event?: any) => any;
        };
        tabindex(): number;
        event_scroll(event?: any): any;
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
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    type Color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | readonly ['first' | 'last', 'baseline'] | readonly ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            color?: Color | Common;
            image?: readonly (readonly [$mol_style_func<'url'> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        backdropFilter: string | Common;
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
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
            color?: readonly [Color, Color] | 'auto' | Common;
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
        border?: {
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: Directions<Color> | Common;
            width?: Directions<Length> | Common;
        };
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
        aspectRatio: number | Common;
    }
    export {};
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
    } & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
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
    class $mol_book2 extends $mol_scroll {
        menu_title(): string;
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        Gap(id: any): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

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
    class $mol_link extends $mol_view {
        uri(): string;
        dom_name(): string;
        attr(): {
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        sub(): readonly $mol_view_content[];
        arg(): {};
        event(): {
            click: (event?: any) => any;
        };
        uri_toggle(): string;
        hint(): string;
        hint_safe(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
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
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

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
    class $mol_pop extends $mol_view {
        showed(val?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        prefer(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_view {
        sub(): readonly $mol_view_content[];
        style(): {
            maxHeight: number;
        };
        attr(): {
            mol_pop_align: string;
            tabindex: number;
        };
        content(): readonly $mol_view_content[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $ {
    let $mol_layer: {
        readonly hover: $mol_style_func<"var", "--mol_layer_hover">;
        readonly focus: $mol_style_func<"var", "--mol_layer_focus">;
        readonly speck: $mol_style_func<"var", "--mol_layer_speck">;
        readonly float: $mol_style_func<"var", "--mol_layer_float">;
        readonly popup: $mol_style_func<"var", "--mol_layer_popup">;
    };
}

declare namespace $ {
}

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
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        theme(): string;
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): {
            click: (event?: any) => any;
            dblclick: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        attr(): {
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        clicks(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        hint_safe(): string;
        error(): string;
    }
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

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): {
            keydown: (event?: any) => any;
        };
        key(): {};
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any): boolean;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any): readonly any[];
        keys_y(val?: any): readonly any[];
        current_x(val?: any): any;
        current_y(val?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): {
            keydown: (event?: any) => any;
        };
        event_key(event?: any): any;
    }
}

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
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        ensure(): void;
        buffer(next?: Uint8Array): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): undefined;
    }
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<infer Res2> ? (...args: Args) => Res2 : Host : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => Promise<infer Res_1> ? (...args: Args_1) => Res_1 : Host[key]; };
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "unknown" | "success" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
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
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    function $mol_huggingface_run(this: $, space: string, method: string | number, ...data: readonly any[]): readonly any[];
    function $mol_huggingface_rest(space: string, method: string, ...data: readonly any[]): readonly any[];
    function $mol_huggingface_ws(space: string, fn_index: number, ...data: readonly any[]): Promise<readonly any[]> & {
        destructor: () => void;
    };
}

declare namespace $ {
    function $hyoo_lingua_translate(this: $, lang: string, text: string): string;
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
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        selection(val?: any): readonly number[];
        auto(): readonly any[];
        field(): {
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
            inputMode: string;
            enterkeyhint: string;
        };
        attr(): {
            maxlength: number;
            type: string;
        };
        event(): {
            input: (event?: any) => any;
        };
        plugins(): readonly any[];
        selection_watcher(): any;
        disabled(): boolean;
        value(val?: any): string;
        value_changed(val?: any): string;
        hint(): string;
        hint_visible(): string;
        spellcheck(): boolean;
        autocomplete_native(): string;
        selection_end(): number;
        selection_start(): number;
        keyboard(): string;
        enter(): string;
        length_max(): number;
        type(val?: any): string;
        event_change(event?: any): any;
        submit_with_ctrl(): boolean;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
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
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
        style_size(): {};
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            viewBox: string;
            preserveAspectRatio: string;
        };
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            d: string;
        };
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

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
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        row_width(): number;
        sub(): readonly any[];
    }
}

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
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly $mol_view_content[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly $mol_view_content[];
        string(id: any): string;
    }
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<$mol_type_merge_object<Intersection>, Intersection> ? Intersection : {
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
        [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
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
    class $mol_search extends $mol_pop {
        query(val?: any): string;
        suggests(): readonly string[];
        plugins(): readonly $mol_plugin[];
        showed(val?: any): boolean;
        align_hor(): string;
        Anchor(): $mol_view;
        bubble_content(): readonly $mol_view_content[];
        Suggest(id: any): $mol_button_minor;
        clear(val?: any): any;
        Hotkey(): $$.$mol_hotkey;
        nav_components(): readonly $mol_view[];
        nav_focused(component?: any): any;
        Nav(): $$.$mol_nav;
        suggests_showed(val?: any): boolean;
        hint(): string;
        submit(event?: any): any;
        enabled(): boolean;
        keyboard(): string;
        enter(): string;
        bring(): void;
        Query(): $$.$mol_string;
        Clear_icon(): $mol_icon_cross;
        Clear(): $mol_button_minor;
        anchor_content(): readonly any[];
        menu_items(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        suggest_select(id: any, event?: any): any;
        suggest_label(id: any): string;
        Suggest_label(id: any): $$.$mol_dimmer;
        suggest_content(id: any): readonly $mol_view_content[];
    }
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $mol_string | $mol_button_minor | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_page extends $mol_view {
        dom_name(): string;
        field(): {
            tabIndex: number;
        };
        sub(): readonly any[];
        tabindex(): number;
        Logo(): any;
        title_content(): readonly any[];
        Title(): $mol_view;
        tools(): readonly $mol_view_content[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body(): readonly $mol_view_content[];
        body_scroll_top(val?: any): number;
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_book2_catalog extends $mol_book2 {
        param(): string;
        spread(val?: any): string;
        spreads(): {};
        Spread(): $mol_view;
        pages(): readonly any[];
        Spread_close(): $$.$mol_link;
        menu_title(): string;
        menu_tools(): readonly any[];
        menu_head(): readonly any[];
        menu_filter(next?: any): string;
        Menu_filter(): $$.$mol_search;
        arg(id: any): {};
        spread_title(id: any): string;
        Menu_link_title(id: any): $$.$mol_dimmer;
        menu_link_content(id: any): readonly any[];
        Menu_link(id: any): $$.$mol_link;
        menu_links(): readonly any[];
        Menu_links(): $$.$mol_list;
        menu_body(): readonly any[];
        menu_foot(): readonly any[];
        Menu_title(): $mol_view;
        Menu_tools(): $mol_view;
        Menu(): $mol_page;
        spread_close_arg(): {};
        Spread_close_icon(): $mol_icon_cross;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $.$$ {
    class $mol_book2_catalog extends $.$mol_book2_catalog {
        pages(): any[];
        menu_body(): ($mol_list | $mol_search)[];
        menu_links(): $mol_link[];
        Spread(): any;
        spread(next?: string): string;
        arg(spread: string): {
            [x: string]: string | null;
        };
        spread_close_arg(): {
            [x: string]: null;
        };
        spread_title(spread: string): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_theme_auto extends $mol_plugin {
        attr(): {
            mol_theme: string;
        };
        theme(): string;
    }
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
    class $mol_icon_github_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link_source extends $mol_link {
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_github_circle;
    }
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: boolean;
            "aria-checked": string;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        checked(next?: any): boolean;
        aria_checked(): string;
        aria_role(): string;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_brightness_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon(): $mol_icon_brightness_6;
        hint(): string;
        checked(val?: any): boolean;
        Lights_icon(): $mol_icon_brightness_6;
        lights(val?: any): boolean;
    }
}

declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_pick extends $mol_pop {
        event(): {
            keydown: (event?: any) => any;
        };
        Anchor(): $$.$mol_check;
        keydown(event?: any): any;
        trigger_enabled(): boolean;
        trigger_content(): readonly $mol_view_content[];
        hint(): string;
        Trigger(): $$.$mol_check;
    }
}

declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_dots_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_select extends $mol_pick {
        dictionary(val?: any): {};
        options(): readonly string[];
        value(val?: any): string;
        option_label_default(): string;
        Option_row(id: any): $mol_button_minor;
        No_options(): $mol_view;
        plugins(): readonly any[];
        hint(): string;
        bubble_content(): readonly any[];
        Filter(): $$.$mol_string;
        Trigger_icon(): $mol_icon_dots_vertical;
        event_select(id: any, event?: any): any;
        option_label(id: any): string;
        filter_pattern(val?: any): string;
        Option_label(id: any): $$.$mol_dimmer;
        option_content(id: any): readonly any[];
        no_options_message(): string;
        nav_components(): readonly $mol_view[];
        option_focused(component?: any): any;
        nav_cycle(val?: any): boolean;
        Nav(): $$.$mol_nav;
        menu_content(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        Bubble_pane(): $$.$mol_scroll;
        submit(event?: any): any;
        enabled(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_string | $mol_button_minor | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_string | $mol_button_minor)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_locale_select extends $mol_select {
    }
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

declare let $hyoo_sync_revision: string;

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
    function $mol_int62_to_string({ lo, hi }: $mol_int62_pair): `${string}_${string}`;
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
    var $mol_crypto_native: Crypto;
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
        static size: number;
        constructor(native: CryptoKey & {
            type: 'public';
        });
        static from(serial: string): Promise<$mol_crypto_auditor_public>;
        serial(): Promise<string>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_auditor_private extends Object {
        readonly native: CryptoKey & {
            type: 'private';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'private';
        });
        static from(serial: string): Promise<$mol_crypto_auditor_private>;
        serial(): Promise<string>;
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
    function $hyoo_sync_peer(path: string): Promise<$hyoo_crowd_peer>;
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
    function $mol_diff_path<Item>(...paths: Item[][]): {
        prefix: Item[];
        suffix: Item[][];
    };
}

declare namespace $ {
    class $mol_error_mix extends Error {
        errors: Error[];
        constructor(message: string, ...errors: Error[]);
        toJSON(): string;
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
        static from(land_id: $mol_int62_string, clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): $hyoo_crowd_clock_bin;
        land(): `${string}_${string}`;
    }
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
    }
}

declare namespace $ {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next?: unknown): {} | null;
        str(next?: string): string;
        numb(next?: number): number;
        bool(next?: boolean): boolean;
        yoke(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): $hyoo_crowd_land | null;
    }
}

declare namespace $ {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
        yoke<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node, law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): InstanceType<Node> | null;
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
        peers(): readonly `${string}_${string}`[];
        residents(): readonly `${string}_${string}`[];
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
    class $hyoo_crowd_fund<Node extends typeof $hyoo_crowd_node> extends $mol_object {
        world: $hyoo_crowd_world;
        Node: Node;
        constructor(world: $hyoo_crowd_world, Node: Node);
        Item(id: $mol_int62_string | `${$mol_int62_string}!${$mol_int62_string}`): InstanceType<Node>;
        make(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): InstanceType<Node>;
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
            next(): IteratorReturnResult<any> | IteratorYieldResult<Key>;
        };
        entries(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<[Key, Value]>;
        };
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<[Key, Value]>;
        };
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
        grab(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): Promise<$hyoo_crowd_land>;
        sign_units(units: readonly $hyoo_crowd_unit[]): Promise<$hyoo_crowd_unit[]>;
        delta_land(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<$hyoo_crowd_unit[]>;
        delta_batch(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<Uint8Array>;
        delta(clocks?: Map<`${string}_${string}`, readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]>): AsyncGenerator<Uint8Array, void, unknown>;
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
        [index in keyof Tasks]: index extends number ? ReturnType<Tasks[index]> : Tasks[index];
    };
}

declare namespace $ {
    let $hyoo_sync_masters: string[];
}

declare namespace $ {
    class $hyoo_sync_yard<Line> extends $mol_object2 {
        log_pack(data: any): any;
        peer(): $hyoo_crowd_peer;
        world(): $hyoo_crowd_world;
        land_init(land: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_grab(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): $hyoo_crowd_land;
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
        master_link(): string;
        master(): Line | null;
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
        get indexes(): Schema["Indexes"] extends infer T ? { [Name in keyof T]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema['Doc'];
        }>; } : never;
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
        has(val: string | number | boolean | null): boolean;
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
        new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
        prototype: Blob;
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
    class $mol_meter extends $mol_plugin {
        zoom(): number;
        width(val?: any): number;
        height(val?: any): number;
        left(val?: any): number;
        right(val?: any): number;
        bottom(val?: any): number;
        top(val?: any): number;
    }
}

declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: number;
            top: number;
            right: number;
            bottom: number;
            width: number;
            height: number;
            zoom: number;
        };
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        zoom(): number;
    }
}

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
    class $mol_touch extends $mol_plugin {
        start_zoom(val?: any): number;
        start_distance(val?: any): number;
        zoom(val?: any): number;
        allow_draw(): boolean;
        allow_pan(): boolean;
        allow_zoom(): boolean;
        action_type(val?: any): string;
        action_point(val?: any): $mol_vector_2d<number>;
        start_pan(val?: any): readonly any[];
        pan(val?: any): $mol_vector_2d<number>;
        pointer_center(): $mol_vector_2d<number>;
        start_pos(val?: any): any;
        swipe_precision(): number;
        swipe_right(val?: any): any;
        swipe_bottom(val?: any): any;
        swipe_left(val?: any): any;
        swipe_top(val?: any): any;
        swipe_from_right(val?: any): any;
        swipe_from_bottom(val?: any): any;
        swipe_from_left(val?: any): any;
        swipe_from_top(val?: any): any;
        swipe_to_right(val?: any): any;
        swipe_to_bottom(val?: any): any;
        swipe_to_left(val?: any): any;
        swipe_to_top(val?: any): any;
        draw_start(event?: any): any;
        draw(event?: any): any;
        draw_end(event?: any): any;
        style(): {
            "touch-action": string;
            "overscroll-behavior": string;
        };
        event(): {
            pointerdown: (event?: any) => any;
            pointermove: (event?: any) => any;
            pointerup: (event?: any) => any;
            pointerleave: (event?: any) => any;
            wheel: (event?: any) => any;
        };
        event_start(event?: any): any;
        event_move(event?: any): any;
        event_end(event?: any): any;
        event_leave(event?: any): any;
        event_wheel(event?: any): any;
    }
}

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
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_book extends $mol_view {
        sub(): readonly $mol_view[];
        minimal_width(): number;
        pages(): readonly $mol_view[];
        plugins(): readonly $mol_plugin[];
        Page(id: any): $mol_book_page;
        Placeholder(): $mol_book_placeholder;
        pages_wrapped(): readonly $mol_view[];
        width(): number;
        Meter(): $$.$mol_meter;
        event_front_up(val?: any): any;
        event_front_down(val?: any): any;
        Touch(): $$.$mol_touch;
        page(id: any): any;
        page_visible(id: any): boolean;
    }
    class $mol_book_placeholder extends $mol_view {
        minimal_width(): number;
        attr(): {
            tabindex: any;
        };
    }
    class $mol_book_page extends $mol_ghost {
        attr_static(): {
            tabindex: number;
            mol_book_page_visible: boolean;
        };
        attr(): {
            mol_book_page_focused: boolean;
            mol_book_page_visible: boolean;
        };
        visible(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
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
        changed_moment(): $mol_time_moment;
        book(next?: $hyoo_page_side | null): $hyoo_page_side | null;
        books(): readonly $hyoo_page_side[];
        bookmarks_node(next?: readonly $hyoo_page_side[]): $hyoo_crowd_list;
        bookmarks(next?: readonly $hyoo_page_side[]): $hyoo_page_side[];
        pages_node(): $hyoo_crowd_list;
        pages(next?: readonly $hyoo_page_side[]): $hyoo_page_side[];
        bookmarked(id: $mol_int62_string, next?: boolean): boolean;
        authors(): `${string}_${string}`[];
        aura(next?: string): string;
        aura_effective(): string;
        history_node(): $hyoo_crowd_list | null;
        history(): Set<`${string}_${string}`>;
        history_add(id: $mol_int62_string): void;
        news(): $hyoo_page_side[];
    }
}

declare namespace $ {
    class $mol_avatar extends $mol_icon {
        view_box(): string;
        id(): string;
        path(): string;
    }
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_magnify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            paddingLeft: string;
        };
        checked(val?: any): boolean;
        enabled(): boolean;
        level_style(): string;
        expanded(val?: any): boolean;
        expandable(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_meta_link extends $mol_link {
        minimal_height(): number;
        id(): `${string}_${string}`;
        title(): string;
        meta(): $hyoo_meta_model;
        param(): string;
        all_title(): string;
        sub(): readonly any[];
        Avatar(): $$.$mol_avatar;
        highlight(): string;
        Title(): $$.$mol_dimmer;
    }
}

declare namespace $.$$ {
    class $hyoo_meta_link extends $.$hyoo_meta_link {
        title(): string;
        uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_drag extends $mol_ghost {
        event(): {
            dragstart: (event?: any) => any;
            drag: (event?: any) => any;
            dragend: (event?: any) => any;
        };
        attr(): {
            draggable: boolean;
            mol_drag_status: string;
        };
        transfer(): {
            "text/plain": string;
            "text/html": string;
            "text/uri-list": string;
        };
        allow_copy(): boolean;
        allow_link(): boolean;
        allow_move(): boolean;
        image(): Element;
        start(event?: any): any;
        drag_start(event?: any): any;
        move(event?: any): any;
        drag_move(event?: any): any;
        end(event?: any): any;
        drag_end(event?: any): any;
        status(val?: any): string;
    }
}

declare namespace $.$$ {
    class $mol_drag extends $.$mol_drag {
        status(next?: "ready" | "drag"): "ready" | "drag";
        drag_start(event: DragEvent): void;
        drag_end(event: DragEvent): void;
    }
}

declare namespace $ {
    class $mol_drop extends $mol_ghost {
        enabled(next?: any): boolean;
        event(): {
            dragenter: (event?: any) => any;
            dragover: (event?: any) => any;
            dragleave: (event?: any) => any;
            drop: (event?: any) => any;
        };
        attr(): {
            mol_drop_status: string;
        };
        adopt(transfer?: any): {};
        receive(transfer?: any): any;
        allow(): readonly any[];
        enter(event?: any): any;
        move(event?: any): any;
        leave(event?: any): any;
        drop(event?: any): any;
        status(val?: any): string;
    }
}

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
    class $mol_icon_pin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pin_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_meta_menu_items extends $mol_list {
        id(): string;
        editing(): boolean;
        drop_allow(): readonly any[];
        ids(): readonly unknown[];
        list(): $hyoo_crowd_list;
        item_title(id: any): string;
        item(id: any): $hyoo_meta_model;
        item_list(id: any): $hyoo_crowd_list;
        item_moved(id: any, next?: any): any;
        rows(): readonly any[];
        item_expandable(id: any): boolean;
        item_expanded(id: any, next?: any): boolean;
        Item_expand(id: any): $$.$mol_check_expand;
        editable(): boolean;
        transfer_adopt(next?: any): any;
        receive_after(id: any, next?: any): any;
        item_drag_end(id: any, next?: any): any;
        item_text(id: any): string;
        item_html(id: any): string;
        item_uri(id: any): string;
        param(): string;
        highlight(): string;
        Item_link(id: any): $$.$hyoo_meta_link;
        Item_drag(id: any): $$.$mol_drag;
        Item_drop_after(id: any): $$.$mol_drop;
        item_remove(id: any, next?: any): any;
        Item_remove_icon(id: any): $mol_icon_cross;
        Item_remove(id: any): $mol_button_minor;
        item_pin(id: any, next?: any): any;
        Item_pin_icon(id: any): $mol_icon_pin_outline;
        Item_pin(id: any): $mol_button_minor;
        receive_inside(id: any, next?: any): any;
        item_add(id: any, next?: any): any;
        Item_add_icon(id: any): $mol_icon_plus;
        Item_add(id: any): $mol_button_minor;
        Item_drop_inside(id: any): $$.$mol_drop;
        item_row(id: any): readonly any[];
        Item_row(id: any): $mol_view;
        Item_items(id: any): $$.$hyoo_meta_menu_items;
        item_content(id: any): readonly any[];
        Item(id: any): $$.$mol_list;
        items(): readonly any[];
    }
}

declare namespace $.$$ {
    class $hyoo_meta_menu_items extends $.$hyoo_meta_menu_items {
        id(): `${string}_${string}`;
        editable(): boolean;
        item_editable(id: $mol_int62_string): boolean;
        ids(): readonly `${string}_${string}`[];
        items(): $mol_list[];
        item(id: $mol_int62_string): $hyoo_meta_model;
        item_expandable(id: $mol_int62_string): boolean;
        item_content(id: $mol_int62_string): $mol_view[];
        item_row(id: $mol_int62_string): ($mol_button_minor | $mol_check_expand | $mol_drop)[];
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
}

declare namespace $ {
    class $hyoo_meta_menu extends $mol_page {
        editable(): boolean;
        item_moved(id: any, next?: any): any;
        yard(): $hyoo_sync_yard<unknown>;
        item_title(id: any): string;
        item(id: any): $hyoo_meta_model;
        ids(): readonly unknown[];
        world(): $hyoo_crowd_world | null;
        list(): $hyoo_crowd_list;
        item_list(id: any): $hyoo_crowd_list;
        drop_allow(): readonly any[];
        Logo(): $$.$mol_avatar;
        tools_ext(): readonly any[];
        head(): readonly any[];
        tools(): readonly any[];
        body(): readonly any[];
        id(): string;
        search(next?: any): string;
        Search(): $$.$mol_search;
        search_show(next?: any): boolean;
        Search_icon(): $mol_icon_magnify;
        Search_toggle(): $mol_check_icon;
        editing(next?: any): boolean;
        Editing_icon(): $mol_icon_pencil_outline;
        Editing(): $mol_check_icon;
        add(next?: any): any;
        Add_icon(): $mol_icon_plus;
        Add(): $mol_button_minor;
        found(): readonly `${string}_${string}`[];
        item_uri(id: any): string;
        item_add(id: any, next?: any): any;
        Found(): $$.$hyoo_meta_menu_items;
        item_expanded(id: any, next?: any): boolean;
        Content(): $$.$hyoo_meta_menu_items;
        transfer_adopt(next?: any): any;
        receive_end(next?: any): any;
        Drop_zone(): $mol_view;
        Drop_end(): $$.$mol_drop;
    }
}

declare namespace $.$$ {
    class $hyoo_meta_menu extends $.$hyoo_meta_menu {
        id(): `${string}_${string}`;
        head(): ($mol_view | $mol_search)[];
        editable(): boolean;
        item_editable(id: $mol_int62_string): boolean;
        tools(): readonly any[];
        body(): ($mol_drop | $hyoo_meta_menu_items)[];
        search_show(next?: boolean): boolean;
        item(id: $mol_int62_string): $hyoo_meta_model;
        found(): `${string}_${string}`[];
        add(): any;
        transfer_adopt(transfer: DataTransfer): `${string}_${string}` | null | undefined;
        receive_end(dropped: $mol_int62_string): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_sync extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sync_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_sync_online extends $mol_link {
        minimal_width(): number;
        minimal_height(): number;
        yard(): $hyoo_sync_yard<unknown>;
        uri(): string;
        sub(): readonly any[];
        attr(): {
            title: string;
            href: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        master_link(): string;
        Well(): $$.$mol_avatar;
        Fail(): $mol_icon_sync_off;
        hint(): string;
        message(): string;
    }
}

declare namespace $.$$ {
    class $hyoo_sync_online extends $.$hyoo_sync_online {
        message(): string;
        sub(): $mol_icon_sync_off[];
        hint(): string;
        master_link(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            src: string;
            alt: string;
            loading: string;
            decoding: string;
            crossOrigin: any;
        };
        attr(): {
            width: number;
            height: number;
        };
        event(): {
            load: (next?: any) => any;
        };
        minimal_width(): number;
        minimal_height(): number;
        uri(): string;
        loading(): string;
        decoding(): string;
        cors(): any;
        natural_width(next?: any): number;
        natural_height(next?: any): number;
        load(next?: any): any;
    }
}

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
    class $mol_link_iconed extends $mol_link {
        sub(): readonly any[];
        content(): readonly any[];
        host(): string;
        icon(): string;
        Icon(): $$.$mol_image;
        title(): string;
    }
}

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
    class $mol_icon_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_page_menu extends $hyoo_meta_menu {
        title_default(): string;
        attr(): {
            mol_theme: string;
        };
        Title(): $$.$hyoo_meta_link;
        foot(): readonly any[];
        title(): string;
        side(): $$.$hyoo_page_side;
        Online(): $$.$hyoo_sync_online;
        Source(): $mol_link_source;
        About(): $$.$mol_link_iconed;
        Aura_icon(): $mol_icon_image;
        aura_showing(next?: any): boolean;
        Aura_showing(): $mol_check_icon;
        Lights(): $$.$mol_lights_toggle;
    }
}

declare namespace $.$$ {
    class $hyoo_page_menu extends $.$hyoo_page_menu {
        title(): string;
    }
}

declare namespace $ {
    class $hyoo_page_side_news extends $mol_page {
        news(): $$.$hyoo_page_side[];
        side(): $$.$hyoo_page_side;
        title(): string;
        attr(): {
            mol_theme: string;
        };
        body(): readonly any[];
        item(id: any): $$.$hyoo_page_side;
        item_title(id: any): string;
        Item(id: any): $$.$hyoo_meta_link;
        items(): readonly any[];
        Section_list(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $hyoo_page_side_news extends $.$hyoo_page_side_news {
        items(): $hyoo_meta_link[];
        item(side: $hyoo_page_side): $hyoo_page_side;
        item_title(side: $hyoo_page_side): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_page_side_menu extends $hyoo_meta_menu {
        side_current(): $$.$hyoo_page_side;
        Title(): $$.$hyoo_meta_link;
        title(): string;
        side(): $$.$hyoo_page_side;
    }
}

declare namespace $.$$ {
    class $hyoo_page_side_menu extends $.$hyoo_page_side_menu {
        item_expanded(id: $mol_int62_string, next?: boolean): boolean;
        item_moved(what: $mol_int62_string, where: $mol_int62_string | null): void;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_paginator extends $mol_bar {
        sub(): readonly any[];
        backward_hint(): string;
        backward(event?: any): any;
        Backward_icon(): $mol_icon_chevron_left;
        Backward(): $mol_button_minor;
        value(val?: any): number;
        Value(): $mol_view;
        forward_hint(): string;
        forward(event?: any): any;
        Forward_icon(): $mol_icon_chevron_right;
        Forward(): $mol_button_minor;
    }
}

declare namespace $.$$ {
    class $mol_paginator extends $.$mol_paginator {
        backward(event: Event): void;
        forward(event: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_search_jumper extends $mol_search {
        Root(): $mol_view;
        forward(event?: any): void;
        backward(event?: any): void;
        Index(): $$.$mol_paginator;
        plugins(): readonly any[];
        index(val?: any): number;
        Backward(): $$.$mol_hotkey;
        escape(val?: any): any;
        Forward(): $$.$mol_hotkey;
    }
}

declare namespace $.$$ {
    class $mol_search_jumper extends $.$mol_search_jumper {
        results(): $mol_view[][];
        index(next?: number): number;
        anchor_content(): ($mol_string | $mol_button_minor | $mol_paginator)[];
    }
}

declare namespace $ {
    class $mol_icon_information extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_information_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_stack extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_text_code_token extends $mol_dimmer {
        attr(): {
            mol_text_code_token_type: string;
        };
        type(): string;
    }
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name(): string;
        type(): string;
        attr(): {
            href: string;
            target: string;
            mol_text_code_token_type: string;
        };
        uri(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_text_code_row extends $mol_paragraph {
        text(): string;
        minimal_height(): number;
        numb_showed(): boolean;
        syntax(): any;
        uri_resolve(id: any): string;
        Numb(): $mol_view;
        Token(id: any): $mol_text_code_token;
        Token_link(id: any): $mol_text_code_token_link;
        find_pos(id: any): any;
        numb(): number;
        token_type(id: any): string;
        token_text(id: any): string;
        highlight(): string;
        token_uri(id: any): string;
    }
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
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
        tokens(path: number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
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
    class $mol_icon_clipboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_copy extends $mol_button_minor {
        blobs(): readonly Blob[];
        data(): {};
        sub(): readonly any[];
        text(): string;
        text_blob(next?: any): Blob;
        html(): string;
        html_blob(next?: any): Blob;
        Icon(): $mol_icon_clipboard_outline;
        title(): string;
    }
}

declare namespace $ {
    function $mol_html_encode(text: string): string;
}

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
    class $mol_text_code extends $mol_stack {
        attr(): {
            mol_text_code_sidebar_showed: boolean;
        };
        text(): string;
        text_lines(): readonly string[];
        find_pos(id: any): any;
        uri_base(): string;
        sub(): readonly any[];
        sidebar_showed(): boolean;
        render_visible_only(): boolean;
        row_numb(id: any): number;
        row_text(id: any): string;
        syntax(): any;
        uri_resolve(id: any): string;
        highlight(): string;
        Row(id: any): $$.$mol_text_code_row;
        rows(): readonly any[];
        Rows(): $$.$mol_list;
        text_export(): string;
        Copy(): $$.$mol_button_copy;
    }
}

declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        sub(): ($mol_list | $mol_button_copy)[];
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
    class $mol_float extends $mol_view {
        style(): {
            minHeight: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_grid extends $mol_view {
        row_height(): number;
        row_ids(): readonly string[][];
        row_id(id: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        minimal_width(): number;
        sub(): readonly any[];
        Head(): $mol_grid_row;
        Row(id: any): $mol_grid_row;
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        Cell_number(id: any): $mol_grid_number;
        Col_head(id: any): $mol_float;
        Cell_branch(id: any): $$.$mol_check_expand;
        Cell_content(id: any): readonly any[];
        rows(): readonly $mol_view[];
        Table(): $mol_grid_table;
        head_cells(): readonly $mol_view[];
        cells(id: any): readonly $mol_view[];
        cell_content(id: any): readonly $mol_view_content[];
        cell_content_text(id: any): readonly $mol_view_content[];
        cell_content_number(id: any): readonly $mol_view_content[];
        col_head_content(id: any): readonly $mol_view_content[];
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any): boolean;
        needle(): string;
        cell_value(id: any): string;
        Cell_dimmer(id: any): $$.$mol_dimmer;
    }
    class $mol_grid_table extends $mol_list {
    }
    class $mol_grid_row extends $mol_view {
        sub(): readonly $mol_view[];
        cells(): readonly $mol_view[];
    }
    class $mol_grid_cell extends $mol_view {
        minimal_height(): number;
    }
    class $mol_grid_number extends $mol_grid_cell {
    }
}

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
        col_type(col_id: string): "text" | "number" | "branch";
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
    class $mol_embed_native extends $mol_scroll {
        uri(val?: any): string;
        dom_name(): string;
        window(): any;
        attr(): {
            data: string;
            type: string;
        };
        sub(): readonly any[];
        message(): {
            hashchange: (next?: any) => any;
        };
        mime(): string;
        title(): string;
        Fallback(): $$.$mol_link;
        uri_change(next?: any): any;
    }
}

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
    class $mol_frame extends $mol_embed_native {
        dom_name(): string;
        attr(): {
            data: any;
            type: any;
            src: string;
            srcdoc: any;
            allow: string;
        };
        fullscreen(): boolean;
        accelerometer(): boolean;
        autoplay(): boolean;
        encription(): boolean;
        gyroscope(): boolean;
        pip(): boolean;
        clipboard_read(): boolean;
        clipboard_write(): boolean;
        uri(val?: any): string;
        html(): any;
        allow(): string;
    }
}

declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_embed_youtube extends $mol_check {
        uri(): string;
        video_preview(): string;
        video_id(): string;
        checked(next?: any): boolean;
        sub(): readonly any[];
        active(next?: any): boolean;
        title(): string;
        Image(): $$.$mol_image;
        video_embed(): string;
        Frame(): $$.$mol_frame;
    }
}

declare namespace $.$$ {
    class $mol_embed_youtube extends $.$mol_embed_youtube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
        sub(): ($mol_image | $mol_frame)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_embed_any extends $mol_view {
        Image(): $$.$mol_image;
        Object(): $$.$mol_embed_native;
        Youtube(): $$.$mol_embed_youtube;
        title(): string;
        uri(): string;
    }
}

declare namespace $.$$ {
    class $mol_embed_any extends $.$mol_embed_any {
        type(): "image" | "object" | "youtube";
        sub(): $mol_image[] | $mol_embed_youtube[] | $mol_embed_native[];
    }
}

declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        param(): string;
        flow_tokens(): readonly any[];
        auto(): readonly any[];
        Paragraph(id: any): $$.$mol_paragraph;
        Quote(id: any): $$.$mol_text;
        List(id: any): $mol_text_list;
        item_index(id: any): number;
        Header(id: any): $$.$mol_text_header;
        Pre(id: any): $$.$mol_text_code;
        Cut(id: any): $mol_view;
        Table(id: any): $$.$mol_grid;
        Table_row(id: any): $mol_grid_row;
        Table_cell(id: any): $$.$mol_text;
        Grid(id: any): $$.$mol_grid;
        Grid_row(id: any): $mol_grid_row;
        Grid_cell(id: any): $$.$mol_text;
        String(id: any): $$.$mol_dimmer;
        Span(id: any): $mol_text_span;
        Code_line(id: any): $$.$mol_text_code_row;
        Link(id: any): $$.$mol_link_iconed;
        Link_http(id: any): $$.$mol_link_iconed;
        Embed(id: any): $$.$mol_embed_any;
        auto_scroll(): any;
        block_content(id: any): readonly any[];
        uri_resolve(id: any): string;
        quote_text(id: any): string;
        highlight(): string;
        list_type(id: any): string;
        list_text(id: any): string;
        header_level(id: any): number;
        header_arg(id: any): {};
        pre_text(id: any): string;
        code_sidebar_showed(): boolean;
        pre_sidebar_showed(): boolean;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        table_cells(id: any): readonly any[];
        table_cell_text(id: any): string;
        grid_rows(id: any): readonly any[];
        grid_cells(id: any): readonly any[];
        grid_cell_text(id: any): string;
        line_text(id: any): string;
        line_type(id: any): string;
        line_content(id: any): readonly any[];
        code_syntax(): any;
        link_uri(id: any): string;
        link_host(id: any): string;
    }
    class $mol_text_header extends $mol_paragraph {
        level(): number;
        sub(): readonly any[];
        arg(): {};
        content(): readonly any[];
        Link(): $$.$mol_link;
    }
    class $mol_text_span extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_type: string;
        };
        type(): string;
    }
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        flow_tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        block_type(index: number): string;
        rows(): ($mol_view | $mol_paragraph | $mol_text_code | $mol_grid | $mol_text_header)[];
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
        table_head_cells(blockId: number): $mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_text[];
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
        }): $mol_text[];
        grid_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
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
        block_content(index: number): ($mol_dimmer | $mol_link_iconed | $mol_text_code_row | $mol_embed_any | $mol_text_span)[];
        line_tokens(path: readonly number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($mol_dimmer | $mol_link_iconed | $mol_text_code_row | $mol_embed_any | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        link_host(path: readonly number[]): string;
        auto_scroll(): void;
    }
    class $mol_text_header extends $.$mol_text_header {
        dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_calendar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_today extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_format extends $mol_string {
        allow(): string;
        hint(): string;
        keyboard(): string;
        mask(id: any): string;
    }
}

declare namespace $.$$ {
    class $mol_format extends $.$mol_format {
        selection([from, to]?: [number, number]): number[];
        value_changed(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_hor extends $mol_view {
    }
}

declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_calendar extends $mol_list {
        sub(): readonly any[];
        weeks(): readonly $mol_view[];
        weeks_count(): number;
        Weekday(id: any): $mol_calendar_day;
        Week(id: any): $$.$mol_hor;
        Day(id: any): $mol_calendar_day;
        month_string(): string;
        month_moment(): $mol_time_moment;
        title(): string;
        Title(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        weekdays(): readonly $mol_view[];
        Weekdays(): $$.$mol_hor;
        weekend(id: any): boolean;
        weekday(id: any): string;
        week_days(id: any): readonly $mol_view[];
        day_ghost(id: any): boolean;
        day_holiday(id: any): boolean;
        day_selected(id: any): boolean;
        day_theme(id: any): any;
        day_text(id: any): string;
        day_content(id: any): readonly any[];
    }
    class $mol_calendar_day extends $mol_view {
        minimal_height(): number;
        minimal_width(): number;
        attr(): {
            mol_calendar_holiday: boolean;
            mol_calendar_ghost: boolean;
            mol_calendar_selected: boolean;
            mol_theme: any;
        };
        holiday(): boolean;
        ghost(): boolean;
        selected(): boolean;
        theme(): any;
    }
}

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
        day_ghost(day: string): boolean;
        day_selected(day: string): boolean;
        day_theme(day: string): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_date extends $mol_pick {
        Icon(): $mol_icon_calendar;
        bubble_content(): readonly any[];
        value_number(val?: any): number;
        value_moment(val?: any): $mol_time_moment;
        today_enabled(): boolean;
        today_click(event?: any): any;
        Today_icon(): $mol_icon_calendar_today;
        Today(): $mol_button_minor;
        value(val?: any): string;
        input_mask(id: any): string;
        enabled(): boolean;
        Input(): $$.$mol_format;
        clear(event?: any): any;
        Clear_icon(): $mol_icon_cross;
        Clear(): $mol_button_minor;
        input_content(): readonly any[];
        Input_row(): $mol_view;
        month_moment(): $mol_time_moment;
        day_selected(id: any): boolean;
        day_click(id: any, event?: any): any;
        prev_hint(): string;
        prev(event?: any): any;
        Prev_icon(): $mol_icon_chevron_left;
        Prev(): $mol_button_minor;
        next_hint(): string;
        next(event?: any): any;
        Next_icon(): $mol_icon_chevron_right;
        Next(): $mol_button_minor;
        Calendar_tools(): $mol_view;
        Calendar_title(): $mol_view;
        Calendar(): $mol_date_calendar;
    }
    class $mol_date_calendar extends $mol_calendar {
        day_content(id: any): readonly any[];
        day_click(id: any, event?: any): any;
        Day_button(id: any): $mol_button_minor;
    }
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): (string | $mol_icon_calendar)[];
        input_mask(val: string): "____-__-__ __:__" | "____-__-__ ";
        input_content(): ($mol_button_minor | $mol_format)[];
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
        today_enabled(): boolean;
        today_click(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_text_list extends $mol_text {
        auto_scroll(): any;
        attr(): {
            mol_text_list_type: string;
        };
        Paragraph(id: any): $mol_text_list_item;
        type(): string;
    }
    class $mol_text_list_item extends $mol_paragraph {
        attr(): {
            mol_text_list_item_index: number;
        };
        index(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_page_side_view extends $mol_page {
        profile(): $$.$hyoo_page_side;
        peer(id: any): $$.$hyoo_page_side;
        book(): $$.$hyoo_page_side;
        highlight(): string;
        id(): `${string}_${string}`;
        editable(): boolean;
        title(next?: any): string;
        side_details(next?: any): string;
        released(): boolean;
        side_release(): string;
        changed_moment(): $mol_time_moment;
        authors(): `${string}_${string}`[];
        side(): $$.$hyoo_page_side;
        plugins(): readonly any[];
        auto(): readonly any[];
        Logo(): $$.$mol_check;
        head(): readonly any[];
        tools(): readonly any[];
        slides_content(): string;
        body(): readonly any[];
        search_start(next?: any): any;
        Search_start(): $$.$mol_hotkey;
        slides_send(): any;
        history_mark(): any;
        menu_showed(next?: any): boolean;
        Avatar(): $$.$mol_avatar;
        Menu_toggle(): $$.$mol_check;
        search_query(val?: any): string;
        search_stop(next?: any): any;
        Search(): $$.$mol_search_jumper;
        editing(next?: any): boolean;
        Edit_icon(): $mol_icon_pencil_outline;
        Unreleased(): $mol_speck;
        edit_toggle_label(): readonly any[];
        Edit_toggle(): $mol_check_icon;
        search_show(next?: any): boolean;
        Search_icon(): $mol_icon_magnify;
        Search_toggle(): $mol_check_icon;
        info(next?: any): boolean;
        Info_icon(): $mol_icon_information_outline;
        Info_toggle(): $mol_check_icon;
        bookmark(next?: any): boolean;
        Bookmark_icon(): $mol_icon_bookmark_outline;
        Bookmark_toggle(): $mol_check_icon;
        details(): string;
        Details(): $$.$mol_text;
        Changed(): $$.$mol_date;
        Author_link(id: any): $$.$hyoo_meta_link;
        author_list(): readonly any[];
        Author_list(): $mol_view;
        Signature(): $mol_view;
    }
}

declare namespace $.$$ {
    class $hyoo_page_side_view extends $.$hyoo_page_side_view {
        head(): ($mol_view | $mol_search_jumper)[];
        bookmark(next?: boolean): boolean;
        public(next?: boolean): boolean | undefined;
        Edit_toggle(): any;
        edit_toggle_label(): $mol_speck[];
        search_show(next?: boolean): boolean;
        search_start(event?: KeyboardEvent): void;
        search_stop(event?: KeyboardEvent): void;
        details(): string;
        author_list(): $hyoo_meta_link[];
        slides_content(): string;
        slides_send(): void;
        history_mark(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_string_button extends $mol_string {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_publish extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_export_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]>;
    };
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: Set<string> | null;
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
    class $mol_icon_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_download extends $mol_button_minor {
        blob(): any;
        uri(): string;
        file_name(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_download;
        title(): string;
    }
}

declare namespace $.$$ {
    class $mol_button_download extends $.$mol_button_download {
        uri(): string;
        click(): void;
    }
}

declare namespace $ {
    class $mol_icon_shield extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_textarea extends $mol_stack {
        attr(): {
            mol_textarea_clickable: boolean;
            mol_textarea_sidebar_showed: boolean;
        };
        event(): {
            keydown: (event?: any) => any;
            pointermove: (event?: any) => any;
        };
        sub(): readonly any[];
        symbols_alt(): {
            comma: string;
            period: string;
            dash: string;
            equals: string;
            graveAccent: string;
            forwardSlash: string;
            E: string;
            X: string;
            C: string;
            P: string;
            H: string;
            key0: string;
            key8: string;
            key2: string;
            key3: string;
            key4: string;
            key6: string;
            key7: string;
            bracketOpen: string;
            bracketClose: string;
            slashBack: string;
        };
        symbols_alt_shift(): {
            V: string;
            X: string;
            O: string;
            key1: string;
            key4: string;
            key7: string;
            comma: string;
            period: string;
            semicolon: string;
            quoteSingle: string;
            dash: string;
            equals: string;
            graveAccent: string;
            bracketOpen: string;
            bracketClose: string;
        };
        clickable(val?: any): boolean;
        sidebar_showed(): boolean;
        press(event?: any): any;
        hover(event?: any): any;
        value(val?: any): string;
        hint(): string;
        enabled(): boolean;
        spellcheck(): boolean;
        length_max(): number;
        selection(val?: any): readonly number[];
        submit(next?: any): any;
        bring(): void;
        Edit(): $mol_textarea_edit;
        row_numb(id: any): number;
        highlight(): string;
        View(): $$.$mol_text_code;
    }
    class $mol_textarea_edit extends $mol_string {
        dom_name(): string;
        enter(): string;
        field(): {
            scrollTop: number;
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
            inputMode: string;
            enterkeyhint: string;
        };
    }
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        symbol_insert(event: KeyboardEvent): void;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        rows(): readonly any[];
        label(): readonly $mol_view_content[];
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        bids(): readonly string[];
        label(): readonly any[];
        content(): readonly any[];
        name(): string;
        bid(): string;
        Bid(): $mol_view;
        control(): any;
    }
}

declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_list {
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        event(): {
            keydown: (event?: any) => any;
        };
        submit(event?: any): any;
        rows(): readonly any[];
        keydown(event?: any): any;
        form_fields(): readonly $mol_form_field[];
        body(): readonly $mol_form_field[];
        Body(): $$.$mol_list;
        buttons(): readonly $mol_view[];
        foot(): readonly $mol_view[];
        Foot(): $mol_row;
    }
}

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
    class $hyoo_page_side_edit extends $mol_page {
        title(next?: any): string;
        details(next?: any): string;
        details_selection(next?: any): number[];
        aura(next?: any): string;
        editable(): boolean;
        released(): boolean;
        side(): $$.$hyoo_page_side;
        bring(): void;
        Title(): $mol_string_button;
        export_sign(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Syntax(): $$.$mol_link_iconed;
        publish(next?: any): any;
        Publish_icon(): $mol_icon_publish;
        Publish(): $mol_button_minor;
        Export_icon(): $mol_icon_export_variant;
        download_name(): string;
        download_blob(): Blob;
        Download(): $$.$mol_button_download;
        copy_text(): string;
        copy_html(): string;
        Copy_html(): $$.$mol_button_copy;
        Export(): $$.$mol_pick;
        rights(next?: any): boolean;
        Rights_icon(): $mol_icon_shield_account;
        Rights_toggle(): $mol_check_icon;
        close(next?: any): any;
        Close_icon(): $mol_icon_cross;
        Close(): $mol_button_minor;
        Details_edit(): $$.$mol_textarea;
        Aura(): $mol_string_button;
        Aura_field(): $$.$mol_form_field;
    }
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
        readonly uri: string;
        content: string;
        readonly marker: string;
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
        readonly header: string;
        readonly table: string;
        readonly list: string;
        readonly quote: string;
        readonly cut: string;
        readonly paragraph: string;
        readonly script: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
        readonly marker: string;
        readonly indent: string;
        readonly kids: string;
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
}

declare namespace $ {
    class $mol_expander extends $mol_list {
        rows(): readonly any[];
        expanded(val?: any): boolean;
        expandable(): boolean;
        label(): readonly any[];
        Trigger(): $$.$mol_check_expand;
        Tools(): any;
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_page_side_info extends $mol_page {
        text_tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        text_header_title(id: any): string;
        section_arg(id: any): {
            [x: string]: string;
        };
        section_level(id: any): number;
        Text(): $$.$mol_text;
        details(): string;
        details_node(): $hyoo_crowd_text | null;
        referrers_list(): string[];
        referrers_stat(id: any): number;
        side(): $$.$hyoo_page_side;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        slides_uri(): string;
        Slides(): $$.$mol_link_iconed;
        close(next?: any): any;
        Close_icon(): $mol_icon_cross;
        Close(): $mol_button_minor;
        size(): string;
        Size(): $mol_labeler;
        chars(): string;
        Chars(): $mol_labeler;
        words(): string;
        Words(): $mol_labeler;
        weight(): string;
        Weight(): $mol_labeler;
        Stat(): $mol_view;
        section_expanded(next?: any): boolean;
        section_title(id: any): string;
        Section_link(id: any): $$.$mol_link;
        section_list(): readonly any[];
        Section_list(): $$.$mol_expander;
        ref_expanded(next?: any): boolean;
        ref_uri(id: any): string;
        Ref_item_link(id: any): $$.$mol_link_iconed;
        ref_stat(id: any): number;
        Ref_item_stat(id: any): $mol_view;
        Ref_item(id: any): $mol_view;
        ref_list(): readonly any[];
        Ref_list(): $$.$mol_expander;
        word_item_text(id: any): string;
        Word_item_text(id: any): $mol_view;
        word_item_stat(id: any): number;
        Word_item_stat(id: any): $mol_speck;
        Word_item(id: any): $mol_view;
        word_list_items(): readonly any[];
        Word_list_items(): $mol_row;
        Word_list(): $$.$mol_expander;
    }
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
        section_list(): $mol_link[];
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
}

declare namespace $ {
    class $hyoo_meta_person extends $hyoo_meta_model {
    }
}

declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        attr(): {
            mol_theme: string;
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_meta_rights extends $mol_page {
        title(): string;
        editors(): readonly `${string}_${string}`[];
        meta(): $hyoo_meta_model;
        body(): readonly any[];
        peer(id: any): $hyoo_meta_person;
        Editor_link(id: any): $$.$hyoo_meta_link;
        editor_list(): readonly any[];
        Editor_list(): $$.$mol_list;
        editor_add_bid(): string;
        editor_add_id(next?: any): string;
        editable(): boolean;
        Editor_add_id(): $$.$mol_string;
        editor_add_allowed(): boolean;
        editor_add_submit(next?: any): any;
        Editor_add_icon(): $mol_icon_plus;
        Editor_add_submit(): $mol_button_major;
        Editor_add_bar(): $mol_bar;
        editor_add_preview(): $hyoo_meta_model;
        Editor_add_preview(): $$.$hyoo_meta_link;
        editor_fill_all(next?: any): any;
        Editor_fill_all(): $mol_button_minor;
        editor_add_rows(): readonly any[];
        Editor_add_form(): $$.$mol_list;
        Editor_add(): $$.$mol_form_field;
        blocks(): readonly any[];
        Content(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $hyoo_meta_rights extends $.$hyoo_meta_rights {
        editable(): boolean;
        blocks(): ($mol_list | $mol_form_field)[];
        editor_list(): $hyoo_meta_link[];
        editor_add_rows(): ($mol_button_minor | $hyoo_meta_link | $mol_bar)[];
        editor_add_id(next?: string): `${string}_${string}`;
        editor_add_allowed(): boolean;
        editor_add_bid(): string;
        editor_fill_all(): void;
        editor_add_submit(): void;
        editor_add_preview(): $hyoo_meta_person;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_page extends $mol_book2 {
        side_main_id(): string;
        yard(): $hyoo_sync_client;
        side_title(id: any): string;
        pages_node(id: any): $hyoo_crowd_list;
        side(id: any): $$.$hyoo_page_side;
        side_current(): $$.$hyoo_page_side;
        bookmarks_node(): $hyoo_crowd_list;
        profile(): $$.$hyoo_page_side;
        style(): {
            backgroundImage: string;
        };
        plugins(): readonly any[];
        auto(): readonly any[];
        Placeholder(): $$.$hyoo_page_menu;
        pages(): readonly any[];
        aura_image(): string;
        Theme(): $$.$mol_theme_auto;
        ref_track(): any;
        side_uri(id: any): string;
        page_add(next?: any): any;
        side_add(id: any, next?: any): any;
        aura_showing(next?: any): boolean;
        search(): string;
        Menu(): $$.$hyoo_page_menu;
        News(): $$.$hyoo_page_side_news;
        book_side(): $$.$hyoo_page_side;
        book_pages_node(): readonly any[];
        tools_ext(): readonly any[];
        Side_menu(): $$.$hyoo_page_side_menu;
        side_menu_showed(next?: any): boolean;
        editing(next?: any): boolean;
        info(next?: any): boolean;
        View_details(id: any): $$.$mol_text;
        View(id: any): $$.$hyoo_page_side_view;
        rights(next?: any): boolean;
        edit_close(id: any, next?: any): any;
        Edit(id: any): $$.$hyoo_page_side_edit;
        info_close(id: any, next?: any): any;
        Info(id: any): $$.$hyoo_page_side_info;
        rights_close(next?: any): any;
        Сlose_icon(): $mol_icon_cross;
        Rights_close(): $mol_button_minor;
        Rights(id: any): $$.$hyoo_meta_rights;
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
        edit_close(): void;
        rights_close(): void;
        info_close(): void;
        side(id: $mol_int62_string): $hyoo_page_side;
        side_uri(id: $mol_int62_string): string;
        side_current_id(): `${string}_${string}`;
        side_current(): $hyoo_page_side;
        side_current_book(): $hyoo_page_side;
        book_id(): "" | `${string}_${string}`;
        book_side(): $hyoo_page_side | null;
        book_pages_node(): $hyoo_crowd_list;
        side_menu_showed(next?: boolean): boolean;
        pages(): ($mol_view | $hyoo_page_side_news | $hyoo_page_side_menu | $hyoo_page_side_view | $hyoo_page_side_edit | $hyoo_page_side_info | $hyoo_meta_rights)[];
        page_add(): void;
        side_add(id: $mol_int62_string): void;
        ref_track(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_apps extends $mol_book2 {
        Placeholder(): any;
        plugins(): readonly any[];
        pages(): readonly any[];
        groups(): {
            release: string;
            develop: string;
            preview: string;
        };
        apps(): {
            idea: {
                target: string;
                title: string;
                uri: string;
            };
            board: {
                target: string;
                title: string;
                uri: string;
            };
            notes: {
                target: string;
                title: string;
                uri: string;
            };
            page: {
                target: string;
                title: string;
                uri: string;
            };
            slides: {
                target: string;
                title: string;
                uri: string;
            };
            search: {
                target: string;
                title: string;
                uri: string;
            };
            lingua: {
                target: string;
                title: string;
                uri: string;
            };
            talks: {
                target: string;
                title: string;
                uri: string;
            };
            map: {
                target: string;
                title: string;
                uri: string;
            };
            scout: {
                target: string;
                title: string;
                uri: string;
            };
            fallacy: {
                target: string;
                title: string;
                uri: string;
            };
            meme: {
                target: string;
                title: string;
                uri: string;
            };
            calc: {
                target: string;
                title: string;
                uri: string;
            };
            play: {
                target: string;
                title: string;
                uri: string;
            };
            life: {
                target: string;
                title: string;
                uri: string;
            };
            iq: {
                target: string;
                title: string;
                uri: string;
            };
            todomvc: {
                target: string;
                title: string;
                uri: string;
            };
            game: {
                target: string;
                title: string;
                uri: string;
            };
            draw: {
                target: string;
                title: string;
                uri: string;
            };
            artist: {
                target: string;
                title: string;
                uri: string;
            };
            invest: {
                target: string;
                title: string;
                uri: string;
            };
            lamps: {
                target: string;
                title: string;
                uri: string;
            };
            questions: {
                target: string;
                title: string;
                uri: string;
            };
            shelter: {
                target: string;
                title: string;
                uri: string;
            };
            mail: {
                target: string;
                title: string;
                uri: string;
            };
            gazporn: {
                target: string;
                title: string;
                uri: string;
            };
            toys: {
                target: string;
                title: string;
                uri: string;
            };
            mol: {
                target: string;
                title: string;
                uri: string;
            };
            sync: {
                target: string;
                title: string;
                uri: string;
            };
            piterjs: {
                target: string;
                title: string;
                uri: string;
            };
            habhub: {
                target: string;
                title: string;
                uri: string;
            };
            jseval: {
                target: string;
                title: string;
                uri: string;
            };
            jsperf: {
                target: string;
                title: string;
                uri: string;
            };
            jsopt: {
                target: string;
                title: string;
                uri: string;
            };
            bench: {
                target: string;
                title: string;
                uri: string;
            };
            toxic: {
                target: string;
                title: string;
                uri: string;
            };
            request: {
                target: string;
                title: string;
                uri: string;
            };
            tree: {
                target: string;
                title: string;
                uri: string;
            };
            icons: {
                target: string;
                title: string;
                uri: string;
            };
            rdf: {
                target: string;
                title: string;
                uri: string;
            };
        };
        Theme(): $$.$mol_theme_auto;
        menu_title(): string;
        Source(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools(): readonly any[];
        filter(next?: any): string;
        Filter(): $$.$mol_search;
        group_name(id: any): string;
        group_expanded(id: any, next?: any): boolean;
        app_uri_default(id: any): string;
        app_arg(id: any): {};
        app_title(id: any): string;
        Menu_link_title(id: any): $$.$mol_dimmer;
        Menu_link_out(id: any): $$.$mol_link_iconed;
        Menu_link_in_icon(id: any): $mol_icon_chevron_right;
        Menu_link_in(id: any): $$.$mol_link;
        Menu_item(id: any): $mol_view;
        group_items(id: any): readonly any[];
        Group(id: any): $$.$mol_expander;
        group_list(): readonly any[];
        Menu_items(): $$.$mol_list;
        Menu_title(): $mol_view;
        Menu_tools(): $mol_view;
        Menu(): $mol_page;
        app_uri_embed(id: any, next?: any): string;
        App(id: any): $$.$mol_frame;
    }
}

declare namespace $.$$ {
    class $hyoo_apps extends $.$hyoo_apps {
        app(): string | null;
        group_name(id: string): any;
        group_list(): $mol_expander[];
        group_items(group: string): $mol_view[];
        pages(): ($mol_page | $mol_frame)[];
        app_title(app: string): any;
        app_uri_default(app: string, next?: string): any;
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
    class $mol_example extends $mol_view {
        tags(): readonly string[];
        aspects(): readonly string[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_example_small extends $mol_example {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_example_large extends $mol_example {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_tag_sieve extends $mol_object2 {
        ids_tags(): Record<string, string[]>;
        separator(): string;
        tags(): string[];
        ids(): string[];
        ids_tags_initial(): {
            ids_tags: Record<string, string[]>;
            tags: string[];
            ids: string[];
        };
        ids_tags_filtered(prefix: string): {
            ids_tags: Record<string, string[]>;
            tags: string[];
            ids: string[];
        };
        prefix(): string[];
        prefix_sub(id: string): string[];
        select(id: string): $mol_tag_sieve;
    }
}

declare namespace $ {
    class $mol_tag_tree extends $mol_list {
        sieve(): $mol_tag_sieve;
        levels_expanded(): number;
        sort_items(): any;
        sort_tags(): any;
        sub(): readonly $mol_view[];
        tag_name(id: any): string;
        tag_names(): {};
        tag_list(): readonly $mol_view[];
        item_list(): readonly $mol_view[];
        Item(id: any): $mol_view;
        Tag(id: any): $$.$mol_expander;
        ids_tags(): {};
        separator(): string;
        item_title(id: any): string;
        tag_expanded(id: any, next?: any): boolean;
        sieve_sub(id: any): $mol_tag_sieve;
        Tag_tree(id: any): $$.$mol_tag_tree;
    }
}

declare namespace $ {
    function $mol_compare_text<Item>(item?: (item: Item) => string): (a: Item, b: Item) => number;
}

declare namespace $.$$ {
    class $mol_tag_tree extends $.$mol_tag_tree {
        sieve_sub(path: readonly string[]): $mol_tag_sieve;
        item_list(): $mol_view[];
        tag_list(): $mol_expander[];
        tag_expanded(id: readonly string[], next?: boolean): boolean;
        tag_expanded_default(id: readonly string[]): boolean;
        sort_tags(): (a: unknown, b: unknown) => number;
        sort_items(): (a: unknown, b: unknown) => number;
        tag_names(): Record<string, string>;
        tag_name(path: readonly string[]): string;
        item_title(id: readonly string[]): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_app_demo_menu extends $mol_page {
        names(): readonly string[];
        widget_tags(id: any): readonly string[];
        widget_aspects(id: any): readonly string[];
        widget_title(id: any): string;
        search_start(next?: any): any;
        Body(): $$.$mol_scroll;
        Option(id: any): $$.$mol_link;
        filter(val?: any): string;
        Filter(): $$.$mol_search;
        ids_tags(): {};
        levels_expanded_default(): number;
        levels_expanded(): number;
        Tree(): $$.$mol_tag_tree;
        List(): $$.$mol_list;
        option_arg(id: any): {};
        option_title(id: any): string;
        Option_title(id: any): $$.$mol_dimmer;
    }
}

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
        names_filtered(): readonly string[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_forum extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forum_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_open_in_new extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_chat extends $mol_link {
        seed(): string;
        opened(): boolean;
        arg(): {
            mol_chat: string;
        };
        hint(): string;
        sub(): readonly any[];
        pages(): readonly any[];
        Icon(): $mol_icon_forum_outline;
        title(): string;
        standalone(): string;
        Standalone_icon(): $mol_icon_open_in_new;
        Esternal(): $$.$mol_link;
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        embed(): string;
        Embed(): $$.$mol_frame;
        Page(): $mol_page;
    }
}

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
    class $mol_icon_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_app_demo_detail extends $mol_page {
        description(): string;
        tools(): readonly any[];
        body(): readonly any[];
        readme(next?: any): boolean;
        readme_icon(): $mol_icon_information_outline;
        Readme(): $mol_check_icon;
        chat_seed(): string;
        chat_pages(): $mol_page[];
        Chat(): $$.$mol_chat;
        edit_hint(): string;
        Edit_speck(): $mol_speck;
        Edit_icon(): $mol_icon_settings;
        edit_uri(): string;
        Edit(): $$.$mol_link;
        close_hint(): string;
        Close_icon(): $mol_icon_cross;
        close_arg(): {
            demo: any;
        };
        Close(): $$.$mol_link;
        Demo(): $mol_view;
    }
}

declare namespace $ {
    class $mol_app_demo_readme extends $mol_page {
        link_template(): string;
        repo(): string;
        module(): readonly string[];
        title(): string;
        opened(next?: any): boolean;
        tools(): readonly any[];
        Readme(): $$.$mol_text;
        Not_found(): $mol_view;
        source_link(): string;
        source_hint(): string;
        Source_link(): $mol_link_source;
        Close_icon(): $mol_icon_cross;
        close(next?: any): any;
        Close(): $mol_button_minor;
        readme(): string;
        uri_base(next?: any): string;
        Not_found_caption(): string;
    }
}

declare namespace $.$$ {
    class $mol_app_demo_readme_not_found_error extends Error {
        module: readonly string[];
        constructor(module: readonly string[]);
    }
    class $mol_app_demo_readme extends $.$mol_app_demo_readme {
        close(): void;
        link(module: readonly string[]): string;
        uri_base(next?: string): string;
        readme(): string;
        body(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_status extends $mol_view {
        status(): string;
        minimal_height(): number;
        minimal_width(): number;
        sub(): readonly any[];
        message(): string;
    }
}

declare namespace $.$$ {
    class $mol_status extends $.$mol_status {
        message(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_app_demo extends $mol_book2 {
        editor_title(): string;
        source_prefix(): string;
        repo_dict(): {
            mol: string;
        };
        plugins(): readonly any[];
        demo_block_list(): readonly any[];
        search_start(next?: any): void;
        Menu(): $$.$mol_app_demo_menu;
        chat_pages(id: any): $mol_page[];
        Detail(id: any): $mol_app_demo_detail;
        Readme_page(): $$.$mol_app_demo_readme;
        Detail_empty_message(): $$.$mol_status;
        detail_title(): string;
        Theme(): $$.$mol_theme_auto;
        Search_start(): $$.$mol_hotkey;
        menu_title(): string;
        names(): readonly string[];
        widget_tags(id: any): readonly string[];
        widget_aspects(id: any): readonly string[];
        widget_title(id: any): string;
        sources_uri(): string;
        Sources(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools(): readonly any[];
        chat_seed(id: any): string;
        detail_description(): string;
        edit_uri(): string;
        readme_page(next?: any): boolean;
        Demo(): $mol_view;
        repo(): string;
        module(): readonly string[];
        source_link(): string;
        detail_empty_prefix(): string;
        selected(): string;
        detail_empty_postfix(): string;
    }
}

declare namespace $ {
    function $mol_func_is_class(func: Function): boolean;
}

declare namespace $ {
    class $mol_app_demo_main extends $mol_page {
        minimal_width(): number;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Lights(): $$.$mol_lights_toggle;
        project_uri(): string;
        Project(): $mol_link_source;
        description(): string;
        Description(): $$.$mol_text;
    }
}

declare namespace $.$$ {
    class $mol_app_demo_main extends $.$mol_app_demo_main {
        description(): string;
    }
}

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
        source_link(): string;
        name_parse(name: string): {
            repo: any;
            module: string[];
        };
        repo(): any;
        module(): string[];
        chat_link(): string;
        edit_uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_sort extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_asc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_portion_indicator extends $mol_view {
        style(): {
            width: string;
        };
        width_style(): string;
    }
    class $mol_portion extends $mol_view {
        portion(): number;
        sub(): readonly any[];
        indicator_width_style(): string;
        indicator(): $mol_portion_indicator;
    }
}

declare namespace $.$$ {
    class $mol_portion extends $.$mol_portion {
        indicator_width_style(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_bench extends $mol_grid {
        records(): {};
        col_sort(val?: any): string;
        Col_head(id: any): $mol_bench_head;
        cell_content_number(id: any): readonly any[];
        result(): {};
        event_sort_toggle(id: any, val?: any): any;
        col_head_title(id: any): string;
        Col_head_sort(id: any): $mol_icon_sort_asc;
        col_head_content(id: any): readonly any[];
        result_value(id: any): string;
        result_portion(id: any): number;
        Result_portion(id: any): $$.$mol_portion;
    }
    class $mol_bench_head extends $mol_float {
        horizontal(): boolean;
        event(): {
            click: (val?: any) => any;
        };
        attr(): {
            title: string;
        };
        event_click(val?: any): any;
        hint(): string;
    }
}

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
        col_type(col: string): "text" | "number" | "branch";
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
    class $mol_icon_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_number extends $mol_view {
        precision_view(): number;
        precision_change(): number;
        value_min(): number;
        value_max(): number;
        value(next?: any): number;
        enabled(): boolean;
        sub(): readonly any[];
        precision(): number;
        type(): string;
        value_string(val?: any): string;
        hint(): string;
        string_enabled(): boolean;
        String(): $$.$mol_string;
        event_dec(next?: any): any;
        dec_enabled(): boolean;
        dec_icon(): $mol_icon_minus;
        Dec(): $mol_button_minor;
        event_inc(next?: any): any;
        inc_enabled(): boolean;
        inc_icon(): $mol_icon_plus;
        Inc(): $mol_button_minor;
    }
}

declare namespace $ {
}

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
    class $hyoo_bench_app extends $mol_book2 {
        samples(next?: any): readonly string[];
        pages(): readonly any[];
        Menu_option(id: any): $mol_check_box;
        Param(id: any): $mol_labeler;
        result_col_title_sample(): string;
        addon_title(): string;
        filter(val?: any): string;
        Filter(): $$.$mol_search;
        source_link(): string;
        Source_link(): $mol_link_source;
        menu_tools(): readonly any[];
        menu_options(): readonly any[];
        Menu(): $$.$mol_list;
        Menu_tools(): $mol_view;
        Addon_page(): $mol_page;
        description(): string;
        Descr(): $$.$mol_text;
        param_fields(): readonly any[];
        Param_fields(): $mol_view;
        result(): any;
        result_col_title(id: any): string;
        result_col_sort(val?: any): string;
        Result(): $$.$mol_bench;
        Main_page(): $mol_page;
        sandbox_title(): string;
        bench(val?: any): string;
        Sandbox(): $$.$mol_frame;
        Sandbox_page(): $mol_page;
        menu_option_checked(id: any, val?: any): boolean;
        sample_title(id: any): string;
        param_title(id: any): string;
        param_value(id: any, val?: any): number;
        param_precision(id: any): number;
        Param_value(id: any): $$.$mol_number;
    }
}

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
        param_dict(): {};
    }
}

declare namespace $ {
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
    class $mol_icon_help extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    function $mol_assert_ok(value: any): void;
    function $mol_assert_not(value: any): void;
    function $mol_assert_fail(handler: () => any, ErrorRight?: any): any;
    function $mol_assert_equal<Value>(...args: [Value, Value, ...Value[]]): void;
    function $mol_assert_unique(...args: [any, any, ...any[]]): void;
    function $mol_assert_like<Value>(head: Value, ...tail: Value[]): undefined;
    function $mol_assert_dom(left: Element, right: Element): void;
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
    class $mol_icon_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_follower extends $mol_ghost {
        Anchor(): $mol_view;
        offset(): readonly any[];
        style(): {
            transform: string;
        };
        transform(): string;
    }
}

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
    class $mol_dump_value extends $mol_view {
        value(): any;
        preview_show(): boolean;
        sub(): readonly any[];
        simple(): string;
        Simple(): $$.$mol_text_code;
        expanded(next?: any): boolean;
        expandable(): boolean;
        expand_all(next?: any): any;
        expand_title(): string;
        Expand_title(): $$.$mol_text_code;
        Expand_head(): $$.$mol_check_expand;
        preview_dom(): any;
        preview(): any;
        Preview_dom(): $mol_view;
        Preview(): $mol_view;
        row_values(id: any): readonly any[];
        prototypes(): boolean;
        Row(id: any): $$.$mol_dump_list;
        expand_content(): readonly any[];
        Expand(): $$.$mol_expander;
    }
}

declare namespace $.$$ {
    class $mol_dump_value extends $.$mol_dump_value {
        sub(): $mol_text_code[] | $mol_expander[];
        simple(): string;
        expand_title(): any;
        rows_values(): any[][];
        preview_dom(): Element | null;
        expand_content(): ($mol_view | $mol_dump_list)[];
        expandable(): boolean;
        row_values(index: number): any[];
        expand_all(event?: Event, blacklist?: Set<unknown>): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_dump_list extends $mol_view {
        values(): readonly any[];
        sub(): readonly any[];
        dump_value(id: any): any;
        dump_expanded(id: any, next?: any): boolean;
        prototypes(): boolean;
        preview_show(): boolean;
        Dump(id: any): $$.$mol_dump_value;
    }
}

declare namespace $.$$ {
    class $mol_dump_list extends $.$mol_dump_list {
        sub(): $mol_dump_value[];
        dump_value(index: number): any;
        expand_all(event?: Event, blacklist?: Set<unknown>): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_js_eval extends $mol_book2 {
        Placeholder(): any;
        plugins(): readonly any[];
        bookmark_list(next?: any): readonly string[];
        pages(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        submit(next?: any): any;
        Submit(): $$.$mol_hotkey;
        Clear_icon(): $mol_icon_plus;
        Clear(): $$.$mol_link;
        Source(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        menu_link_title(id: any): string;
        menu_link_code(id: any): string;
        Menu_link(id: any): $$.$mol_link;
        menu(): readonly any[];
        Menu(): $$.$mol_list;
        Menu_page(): $mol_page;
        perf(): string;
        Perf(): $$.$mol_link_iconed;
        Bookmark_icon(): $mol_icon_bookmark_outline;
        bookmark(val?: any): boolean;
        Bookmark(): $mol_check_icon;
        Run_icon(): $mol_icon_play;
        run(val?: any): boolean;
        Run(): $mol_check_icon;
        code(val?: any): string;
        bring(): void;
        Code(): $$.$mol_textarea;
        error_anchor(): any;
        error_offset(): readonly any[];
        error_message(): string;
        Error_icon(): $mol_icon_flash;
        Error_view(): $mol_view;
        Error_mark(): $$.$mol_follower;
        Code_page(): $mol_page;
        result_label(): string;
        Results_close_icon(): $mol_icon_cross;
        Results_close(): $$.$mol_link;
        log(id: any): readonly any[];
        Log(id: any): $$.$mol_dump_list;
        logs(): readonly any[];
        Result(): $$.$mol_list;
        Result_page(): $mol_page;
    }
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
        entries(): IterableIterator<[Value, Value]>;
        keys(): IterableIterator<Value>;
        values(): IterableIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): IterableIterator<Value>;
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
        entries(): IterableIterator<[Key, Value]>;
        keys(): IterableIterator<Key>;
        values(): IterableIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): IterableIterator<[Key, Value]>;
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
        menu(): $mol_link[];
        menu_link_code(index: number): string;
        menu_link_title(index: number): string;
        code_enhanced(): string;
        execute(): any[];
        error_pos(): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        error_anchor(): $mol_text_code_token | undefined;
        error_offset(): number[];
        error_message(): any;
        Error_mark(): any;
        spy_queue: [string, () => any[]][];
        spy_run(): void;
        spy(name: string, task: () => any[]): void;
        result(next?: any[]): any[];
        logs(): $mol_dump_list[];
        log(index: number): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron_double_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unfold_more_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_js_perf_case_result extends $mol_view {
        result(): $$.$hyoo_js_perf_stats;
        sub(): readonly any[];
        frequency_portion(): number;
        Frequency_portion(): $$.$mol_portion;
        memory_portion(): number;
        Memory_portion(): $$.$mol_portion;
        size_portion(): number;
        Size_portion(): $$.$mol_portion;
        deps_portion(): number;
        Deps_portion(): $$.$mol_portion;
        portions(): readonly any[];
        Portions(): $mol_view;
        title(): string;
        frequency_hint(): string;
        frequency(): string;
        Frequency(): $mol_view;
        time_hint(): string;
        time_total(): string;
        Time(): $mol_view;
        iterations_hint(): string;
        iterations(): string;
        Iterations(): $mol_view;
        Stats_main(): $mol_view;
        memory_per_iteration_hint(): string;
        memory_per_iteration(): string;
        Memory_per_iteration(): $mol_view;
        memory_hint(): string;
        memory_total(): string;
        Memory(): $mol_view;
        Stats_mem(): $mol_view;
        size_hint(): string;
        size(): number;
        Size(): $mol_view;
        Stats_size(): $mol_view;
        deps_hint(): string;
        deps(): string;
        Deps(): $mol_view;
        Stats_deps(): $mol_view;
        stats(): readonly any[];
        Stats(): $mol_view;
        error(): string;
        Error(): $mol_view;
    }
}

declare namespace $.$$ {
    class $hyoo_js_perf_case_result extends $.$hyoo_js_perf_case_result {
        sub(): $mol_view[];
        portions(): $mol_portion[];
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
    class $hyoo_js_perf_case_row extends $mol_view {
        results(): readonly any[];
        Eval_result(): $$.$mol_list;
        Eval(): $$.$hyoo_js_eval;
        sub(): readonly any[];
        sample(): string;
        prefix_showed(next?: any): boolean;
        drop(next?: any): any;
        Drop_icon(): $mol_icon_cross;
        Drop(): $mol_button_minor;
        dupe(next?: any): any;
        Dupe_icon(): $mol_icon_chevron_double_down;
        Dupe(): $mol_button_minor;
        swap(next?: any): any;
        Swap_icon(): $mol_icon_unfold_more_horizontal;
        Swap(): $mol_button_minor;
        prefix_tools(): readonly any[];
        Prefix_tools(): $mol_bar;
        changable(): boolean;
        prefix(val?: any): string;
        Prefix_code(): $$.$mol_textarea;
        Prefix(): $$.$mol_expander;
        source_showed(next?: any): boolean;
        measurable(next?: any): boolean;
        Measurable(): $mol_check_box;
        title(next?: any): string;
        Title(): $mol_string_button;
        eval_standalone(): string;
        Eval_sandalone(): $$.$mol_link_iconed;
        Source_tools(): $mol_view;
        source(val?: any): string;
        Source_code(): $$.$mol_textarea;
        Source(): $$.$mol_expander;
        eval_showed(next?: any): boolean;
        Eval_labeler(): $$.$mol_expander;
        result_title(id: any): string;
        result(id: any): $$.$hyoo_js_perf_stats;
        Result(id: any): $$.$hyoo_js_perf_case_result;
        result_rows(): readonly any[];
        Results(): $mol_view;
        columns(): readonly any[];
    }
}

declare namespace $.$$ {
    class $hyoo_js_perf_case_row extends $.$hyoo_js_perf_case_row {
        columns(): $mol_view[];
        result(level: number): any;
        result_title(level: number): string;
        eval_standalone(): string;
        prefix_tools(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_group extends $mol_check_box {
        checks(): readonly $mol_check[];
        full(): boolean;
    }
}

declare namespace $ {
    class $mol_icon_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $.$$ {
    class $mol_check_group extends $.$mol_check_group {
        checked(next?: boolean): boolean;
        full(): boolean;
        Icon(): $mol_icon_tick | $mol_icon_check_all;
    }
}

declare namespace $ {
    class $mol_icon_share extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_share extends $mol_button_minor {
        uri(): string;
        capture(): any;
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_share_variant;
    }
}

declare namespace $ {
    function $mol_dom_capture_image(el: Element): Promise<HTMLImageElement>;
    function $mol_dom_capture_canvas(el: Element): Promise<HTMLCanvasElement>;
}

declare namespace $.$$ {
    class $mol_button_share extends $.$mol_button_share {
        capture(): any;
        uri(): string;
        click(): Promise<void>;
    }
}

declare namespace $ {
    class $mol_icon_directions extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_directions_fork extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_js_perf extends $mol_book2 {
        yard(): $hyoo_sync_client;
        bench_id(): any;
        bench(): $hyoo_js_perf_bench;
        titles(): readonly string[];
        prefixes(): readonly string[];
        sources(): readonly string[];
        menu_title(): string;
        permalink(): string;
        plugins(): readonly any[];
        pages(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        run(event?: any): any;
        Hotkey(): $$.$mol_hotkey;
        menu_tools(): readonly any[];
        Online(): $$.$hyoo_sync_online;
        Source(): $mol_link_source;
        About_icon(): $mol_icon_help_circle_outline;
        About(): $$.$mol_link;
        Lights(): $$.$mol_lights_toggle;
        changable(): boolean;
        prefix(val?: any): string;
        Prefix_code(): $$.$mol_textarea;
        Prefix(): $mol_labeler;
        postfix(val?: any): string;
        Postfix_code(): $$.$mol_textarea;
        Postfix(): $mol_labeler;
        hint(): string;
        Hint(): $$.$mol_text;
        Common_content(): $$.$mol_list;
        Common(): $mol_page;
        bench_title(next?: any): string;
        Title(): $mol_string_button;
        case_title(id: any, next?: any): string;
        case_prefix(id: any, next?: any): string;
        source(id: any, next?: any): string;
        case_measurable(id: any, next?: any): boolean;
        case_sample(id: any): string;
        results(id: any, next?: any): readonly any[];
        case_drop(id: any, next?: any): any;
        case_dupe(id: any, next?: any): any;
        case_swap(id: any, next?: any): any;
        Case_measurable(id: any): $mol_check_box;
        Case(id: any): $$.$hyoo_js_perf_case_row;
        cases(): readonly any[];
        Cases(): $$.$mol_list;
        measurable_all(): readonly any[];
        Measurable_all(): $$.$mol_check_group;
        Run_icon(): $mol_icon_play;
        Run(): $mol_button_major;
        Share(): $$.$mol_button_share;
        bench_fork(next?: any): any;
        Fork_icon(): $mol_icon_directions_fork;
        Fork(): $mol_button_minor;
        bench_new(next?: any): any;
        New_icon(): $mol_icon_plus_box;
        New(): $mol_button_minor;
        Cases_pane(): $mol_page;
    }
}

declare namespace $ {
    function $mol_range2<Item = number>(item?: (index: number) => Item, size?: () => number): Item[];
    class $mol_range2_array<Item> extends Array<Item> {
        concat(...tail: this[]): Item[];
        filter<Context>(check: (val: Item, index: number, list: Item[]) => boolean, context?: Context): Item[];
        forEach<Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => void, context?: Context): void;
        map<Item_out, Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => Item_out, context?: Context): Item_out[];
        reduce<Result>(merge: (result: Result, val: Item, index: number, list: Item[]) => Result, result?: Result): Result | undefined;
        slice(from?: number, to?: number): Item[];
        some<Context>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
        every<Context = null>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
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
        prefix(next?: string): string;
        postfix(next?: string): string;
        case_drop(index: number): void;
        case_dupe(index: number): void;
        case_swap(index: number): void;
        cases_count(): number;
        cases(): $hyoo_js_perf_case_row[];
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
    class $mol_check_list extends $mol_view {
        Option(id: any): $$.$mol_check;
        options(): {};
        keys(): readonly string[];
        sub(): readonly $mol_check[];
        option_checked(id: any, val?: any): boolean;
        option_title(id: any): string;
        option_label(id: any): readonly any[];
        enabled(): boolean;
        option_enabled(id: any): boolean;
        option_hint(id: any): string;
        items(): readonly $mol_check[];
    }
}

declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        keys(): readonly string[];
        items(): $mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_switch extends $mol_check_list {
        value(val?: any): string;
    }
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_deck extends $mol_list {
        items(): readonly $mol_view[];
        rows(): readonly $mol_view[];
        current(val?: any): string;
        switch_options(): {};
        Switch(): $$.$mol_switch;
        Content(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): any;
    }
}

declare namespace $ {
    class $mol_icon_poll extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_mol_bench extends $mol_book2_catalog {
        menu_title(): string;
        Placeholder(): any;
        Close_item(): $$.$mol_link;
        param(): string;
        spreads(): {
            reactivity: $hyoo_mol_bench_perf;
            equals: $hyoo_mol_bench_perf;
            moment: $hyoo_mol_bench_perf;
            markdown: $hyoo_mol_bench_perf;
            rope: $hyoo_mol_bench_bench;
            todomvc: $hyoo_mol_bench_bench;
            changelog: $hyoo_mol_bench_visual;
            toxic: $hyoo_mol_bench_visual;
            dbmon: $hyoo_mol_bench_visual;
            habr: $hyoo_mol_bench_visual;
            sierp: $hyoo_mol_bench_visual;
        };
        Close_item_icon(): $mol_icon_cross;
        Init(): $hyoo_mol_bench_perf;
        equals(): $hyoo_mol_bench_perf;
        moment(): $hyoo_mol_bench_perf;
        Markdown(): $hyoo_mol_bench_perf;
        Rope(): $hyoo_mol_bench_bench;
        Todomvc(): $hyoo_mol_bench_bench;
        Chanelog_mol(): $$.$mol_embed_native;
        Changelog_vue(): $$.$mol_embed_native;
        Changelog_vanilla(): $$.$mol_embed_native;
        Chanelog(): $hyoo_mol_bench_visual;
        Toxic_mol(): $$.$mol_embed_native;
        Toxic_vue(): $$.$mol_embed_native;
        Toxic(): $hyoo_mol_bench_visual;
        DBMon_mol(): $$.$mol_embed_native;
        DBMon_vue(): $$.$mol_embed_native;
        DBMon_react(): $$.$mol_embed_native;
        DBMon_vanilla(): $$.$mol_embed_native;
        DBMon(): $hyoo_mol_bench_visual;
        Habr_mol(): $$.$mol_embed_native;
        Habr_vue(): $$.$mol_embed_native;
        Habr(): $hyoo_mol_bench_visual;
        Sierp_mol(): $$.$mol_embed_native;
        Sierp_react(): $$.$mol_embed_native;
        Sierp_glimmer(): $$.$mol_embed_native;
        Sierp(): $hyoo_mol_bench_visual;
    }
    class $hyoo_mol_bench_bench extends $hyoo_bench_app {
        addon_title(): string;
        menu_tools(): readonly any[];
        analysis_uri(): string;
        Analysis(): $hyoo_mol_bench_analysis;
        Close(): $mol_view;
    }
    class $hyoo_mol_bench_perf extends $hyoo_js_perf {
        changable(): boolean;
        Share(): any;
        Fork(): any;
        New(): any;
        menu_tools(): readonly any[];
        Permalink(): $$.$mol_link_iconed;
        analysis_uri(): string;
        Analysis(): $hyoo_mol_bench_analysis;
        Close(): $mol_view;
    }
    class $hyoo_mol_bench_visual extends $mol_page {
        head(): readonly any[];
        tools(): readonly any[];
        body(): readonly any[];
        analysis_uri(): string;
        Analysis(): $hyoo_mol_bench_analysis;
        Close(): $mol_view;
        items(): readonly any[];
        Switch(): $$.$mol_switch;
        Content(): any;
        Deck(): $$.$mol_deck;
    }
    class $hyoo_mol_bench_analysis extends $mol_link {
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_poll;
    }
}

declare namespace $ {
}

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
    type $mol_view_tree2_locales = Record<string, string>;
    class $mol_view_tree2_context extends $mol_object2 {
        protected parents: readonly $mol_view_tree2_prop[];
        protected locales: $mol_view_tree2_locales;
        protected methods: $mol_tree2[];
        readonly types: boolean;
        protected added_nodes: Map<string, {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        }>;
        protected array?: $mol_tree2 | undefined;
        constructor($: $, parents: readonly $mol_view_tree2_prop[], locales: $mol_view_tree2_locales, methods: $mol_tree2[], types?: boolean, added_nodes?: Map<string, {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        }>, array?: $mol_tree2 | undefined);
        protected clone(prefixes: readonly $mol_view_tree2_prop[], array?: $mol_tree2): $mol_view_tree2_context;
        parent(prefix: $mol_view_tree2_prop): $mol_view_tree2_context;
        root(): $mol_view_tree2_context;
        locale_disable(array: $mol_tree2): $mol_view_tree2_context;
        get_method({ name, src, key, next }: $mol_view_tree2_prop): {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        } | undefined;
        check_scope_vars({ name, key, next }: $mol_view_tree2_prop): undefined;
        index(owner: $mol_view_tree2_prop): number;
        method(index: number, method: $mol_tree2[]): void;
        protected locale_nodes: Map<string, $mol_tree2>;
        locale(operator: $mol_tree2): $mol_tree2;
    }
}

declare namespace $ {
    function $mol_view_tree2_normalize(this: $, defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_prop_split(this: $, src: $mol_tree2): {
        src: $mol_tree2;
        name: $mol_tree2;
        key: $mol_tree2 | undefined;
        next: $mol_tree2 | undefined;
    };
}

declare namespace $ {
    type $mol_view_tree2_prop = ReturnType<typeof $mol_view_tree2_prop_split>;
    function $mol_view_tree2_prop_name(this: $, prop: $mol_tree2): string;
    function $mol_view_tree2_prop_key(this: $, prop: $mol_tree2): string | undefined;
    function $mol_view_tree2_prop_next(this: $, prop: $mol_tree2): string | undefined;
}

declare namespace $ {
    function $mol_view_tree2_prop_quote(name: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    let $mol_view_tree2_prop_signature: $mol_regexp<{
        readonly name: string;
        readonly key: string;
        readonly next: string;
    }>;
}

declare namespace $ {
    function $mol_view_tree2_class_super(this: $, klass: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_props(this: $, klass: $mol_tree2): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_value_type(this: $, val: $mol_tree2): "locale" | "object" | "string" | "number" | "get" | "null" | "list" | "bool" | "dict" | "bind" | "put";
}

declare namespace $ {
    function $mol_view_tree2_value(this: $, value: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_text_to_string(this: $, text: $mol_tree2): string;
}

declare namespace $ {
    function $mol_view_tree2_bind_both_parts(this: $, operator: $mol_tree2): {
        owner_parts: {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        };
        default_value: $mol_tree2 | undefined;
    };
}

declare namespace $ {
    function $mol_view_tree2_bind_left_parts(this: $, operator: $mol_tree2, having_parts?: $mol_view_tree2_prop): {
        default_value: $mol_tree2 | undefined;
        owner_call_parts: {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        };
        owner_parts: {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        };
    };
}

declare namespace $ {
    function $mol_view_tree2_bind_right_parts(this: $, operator: $mol_tree2, having_parts: $mol_view_tree2_prop, factory: $mol_view_tree2_prop): {
        owner_parts: {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        };
    };
}

declare namespace $ {
    function $mol_view_tree2_ts_bind_both(this: $, operator: $mol_tree2, context: $mol_view_tree2_context): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_bind_left(this: $, operator: $mol_tree2, context: $mol_view_tree2_context, having_parts?: $mol_view_tree2_prop): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_bind_right(this: $, operator: $mol_tree2, having_parts: $mol_view_tree2_prop, factory: $mol_view_tree2_prop, context: $mol_view_tree2_context): undefined;
}

declare namespace $ {
    function $mol_view_tree2_ts_class(this: $, klass: $mol_tree2, locales: $mol_view_tree2_locales): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_value(this: $, src: $mol_tree2): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_locale(operator: $mol_tree2, context: $mol_view_tree2_context): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_module(this: $, tree2_module: $mol_tree2, locales: $mol_view_tree2_locales): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_function_declaration({ name, key, next }: Pick<$mol_view_tree2_prop, 'name' | 'key' | 'next'>, types?: boolean): $mol_tree2;
    function $mol_view_tree2_ts_function_call({ name, key, next }: Pick<$mol_view_tree2_prop, 'name' | 'key' | 'next'>): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_spread(this: $, spread_prop: $mol_tree2): $mol_tree2;
    class $mol_view_tree2_ts_spread_factory extends $mol_object2 {
        protected prop_parts?: {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        } | undefined;
        protected super_spread: $mol_tree2 | undefined;
        constructor($: $, prop_parts?: {
            src: $mol_tree2;
            name: $mol_tree2;
            key: $mol_tree2 | undefined;
            next: $mol_tree2 | undefined;
        } | undefined);
        create(prop: $mol_tree2): $mol_tree2;
    }
}

declare namespace $ {
    function $mol_view_tree2_ts_comment(this: $, item: $mol_tree2): $mol_tree2[];
    function $mol_view_tree2_ts_comment_doc(this: $, item: $mol_tree2): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_compile(this: $, tree2_module: $mol_tree2): {
        script: string;
        locales: $mol_view_tree2_locales;
    };
}

declare namespace $ {
    function $mol_view_tree2_ts_dictionary(this: $, dictionary: $mol_tree2, dictionary_context: $mol_view_tree2_context, super_method?: $mol_view_tree2_prop): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_factory(this: $, klass: $mol_tree2, factory: $mol_view_tree2_prop, factory_context: $mol_view_tree2_context): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_array_body(this: $, operator: $mol_tree2, parent_context: $mol_view_tree2_context, super_method?: $mol_view_tree2_prop): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_array(this: $, operator: $mol_tree2, context: $mol_view_tree2_context, super_method?: $mol_view_tree2_prop | undefined): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_method_body(this: $, having_parts: $mol_view_tree2_prop, parent_context: $mol_view_tree2_context): undefined;
}

declare namespace $ {
    function $mol_view_tree2_ts_method(this: $, owner_parts: $mol_view_tree2_prop, body: $mol_tree2, types?: boolean): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_to_text(this: $, tree2_module: $mol_tree2): $mol_tree2;
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
    function $mol_tree2_js_to_text(this: $, js: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_vlq_encode(val: number): string;
}

declare namespace $ {
    function $mol_tree2_text_to_sourcemap(this: $, tree: $mol_tree2): {
        version: number;
        sources: string[];
        sourcesContent: string[];
        mappings: string;
    };
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
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span: $mol_span): $mol_tree2;
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
    function $mol_view_tree2_to_locale(this: $, tree2_module: $mol_tree2): $mol_view_tree2_locales;
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {
    function $mol_view_tree2_to_dts(this: $, descr: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_to_js(this: $, descr: $mol_tree2): $mol_tree2;
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
    class $mol_select_list extends $mol_view {
        value(val?: any): readonly string[];
        dictionary(): {};
        badges_list(): readonly $mol_view[];
        Badge(id: any): $mol_button_minor;
        sub(): readonly $mol_view[];
        Badges(): readonly $mol_view[];
        badge_title(id: any): string;
        remove(id: any, event?: any): any;
        badge_hint(): string;
        enabled(): boolean;
        drop_enabled(): boolean;
        align_hor(): string;
        options(): readonly string[];
        options_pickable(): readonly string[];
        pick(val?: any): string;
        option_title(id: any): string;
        pick_enabled(): boolean;
        pick_hint(): string;
        Pick_icon(): $mol_icon_plus;
        Pick(): $$.$mol_select;
    }
}

declare namespace $.$$ {
    class $mol_select_list extends $.$mol_select_list {
        value(val?: string[]): readonly string[];
        pick(key?: string): string;
        options(): readonly string[];
        options_pickable(): readonly string[];
        option_title(key: string): string;
        badge_title(index: number): string;
        pick_enabled(): boolean;
        Badges(): $mol_button_minor[];
        title(): string;
        remove(index: number): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $hyoo_tree extends $mol_book2 {
        transform_map(): {
            $mol_tree2_from_string: {
                input: string;
                output: string;
            };
            $mol_tree2_to_string: {
                input: string;
                output: string;
            };
            $mol_tree2_from_json: {
                input: string;
                output: string;
            };
            $mol_tree2_to_json: {
                input: string;
                output: string;
            };
            $mol_tree2_grammar_check: {
                input: string;
                output: string;
            };
            $mol_dom_parse: {
                input: string;
                output: string;
            };
            $mol_tree2_xml_to_text: {
                input: string;
                output: string;
            };
            $mol_tree2_xml_from_dom: {
                input: string;
                output: string;
            };
            $mol_tree2_js_to_text: {
                input: string;
                output: string;
            };
            $mol_tree2_text_to_string: {
                input: string;
                output: string;
            };
            $mol_tree2_text_to_string_mapped_js: {
                input: string;
                output: string;
            };
            $mol_tree2_text_to_string_mapped_css: {
                input: string;
                output: string;
            };
            $mol_tree2_text_to_sourcemap: {
                input: string;
                output: string;
            };
            $mol_tree2_text_to_sourcemap_vis: {
                input: string;
                output: string;
            };
            $mol_tree2_span_imprint: {
                input: string;
                output: string;
            };
            $mol_tree2_span_reuse: {
                input: string;
                output: string;
            };
            $mol_tree2_wasm_to_bin: {
                input: string;
                output: string;
            };
            $mol_tree2_bin_from_string: {
                input: string;
                output: string;
            };
            $mol_tree2_bin_from_bytes: {
                input: string;
                output: string;
            };
            $mol_tree2_bin_to_bytes: {
                input: string;
                output: string;
            };
            $mol_view_tree2_to_text: {
                input: string;
                output: string;
            };
            $mol_view_tree2_to_locale: {
                input: string;
                output: string;
            };
            $mol_view_tree2_to_dts: {
                input: string;
                output: string;
            };
            $mol_view_tree2_to_js: {
                input: string;
                output: string;
            };
            $hyoo_marked_tree_from_line: {
                input: string;
                output: string;
            };
            $hyoo_marked_tree_to_js: {
                input: string;
                output: string;
            };
            $mol_json_from_string: {
                input: string;
                output: string;
            };
            $mol_json_to_string: {
                input: string;
                output: string;
            };
            $mol_jack_transform: {
                input: string;
                output: string;
            };
            $mol_wasm_module: {
                input: string;
                output: string;
            };
            $mol_js_eval: {
                input: string;
                output: string;
            };
        };
        plugins(): readonly any[];
        pipeline(val?: any): readonly string[];
        Placeholder(): any;
        pages(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        pipeline_default(): readonly string[];
        Lights(): $$.$mol_lights_toggle;
        Github(): $mol_link_source;
        View(): $$.$mol_link;
        Json(): $$.$mol_link;
        Xml(): $$.$mol_link;
        XmlTree(): $$.$mol_link;
        Js(): $$.$mol_link;
        Wasm(): $$.$mol_link;
        jack(): $$.$mol_link;
        Mt(): $$.$mol_link;
        Grammar(): $$.$mol_link;
        Span(): $$.$mol_link;
        Presets_list(): $$.$mol_list;
        Presets(): $mol_page;
        source_tools(): readonly $mol_view_content[];
        source_default(): string;
        source(val?: any): string;
        source_hint(): string;
        Source_text(): $$.$mol_textarea;
        Source(): $mol_page;
        transform_options(): readonly string[];
        add_hint(): string;
        result_title(): string;
        Pipeline(): $$.$mol_select_list;
        result_text(): any;
        Result_text(): $$.$mol_text_code;
        Result(): $mol_page;
    }
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_node(str: string | Uint8Array): string;
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
    class $hyoo_mol extends $mol_book2_catalog {
        plugins(): readonly any[];
        Placeholder(): any;
        menu_title(): string;
        menu_tools(): readonly any[];
        menu_foot(): readonly any[];
        param(): string;
        spreads(): {
            docs: $$.$hyoo_page;
            apps: $$.$hyoo_apps;
            demos: $$.$mol_app_demo;
            bench: $hyoo_mol_bench;
            "view.tree": $$.$hyoo_tree;
            icons: $$.$mol_frame;
        };
        Theme(): $$.$mol_theme_auto;
        Sources(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools_root(): readonly any[];
        Lang(): $$.$mol_locale_select;
        Docs(): $$.$hyoo_page;
        Apps(): $$.$hyoo_apps;
        Demos(): $$.$mol_app_demo;
        Bench(): $hyoo_mol_bench;
        View_tree_syntax_icon(): $mol_icon_help;
        View_tree_syntax(): $$.$mol_link;
        tree_pipeline(): readonly any[];
        tree_source(): string;
        View_tree(): $$.$hyoo_tree;
        Icons(): $$.$mol_frame;
    }
}

declare namespace $ {
    class $mol_section extends $mol_list {
        level(): number;
        rows(): readonly any[];
        title_dom_name(): string;
        Title(): $$.$mol_paragraph;
        tools(): readonly any[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        content(): readonly any[];
        Content(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $mol_section extends $.$mol_section {
        title_dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_crowd_app extends $mol_book2 {
        Placeholder(): any;
        plugins(): readonly any[];
        pages(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        sync_enabled(): boolean;
        sync(event?: any): any;
        Sync(): $mol_button_major;
        Left(): $$.$hyoo_crowd_app_peer;
        Lights(): $$.$mol_lights_toggle;
        Source(): $mol_link_source;
        Right(): $$.$hyoo_crowd_app_peer;
    }
    class $hyoo_crowd_app_peer extends $mol_page {
        store(): $hyoo_crowd_land;
        sync(): number;
        body(): readonly any[];
        hint(): string;
        text(val?: any): string;
        Text(): $$.$mol_textarea;
        stats(): string;
        Stats(): $$.$mol_text;
        delta_view(): {};
        Delta(): $$.$mol_grid;
        Delta_section(): $$.$mol_section;
    }
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

declare namespace $.$$ {
}

declare namespace $ {
    class $hyoo_crowd_text_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Sandbox(): $$.$hyoo_crowd_app;
    }
}

declare namespace $ {
    function $mol_array_chunks<Item>(array: Item[], br: (item: Item, index: number) => boolean): Item[][];
}

declare namespace $ {
    class $mol_example_code extends $mol_example {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        code(next?: any): string;
        Sandbox(): $$.$hyoo_js_eval;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_array_chunks_demo extends $mol_example_code {
        code(next?: any): string;
        tags(): readonly any[];
    }
}

declare namespace $ {
    function $mol_array_lottery<Value>(list: readonly Value[]): Value;
}

declare namespace $ {
    class $mol_array_lottery_demo extends $mol_example_code {
        code(next?: any): string;
        tags(): readonly any[];
    }
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    class $mol_array_trim_demo extends $mol_example_code {
        code(next?: any): string;
        tags(): readonly any[];
    }
}

declare namespace $ {
    class $mol_assert_demo extends $mol_example_code {
        code(next?: any): string;
        tags(): readonly any[];
    }
}

declare namespace $ {
    class $mol_icon_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_open extends $mol_button_minor {
        sub(): readonly any[];
        Icon(): $mol_icon_upload;
        files(next?: any): readonly any[];
        accept(): string;
        multiple(): boolean;
        Native(): $$.$mol_button_open_native;
    }
    class $mol_button_open_native extends $mol_view {
        dom_name(): string;
        files(next?: any): readonly any[];
        attr(): {
            type: string;
            accept: string;
            multiple: boolean;
        };
        event(): {
            change: (next?: any) => any;
        };
        accept(): string;
        multiple(): boolean;
        picked(next?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_attach extends $mol_view {
        items(val?: any): readonly string[];
        sub(): readonly any[];
        Add(): $mol_button_open;
        Item(id: any): $mol_button_minor;
        content(): readonly $mol_view[];
        Content(): $mol_row;
        attach_title(): string;
        attach_new(val?: any): any;
        item_drop(id: any, event?: any): any;
        item_uri(id: any): string;
        Image(id: any): $$.$mol_image;
    }
}

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
    class $mol_attach_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        filled_items(val?: any): readonly any[];
        Filled(): $$.$mol_attach;
    }
}

declare namespace $ {
    class $mol_avatar_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        avatar_id(next?: any): string;
        Avatar_id_value(): $$.$mol_string;
        Avatar_id_label(): $mol_labeler;
        Avatar(): $$.$mol_avatar;
        Avatar_label(): $mol_labeler;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_bar_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        mail_hint(): string;
        mail(val?: any): string;
        Two_mail(): $$.$mol_string;
        submit_title(): string;
        Two_submit(): $mol_button_minor;
        Two(): $mol_bar;
        Three_mail(): $$.$mol_string;
        confirm_title(): string;
        confirmed(val?: any): boolean;
        Three_confirm(): $mol_check_box;
        Three(): $mol_bar;
    }
}

declare namespace $ {
    class $mol_bench_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        col_sort(val?: any): string;
        result(): {};
        View(): $$.$mol_bench;
    }
}

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
    class $mol_book2_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Side(): $mol_view;
        First(): $mol_view;
        Second(): $mol_view;
        Third(): $mol_view;
        View(): $$.$mol_book2;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_filler extends $mol_paragraph {
        min_symbols(): number;
        sub(): readonly string[];
        filler_lines(): readonly string[];
    }
}

declare namespace $.$$ {
    class $mol_filler extends $.$mol_filler {
        filler_lines(): string[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_book2_catalog_demo extends $mol_example_large {
        title(): string;
        Content(): $$.$mol_filler;
        Empty(): $$.$mol_status;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Pizza(): $mol_page;
        Hot_dogs(): $mol_page;
        Fries(): $mol_page;
        Foods_spread_close(): $$.$mol_link;
        Foods(): $$.$mol_book2_catalog;
        Cats(): $mol_page;
        Dogs(): $mol_page;
        Horses(): $mol_page;
        Racoons(): $mol_page;
        Pigs(): $mol_page;
        Rabbits(): $mol_page;
        Wolfs(): $mol_page;
        Mice(): $mol_page;
        Ants(): $mol_page;
        Bugs(): $mol_page;
        Animals_spread_close(): $$.$mol_link;
        Animals(): $$.$mol_book2_catalog;
        Spread_close(): $$.$mol_link;
        Calatog(): $$.$mol_book2_catalog;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default_click extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default_click_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        fail(event?: any): any;
        Major_enabled(): $mol_button_major;
        Major_disabled(): $mol_button_major;
        Minor_enabled(): $mol_button_minor;
        Minor_disabled(): $mol_button_minor;
        Minor_icon_only_icon(): $mol_icon_cursor_default_click_outline;
        Minor_icon_only(): $mol_button_minor;
        Minor_iconed_icon(): $mol_icon_cursor_default_click_outline;
        Minor_iconed(): $mol_button_minor;
    }
}

declare namespace $.$$ {
    class $mol_button_demo extends $.$mol_button_demo {
        fail(): void;
    }
}

declare namespace $ {
    class $mol_button_share_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Share_page(): $$.$mol_button_share;
        Share_screenshot(): $$.$mol_button_share;
        Share_hyoo(): $$.$mol_button_share;
    }
}

declare namespace $ {
    class $mol_calendar_demo_holiday extends $mol_example_small {
        title(): string;
        holidays(): readonly any[];
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        month(): string;
        holiday(id: any): boolean;
        Calendar(): $$.$mol_calendar;
    }
}

declare namespace $.$$ {
    class $mol_calendar_demo_holiday extends $.$mol_calendar_demo_holiday {
        holiday(day: string): boolean;
    }
}

declare namespace $ {
    class $mol_calendar_demo_selection extends $mol_example_small {
        title(): string;
        interval_config(): {
            start: string;
            end: string;
        };
        days(): readonly any[];
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        month(): string;
        selected(id: any): boolean;
        Calendar(): $$.$mol_calendar;
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

declare namespace $.$$ {
    class $mol_calendar_demo_selection extends $.$mol_calendar_demo_selection {
        interval(): $mol_time_interval;
        selected(day: string): boolean;
    }
}

declare namespace $ {
    class $mol_calendar_demo_simple extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        today(): $mol_time_moment;
        Calendar(): $$.$mol_calendar;
    }
}

declare namespace $.$$ {
    class $mol_calendar_demo_simple extends $.$mol_calendar_demo_simple {
        month_name(): string;
    }
}

declare namespace $ {
    class $mol_card extends $mol_list {
        attr(): {
            mol_card_status_type: string;
        };
        rows(): readonly $mol_view[];
        status(): string;
        content(): readonly $mol_view_content[];
        Content(): $mol_view;
        status_text(): string;
        Status(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_card_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Simple(): $$.$mol_card;
        Pending(): $$.$mol_card;
    }
}

declare namespace $ {
    class $mol_svg_group extends $mol_svg {
        dom_name(): string;
    }
}

declare namespace $ {
    class $mol_svg_title extends $mol_svg {
        dom_name(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
    class $mol_plot_graph extends $mol_svg_group {
        series_x(): readonly number[];
        series_y(): readonly number[];
        attr(): {
            mol_plot_graph_type: string;
        };
        style(): {
            color: string;
        };
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        shift(): readonly number[];
        scale(): readonly number[];
        cursor_position(): $mol_vector_2d<number>;
        dimensions_pane(): $mol_vector_2d<$mol_vector_range<number>>;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size_real(): $mol_vector_2d<number>;
        gap(): $mol_vector_2d<$mol_vector_range<number>>;
        repos_x(id: any): number;
        repos_y(id: any): number;
        indexes(): readonly number[];
        points(): readonly (readonly number[])[];
        front(): readonly $mol_svg[];
        back(): readonly $mol_svg[];
        Hint(): $mol_svg_title;
        hue(): number;
        Sample(): any;
        type(): string;
        color(): string;
        viewport_x(): $mol_vector_range<number>;
        viewport_y(): $mol_vector_range<number>;
        dimensions_pane_x(): $mol_vector_range<number>;
        dimensions_pane_y(): $mol_vector_range<number>;
        dimensions_x(): $mol_vector_range<number>;
        dimensions_y(): $mol_vector_range<number>;
        gap_x(): $mol_vector_range<number>;
        gap_y(): $mol_vector_range<number>;
        title(): string;
        hint(): string;
    }
    class $mol_plot_graph_sample extends $mol_view {
        attr(): {
            mol_plot_graph_type: string;
        };
        style(): {
            color: string;
        };
        type(): string;
        color(): string;
    }
}

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
    class $mol_chart_legend extends $mol_scroll {
        graphs(): readonly $mol_plot_graph[];
        graphs_front(): readonly $mol_plot_graph[];
        sub(): readonly $mol_view[];
        Graph_legend(id: any): $mol_view;
        graph_legends(): readonly $mol_view[];
        Graph_sample(id: any): any;
        Graph_sample_box(id: any): $mol_view;
        graph_title(id: any): string;
        Graph_title(id: any): $mol_view;
    }
}

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
    class $mol_plot_pane extends $mol_svg_root {
        aspect(): string;
        hue_base(val?: any): number;
        hue_shift(val?: any): number;
        gap_hor(): number;
        gap_vert(): number;
        gap_left(): number;
        gap_right(): number;
        gap_top(): number;
        gap_bottom(): number;
        gap(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        shift(val?: any): $mol_vector_2d<number>;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(val?: any): $mol_vector_2d<number>;
        scale_x(val?: any): number;
        scale_y(val?: any): number;
        size(): $mol_vector_2d<number>;
        size_real(): $mol_vector_2d<number>;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        dimensions_viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        sub(): readonly $mol_svg[];
        graphs_colored(): readonly $mol_plot_graph[];
        plugins(): readonly any[];
        gap_x(): $mol_vector_range<number>;
        gap_y(): $mol_vector_range<number>;
        shift_limit_x(): $mol_vector_range<number>;
        shift_limit_y(): $mol_vector_range<number>;
        scale_limit_x(): $mol_vector_range<number>;
        scale_limit_y(): $mol_vector_range<number>;
        dimensions_x(): $mol_vector_range<number>;
        dimensions_y(): $mol_vector_range<number>;
        dimensions_viewport_x(): $mol_vector_range<number>;
        dimensions_viewport_y(): $mol_vector_range<number>;
        graphs_sorted(): readonly $mol_svg[];
        graphs(): readonly $mol_plot_graph[];
        graphs_positioned(): readonly $mol_plot_graph[];
        graphs_visible(): readonly $mol_plot_graph[];
        zoom(val?: any): number;
        allow_draw(): boolean;
        allow_pan(): boolean;
        allow_zoom(): boolean;
        draw_start(event?: any): any;
        draw(event?: any): any;
        draw_end(event?: any): any;
        cursor_position(): $mol_vector_2d<number>;
        action_type(): string;
        action_point(): $mol_vector_2d<number>;
        Touch(): $$.$mol_touch;
    }
}

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
    class $mol_chart extends $mol_view {
        gap_hor(): number;
        gap_vert(): number;
        gap_left(): number;
        gap_right(): number;
        gap_bottom(): number;
        gap_top(): number;
        graphs(): readonly $mol_plot_graph[];
        sub(): readonly any[];
        Legend(): $$.$mol_chart_legend;
        hue_base(): number;
        hue_shift(): number;
        zoom(val?: any): number;
        graphs_colored(): $mol_plot_graph[];
        Plot(): $$.$mol_plot_pane;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_bar extends $mol_plot_graph {
        style(): {
            "stroke-width": string;
            color: string;
        };
        sub(): readonly any[];
        Sample(): $mol_plot_graph_sample;
        stroke_width(): string;
        curve(): string;
        Curve(): $mol_svg_path;
    }
}

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
    class $mol_plot_line extends $mol_plot_graph {
        threshold(): number;
        spacing(): number;
        color_fill(): string;
        dom_name(): string;
        attr(): {
            d: string;
            mol_plot_graph_type: string;
        };
        sub(): readonly any[];
        Sample(): $mol_plot_graph_sample;
        curve(): string;
    }
}

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
    class $mol_plot_dot extends $mol_plot_graph {
        points_max(): number;
        aspect(): number;
        style(): {
            "stroke-width": number;
            color: string;
        };
        sub(): readonly any[];
        Sample(): $mol_plot_graph_sample;
        diameter(): number;
        curve(): string;
        Curve(): $mol_svg_path;
    }
}

declare namespace $ {
    function $mol_coord_pack(high: number, low: number): number;
    function $mol_coord_high(pack: number): number;
    function $mol_coord_low(pack: number): number;
}

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
    class $mol_plot_group extends $mol_plot_graph {
        sub(): readonly $mol_plot_graph[];
        Sample(): $mol_plot_graph_sample;
        graphs(): readonly $mol_plot_graph[];
        graphs_enriched(): readonly $mol_plot_graph[];
        graph_samples(): readonly $mol_view[];
    }
}

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
    class $mol_svg_text extends $mol_svg {
        dom_name(): string;
        pos(): readonly any[];
        attr(): {
            x: string;
            y: string;
            "text-anchor": string;
        };
        sub(): readonly any[];
        pos_x(): string;
        pos_y(): string;
        align(): string;
        text(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_rect extends $mol_svg {
        dom_name(): string;
        pos(): readonly any[];
        attr(): {
            width: string;
            height: string;
            x: string;
            y: string;
        };
        width(): string;
        height(): string;
        pos_x(): string;
        pos_y(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
    class $mol_plot_ruler extends $mol_plot_graph {
        step(): number;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        axis_points(): readonly number[];
        normalize(val?: any): number;
        precision(): number;
        sub(): readonly any[];
        Label(id: any): $$.$mol_svg_text;
        background_x(): string;
        background_y(): string;
        background_width(): string;
        background_height(): string;
        Background(): $$.$mol_svg_rect;
        curve(): string;
        Curve(): $mol_svg_path;
        labels_formatted(): readonly any[];
        title_pos_x(): string;
        title_pos_y(): string;
        title_align(): string;
        Title(): $$.$mol_svg_text;
        label_pos_x(id: any): string;
        label_pos_y(id: any): string;
        label_pos(id: any): readonly any[];
        label_text(id: any): string;
        label_align(): string;
    }
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $mol_svg_text[];
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
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        title_align(): string;
        label_align(): string;
        title_pos_y(): string;
        label_pos_x(id: any): string;
        background_height(): string;
        background_width(): string;
    }
}

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
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        title_align(): string;
        label_align(): string;
        title_pos_x(): string;
        title_pos_y(): string;
        label_pos_y(id: any): string;
        background_width(): string;
    }
}

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
    class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
        labels(): readonly string[];
    }
}

declare namespace $.$$ {
    class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
        series_x(): readonly number[];
        labels(): readonly string[];
        visible_indexes(): number[];
        curve(): string;
        label_text(index: number): string;
        labels_formatted(): $mol_svg_text[];
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_text_box extends $mol_svg_group {
        font_size(): number;
        width(): number;
        sub(): readonly any[];
        box_width(): string;
        box_height(): string;
        box_pos_x(): string;
        box_pos_y(): string;
        Back(): $$.$mol_svg_rect;
        pos_x(): string;
        pos_y(): string;
        align(): string;
        text(): string;
        Text(): $$.$mol_svg_text;
    }
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(font: string, text: string): number;
}

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
    class $mol_plot_mark_cross extends $mol_plot_graph {
        labels(): readonly string[];
        title_x_gap(): number;
        threshold(): number;
        graphs(): readonly $mol_plot_graph[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        sub(): readonly any[];
        dimensions_x(): $mol_vector_range<number>;
        dimensions_y(): $mol_vector_range<number>;
        curve(): string;
        Curve(): $mol_svg_path;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_x(): string;
        Label_x(): $$.$mol_svg_text_box;
        title_y_pos_x(): string;
        title_y_pos_y(): string;
        title_y(): string;
        Label_y(): $$.$mol_svg_text_box;
    }
}

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
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_chart_demo_simple extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        plan_title(): string;
        plan(): readonly any[];
        Plan(): $$.$mol_plot_bar;
        fact_title(): string;
        facts(): readonly any[];
        Fact_line(): $$.$mol_plot_line;
        Fact_dots(): $$.$mol_plot_dot;
        Fact(): $$.$mol_plot_group;
        vert_title(): string;
        Vert_ruler(): $$.$mol_plot_ruler_vert;
        marker_hor_title(): string;
        months(): readonly string[];
        Marker_hor(): $$.$mol_plot_mark_hor;
        Marker_cross(): $$.$mol_plot_mark_cross;
        Chart(): $mol_chart;
    }
}

declare namespace $ {
    class $mol_plot_fill extends $mol_plot_line {
        threshold(): number;
    }
}

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
    class $mol_chart_demo_styles extends $mol_example_large {
        title(): string;
        samples_count(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        receipts_title(): string;
        series_x(): readonly number[];
        series_2_y(): readonly number[];
        Receipts(): $$.$mol_plot_bar;
        receipts_confirmed_title(): string;
        series_3_y(): readonly number[];
        Receipts_confirmed(): $$.$mol_plot_bar;
        maximum_title(): string;
        series_1_y(): readonly number[];
        Maximum(): $$.$mol_plot_dot;
        waste_title(): string;
        series_4_y(): readonly number[];
        Waste(): $$.$mol_plot_line;
        purchases_title(): string;
        series_5_y(): readonly number[];
        Purchases_fill(): $$.$mol_plot_fill;
        Purchases_line(): $$.$mol_plot_line;
        Purchases_dots(): $$.$mol_plot_dot;
        Purchases(): $$.$mol_plot_group;
        taxes_title(): string;
        series_6_y(): readonly number[];
        Taxes_fill(): $$.$mol_plot_fill;
        Taxes_line(): $$.$mol_plot_line;
        Taxes_dots(): $$.$mol_plot_dot;
        Taxes(): $$.$mol_plot_group;
        energy_title(): string;
        Energy(): $$.$mol_plot_ruler_vert;
        day_title(): string;
        Day(): $$.$mol_plot_mark_hor;
        graphs(): readonly any[];
        Chart(): $mol_chart;
    }
}

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
    class $mol_chart_demo_forces extends $mol_example_large {
        title(): string;
        samples_count(): number;
        points_max(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        forces_left_title(): string;
        forces_left_x(): readonly number[];
        forces_left_y(): readonly number[];
        Forces_left(): $$.$mol_plot_dot;
        forces_right_title(): string;
        forces_right_x(): readonly number[];
        forces_right_y(): readonly number[];
        Forces_right(): $$.$mol_plot_dot;
        vert_title(): string;
        Vert_ruler(): $$.$mol_plot_ruler_vert;
        hor_title(): string;
        Hor_ruler(): $$.$mol_plot_ruler_hor;
        Cross(): $$.$mol_plot_mark_cross;
        Chart(): $mol_chart;
    }
}

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
    class $mol_chat_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        chat_pages(): $mol_page[];
        Chat(): $$.$mol_chat;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_box_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        base_checked(val?: any): boolean;
        c1Label(): string;
        Labeled_base(): $mol_check_box;
        c2Label(): string;
        checked_checked(val?: any): boolean;
        Labeled_checked(): $mol_check_box;
        c6Label(): string;
        Labeled_disabled(): $mol_check_box;
        Alone_base(): $mol_check_box;
        Alone_checked(): $mol_check_box;
        Alone_disabled(): $mol_check_box;
        Demo_items(): $$.$mol_list;
    }
}

declare namespace $ {
    class $mol_check_list_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        right(id: any, val?: any): boolean;
        Rights(): $$.$mol_check_list;
    }
}

declare namespace $ {
    class $mol_check_expand_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        base_expanded(val?: any): boolean;
        c1Label(): string;
        Labeled_base(): $$.$mol_check_expand;
        c2Label(): string;
        expanded_expanded(val?: any): boolean;
        Labeled_expanded(): $$.$mol_check_expand;
        c5Label(): string;
        Disabled(): $$.$mol_check_expand;
        Empty_base(): $$.$mol_check_expand;
        Empty_expanded(): $$.$mol_check_expand;
        Demo_items(): $$.$mol_list;
    }
}

declare namespace $ {
    class $mol_check_group_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        All(): $$.$mol_check_group;
        strength_title(): string;
        strength(val?: any): boolean;
        Strength(): $mol_check_box;
        perception_title(): string;
        perception(val?: any): boolean;
        Perception(): $mol_check_box;
        endurance_title(): string;
        endurance(val?: any): boolean;
        Endurance(): $mol_check_box;
        charisma_title(): string;
        charisma(val?: any): boolean;
        Charisma(): $mol_check_box;
        intelligence_title(): string;
        intelligence(val?: any): boolean;
        Intelligence(): $mol_check_box;
        agility_title(): string;
        agility(val?: any): boolean;
        Agility(): $mol_check_box;
        luck_title(): string;
        luck(val?: any): boolean;
        Luck(): $mol_check_box;
        Partial(): $$.$mol_list;
        Demo_items(): $$.$mol_list;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_microphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_icon_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Base_icon(): $mol_icon_microphone;
        base_checked(val?: any): boolean;
        Base(): $mol_check_icon;
        Checked_icon(): $mol_icon_microphone;
        checked_checked(val?: any): boolean;
        Checked(): $mol_check_icon;
        Disabled_icon(): $mol_icon_microphone;
        Disabled(): $mol_check_box;
    }
}

declare namespace $ {
    class $mol_code extends $mol_view {
        sub(): readonly any[];
        value(val?: any): string;
        format(): string;
        hint(): string;
        Manual(): $$.$mol_search;
        event_scan(val?: any): any;
        scan_label(): string;
        Scan(): $$.$mol_button;
    }
}

declare var cordova: any;
declare namespace $ {
    var $mol_cordova: any;
    function $mol_cordova_camera(): any;
}

declare namespace $.$$ {
    class $mol_code extends $.$mol_code {
        scan_support(): boolean;
        sub(): ($mol_button | $mol_search)[];
        event_scan(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_code_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Qr(): $$.$mol_code;
        Matrix(): $$.$mol_code;
        Upc_e(): $$.$mol_code;
        Upc_a(): $$.$mol_code;
        Ean_8(): $$.$mol_code;
        Ean_13(): $$.$mol_code;
        Code_128(): $$.$mol_code;
        Code_39(): $$.$mol_code;
        Itf(): $$.$mol_code;
    }
}

declare namespace $ {
    class $mol_date_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        date(val?: any): $mol_time_moment;
        Date(): $$.$mol_date;
        formatted(): string;
        Formatted(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_date_demo extends $.$mol_date_demo {
        formatted(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_deck_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Greeting(): $$.$mol_card;
        Question(): $$.$mol_card;
        Answer(): $$.$mol_card;
        Command(): $$.$mol_card;
        Spam_content(): $$.$mol_filler;
        Spam(): $$.$mol_card;
        Deck(): $$.$mol_deck;
    }
}

declare namespace $ {
    class $mol_dimmer_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        One(): $$.$mol_dimmer;
        Two(): $$.$mol_dimmer;
        Three(): $$.$mol_dimmer;
        Four(): $$.$mol_dimmer;
        Five(): $$.$mol_dimmer;
        Six(): $$.$mol_dimmer;
        Cases(): $$.$mol_list;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_trash_can extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trash_can_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_drag_demo extends $mol_example_large {
        task_count(): number;
        sub(): readonly any[];
        Task_row(id: any): $$.$mol_drag;
        tags(): readonly any[];
        aspects(): readonly any[];
        transfer_adopt(transfer?: any): any;
        receive(obj?: any): any;
        receive_trash(obj?: any): any;
        Trash_icon(): $mol_icon_trash_can_outline;
        Trash(): $mol_float;
        Trash_drop(): $$.$mol_drop;
        task_rows(): readonly any[];
        List(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
        List_drop(): $$.$mol_drop;
        task_title(id: any): string;
        task_html(id: any): string;
        task_uri(id: any): string;
        receive_before(id: any, obj?: any): any;
        Task_link(id: any): $$.$mol_link;
        Task_drop(id: any): $$.$mol_drop;
    }
}

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
        task_rows(): $mol_drag[];
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
    class $mol_dump_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        value(): any;
        Dump_short(): $$.$mol_dump_value;
        Dump_long(): $$.$mol_dump_value;
    }
}

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
    class $mol_expander_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Content(): $$.$mol_filler;
        Expander(): $$.$mol_expander;
    }
}

declare namespace $ {
    class $mol_filler_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Filler(): $$.$mol_filler;
    }
}

declare namespace $ {
    class $mol_float_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Head_content(): $$.$mol_paragraph;
        Head_row(): $mol_row;
        Head(): $mol_float;
        Filler1(): $$.$mol_filler;
        Filler2(): $$.$mol_filler;
        Content(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
    }
}

declare namespace $ {
    class $mol_form_group extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_demo extends $mol_example {
        title(): string;
        message(): {
            required: string;
            adult: string;
            no_spaces: string;
            need_more_letters: string;
            need_at: string;
            only_one_at: string;
            no_tld: string;
            dots_inside: string;
            no_space_domain: string;
            need_username: string;
        };
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        avatars_bid(): string;
        avatars(val?: any): readonly string[];
        Avatars_control(): $$.$mol_attach;
        Avatars_field(): $$.$mol_form_field;
        name_first_bid(): string;
        name_first(val?: any): string;
        Name_first_control(): $$.$mol_string;
        Name_first_field(): $$.$mol_form_field;
        name_nick_bid(): string;
        name_nick(val?: any): string;
        Name_nick_control(): $$.$mol_string;
        Name_nick_field(): $$.$mol_form_field;
        name_second_bid(): string;
        name_second(val?: any): string;
        Name_second_control(): $$.$mol_string;
        Name_second_field(): $$.$mol_form_field;
        Names(): $mol_form_group;
        age_bid(): string;
        age(val?: any): number;
        Age_control(): $$.$mol_number;
        Age_field(): $$.$mol_form_field;
        sex_label(): string;
        sex_bid(): string;
        sex(val?: any): string;
        sex_options(): {
            male: string;
            intersex: string;
            female: string;
        };
        Sex_control(): $$.$mol_switch;
        Sex_field(): $$.$mol_form_field;
        color_bid(): string;
        color(val?: any): string;
        Color_control(): $$.$mol_select;
        Color_field(): $$.$mol_form_field;
        Parameters(): $mol_form_group;
        mail_bid(): string;
        mail(val?: any): string;
        Mail_control(): $$.$mol_string;
        Mail_field(): $$.$mol_form_field;
        signup(val?: any): any;
        Signup(): $mol_button_major;
        result(val?: any): string;
        Result(): $$.$mol_status;
        signup_allowed(): boolean;
        Form(): $$.$mol_form;
    }
}

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
    class $mol_form_draft extends $mol_form {
        model(): $mol_object2;
    }
}

declare namespace $.$$ {
    class $mol_form_draft extends $.$mol_form_draft {
        value_str(field: string, next?: string | null): string;
        value_numb(field: string, next?: boolean | null): number;
        value_bool(field: string, next?: boolean | null): boolean;
        value(field: string, next?: string | number | boolean | null): any;
        state(next?: Record<string, string | number | boolean | null> | null): Record<string, string | number | boolean | null>;
        changed(): boolean;
        submit_allowed(): boolean;
        submit(next?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_draft_demo_article extends $mol_object2 {
        title(next?: any): string;
        type(next?: any): string;
        adult(next?: any): boolean;
        content(next?: any): string;
    }
    class $mol_form_draft_demo extends $mol_example {
        title(): string;
        message_done(): string;
        bid_required(id: any): string;
        bid_swearing(id: any): string;
        bid_short(id: any): string;
        bid_long(id: any): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        model(): $mol_form_draft_demo_article;
        Title(): $$.$mol_string;
        Title_field(): $$.$mol_form_field;
        Type(): $$.$mol_switch;
        Type_field(): $$.$mol_form_field;
        Adult(): $$.$mol_switch;
        Adult_field(): $$.$mol_form_field;
        Content(): $$.$mol_textarea;
        Content_field(): $$.$mol_form_field;
        Config(): $mol_form_group;
        form_body(): readonly any[];
        Publish(): $mol_button_major;
        result(next?: any): string;
        Result(): $$.$mol_status;
        publish(next?: any): void;
        publish_allowed(): boolean;
        value_str(id: any, next?: any): string;
        changed(): boolean;
        Form(): $$.$mol_form_draft;
    }
}

declare namespace $.$$ {
    class $mol_form_draft_demo extends $.$mol_form_draft_demo {
        form_body(): ($mol_form_field | $mol_form_group)[];
        bid_required(field: string): string;
        bid_short(field: string): string;
        bid_long(field: string): string;
        bid_swearing(field: string): string;
        result(next?: string): string;
        publish(): void;
    }
}

declare namespace $ {
    class $mol_phone extends $mol_format {
        mask(id: any): string;
        keyboard(): string;
    }
}

declare namespace $.$$ {
    const $mol_phone_formats: {
        '': string;
        '1': string;
        '27': string;
        '212': string;
        '253': string;
        '254': string;
        '30': string;
        '31': string;
        '32': string;
        '33': string;
        '34': string;
        '36': string;
        '351': string;
        '353': string;
        '354': string;
        '358': string;
        '380': string;
        '39': string;
        '40': string;
        '41': string;
        '44': string;
        '45': string;
        '46': string;
        '47': string;
        '48': string;
        '49': string;
        '52': string;
        '60': string;
        '61': string;
        '63': string;
        '64': string;
        '65': string;
        '66': string;
        '7': string;
        '81': string;
        '82': string;
        '86': string;
        '90': string;
        '91': string;
        '92': string;
        '94': string;
        '98': string;
    };
    class $mol_phone extends $.$mol_phone {
        mask(val: string): any;
    }
}

declare namespace $ {
    class $mol_format_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        ip(next?: any): string;
        Ip(): $$.$mol_format;
        Ip_card(): $$.$mol_card;
        phone(next?: any): string;
        Phone(): $$.$mol_phone;
        Phone_card(): $$.$mol_card;
        card(next?: any): string;
        Card(): $$.$mol_format;
        Card_card(): $$.$mol_card;
        moment(next?: any): string;
        Moment(): $$.$mol_format;
        Moment_card(): $$.$mol_card;
    }
}

declare namespace $ {
    class $mol_frame_demo extends $mol_example_large {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Frame(): $$.$mol_frame;
    }
}

declare namespace $ {
    class $mol_gallery extends $mol_view {
        sub(): readonly $mol_view[];
        Side(id: any): $$.$mol_gallery;
        items(): readonly $mol_view[];
        side_size(id: any): string;
        side_items(id: any): readonly $mol_view[];
    }
}

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
    class $mol_gallery_demo extends $mol_example {
        title(): string;
        count(): number;
        sub(): readonly any[];
        Item(id: any): $$.$mol_link;
        tags(): readonly any[];
        aspects(): readonly any[];
        items(): readonly any[];
        App(): $$.$mol_gallery;
        item_title(id: any): string;
        Item_title(id: any): $$.$mol_paragraph;
    }
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
    class $mol_unit_money_rur extends $mol_unit_money {
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

declare namespace $.$$ {
    class $mol_gallery_demo extends $.$mol_gallery_demo {
        items(): $mol_link[];
        item_title(id: number): string;
        item_uri(id: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_html_view extends $mol_list {
        html(): string;
        dom(): any;
        safe_link(id: any): string;
        xss_uri(): string;
        Heading(id: any): $mol_html_view_heading;
        Paragraph(id: any): $$.$mol_paragraph;
        List(id: any): $$.$mol_list;
        Quote(id: any): $$.$mol_list;
        Strong(id: any): $$.$mol_paragraph;
        Emphasis(id: any): $$.$mol_paragraph;
        Deleted(id: any): $$.$mol_paragraph;
        Inserted(id: any): $$.$mol_paragraph;
        Code(id: any): $$.$mol_paragraph;
        Link(id: any): $$.$mol_link_iconed;
        Image(id: any): $$.$mol_image;
        Break(id: any): $$.$mol_paragraph;
        Text(id: any): $$.$mol_dimmer;
        heading_level(id: any): number;
        content(id: any): readonly any[];
        link_uri(id: any): string;
        image_uri(id: any): string;
        highlight(): string;
        text(id: any): string;
    }
    class $mol_html_view_heading extends $mol_paragraph {
        attr(): {
            mol_html_view_heading: number;
        };
        level(): number;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_html_view extends $.$mol_html_view {
        dom(): HTMLElement;
        sub(): $mol_view[];
        content(node: Node): $mol_view[];
        views(node: Node): $mol_view[] | $mol_image[] | $mol_paragraph[] | $mol_link_iconed[];
        text(node: Node): string;
        safe_link(uri: string): string;
        link_uri(node: HTMLAnchorElement): string;
        image_uri(node: HTMLImageElement): string;
        heading_level(node: HTMLHeadingElement): number;
    }
}

declare namespace $ {
    class $mol_html_view_demo extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Html(): $$.$mol_html_view;
    }
}

declare namespace $ {
    class $mol_infinite extends $mol_list {
        before(id: any): readonly any[];
        after(id: any): readonly any[];
        row_ids(next?: any): readonly any[];
        render_over(): number;
        Row(id: any): $mol_view;
        Before(id: any): $mol_view;
        After(id: any): $mol_view;
        before_load(id: any): any;
        after_load(id: any): any;
    }
}

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
    class $mol_infinite_demo extends $mol_example_large {
        title(): string;
        chunk_size(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        before(id: any): readonly any[];
        after(id: any): readonly any[];
        id(id: any): string;
        Photo(id: any): $$.$mol_avatar;
        name(id: any): string;
        Name(id: any): $$.$mol_paragraph;
        city(id: any): string;
        City(id: any): $$.$mol_paragraph;
        Info(id: any): $$.$mol_list;
        Item(id: any): $mol_row;
        List(): $$.$mol_infinite;
        Scroll(): $$.$mol_scroll;
    }
}

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
    class $mol_labeler_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Provider(): $mol_labeler;
        user_name(val?: any): string;
        Name_control(): $$.$mol_string;
        Name(): $mol_labeler;
    }
}

declare namespace $ {
    const enum $mol_layout_break {
        taboo = "taboo",
        allow = "allow",
        force = "force"
    }
}

declare namespace $ {
    class $mol_layout extends $mol_object {
        ortho: $mol_layout | null;
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
    class $mol_canvas extends $mol_view {
        dom_name(): string;
        context(): CanvasRenderingContext2D;
        field(): {
            width: number;
            height: number;
        };
        paint(): any;
        width(): number;
        height(): number;
    }
}

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
    class $mol_layout_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        paint(): any;
        context(): CanvasRenderingContext2D;
        width(): number;
        height(): number;
        Sample(): $$.$mol_canvas;
    }
}

declare namespace $ {
    class $mol_layout_tree extends $mol_layout {
        kids: $mol_layout[];
        ortho: $mol_layout_tree | null;
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
    class $mol_link_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        this_label(): string;
        This(): $$.$mol_link;
        red_label(): string;
        Red(): $$.$mol_link;
        green_label(): string;
        Green(): $$.$mol_link;
        blue_label(): string;
        Blue(): $$.$mol_link;
        external_hint(): string;
        External(): $$.$mol_link;
        object_uri(): string;
        Download_icon(): $mol_icon_download;
        download_label(): string;
        Download(): $$.$mol_link;
        Demo_items(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $mol_link_demo extends $.$mol_link_demo {
        object_uri(): string;
    }
}

declare namespace $ {
    class $mol_link_iconed_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        uri(val?: any): string;
        Input(): $$.$mol_string;
        Output(): $$.$mol_link_iconed;
        Blocks(): $$.$mol_list;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_link_lazy extends $mol_link {
        uri(val?: any): string;
        uri_generated(): string;
        current(): boolean;
        event(): {
            mousedown: (event?: any) => any;
            click: (event?: any) => any;
        };
        generate(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_link_lazy extends $.$mol_link_lazy {
        generate(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_link_lazy_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        uri_generated(): string;
        download_file(): string;
        Download_icon(): $mol_icon_download;
        download_label(): string;
        Download(): $$.$mol_link_lazy;
    }
}

declare namespace $.$$ {
    class $mol_link_lazy_demo extends $.$mol_link_lazy_demo {
        uri_generated(): string;
    }
}

declare namespace $ {
    class $mol_list_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        items_сount(next?: any): number;
        Items_count(): $$.$mol_number;
        Items_count_label(): $mol_labeler;
        item_title(id: any): string;
        Item(id: any): $$.$mol_link;
        list_items(): readonly any[];
        List_empty(): $$.$mol_paragraph;
        Items(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $mol_list_demo extends $.$mol_list_demo {
        item_title(id: number): string;
        list_items(): $mol_link[];
    }
}

declare namespace $ {
    class $mol_list_demo_table extends $mol_example {
        title(): string;
        count(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        check_list(): readonly $mol_check[];
        Check(): $$.$mol_check_group;
        Head(): $mol_row;
        row_id(id: any, next?: any): string;
        row_checked(id: any, next?: any): boolean;
        Id(id: any): $mol_check_box;
        Id_labeler(id: any): $mol_labeler;
        row_uri(id: any): string;
        row_title(id: any): string;
        Title(id: any): $$.$mol_link_iconed;
        Title_labeler(id: any): $mol_labeler;
        row_color(id: any, next?: any): string;
        colors(): readonly any[];
        Color(id: any): $$.$mol_select;
        Color_labeler(id: any): $mol_labeler;
        row_status(id: any, next?: any): string;
        status_options(): {
            minor: string;
            major: string;
            critical: string;
        };
        Status(id: any): $$.$mol_switch;
        Status_labeler(id: any): $mol_labeler;
        row_quantity(id: any, next?: any): number;
        Quantity(id: any): $$.$mol_number;
        Quantity_labeler(id: any): $mol_labeler;
        row_moment(id: any, val?: any): $mol_time_moment;
        Date(id: any): $$.$mol_date;
        Date_labeler(id: any): $mol_labeler;
        row_content(id: any): readonly any[];
        Row(id: any): $mol_row;
        rows(): readonly any[];
        Rows(): $$.$mol_list;
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
    class $mol_list_demo_tree extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        Row(id: any): $$.$mol_expander;
        tags(): readonly any[];
        aspects(): readonly any[];
        root_rows(): readonly any[];
        Content(): $$.$mol_list;
        row_title(id: any): string;
        Row_title(id: any): $$.$mol_paragraph;
        row_expanded(id: any, val?: any): boolean;
        row_content(id: any): readonly any[];
        Row_content(id: any): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $mol_list_demo_tree extends $.$mol_list_demo_tree {
        #private;
        root_rows(): $mol_expander[];
        row_title(id: number[]): string;
        row_content(id: number[]): $mol_expander[];
        row_expanded(id: number[], next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_map_yandex_mark extends $mol_object {
        pos(): $mol_vector_2d<number>;
        box(): $mol_vector_2d<$mol_vector_range<number>>;
        hint(): string;
        title(): string;
        content(): string;
        object(): any;
        box_lat(): $mol_vector_range<number>;
        box_lon(): $mol_vector_range<number>;
        address(): string;
    }
}

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
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<Partial<Val> & Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }> & Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, ({ [key in keyof Sub]: Parameters<Sub[key]>[0]; } extends infer T ? { [Field in keyof T]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; } : never)[keyof Sub]>>) => Readonly<$mol_type_merge<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }> & Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, ({ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; } extends infer T_1 ? { [Field_1 in keyof T_1]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; } : never)[keyof Sub]>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }> & Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, ({ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; } extends infer T_2 ? { [Field_1 in keyof T_2]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; } : never)[keyof Sub]>>>;
    };
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
    class $mol_map_yandex extends $mol_view {
        zoom(val?: any): number;
        center(val?: any): readonly any[];
        objects(): readonly $mol_map_yandex_mark[];
    }
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_wire_task<{}, [], Value>;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber {
        static method: typeof $mol_wire_method;
    }
}

declare namespace $.$$ {
    class $mol_map_yandex extends $.$mol_map_yandex {
        static api(): any;
        wait_ready(ymaps: any): Promise<unknown>;
        api(next?: any, force?: $mol_mem_force): any;
        update(event?: any): void;
        bounds_updated(): boolean;
        center(next?: readonly [number, number], force?: $mol_mem_force): $mol_vector_2d<number> | readonly [number, number];
        render(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_map_yandex_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        place_title(): string;
        place_addres(): string;
        place_content(): string;
        Place(): $$.$mol_map_yandex_mark;
        Map(): $$.$mol_map_yandex;
    }
}

declare namespace $ {
    class $hyoo_marked_app extends $mol_book2 {
        plugins(): readonly any[];
        pages(): readonly any[];
        Preview_close(): $$.$mol_link;
        Theme(): $$.$mol_theme_auto;
        Lights(): $$.$mol_lights_toggle;
        Source(): $mol_link_source;
        preview(next?: any): string;
        Preview(): $$.$mol_switch;
        marked(val?: any): string;
        Marked_text(): $$.$mol_textarea;
        Marked(): $mol_page;
        html(): string;
        Html_text(): $$.$mol_text_code;
        Html(): $mol_page;
        View_text(): $$.$mol_text;
        View(): $mol_page;
        Preview_close_icon(): $mol_icon_cross;
    }
}

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
    class $hyoo_marked_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Sandbox(): $$.$hyoo_marked_app;
    }
}

declare namespace $ {
    class $hyoo_harp_app extends $mol_page {
        title(): string;
        plugins(): readonly any[];
        tools(): readonly any[];
        body(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        Source(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        rate(): number;
        Rate(): $mol_speck;
        uri(next?: any): string;
        Uri(): $$.$mol_textarea;
        json(next?: any): any;
        Json(): $$.$mol_dump_value;
        Content(): $$.$mol_list;
    }
}

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
    class $hyoo_harp_demo extends $mol_example_large {
        sub(): readonly any[];
        tags(): readonly any[];
        title(): string;
        Sandbox(): $$.$hyoo_harp_app;
    }
}

declare namespace $ {
    class $mol_nav_demo extends $mol_example {
        title(): string;
        plugins(): readonly any[];
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Nav(): $$.$mol_nav;
        tab_current(val?: any): string;
        tab_list(): readonly string[];
        Tab_list(): $$.$mol_switch;
        row_current(val?: any): string;
        row_list(): readonly string[];
        Row_list(): $$.$mol_switch;
        Demo_items(): $$.$mol_card;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_number_demo extends $mol_example_small {
        title(): string;
        value(next?: any): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        value_string(): string;
        Value_string(): $$.$mol_string;
        reset_enabled(): boolean;
        reset_value(next?: any): any;
        Reset(): $mol_button_major;
        Section_value_bar(): $mol_bar;
        Section_value_row(): $mol_row;
        Section_value(): $$.$mol_section;
        Initial_number(): $$.$mol_number;
        Initial_number_label(): $mol_labeler;
        Hint_number(): $$.$mol_number;
        Hint_number_label(): $mol_labeler;
        Section_initial_row(): $mol_row;
        Section_initial(): $$.$mol_section;
        Value_field_disabled_number(): $$.$mol_number;
        Value_field_disabled_number_label(): $mol_labeler;
        Disabled_number(): $$.$mol_number;
        Disabled_number_label(): $mol_labeler;
        Dec_disabled_number(): $$.$mol_number;
        Dec_disabled_number_label(): $mol_labeler;
        Inc_disabled_number(): $$.$mol_number;
        Inc_disabled_number_label(): $mol_labeler;
        Section_disabled_row(): $mol_row;
        Section_disabled(): $$.$mol_section;
        Precision_change_10_number(): $$.$mol_number;
        Precision_change_10_number_label(): $mol_labeler;
        Precision_change_01_number(): $$.$mol_number;
        Precision_change_01_number_label(): $mol_labeler;
        Precision_100_number_number(): $$.$mol_number;
        Precision_100_number_label(): $mol_labeler;
        Precision_5_number_number(): $$.$mol_number;
        Precision_5_number_label(): $mol_labeler;
        Precision_01_number_number(): $$.$mol_number;
        Precision_01_number_label(): $mol_labeler;
        Precision_005_number_number(): $$.$mol_number;
        Precision_005_number_label(): $mol_labeler;
        Precision_view_001_number(): $$.$mol_number;
        Precision_view_001_number_label(): $mol_labeler;
        Precision_view_10_number(): $$.$mol_number;
        Precision_view_10_number_label(): $mol_labeler;
        Section_precision_row(): $mol_row;
        Section_precision(): $$.$mol_section;
        value_min_m5(next?: any): number;
        Min_m5_number(): $$.$mol_number;
        Min_m5_number_label(): $mol_labeler;
        value_min_0(next?: any): number;
        Min_0_number(): $$.$mol_number;
        Min_0_number_label(): $mol_labeler;
        value_min_5(next?: any): number;
        Min_5_number(): $$.$mol_number;
        Min_5_number_label(): $mol_labeler;
        value_max_m5(next?: any): number;
        Max_m5_number(): $$.$mol_number;
        Max_m5_number_label(): $mol_labeler;
        value_max_0(next?: any): number;
        Max_0_number(): $$.$mol_number;
        Max_0_number_label(): $mol_labeler;
        value_max_5(next?: any): number;
        Max_5_number(): $$.$mol_number;
        Max_5_number_label(): $mol_labeler;
        value_max_100(next?: any): number;
        Max_100_number(): $$.$mol_number;
        Max_100_number_label(): $mol_labeler;
        value_case1_range(next?: any): number;
        Range_case1_number(): $$.$mol_number;
        Range_number_case1_label(): $mol_labeler;
        value_case2_range(next?: any): any;
        Range_case2_number(): $$.$mol_number;
        Range_number_case2_label(): $mol_labeler;
        value_case3_range(next?: any): any;
        Range_case3_number(): $$.$mol_number;
        Range_number_case3_label(): $mol_labeler;
        Section_range_row(): $mol_row;
        Section_range(): $$.$mol_section;
        Rows(): $$.$mol_list;
    }
}

declare namespace $.$$ {
    class $mol_number_demo extends $.$mol_number_demo {
        value_string(): string;
        reset_value(): void;
        reset_enabled(): boolean;
    }
}

declare namespace $ {
    class $mol_page_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Button_tools(): $mol_button_minor;
        Text(): $$.$mol_filler;
        Button_foot(): $mol_button_minor;
        Page(): $mol_page;
    }
}

declare namespace $ {
    class $mol_paginator_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        page(val?: any): number;
        Pages(): $$.$mol_paginator;
    }
}

declare namespace $ {
    class $mol_plot_demo extends $mol_example_large {
        title(): string;
        count(val?: any): number;
        frequency(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        saturation_series(): readonly any[];
        Saturation_fill(): $$.$mol_plot_fill;
        Saturation_line(): $$.$mol_plot_line;
        Saturation(): $$.$mol_plot_group;
        input_series(): readonly any[];
        Input_line(): $$.$mol_plot_line;
        Input_dots(): $$.$mol_plot_dot;
        Input(): $$.$mol_plot_group;
        output_series(): readonly any[];
        Output(): $$.$mol_plot_bar;
        Voltage_title(): string;
        Voltage(): $$.$mol_plot_ruler_vert;
        Time_title(): string;
        Time(): $$.$mol_plot_ruler_hor;
        Plot(): $$.$mol_plot_pane;
    }
}

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
    class $mol_plot_map_heat extends $mol_plot_group {
        series_z(): readonly number[];
        graphs(): readonly any[];
        Level(id: any): $mol_plot_map_heat_level;
        Sample(): $mol_plot_graph_sample;
        level_graphs(): readonly any[];
        level_hint(id: any): string;
        level_points(id: any): readonly any[];
        level_opacity(id: any): string;
        level_diameter(): number;
        level_aspect(): number;
    }
    class $mol_plot_map_heat_level extends $mol_plot_dot {
        style(): {
            opacity: string;
            "stroke-width": number;
            color: string;
        };
        opacity(): string;
    }
}

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
    class $mol_plot_map_heat_demo extends $mol_example_large {
        title(): string;
        count_x(): number;
        count_y(): number;
        count_z(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        terrain_x(): readonly number[];
        terrain_y(): readonly number[];
        terrain_z(): readonly number[];
        Terrain(): $$.$mol_plot_map_heat;
        zoom(val?: any): number;
        Plot(): $$.$mol_plot_pane;
    }
}

declare namespace $.$$ {
    class $mol_plot_map_heat_demo extends $.$mol_plot_map_heat_demo {
        terrain_x(): number[];
        terrain_y(): number[];
        terrain_z(): number[];
    }
}

declare namespace $ {
    class $mol_icon_anchor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_pop_demo extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        show_title(): string;
        pop_showed_check_hint(): string;
        pop_showed(val?: any): boolean;
        Show_check(): $mol_check_box;
        Showed(): $mol_labeler;
        align_title(): string;
        pop_align(val?: any): string;
        aligins(): {
            left_top: string;
            left_center: string;
            left_bottom: string;
            right_top: string;
            right_center: string;
            right_bottom: string;
            center: string;
            top_left: string;
            top_center: string;
            top_right: string;
            bottom_left: string;
            bottom_center: string;
            bottom_right: string;
        };
        Align_select(): $$.$mol_switch;
        Align(): $mol_labeler;
        Manage(): $mol_row;
        anchor_button_icon(): $mol_icon_anchor;
        anchor_button_title(): string;
        Pop_anchor(): $mol_button_major;
        bubble_hint(): string;
        Content(): $mol_row;
        Pop(): $$.$mol_pop;
        Pop_area(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_pop_over extends $mol_pop {
        showed(): boolean;
        attr(): {
            tabindex: number;
        };
        event(): {
            mouseenter: (event?: any) => any;
            mouseleave: (event?: any) => any;
        };
        hovered(val?: any): boolean;
        event_show(event?: any): any;
        event_hide(event?: any): any;
    }
}

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
    class $mol_pop_over_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        file_title(): string;
        open_title(): string;
        Open(): $mol_button_minor;
        export_title(): string;
        Export(): $mol_button_minor;
        save_title(): string;
        Save(): $mol_button_minor;
        File_menu(): $$.$mol_list;
        File(): $$.$mol_pop_over;
        help_title(): string;
        updates_title(): string;
        Updates(): $mol_button_minor;
        about_title(): string;
        About(): $mol_button_minor;
        Help_menu(): $$.$mol_list;
        Help(): $$.$mol_pop_over;
        Menu(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_portion_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        fist(): number;
        Empty(): $$.$mol_portion;
        second(): number;
        Partial(): $$.$mol_portion;
        third(): number;
        Full(): $$.$mol_portion;
    }
}

declare namespace $ {
    class $mol_icon_menu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_pick_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        info_content_text(): string;
        Info_content(): $$.$mol_text;
        Info_pop(): $$.$mol_pick;
        Options_trigger_icon(): $mol_icon_menu;
        Menu_item_copy(): $$.$mol_button_copy;
        Menu_item_download_blob(): Blob;
        Menu_item_download(): $$.$mol_button_download;
        menu_item_delete_icon(): $mol_icon_trash_can_outline;
        menu_item_delete_label(): string;
        delete_confirm(next?: any): any;
        Delete_confirm(): $mol_button_major;
        Menu_item_delete(): $$.$mol_pick;
        Options_content(): $$.$mol_list;
        Options_pop(): $$.$mol_pick;
    }
}

declare namespace $.$$ {
    class $mol_pick_demo extends $.$mol_pick_demo {
        delete_confirm(): void;
    }
}

declare namespace $ {
    class $mol_icon_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_pick_time extends $mol_pick {
        Icon(): $mol_icon_clock_outline;
        bubble_content(): readonly any[];
        value_moment(next?: any): $mol_time_moment;
        value(next?: any): string;
        enabled(): boolean;
        Input(): $$.$mol_format;
        hour_selected(next?: any): string;
        hour_options(): {};
        Hours(): $$.$mol_switch;
        Delimiter(): $$.$mol_paragraph;
        minute_selected(next?: any): string;
        minute_options(): {};
        Minutes(): $$.$mol_switch;
        Pickers(): $mol_row;
    }
}

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
    class $mol_pick_time_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        moment(next?: any): $mol_time_moment;
        Picker(): $$.$mol_pick_time;
    }
}

declare namespace $ {
    class $mol_row_demo_form extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        name_hint(): string;
        name(val?: any): string;
        suggest1(): string;
        suggest2(): string;
        Name(): $$.$mol_search;
        count_hint(): string;
        count(val?: any): any;
        Count(): $$.$mol_number;
        progress(): number;
        Progress(): $$.$mol_portion;
        publish_label(): string;
        publish(val?: any): boolean;
        Publish(): $mol_check_box;
        drop_title(): string;
        Drop(): $mol_button_minor;
        Row(): $mol_row;
    }
}

declare namespace $ {
    class $mol_row_demo_products extends $mol_example {
        title(): string;
        count(): number;
        Product(id: any): $$.$mol_card;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        product_title(id: any): string;
        products(): readonly any[];
        Products(): $mol_row;
    }
}

declare namespace $.$$ {
    class $mol_row_demo_products extends $.$mol_row_demo_products {
        products(): $mol_card[];
        product_title(id: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_scroll_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Filler0(): $$.$mol_filler;
        Filler1(): $$.$mol_filler;
        Filler2(): $$.$mol_filler;
        Filler3(): $$.$mol_filler;
        Filler4(): $$.$mol_filler;
        Filler5(): $$.$mol_filler;
        Filler6(): $$.$mol_filler;
        Filler7(): $$.$mol_filler;
        Filler8(): $$.$mol_filler;
        Filler9(): $$.$mol_filler;
        Content(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
    }
}

declare namespace $ {
    class $mol_search_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        suggests(): readonly any[];
        query(): string;
        Search(): $$.$mol_search;
    }
}

declare namespace $.$$ {
    class $mol_search_demo extends $.$mol_search_demo {
        suggests(): string[];
    }
}

declare namespace $ {
    class $mol_section_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Section_content(): $$.$mol_filler;
        Section(): $$.$mol_section;
    }
}

declare namespace $ {
    class $mol_section_demo_level extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        Section1(): $$.$mol_section;
        Section2(): $$.$mol_section;
        Section3(): $$.$mol_section;
        Section4(): $$.$mol_section;
        Section5(): $$.$mol_section;
        Section6(): $$.$mol_section;
        Section7(): $$.$mol_section;
        tags(): readonly any[];
        aspects(): readonly any[];
        Section1_text(): $$.$mol_filler;
        Section2_text(): $$.$mol_filler;
        Section3_text(): $$.$mol_filler;
        Section4_text(): $$.$mol_filler;
        Section5_text(): $$.$mol_filler;
        Section6_text(): $$.$mol_filler;
        Section7_text(): $$.$mol_filler;
    }
}

declare namespace $ {
    class $mol_select_demo_colors extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        color(val?: any): string;
        colors(): {};
        color_name(id: any): string;
        option_color(id: any): string;
        Color_preview(id: any): $mol_select_colors_color_preview;
        Color_name(id: any): $$.$mol_dimmer;
        Color_option(id: any): $mol_view;
        option_content(id: any): readonly any[];
        color_filter(): string;
        Color(): $$.$mol_select;
    }
    class $mol_select_colors_color_preview extends $mol_view {
        style(): {
            background: string;
        };
        color(): string;
    }
}

declare namespace $.$$ {
    class $mol_select_demo_colors extends $.$mol_select_demo_colors {
        color_name(id: string): any;
        option_color(id: string): any;
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
    class $mol_select_demo_month extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        month(val?: any): string;
        months(): {
            jan: string;
            feb: string;
            mar: string;
            apr: string;
            may: string;
            jun: string;
            jul: string;
            aug: string;
            sep: string;
            oct: string;
            nov: string;
            dec: string;
        };
        Month(): $$.$mol_select;
    }
}

declare namespace $ {
    class $mol_select_demo_priority extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        priority(val?: any): string;
        Priority(): $$.$mol_select;
    }
}

declare namespace $ {
    class $mol_select_list_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        friends(val?: any): readonly any[];
        suggestions(): {
            jocker: string;
            harley: string;
            penguin: string;
            riddler: string;
            bane: string;
            freeze: string;
            clay: string;
            mask: string;
        };
        Friends(): $$.$mol_select_list;
        Friends_disabled(): $$.$mol_select_list;
        Demo_items(): $$.$mol_list;
    }
}

declare namespace $ {
    class $mol_speck_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Link_speck(): $mol_speck;
        Link_icon(): $mol_icon_settings;
        Link(): $$.$mol_link;
        string_speck(): string;
        String_speck(): $mol_speck;
        String_field(): $$.$mol_string;
        String(): $mol_view;
        notification_count(): number;
        Button_speck(): $mol_speck;
        Button_icon(): $mol_icon_menu;
        Button(): $mol_button_minor;
        Message_speck(): $mol_speck;
        message_text(): string;
        Message(): $$.$mol_paragraph;
    }
}

declare namespace $ {
    let $mol_defer: typeof $mol_after_frame;
}

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
    class $mol_speech_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Toggle_icon(): $mol_icon_microphone;
        hearing(val?: any): boolean;
        Toggle(): $mol_check_icon;
        message(): string;
        Message(): $mol_row;
        speak(val?: any): any;
        Speak(): $mol_button_major;
    }
}

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
    class $mol_spell_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        article(next?: any): string;
        Article(): $$.$mol_textarea;
        report(): string;
        Report(): $$.$mol_text_code;
        List(): $$.$mol_list;
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

declare namespace $.$$ {
    class $mol_spell_demo extends $.$mol_spell_demo {
        report(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_stack_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Back(): $$.$mol_image;
        Front(): $mol_view;
        Collage(): $mol_stack;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_string_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        name(val?: any): string;
        Simple(): $$.$mol_string;
        Hint(): $$.$mol_string;
        name2(val?: any): string;
        Filled(): $$.$mol_string;
        Disabled(): $$.$mol_string;
        Button(): $mol_string_button;
    }
}

declare namespace $ {
    class $mol_switch_demo extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        color(val?: any): string;
        option_red(): string;
        option_green(): string;
        option_blue(): string;
        option_infernal(): string;
        Enabled(): $$.$mol_switch;
        Enabled_labeler(): $mol_labeler;
        Disabled(): $$.$mol_switch;
        Disabled_labeler(): $mol_labeler;
        Demo_items(): $$.$mol_list;
    }
}

declare namespace $ {
    class $mol_tag_tree_demo extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        item_title(id: any): string;
        Item(id: any): $mol_button_minor;
        Tree(): $$.$mol_tag_tree;
    }
}

declare namespace $.$$ {
    class $mol_tag_tree_demo extends $.$mol_tag_tree_demo {
        item_title(path: readonly string[]): string;
    }
}

declare namespace $ {
    class $mol_text_code_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        source(): string;
        syntax(): any;
        uri_resolve(id: any): string;
        Text(): $$.$mol_text_code;
    }
}

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
    class $mol_text_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        search(next?: any): string;
        Search(): $$.$mol_search_jumper;
        Edit_icon(): $mol_icon_pencil;
        Edit(): $$.$mol_link;
        View(): $$.$mol_text;
        View_page(): $mol_page;
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        text(next?: any): string;
        Code(): $$.$mol_textarea;
        Code_page(): $mol_page;
        pages(): readonly any[];
        Book(): $$.$mol_book2;
    }
}

declare namespace $.$$ {
    class $mol_text_demo extends $.$mol_text_demo {
        edit(): boolean;
        pages(): $mol_page[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_textarea_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        empty_descr(next?: any): string;
        Empty_descr(): $$.$mol_textarea;
        filled_descr(next?: any): string;
        Filled_descr(): $$.$mol_textarea;
        symbols_hint(): string;
        Disabled(): $$.$mol_textarea;
    }
}

declare namespace $.$$ {
    class $mol_textarea_demo extends $.$mol_textarea_demo {
        symbols_hint(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_time_duration_demo extends $mol_example_code {
        title(): string;
        code(next?: any): string;
        tags(): readonly any[];
        aspects(): readonly any[];
    }
}

declare namespace $ {
    class $mol_time_interval_demo extends $mol_example_code {
        title(): string;
        code(next?: any): string;
        tags(): readonly any[];
        aspects(): readonly any[];
    }
}

declare namespace $ {
    class $mol_time_moment_demo extends $mol_example_code {
        title(): string;
        code(next?: any): string;
        tags(): readonly any[];
        aspects(): readonly any[];
    }
}

declare namespace $ {
    class $mol_toolbar extends $mol_view {
        attr(): {
            mol_toolbar_expanded: boolean;
        };
        sub(): readonly any[];
        items(): readonly $mol_view[];
        Bar(): $mol_view;
        expanded(val?: any): boolean;
        Expand(): $$.$mol_check_expand;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_toolbar extends $.$mol_toolbar {
    }
}

declare namespace $ {
    class $mol_icon_content_copy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_cut extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_paste extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_toolbar_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        search_hint(): string;
        Search(): $$.$mol_string;
        replace_hint(): string;
        Replace(): $$.$mol_string;
        approve_label(): string;
        Approve(): $mol_button_major;
        decline_label(): string;
        Decline(): $mol_button_minor;
        Copy_icon(): $mol_icon_content_copy;
        Copy(): $mol_button_minor;
        Cut_icon(): $mol_icon_content_cut;
        Cut(): $mol_button_minor;
        Paste_icon(): $mol_icon_content_paste;
        Paste(): $mol_button_minor;
        Delete_icon(): $mol_icon_delete;
        Delete(): $mol_button_minor;
        Toolbar(): $$.$mol_toolbar;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_video_player extends $mol_view {
        dom_name(): string;
        playing(val?: any): boolean;
        volume(val?: any): number;
        time(val?: any): number;
        duration(): number;
        attr(): {
            src: string;
            controls: boolean;
            autoplay: boolean;
            loop: boolean;
            poster: string;
        };
        event(): {
            volumechange: (event?: any) => any;
            timeupdate: (event?: any) => any;
            durationchange: (event?: any) => any;
            playing: (event?: any) => any;
            play: (event?: any) => any;
            pause: (event?: any) => any;
        };
        uri(): string;
        controls(): boolean;
        autoplay(): boolean;
        loop(): boolean;
        poster(): string;
        revolume(event?: any): any;
        retime(event?: any): any;
        redurate(event?: any): any;
        play_started(event?: any): any;
        play(event?: any): any;
        pause(event?: any): any;
    }
}

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
    class $mol_video_player_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        files(): readonly any[];
        Open(): $mol_button_open;
        Playing_icon(): $mol_icon_play;
        Playing(): $mol_check_icon;
        Duration(): $$.$mol_paragraph;
        Duration_labeler(): $mol_labeler;
        Time(): $$.$mol_number;
        Time_labeler(): $mol_labeler;
        Volume(): $$.$mol_number;
        Volume_labeler(): $mol_labeler;
        Controls(): $mol_row;
        uri(): string;
        playing(val?: any): boolean;
        volume(val?: any): number;
        time(val?: any): number;
        duration(): number;
        Player(): $$.$mol_video_player;
    }
}

declare namespace $.$$ {
    class $mol_video_player_demo extends $.$mol_video_player_demo {
        uri(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_password extends $mol_view {
        type(val?: any): string;
        sub(): readonly any[];
        hint(): string;
        value(val?: any): string;
        submit(event?: any): any;
        enabled(): boolean;
        Pass(): $$.$mol_string;
        checked(val?: any): boolean;
        Show_icon(): $mol_icon_eye;
        Show(): $mol_check_icon;
        content(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_password extends $.$mol_password {
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_password_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        pass(val?: any): string;
        Simple(): $$.$mol_password;
        pass2(val?: any): string;
        Hint(): $$.$mol_password;
    }
}

declare namespace $ {
    class $mol_lights_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        aspects(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        Lighter(): $$.$mol_lights_toggle;
        Sample(): $mol_view;
    }
}

declare namespace $.$$ {
    class $hyoo_mol extends $.$hyoo_mol {
        Placeholder(): any;
    }
}

declare namespace $ {
}

export = $;