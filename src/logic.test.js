import * as logic from './logic'

describe('logic', () => {
  // Group them well.  It will help when things go bad.
  it('should handle hasNumber', () => {
    // Put both assertions here.  It's simple.
    // https://softwareengineering.stackexchange.com/a/7829/203348
    expect(logic.hasNumber('asdf')).toBe(false)
    expect(logic.hasNumber('a222sdf')).toBe(true)
  })

  it('should handle hasUppercase', () => {
    expect(logic.hasUppercase('spork')).toBe(false)
    // Silly strings are a lot easier to find.
    expect(logic.hasUppercase('Bonzai!')).toBe(true)
  })

  it('should handle hasWhitespace', () => {
    // It's a good idea to test both negative and positive.
    expect(logic.hasWhitespace('banana')).toBe(false)
    expect(logic.hasWhitespace('why fi?')).toBe(true)
  })

  it('should handle isComplex', () => {
    // This is business logic.  You could test just this, but you miss the
    // granularity of testing the individual elements.  It's way easier to test
    // the individual pieces.  Business logic like this should probably be
    // tested, but it's not as easy.  You tend to try fitting in lots of
    // permutations. (hasNumber * hasUppercase * hasWhitespace) * 2
    expect(logic.isComplex('password')).toBe(false)
    expect(logic.isComplex('Passwor6')).toBe(true)
    // We're implicitly testing each of those other methods.  This test verifies
    // that they've been applied the right way, but it's expensive.
    // Being able to spot tests like this is a skill to work on.
    // The test as is doesn't cover all the scenarios.
    // If we add each scenario, the test becomes very complex.
    //
    // Instead of being a purist, and testing only via the public interface,
    // export the component elements and test them.  If they're nice and
    // reusable, they'll probably end up gathered in their own module later,
    // exposed as proper interface points anyway.
  })
})
