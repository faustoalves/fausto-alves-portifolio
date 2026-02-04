import type { WorkContentProps } from "@/lib/works";
import { WorkDetailContent } from "./WorkDetailContent";

const WorkContent = (props: WorkContentProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-10 relative top-line bottom-line">
      <div className="w-full h-full flex flex-col items-center justify-center pattern-bg bottom-line relative py-2">
        <h2>{props.title}</h2>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  gap-4">
        <WorkDetailContent {...props} />
      </div>
    </div>
  );
};

export default WorkContent;
