# inner, outer의 정리

### innerHTML
~~~
const content = element.innerHTML;
element.innerHTML = htmlString;

<div id='test'>TEST</div>
<script type="text/javascript">
	alert(document.getElementById("test").innerHTML); // 결과는 TEST
</script>
~~~
+ 지정한 요소 태그를 제외한 안쪽 태그만 값을 가져온다. 자기자신 미포함
+ HTML에 넣어주는 것
+ const title로 document에 있는 id="title"을 가져와, HTML의 object인 title에 새로운 값을 넣어 줌
+ 즉, 새로운 태그를 그 안에 넣을 수 있음
<br/>

### innerText
~~~
const renderedText = htmlElement.innerText;
htmlElement.innerText = string;
~~~
+ HTMLElement 인터페이스의 innerText속성은 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타냄
+ innerText는 사용자가 커서를 이용해 요소의 콘텐츠를 선택하고 클립보드에 복사했을 때 얻을 수 있는 텍스트의 근삿값을 제공
+ 즉, 단순히 텍스트만 넣을 수 있음
<br/>

### outerHTML
~~~
var content = element.outerHTML;
element.outerHTML = htmlString;

<div id='test'>TEST</div>
<script type="text/javascript">
	alert(document.getElementById("test").outerHTML); // 결과는 <div id="test">TEST</div>
</script>
~~~
+ 지정한 요소 태그도 포함하여 값을 가져오고 선택한 엘리먼트를 포함해서 처리. 자기자신 포함
+ 속성 요소의 자식 요소를 포함하여 요소를 나타내는 직렬화 된 HTML 파편을 가져옴
+ 주어진 문자열에서 파싱한 노드로 요소를 대체
+즉, 아예 태그까지 변경
<br/>

### outerText
~~~
const renderedText = htmlElement.outerText;
htmlElement.outerText = string;
~~~
+ 즉, 내용을 바꾸되 새로운 태그는 넣을 수 없고 다만 텍스트만 넣을 수 있음
<br/>

### Element.insertAdjacentHTML()
+ insertAdjacentHTML()메서드는 HTML or XML 같은 특정 텍스트를 파싱
+ 특정 위치에 DOM tree 안에 원하는 node들을 추가
+ 이미 사용중인 element는 다시 파싱하지 않음
+ 그러므로 element안에 존재하는 element를 건드리지 않음
+ innerHTML보다 작업이 덜 듬으로 빠르다.

####  insertAdjacentHTML 구문 
~~~
element.insertAdjacentHTML(position, text);
~~~
<br/>

#### insertAdjacentHTML position
+ 'beforebegin' : element 앞에
+ 'afterbegin'  : element안에 가장 첫번째 child
+ 'beforeend'   : element안에 가장 마지막 child
+ 'afterend'    : element뒤에

\*\* text(인자)는 HTML 또는 XML로 해석될 수 있는 문자열이고(html code), (DOM) tree 삽입 가능 \*\*
~~~
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
~~~
<br/>

#### insertAdjacentHTML 예시
~~~
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjcentHTML('aftered', '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two>two</div>
~~~
