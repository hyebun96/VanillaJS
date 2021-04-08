# DomFucntion

### DomFucntion
+ JS는 HTML에 있는 요소를 가지고 와서 객체로 생성
+ 즉, 모든 HTML은 객체가 되는 것
+ 객체는 많은 Key를 갖음
+ 우리가 찾은 객체들의 함수를 DOM형태로 변경

**DOM은 Document(HTML)에 있는 모든 것들이 다 Object(객체)가 되는 것**
~~~
const title = document.getElementById("title");
title.innerHTML = "Hi~";
~~~
innerHTML은 title안에 존재하는 method로 title을 DOM형태로 변경

### getElementById
+ fucntion으로 id에 속하는 element를 가져오는 기능을 하는 함수

### innerHTML
+ HTML에 넣어주는 것
+ const title로 document에 있는 id="title"을 가져와, HTML의 object인 title에 새로운 값을 넣어 줌
