import { Footer } from "@/components/Footer";
import { FormContainer } from "@/components/FormContainer";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <>
      <main className="p-5 max-w-[980px] mx-auto dark:bg-gray-900/40 bg-gray-400/20 min-h-screen">
        <Header />
        <FormContainer />
      </main>
      <Footer />
    </>
  );
}
