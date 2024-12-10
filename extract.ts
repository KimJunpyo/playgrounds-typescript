/** 
Exclude와의 차이점은 단순히 같은 경우에 never를 주느냐 T를 주느냐로 나뉘어짐.
*/
type MyExtract<T, U> = T extends U ? T : never;

/** string인 타입 전부 반환됨 */
type TestExtract = MyExtract<"1" | "2", string>;

/** "2"만 가지는 타입이 반환됨 */
type TestExtract2 = MyExtract<"1" | "2", "2">;
