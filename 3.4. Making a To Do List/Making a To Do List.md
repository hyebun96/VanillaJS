# Making a To Do List

### Node.appendChild()
+ 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
+ 만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild()메소드는 노드를 현재 위치에서 새로운 위치로 이동시킴

~~~
var aChild = element.appendChild(aChild);
~~~
<br/>

#### 예시
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
<br/>

### LocalStorage
+ local storage에는 자바스크립트의 data를 저장할 수 ❌
+ 오로지 String 만 저장 가능
+ Object또한 String으로 변경해 주어여함
+ stringify : 자바스크립트의 Object를 String으로 변경
~~~
JSON.stringify([Object]);
~~~
<br/>

### JSON
+ Javascript Object Notation
+ 데이터를 전달할때, 자바스크립트가 그걸 다룰 수 있도록 Object로 바꿔주는 기능
+ Object를 String으로 변환해 주기도 함
+ String을 Object로 변환해 주기도 함
<br/>

### Node.removeChild()
~~~
var oldChild = node.removeChild(child);
~~~
+ Dom에 있는 자식노드를 지워줌
+ node는 자식의 부모이다
+ oldChild는 제거된 자식 노드를 참조함
<br/>

### Array.prototype.filter()
+ array의 모든 아이템을 통해 함수를 실행하고 
+  true아이템만 가지고 array를 만듬
~~~
arr.filter(callback(element[, index[, array]])[, thisArg])
~~~
+ callback : 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버린다.
+ element : 처리할 현재요소
+ index : 처리할 현재 요소의 인덱스
+ array : filter를 호출한 배열
+ thisArg : callback을 실행할때, this로 사용하는 값
<br/>

#### 예시
~~~
const words = ['spray', 'limit', 'elite', 'exuberant','destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]  
~~~
<br/>

### Array.ptototype.forEach()
+ 주어진 함수를 배열 요소 각각에 대해 실행
~~~
arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
~~~
<br/>

#### 예시
~~~
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
~~~