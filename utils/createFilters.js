import isMultilevel from './isMultilevel';
import formatItem from './formatItem';
import createWrapper from './createWrapper';

const createMultiLevel = (filter) => {
  const filterOperator = Object.keys(filter)[0];
  const wrapperOneLevel = createWrapper();
  const groupLength = filter[filterOperator].length;

  for (let index = 0; index < groupLength; index++) {
    const el = filter[filterOperator][index];

    if (index) {
      const connector = document.createElement('div');
      connector.innerHTML = `<b>${filterOperator.toUpperCase()}</b>`;

      wrapperOneLevel.appendChild(connector);
    }

    if (!isMultilevel(el)) {
      wrapperOneLevel.appendChild(formatItem(el));
      continue;
    }

    wrapperOneLevel.appendChild(createMultiLevel(el));
  }

  return wrapperOneLevel;
};

const createFilters = (filter) => {
  if (!isMultilevel(filter)) {
    return formatItem(filter);
  }

  return createMultiLevel(filter);
};

export default createFilters;
