import AccordianCard from "./AccordianCard";

function AccordianList({ data }) {
  // Data should be array of objects
  // Replace the key prop with something unique
  return (
    <ul className="flex flex-col space-y-4 md:flex-row md:flex-wrap md:justify-center md:space-x-4 md:w-full">
      {data.map((el) => (
        <AccordianCard key={el.categoryName} data={el} />
      ))}
    </ul>
  );
}

export default AccordianList;
