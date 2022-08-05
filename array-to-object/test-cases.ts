import type { Equal, Expect } from '@type-challenges/utils'

const array = ['tesla', 'model 3', 'model X', 'model Y']
const arrayNumber = [1, 2, 3, 4]
const arrayMix = [1, '2', 3, '4']

type cases = [
  Expect<Equal<ArrayToObject<typeof array>, Record<string, string>>>,
  Expect<Equal<ArrayToObject<typeof arrayNumber>, Record<number, number>>>,
	// Expect<Equal<ArrayToObject<typeof arrayMix>, Record<string|number, string|number>>>,
]

// @ts-expect-error
type error = ArrayToObject<[[1, 2], {}]>


type ArrayToObject<T extends (number| string| symbol)[]> = {
	[P in T[number]]: P;
}