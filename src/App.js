import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Medical Dictionary</h1>
      </header>
      <main className="main">
        <div className="side-bar">
          <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-btn">Go</button>
          </div>
          <div className="word-list">
            <span className="word">Hi</span>
            <span className="word">Hello</span>
            <span className="word">Here</span>
            <span className="word">Him</span>
            <span className="word">Her</span>
            <span className="word">His</span>
            <span className="word">Hi</span>
            <span className="word">Hello</span>
            <span className="word">Here</span>
            <span className="word">Him</span>
            <span className="word">Her</span>
            <span className="word">His</span>
            <span className="word">Hi</span>
            <span className="word">Hello</span>
            <span className="word">Here</span>
            <span className="word">Him</span>
            <span className="word">Her</span>
            <span className="word">His</span>
            <span className="word">Hi</span>
            <span className="word">Hello</span>
            <span className="word">Here</span>
            <span className="word">Him</span>
            <span className="word">Her</span>
            <span className="word">His</span>
          </div>
        </div>
        <div className="result-page">
          <h2>Hi</h2>
          <p>Used when greting somone</p>
          <hr />
          <h2>examples</h2>
          <h3>example #1</h3>
          <p>Hi every one.</p>
          <h3>example #2</h3>
          <p>Hi there, my name is Nour</p>
        </div>
      </main>
    </div>
  );
}

export default App;
