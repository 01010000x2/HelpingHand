function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default Input;
