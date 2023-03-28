// import './assets/css/dark.css';
// import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';

export default function App() {
    return (
        <>
            <GlobalStyle />
            {/* <ThemeProvider theme={"dark"}> */}
                <Tutorial />
            {/* </ThemeProvider> */}
        </>
    );
}
