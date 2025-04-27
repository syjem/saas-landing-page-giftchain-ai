import { ThemeProvider } from '@/components/ui/theme-provider';
import Headers from '@/components/headers';
import Footer from '@/components/footer';
import Main from '@/components/main';
import Product from '@/components/product';
import Solution from '@/components/solution';
import Pricing from '@/components/pricing';
import Testimonials from './components/testimonials';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Headers />
          <Main>
            <Product />
            <Solution />
            <Pricing />
            <Testimonials />
          </Main>
          <Footer />
        </ThemeProvider>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
