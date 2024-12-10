/** 
T가 U에 해당하는 경우를 never로 처리하고, 나머지는 그대로 반환하는 MyExclude 유틸리티 타입
*/
type MyExclude<T, U> = T extends U ? never : T;

/** 
제거할 옵션으로 string인 타입을 제거하라고 지시하였고, 모든 요소가 string이므로 never type이 반환됨.
*/
type TestExclude = MyExclude<"1" | "2", string>;

/** 
"2"번이라는 명확한 요소를 제거하라고 지시하였고, T가 U인 경우 즉 타입이 같은 경우를 never 처리하였으므로 "1" 타입만 반환됨.
*/
type TestExclude2 = MyExclude<"1" | "2", "2">;
