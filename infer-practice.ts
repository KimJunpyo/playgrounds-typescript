/**
 * infer 타입으로 배열의 요소 타입을 유추하는 타입
 */
type El<T> = T extends (infer E)[] ? E : never;

/**
 * 함수의 파라미터 타입을 추론하여 튜플로 반환해주는 타입
 */
type MyParameters<T> = T extends (...asd: infer P) => any ? P : never;
type ParameterTest = MyParameters<(asd: string, sdf: number) => string>;

/**
 * 생성자의 파라미터 타입을 추론하여 튜플로 반환해주는 타입
 */
type MyConstructorParameters<T> = T extends abstract new (
  ...asd: infer P
) => any
  ? P
  : never;
type ConstructorParameterTest = MyConstructorParameters<
  new (a: string, b: number) => any
>;

type MyReturnType<T> = T extends (...args: any) => infer P ? P : any;
type ReturnTest = MyReturnType<(asd: string, sdf: number) => string>;

type MyConstructorReturnType<T> = T extends abstract new (
  ...asd: any
) => infer P
  ? P
  : any;
type ConstructorReturnTest = MyConstructorReturnType<
  new (a: string, b: number) => number
>;
