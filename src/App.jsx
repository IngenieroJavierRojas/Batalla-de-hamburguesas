import { ModalProvider } from "./Componentes/Modal";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

import { LoaderProvider } from "./Componentes/LoaderProvider";

function App() {
    return (
      
        <BrowserRouter>
         <LoaderProvider>
            <ModalProvider>
                <AppRouter />
            </ModalProvider>
         </LoaderProvider>
        </BrowserRouter>
    );
}

export default App;
