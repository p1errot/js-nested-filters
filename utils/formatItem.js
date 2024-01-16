const formatItem = item => {
  const div = document.createElement('div');

  div.classList.add('item');
  div.innerHTML = `
    <code>
      column: ${JSON.stringify(item.column, undefined, 2)}<br />
      operand: ${item.operand}<br />
      value: ${item.value}<br />
    </code>
  `;

  return div;
};

export default formatItem;