/*
 * @Description: 
 * @Author: 小羽
 * @LastEditors: 小羽
 * @Date: 2021-09-16 22:29:30
 * @LastEditTime: 2021-09-16 23:21:42
 */
import React from 'react';
import './App.less';
import logoImage from './assets/images/logo.jpg'

const potrace = require('potrace');
const { useState, useEffect } = React;

function App() {
  const [svgImage, setsvgImage] = useState('')
  useEffect(() => {
    imageToSvg()
  }, []);
  const imageToSvg = () => {
    potrace.trace(logoImage, (err, svg) => {
      if (svg) {
        setsvgImage(svg)
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-image' dangerouslySetInnerHTML={{ __html: svgImage }} />
      </header>
    </div>
  );
}

export default App;
