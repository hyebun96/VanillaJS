### inner / outer

---

- innerHTML : 지정한 요소 태그를 제외한 안쪽 태그만 값을 가져온다. 자기자신 미포함
- outerHTML : 지정한 요소 태그도 포함하여 값을 가져오고 선택한 엘리먼트를 포함해서 처리. 자기자신 포함

```html
<div id='test'>TEST</div>
<script type="text/javascript">
	alert(document.getElementById("test").innerHTML); // 결과는 TEST
	alert(document.getElementById("test").outerHTML); // 결과는 <div id="test">TEST</div>
</script>
```

### Element.insertAdjacentHTML()

---

- insertAdjacentHTML()메서드는 HTML or XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가한다.
- 이미 사용중인 element는 다시 파싱하지 않는다. 그러므로 element안에 존재하는 element를 건드리지 않는다. innerHTML보다 작업이 덜 듬으로 빠르다.

### 구문

---

```jsx
element.insertAdjacentHTML(position, text);
```

- position

    (1) 'beforebegin' : element 앞에

    (2) 'afterbegin' : element안에 가장 첫번째 child

    (3) 'beforeend' : element안에 가장 마지막 child

    (4) 'afterend' : element뒤에

- text(인자)는 HTML 또는 XML로 해석될 수 있는 문자열이고(html code), (DOM) tree 삽입 가능

```html
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

### 예시

---

```jsx
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjcentHTML('aftered', '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two>two</div>
```