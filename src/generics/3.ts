function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const mergedObject = merge({ name: "Max" }, { age: 25 });
console.log(mergedObject);
