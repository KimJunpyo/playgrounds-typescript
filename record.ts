// 객체의 타입을 지정하는 Record 구현 코드.
// keyof any는 string, number, symbol을 의미한다.
// 객체의 키값으로 string, number, symbol인 요소들을 전달 받고, 객체의 value 타입은 두번째 매개변수로 전달받는다.

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

const Test1: MyRecord<string | number, string | number> = { 1: "test1", b: 2 };
// 객체의 value값에 number가 있어서 타입에러.
const Test2: MyRecord<string, string> = { 1: "test1", b: 2 };
// 객체의 value값에 string이 있어서 타입에러.
const Test3: MyRecord<number, number> = { 1: "test1", b: 2 };
