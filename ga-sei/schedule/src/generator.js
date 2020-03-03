const { compose, asConst, fixed, withConst, trace } = require('./util.js');
const LL = require('./linkedList.js');

const isDone = (x) => x == null || x == undefined

const repeat = function*(x) {
  while(true) {
    yield x;
  }
}

const fix = (f) => function*(x) {
  x = f(x); 
  while(!isDone(x)) {
    yield x;
    x = f(x);
  }
}

const constGen = function*(x) {
  yield x;
}

const fromList = function*(l) {
  for(let x of l)
    yield x;
}

const inOrder = (f) => (g) => fromList(toList(g).sort(f))

const inc = fix(x => x+1)

const range = (m, n) => takeWhile(x => x < m+n)(inc(m-1))

const takeN = (n) =>
  withConst(0)(i =>
    takeWhile(_ => (i++ < n))
  )

const mapGen = (f) => function*(g) {
  for(let x of g)
    yield f(x);
}

const mapGenFirst = (f) => (g) =>
  withConst(g.next())(r =>
  withConst(f(r.value))(function*(h) {

    yield h(r.value);

    yield* mapGen(h)(g);

  }))


const takeWhile = (p) => function*(g) {
  for(let x of g) {
    if(!p(x)) break;
    yield x;
  }
}

const consume = (f) => (g) => {
  for(let x of g)
    f(x);
}

const bind = (g) => function*(f) {
  for(let x of g) {
    yield* f(x);
  }
}

const andThen = function*(...gs) {
  for(let g of gs) {
    yield* g;
  }
}

const print = consume(x => console.log(x))

const toList = (g) => [...g]

const cycle = function*(gs) {
  const lgs = LL.cycle(LL.fromList(gs))

  let g = lgs;
  let r;

  while(!isDone(g)) {
    r = g.data.next();

    if(r.done) {
      g = LL.drop(g).next;
      continue;
    }

    yield r.value;

    g = g.next;
  }
}

const peeked = (g) => ({
  g,
  _next: g.next(),
  peek: function() {
    return this._next;
  },
  next: function() {
    return withConst(this._next || this.g.next())(n => (
      this._next = this.g.next(),
      n
    ))
  },
  [Symbol.iterator]: function() {
    return this;
  }
})

const peek = (g) => g.peek().value

const next = (g) => g.next().value

const takeWhilePeeked = (p) => function*(g) {

  while(!g.peek().done) {
    if(!p(g.peek().value)) break;

    yield g.next().value;
  }

}


const skipIf = (p) => function*(g) {
  for(let x of g) {
    if(p(x))
      continue;

    yield x;
  }
}

const filter = (p) => skipIf(compose(p, r => !r))

const passThrough = (f) => function*(g) {
  for(let x of g) {
    f(x);
    yield x;
  }
}

const mapAfterFirst = (f) => function*(g) {
  yield  g.next().value;
  yield* mapGen(f)(g);
}

const join = function*(gg) {
  for(let g of gg)
    yield* g
}

const runConstantly = (f) => join(fix(f)())

const emptyGen = function*() {}()

const allButLast = p => 
    takeWhilePeeked(_ => !p.g.peek().done)

const fixM = (f) => function*(r) {
  let g = f(r);

  while(!isDone(g)) {
    for(let x of g) {
      r = x;
      yield x;
    }

    g = f(r);
  }
}

const onLast = (f) => (g) =>
  withConst(peeked(g))(p =>
    andThen(allButLast(p), f(next(p)))
  )

const foldGen = (f) => (g) =>
  fixM(r => withConst(next(g))(v => 
    isDone(v) ? null : f(v, r)
  ))

const mergeF = (p, m, g) => (f) => (last) =>
  withConst(peek(g))(x =>
    isDone(x) ? null 
    : isDone(last) ? f()(next(g))
    : p(last, x) ? f()(m(last, next(g)))
    : last
  )

const merge = (p, m) => (g) => 
  fix(_ =>
    fixed(mergeF(p, m, peeked(g)))(null)
  )()

module.exports = {
  andThen,
  bind,
  cycle,
  constGen,
  consume,
  fix,
  inOrder,
  inc,
  mapGen,
  print,
  range,
  repeat,
  takeWhile,
  toList,
  fromList,
  mapGenFirst,
  takeN,
  peeked,
  skipIf,
  passThrough,
  mapAfterFirst,
  peek,
  next,
  takeWhilePeeked,
  join,
  runConstantly,
  emptyGen,
  fixM,
  isDone,
  foldGen,
  onLast,
  filter,
  merge
}
