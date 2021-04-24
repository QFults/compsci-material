const nums = [
  31, 67, 62, 86, 63, 15, 73, 1, 95, 93, 46, 27,
  82, 77, 49, 57, 86, 18, 46, 49, 53, 81, 93, 57,
  3, 98, 46, 40, 41, 30, 12, 17, 83, 85, 9, 64,
  2, 68, 85, 99, 89, 74, 58, 47, 82, 41, 98, 58,
  56, 98, 66, 86, 57, 67, 12, 6, 62, 85, 34, 67,
  10, 9, 31, 21, 46, 16, 4, 92, 89, 15, 28, 51,
  17, 39, 8, 84, 73, 13, 91, 57, 16, 1, 1, 68,
  74, 62, 71, 73, 70, 42, 13, 7, 84, 79, 21, 38,
  44, 43, 70, 28
]

const selectionSort = arr => {
  let min

  for (let i = 0; i < arr.length; i++) {
    min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (i !== min) {
      const temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

// console.log(selectionSort(nums))

// const insertionSort = arr => {
//   let j
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i]

//     for (j = i - 1; j > -1 && arr[j] > value; j--) {
//       arr[j + 1] = arr[j]
//     }

//     arr[j + 1] = value
//   }

//   return arr
// }

// console.log(insertionSort(nums))

// console.log(nums.sort((a, b) => a - b))
