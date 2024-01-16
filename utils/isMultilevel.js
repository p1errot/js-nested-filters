const isMultilevel = (filter) => {
  return Object.hasOwn(filter, 'and') || Object.hasOwn(filter, 'or');
};

export default isMultilevel;
