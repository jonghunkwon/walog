---
title: "redux"
description: "redux 상태관리를 소개합니다."
date: "2021-12-30"
author: "kildong.hong"
category: "상태관리"
tags: ["redux"]
---

## redux 개념

### 액션 (Action)

상태에 어떠한 변화가 필요하게 될 땐, 우리는 액션이란 것을 발생시킵니다. 이는, 하나의 객체로 표현되는데요, 액션 객체는 다음과 같은 형식으로 이뤄져있습니다.

```js
{
  type: "TOGGLE_VALUE";
}
```

액션 객체는 type 필드를 필수적으로 가지고 있어야하고 그 외의 값들은 개발자 마음대로 넣어줄 수 있습니다.

```js
{
    type: "ADD_TODO",
    data: {
    id: 0,
    text: "리덕스 배우기"
    }
}
```

### 액션 생성함수 (Action Creator)

액션 생성함수는, 액션을 만드는 함수입니다. 단순히 파라미터를 받아와서 액션 객체 형태로 만들어주죠.

```js
function changeColor(color) {
  return {
    type: "CHANGE_COLOR",
    color,
  };
}

const changeColor = (color) => ({
  type: "CHANGE_COLOR",
  color,
});
```

### 리듀서 (Reducer)

리듀서는 변화를 일으키는 함수입니다. 리듀서는 두가지의 파라미터를 받아옵니다.

```js
function reducer(state, action) {
  if (state === undefined) {
    return { color: "yellow" };
  }

  var newState;
  if (action.type === "CHANGE_COLOR") {
    newState = Object.assign({}, state, { color: action.color });
  }

  return newState;
}
```

리듀서는, 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환합니다.

### 스토어 (Store)

리덕스에서는 한 애플리케이션 당 하나의 스토어를 만들게 됩니다. 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있습니다.

```js
var store = Redux.createStore(reducer);
```

### 디스패치 (dispatch)

디스패치는 스토어의 내장함수 중 하나입니다. 디스패치는, 액션을 발생 시키는 것 이라고 이해하시면 됩니다. dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.

그렇게 호출을 하면, 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새로운 상태를 만들어줍니다.

```javascript
store.dispatch({ type: "CHANGE_COLOR", color: "red" });
```

### 구독 (subscribe)

구독 또한 스토어의 내장함수 중 하나입니다. subscribe 함수는, 함수 형태의 값을 파라미터로 받아옵니다. subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출됩니다.

```javascript
store.subscribe(green);
```

### 예제코드

<a href="https://github.com/supreme-developer/redux/tree/master/used-redux" target="_blank" style="font-size=30px; color: #4dabf7; text-decoration:underline;">https://github.com/supreme-developer/redux/tree/master/used-redux</a>
