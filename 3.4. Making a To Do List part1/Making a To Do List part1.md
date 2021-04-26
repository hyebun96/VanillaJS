# Making a To Do List part1

### Node.appendChild()
+ 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
+ 만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild()메소드는 노드를 현재 위치에서 새로운 위치로 이동시킴

~~~
var aChild = element.appendChild(aChild);
~~~
<br/>

### 예시
~~~
// 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 붙입니다.
var p = document.createElement("p");
document.body.appendChild(p);
~~~
<br/>

### Document.createElement()
+ HTML문서에서 Document.createElement() 메서드는 지정한 tagName의 HTML요소를 만들어 반환
~~~
let element = document.createElement(tagName[, options]);
~~~
+ tagName : 생성할 요소의 유형을 가리키는 문자열
+ option : is 속성 하나를 가진 ElementCreationOptions객체 속성의 값은 customElements.define()을 사용해 정의한 사용자 정의 요소