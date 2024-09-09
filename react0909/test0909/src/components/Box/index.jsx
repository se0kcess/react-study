import React from 'react';

const Box = React.memo(() => {
  console.log('render box');
  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  };
  return <div style={style} />;
});

export default Box;
