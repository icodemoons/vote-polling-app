import List from "@/ui/list";

export const colors = [
  {
    bg: "bg-blue-500",
    border: "border-blue-600",
  },
  {
    bg: "bg-pink-500",
    border: "border-pink-600",
  },
  {
    bg: "bg-orange-500",
    border: "border-orange-600",
  },
  {
    bg: "bg-red-500",
    border: "border-red-600",
  },
  {
    bg: "bg-indigo-500",
    border: "border-indigo-600",
  },
  {
    bg: "bg-yellow-500",
    border: "border-yellow-600",
  },
];

export default function Poll({
  _id,
  question,
  choices = [],
  color,
  onVoted = () => {},
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl">{question}</div>
      <div className="flex flex-col gap-1">
        <List
          {...{
            collection: choices,
            renderItem: (choice) => {
              const max = choices.reduce(
                (acc, choice) => acc + parseInt(choice.votes),
                0
              );
              const color = colors[parseInt(Math.random() * colors.length)];
              return (
                <div
                  className={`border-[1px] ${color.border} w-full`}
                  onClick={() => onVoted(_id, choice)}
                >
                  <div
                    className={`p-2 ${color.bg} overflow-x-visible whitespace-nowrap`}
                    style={{
                      width: `${(choice.votes / max) * 100}%`,
                    }}
                  >
                    <span className="font-black">
                      {choice.answer} ({choice.votes})
                    </span>
                  </div>
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
