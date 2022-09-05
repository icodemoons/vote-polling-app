import PollList from "@/features/polls/list";
import polls from "@/data/polls";

export default function Homepage({ polls }) {
  return (
    <div className="mt-16 container mx-auto">
      <PollList {...{ polls }} />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { polls },
  };
}

/* <TextField {...{ value, onChange: setValue }} /> */
