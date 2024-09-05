import { Outlet } from "react-router-dom";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { Toaster } from "sonner";

export const GlobalPageLayout = () => {
  return (
    <div className="min-w-[320px] flex flex-col font-montserratFont">
      <GeneralHeaderLayout />
      <main className="flex-1">
        <Outlet />
      </main>
      <GeneralFooterLayout />
      <Toaster closeButton={true} richColors />
    </div>
  );
};
