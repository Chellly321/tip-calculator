function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label className="field"> {children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="input"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was ok (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="15">Fantastic (15%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage;
