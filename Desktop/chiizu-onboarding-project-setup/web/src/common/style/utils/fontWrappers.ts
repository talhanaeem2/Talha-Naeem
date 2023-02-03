import { memoizeFunction, mergeStyles } from "@fluentui/react";

import FontFamily from "common/style/enums/fontFamily";
import textStyles from "common/style/utils/textStyles";

export const regular = memoizeFunction((minFontSize: number, maxFontSize: number) => mergeStyles({
    ...textStyles(minFontSize, maxFontSize),
    fontFamily: FontFamily.GraphikRegular,
    displayName: `regular${maxFontSize}`,
    fontWeight: 400,
}));

export const medium = memoizeFunction((minFontSize: number, maxFontSize: number) => mergeStyles({
    ...textStyles(minFontSize, maxFontSize),
    fontFamily: FontFamily.GraphikMedium,
    displayName: `medium${maxFontSize}`,
    fontWeight: 500,
}));

export const semiBold = memoizeFunction((minFontSize: number, maxFontSize: number) => mergeStyles({
    ...textStyles(minFontSize, maxFontSize),
    fontFamily: FontFamily.GraphicSemibold,
    displayName: `semiBold${maxFontSize}`,
    fontWeight: 600,
}));

export const bold = memoizeFunction((minFontSize: number, maxFontSize: number) => mergeStyles({
    ...textStyles(minFontSize, maxFontSize),
    fontFamily: FontFamily.GraphikBold,
    displayName: `bold${maxFontSize}`,
    fontWeight: 700,
}));