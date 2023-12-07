const SortOption = ({ filteredData }) => {
  const handleSort = (e, filteredData) => {
    const value = e.target.value;

    switch (value) {
      case "1":
        filteredData.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();

          // Sort in descending order
          return dateB - dateA;
        });
        break;

      case "2":
        filteredData.sort((a, b) => {
          return a.price - b.price;
        });
        break;

      case "3":
        filteredData.sort((a, b) => {
          return b.price - a.price;
        });
        break;

      default:
        throw new Error("Invalid sort type");
    }

    return filteredData;
  };

  return (
    <select onChange={handleSort}>
      <option value="1" defaultValue>
        New arrivals
      </option>
      <option value="2">Price low to high</option>
      <option value="3">price high to low</option>
    </select>
  );
};

export default SortOption;
