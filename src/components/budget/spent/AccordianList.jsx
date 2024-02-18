import AccordianCard from "./AccordianCard";

function AccordianList({ data }) {
  return (
    <ul className="flex flex-col space-y-4 md:flex-row md:flex-wrap md:justify-center md:space-x-4 md:w-full">
      {data.map((el) => (
        <AccordianCard key={el.categoryName} data={el} />
      ))}
    </ul>
  );
}

export default AccordianList;
