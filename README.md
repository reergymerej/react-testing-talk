# React Testing Talk

https://www.meetup.com/React-JAX/events/251275752/

This is where I'll prepare.  It will eventually become a companion repo to the
talk.


## Scratch

This is NOT why you should test.
This is NOT how to test.
This IS how to write imperfect tests to minimize the cost.

### Tricks

* Avoid complex tests
* Use templates
* Export functions _just_ to test them.
* Extract WrappedComponent from HOC
* Use `instance` to test instance methods.
* Keep components at arm's length
* Loop and assert
* Mock logic out of components

---

Avoid complex tests
  If something is just _too_ freaking hard to test, skip it.  You're not going
  for a Medal of Honor here.  Spend your limited time wisely.  Just remember
  going forward not to write code that's so hard to test.

  If you've got a pet monster, just feed it here and there.  Eventually, you can
  refactor it into a better place.  Keep your eye on the cost/benefit ledger,
  though.

Use templates
  Make it as easy as possible to write tests.
  * logic
  * components
  * HOC
  * Redux elements

Export functions _just_ to test them.
  In a perfect world, you only test the external interface.  Consider the vile
  crime of exporting an internal helper function _just_ so you can verify it
  works.  Odds are, if you're in this position, that logic could/should
  (eventually) stand alone, anyway, and should be in a helper file, exported
  anyway.

Extract WrappedComponent from HOC
  Ignore all the `connect` stuff.  Just pull out the `WrappedComponent` and test
  it like a regular component.  You're cutting out testing that the Redux
  attributes are mapped to the appropriate props and maybe that you're using the
  right selectors, but that's OK.  If those don't work, you'll see it in the UI
  pretty plainly.  Those are wiring tests.

Use `instance` to test instance methods.
  Yeah, you could tickle the component just right in order to execute a method
  and then examine the component or the prop handlers to see what happened, but
  that's hard.  If you are in this position, the component sucks already.  Cut
  your losses and verify just that method.

  For bonus points, once you know it works, make it a static and stop messing
  with `instance`.  If you're messing with `instance`, you're already in
  trouble.

Keep components at arm's length
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

Loop and assert
  Tests that have one assertion are awesome.  But, use some cleverness to help
  you out once in a while when you need it.

Mock logic out of components
  This isn't a cheat.  This is just good practice.  One of the ways where the
  right thing is actually the easy thing, too.


## Outline

Introduction
  * me, my fondness for testing, perfectionism
  * Explain thesis

Content
  For each point, where applicable:
  * describe the advice
  * explain how it's bad form
  * show code example

Recap
  * Review thesis, enumerate tricks
  * Refer to blog/repo for more details
  * Questions
