import "@styles/globals.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
import { Suspense } from "react";
export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <Suspense>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        {/* Inserting the Nav component here because it will be present on every page */}
                        <Nav />
                        {children}
                    </main>
                </Suspense>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;