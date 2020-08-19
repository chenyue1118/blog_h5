import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(myIcon);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
