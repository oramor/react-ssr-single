import { renderToString } from 'react-dom/server';

function App() {
  return <div>Hello World</div>;
}

const html = renderToString(<App />);
console.log(html);