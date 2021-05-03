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
<br/>
2. Navigator.cookieEnabled
    + 쿠키 설정을 할 수 있으면 참, 아니면 거짓을 반환
<br/>

#### Geolocation Method
1. Geolocation.getCurrentPosition()
    + 장치의 현재 위치를 조사한 후 GeolocationPosition 객체로 반환
2. Geolocation.watchPosition()