import Nav from "../components/navbar/Nav";
import { Suspense } from "react";
import PageLoading from "../components/common/loading/PageLoading";


export default function RootLayouts({ children }) {
 
  return (
    <section>
      <Nav />
      <Suspense fallback={<PageLoading />}>
        <main className=" ">{children}</main>
      </Suspense>
    </section>
  );
}
