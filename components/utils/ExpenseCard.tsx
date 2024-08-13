import { BriefcaseBusiness } from "lucide-react";

const ExpenseCard = () => {
  return (
    <div className="w-full p-5 border rounded-lg flex justify-between items-center">
      <div className="flex justify-start items-center gap-3">
        <BriefcaseBusiness width={30} height={30} />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-medium">PVR Forum</h1>
          <p className="text-sm text-muted-foreground">14/9/2024</p>
        </div>
      </div>
      <p className="font-medium">$3456</p>
    </div>
  );
};

export default ExpenseCard;
