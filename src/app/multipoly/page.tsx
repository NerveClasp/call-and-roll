import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

function Page() {
  return (
    <>
      <Header links={[{ name: "Multypoly", href: "/multipoly" }]} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4 flex items-center flex-col">
            {/* @TODO: do some clever calculations here later, for now this will do */}
            <Card className="w-[100vh] h-[100vh]">Game</Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
