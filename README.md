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

몽고DB
1. Model : Schema를 감싸주는 역할을 한다.
2. Schema: 정보를 지정해 줄 수 있는 역할
3. SSH: 시큐릿 쉘
4. Body-parser: client의 정보들을 서버에서 받게 도와주는 역할
5. nodemon : 
6. 환경변수 process.env.NODE_ENV 
	- Local 환경에서 개발:
	- Deploy환경에서 개발: 
7. bcrypt:  데이터 암호화 도와주는 라이브러리
8. cookie-parser: 쿠키에 암호를 저장 할 수 있게 도와주는 라이브러리
9. toString() 과  hextoString()의 차이:
- `toHexString()' : ### toHexString()

Return the ObjectID id as a 24byte hex string representation.

해석해보면 ObjectID 형태의 id를 24바이트의 hex 문자열로 바꾸어 리턴해주는 함수이다.

사실, 코드를 뜯어보면 `toString()`은 `toHexString()`을 리턴한다.
