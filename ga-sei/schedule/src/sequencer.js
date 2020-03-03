const { trace, asConst, fixed, updateSplice, atIndex, curry, flip, withConst, compose, reader, update, updateFieldAt } = require('./util.js');

const throwErr = (e) => {
  throw e
}

const checkValidIndex = (n, i) => 
  (i == null || i == undefined || i < 0)
    ? throwErr(`name not found in sequences: ${n}`) 
    : i

const checkUnmodifiedLength =  (oldL) => (newL) =>
  oldL.length == newL.length
  ? newL
  : throwErr(`sequence length has changed from ${oldL.length} to ${newL.length}!`)

const getFirstIndex = (seqs, n) =>
  seqs.findIndex(s => s.name == n)

const indexOfName = (n) => (seqs) =>
  checkValidIndex(n, getFirstIndex(seqs, n))

const swapElems = (i1, i2) => xs =>
  withConst(xs[i1])(a =>
  withConst(xs[i2])(b => (
    xs[i1] = b,
    xs[i2] = a,
    xs
  )))

const swap = (n1, n2) =>
  reader(
    compose(flip(swapElems), curry),
    compose(indexOfName(n1), withConst),
    compose(indexOfName(n2), withConst)
  )

const updateEventAt = (k) => (n, v) =>
  reader(
    indexOfName(n),
    flip(updateFieldAt(k, v))
  )


const replace = updateEventAt('name')

const duration = updateEventAt('duration')

const add = (namePrior, data) =>
  reader(
    indexOfName(namePrior),
    flip(i => updateSplice(i+1, 0, data))
  )

const remove = (name) =>
  reader(
    indexOfName(name),
    flip(i => updateSplice(i,1))
  )

const moveF = (p) => (f) => (i) => 
  withConst(p(i))(m =>
      m === 0 ? x => x
    : m > 0 ? compose(swapElems(i, i+1), f()(i+1))
    : compose(swapElems(i, i-1), f()(i-1))
  )

const move = (p) => (stopName, name) => (seqs) =>
  withConst(indexOfName(name)(seqs))(i =>
    fixed(
    moveF(
    p(indexOfName(stopName)(seqs))(i)
    ))(i)(seqs)
  )

const isBefore = (istop) => (i0) => 
    i0 < istop ? (i) => istop - i - 1
  : i0 > istop ? (i) => istop - i
  : asConst(0)

const isAfter = compose(n => n+1, isBefore)

const moveBefore = move(isBefore)
const moveAfter = move(isAfter)

const applyOverlays = (overlays) =>
  reader(
    compose(...overlays),
    checkUnmodifiedLength,
  )

module.exports = { 
  applyOverlays,
  duration,
  replace,
  swap,
  add,
  remove,
  moveAfter,
  moveBefore
}
