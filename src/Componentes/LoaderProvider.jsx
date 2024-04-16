import React, { createContext, useState } from "react";
import { Loader } from "./Loader";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const changeLoading = (value) => setIsLoading(value);

    return (
        <LoaderContext.Provider value={{ changeLoading }}>
            <div>
                {isLoading && <Loader />}
                {children}
            </div>
        </LoaderContext.Provider>
    );
};
