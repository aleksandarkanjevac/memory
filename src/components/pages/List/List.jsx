import React from 'react';

function List() {
  const items = { ...localStorage };

  console.log(items)
  return <h1>LIST PAGE</h1>;
}

export default List;