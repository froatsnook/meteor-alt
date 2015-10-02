[alt](https://github.com/goatslacker/alt) (flux) packaged for Meteor

## What?
This is alt, exposed on the client.  You get a global, `Alt`, and another global, `alt`, (a `new Alt()`).

Please get in touch (by creating an issue on github) if you have any thoughts on this package.

## Why?
Use this package if you want to use this flavor of flux with your [`react`](https://atmospherejs.com/reactjs/react).

## How?
* [alt source on github](https://github.com/goatslacker/alt)
* [alt guide on js.org](http://alt.js.org/)

Specifically, this package exposes `alt-with-addons.js` to the client, plus a
few small changes to make sure meteor's `React` is used.

## Breaking Changes in froatsnook:alt@0.17.3
A recent change in `reactjs:react` broke `froatsnook:alt`.  I have been using a
locally built version of `reactjs:react` to work around this.  But now that mdg
has released an official react package, I have migrated this package to depend
on the `react-runtime` package.

Sorry for the inconvenience.

## License
MIT

