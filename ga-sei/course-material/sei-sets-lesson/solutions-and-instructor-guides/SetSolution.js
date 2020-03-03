class Set {
  constructor(list = []) {
    this.values = [];
    list.forEach(a => this.insert(a));
  }

  length() {
    return this.values.length;
  }

  insert(val) {
    if (!this.values.includes(val)) {
      this.values.push(val);
    }
  }

  remove(val) {
    if (this.values.includes(val)) {
      this.values.splice(this.values.indexOf(val), 1);
    }
  }

  has(val) {
    return this.values.includes(val);
  }

  union(set) {
    return new Set([...this.values, ...set.values]);
  }

  intersect(set) {
    return new Set(this.values.filter(x => set.has(x)));
  }

  difference(set) {
    let set1 = this.values.filter(x => !set.has(x));
    let set2 = set.values.filter(x => !this.has(x));
    return new Set([...set1, ...set2]);
  }
}

module.exports = {
  Set
};
