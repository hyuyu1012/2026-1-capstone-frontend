import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import RoleSelect from './pages/RoleSelect';

type Page = 'landing' | 'role-select';

function App() {
  const [page, setPage] = useState<Page>('landing');

  if (page === 'role-select') {
    return (
      <RoleSelect
        onBack={() => setPage('landing')}
        onSelectRole={(role) => {
          // TODO: navigate to login with role context
          console.log('Selected role:', role);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Hero onStart={() => setPage('role-select')} />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
