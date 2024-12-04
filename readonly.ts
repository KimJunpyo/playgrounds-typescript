import { TestObj } from "./partial";

// readonly 옵션으로 모든 요소를 읽기 전용으로 변환 가능하다.
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
type PracticeReadonly = MyReadonly<TestObj>;
type test = Readonly<TestObj>;

// readonly 옵션을 모두 제거할 수 있다.
type MyNotReadonly<T> = { -readonly [P in keyof T]: T[P] };
type PracticeNotReadonly = MyNotReadonly<TestObj>;
