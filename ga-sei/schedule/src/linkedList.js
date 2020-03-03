const { withConst, trace } = require('./util.js');

const node = (x) => ({ data: x, next: null, prev: null })

const link = (a, b) => (
  a.next = b,
  b.prev = a,
  b
)

const addLink = (ll, x) => link(ll, node(x))

const drop = (node) => {
  if(node.prev == null && node.next == null)
    return null;

  if(node.prev != null)
    node.prev.next = node.next;

  if(node.next != null)
    node.next.prev = node.prev;

  const e = node.prev;

  node.next = null;
  node.prev = null;

  return e;
}

const fromList = (l) => 
  l.length < 1 ? null
  : withConst(node(l.shift()))(x0 => ( 
      l.reduce(addLink, x0),
      x0
    )
  )

const withList = (f) => (ll) => (f(ll), ll)

const loopOver = (f) => withList(ll => {
  let x = ll;
  while(x != null || x != undefined) {
    x = f(x);
    x = x.next;
  }
})

const forEach = (f) => loopOver(x => (
  f(x),
  x
))

const map = (f) => loopOver(x => (
  x.data = f(x.data),
  x
))

const filter = (p) => loopOver(x => p(x) ? x : drop(x))

const filterEmpty = filter(x => x.data != null && x.data != undefined)

const end = (shift) => (ll) => {
  let r = ll;
  let h;

  while(r != null) {
    h = r
    r = shift(h);
  }

  return h;
}

const head = end(x => x.prev)
const tail = end(x => x.next)

const cycle = (ll) =>
  withConst(head(ll))(h =>
  withConst(tail(ll))(t => (
    h.prev = t,
    t.next = h,
    h
  )))

module.exports = {
  fromList,
  withList,
  loopOver,
  drop,
  forEach,
  filter,
  filterEmpty,
  map,
  cycle,
}
