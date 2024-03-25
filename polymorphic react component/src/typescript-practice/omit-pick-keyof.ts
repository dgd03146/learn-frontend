export type Vowels = {
  a: 'a';
  e: 'e';
  i: 'i';
  o: 'o';
  u: 'u';
};

export type VowelOmit = Omit<Vowels, 'a' | 'o'>;
/*
type VowelOmit = {
  e: 'e';
  i: 'i';
  u: 'u';
}
*/

export type VowelPick = Pick<Vowels, 'a' | 'o'>;
/*
type VowelOmit = {
   a: 'a';
  o: 'o';
}
*/

type Vowel = keyof Vowels;
// 'a' | 'e' | 'i' | 'o'| 'u'

export const favouriteVowels: Vowel = 'i';
