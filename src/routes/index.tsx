import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RootLayout } from "./layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout/>} >
            <Route
            path="*"
            lazy={async ()=> ({
                Component: () => <div>Not Found</div>,
              })}/>
              <Route path="/add-products"
              lazy={async () => ({
                Component: (await import ('../pages/products')).default,
              })}/>
            </Route>
        </>
    )
);