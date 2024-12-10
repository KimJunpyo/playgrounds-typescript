const a = [1, 2, 3];
const b = ["1", "2"];
const c = [true, 2, "3"];
a.forEach(() => {});

a.myForEach((item) => console.log(item));
a.myForEach((item, idx) => console.log(item, idx));
a.myForEach((item, idx, array) => console.log(item, idx, array));
b.myForEach((item) => console.log(item.slice(0)));
c.myForEach((item) => {
  if (typeof item === "string") {
    item.slice(0);
    return;
  }
});
c.myForEach(function () {
  console.log(this);
});
c.myForEach(
  function () {
    console.log(this.d);
  },
  { d: "asd" }
);

interface Array<T> {
  myForEach<K = Window>(
    callback: (this: K, item: T, idx: number, array: Array<T>) => void,
    thisArgs?: K
  ): void;
}
