const createTitle = (text) => {
  const title = document.createElement('p');

  title.classList.add('filter-title');
  title.innerHTML = text;

  return title;
};

export default createTitle;
