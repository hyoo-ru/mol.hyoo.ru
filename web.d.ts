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
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_report_bugsnag: string;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
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
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
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
        static per(value: number): $mol_style_unit<"%">;
        static px(value: number): $mol_style_unit<"px">;
        static mm(value: number): $mol_style_unit<"mm">;
        static cm(value: number): $mol_style_unit<"cm">;
        static Q(value: number): $mol_style_unit<"Q">;
        static in(value: number): $mol_style_unit<"in">;
        static pc(value: number): $mol_style_unit<"pc">;
        static pt(value: number): $mol_style_unit<"pt">;
        static cap(value: number): $mol_style_unit<"cap">;
        static ch(value: number): $mol_style_unit<"ch">;
        static em(value: number): $mol_style_unit<"em">;
        static rem(value: number): $mol_style_unit<"rem">;
        static ex(value: number): $mol_style_unit<"ex">;
        static ic(value: number): $mol_style_unit<"ic">;
        static lh(value: number): $mol_style_unit<"lh">;
        static rlh(value: number): $mol_style_unit<"rlh">;
        static vh(value: number): $mol_style_unit<"vh">;
        static vw(value: number): $mol_style_unit<"vw">;
        static vi(value: number): $mol_style_unit<"vi">;
        static vb(value: number): $mol_style_unit<"vb">;
        static vmin(value: number): $mol_style_unit<"vmin">;
        static vmax(value: number): $mol_style_unit<"vmax">;
        static deg(value: number): $mol_style_unit<"deg">;
        static rad(value: number): $mol_style_unit<"rad">;
        static grad(value: number): $mol_style_unit<"grad">;
        static turn(value: number): $mol_style_unit<"turn">;
        static s(value: number): $mol_style_unit<"s">;
        static ms(value: number): $mol_style_unit<"ms">;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | $mol_style_unit<"%">)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        card: $mol_style_func<"var", "--mol_theme_card">;
        current: $mol_style_func<"var", "--mol_theme_current">;
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
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
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
        refresh(): void;
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
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static _timeout: any;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
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
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, ...args: Args);
        plan(): void;
        reap(): void;
        toString(): any;
        toJSON(): any;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
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
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, [...Args], Result>;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[], Result>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => Result>): {
        value: (this: Host, ...args: Args) => Result;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => Result) | undefined;
        set?: ((value: (...args: Args) => Result) => void) | undefined;
    };
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result, keys: number): (host: Host, args: Args) => $mol_wire_atom<Host, [...Args], Result>;
        recall(...args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_mem<Keys extends number>(keys: Keys): <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    function $mol_wire_mem_func<Keys extends number>(keys: Keys): <Result, Host, Args extends unknown[], Func extends (this: Host, ...args: Args) => Result>(func: Func) => Func;
}

declare namespace $ {
    let $mol_mem: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key2: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key3: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
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
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value | undefined) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
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
    function $mol_wire_async<Host extends object>(obj: Host): { [key in keyof Host]: Host[key] extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host[key] : (...args: Args) => Promise<Res> : Host[key]; };
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
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
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
        view_rect(): ClientRect | null;
        view_rect_cache(next?: ClientRect | null): ClientRect | null;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
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
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): Promise<void>;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset';
    type Color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | $mol_style_unit<$mol_style_unit_length> | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center';
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both';
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint';
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat';
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | readonly ['first' | 'last', 'baseline'] | readonly ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            color?: Color | Common;
            image?: readonly (readonly [$mol_style_func<'url'>])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
            size?: (BG_size | [BG_size, BG_size])[];
        };
        backdropFilter: string;
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
        webkitOverflowScrolling?: 'auto' | 'touch';
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
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
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
            basis?: Size;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number;
        opacity: number;
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
    type Descendant<Name extends keyof $mol_view_all, Config> = $mol_style_guard<Extract<$mol_type_result<$mol_view_all[Name]>, $mol_view>, Config>;
    type Kids<Config> = {
        [view in keyof Config]: view extends keyof $mol_view_all ? Descendant<view, Config[view]> : $mol_type_error<'Unknown View'>;
    };
    type Attrs<View extends $mol_view, Config> = {
        [name in keyof Config]: name extends keyof ReturnType<View['attr']> ? {
            [val in keyof Config[name]]: $mol_style_guard<View, Config[name][val]>;
        } : $mol_type_error<'Unknown attribute'>;
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    export type $mol_style_guard<View extends $mol_view, Config> = $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? unknown : key extends $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '>' ? Kids<Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends keyof $mol_view_all ? Descendant<key, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : $mol_type_error<'Unknown Property or View'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
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
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
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

declare namespace $.$$ {
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

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, next?: Value): Value | undefined;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        sub(): readonly $mol_view[];
    }
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
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
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
    class $mol_link extends $mol_view {
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
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: {
            [key: string]: string;
        }): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
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

declare namespace $ {
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
    class $mol_page extends $mol_view {
        dom_name(): string;
        sub(): readonly any[];
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
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_book2_catalog extends $mol_book2 {
        param(): string;
        spreads(): {};
        Spread(): $mol_view;
        pages(): readonly any[];
        Link(id: any): $$.$mol_link;
        Spread_close(): $$.$mol_link;
        menu_title(): string;
        menu_tools(): readonly any[];
        links(): readonly any[];
        Links(): $$.$mol_list;
        Menu(): $mol_page;
        arg(id: any): {};
        spread_title(id: any): string;
        spread_close_arg(): {};
        Spread_close_icon(): $mol_icon_cross;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2_catalog extends $.$mol_book2_catalog {
        pages(): any[];
        links(): $mol_link[];
        Spread(): any;
        spread(): string;
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
}

declare var $node: any;

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
    function $mol_charset_decode(value: Uint8Array, code?: $mol_charset_encoding): string;
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
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): { [key in keyof Host]: Host[key] extends (...args: infer Args) => Promise<infer Res> ? (...args: Args) => Res : Host[key]; };
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
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
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): void;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
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
    class $mol_theme_auto extends $mol_plugin {
        attr(): {
            mol_theme: string;
        };
        theme(): string;
    }
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
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
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        minimal_width(): number;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): {
            click: (event?: any) => any;
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
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: null): null;
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
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
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: boolean;
            "aria-checked": boolean;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        checked(val?: any): boolean;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
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
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        sub(): readonly any[];
    }
}

declare namespace $ {
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
        [Symbol.matchAll](str: string): IterableIterator<$mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | string[];
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
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
        haystack(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_text_code_row extends $mol_paragraph {
        text(): string;
        minimal_height(): number;
        numb_showed(): boolean;
        Numb(): $mol_view;
        Token(id: any): $mol_text_code_token;
        Token_link(id: any): $mol_text_code_token_link;
        numb(): number;
        token_type(id: any): string;
        token_text(id: any): string;
        highlight(): string;
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
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code3: RegExp;
        code: RegExp;
        strike: RegExp;
        'text-link': RegExp;
        'image-link': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
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
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
    class $mol_text_code extends $mol_list {
        attr(): {
            mol_text_code_sidebar_showed: boolean;
        };
        text(): string;
        text_lines(): readonly string[];
        Row(id: any): $$.$mol_text_code_row;
        sidebar_showed(): boolean;
        row_numb(id: any): number;
        row_text(id: any): string;
        highlight(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        text_lines(): readonly string[];
        rows(): $mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
    }
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
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_view {
        row_height(): number;
        row_ids(): readonly string[][];
        row_id(index: any): any;
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
        dom_name(): string;
    }
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        sub(): readonly $mol_view[];
        cells(): readonly $mol_view[];
    }
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
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

declare namespace $ {
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
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            src: string;
            alt: string;
            loading: string;
        };
        uri(): string;
        loading(): string;
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
        Icon(): $mol_image;
        title(): string;
    }
}

declare namespace $ {
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
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        tokens(): readonly any[];
        Quote(id: any): $$.$mol_text;
        Row(id: any): $mol_text_row;
        Span(id: any): $mol_text_span;
        String(id: any): $mol_text_string;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        Code(id: any): $$.$mol_text_code;
        Table(id: any): $$.$mol_grid;
        Table_row(id: any): $mol_grid_row;
        Table_cell(id: any): $mol_grid_cell;
        Table_cell_head(id: any): $mol_grid_cell;
        quote_text(id: any): string;
        block_content(id: any): readonly any[];
        block_type(id: any): string;
        highlight(): string;
        link_target(id: any): string;
        header_level(id: any): number;
        header_content(id: any): readonly any[];
        code_text(id: any): string;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        table_cells(id: any): readonly any[];
        table_cell_content(id: any): readonly any[];
    }
    class $mol_text_row extends $mol_paragraph {
        attr(): {
            mol_text_type: string;
        };
        type(): string;
    }
    class $mol_text_header extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_header_level: number;
        };
        sub(): readonly any[];
        level(val?: any): number;
        content(): readonly any[];
    }
    class $mol_text_span extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_type: string;
        };
        sub(): readonly any[];
        type(val?: any): string;
        content(val?: any): readonly any[];
    }
    class $mol_text_string extends $mol_dimmer {
        dom_name(): string;
        haystack(val?: any): string;
    }
    class $mol_text_link extends $mol_link_iconed {
        attr(): {
            mol_text_type: string;
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        uri(): string;
        content(val?: any): readonly any[];
        type(val?: any): string;
        link(val?: any): string;
    }
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            allowfullscreen: boolean;
            mol_text_type: string;
            data: string;
        };
        sub(): readonly any[];
        type(val?: any): string;
        link(val?: any): string;
        title(val?: any): string;
        Image(): $mol_image;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        rows(): ($mol_text_code | $mol_grid | $mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): $mol_view[];
        code_text(index: number): string;
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_grid_cell[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): $mol_view[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): $mol_view[];
        code2spans(prefix: string, text: string): $mol_view[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_scroll {
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
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
    }
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
        };
        attr(): {
            maxlength: number;
            type: string;
        };
        event(): {
            input: (event?: any) => any;
            keydown: (event?: any) => any;
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
        length_max(): number;
        type(val?: any): string;
        event_change(event?: any): any;
        event_key_press(event?: any): any;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $ {
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_button_minor | $mol_string)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_button_minor | $mol_string)[];
        nav_focused(component?: $mol_view): $mol_view | $mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
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
    class $mol_paginator extends $mol_view {
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_paginator extends $.$mol_paginator {
        backward(event: Event): void;
        forward(event: Event): void;
    }
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
        anchor_content(): ($mol_button_minor | $mol_string | $mol_paginator)[];
    }
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
    class $mol_embed_native extends $mol_scroll {
        dom_name(): string;
        window(): any;
        attr(): {
            data: string;
            type: string;
        };
        sub(): readonly any[];
        uri(val?: any): string;
        mime(): string;
        title(val?: any): string;
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
}

declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        uri_listener(): $mol_dom_listener;
        uri_change(event?: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
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
        uri(val?: any): string;
        html(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
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
        external(): string;
        External_icon(): $mol_icon_open_in_new;
        Esternal(): $$.$mol_link;
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        embed(): string;
        Embed(): $$.$mol_frame;
        Page(): $mol_page;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_chat extends $.$mol_chat {
        opened(): boolean;
        pages(): $mol_page[];
        external(): string;
        embed(): string;
    }
}

declare namespace $ {
    class $hyoo_habhub extends $mol_book2 {
        plugins(): readonly any[];
        Menu_page(): $mol_page;
        Details(id: any): $mol_page;
        Menu_row(id: any): $$.$mol_link;
        Theme(): $$.$mol_theme_auto;
        menu_title(): string;
        Add_icon(): $mol_icon_plus;
        Add(): $$.$mol_link;
        Source_link(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools_root(): readonly any[];
        search(val?: any): string;
        Details_body(): $mol_view;
        Search(): $$.$mol_search_jumper;
        menu_rows(): readonly any[];
        Menu(): $$.$mol_list;
        gist_current_title(): string;
        chat_seed(id: any): string;
        chat_pages(id: any): $mol_page[];
        Details_chat(id: any): $$.$mol_chat;
        gist_current_created(): string;
        Created(): $$.$mol_paragraph;
        details_link(): string;
        Details_link(): $mol_link_source;
        close_arg(): {
            author: any;
            repo: any;
            article: any;
            gist: any;
        };
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        details_scroll_top(val?: any): number;
        gist_current_content(): string;
        Datails_text(): $$.$mol_text;
        gist_title(id: any): string;
        Menu_row_title(id: any): $$.$mol_dimmer;
        gist_arg(id: any): {};
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
    class $mol_model<Raw extends Object> extends $mol_object {
        static item<Instance extends $mol_model<{}>>(this: {
            new (): Instance;
        }, uri: string): Instance;
        static cache<Raw extends Object>(): {};
        uri(): string;
        resource_url(): string;
        method_put(): string;
        json(next?: Partial<Raw>, force?: $mol_mem_force): Raw;
        json_update(patch: Partial<Raw>): Raw;
    }
    function $mol_model_prop<Value, Json>(field: string, make: (json: Json) => Value): <Raw extends Object, Host extends $mol_model<Raw>>(host: Host, prop: string, descr: TypedPropertyDescriptor<(next?: Value | undefined) => Value>) => void;
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
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
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
    class $mol_github_auth extends $mol_object {
        static id(): string;
        static secret(): string;
        static code_uri(): string;
        static token_uri(): string;
        static cache(next?: {
            scopes: string[];
            token: string;
        }): {
            scopes: string[];
            token: string;
        };
        static scopes(next?: string[]): string[];
        static code(next?: string, force?: $mol_mem_force): string;
        static token_last(next?: string, force?: $mol_mem_force): string;
        static token(scopes: string[]): string;
    }
}

declare namespace $ {
    interface $mol_github_entity_json {
        url?: string;
        html_url?: string;
        id?: number;
        created_at?: string;
        updated_at?: string;
    }
    class $mol_github_entity<Raw extends $mol_github_entity_json> extends $mol_model<Raw> {
        link(): string | undefined;
        id(): number | undefined;
        moment_created(): $mol_time_moment;
        moment_updated(): $mol_time_moment;
        method_put(): string;
        resource_url(): string;
    }
}

declare namespace $ {
    interface $mol_github_user_json extends $mol_github_entity_json {
        login: string;
        avatar_url: string;
        gravatar_id: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: false;
    }
    class $mol_github_user extends $mol_github_entity<$mol_github_user_json> {
        name(): string;
        avatar(): string;
    }
}

declare namespace $ {
    interface $mol_github_label_json extends $mol_github_entity_json {
        name?: string;
        color?: string;
        default?: boolean;
    }
    class $mol_github_label extends $mol_github_entity<$mol_github_label_json> {
        name(): string | undefined;
        color(): string | undefined;
        default(): boolean | undefined;
    }
}

declare namespace $ {
    interface $mol_github_comment_json extends $mol_github_entity_json {
        issue_url: string;
        user: $mol_github_user_json;
        author_association: string;
        body: string;
    }
    class $mol_github_comment extends $mol_github_entity<$mol_github_comment_json> {
        json_update(patch: Partial<$mol_github_comment_json>): $mol_github_comment_json;
        issue(): $mol_github_issue;
        user(): $mol_github_user;
        text(next?: string): string;
    }
}

declare namespace $ {
    interface $mol_github_issue_json extends $mol_github_entity_json {
        repository_url: string;
        labels_url: string;
        comments_url: string;
        events_url: string;
        html_url: string;
        number: number;
        title: string;
        user: $mol_github_user_json;
        labels: $mol_github_label_json[];
        state: string;
        locked: string;
        assignees: $mol_github_user_json[];
        milestone: {
            url: string;
        };
        comments: 2;
        author_association: string;
        body: string;
        closed_by: $mol_github_user_json;
    }
    class $mol_github_issue extends $mol_model<$mol_github_issue_json> {
        json_update(patch: Partial<$mol_github_issue_json>): $mol_github_issue_json;
        repository(): $mol_github_repository;
        web_uri(): string;
        author(): $mol_github_user;
        owner(): $mol_github_user;
        number(): number;
        title(): string;
        text(): string;
        closer(): $mol_github_user;
        assignees(): $mol_github_user[];
        labels(): $mol_github_label[];
        moment_created(): $mol_time_moment;
        moment_updated(): $mol_time_moment;
        comments(): $mol_github_issue_comments;
    }
    class $mol_github_issue_comments extends $mol_model<$mol_github_comment_json[]> {
        json_update(patch: Partial<$mol_github_repository_json[]>): $mol_github_comment_json[];
        items(next?: $mol_github_comment[], force?: $mol_mem_force): $mol_github_comment[];
        add(config: {
            text: string;
        }, next?: $mol_github_comment, force?: $mol_mem_force): $mol_github_comment | undefined;
    }
}

declare namespace $ {
    interface $mol_github_repository_json extends $mol_github_entity_json {
        name?: string;
        full_name?: string;
        owner?: $mol_github_user_json;
        author_association?: string;
        private?: false;
        description?: string;
        fork?: false;
        forks_url?: string;
        keys_url?: string;
        collaborators_url?: string;
        teams_url?: string;
        hooks_url?: string;
        issue_events_url?: string;
        events_url?: string;
        assignees_url?: string;
        branches_url?: string;
        tags_url?: string;
        blobs_url?: string;
        git_tags_url?: string;
        git_refs_url?: string;
        trees_url?: string;
        statuses_url?: string;
        languages_url?: string;
        stargazers_url?: string;
        contributors_url?: string;
        subscribers_url?: string;
        subscription_url?: string;
        commits_url?: string;
        git_commits_url?: string;
        comments_url?: string;
        issue_comment_url?: string;
        contents_url?: string;
        compare_url?: string;
        merges_url?: string;
        archive_url?: string;
        downloads_url?: string;
        issues_url?: string;
        pulls_url?: string;
        milestones_url?: string;
        notifications_url?: string;
        labels_url?: string;
        releases_url?: string;
        deployments_url?: string;
        pushed_at?: string;
        git_url?: string;
        ssh_url?: string;
        clone_url?: string;
        svn_url?: string;
        homepage?: string;
        size?: number;
        stargazers_count?: number;
        watchers_count?: number;
        language?: string;
        has_issues?: boolean;
        has_projects?: boolean;
        has_downloads?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        forks_count?: number;
        mirror_url?: string;
        archived?: boolean;
        open_issues_count?: number;
        watchers?: number;
        default_branch?: string;
        network_count?: number;
        subscribers_count?: number;
    }
    class $mol_github_repository extends $mol_github_entity<$mol_github_repository_json> {
        json_update(patch: Partial<$mol_github_repository_json>): $mol_github_repository_json;
        owner(): $mol_github_user;
        name(): string;
        name_full(): string;
        issues(): $mol_github_repository_issues;
    }
    class $mol_github_repository_issues extends $mol_model<$mol_github_issue_json[]> {
        json_update(patch: $mol_github_issue_json[]): $mol_github_issue_json[];
        items(next?: $mol_github_issue[], force?: $mol_mem_force): $mol_github_issue[];
        add(config: {
            title: string;
            text?: string;
        }, next?: $mol_github_issue, force?: $mol_mem_force): $mol_github_issue | undefined;
    }
}

declare namespace $ {
    interface $mol_github_search_issues_json {
        incomplete_results: boolean;
        items: $mol_github_issue_json[];
        total_count: number;
    }
    class $mol_github_search_issues extends $mol_model<$mol_github_search_issues_json> {
        json_update(patch: $mol_github_search_issues_json): $mol_github_search_issues_json;
        items(next?: $mol_github_issue[], force?: $mol_mem_force): $mol_github_issue[];
        resource_url(): string;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_habhub extends $.$hyoo_habhub {
        uriSource(): string;
        gists(): $mol_github_issue[];
        gists_dict(): {
            [key: string]: $mol_github_issue;
        };
        gist(id: number): $mol_github_issue;
        gist_current(): $mol_github_issue | null;
        details_link(): string;
        Details_body(): $mol_scroll;
        owner(): string | null;
        repo(): string | null;
        article(): string | null;
        pages(): $mol_page[];
        chat_seed(issue: $mol_github_issue): string;
        menu_rows(): $mol_view[];
        gist_title(id: number): string;
        gist_arg(id: number): {
            author: string;
            repo: string;
            article: string;
            gist: null;
        };
        gist_current_title(): string;
        gist_current_content(): string;
        gist_current_issue(): $mol_github_issue;
        gist_current_created(): string;
        details_scroll_top(next?: number): number;
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_portion extends $.$mol_portion {
        indicator_width_style(): string;
    }
}

declare namespace $ {
    class $hyoo_slides_page extends $mol_book2 {
        role(): string;
        contents(val?: any): string;
        slide(val?: any): number;
        Placeholder(): any;
        pages(): readonly any[];
        speaker_tools(): readonly any[];
        uri_base(): string;
        speaker_content(): readonly any[];
        Speaker_content(): $$.$mol_text;
        Speaker(): $mol_page;
        tools(): readonly any[];
        listener_width(): number;
        listener_content(): readonly any[];
        Listener_content(): $$.$mol_text;
        uri_page(): string;
        Link(): $$.$mol_link;
        progress(): number;
        Progress(): $$.$mol_portion;
        Listener_head(): $mol_view;
        Listener(): $mol_page;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_slides_page extends $.$hyoo_slides_page {
        uri_page(): string;
        pages(): $mol_page[];
    }
}

declare namespace $ {
    class $mol_icon_microphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_external extends $mol_icon {
        path(): string;
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
        get y(): Value;
        get z(): Value;
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        get [0](): Value;
        get [1](): Value;
        get min(): Value;
        get max(): Value;
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
    function $mol_wire_solid(): void;
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
    class $hyoo_slides extends $mol_view {
        attr(): {
            hyoo_slides_role: string;
        };
        style(): {
            "touch-action": string;
        };
        contents(val?: any): string;
        Menu(): $mol_page;
        Menu_item(id: any): $$.$mol_link;
        menu_options(): {
            "https://nin-jin.github.io/slides/slides/": string;
            "https://nin-jin.github.io/slides/reactivity/": string;
            "https://nin-jin.github.io/slides/orp/": string;
            "https://nin-jin.github.io/slides/tree/": string;
            "https://nin-jin.github.io/slides/sourcemap/": string;
            "https://nin-jin.github.io/slides/virt/": string;
            "https://nin-jin.github.io/slides/css-in-ts/": string;
            "https://nin-jin.github.io/slides/mol/": string;
            "https://nin-jin.github.io/slides/fibers/": string;
            "https://nin-jin.github.io/slides/testing/": string;
            "https://nin-jin.github.io/slides/consensus/": string;
            "https://nin-jin.github.io/slides/absurd/": string;
        };
        Loader(): $$.$mol_frame;
        Page(index: any): $$.$hyoo_slides_page;
        plugins(): readonly any[];
        role(): string;
        Source_link(): $mol_link_source;
        menu_tools(): readonly any[];
        menu_items(): readonly $mol_view[];
        Menu_items(): $$.$mol_list;
        menu_item_title(id: any): string;
        menu_item_uri(id: any): string;
        uri_slides(): string;
        tools(): readonly any[];
        page_title(index: any): string;
        page_slide(index: any, val?: any): number;
        uri_base(): string;
        listener_content(index: any): readonly any[];
        speaker_content(index: any): readonly any[];
        progress(index: any): number;
        Speech_toggle_icon(): $mol_icon_microphone;
        speech_enabled(val?: any): boolean;
        speech_toggle_hint(): string;
        Speech_toggle(): $mol_check_icon;
        speech_text(): string;
        Speech_text(): $mol_view;
        Paginator(): $$.$mol_paginator;
        open_listener_hint(): string;
        Open_listener_icon(): $mol_icon_external;
        Open_listener(): $$.$mol_link;
        Lights(): $$.$mol_lights_toggle;
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        speaker_tools(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        slide_keys(): readonly any[];
        slide(val?: any): number;
        Nav(): $$.$mol_nav;
        event_next(event?: any): any;
        event_prev(event?: any): any;
        Touch(): $$.$mol_touch;
        speech_next(): readonly any[];
        Speech_next(): $mol_speech;
        speech_next_auto(): readonly any[];
        Speech_next_auto(): $mol_speech;
        event_slide(val?: any): any;
        speech_slide(): readonly any[];
        Speech_slide(): $mol_speech;
        speech_prev(): readonly any[];
        Speech_prev(): $mol_speech;
        event_start(val?: any): any;
        speech_start(): readonly any[];
        Speech_start(): $mol_speech;
        event_end(val?: any): any;
        speech_end(): readonly any[];
        Speech_end(): $mol_speech;
        event_about(val?: any): any;
        speech_about(): readonly any[];
        Speech_about(): $mol_speech;
        event_repeat(val?: any): any;
        speech_repeat(): readonly any[];
        Speech_repeat(): $mol_speech;
        event_speech_on(val?: any): any;
        speech_on(): readonly any[];
        Speech_on(): $mol_speech;
        event_speech_off(val?: any): any;
        speech_off(): readonly any[];
        Speech_off(): $mol_speech;
        event_lights_toggle(val?: any): any;
        lights_toggle(): readonly any[];
        Lights_toggle(): $mol_speech;
        event_sing(val?: any): any;
        sing(): readonly any[];
        Sing(): $mol_speech;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_slides extends $.$hyoo_slides {
        sub(): $mol_page[] | ($mol_frame | $hyoo_slides_page)[];
        uri_base(): string;
        menu_items(): $mol_link[];
        menu_item_uri(uri: string): string;
        menu_item_title(uri: string): any;
        contents(): string;
        call(...message: any[]): Promise<unknown>;
        content_pages(): string[];
        page_tokens(index: number): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        page_title(index: number): string;
        title(): string;
        speaker_content(index: number): {
            name: string;
            found: string;
            chunks: string[];
        }[];
        listener_content(index: number): {
            name: string;
            found: string;
            chunks: string[];
        }[];
        slide_local(uri: string, next?: number): number;
        slide(next?: number): number;
        page_slide(index: number, next?: number): number;
        slide_keys(): number[];
        role(next?: 'speaker' | 'listener'): string;
        uri_slides(): string;
        event_next(next?: Event): void;
        event_prev(next?: Event): void;
        event_start(next?: Event): void;
        event_end(next?: Event): void;
        event_slide([numb]: [string]): void;
        event_about([topic]: [string]): void;
        event_repeat(next?: Event): void;
        event_speech_on(next?: Event): void;
        event_speech_off(next?: Event): void;
        event_sing(): void;
        speech_enabled(next?: boolean): boolean;
        speech_text(): string;
        lights(next?: boolean): boolean;
        event_lights_toggle(): void;
        timings(): number[];
        timing_total(): number;
        progress(index: number): number;
        speech_next_auto(): string[];
    }
}

declare namespace $ {
    class $hyoo_apps extends $mol_book2 {
        Placeholder(): any;
        plugins(): readonly any[];
        pages(): readonly any[];
        Menu_item(id: any): $mol_view;
        App(id: any): $$.$mol_frame;
        data(): {
            mol: {
                title: string;
                uri: string;
            };
            search: {
                title: string;
                uri: string;
            };
            map: {
                title: string;
                uri: string;
            };
            talks: {
                title: string;
                uri: string;
            };
            draw: {
                title: string;
                uri: string;
            };
            scout: {
                title: string;
                uri: string;
            };
            piterjs: {
                title: string;
                uri: string;
            };
            fallacy: {
                title: string;
                uri: string;
            };
            meme: {
                title: string;
                uri: string;
            };
            calc: {
                title: string;
                uri: string;
            };
            notes: {
                title: string;
                uri: string;
            };
            play: {
                title: string;
                uri: string;
            };
            invest: {
                title: string;
                uri: string;
            };
            life: {
                title: string;
                uri: string;
            };
            habhub: {
                title: string;
                uri: string;
            };
            slides: {
                title: string;
                uri: string;
            };
            iq: {
                title: string;
                uri: string;
            };
            rdf: {
                title: string;
                uri: string;
            };
            lamps: {
                title: string;
                uri: string;
            };
            bench: {
                title: string;
                uri: string;
            };
            request: {
                title: string;
                uri: string;
            };
            jseval: {
                title: string;
                uri: string;
            };
            jsperf: {
                title: string;
                uri: string;
            };
            issues: {
                title: string;
                uri: string;
            };
            tree: {
                title: string;
                uri: string;
            };
            icons: {
                title: string;
                uri: string;
            };
            todomvc: {
                title: string;
                uri: string;
            };
            questions: {
                title: string;
                uri: string;
            };
            shelter: {
                title: string;
                uri: string;
            };
            mail: {
                title: string;
                uri: string;
            };
            gazporn: {
                title: string;
                uri: string;
            };
            toys: {
                title: string;
                uri: string;
            };
        };
        Theme(): $$.$mol_theme_auto;
        Source(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools(): readonly any[];
        menu_items(): readonly $mol_view[];
        Menu_items(): $$.$mol_list;
        Menu(): $mol_page;
        app_title(id: any): string;
        app_arg(id: any): {};
        Menu_link_in(id: any): $$.$mol_link;
        app_uri_default(id: any): string;
        Menu_link_out(id: any): $$.$mol_link_iconed;
        app_uri_embed(id: any, val?: any): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_apps extends $.$hyoo_apps {
        app(): string | null;
        menu_items(): $mol_view[];
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
    type $mol_type_partial_deep<Val> = {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]>;
    };
}

declare namespace $ {
    let $mol_jsx_prefix: string;
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
    type $hyoo_crowd_chunk = {
        readonly head: number;
        readonly self: number;
        readonly prev: number;
        readonly next: number;
        readonly peer: number;
        readonly time: number;
        readonly data: unknown;
    };
    function $hyoo_crowd_chunk_pack(this: $, raw: $hyoo_crowd_chunk): Uint8Array;
    function $hyoo_crowd_chunk_unpack(this: $, pack: Uint8Array): $hyoo_crowd_chunk;
    function $hyoo_crowd_chunk_compare(left: $hyoo_crowd_chunk, right: $hyoo_crowd_chunk): number;
}

declare namespace $ {
    class $hyoo_crowd_node {
        readonly doc: $hyoo_crowd_doc;
        readonly head: $hyoo_crowd_chunk['head'];
        constructor(doc: $hyoo_crowd_doc, head: $hyoo_crowd_chunk['head']);
        static for<Node extends typeof $hyoo_crowd_node>(this: Node, doc: $hyoo_crowd_doc, head?: $hyoo_crowd_chunk['head']): InstanceType<Node>;
        as<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>;
        chunks(): readonly $hyoo_crowd_chunk[];
        nodes<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>[];
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
        update: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next?: readonly unknown[]): readonly unknown[];
        insert(next: readonly unknown[], from?: number, to?: number): void;
        move(from: number, to: number): $hyoo_crowd_chunk;
        cut(seat: number): $hyoo_crowd_chunk;
    }
}

declare namespace $ {
    let $hyoo_crowd_tokenizer: $mol_regexp<{
        readonly token: string;
        readonly indents: string;
        readonly spaces: string;
        readonly emoji: string;
        readonly Word: string;
        readonly word: string;
        readonly others: string;
        readonly 'line-break': string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly tab: string;
    }>;
}

declare namespace $ {
    class $hyoo_crowd_clock extends Map<$hyoo_crowd_chunk['peer'], $hyoo_crowd_chunk['time']> {
        now: number;
        constructor(entries?: Iterable<readonly [number, number]>);
        sync(right: $hyoo_crowd_clock): void;
        see(peer: number, time: number): number;
        fresh(peer: number, time: number): boolean;
        ahead(clock: $hyoo_crowd_clock): boolean;
        tick(peer: number): number;
        clear(): void;
    }
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
    }
}

declare namespace $ {
    class $hyoo_crowd_doc {
        readonly peer: number;
        constructor(peer?: number);
        destructor(): void;
        readonly _clock: $hyoo_crowd_clock;
        get clock(): $hyoo_crowd_clock;
        readonly pub: $mol_wire_pub;
        protected _chunk_all: Map<`${number}/${number}`, $hyoo_crowd_chunk>;
        protected _chunk_lists: Map<number, $hyoo_crowd_chunk[] & {
            dirty: boolean;
        }>;
        protected _chunk_alive: Map<number, $hyoo_crowd_chunk[] | undefined>;
        size(): number;
        chunk(head: $hyoo_crowd_chunk['head'], self: $hyoo_crowd_chunk['self']): $hyoo_crowd_chunk | null;
        protected chunk_list(head: $hyoo_crowd_chunk['head']): $hyoo_crowd_chunk[] & {
            dirty: boolean;
        };
        chunk_alive(head: $hyoo_crowd_chunk['head']): readonly $hyoo_crowd_chunk[];
        root: $hyoo_crowd_struct;
        id_new(): number;
        fork(peer: number): $hyoo_crowd_doc;
        delta(clock?: $hyoo_crowd_clock): readonly $hyoo_crowd_chunk[];
        toJSON(): readonly $hyoo_crowd_chunk[];
        resort(head: $hyoo_crowd_chunk['head']): $hyoo_crowd_chunk[] & {
            dirty: boolean;
        };
        apply(delta: readonly $hyoo_crowd_chunk[]): this;
        put(head: $hyoo_crowd_chunk['head'], self: $hyoo_crowd_chunk['self'], prev: $hyoo_crowd_chunk['prev'], data: $hyoo_crowd_chunk['data']): $hyoo_crowd_chunk;
        wipe(chunk: $hyoo_crowd_chunk): $hyoo_crowd_chunk;
        move(chunk: $hyoo_crowd_chunk, head: $hyoo_crowd_chunk['head'], prev: $hyoo_crowd_chunk['prev']): $hyoo_crowd_chunk;
        insert(chunk: $hyoo_crowd_chunk, head: $hyoo_crowd_chunk['head'], seat: number): $hyoo_crowd_chunk;
    }
}

declare namespace $ {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): {
            chunk: number;
            offset: number;
        };
        offset_by_point(point: {
            chunk: number;
            offset: number;
        }): number;
    }
}

declare namespace $ {
    class $mol_example extends $mol_view {
        tags(): readonly string[];
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
    class $mol_textarea extends $mol_view {
        attr(): {
            mol_textarea_clickable: boolean;
            mol_textarea_sidebar_showed: boolean;
        };
        event(): {
            keydown: (event?: any) => any;
            pointermove: (event?: any) => any;
        };
        sub(): readonly any[];
        clickable(val?: any): boolean;
        sidebar_showed(): boolean;
        press(event?: any): any;
        hover(event?: any): any;
        value(val?: any): string;
        hint(): string;
        enabled(): boolean;
        length_max(): number;
        selection(val?: any): readonly number[];
        Edit(): $mol_textarea_edit;
        row_numb(index: any): number;
        highlight(): string;
        View(): $$.$mol_text_code;
    }
    class $mol_textarea_edit extends $mol_string {
        dom_name(): string;
        field(): {
            scrollTop: number;
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
        };
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
    class $mol_section extends $mol_list {
        rows(): readonly any[];
        head(): readonly any[];
        Head(): $mol_view;
        content(): readonly any[];
        Content(): $$.$mol_list;
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
        store(): $hyoo_crowd_doc;
        sync(): number;
        body(): readonly any[];
        hint(): string;
        text(val?: any): string;
        Text(): $$.$mol_textarea;
        stats(): string;
        Stats(): $$.$mol_text;
        delta_view(): {};
        Delta(): $$.$mol_grid;
        Delta_section(): $mol_section;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $hyoo_crowd_app extends $.$hyoo_crowd_app {
        sync_enabled(): boolean;
        sync(next?: Event): number;
    }
    class $hyoo_crowd_app_peer extends $.$hyoo_crowd_app_peer {
        sync_clock(next?: $hyoo_crowd_clock): $hyoo_crowd_clock;
        text(next?: string): string;
        delta(): readonly $hyoo_crowd_chunk[];
        delta_view(): {
            head: string;
            self: string;
            prev: string;
            next: string;
            peer: string;
            time: string;
            data: string;
        }[];
        changes(): number;
        size_state(): number;
        size_delta(): number;
        size_text(): number;
        tokens_alive(): number;
        tokens_total(): number;
        tokens_dead(): number;
        size_state_bin(): number;
        size_delta_bin(): number;
        stats(): string;
    }
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
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
        Image(id: any): $mol_image;
    }
}

declare namespace $ {
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
    class $mol_example_small extends $mol_example {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_attach_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        filled_items(val?: any): readonly any[];
        Filled(): $$.$mol_attach;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
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
    class $mol_bar_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
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
    class $mol_bench_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        First(): $mol_view;
        Second(): $mol_view;
        Third(): $mol_view;
        View(): $$.$mol_book2;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_book2_catalog_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Articles_content(): $mol_row;
        Articles(): $mol_page;
        Images_content(): $mol_row;
        Images(): $mol_page;
        Maps_content(): $mol_row;
        Maps(): $mol_page;
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
    function $mol_dom_serialize(node: Node): string;
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
    class $mol_button_share_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Share_page(): $$.$mol_button_share;
        Share_screenshot(): $$.$mol_button_share;
        Share_hyoo(): $$.$mol_button_share;
    }
}

declare namespace $ {
    class $mol_hor extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_calendar extends $mol_list {
        sub(): readonly any[];
        weeks(): readonly $mol_view[];
        Weekday(index: any): $mol_calendar_day;
        Week(row: any): $$.$mol_hor;
        Day(day: any): $mol_calendar_day;
        month_string(): string;
        month_moment(): $mol_time_moment;
        title(): string;
        Title(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        weekdays(): readonly $mol_view[];
        Weekdays(): $$.$mol_hor;
        weekend(index: any): boolean;
        weekday(index: any): string;
        week_days(row: any): readonly $mol_view[];
        day_ghost(day: any): boolean;
        day_holiday(day: any): boolean;
        day_selected(day: any): boolean;
        day_theme(day: any): string;
        day_text(day: any): string;
        day_content(day: any): readonly any[];
    }
    class $mol_calendar_day extends $mol_view {
        minimal_height(): number;
        minimal_width(): number;
        attr(): {
            mol_calendar_holiday: boolean;
            mol_calendar_ghost: boolean;
            mol_calendar_selected: boolean;
            mol_theme: string;
        };
        holiday(): boolean;
        ghost(): boolean;
        selected(): boolean;
        theme(): string;
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
        weeks_count(): number;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        day_ghost(day: string): boolean;
        day_selected(day: string): boolean;
        day_theme(day: string): string;
    }
}

declare namespace $ {
    class $mol_calendar_demo_holiday extends $mol_example_small {
        title(): string;
        holidays(): readonly any[];
        sub(): readonly any[];
        tags(): readonly any[];
        month(): string;
        holiday(day: any): boolean;
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
        month(): string;
        selected(day: any): boolean;
        Calendar(): $$.$mol_calendar;
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_card_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        repos_x(val: any): number;
        repos_y(val: any): number;
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

declare namespace $ {
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

declare namespace $ {
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
        graphs_visible(): readonly $mol_plot_graph[];
        graphs_positioned(): readonly $mol_plot_graph[];
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

declare namespace $ {
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
        graphs_positioned(): $.$mol_plot_graph[];
        dimensions_viewport(): $mol_vector<$mol_vector_range<number>, 2>;
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
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

declare namespace $ {
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_line extends $.$mol_plot_line {
        sub(): readonly any[];
        indexes(): number[];
        curve(): string;
    }
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
    function $mol_coord_pack(a: number, b: number): number;
    function $mol_coord_high(key: number): number;
    function $mol_coord_low(key: number): number;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        indexes(): number[];
        curve(): string;
    }
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
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
    function $mol_font_measure(size: number, face: string, text: string): number;
}

declare namespace $ {
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
        Label(index: any): $$.$mol_svg_text;
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
        Title(): $$.$mol_svg_text_box;
        label_pos_x(index: any): string;
        label_pos_y(index: any): string;
        label_pos(index: any): readonly any[];
        label_text(index: any): string;
        label_align(): string;
    }
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {
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
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        title_align(): string;
        label_align(): string;
        title_pos_y(): string;
        label_pos_x(v: any): string;
        background_height(): string;
        background_width(): string;
    }
}

declare namespace $ {
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
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        title_align(): string;
        label_align(): string;
        title_pos_x(): string;
        title_pos_y(): string;
        label_pos_y(v: any): string;
        background_width(): string;
    }
}

declare namespace $ {
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
    class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
        labels(): readonly string[];
    }
}

declare namespace $ {
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

declare namespace $ {
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
    class $mol_chart_demo_simple extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_fill extends $.$mol_plot_fill {
        curve(): string;
        front(): never[];
        back(): this[];
    }
}

declare namespace $ {
    class $mol_chart_demo_styles extends $mol_example_large {
        title(): string;
        samples_count(): number;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        keys(): string[];
        items(): $mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
    class $mol_check_list_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        right(id: any, val?: any): boolean;
        Rights(): $$.$mol_check_list;
    }
}

declare namespace $ {
    class $mol_check_expand_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_check_group_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_check_icon_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_code extends $.$mol_code {
        scan_support(): boolean;
        sub(): ($mol_button | $mol_search)[];
        event_scan(): void;
    }
}

declare namespace $ {
    class $mol_code_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_icon_calendar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_date extends $mol_pick {
        Icon(): $mol_icon_calendar;
        bubble_content(): readonly any[];
        value_number(val?: any): number;
        value_moment(val?: any): $mol_time_moment;
        value(val?: any): string;
        input_hint(): string;
        enabled(): boolean;
        Input(): $$.$mol_string;
        month_moment(): $mol_time_moment;
        day_selected(day: any): boolean;
        day_click(day: any, event?: any): any;
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
        day_content(day: any): readonly any[];
        day_click(day: any, event?: any): any;
        Day_button(day: any): $mol_button_minor;
    }
}

declare namespace $ {
    function $mol_try<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): string[];
        value(val?: string): string;
        value_moment(val?: $mol_time_moment): $mol_time_moment;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
    }
}

declare namespace $ {
    class $mol_date_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
        date(val?: any): $mol_time_moment;
        Date(): $$.$mol_date;
        formatted(): string;
        Formatted(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_date_demo extends $.$mol_date_demo {
        formatted(): string;
    }
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
    class $mol_deck_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        greet_message(): string;
        Greeter(): $$.$mol_card;
        quest_message(): string;
        Quester(): $$.$mol_card;
        command_message(): string;
        Commander(): $$.$mol_card;
        Deck(): $$.$mol_deck;
    }
}

declare namespace $ {
    class $mol_dimmer_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
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
        move(event?: any): any;
        end(event?: any): any;
        status(val?: any): string;
    }
}

declare namespace $.$$ {
    class $mol_drag extends $.$mol_drag {
        status(next?: "ready" | "drag"): "ready" | "drag";
        start(event: DragEvent): void;
        end(event: DragEvent): void;
    }
}

declare namespace $ {
    class $mol_drop extends $mol_ghost {
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
        leave(event: DragEvent): void;
        receive(transfer: unknown): unknown;
        drop(event: DragEvent): void;
    }
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
        Task_row(task: any): $$.$mol_drag;
        tags(): readonly any[];
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
        task_title(task: any): string;
        task_html(task: any): string;
        task_uri(task: any): string;
        receive_before(task: any, obj?: any): any;
        Task_link(task: any): $$.$mol_link;
        Task_drop(task: any): $$.$mol_drop;
    }
}

declare namespace $.$$ {
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

declare namespace $ {
    class $mol_expander extends $mol_list {
        rows(): readonly any[];
        expanded(val?: any): boolean;
        label(): readonly any[];
        Trigger(): $$.$mol_check_expand;
        Tools(): any;
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $$.$mol_list;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_filler extends $mol_view {
        minimal_height(): number;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_expander_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Content(): $mol_filler;
        Expander(): $$.$mol_expander;
    }
}

declare namespace $ {
    class $mol_float_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Head_content(): $$.$mol_paragraph;
        Head_row(): $mol_row;
        Head(): $mol_float;
        Filler1(): $mol_filler;
        Filler2(): $mol_filler;
        Content(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
    }
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
        label(): readonly any[];
        content(): readonly any[];
        name(): string;
        bid(): string;
        Bid(): $mol_view;
        control(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_list {
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
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
        submit(event?: any): any;
        enabled(): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_string | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $mol_string)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
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
        value(val?: any): number;
        sub(): readonly any[];
        precision(): number;
        value_string(val?: any): string;
        hint(): string;
        enabled(): boolean;
        string_enabled(): boolean;
        String(): $$.$mol_string;
        event_dec(val?: any): any;
        dec_enabled(): boolean;
        dec_icon(): $mol_icon_minus;
        Dec(): $mol_button_minor;
        event_inc(val?: any): any;
        inc_enabled(): boolean;
        inc_icon(): $mol_icon_plus;
        Inc(): $mol_button_minor;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): string;
    }
}

declare namespace $ {
    class $mol_form_group extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_demo_bids extends $mol_example {
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
        submit(val?: any): any;
        name_first_bid(): string;
        name_first(val?: any): string;
        Name_first_control(): $$.$mol_string;
        Name_first_field(): $mol_form_field;
        name_nick_bid(): string;
        name_nick(val?: any): string;
        Name_nick_control(): $$.$mol_string;
        Name_nick_field(): $mol_form_field;
        name_second_bid(): string;
        name_second(val?: any): string;
        Name_second_control(): $$.$mol_string;
        Name_second_field(): $mol_form_field;
        sex_label(): string;
        sex_bid(): string;
        sex(val?: any): string;
        sex_options(): {
            male: string;
            intersex: string;
            female: string;
        };
        Sex_control(): $$.$mol_switch;
        Sex_field(): $mol_form_field;
        color_bid(): string;
        color(val?: any): string;
        Color_control(): $$.$mol_select;
        Color_field(): $mol_form_field;
        age_bid(): string;
        age(val?: any): number;
        Age_control(): $$.$mol_number;
        Age_field(): $mol_form_field;
        mail_bid(): string;
        mail(val?: any): string;
        Mail_control(): $$.$mol_string;
        Mail_field(): $mol_form_field;
        avatars_bid(): string;
        avatars(val?: any): readonly string[];
        Avatars_control(): $$.$mol_attach;
        Avatars_field(): $mol_form_field;
        Names(): $mol_form_group;
        Parameters(): $mol_form_group;
        submit_allowed(): boolean;
        Submit(): $mol_button_major;
        Form(): $$.$mol_form;
        result(val?: any): string;
        Result(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form_demo_bids extends $.$mol_form_demo_bids {
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
        submit(next?: Event): void;
        submit_allowed(): boolean;
    }
}

declare namespace $ {
    class $mol_frame_demo extends $mol_example_large {
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_gallery extends $.$mol_gallery {
        sub(): readonly $mol_view[];
        side_items(id: number): $mol_view[];
        side_size(id: number): string;
    }
}

declare namespace $ {
    class $mol_gallery_demo extends $mol_example {
        title(): string;
        count(): number;
        sub(): readonly any[];
        Item(id: any): $$.$mol_link;
        tags(): readonly any[];
        items(): readonly any[];
        App(): $$.$mol_gallery;
        item_title(id: any): string;
        Item_title(id: any): $$.$mol_paragraph;
    }
}

declare namespace $ {
    function $mol_array_lottery<Value>(list: readonly Value[]): Value;
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_gallery_demo extends $.$mol_gallery_demo {
        items(): $mol_link[];
        item_title(id: number): string;
        item_uri(id: number): string;
    }
}

declare namespace $ {
    class $mol_html_view extends $mol_list {
        html(): string;
        dom(): any;
        safe_link(uri: any): string;
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
        Image(id: any): $mol_image;
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
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_html_view extends $.$mol_html_view {
        dom(): HTMLElement;
        sub(): $mol_view[];
        content(node: Node): $mol_view[];
        views(node: Node): $mol_view[] | $mol_paragraph[] | $mol_html_view_heading[] | $mol_link_iconed[];
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
        Html(): $$.$mol_html_view;
    }
}

declare namespace $ {
    class $mol_infinite extends $mol_list {
        after(id: any): readonly any[];
        Row(id: any): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_infinite extends $.$mol_infinite {
        row_ids(): readonly $mol_view[];
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_infinite_demo extends $mol_example {
        title(): string;
        chunk_size(): number;
        sub(): readonly any[];
        tags(): readonly any[];
        after(anchor_id: any): readonly any[];
        Item(id: any): $mol_filler;
        List(): $$.$mol_infinite;
    }
}

declare namespace $.$$ {
    class $mol_infinite_demo extends $.$mol_infinite_demo {
        after(anchor_id?: number): number[];
    }
}

declare namespace $ {
    class $mol_labeler_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Provider(): $mol_labeler;
        user_name(val?: any): string;
        Name_control(): $$.$mol_string;
        Name(): $mol_labeler;
    }
}

declare namespace $ {
    class $mol_icon_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_list_demo_table extends $mol_example {
        title(): string;
        count(): number;
        sub(): readonly any[];
        Row(id: any): $mol_row;
        tags(): readonly any[];
        rows(): readonly any[];
        Rows(): $$.$mol_list;
        row_id(id: any): string;
        Id(id: any): $mol_view;
        row_title(id: any): string;
        Title(id: any): $mol_view;
        editable_title(): string;
        row_editable(id: any, val?: any): boolean;
        Editable(id: any): $mol_check_box;
        row_priority(id: any, val?: any): string;
        Priority(id: any): $$.$mol_switch;
        row_moment(id: any, val?: any): $mol_time_moment;
        Date(id: any): $$.$mol_date;
        row_uri(id: any): string;
        Link(id: any): $$.$mol_link_iconed;
        row_content(id: any): readonly any[];
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_list_demo_table extends $.$mol_list_demo_table {
        rows(): $mol_row[];
        row_id(id: number): string;
        row_title(id: number): string;
        row_number(id: number, next?: number): number;
        row_uri(id: number): string;
        row_moment(id: number, next?: $mol_time_moment): $mol_time_moment;
    }
}

declare namespace $ {
    class $mol_list_demo_tree extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        Row(id: any): $$.$mol_expander;
        tags(): readonly any[];
        root_rows(): readonly any[];
        Content(): $$.$mol_list;
        row_title(id: any): string;
        Row_title(id: any): $$.$mol_paragraph;
        row_expanded(id: any, val?: any): boolean;
        row_content(id: any): readonly any[];
        Row_content(id: any): $$.$mol_list;
    }
}

declare namespace $ {
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
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
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
    function $mol_func_is_class(func: Function): boolean;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
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
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][] | unknown) => readonly ReturnType<Sub>[]) & {
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
    function $mol_data_record<Sub extends Record<string, $mol_data_value<any>>>(sub: Sub): ((val: unknown) => Readonly<$mol_type_merge<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }> & Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }> & Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>;
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
    class $mol_map_yandex_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        Theme(): $$.$mol_theme_auto;
        Lights(): $$.$mol_lights_toggle;
        Source(): $mol_link_source;
        html_show_label(): string;
        Html_show(): $$.$mol_link;
        marked(val?: any): string;
        Marked_text(): $$.$mol_textarea;
        Marked(): $mol_page;
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        html(): string;
        Html_text(): $$.$mol_textarea;
        Html(): $mol_page;
    }
}

declare namespace $ {
    let $hyoo_marked_cut: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_line_content: $mol_regexp<{}>;
    let $hyoo_marked_line: $mol_regexp<{
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
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_list_line: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_list_item: $mol_regexp<{
        readonly kids: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_list: $mol_regexp<{
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
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_quote: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_table_line: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_table_row: $mol_regexp<{
        readonly content: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
    }>;
    let $hyoo_marked_table: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_script_line: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_script: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_paragraph: $mol_regexp<{
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_flow: $mol_regexp<{
        readonly list: string;
        readonly table: string;
        readonly header: string;
        readonly cut: string;
        readonly quote: string;
        readonly paragraph: string;
        readonly script: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
        readonly kids: string;
        readonly indent: string;
    }>;
}

declare namespace $ {
    function $hyoo_marked_to_dom(this: $, marked: string): $mol_jsx.JSX.Element;
}

declare namespace $ {
    function $hyoo_marked_to_html(this: $, marked: string): string;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_marked_app extends $.$hyoo_marked_app {
        html_show(): boolean;
        pages(): $mol_page[];
        html(): string;
        marked(next?: string): string;
    }
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
    class $mol_nav_demo extends $mol_example {
        title(): string;
        plugins(): readonly any[];
        sub(): readonly any[];
        tags(): readonly any[];
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
        sub(): readonly any[];
        tags(): readonly any[];
        zero(): $$.$mol_number;
        year(val?: any): number;
        one(): $$.$mol_number;
        two(): $$.$mol_number;
        age(val?: any): number;
        three(): $$.$mol_number;
        four(): $$.$mol_number;
        five(): $$.$mol_number;
        six(): $$.$mol_number;
        seven(): $$.$mol_number;
        eight(): $$.$mol_number;
        nine(): $$.$mol_number;
    }
}

declare namespace $ {
    class $mol_page_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Button_tools(): $mol_button_minor;
        Text(): $mol_filler;
        Button_foot(): $mol_button_minor;
        Foot_content(): $mol_row;
        Page(): $mol_page;
    }
}

declare namespace $ {
    class $mol_paginator_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
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
    class $mol_plot_map_heat extends $mol_plot_group {
        series_z(): readonly number[];
        graphs(): readonly any[];
        Level(z: any): $mol_plot_map_heat_level;
        Sample(): $mol_plot_graph_sample;
        level_graphs(): readonly any[];
        level_hint(z: any): string;
        level_points(z: any): readonly any[];
        level_opacity(z: any): string;
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

declare namespace $ {
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
    class $mol_plot_map_heat_demo extends $mol_example_large {
        title(): string;
        count_x(): number;
        count_y(): number;
        count_z(): number;
        sub(): readonly any[];
        tags(): readonly any[];
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): boolean;
    }
}

declare namespace $ {
    class $mol_pop_over_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        fist(): number;
        Empty(): $$.$mol_portion;
        second(): number;
        Partial(): $$.$mol_portion;
        third(): number;
        Full(): $$.$mol_portion;
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
    class $mol_icon_content_copy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_download_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_pick_demo extends $mol_example_small {
        title(): string;
        confirmation_popup_content(): {
            delete: $$.$mol_list;
        };
        showed_confirmation(): any;
        sub(): readonly any[];
        Options_content(): $$.$mol_list;
        Delete_confirm_content(): $$.$mol_list;
        tags(): readonly any[];
        Demo_caption(): $mol_view;
        pick_trigger(): string;
        pick_content(): string;
        Simple_pop(): $$.$mol_pick;
        info_trigger(): $mol_icon_help_circle_outline;
        info_content_text(): string;
        info_content(): $$.$mol_text;
        Info_pop(): $$.$mol_pick;
        options_trigger(): $mol_icon_dots_vertical;
        options_trigger_content(): readonly any[];
        options_bubble_content(): readonly any[];
        Options_pop(): $$.$mol_pick;
        menu_item_copy_click(val?: any): any;
        menu_item_copy_icon(): $mol_icon_content_copy;
        menu_item_copy_label(): string;
        Menu_item_copy(): $mol_button_minor;
        menu_item_download_hint(): string;
        menu_item_download_uri(): string;
        menu_item_download_icon(): $mol_icon_cloud_download_outline;
        menu_item_download_label(): string;
        Menu_item_download(): $$.$mol_link_lazy;
        menu_item_delete_click(val?: any): any;
        menu_item_delete_icon(): $mol_icon_trash_can_outline;
        menu_item_delete_label(): string;
        Menu_item_delete(): $mol_button_minor;
        delete_message(): string;
        Delete_message_text(): $mol_view;
        Delete_message(): $mol_row;
        delete_confirm_title(): string;
        delete_confirm_click(val?: any): any;
        Delete_confirm(): $mol_button_major;
        delete_cancel_title(): string;
        delete_cancel_click(val?: any): any;
        Delete_cancel(): $mol_button_minor;
        Delete_buttons(): $mol_row;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    type Confirmations = keyof ReturnType<typeof $.$mol_pick_demo.prototype.confirmation_popup_content>;
    export class $mol_pick_demo extends $.$mol_pick_demo {
        menu_item_download_uri(): string;
        hide_options_menu(): void;
        show_confirmation(confirmation: Confirmations): void;
        showed_confirmation(next?: Confirmations | null): "delete" | null;
        options_bubble_content(): readonly any[];
        menu_item_copy_click(event?: MouseEvent): void;
        menu_item_delete_click(event?: MouseEvent): void;
        delete_confirm_click(event?: MouseEvent): void;
        delete_cancel_click(event?: MouseEvent): void;
    }
    export {};
}

declare namespace $ {
    class $mol_row_demo_form extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        product_title(id: any): string;
        products(): readonly any[];
        Products(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_row_demo_products extends $.$mol_row_demo_products {
        products(): $mol_card[];
        product_title(id: string): string;
    }
}

declare namespace $ {
    class $mol_scroll_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Filler0(): $mol_filler;
        Filler1(): $mol_filler;
        Filler2(): $mol_filler;
        Filler3(): $mol_filler;
        Filler4(): $mol_filler;
        Filler5(): $mol_filler;
        Filler6(): $mol_filler;
        Filler7(): $mol_filler;
        Filler8(): $mol_filler;
        Filler9(): $mol_filler;
        Content(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
    }
}

declare namespace $ {
    class $mol_search_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        Section_content(): $mol_filler;
        Section(): $mol_section;
    }
}

declare namespace $ {
    class $mol_select_demo_colors extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_select_demo_month extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        priority(val?: any): string;
        Priority(): $$.$mol_select;
    }
}

declare namespace $ {
    class $mol_select_list extends $mol_view {
        value(val?: any): readonly string[];
        dictionary(): {};
        Badge(index: any): $mol_button_minor;
        Pick(): $$.$mol_select;
        badge_title(index: any): string;
        remove(index: any, event?: any): any;
        badge_hint(): string;
        enabled(): boolean;
        drop_enabled(): boolean;
        align_hor(): string;
        options(): readonly string[];
        options_pickable(): readonly string[];
        pick(val?: any): string;
        option_title(key: any): string;
        pick_enabled(): boolean;
        pick_hint(): string;
        Pick_icon(): $mol_icon_plus;
    }
}

declare namespace $.$$ {
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
        sub(): ($mol_button_minor | $mol_select)[];
        title(): string;
        remove(index: number): void;
    }
}

declare namespace $ {
    class $mol_select_list_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_icon_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_speck_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_speech_demo extends $mol_example_small {
        sub(): readonly any[];
        tags(): readonly any[];
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
    class $mol_string_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        name(val?: any): string;
        Simple(): $$.$mol_string;
        Hint(): $$.$mol_string;
        name2(val?: any): string;
        Filled(): $$.$mol_string;
        Disabled(): $$.$mol_string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_string_button extends $mol_string {
    }
}

declare namespace $ {
    class $mol_switch_demo extends $mol_example {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        color(val?: any): string;
        option_red(): string;
        option_green(): string;
        option_blue(): string;
        option_infernal(): string;
        Enabled(): $$.$mol_switch;
        Enabled_labeler(): $mol_labeler;
        Disabled(): $$.$mol_switch;
        Disabled_labeler(): $mol_labeler;
        Demo_items(): $mol_row;
    }
}

declare namespace $ {
    class $mol_text_code_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        source(): string;
        Text(): $$.$mol_text_code;
    }
}

declare namespace $.$$ {
    class $mol_text_code_demo extends $.$mol_text_code_demo {
        source(): string;
    }
}

declare namespace $ {
    class $mol_text_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        Text(): $$.$mol_text;
    }
}

declare namespace $ {
    class $mol_textarea_demo extends $mol_example_small {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        empty_descr(val?: any): string;
        Empty_descr(): $$.$mol_textarea;
        filled_descr(val?: any): string;
        Filled_descr(): $$.$mol_textarea;
        Disabled(): $$.$mol_textarea;
    }
}

declare namespace $ {
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
    class $mol_icon_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $hyoo_js_eval extends $mol_book2 {
        Placeholder(): any;
        plugins(): readonly any[];
        pages(): readonly any[];
        Log(index: any): $$.$hyoo_js_eval_log;
        Theme(): $$.$mol_theme_auto;
        Source(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        Run_icon(): $mol_icon_play;
        run(val?: any): boolean;
        Run(): $mol_check_icon;
        code(val?: any): string;
        Code(): $$.$mol_textarea;
        Code_page(): $mol_page;
        result_label(): string;
        Results_close_icon(): $mol_icon_cross;
        Results_close(): $$.$mol_link;
        logs(): readonly any[];
        Result(): $$.$mol_list;
        Result_page(): $mol_page;
        log(index: any): readonly any[];
    }
    class $hyoo_js_eval_log extends $mol_view {
        values(): readonly any[];
        Dump(index: any): $$.$hyoo_js_eval_dump;
        dump_value(index: any): any;
        dump_expanded(index: any, val?: any): boolean;
    }
    class $hyoo_js_eval_dump extends $mol_view {
        key(): any;
        suffix(): string;
        value(): any;
        sub(): readonly any[];
        Inner(index: any): $$.$hyoo_js_eval_dump;
        Key(): $$.$hyoo_js_eval_dump;
        simple(): string;
        Simple(): $$.$mol_text_code;
        expanded(val?: any): boolean;
        expand_title(): string;
        expand_content(): readonly any[];
        Expand(): $$.$mol_expander;
        inner_key(index: any): any;
        inner_value(index: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_js_eval extends $.$hyoo_js_eval {
        code(next?: string): string;
        run(next?: boolean): boolean;
        pages(): $mol_page[];
        execute(): any;
        result(next?: any[]): any[];
        logs(): $hyoo_js_eval_log[];
        log(index: number): any;
    }
    class $hyoo_js_eval_log extends $.$hyoo_js_eval_log {
        sub(): $hyoo_js_eval_dump[];
        dump_value(index: number): any;
    }
    class $hyoo_js_eval_dump extends $.$hyoo_js_eval_dump {
        sub(): ($mol_expander | $hyoo_js_eval_dump)[] | ($mol_text_code | $hyoo_js_eval_dump)[];
        simple(): string;
        expand_title(): any;
        inner_keys(): (string | symbol)[];
        expand_content(): $hyoo_js_eval_dump[];
        inner_key(index: number): string | symbol;
        inner_value(index: number): any;
    }
}

declare namespace $ {
    class $mol_time_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
        code(val?: any): string;
        Sandbox(): $$.$hyoo_js_eval;
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
        poster(): string;
        revolume(event?: any): any;
        retime(event?: any): any;
        redurate(event?: any): any;
        play_started(event?: any): any;
        play(event?: any): any;
        pause(event?: any): any;
    }
}

declare namespace $ {
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
    class $mol_video_player_demo extends $mol_example_large {
        title(): string;
        sub(): readonly any[];
        tags(): readonly any[];
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
        pass(val?: any): string;
        Simple(): $$.$mol_password;
        pass2(val?: any): string;
        Hint(): $$.$mol_password;
    }
}

declare namespace $ {
    class $mol_status extends $mol_view {
        status(): any;
        minimal_height(): number;
        minimal_width(): number;
        sub(): readonly any[];
        message(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_status extends $.$mol_status {
        message(): any;
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
    class $mol_app_demo extends $mol_book2 {
        editor_title(): string;
        source_prefix(): string;
        repo_dict(): {
            mol: string;
        };
        pages(): readonly any[];
        plugins(): readonly any[];
        demo_block_list(): readonly any[];
        Menu(): $$.$mol_app_demo_menu;
        chat_pages(id: any): $mol_page[];
        Detail(id: any): $mol_app_demo_detail;
        Readme_page(): $$.$mol_app_demo_readme;
        Welcome(): $$.$mol_scroll;
        Detail_empty_message(): $$.$mol_status;
        detail_title(): string;
        blocks(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        names_demo_filtered(): readonly string[];
        filter_suggests(): readonly string[];
        sources_uri(): string;
        Sources(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools(): readonly any[];
        chat_seed(id: any): string;
        detail_description(): string;
        edit_uri(): string;
        Demo(): $mol_view;
        repo(): string;
        module(): readonly string[];
        source_link(): string;
        welcome_text(): string;
        Welcome_text(): $$.$mol_text;
        detail_empty_prefix(): string;
        selected(): string;
        detail_empty_postfix(): string;
    }
    class $mol_app_demo_menu extends $mol_page {
        names(): readonly string[];
        filter_suggests(): readonly string[];
        title(): string;
        Body(): $$.$mol_scroll;
        Option(id: any): $$.$mol_link;
        filter(val?: any): string;
        Filter(): $$.$mol_search;
        options(): readonly any[];
        Options(): $$.$mol_list;
        List(): $$.$mol_list;
        option_arg(id: any): {};
        option_title(id: any): string;
        Option_title(id: any): $$.$mol_dimmer;
    }
    class $mol_app_demo_detail extends $mol_page {
        description(): string;
        tools(): readonly any[];
        body(): readonly any[];
        readme_icon(): $mol_icon_information_outline;
        Readme(): $$.$mol_link;
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
    class $mol_app_demo_readme extends $mol_page {
        link_template(): string;
        repo(): string;
        module(): readonly string[];
        title(): string;
        tools(): readonly any[];
        Readme(): $$.$mol_text;
        Not_found(): $mol_view;
        source_link(): string;
        source_hint(): string;
        Source_link(): $mol_link_source;
        Close_icon(): $mol_icon_cross;
        close_arg(): {
            readme: any;
        };
        Close(): $$.$mol_link;
        readme(): string;
        Not_found_caption(): string;
    }
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

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_app_demo extends $.$mol_app_demo {
        component_name(name: string): string;
        detail_title(): string;
        detail_description(): string;
        names_demo_all(): string[];
        widget_tags(name: string): string[];
        widget_title(name: string): string;
        filter(): string;
        filter_last_word_completed(): boolean;
        filter_words(): string[];
        names_demo_filtered(): string[];
        tags_demo_filtered(): string[];
        filter_suggests(): string[];
        selected(): string;
        readme_page(): boolean;
        selected_class_name(): string;
        Widget(name: string): $mol_example;
        names_demo(): string[];
        blocks(): $mol_view[];
        Demo(): $mol_example;
        chat_seed(id: string): string;
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
    class $mol_app_demo_menu extends $.$mol_app_demo_menu {
        filter(next?: string): string;
        options(): $mol_link[];
        option_arg(id: string): {
            demo: string;
        };
        option_title(id: string): string;
    }
    class $mol_app_demo_readme_not_found_error extends Error {
        module: readonly string[];
        constructor(module: readonly string[]);
    }
    class $mol_app_demo_readme extends $.$mol_app_demo_readme {
        link(module: readonly string[]): string;
        readme(): string;
        body(): $mol_view[];
    }
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
        toString(): any;
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
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
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
    function $mol_view_tree2_value_type(this: $, val: $mol_tree2): "locale" | "object" | "string" | "list" | "number" | "get" | "null" | "bool" | "dict" | "bind" | "put";
}

declare namespace $ {
    function $mol_view_tree2_value(this: $, value: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_class(this: $, klass: $mol_tree2, locales: $mol_view_tree2_locales): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_comment(this: $, item: $mol_tree2): $mol_tree2[];
    function $mol_view_tree2_ts_comment_doc(this: $, item: $mol_tree2): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_module(this: $, tree2_module: $mol_tree2, locales: $mol_view_tree2_locales): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_ts_compile(this: $, tree2_module: $mol_tree2): {
        script: string;
        locales: $mol_view_tree2_locales;
    };
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
    function $mol_view_tree2_ts_locale(operator: $mol_tree2, context: $mol_view_tree2_context): $mol_tree2[];
}

declare namespace $ {
    function $mol_view_tree2_ts_value(this: $, src: $mol_tree2): $mol_tree2[];
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
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_json(this: $, tree: $mol_tree2): unknown;
}

declare namespace $ {
    function $mol_tree2_grammar_check(grammar: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_html_encode(text: string): string;
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
    function $mol_base64_encode_web(str: string | Uint8Array): string;
}

declare namespace $ {
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
        close(index: number): void;
    }
}

declare namespace $ {
    class $hyoo_mol extends $mol_book2_catalog {
        plugins(): readonly any[];
        Placeholder(): any;
        menu_title(): string;
        menu_tools(): readonly any[];
        param(): string;
        spreads(): {
            "": $mol_page;
            articles: $$.$hyoo_habhub;
            slides: $$.$hyoo_slides;
            apps: $$.$hyoo_apps;
            demos: $$.$mol_app_demo;
            "view.tree": $$.$hyoo_tree;
            icons: $$.$mol_frame;
        };
        Theme(): $$.$mol_theme_auto;
        Sources(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        tools_root(): readonly any[];
        description(): string;
        sources_uri(): string;
        Description(): $$.$mol_text;
        Main(): $mol_page;
        Articles(): $$.$hyoo_habhub;
        Slides(): $$.$hyoo_slides;
        Apps(): $$.$hyoo_apps;
        Demos(): $$.$mol_app_demo;
        tree_pipeline(): readonly any[];
        tree_source(): string;
        View_tree(): $$.$hyoo_tree;
        Icons(): $$.$mol_frame;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_mol extends $.$hyoo_mol {
        description(): string;
    }
}

export = $;