import Nav from "../components/navbar/Nav";
import Cauroseal from "../components/common/cauroseal/Cauroseal";
import { Suspense } from "react";
import PageLoading from "../components/common/loading/PageLoading";

export default function RootLayouts({ children }) {
  return (
    <section>
      <Nav />
    <Cauroseal />
      <Suspense fallback={<PageLoading />}>
        <main className="  mx-8">{children}</main>
      </Suspense>
    </section>
  );
}
