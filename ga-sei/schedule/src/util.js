const fs = require('fs');
const path = require('path');

const fixed = (g) => g(() => fixed(g))

const withConst = (x) => (f) => f(x)

const with2Const = (a) => (b) => (f) =>
  f(a)(b)

const asConst = (x) => (_) => x

const flip = (f) => (...b) => (...a) => f(...a)(...b)

const trace = (x) => { console.log(x); return x}

const compose = (...fs) => (x) =>
  fs.reduce((r, f) => f(r), x)

const reader = (f,...fs) => (r) =>
  compose(...fs.map(withConst(r)))(f(r))

const suspend = (f) => (x) => () => f(x)

const mapOver = (xs) => (f) => xs.map(f)

const mapWith = flip(mapOver)

const throwErr = (msg) => {
  throw msg;
}

const words = (s) => s.split(' ')

const atIndex = (i) => (xs) => xs[i]

const appP = (fp, xp) =>
  fp.then(f => xp.then(x => f(x)))

const mapP = (f, xp) =>
  xp.then(x => f(x))

const importJSONFile = (filePath) =>
  new Promise((resolve, reject) =>
    fs.readFile(filePath, (err, data) =>
        err 
        ? reject(err)
        : resolve(JSON.parse(data))
    )
  );

const lessThan = (b) => (a) => a < b

const curry = (f) => (a) => (b) => f(a,b)

const uncurry = (f) => (a,b) => f(a)(b)

const update = (f) => (x) => (f(x), x)

const updateAt = (k, v) => update(xs => xs[k] = v)

const updateFieldAt = (k, v) => (i) => 
  update(
    compose(
      atIndex(i),
      updateAt(k,v)
    )
  )

const updateSplice = (...args) => update(xs => xs.splice(...args))

const semiConcat = (f) => (xs) => xs.reduce(uncurry(f))

const mconcat = (f, mempty) => (xs) => xs.length < 1 ? mempty : semiConcat(f)(xs)

const and = (a) => (b) => a && b

const or = (a) => (b) => a || b

module.exports = {
  trace,
  asConst,
  withConst,
  with2Const,
  flip,
  compose,
  reader,
  suspend,
  mapOver,
  mapWith,
  throwErr,
  words,
  atIndex,
  appP,
  mapP,
  importJSONFile,
  fixed,
  lessThan,
  curry,
  update,
  updateAt,
  updateFieldAt,
  updateSplice,
  semiConcat,
  mconcat,
  and,
  or
}
