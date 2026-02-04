import type { WorkContentProps } from "@/lib/works";
import { WorkDetailContent } from "./WorkDetailContent";
import { WorkContentDescription } from "./WorkContentDescription";

interface Props {
  index: number;
}

const WorkContent = (props: WorkContentProps & Props) => {
  const isOdd = props.index % 2 === 0;
  return (
    <div className="w-full h-full flex flex-col items-center justify-start mt-10 relative top-line bottom-line mb-auto">
      <div className="w-full flex flex-col items-center justify-center sticky top-16 z-20 pattern-bg bottom-line p-4 bg-purple-50 dark:bg-purple-900">
        <h2>{props.title}</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <WorkDetailContent {...props} />
        <WorkContentDescription isOdd={isOdd} {...props} />
      </div>
    </div>
  );
};

export default WorkContent;
