declare global {
  interface Array<T> {
    // eslint-disable-next-line no-unused-vars
    set: (index: number, value: any) => Array<T>;
    first: () => T | undefined;
    last: () => T | undefined;
    findByID: (id: any, idKey?: string) => T | undefined;
    findBy: (attribute: string, value: any) => T | undefined;
  }
  interface String {
    // eslint-disable-next-line no-unused-vars
    capitalize: (all: boolean) => String;
  }
}

Array.prototype.set = function (index: number, value: any) {
  this[index] = value;
  return this;
};
Array.prototype.first = function () {
  if (!this.length) return undefined;
  return this[0];
};
Array.prototype.last = function () {
  if (!this.length) return undefined;
  return this[this.length - 1];
};
Array.prototype.findByID = function (id: any, idKey: string = 'id') {
  if (!this.length) return undefined;
  return this.find(item => item[idKey] === id || item._id === id);
};
Array.prototype.findBy = function (attribute: string, value: any) {
  if (!this.length) return undefined;
  return this.find(item => item[attribute] === value);
};

function capitalizeFirst(word: String): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
String.prototype.capitalize = function (all: boolean = false) {
  if (all) return this.split(' ').map(capitalizeFirst).join(' ');
  return capitalizeFirst(this);
};

// this is just to make this file a module
export {};
