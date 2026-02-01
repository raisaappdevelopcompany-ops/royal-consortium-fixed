
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate, Link } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SplashScreen } from './components/SplashScreen';
import { Sidebar } from './components/Sidebar';
import { Logo } from './components/Logo';
import { Box, Home, Store, Car, ShoppingCart, User } from 'lucide-react';
import { UserRole, ViewState } from './types';
import { ErrorBoundary } from './components/ErrorBoundary';

// Screens & Components
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/DashboardScreen'; // Renamed DashboardScreen to HomeScreen
import { ShopView } from './components/ShopView';
import { GarageView } from './components/GarageView';
import { CartView } from './components/CartView';
import { ProfileView } from './components/ProfileView';
import { OrderHistoryView } from './components/OrderHistoryView';
import { NotificationView } from './components/NotificationView';
import { ChatInterface } from './components/ChatInterface';
import { LiveInterface } from './components/LiveInterface';
import { ImageGenView } from './components/ImageGenView';
import { VideoGenView } from './components/VideoGenView';
import { AdminPanelView } from './components/AdminPanelView';
import { AIPowerPanelView } from './components/AIPowerPanelView';
import { SuperAdminControlView } from './components/SuperAdminControlView';

// Wrapper for main layout logic
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useLanguage();

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0D1A40] via-[#0f0f13] to-[#1E3375] text-white overflow-hidden font-sans relative">
      <Sidebar />
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Mobile Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-royal-900/50 backdrop-blur-sm md:hidden z-30 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="font-bold text-lg">Royal Consortium</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-royal-700 to-accent flex items-center justify-center font-bold text-xs">A</div>
        </header>

        <div className="flex-1 overflow-auto relative p-4 md:p-8 pb-32 md:pb-8">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-royal-700/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 w-full h-full">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </div>
        </div>

        {/* Floating 3D View Button - Mobile */}
        <div className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-50">
          <button className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-royal-800 to-royal-600 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-transform active:scale-95">
            <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-md group-hover:bg-accent/40 transition-colors"></div>
            <Box className="text-white relative z-10" size={24} />
            <span className="absolute -bottom-6 text-[10px] font-bold tracking-wider text-white/80 whitespace-nowrap bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">{t.home.view3d}</span>
          </button>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </main>
    </div>
  );
};

const MobileNav: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav className="md:hidden absolute bottom-0 left-0 w-full bg-royal-900/90 backdrop-blur-xl border-t border-white/10 px-4 py-2 z-40 flex justify-between items-center h-20">
      <MobileTab to="/" icon={<Home size={22} />} label={t.nav.home} />
      <MobileTab to="/shop" icon={<Store size={22} />} label={t.nav.shop} />
      <MobileTab to="/garage" icon={<Car size={22} />} label={t.nav.garage} />
      <MobileTab to="/cart" icon={<ShoppingCart size={22} />} label={t.nav.cart} />
      <MobileTab to="/profile" icon={<User size={22} />} label={t.nav.profile} />
    </nav>
  );
};

const MobileTab: React.FC<{ to: string, icon: React.ReactNode, label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link to={to} className="flex flex-col items-center justify-center gap-1 w-14 h-full">
      <div className={`transition-all duration-300 ${active ? 'text-transparent bg-clip-text bg-gradient-to-tr from-white to-accent scale-110 drop-shadow-[0_0_10px_rgba(255,75,62,0.5)]' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-medium transition-colors duration-300 ${active ? 'text-white' : 'text-gray-600'}`}>
        {label}
      </span>
    </Link>
  );
};

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

// Auth Middleware Component
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole, loading } = useAuth();

  if (loading) {
    return <SplashScreen fadingOut={false} />; // Or a spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect to home if user lacks permission
    return <Navigate to="/" replace />;
  }

  return <MainLayout>{children}</MainLayout>;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Only handle artificial splash delay if not loading auth
    if (!loading) {
      const fadeTimer = setTimeout(() => setIsFadingOut(true), 2000);
      const removeTimer = setTimeout(() => setShowSplash(false), 3000);
      return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
    }
  }, [loading]);

  const handleNavigate = (view: ViewState) => {
    switch (view) {
      case ViewState.DASHBOARD:
        navigate('/');
        break;
      case ViewState.SHOP:
        navigate('/shop');
        break;
      case ViewState.GARAGE:
        navigate('/garage');
        break;
      case ViewState.CART:
        navigate('/cart');
        break;
      case ViewState.PROFILE:
        navigate('/profile');
        break;
      case ViewState.ORDER_HISTORY:
        navigate('/order-history');
        break;
      case ViewState.NOTIFICATIONS:
        navigate('/notifications');
        break;
      case ViewState.LOGIN:
        navigate('/login');
        break;
      case ViewState.ADMIN_PANEL:
        navigate('/admin');
        break;
      case ViewState.AI_POWER_PANEL:
        navigate('/ai-power');
        break;
      case ViewState.SUPER_ADMIN_CONTROL:
        navigate('/super-admin');
        break;
      default:
        console.warn(`Navigation to ${view} not implemented in router`);
        navigate('/');
    }
  };

  if (loading) return <SplashScreen fadingOut={false} />;

  return (
    <>
      {showSplash && <SplashScreen fadingOut={isFadingOut} />}
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <AuthScreen /> : <Navigate to="/" replace />} />

        {/* Public/Common Routes */}
        <Route path="/" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><ShopView /></ProtectedRoute>} />
        <Route path="/garage" element={<ProtectedRoute><GarageView /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><CartView /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfileView onNavigate={handleNavigate} /></ProtectedRoute>} />
        <Route path="/order-history" element={<ProtectedRoute><OrderHistoryView onNavigate={handleNavigate} /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><NotificationView onNavigate={handleNavigate} /></ProtectedRoute>} />

        {/* AI & Studio Routes */}
        <Route path="/chat" element={<ProtectedRoute><ChatInterface /></ProtectedRoute>} />
        <Route path="/live" element={<ProtectedRoute><LiveInterface /></ProtectedRoute>} />
        <Route path="/image" element={<ProtectedRoute><ImageGenView /></ProtectedRoute>} />
        <Route path="/video" element={<ProtectedRoute><VideoGenView /></ProtectedRoute>} />

        {/* Role-Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin', 'accounts_admin', 'service_manager']}>
              <AdminPanelView />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-power"
          element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
              <AIPowerPanelView onNavigate={handleNavigate} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/super-admin"
          element={
            <ProtectedRoute allowedRoles={['super_admin']}>
              <SuperAdminControlView onNavigate={handleNavigate} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
          <SpeedInsights />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
