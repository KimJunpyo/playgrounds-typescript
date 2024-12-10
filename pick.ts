/** 두 가지 타입을 전달 받아서 먼저 전달받은 타입 내에서 뒤에 들어온 타입의 속성(키)이 존재하는지 여부 파악하기 */

/** 
1. K는 특정한 전달받은 값들과 T에 대한 key값을 가질 수 있음.
2. [P in K]를 통해 P라는 변수의 값을 K값들로 처리.
3. T[P]를 통해 첫번째 인자의 타입에서 P를 key로 하는 value들을 처리.
*/
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/** 여기서 뒤에 속성에 존재하지 않는 key를 넣으면 에러가 발생. */
type PickTest = MyPick<{ a: number; b: string }, "a" | "b">;

/** 
처음부터 매개변수 K에 제약을 걸지 않고, 매핑을 할 때 K에 조건을 추가하여 T 내부의 key인 경우에만 매핑하도록 처리 
*/
type MyConditionPick<T, K> = {
  [P in K extends keyof T ? K : never]: T[P];
};

/** 에러 나지 않음. */
type ConditionPickTest = MyConditionPick<
  { a: number; b: string },
  "a" | "b" | "c"
>;

/** 
치명적인 단점으로, 만약 key값에 존재하는 경우가 없다면 해당 타입은 {}가 된다.
ts에서 {}란 객체가 아니라, null과 undefined를 제외한 모든 값을 의미하기에 해당 타입을 가진 변수는 무슨 값이든 받을 수 있게 된다.
*/
type ErrorCase = MyConditionPick<{ a: number; b: string }, "c">;
const testErrorCase: ErrorCase = { t: "asd" };
