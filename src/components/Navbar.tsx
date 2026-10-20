import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { RegistrationButton } from './RegistrationButton';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Corporate and Blog links removed as requested
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Training', path: '/training' },
    // { label: 'Roadmaps', path: '/roadmaps' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <a
          href="#/"
          onClick={(e) => handleNavClick('/', e)}
          className="navbar-brand"
          id="nav-brand-logo"
        >
          <img
            src={siteConfig.trainer.profileImage}
            alt={siteConfig.trainer.name}
            className="brand-avatar"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={(e) => handleNavClick(item.path, e)}
                className={`nav-link ${currentPath === item.path ||
                  (item.path !== '/' && currentPath.startsWith(item.path))
                  ? 'active'
                  : ''
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {siteConfig.features.enableRegistration && (
            <li className="mobile-drawer-cta">
              <RegistrationButton
                label="Join Upcoming Batch"
                variant="primary"
                size="md"
              />
            </li>
          )}
        </ul>

        {/* Dynamic CTA & Theme Toggle */}
        <div className="navbar-actions">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          {siteConfig.features.enableRegistration && (
            <RegistrationButton
              label="Join Upcoming Batch"
              variant="primary"
              size="sm"
              className="navbar-cta-btn"
            />
          )}

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
