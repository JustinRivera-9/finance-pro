import CategoryAccordian from "./CategoryAccordian";

function CategoryList({ categories }) {
  return (
    <ul className="flex flex-col space-y-4 md:flex-row md:flex-wrap md:justify-center md:space-x-4 md:w-full">
      {categories.map((el) => (
        <CategoryAccordian key={el.categoryName} category={el} />
      ))}
    </ul>
  );
}

export default CategoryList;
