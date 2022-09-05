export default function List({
  collection,
  gap = "gap-4",
  renderItem = (item) => item,
}) {
  return (
    <div className={`flex flex-col ${gap}`}>{collection.map(renderItem)}</div>
  );
}
