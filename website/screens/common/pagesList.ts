export type LinkDetails = {
  label: string;
  path: string;
};

type LinksSectionDetails = {
  label: string;
  links: LinkDetails[];
};

type NavigationLinks = {
  previousLink: LinkDetails | null;
  nextLink: LinkDetails | null;
};

const overviewLinks: LinkDetails[] = [
  { label: "Introduction", path: "/overview/introduction" },
];

const componentsLinks: LinkDetails[] = [
  { label: "Accordion", path: "/components/accordion" },
  { label: "Alert", path: "/components/alert" },
  { label: "Box", path: "/components/box" },
  { label: "Button", path: "/components/button" },
  { label: "Card", path: "/components/card" },
  { label: "Checkbox", path: "/components/checkbox" },
  { label: "Chip", path: "/components/chip" },
  { label: "Date Input", path: "/components/date-input" },
  { label: "Dialog", path: "/components/dialog" },
  { label: "Dropdown", path: "/components/dropdown" },
  { label: "File Input", path: "/components/file-input" },
  { label: "Footer", path: "/components/footer" },
  { label: "Header", path: "/components/header" },
  { label: "Heading", path: "/components/heading" },
  { label: "Link", path: "/components/link" },
  { label: "Number Input", path: "/components/number-input" },
  { label: "Paginator", path: "/components/paginator" },
  { label: "Progress Bar", path: "/components/progress-bar" },
  { label: "Password Input", path: "/components/password-input" },
  { label: "Radio", path: "/components/radio" },
  { label: "Resultset Table", path: "/components/resultset-table" },
  { label: "Select", path: "/components/select" },
  { label: "Slider", path: "/components/slider" },
  { label: "Spinner", path: "/components/spinner" },
  { label: "Switch", path: "/components/switch" },
  { label: "Table", path: "/components/table" },
  { label: "Tabs", path: "/components/tabs" },
  { label: "Tag", path: "/components/tag" },
  { label: "Textarea", path: "/components/textarea" },
  { label: "Text Input", path: "/components/text-input" },
  { label: "Wizard", path: "/components/wizard" },
];

export const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Components", links: componentsLinks },
];

export const getNavigationLinks = (currentPath: string): NavigationLinks => {
  const links = LinksSections.flatMap((section) => section.links);
  const currentLinkIndex = links.findIndex((link) =>
    currentPath.startsWith(link.path)
  );
  if (currentLinkIndex === -1) {
    return { previousLink: null, nextLink: null };
  }
  const nextLinkIndex = currentLinkIndex + 1;
  const nextLinkExists = nextLinkIndex < links.length;
  const previousLinkIndex = currentLinkIndex - 1;
  const previousLinkExists = previousLinkIndex >= 0;
  return {
    previousLink: previousLinkExists ? links[previousLinkIndex] : null,
    nextLink: nextLinkExists ? links[nextLinkIndex] : null,
  };
};
