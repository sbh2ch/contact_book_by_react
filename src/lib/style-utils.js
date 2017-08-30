/**
 * Created by sonbyeonghwa on 2017. 8. 30..
 */
import {css} from 'styled-components';

export const media = {
    mobile: (...args) => css`
        @media (max-width: 768px) {
            ${css(...args)}
        }
    `
};