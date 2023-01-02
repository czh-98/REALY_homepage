function boldMinValue(dataCollection: Data[]) {
  const keys: string[] = [];
  Object.keys(dataCollection[0]).forEach((key) => {
    if (dataCollection[0][key].hasOwnProperty("val")) {
      keys.push(key);
    }
  });

  for (const key of keys) {
    let minIndex = 0;
    dataCollection.forEach((data: Data, index: number) => {
      if (data[key].val < dataCollection[minIndex][key].val) {
        minIndex = index;
      }
    });
    dataCollection[minIndex][key].bold = true;
  }
}

function addRank(dataCollection: Data[]) {
  dataCollection.forEach((val, index) => {
    Object.assign(val, { rank: { val: index + 1 } });
  });
}

export { boldMinValue, addRank };
