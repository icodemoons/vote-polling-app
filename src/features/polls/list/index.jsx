import { useState } from "react";
import List from "@/ui/list";
import Poll from "../";

export default function PollList({ polls }) {
  const [_polls, setPolls] = useState(polls);

  function handleVoted(pollId, choice) {
    setPolls((prev) =>
      prev.map((poll) =>
        poll._id === pollId
          ? {
              ...poll,
              choices: poll.choices.map((_choice) =>
                _choice.answer === choice.answer
                  ? {
                      ..._choice,
                      votes: _choice.votes + 1,
                    }
                  : _choice
              ),
            }
          : poll
      )
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <List
        {...{
          collection: _polls,
          renderItem: (poll) => {
            return <Poll {...{ ...poll, onVoted: handleVoted }} />;
          },
        }}
      />
    </div>
  );
}
