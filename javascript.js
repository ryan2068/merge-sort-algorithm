const mergeSort = (unmergedArray) => {
  const firstHalf = unmergedArray.slice(0, 2)
  firstHalf.forEach((element, index) => {
    console.log(element)
  });


}

console.log(mergeSort([1,4,5,8]))
