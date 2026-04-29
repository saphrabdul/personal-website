import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ExpertisePage from "@/pages/expertise";
import LifecycleOverviewPage from "@/pages/lifecycle-overview";
import LifecycleStagePage from "@/pages/lifecycle-stage";
import ApproachPage from "@/pages/approach";
import AboutPage from "@/pages/about";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Give the page a frame to render, then scroll to the anchor
      const id = hash.replace("#", "");
      const attempt = (tries: number) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries > 0) {
          requestAnimationFrame(() => attempt(tries - 1));
        }
      };
      requestAnimationFrame(() => attempt(10));
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/expertise" component={ExpertisePage} />
          <Route path="/lifecycle" component={LifecycleOverviewPage} />
          <Route path="/lifecycle/:slug" component={LifecycleStagePage} />
          <Route path="/approach" component={ApproachPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
