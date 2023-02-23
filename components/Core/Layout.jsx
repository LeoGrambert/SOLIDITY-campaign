import { Container } from 'semantic-ui-react';

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
}

export default Layout;