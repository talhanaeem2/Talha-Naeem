import { IRawStyle, memoizeFunction } from "@fluentui/react";

import countLetterSpacing from "common/style/utils/countLetterSpacing";
import countLineHeight from "common/style/utils/countLineHeight";
import fluid from "common/style/utils/fluid";

/**
 * Returns responsive text styles.
 */
const textStyles = memoizeFunction((minFontSize: number, maxFontSize: number): IRawStyle => {
    const fontSize = fluid(minFontSize, maxFontSize);

    return {
        fontSize,
        letterSpacing: countLetterSpacing(fontSize),
        lineHeight: countLineHeight(fontSize),
    };
});

export default textStyles;