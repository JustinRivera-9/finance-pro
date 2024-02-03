import CategoryAccordian from "./CategoryAccordian";

function CategoryList({ categories }) {
  return (
    <ul className="flex flex-col">
      {categories.map((el) => (
        <CategoryAccordian key={el.categoryName} category={el} />
      ))}
    </ul>
  );
}

export default CategoryList;
