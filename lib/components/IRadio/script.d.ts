import { sizePropValidator } from '../../mixins';
import { Classes, InputElementEvent } from '../../types';
declare const _default: import("vue").DefineComponent<{
    /**
     * @description The color variant of the radio
     * @type light | dark
     * @default light
     */
    color: {
        type: StringConstructor;
        default: () => string;
    };
    /**
     * @description The disabled state of the radio
     * @type Boolean
     * @default false
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description The indeterminate state of the radio
     * @type Boolean
     * @default false
     */
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description Used to set the radio value when used inside a radio group
     * @default ''
     */
    value: {
        default: string;
    };
    /**
     * @description Used to set the radio value when used by itself
     * @default false
     */
    modelValue: {
        default: boolean;
    };
    /**
     * @description The unique identifier of the radio
     * @type String
     * @default uid()
     */
    name: {
        type: (StringConstructor | NumberConstructor)[];
        default(): string;
    };
    /**
     * @description Displays the native browser radio input indicator
     * @type Boolean
     * @default false
     */
    native: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description The readonly state of the radio
     * @type Boolean
     * @default false
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description The size variant of the radio
     * @type sm | md | lg
     * @default md
     */
    size: {
        type: StringConstructor;
        default: () => string;
        validator: typeof sizePropValidator;
    };
    /**
     * @description The tabindex of the radio
     * @type Number | String
     * @default 1
     */
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, unknown, unknown, {
    classes(): Classes;
    checked(): boolean;
    tabIndex(): number | string;
}, {
    clickInputRef(): void;
    onChange(event: InputElementEvent): void;
    onBlur(event: InputElementEvent): void;
}, import("vue").DefineComponent<{}, {}, {}, {
    isDisabled(): boolean;
    isReadonly(): boolean;
    parent(): any;
    schema(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    disabled?: unknown;
    indeterminate?: unknown;
    value?: unknown;
    modelValue?: unknown;
    name?: unknown;
    native?: unknown;
    readonly?: unknown;
    size?: unknown;
    tabindex?: unknown;
} & {
    value: string;
    name: string | number;
    color: string;
    size: string;
    modelValue: boolean;
    disabled: boolean;
    tabindex: string | number;
    indeterminate: boolean;
    native: boolean;
    readonly: boolean;
} & {}>, {
    value: string;
    name: string | number;
    color: string;
    size: string;
    modelValue: boolean;
    disabled: boolean;
    tabindex: string | number;
    indeterminate: boolean;
    native: boolean;
    readonly: boolean;
}>;
export default _default;
