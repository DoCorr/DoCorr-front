import { css } from '@emotion/core'

const fonts = {
  Tinos: {
    Regular: css`
      font-family: 'Tinos', 'SpoqaHanSans', -apple-system, BlinkMacSystemFont,
        sans-serif;
      font-weight: 400;
    `,
    Bold: css`
      font-family: 'Tinos', 'SpoqaHanSans', -apple-system, BlinkMacSystemFont,
        sans-serif;
      font-weight: 700;
    `,
  },
  Spoqa: {
    Regular: css`
      font-family: 'SpoqaHanSans', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 400;
    `,
    Bold: css`
      font-family: 'SpoqaHanSans', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 700;
    `,
  },
} as const

export default fonts
