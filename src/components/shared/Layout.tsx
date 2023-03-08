import Navbar from "./Navbar";
import Footer from "./Footer";
import PasswordCheck from "./PasswordCheck";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <PasswordCheck />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
