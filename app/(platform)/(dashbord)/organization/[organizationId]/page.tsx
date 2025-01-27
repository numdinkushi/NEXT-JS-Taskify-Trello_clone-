import { Separator } from "@/components/ui/separator";
import { useOrganization } from "@clerk/nextjs";
import Info from "./_components/info";
import { Suspense } from "react";
import BoardList from "./_components/board-list";

const OrganizationIdPage = async () => {


  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4 w-[800px]" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;