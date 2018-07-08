import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import tokens from '.';

// Global styles for the whole application
// using 'injectGlobal' from styled-components
// see: https://www.styled-components.com/docs/api#injectglobal
const globalStyles = () => injectGlobal`
    ${styledNormalize}

    body,
    html {
        background-color: ${tokens.colors.white};
        color: ${tokens.colors.black};
        font-family: ${tokens.fonts.sets.body.default};
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        font-kerning: normal;
        font-size: ${tokens.fonts.sizes.body.default};
        font-style: normal;
        font-variant-ligatures: common-ligatures contextual;
        font-weight: ${tokens.fonts.weights.default};
        min-height: 100vh;
        min-width: 100vw;
        text-rendering: optimizeLegibility;
    }

    body:not(.user-is-tabbing) {
        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
        }
    }

    fieldset {
        border: 0;
        padding: 0;
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;

        -webkit-margin-after: 0;
        -webkit-margin-before: 0;
        -webkit-padding-start: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
    }
`;

export default globalStyles;
