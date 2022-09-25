# boiler-plate

Stack

frontend: React
backend: Node.js, MongoDB

실행방법

서버와 클라이언트 동시실행:
`npm run dev`

배운점

1. redux를 사용하여 상태관리
   Store안에 state을 저장 dispatch(action)을 사용해서 state를 변경 할 수 있다. action은 객체 형태이어야 한다. promise형식, function 형태로 받을 때도 있다. redux는 객체 형식으로만 받을 수 있는데 형식이 다르기 때문에 redux promise와 redux thunk를 사용해서 두가지 형태로 받을 수 있도록 도와준다.

- redux promise: redux한테 promise 받는 법을 알려준다.
- redux thunk: redux한테 function을 받는 법을 알려준다.

2. nodemon을 사용하여 보다 편하게 개발환경 실행
