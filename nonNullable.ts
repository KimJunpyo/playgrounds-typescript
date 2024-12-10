/**
 * null이나 undefined인 경우에는 반환하지 않고, 그렇지 않은 경우에는 반환을 하는 타입.
 */
type MyNonNullable<T> = T extends null | undefined ? never : T;
type Test = MyNonNullable<string | number | null | undefined>;

/**
 * 최근의 NonNullable 타입은 다음과 같이 변경되었다.
 * {}는 null과 undefined를 제외한 모든 타입을 의미한다.
 */
type NewNonNullable<T> = T & {};
