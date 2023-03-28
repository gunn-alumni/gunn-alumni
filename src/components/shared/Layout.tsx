import Navbar from "./Navbar";
import Footer from "./Footer";
import PasswordCheck from "./PasswordCheck";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <PasswordCheck />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
