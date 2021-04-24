// const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jenny Doe', 'James Doe', 'Joeseph Doe']

// const person = 'James Doe'

// // console.log(names.indexOf(person))

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === person) {
//     console.log(i)
//   }
// }

// const nums = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//   48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//   72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//   96, 97, 98, 99
// ]

// const x = // ??

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === x) {
//     console.log(i)
//   }
// }

// const binarySearch = x => {
//   let min = 0
//   let max = nums.length - 1

//   while (min <= max) {
//     const index = Math.floor((min + max) / 2)
//     const elem = nums[index]

//     if (elem < x) {
//       min = index + 1
//     } else if (elem > x) {
//       max = index - 1
//     } else {
//       return index
//     }
//   }

//   return false
// }

// console.log(binarySearch(0))
// console.log(binarySearch(99))
// console.log(binarySearch(57))
// console.log(binarySearch(102))
