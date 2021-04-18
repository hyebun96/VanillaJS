# inner, outer의 정리

### innerHTML
~~~
const content = element.innerHTML;
element.innerHTML = htmlString;
~~~
+ HTML에 넣어주는 것
+ const title로 document에 있는 id="title"을 가져와, HTML의 object인 title에 새로운 값을 넣어 줌
+ 즉, 새로운 태그를 그 안에 넣을 수 있음
<br/><br/>

### innerText
~~~
const renderedText = htmlElement.innerText;
htmlElement.innerText = string;
~~~
+ HTMLElement 인터페이스의 innerText속성은 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타냄
+ innerText는 사용자가 커서를 이용해 요소의 콘텐츠를 선택하고 클립보드에 복사했을 때 얻을 수 있는 텍스트의 근삿값을 제공
+ 즉, 단순히 텍스트만 넣을 수 있음
<br/><br/>

### outerHTML
~~~
var content = element.outerHTML;
element.outerHTML = htmlString;
~~~
+ 속성 요소의 자식 요소를 포함하여 요소를 나타내는 직렬화 된 HTML 파편을 가져옴
+ 주어진 문자열에서 파싱한 노드로 요소를 대체
+즉, 아예 태그까지 변경
<br/><br/>

### outerText
~~~
const renderedText = htmlElement.outerText;
htmlElement.outerText = string;
~~~
+즉, 내용을 바꾸되 새로운 태그는 넣을 수 없고 다만 텍스트만 넣을 수 있음
<br/><br/>