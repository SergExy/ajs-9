import Character from '../Character';
import Team from '../Team';

test('test add p1 to team', () => {
  const team = new Team();
  const p1 = new Character('name1', 'Bowman');
  team.add(p1);

  expect(team.members).toContain(p1);
});

test('test add p1 to team again', () => {
  const team = new Team();
  const p1 = new Character('name1', 'Bowman');
  team.add(p1);

  expect(() => team.add(p1)).toThrow(Error);
  expect(() => team.add(p1)).toThrow('This character has already been included');
});

test('test add p1 and p2 to team', () => {
  const team = new Team();
  const p1 = new Character('name1', 'Bowman');
  const p2 = new Character('name2', 'Bowman');
  team.addAll(p1, p2);

  expect(team.members).toContain(p1);
  expect(team.members).toContain(p2);
});

test('test add double p1 and p2 to team', () => {
  const team = new Team();
  const p1 = new Character('name1', 'Bowman');
  const p2 = new Character('name2', 'Bowman');

  expect(() => team.add(p1, p2, p1)).not.toThrow();
});

test('test team member toArray', () => {
  const team = new Team();
  const p1 = new Character('name1', 'Bowman');
  const p2 = new Character('name2', 'Bowman');
  team.addAll(p1, p2);

  const expected = [
    {
      name: 'name1',
      type: 'Bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'name2',
      type: 'Bowman',
      health: 100,
      level: 1,
    },
  ];

  const res = team.toArray();

  expect(res).toEqual(expected);
});
