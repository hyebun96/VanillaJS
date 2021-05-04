# Getting the Weather 

[openweathermap](https://openweathermap.org/ "openweathermap")
<br/>

### Navigator
+ Navigator인터페이스는 사용자 에이전트의 상태와 신원정보를 나타냄
+ 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용
+ Navigator 객체는 window.navigator 읽기 전용 속성으로 접근할 수 있음
<br/>

#### 속성
1. Navigator.geolocation 🌏
    + 장치의 위치 정보에 접근할 수 있는  Geolocation 객체를 반환
    + Geolocation : 장치의 위치를 가져오는 방법으로, Geolocation 을 사용하면 웹 사이트나 웹 앱이 위치 정보를 활용해 현재 위치 제공
2. Navigator.cookieEnabled
    + 쿠키 설정을 할 수 있으면 참, 아니면 거짓을 반환
<br/>

#### Geolocation Method
1. Geolocation.getCurrentPosition()
    + 장치의 현재 위치를 조사한 후 GeolocationPosition 객체로 반환
2. Geolocation.watchPosition()
    + 장치의 위치가 변경될 때마다 호출하는 콜백을 등록
    + 반환값은 콜백의 식별자로 쓸 수 있는 long 값
3. Geolocation.clearWatch()
    + watchPosition()을 이용해 등록한 특정 콜백을 삭제
<br/>


### API
+ Application Programming Interface
+ 다른 서버로 부터 손쉽게 데이터를 가져올 수 있는 수단
+ Onlye data
<br/>

#### Javascript API 
+ refresh를 하지 않아도 값을 계속 실시간으로 가져옴
+ Javascript는 뒤에서 계속 작용
<br/>

#### fetch()
+ 안에는 데이터가 들어가면 됌
+ http://를 넣어줌
+ ❗ 주의 : 따옴표가 아닌 backtick(`)을 사용할 것