export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/leadership" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];
