const Select = ({ handleSelect, value }) => {
  return (
    <div>
      <form>
        <select value={value} onChange={(e) => handleSelect(e.target.value)}>
          <option value="0.3">Amazing 30%</option>
          <option value="0.2">Very good 20%</option>
          <option value="0.15">Normal 15%</option>
          <option value="0.1">Bad 10%</option>
        </select>
      </form>
    </div>
  );
};
export default Select;
