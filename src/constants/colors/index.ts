const gray = {
  gray100: '#f1f3f5',
  gray300: '#dee2e6',
  gray500: '#adb5bd',
  gray700: '#495057',
  gray800: '#343a40',
} as const

const violet = {
  violet000: '#f3f0ff',
  violet700: '#7048e8',
} as const

const colors = {
  ...gray,
  ...violet,
  primary: violet.violet700,
  secondary: gray.gray300,
} as const

export default colors
