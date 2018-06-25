export const hasNumber = (str) => (/[0-9]/i).test(str)

export const hasUppercase = (str) => (/[A-Z]/).test(str)

export const hasWhitespace = (str) => (/\s/).test(str)

export const isComplex = (str) => hasNumber(str)
  && hasUppercase(str)
  && !hasWhitespace(str)
