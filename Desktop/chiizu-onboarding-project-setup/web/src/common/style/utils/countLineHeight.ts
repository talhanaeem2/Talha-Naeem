import { memoizeFunction } from "@fluentui/react";

/**
 * Calculates the line-height value using the font-size passed in.
 */
const countLineHeight = memoizeFunction((fontSize: string): string => `calc(${fontSize} * 1.42857)`);

export default countLineHeight;