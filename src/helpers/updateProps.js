export const deleteFoodbank = (id, data) => {
  const index = data.findIndex(foodbank => foodbank._id === id);
  data.splice(index, 1)
  return data;
}

export const updateFoodBank = (id, data, newFoodbank) => {
  const index = data.findIndex(foodbank => foodbank._id === id);
  data[index] = {...newFoodbank};
  let tmp = [];
  tmp = [...data]
  return tmp;
}

export const updateVoteCount = (id, data) => {
  const index = data.findIndex(foodbank => foodbank._id === id);
  const newRate = data[index].rate + 1;
  data[index] = {...data[index], rate: newRate }
  let tmp = [];
  tmp = [...data];
  return tmp;
}
