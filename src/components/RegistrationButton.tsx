import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ExternalLink } from 'lucide-react';

interface RegistrationButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  courseName?: string;
  className?: string;
  showIcon?: boolean;
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  label = 'Join Upcoming Batch',
  variant = 'primary',
  size = 'md',
  courseName,
  className = '',
  showIcon = true,
}) => {
  // If registrations are disabled via feature flag
  if (!siteConfig.features.enableRegistration) {
    return null;
  }

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    if (siteConfig.registration.googleFormUrl) {
      window.open(siteConfig.registration.googleFormUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const btnClasses = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      onClick={handleRegister}
      className={btnClasses}
      title={courseName ? `Register for ${courseName}` : label}
      aria-label={label}
    >
      <span>{label}</span>
      {showIcon && <ExternalLink size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </button>
  );
};
