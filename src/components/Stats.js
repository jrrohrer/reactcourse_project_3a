export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Start by adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      💼{" "}
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go 🛫"
          : `You have ${numItems} items on your list, and you already packed
        ${itemsPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
