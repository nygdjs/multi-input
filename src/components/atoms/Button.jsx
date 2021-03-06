import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import tokens from '../../tokens';

const Button = styled.button.attrs({
    type: props => props.type,
})`
    background-color: transparent;
    border: 0;
    color: ${tokens.colors.primary};
    cursor: pointer;
    font-size: ${tokens.fonts.sizes.body.default};
    overflow: hidden;
    overflow-wrap: break-word;
    padding: ${tokens.space.normal};
    text-align: center;
    text-transform: uppercase;
    transition: all 200ms ease;
    transition-property: color, background-color;
    ${space};

    &:hover {
        background-color: ${tokens.colors.primary};
        color: ${tokens.colors.white};
    }
    ${props =>
        props.isDisabled
        && css`
            color: ${tokens.colors.gray.dark};

            &:hover {
                background-color: transparent;
                color: ${tokens.colors.black};
            }
        `};
`;

Button.propTypes = {
    isDisabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    ...space.propTypes,
};

Button.defaultProps = {
    isDisabled: false,
    type: 'submit',
};

export default Button;
