export const SECTIONS = ["home", "about", "catalog", "shop", "credits", "contact"] as const;
export type SectionId = typeof SECTIONS[number];

export const sectionToPath = (id: string) => (id === "home" ? "/" : `/${id}`);
export const pathToSection = (pathname: string): SectionId => {
  const seg = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!seg) return "home";
  return (SECTIONS as readonly string[]).includes(seg) ? (seg as SectionId) : "home";
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
