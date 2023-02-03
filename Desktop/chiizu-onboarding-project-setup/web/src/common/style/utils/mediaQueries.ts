import { IRawStyle, IStyleBaseArray } from "@fluentui/merge-styles";
import { memoizeFunction } from "@fluentui/react";

type Styles = IStyleBaseArray | IRawStyle;

export const mediaMaxW = memoizeFunction((width: number, styles: Styles): IRawStyle => ({
    [`@media screen and (max-width:${width}px)`]: styles,
}));

export const mediaMinW = memoizeFunction((width: number, styles: Styles): IRawStyle => ({
    [`@media screen and (min-width:${width}px)`]: styles,
}));

export const mediaRangeW = memoizeFunction((to: number, from: number, styles: Styles): IRawStyle => ({
    [`@media screen and (min-width:${to}px) and (max-width:${from}px)`]: styles,
}));