// Return array of IDs of checked items
export default function calculateChecked(items) {
  const completedArr = items.filter(obj => obj.is_completed === true);
  const checked = completedArr.map(obj => obj.id);

  return checked;
}

  // Logging value of checked whenever it's updated
  // useEffect(() => {
  //   console.log("what's checked:", checked);
  // }, [checked])