import { memoizeFunction } from "@fluentui/react";

const letterSpacing = 20;

/**
 * Calculates the letter-spacing value using the font-size passed in.
 */
const countLetterSpacing = memoizeFunction((fontSize: string): string =>
    `calc(${fontSize} * ${letterSpacing} / 1000)`);

export default countLetterSpacing;