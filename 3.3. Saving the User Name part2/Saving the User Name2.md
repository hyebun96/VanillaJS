# Saving the User Name part2

### Form
+ 사용자와 웹사이트 또는 어플리케이션이 서로 상호 작용하는 것 중 중요한 기술 중에 하나
+ 폼은 사용자가 웹사이트에 데이터를 전송하는 것을 허용
+ 일반적으로 데이터는 웹 서버로 전송되지만 웹페이지가 데이터를 사용하기 위해서 사용 가능
+ Submit (제출) 하는것

### Event
+ 이벤트는 거품과 같은 것
+ form을 제출하는 event가 발생하면 document 까지 올라가 사라짐
+ 이런 경우, 필요한 함수 => 이벤트 금지함수
~~~
elementNodeRederence.preventDefault();
~~~

