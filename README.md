# React Testing Talk

https://www.meetup.com/React-JAX/events/251275752/

This is where I'll prepare.  It will eventually become a companion repo to the
talk.


## Main Idea

I've got pages of notes on a yellow pad.  Good stuff!

> Tests don't have to be perfect, they only require a net value.


Testing is often presented in a perfect environment.  In reality, people
complain that it's not practical and end up dismissing testing altogether.
Trying to be _too_ academic can prevent you from useful testing and put off
others.

Perfect test environments don't exist in real life.

It's not about perfection.  It's about keeping the balance between cost and
benefit.  There are techniques for this that we will discuss.

**Costs**
* maintenance
* running time
* complexity

**Benefits**
* confidence
* TDD - better code structure


## Timeline

July 10 - Give talk

July 8 - Practice talk in front of Jason
July 7 - Practice talk in front of Amanda
July 6 - Practice talk, with slides (record and rewatch)
July 5 - Practice talk, with slides (record and rewatch)
July 4 - Practice talk, with slides (record and rewatch)
July 3 - Finish final draft
	develop companion repo code
	write companion blog
	create slides

  Rehearse with timer - edit down if needed
  Rehearse with timer - edit down if needed
  Rehearse with timer - edit down if needed
  Rehearse with timer - edit down if needed

June 26 - Finish first draft

June 21 - Brainstorm, outline
June 20 - Finalize idea

---
Mon Jun 25 07:42:50 EDT 2018


### Outline

**Thesis** - The longterm benefit to a healthy test suite is widely
acknowledged, but you need immediate payoff to get there.  There are techniques
to tip the scales.

We are not focusing on "it's hard to get started test," that's just a minor
point.  We are focusing on "here's how to make testing more beneficial."


Elaborate on the logic behind incentive.  Don't dwell too long, but pull in the
human factor so people get a break from the tech.  Relate to them so they care.
This is a sales pitch.  They need to understand the problem so they can buy the
solution.


1. Make them care
* It's hard to test like they do in the movies.
* You're a good guy, you want to do the right thing.

2. Explain idea
* Cost/benefit
* The test suite will develop a type of inertia as it grows.  It is most
  important to lessen costs at the very beginning.

3. Describe evidence
* ? - Aside from "I've done it," which is only partially true, what is this?
  Is this just theoretical?  I can't prove "this will help people start
  testing," that's just conjecture.  I can prove my tricks make it easier to
  test, though.

4. Call to action (This is the meat!)
* use test templates
* keep components at arm's length
* extract WrappedComponent from HOC
* mock shit
* loop and assert - breaking rules about 1 assertion per test
* TDD pure logic, skip it for components
* avoid complex tests

5. New reality
