const gray = {
  gray100: '#F1F1F5',
  gray300: '#DFDEE6',
  gray500: '#B0B0BC',
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
}

const green = {
  green800: '#2f9e44',
}

const colors = {
  ...gray,
  ...violet,
  primary: violet.violet700,
  secondary: gray.gray300,
  danger: red.red800,
  allow: green.green800,
} as const

export default colors
