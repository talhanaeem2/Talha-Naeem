import { memoizeFunction } from "@fluentui/react";

/**
 * Calculates the value using the min-max values and min-max resolution values.
 */
const fluid = memoizeFunction((minValue: number, maxValue: number): string =>
    `calc(${minValue}px + (${maxValue} - ${minValue}) * ((100vw - 480px) / (1920 - 480)))`);

export default fluid;