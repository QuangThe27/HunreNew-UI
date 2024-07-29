import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
