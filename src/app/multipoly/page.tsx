import Header from "@/components/Header";
import Junior from "./Junior";

function Page() {
  return (
    <>
      <Header links={[{ name: "Multypoly", href: "/multipoly" }]} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4 flex gap-4 justify-center">
            <Junior />
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
