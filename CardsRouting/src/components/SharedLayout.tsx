import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout =()=>{
    return (
        <div style={layoutStyles.pageWrapper}>
        <Header />
        <main style={layoutStyles.contentWrapper}>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
}
const layoutStyles: { pageWrapper: React.CSSProperties; contentWrapper: React.CSSProperties } = {
    pageWrapper: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', 
    },
    contentWrapper: {
      flex: 1,
      padding: '20px',
    },
  };
export default SharedLayout;