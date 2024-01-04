import React from 'react'
import "@styles/globals.css";
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Promptify",
  description: "Discover & Share AI prompts"
  
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <link rel="icon" href="/assets/images/logo.svg" sizes="any" />
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>

    </html>
  )
}

export default RootLayout