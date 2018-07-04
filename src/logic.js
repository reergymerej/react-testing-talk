// Nothing else is using hasNumber, hasUppercase, or hasWhitespace.  We're
// exporting them only for the sake of testing.
// HERESY!
export const hasNumber = (str) => (/[0-9]/i).test(str)

export const hasUppercase = (str) => (/[A-Z]/).test(str)

export const hasWhitespace = (str) => (/\s/).test(str)

// This is the only _real_ public interface for this module.  Look at its test,
// though, to see why it's not really worth testing.
export const isComplex = (str) => hasNumber(str)
  && hasUppercase(str)
  && !hasWhitespace(str)
