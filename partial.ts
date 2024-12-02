// Partial 유틸 타입을 거치면 기본적으로 모든 요소가 Optional하게 변한다.
type OriginalPartial<T> = { [P in keyof T]?: T[P] };

type TestObj = { state1: number; readonly state2?: string };
type PracticePartial = OriginalPartial<TestObj>;

// -?옵션을 이용하면 모든 요소가 Required하게 변한다.
type RequiredPartial<T> = { [P in keyof T]-?: T[P] };
type PracticePartial2 = RequiredPartial<TestObj>;

// readonly 옵션으로 모든 요소를 읽기 전용으로 변환 가능하다.
type ReadonlyPartial<T> = { readonly [P in keyof T]: T[P] };
type PracticePartial3 = ReadonlyPartial<TestObj>;

// readonly 옵션으로 모든 요소를 읽기 전용으로 변환 가능하다.
type NotReadonlyPartial<T> = { -readonly [P in keyof T]: T[P] };
type PracticePartial4 = NotReadonlyPartial<TestObj>;

/*
만약 모든 요소를 Required 하면서 Readonly하도록 수정해야 한다면 어떻게 타입을 구현해야 하는가?
answer를 하단에 입력
**/
type AnswerPartial<T> = {
  readonly [P in keyof T]-?: T[P];
};
