import { seedRandom } from './seedRandom';
import { WORDLES, NUM_WORDLES, EXPANDED_LIST, NUM_EXPANDED } from './words';

export function generateWordlist(
  length: number = 1000,
  useExpandedList: boolean = false
) {
  const seed = seedRandom();
  const generator = 163; // n is a cyclic group so I can put any prime as a generator (maybe?)

  const wordlist = [];

  if (useExpandedList) {
    for (let i = 0; i < length; i++) {
      wordlist.push(EXPANDED_LIST[(seed + generator * i) % NUM_EXPANDED]);
    }
  } else {
    for (let i = 0; i < length; i++) {
      wordlist.push(WORDLES[(seed + generator * i) % NUM_WORDLES]);
    }
  }

  return wordlist;
}
