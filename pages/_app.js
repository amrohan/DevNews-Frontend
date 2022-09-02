import "../styles/globals.css";
import Layout from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
