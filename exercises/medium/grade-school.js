export class GradeSchool {
  db = {};

  roster() {
    const cloned = {};
    for (const grade in this.db) {
      cloned[grade] = [...this.db[grade]];
    }
    return cloned;
  }
  add(name, grade) {
    this.dedup(name);
    if (this.db[grade]) {
      this.db[grade].push(name);
      this.db[grade].sort();
      return this.db;
    }
    this.db[grade] = [name];
    return this.db;
  }
  grade(num) {
    return this.roster()[num] ?? [];
  }
  dedup(name) {
    for (const key of Object.keys(this.db)) {
      let i = this.db[key].indexOf(name);
      if (i != -1) return this.db[key].splice(i, 1);
    }
  }
}
