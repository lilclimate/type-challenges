import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

// 1. 第一个元素不限制类型
// 2. 空数组返回never

// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number]? T[0]: never;
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never; 


