import {findPropertyIndex} from '../../src/utils';

describe('findPropertyIndex', () => {
  test('should return the index of the first object with a backgroundColor property', () => {
    const array = [
      {color: 'red'},
      {backgroundColor: 'blue'},
      {color: 'green', backgroundColor: 'yellow'},
    ];
    expect(findPropertyIndex(array, 'backgroundColor')).toBe(1);
  });

  test('should return -1 if no object has a backgroundColor property', () => {
    const array = [
      {color: 'red'},
      {font: 'Arial'},
      {color: 'green', font: 'Helvetica'},
    ];
    expect(findPropertyIndex(array, 'backgroundColor')).toBe(-1);
  });

  test('throws an error if argument is not an array', () => {
    const obj = null;
    // @ts-ignore
    expect(() => findPropertyIndex(obj)).toThrow();
  });

  it('returns -1 if property is not provided', () => {
    const array = [
      {name: 'John', age: 30},
      {name: 'Jane', age: 25},
    ];
    // @ts-ignore
    const index = findPropertyIndex(array, undefined);
    expect(index).toEqual(-1);
  });

  it('returns -1 if property is not a string', () => {
    const array = [
      {name: 'John', age: 30},
      {name: 'Jane', age: 25},
    ];
    // @ts-ignore
    const index = findPropertyIndex(array, 123);
    expect(index).toEqual(-1);
  });
});
