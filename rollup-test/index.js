import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <div>Hello from rollup!</div>
);

ReactDom.render(<App />, document.getElementById('app'));