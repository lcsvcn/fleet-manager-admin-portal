"use client"
import { Footer, Navbar, ClientDashboard} from '../../components';


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <ClientDashboard />
    <Footer />
  </div>
);

export default Page;
