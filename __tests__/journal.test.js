
import Journal from './../src/journal.js';

describe('Journal', () => {
 test('should correctly create an Entry object with title and description', () => {
  const entryName = new Journal("Daniya", "studying");
  expect(entryName.title).toMatch("Daniya");
  expect(entryName.description).toMatch("studying");
 });

 test('should return 0 for a string that is only spaces', () =>{
  const newEntry = new Journal("   ", "  ");
  expect(newEntry.numberOfWords()).toEqual(0);
 });
});