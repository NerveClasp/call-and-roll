import BackButton from "@/components/BackButton";
import Disclamer from "@/components/Disclamer";

function Page() {
  return (
    <>
      <BackButton />
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Multypoly</h1>
          <Disclamer />
        </div>
      </div>
    </>
  );
}

export default Page;
