import Card from "@/components/Card";
import { Button } from "@/components/Button";


const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Get Started" styles={{ backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px" }} />
    </div>
  );
};
export default Landing;
