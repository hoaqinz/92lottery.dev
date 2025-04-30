import dynamic from "next/dynamic";

// Import the client component with dynamic import
const HomeClient = dynamic(() => import("./HomeClient"), {
  loading: () => (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      <div className="bg-[#bc2022] rounded-t-lg relative px-3 pt-3 pb-1 flex flex-col items-center h-24"></div>
      <div className="h-8 bg-white"></div>
      <div className="h-32 bg-white"></div>
      <div className="h-64 bg-[#f6f1f1]"></div>
      <div className="h-40 bg-white"></div>
      <div className="h-64 bg-white"></div>
    </div>
  ),
});

export default function HomePage() {
  return <HomeClient />;
}
