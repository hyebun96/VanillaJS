# Event and Event handler

### Event 
+ Envent는 웹사이트에서 반응하는 것들을 뜻함
+ click, resize, submit, load, before

### addEvnetListener()
+ addEvnetListener은 event를 감지(listen)
+ addEvnetListener() 메소드는 지정한 event가 대상(target)에 전달될 때마다 호출할 함수를 설정

### addEvnetListener 구문
~~~
target.addEventListener(type, listener[, option])
~~~
+ type : 반응할 이벤트 유형을 나타내는 문자열
+ listener : 지정된 type의 이벤트가 발생했을 때 알림을 받는 객체. EventListener 인터페이스 또는 JavaScript function를 구현하는 객체여야 함

### 윈도우 창의 Resize 이벤트
~~~
    function handleResize(){
        console.log("I have been resized");
    }
    window.addEventListener("resize", handleResize()); // handleResize 함수 자동 호출
    window.addEventListener("resize", handleResize); // 원할 때 handleResize호출(resize event가 발생할 때)
~~~

### 윈도우 창의 event 매개변수
+ event 매개변수는 JavaScript로 부터 온 것
+ 이벤트를 다룰 함수를 만들 때마다, JavaScript는 자동적으로 함수를 객체에 붙임
+ 이벤트가 발생할 때마다 이벤트 객체 호출
~~~
    function handleResize(envet){
        console.log(evnet);
    }
    window.addEventListener("resize", handleResize); // 원할 때 handleResize호출
~~~

