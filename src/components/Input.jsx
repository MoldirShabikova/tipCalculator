const Input = ({ placeholder, value, handleChange }) => {
  return (
    <div>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default Input;
