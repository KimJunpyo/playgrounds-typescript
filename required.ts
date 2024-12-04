import { TestObj } from "./partial";

// -?옵션을 이용하면 모든 요소가 Required하게 변한다.
type MyRequired<T> = { [P in keyof T]-?: T[P] };
type PracticeRequired = MyRequired<TestObj>;
