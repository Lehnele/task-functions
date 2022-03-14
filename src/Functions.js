/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
  return x => {
    return x > num
  }
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
  return s => {
    if (s.indexOf(substr) >= 0) {
      console.log(s.indexOf(substr))
      return true
    }
  }
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
  return x => {
    return num * x
  }
}
