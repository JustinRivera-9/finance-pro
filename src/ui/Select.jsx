function Select({ options, children, value }) {
  return (
    <div className="flex flex-col my-4">
      <label className="">{children}</label>
      <select value={value} className="bg-transparent mt-2 border-blue-700">
        {options.map((opt, i) => {
          return (
            <option className="bg-blue-400" key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
