class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) throw new Error('This character has already been included');
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!(this.members.has(character))) this.members.add(character);
    });
  }

  toArray() {
    const arr = [];
    this.members.forEach((character) => {
      arr.push(character);
    });
    return arr;
  }
}

export default Team;
