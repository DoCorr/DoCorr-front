const white = {
  white000: '#FEFDFF',
} as const

const gray = {
  gray100: '#F1F1F5',
  gray300: '#DFDEE6',
  gray500: '#B0B0BC',
  gray600: '#797985',
  gray700: '#52515B',
  gray800: '#32303B',
  gray900: '#1E1C25',
} as const

const violet = {
  violet000: '#f3f0ff',
  violet700: '#7048e8',
} as const

const red = {
  red800: '#e03131',
} as const

const teal = {
  teal800: '#099268',
} as const

const colors = {
  ...white,
  ...gray,
  ...violet,
  primary: violet.violet700,
  secondary: gray.gray300,
  danger: red.red800,
  allow: teal.teal800,
} as const

export default colors
