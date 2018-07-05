This is NOT why you should test.
This is NOT how to test.
This IS how to write imperfect tests to minimize the cost.

---

When you learn about testing, everything seems pretty easy.  The reason for that
is, you are looking at airbrushed models.  The book/article/demonstration you're
observing is not going to be compelling if they show you all the ugly warts.
So they show you a wonderful world of 100% test coverage, where you know if
anything is ever out of place, and bugs are reduced to fatfingered strings that
don't actually affect functionality, mocks are easy, tests are fast, and you're
lauded as a genius.

Here's a big secret, though.  Testing doesn't fix everything.  Even worse, tests
are not free.  They cost time in learning, creation, maintenance, and actually
running.  They can slow down and even stop a build or deployment for what seems
like an irrelevant reason.  They can distract and become little more than
additional annoyances keeping you from that precious state of flow.  Those guys
who argue against the value of testing are not completely off base.

There is a cost, but there is also a benefit.

Honestly, unless you're already a hardcore TDD advocate, there's very little perceived
immediate benefit to writing tests.  To alter the cost/benefit ratio, you can
try and stress the benefits, but that's really hard with a reluctant dev or
someone just starting out with testing.  Your other option is to decrease the
cost.  That's what I want to help with today.

My name is Jeremy Greer and I'm an architect at a startup in Atlanta.  I bought
into the value of testing around 2010 when I first read "Test-Driven Development
by Example" by a guy named Kent Beck.  Since then I've tried to introduce
testing regimens in every company I've worked at with various degrees of
success, both TDD and integration tests.  I attained the rank of elitist test
Nazi purist and eventually, after years of battling the "There's no time to
test" guys, revised some of my views to be a bit more effective.

I want to share with you now 8 things that purists will scoff at, that will
reduce the cost of your tests.

---

NOTE: At this point, I'll go over each of these with a brief description, code example,
and maybe a tiny bit of demo.

---

Avoid complex tests
  TODO: Find some examples.
  TODO: Script this part.

  If something is just _too_ freaking hard to test, skip it.  You're not going
  for a Medal of Honor here.  Spend your limited time wisely.  Just remember
  going forward not to write code that's so hard to test.

  If you've got a pet monster, just feed it here and there.  Eventually, you can
  refactor it into a better place.  Keep your eye on the cost/benefit ledger,
  though.

Use templates
  ref: test.template.*
  Yes, copy and paste.

  Make it as easy as possible to write tests.
  * logic
  * components
  * HOC
  * Redux elements

Export functions _just_ to test them.
  ref: logic.test.js

  It's a high crime.

  In a perfect world, you only test the external interface.  Consider the vile
  crime of exporting an internal helper function _just_ so you can verify it
  works.  Odds are, if you're in this position, that logic could/should
  (eventually) stand alone, anyway, and should be in a helper file, exported
  anyway.

  Exporting here is a half measure toward better structure.

Extract WrappedComponent from HOC
  ref: UserContainer.test.js

  Ignore all the `connect` stuff.  Just pull out the `WrappedComponent` and test
  it like a regular component.  You're cutting out testing that the Redux
  attributes are mapped to the appropriate props and maybe that you're using the
  right selectors, but that's OK.  If those don't work, you'll see it in the UI
  pretty plainly.

Use `instance` to test instance methods.
  ref: RubiksCube.js

  Yeah, you could tickle the component just right in order to execute a method
  and then examine the component or the prop handlers to see what happened, but
  that's hard.  If you are in this position, the component sucks already.  Cut
  your losses and verify just that method.

  For bonus points, once you know it works, make it a static and stop messing
  with `instance`.  If you're messing with `instance`, you're already in
  trouble.  Don't bother trying to be perfect once you're already down this
  path.


  ref: TickleMe.js
  This component is a disaster.

Loop and assert
  TODO: Contrive a scenario that would be good for looping.

  Tests that have one assertion are awesome.  But, use some cleverness to help
  you out once in a while when you need it.

  Fuzz testing is an example.  So is verifying that a bunch of items all behave
  by a similar set of rules.

---

When you're writing tests, keep an eye on the balance between cost and benefit.
As you get better at testing, the cost will lessen.  At that point, maybe you
can skip some of the cheats and be a bit more purist.  Just gauge what you're
doing to ensure it's for the right reasons.

There's a compainion repo and blog for this talk available at URLHERE if you'd
like to reference it and experiment later.  Now let's spend a couple minutes
with general QA.


--- NOTES

Don't worry about TDD when you don't know what you want.  Just freaking
experiment.  If you're wise, though, once you get the idea, you should start
testing.

Just write a test,
even with bad describe/it text, even with crappy assertions.  It will often
become clearer as you go.  Just get something written.

I have honestly written this test more times than I can remember.  It's a
starting point to help clarify your thoughts.

```js
describe('whatever', () => {
  it('should work', () => {
    expect(1).toBe(0)
  })
})
```

---
Testing redux.  Test action creators and reducers.  Selectors are often too
tedious.  Testing thunks is pretty painful, as you tend to end up testing
various branches of AJAX calls and whatnot.  They end up being very complex,
confusing, and brittle.  There's a goldmine of logic buried in there that needs
testing, but it's hard to get to.  It's probably not worth the effort at first,
if ever.

