import Head from '../../component/head/Head'
import { Main } from './layout.style'


const Layout = ({ children }) => {
    return (
        <>  <Head />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout
