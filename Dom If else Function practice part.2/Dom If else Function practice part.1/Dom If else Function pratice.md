# Dom If else Function pratice part.2

🌈 지금까지와 다르게 HTML, CSS, JavaScript를 완벽히 분리

### Element.className
+ className은 특정 엘리먼트의 클래스 속성의 값을 가져오거나 설정 가능
~~~
var cName = elementNodeReference.className;
elementNodeReference.className = cName;
~~~
+ cName은 현재 요소의 클래스 혹은 공백으로 구분된 클래스들의 표현하는 문자열 변수
<br/><br/>

#### 예제
~~~
let elm = document.getElementById('item');

if(elm.className == 'active'){
    elm.className = ' inactive';
}else{
    elm.className = 'active';
}
~~~
+ 많은 언어에서 DOM조작을 위해 사용되는 "class" 키워드와 혼란을 줄이기 귀하여 class 대신 className이라는 프로퍼티 명을 사용
<br/><br/>

### Elemnet.classList
+ classList는 엘리먼트의 클래스 속성의 컬렉션인 활성 DOMTokenList를 반환하는 읽기 전용 프로퍼티
+ classList 사용은 공백으로 구분된 문자열인 element.className을 통해 엘리먼트의 클래스 목록에 접근하는 방식을 대체하는 간편한 방법
~~~
const elementClasses = elementNodeRederence.classList;
~~~

+ elementClasses는 elementNodeReference의 클래스 속성을 나타내는 DOMTokenList이다. 만약 클래스 속성이 설정되어 있지 않거나 비어있다면 elementClasses.length는 0을 반환
+ element.classList 그 자체는 읽기 전용이지만 add(), remove() 메서드를 이용하여 변형 가능
<br/><br/>

#### classList => method type
1. toggle
~~~
classList.toggle(String [,force])
~~~
+ 하나의 인수만 있을떄, 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환
+ 두번째 인수가 있을떄, 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거
<br/>

2. contains
~~~
classList.contains(String)
~~~
+ 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인