type BadgeProps = {
  category: string;
  date: string;
};

export function Badge({ category, date }: BadgeProps) {
  return (
    <div className="flex gap-4 items-center mb-6">
      <div className="bg-sky-100 rounded-md flex text-xs justify-center items-center px-3 py-2 font-semibold text-sky-950 uppercase">
        {category}
      </div>
      <span className="uppercase font-semibold text-xs text-sky-950">
        {date}
      </span>
    </div>
  );
}
