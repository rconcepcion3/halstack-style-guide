import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcList,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import anatomyImage from "./images/table_anatomy.png";
import specsImage from "./images/table_specs.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import Code from "../../../common/Code";

const ResultsetTableSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Table design specifications">
          <Image src={specsImage} alt="Table design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          Some other components defined in the design system are used in the
          table component as the{" "}
          <DxcLink href="/components/checkbox" text="checkbox" />,{" "}
          <DxcLink href="/components/button" text="button" /> or{" "}
          <DxcLink href="/components/select" text="select" />. For concrete
          specifications about states, please, consider to see the documentation
          of each component.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={anatomyImage} alt="Table component anatomy" />
        <DxcList type="number">
          <DxcText>Header</DxcText>
          <DxcText>Header title</DxcText>
          <DxcText>Sorting action</DxcText>
          <DxcText>Body</DxcText>
          <DxcText>Cell</DxcText>
          <DxcText>Cell value</DxcText>
          <DxcText>Paginator</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>dataBackgroundColor</Code>
              </td>
              <td>Cell</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>dataFontColor</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>headerBackgroundColor</Code>
              </td>
              <td>Header</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>headerFontColor</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>scrollBarThumbColor</Code>
              </td>
              <td>Scroll bar</td>
              <td>
                <Code>color-grey-700</Code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <Code>scrollBarTrackColor</Code>
              </td>
              <td>Scroll bar</td>
              <td>
                <Code>color-grey-300</Code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <Code>sortIconColor</Code>
              </td>
              <td>Sort</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>rowSeparatorColor</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>color-grey-300</Code>
              </td>
              <td>#cccccc</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>dataFontFamily</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>'Open Sans', sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>dataFontSize</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <Code>dataFontStyle</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>dataFontWeight</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>dataFontTextTransform</Code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>dataTextLineHeight</Code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>dataTextAlign</Code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>left</td>
            </tr>
            <tr>
              <td>
                <Code>headerFontFamily</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>'Open Sans', sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>headerFontSize</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <Code>headerFontStyle</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>headerFontWeight</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>headerFontTextTransform</Code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>headerTextLineHeight</Code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>headerTextAlign</Code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>left</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>rowSeparatorThickness</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>border-width-1</Code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <Code>rowSeparatorStyle</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <Code>headerBorderRadius</Code>
              </td>
              <td>Header</td>
              <td>
                <Code>border-radius-medium</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Spacing</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>dataPaddingTop</Code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>14px</td>
            </tr>
            <tr>
              <td>
                <Code>dataPaddingBottom</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>spacing-12</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>dataPaddingRight</Code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>20px</td>
            </tr>
            <tr>
              <td>
                <Code>dataPaddingLeft</Code>
              </td>
              <td>Cell value</td>
              <td>
                <Code>spacing-40</Code>
              </td>
              <td>2.5rem / 40px</td>
            </tr>
            <tr>
              <td>
                <Code>headerPaddingTop</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>spacing-16</Code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <Code>headerPaddingBottom</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>spacing-16</Code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <Code>headerPaddingRight</Code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>20px</td>
            </tr>
            <tr>
              <td>
                <Code>headerPaddingLeft</Code>
              </td>
              <td>Header title</td>
              <td>
                <Code>spacing-40</Code>
              </td>
              <td>2.5rem / 40px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Iconography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Width</td>
              <td>Sorting action</td>
              <td>-</td>
              <td>14px</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>Sorting action</td>
              <td>-</td>
              <td>14px</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
              text="Success Criterion 1.3.1: Info and Relationships"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence"
              text="Success Criterion 1.3.2: Meaningful Sequence"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
              text="Success Criterion 2.1.1: Keyboard"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order"
              text="Success Criterion 2.4.3: Focus Order"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels"
              text="Success Criterion 2.4.6: Headings and Labels"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
              text="Success Criterion 2.4.7: Focus Visible"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
              text="Success Criterion 4.1.2: Name, Role, Value"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#table"
              text="3.23 Table"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html"
              text="Sortable Table Example"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/resultset-table/specs/ResultsetTableSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ResultsetTableSpecsPage;
