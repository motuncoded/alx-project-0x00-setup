import Card from "@/components/Card";
import Button  from "@/components/Button";

// pages/landing.tsx doesn't contain: ["import Button from"]

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Get Started" styles="rounded-sm rounded-lg rounded-full" />
    </div>
  );
};
export default Landing;
