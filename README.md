# AKA ENGLISH

## 개요

학생 회원은 영어 문제를 풀고 그 결과를 확인할 수 있고 선생님 회원은 영어 문제를 추가, 수정, 삭제할 수 있는 앱입니다.

## 기술 스택

### Frontend

-   React
    - custom hook, context을 통해서 여러 component에서 사용하는 로직을 정리 해놓았습니다.
-   React Router
    -   Protected Route: 권한이 없는 유저가 url을 통해 특정 페이지에 접근하는 시도를 차단했습니다.
    -   Outlet: Header의 코드가 중복되는 것을 방지했습니다.
-   React Query
    -   custom hook으로 감싸 효율적인 캐싱 관리를 할 수 있도록 했습니다.
    -   서버가 없는 상황에서도 dummy data를 사용할 수 있도록 통신을 담당하는 client는 별도의 객체화했습니다.
-   SCSS
    -   모듈화, 상속, 변수 등 다양한 전처리기의 기능을 활용했습니다.

### Backend

-   Firebase

## 테스트용 계정

-   학생
    -   id: akastudent
    -   pw: test1234
-   선생님
    -   id: akateacher
    -   pw: test1234
