import Image from "@/common/Image";
import dialogAnatomyImage from "./images/dialog_anatomy.png";
import dialogSpecsImage from "./images/dialog_specs.png";
import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";
import Figure from "../../../common/Figure";
import HeadingLink from "../../../common/HeadingLink";

const DialogSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Design specifications for dialog component">
          <Image
            src={dialogSpecsImage}
            alt="Design specifications for dialog component"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image
          src={dialogAnatomyImage}
          alt="Design specifications for dialog component"
        />
        <DxcList type="number">
          <DxcText>Dialog container</DxcText>
          <DxcText>Title</DxcText>
          <DxcText>Close action</DxcText>
          <DxcText>Dialog actions</DxcText>
          <DxcText>Content</DxcText>
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
                <Code>overlayColor</Code>
              </td>
              <td>Overlay</td>
              <td>
                <Code>color-grey-800-a</Code>
              </td>
              <td>#000000b3</td>
            </tr>
            <tr>
              <td>
                <Code>backgroundColor</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>boxShadowColor</Code>
              </td>
              <td>Container shadow</td>
              <td>-</td>
              <td>rgba(0, 0, 0, 0.2)</td>
            </tr>
            <tr>
              <td>
                <Code>closeIconColor</Code>
              </td>
              <td>Icon close</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>closeIconBackgroundColor</Code>
              </td>
              <td>Icon close</td>
              <td>
                <Code>none</Code>
              </td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>closeIconBorderColor</Code>
              </td>
              <td>Icon close</td>
              <td>
                <Code>none</Code>
              </td>
              <td>none</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Typography</HeadingLink>
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
              <td>
                <Code>font-family</Code>
              </td>
              <td>Title</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans, sans-serif&#39;</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Title</td>
              <td>
                <Code>font-scale-05</Code>
              </td>
              <td>1.5rem / 24px</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Title</td>
              <td>
                <Code>font-weight-semibold</Code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <Code>fontFamily</Code>
              </td>
              <td>Content</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans, sans-serif&#39;</td>
            </tr>
            <tr>
              <td>
                <Code>fontSize</Code>
              </td>
              <td>Content</td>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <Code>fontWeight</Code>
              </td>
              <td>Content</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
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
                <Code>closeIconBorderThickness</Code>
              </td>
              <td>Icon close</td>
              <td>
                <Code>border-width-0</Code>
              </td>
              <td>0px</td>
            </tr>
            <tr>
              <td>
                <Code>closeIconBorderStyle</Code>
              </td>
              <td>Icon close</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <Code>closeIconBorderRadius</Code>
              </td>
              <td>Icon close</td>
              <td>
                <Code>border-radius-none</Code>
              </td>
              <td>0</td>
            </tr>
          </tbody>
        </DxcTable>
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
              <td>
                <Code>border-width</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-width-0</Code>
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <Code>border-style</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-style-none</Code>
              </td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>border-radius</Code>
              </td>
              <td>Container</td>
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
              <th>Property</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>margin-right</Code>
              </td>
              <td>Title icon</td>
              <td>
                <Code>spacing-12</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>margin-bottom</Code>
              </td>
              <td>Title</td>
              <td>
                <Code>spacing-24</Code>
              </td>
              <td>1.5rem / 24px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Size</HeadingLink>
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
              <td>
                <Code>min-width</Code>
              </td>
              <td>Container</td>
              <td>-</td>
              <td>800px</td>
            </tr>
            <tr>
              <td>
                <Code>max-width</Code>
              </td>
              <td>Container</td>
              <td>-</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>
                <Code>width</Code>
              </td>
              <td>Close action</td>
              <td>-</td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>height</Code>
              </td>
              <td>Close action</td>
              <td>-</td>
              <td>24px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Overlay</HeadingLink>
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
                <Code>overlayOpacity</Code>
              </td>
              <td>Overlay</td>
              <td>-</td>
              <td>0.7</td>
            </tr>
          </tbody>
        </DxcTable>
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
              <td>
                <Code>width</Code>
              </td>
              <td>Overlay</td>
              <td>-</td>
              <td>100vw</td>
            </tr>
            <tr>
              <td>
                <Code>height</Code>
              </td>
              <td>Overlay</td>
              <td>-</td>
              <td>100vh</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Padding</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Padding</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xxsmall</Code>
              </td>
              <td>6px</td>
            </tr>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>16px</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code> <em>(default)</em>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>36px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>48px</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>64px</td>
            </tr>
            <tr>
              <td>
                <Code>xxlarge</Code>
              </td>
              <td>100px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          And also apply different values to each side of the component:{" "}
          <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
          <Code>right</Code>.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accesibility</HeadingLink>
        <HeadingLink level={4}>WCAG</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
              text="2.1.2 No Keyboard Trap"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html"
              text="2.4.3 Focus Order"
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring practices 1.2 -{" "}
            <DxcLink
              newWindow
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"
              text="3.9 Dialog (Modal)"
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring practices 1.2 -{" "}
            <DxcLink
              newWindow
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html"
              text="Modal Dialog Example"
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/dialog/specs/DialogSpecsPage.tsx" />
    </DxcStack>
  );
};

export default DialogSpecsPage;
