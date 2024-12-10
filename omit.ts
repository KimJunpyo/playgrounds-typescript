/**
 * Omit 타입은 Pick과 Exclude를 이용하여 조합됨.
 * 핵심은 Omit 타입은 객체에서 key를 제외하는 유틸 타입이다.
 * 하단의 test 타입은 객체에서 Omit을 한게 아니기 때문에 이상한 타입이 추론된다.
 */
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type test = MyOmit<"ABS" | "PVC" | "PP" | "PET" | "HDPE" | "NONE", "NONE">;
