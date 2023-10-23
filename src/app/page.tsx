import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={`bg-primary flex justify-center items-start`}>
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>
  );
}
