export type TestObj = { state1: number; readonly state2?: string };
/** Partial 유틸 타입을 거치면 기본적으로 모든 요소가 Optional하게 변한다.*/
type MyPartial<T> = { [P in keyof T]?: T[P] };
type PracticePartial = MyPartial<TestObj>;

/**
만약 모든 요소를 Required 하면서 Readonly하도록 수정해야 한다면 어떻게 타입을 구현해야 하는가?
answer를 하단에 입력
*/
type Answer<T> = {
  readonly [P in keyof T]-?: T[P];
};
