export const FilterBar = ({ gameVersion, setGameVersion }) => {
  const onSelection = (e) => {
    setGameVersion(e.target.value);
  };

  return (
    <>
      <select onChange={onSelection}>
        <option value="kanto">Red</option>
        <option value="kanto">Blue</option>
      </select>
    </>
  );
};
