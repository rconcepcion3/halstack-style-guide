import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import buttonSpecsImage from "./images/button_specs.png";
import buttonStatesImage from "./images/button_states.png";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import Figure from "../../../common/Figure";
import Image from "@/common/Image";

const ButtonSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Design specifications for button component">
          <Image
            src={buttonSpecsImage}
            alt="Design specifications for button component"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The states are the different behaviors of the button component based
          on the interaction of the user. For the desktop version, we
          contemplate five different states by which can pass.
        </DxcText>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>active</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Button component states">
          <Image src={buttonStatesImage} alt="Button component states" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>General</HeadingLink>
        <HeadingLink level={5}>Spacing</HeadingLink>
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
                <Code>primaryPaddingLeft</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>primaryPaddingRight</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>primaryPaddingTop</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>primaryPaddingBottom</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
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
                <Code>margin-right</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>margin-left</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>margin-left</Code>
              </td>
              <td>Icon</td>
              <td>
                <Code>spacing-03</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Size</HeadingLink>
        <DxcText as="p">
          The component <Code>width</Code> can adopt the following values:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>width</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>60px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>240px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>480px</td>
            </tr>
            <tr>
              <td>
                <Code>fillParent</Code>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <Code>fitContent</Code>
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          The component <Code>height</Code> is fixed:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>height</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>min-height</Code>
              </td>
              <td>40px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          Button <Code>margin</Code> can use the values:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>margin</th>
              <th>value</th>
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
                <Code>small</Code>
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
          These values can be applied independently to each side of the
          component: <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>,
          <Code>right</Code>.
        </DxcText>
        <HeadingLink level={5}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Property</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>labelFontLineHeight</Code>
              </td>
              <td>line-height</td>
              <td>
                <Code>font-leading-normal</Code>
              </td>
              <td>1.5 em</td>
            </tr>
            <tr>
              <td>
                <Code>labelLetterSpacing</Code>
              </td>
              <td>letter-spacing</td>
              <td>
                <Code>font-spacing-wide-01</Code>
              </td>
              <td>0.025 em</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Primary</HeadingLink>
        <HeadingLink level={5}>Color</HeadingLink>
        <h6>Base</h6>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>primaryBackgroundColor</Code>
              </td>
              <td>Button container</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>primaryFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
          </tbody>
        </DxcTable>
        <h6>Interactive</h6>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>primaryHoverBackgroundColor</Code>
              </td>
              <td>Container fill:hover</td>
              <td>
                <Code>color-purple-800</Code>
              </td>
              <td>#4b1c7d</td>
            </tr>
            <tr>
              <td>
                <Code>primaryActiveBackgroundColor</Code>
              </td>
              <td>Container fill:active</td>
              <td>
                <Code>color-purple-900</Code>
              </td>
              <td>#321353</td>
            </tr>
            <tr>
              <td>
                <Code>primaryDisabledBackgroundColor</Code>
              </td>
              <td>Container fill:disabled</td>
              <td>
                <Code>color-grey-100</Code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <Code>primaryDisabledFontColor</Code>
              </td>
              <td>Label:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>primaryFocusBorderColor</Code>
              </td>
              <td>Container border:focus</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Border</HeadingLink>
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
                <Code>primaryBorderThickness</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-width-0</Code>
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <Code>primaryBorderStyle</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-style-none</Code>
              </td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>primaryBorderRadius</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-radius-medium</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Typography</HeadingLink>
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
                <Code>primaryFontFamily</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>primaryFontSize</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>1 rem / 16px</td>
            </tr>
            <tr>
              <td>
                <Code>primaryBorderWeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-regular</Code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Secondary</HeadingLink>
        <HeadingLink level={5}>Color</HeadingLink>
        <h6>Base</h6>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>secondaryBackgroundColor</Code>
              </td>
              <td>Container fill</td>
              <td>
                <Code>transparent</Code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryBorderColor</Code>
              </td>
              <td>Container border</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
          </tbody>
        </DxcTable>
        <h6>Interactive</h6>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>secondaryHoverBackgroundColor</Code>
              </td>
              <td>Container fill:hover</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryHoverFontColor</Code>
              </td>
              <td>Label:hover</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryActiveBackgroundColor</Code>
              </td>
              <td>Container fill:active</td>
              <td>
                <Code>color-purple-900</Code>
              </td>
              <td>#321353</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryDisabledBackgroundColor</Code>
              </td>
              <td>Container fill:disabled</td>
              <td>
                <Code>color-transparent</Code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryDisabledFontColor</Code>
              </td>
              <td>Label:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryFocusBorderColor</Code>
              </td>
              <td>Container border:focus</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryDisabledBorderColor</Code>
              </td>
              <td>Container border:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Border</HeadingLink>
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
                <Code>secondaryBorderThickness</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-width-1 </Code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryBorderStyle</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryBorderRadius</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-radius-medium</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Typography</HeadingLink>
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
                <Code>secondaryFontFamily</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryFontSize</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>16px / 1 rem</td>
            </tr>
            <tr>
              <td>
                <Code>secondaryFontWeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-regular</Code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Text</HeadingLink>
        <HeadingLink level={5}>Color</HeadingLink>
        <h6>Base</h6>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>textBackgroundColor</Code>
              </td>
              <td>Container fill</td>
              <td>
                <Code>color-transparent</Code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <Code>textFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-purple-700</Code>
              </td>
              <td>#5f249f</td>
            </tr>
          </tbody>
        </DxcTable>
        <h6>Interactive</h6>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>textHoverBackgroundColor</Code>
              </td>
              <td>Container fill:hover</td>
              <td>
                <Code>color-purple-100</Code>
              </td>
              <td>#f2eafa</td>
            </tr>
            <tr>
              <td>
                <Code>textActiveBackgroundColor</Code>
              </td>
              <td>Container fill:active</td>
              <td>
                <Code>color-purple-200</Code>
              </td>
              <td>#e5d5f6</td>
            </tr>
            <tr>
              <td>
                <Code>textDisabledBackgroundColor</Code>
              </td>
              <td>Container fill:disabled</td>
              <td>
                <Code>color-transparent</Code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <Code>textDisabledFontColor</Code>
              </td>
              <td>Label:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>textFocusBorderColor</Code>
              </td>
              <td>Container border:focus</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Border</HeadingLink>
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
                <Code>textBorderThickness</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-width-0</Code>
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <Code>textBorderStyle</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-style-none</Code>
              </td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>textBorderRadius</Code>
              </td>
              <td>Container</td>
              <td>
                <Code>border-radius-medium</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Typography</HeadingLink>
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
                <Code>textFontFamily</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>textFontSize</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>16px / 1 rem</td>
            </tr>
            <tr>
              <td>
                <Code>textFontWeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-regular</Code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
              text="2.4.7: Focus Visible"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/on-input"
              text="3.2.2: On Input"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#button"
              text="Button Design Pattern"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/button/specs/ButtonSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ButtonSpecsPage;
