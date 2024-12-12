import { ThemeProvider } from '@/components/ui/theme-provider';
import Headers from '@/components/headers';
import Footer from '@/components/footer';
import Main from '@/components/main';
import Product from '@/components/product';
import Solution from '@/components/solution';
import Pricing from '@/components/pricing';
import Testimonials from './components/testimonials';

function App() {
  return (
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
  );
}

export default App;
