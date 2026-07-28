export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#', icon: 'Home' },
  { label: 'Services', href: '#services', icon: 'Wrench' },
  { label: 'Projects', href: '#projects', icon: 'Briefcase' },
  { label: 'Products', href: '#products', icon: 'Package' },
  { label: 'About', href: '#about', icon: 'Info' },
  { label: 'Contact', href: '#contact', icon: 'Mail' },
];
