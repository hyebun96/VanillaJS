# 웹 스토리지(Web Stroage)

- 자바스크립트로 웹 개발을 하다보면  간단한 어플리케이션도 데이터를 어딘가 저장할 일이 생김
- 보통 DB에 서버나 클라우드 플랫폼에 데이터를 저장하는 경우가 多
- But, 저장해야할 데이터 중요하지 않거나, 유실되어도 무방하다면 서버단에 데이터를 저장하는 것은 낭비

### 로컬스토리지 vs. 세션스토리지

---


- 공통점

    두 기술 모두 데이터를 브라우저 상에 저장한다는 것이며, 자바스크립트 API가 완전히 동일한 형태

### 기본 API

---

- 웹 스토리지는 기본적으로 키와 값으로 이루어진 데이터를 저장할 수 있음
- 개념적으로 해시 테이블 자료 구조를 생각하시면 이해가 쉬움
- 자바스크립트 API의 기본적인 사용 방법

~~~
// 키에 데이터 쓰기
localStorage.serItem("key", value);

// 키로 부터 데이터 읽기
localStorage.getItem("key");

// 키의 데이터 삭제
localStorage.removeItem("key");

// 모든 키의 데이터 삭제
localStorage.clear();

// 저장된 키/값 쌍의 개수
localStorage.length
~~~

엄밀하게는 window.localStorage를 사용해야 하지만, window객체의 대부분의 속성이 그러하듯, 줄여서 localStorage로 로컬 스토리지 객체에 접근 가능

~~~
> localStorage.getItem('name') // null
> localStorage.getItem('email') // null
> localStroage.setItem('email', 'test@user.com'); // undefined
> localStorage.getItem('email') // "test@user.com"
> localStorage.setItme('email', 'test@admin.com'); // undefined
> localStorage.getItem('email') // "test@admin.com" 
> localStorage.removeItem('email'); // undefined
> localStorage.getItem('email'); // null
~~~

### 주의사항

---

- 웹 스토리지를 사용할 때 주의해야할 부분이 존재
- 오직 문자형(String) 데이터 타입만 지원함
- 숫자형 데이터를 로컬 스토리지에 쓰고 다시 읽어보면 숫자가 아닌 값이 나옴