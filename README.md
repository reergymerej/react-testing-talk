# React Testing Talk

[![CircleCI](https://circleci.com/gh/MichaelDimmitt/react-testing-talk/tree/master.svg?style=shield)](https://circleci.com/gh/MichaelDimmitt/plugin-release/tree/master)
[![CodeCov](https://img.shields.io/codecov/c/github/reergymerej/react-testing-talk.svg)](https://codecov.io/gh/reergymerej/react-testing-talk)

https://www.meetup.com/React-JAX/events/251275752/

This is where I'll prepare.  It will eventually become a companion repo to the
talk.


This is NOT why you should test.
This is NOT how to test.
This IS how to write imperfect tests to minimize the cost.


## Bonus

There is lots to stay, but we want to stay focused.  Here is the overflow.


Only use shallow.  mount is crazy.



Keep this handy for Enzyme.

      console.log(wrapper.debug())

Keep components at arm's length
  good: User.js
  bad: TODO:

  This isn't really a cheat; it's just good advice.

  Try to focus on testing a component's functionality, not its form.  Avoid
  selectors based on position or even tag name.  Prefer component `displayName`
  or `className`.

  You _can_ test that props end up mapped to a child accordingly, but that's not
  really useful.  That's just wiring stuff that doesn't give you a big payoff.
  It tends to lead to expensive to maintain tests.

  You should be testing as an outside observer to the component.  Only mess with
  it via props and triggering events on its children.  Make assertions based on
  what handlers are triggered and what children you can find.  Inner concerns
  like "wiring" are not your (test's) concern.  That's inside the black box.
  Don't worry about how it maps the props you've given it to its children.  Try
  not to even worry about _where_ the children are.

  In an ideal world, you would test all this stuff and know when anything was
  out of place.  In real life, these "wiring" tests are expensive to maintain.

Mock logic out of components
  ref: PasswordHelper.jestjs

  This isn't really a cheat; it's just good advice.

  This isn't a cheat.  This is just good practice.  One of the ways where the
  right thing is actually the easy thing, too.

(TDD advice: Test written _after_ the implementation miss a huge chunk
of the benefit.)

This is general TDD advice.  It does help keep tests cheap, though.
Always red/green as fast as you can, especially when you're new to a framework.

```
      const login = jest.fn()
      const wrapper = shallow(factory({ login }))
      login()  // Yeah, duh.  This just verifies the test was written correctly.
      // I don't know how many times I got lost debugging stuff only to
      // eventually realize I messed up the test.
      expect(login).toHaveBeenCalled()
```

Learn how to debug your tests as soon as you can.  Knowing how will reduce costs
tremendously when starting out.
