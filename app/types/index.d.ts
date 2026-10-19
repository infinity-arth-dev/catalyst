interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface ProductCategory {
  slug: string;
  name: string;
  image?: string;
}

interface Service {
  title: string;
  description: string;
  highlights?: string[];
}
