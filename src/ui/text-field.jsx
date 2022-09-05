export default function TextField({ value, onChange = () => {} }) {
  return (
    <>
      <input
        className={`border p-2 border-blue-50 bg-blue-50 text-white `}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
