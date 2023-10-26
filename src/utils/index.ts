type ObjectArray = Array<{[key: string]: any}>;

export function findPropertyIndex(array: ObjectArray, property: string) {
  return array.findIndex(object => object.hasOwnProperty(property));
}
