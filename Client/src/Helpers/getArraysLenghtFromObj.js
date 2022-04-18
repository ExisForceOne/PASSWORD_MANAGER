export default function getArraysLenghtFromObj(data) {
  const lenghtsTable = [];
  const objSize = Object.keys(data).length;

  for (let i = 0; i < objSize; i++) {
    const arrSize = data[Object.keys(data)[i]].length;
    lenghtsTable.push(arrSize);
  }

  return lenghtsTable;
}
