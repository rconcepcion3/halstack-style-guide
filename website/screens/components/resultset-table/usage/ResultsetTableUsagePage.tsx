import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const ResultsetTableUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Use the table component to compare information in rows and columns.
          </DxcText>
          <DxcText>
            Every table cell requires a logical column header/row header.
          </DxcText>
          <DxcText>
            Don't use the table for create visual layout of the content of a
            page.
          </DxcText>
          <DxcText>Avoid truncating content, wrap instead.</DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/resultset-table/usage/ResultsetTableUsagePage.tsx" />
    </DxcStack>
  );
};

export default ResultsetTableUsagePage;
