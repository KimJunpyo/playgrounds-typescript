type Data = {
  level: number;
};

/**
 * Obj 내의 각각의 객체에서 this를 이용하여 level을 찾아 코드를 구현하려고 한다.
 * 여기서 this의 타입을 선언해줘야만 객체 내에서 this.level과 같이 코드를 접근했을때, level의 타입을 추론할 수 있다.
 * 하지만 이렇게 this를 사용하는 모든 곳에서 작성을 하기는 현실적으로 어렵다.
 */
type Methods = {
  levelUp: (this: Data & Methods) => void;
  setLevel: (this: Data & Methods, level: number) => void;
};
type Obj = {
  data: Data;
  methods: Methods;
};

type Methods2 = {
  levelUp: () => void;
  setLevel: (level: number) => void;
};

/**
 * 이 코드는 this를 각각의 메소드에서 처리하는것이 아닌, 단 한번만으로도 this의 타입을 추가해주는 타입이다.
 * ThisType으로 this가 가질 수 있는 모든 타입들을 선언해주면 된다.
 */
type Obj2 = {
  data: Data;
  methods: Methods2 & ThisType<Data & Methods2>;
};

const obj: Obj = {
  data: {
    level: 2,
  },
  methods: {
    levelUp() {
      this.level++;
    },
    setLevel(level) {
      this.level = level;
    },
  },
};
