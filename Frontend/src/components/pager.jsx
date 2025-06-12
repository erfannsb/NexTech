import { lazy, Suspense } from "react";
import useUIStore from "../ui_storage";

// Lazy load each page
const ExplorePage = lazy(() => import("../pages/explore"));
const ProductPage = lazy(() => import("../pages/product"));

const pages = {
  ExplorePage: ExplorePage,
  ProductPage: ProductPage,
};

export default function Pager() {
  const activePage = useUIStore((state) => state.currentUserPage);

  const ActivePage = pages[activePage] ?? (() => <div>Invalid page</div>);

  return (
    <div className="col-start-2 col-end-3 row-start-2 row-end-3 p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ActivePage />
      </Suspense>
    </div>
  );
}
