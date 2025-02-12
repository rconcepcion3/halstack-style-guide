import PageHeading from "../../common/TabsPageLayout";

const TablePageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Usage", path: "/components/table" },
    { label: "Specifications", path: "/components/table/specifications" },
  ];

  return (
    <PageHeading
      title="Table"
      description="Data table is a component with a high rate of usage within the applications. It allows to show the user a big amount of information in a simple and simplified way. All the information contained in the table has a grid structure, defining columns and rows to place the data and allow the users to scan, analazy, compare and filter that information."
      tabs={tabs}
    >
      {children}
    </PageHeading>
  );
};

export default TablePageHeading;
