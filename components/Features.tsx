import ExpenseCard from "./utils/ExpenseCard";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full px-6 py-8 flex flex-col justify-center items-center border-b"
    >
      <h1 className="text-xl font-bold mb-6">Easily Manage your expenses</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </section>
  );
};

export default Features;
