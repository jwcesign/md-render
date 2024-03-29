import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function App() {
  const [readme, setReadme] = useState("")
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/alist-org/alist/v3.33.0/README.md")
    .then(response => response.text())
    .then(text => setReadme(text))
  })
  return (
    <div className="App">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {readme}
      </Markdown>
    </div>
  );
}

export default App;
