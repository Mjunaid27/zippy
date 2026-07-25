import "./Categories.css";

const categories = [
  { emoji: "⭐", name: "All" },
  { emoji: "🍔", name: "Food" },
  { emoji: "🥬", name: "Vegetables" },
  { emoji: "🍎", name: "Fruits" },
  { emoji: "🥤", name: "Drinks" },
  { emoji: "🥛", name: "Dairy" },
  { emoji: "🍪", name: "Snacks" },
];

function Categories({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <h2>🛍 Shop by Category</h2>

      <div className="categories">
        {categories.map((item) => (
          <div
            key={item.name}
            className={`category-card ${
              selectedCategory === item.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(item.name)}
          >
            <div className="category-icon">
              {item.emoji}
            </div>

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;