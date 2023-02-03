import { Alignment, memoizeFunction } from "@fluentui/react";

type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";
type FlexWrap = "wrap" | "no-wrap";

interface IFlexboxParams {
    horizontal: boolean;
    vAlign: Alignment;
    hAlign: Alignment;
    reversed: boolean;
    wrap: boolean;
}

interface IFlexbox {
    display: "flex";
    alignItems: Alignment;
    justifyContent: Alignment;
    flexDirection: FlexDirection;
    flexWrap: FlexWrap;
}

/**
 * Flexbox utility function to manage and reuse flexbox rules.
 */
const flexbox = memoizeFunction((params?: Partial<IFlexboxParams>): Partial<IFlexbox> => ({
    display: "flex",
    ...params?.vAlign && { alignItems: params?.vAlign },
    ...params?.hAlign && { justifyContent: params?.hAlign },
    ...params?.horizontal
        ? { flexDirection: params.reversed ? "row-reverse" : "row", }
        : { flexDirection: params?.reversed ? "column-reverse" : "column", },
    ...params?.wrap && { flexWrap: "wrap" },
}));

export default flexbox;