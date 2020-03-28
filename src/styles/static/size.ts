const sizes = {
  s: {
    min: 0,
    max: 767,
  },
  m: {
    min: 768,
    max: 1023,
  },
  l: {
    min: 1024,
    max: Number.MAX_VALUE,
  },
} as const

export default sizes
