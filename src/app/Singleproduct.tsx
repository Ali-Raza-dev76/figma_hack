import Image from "next/image";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";
import Products from "./components/products";
import Singleproduct from "./components/singleproduct";
export default function Home() {
  return (
    <div>
      <Singleproduct/>
      <Footer/>
    </div>
     );
}