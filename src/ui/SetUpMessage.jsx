function SetUpMessage({ title, message }) {
  return (
    <div className="flex flex-col mt-4 space-y-4 text-center">
      <p className="text-3xl text-[#48ff00]">{title}</p>
      <p className="text-2xl">{message}</p>
    </div>
  );
}

export default SetUpMessage;
