import {
  DxcText,
  DxcList,
  DxcTable,
  DxcStack,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import Code from "../../../common/Code";
import selectSingleSpecsStates from "./images/select_input_states_single.png";
import selectMultipleSpecsStates from "./images/select_input_states_multiple.png";
import selectSingleOptionState from "./images/option_item_states_single.png";
import selectMultipleOptionState from "./images/option_item_states_multiple.png";
import selectAnatomy from "./images/select_anatomy.png";
import selectFilterable from "./images/select_filterable.png";
import selectOptional from "./images/select_optional.png";
import selectSpecs from "./images/select_specs.png";

const SelectSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={selectSpecs} alt="Select specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <HeadingLink level={4}>Select input</HeadingLink>
        <DxcText as="p">
          States are defined for select component based on the interactions that
          the user can reproduce. The states are: <strong>enabled</strong>,{" "}
          <strong>hover</strong>, <strong>focus</strong>,{" "}
          <strong>active</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>:
        </DxcText>
        <Image src={selectSingleSpecsStates} alt="Select states" />
        <HeadingLink level={4}>Multiple selection</HeadingLink>
        <DxcText as="p">
          Allows the user to select more than one option from the list.
        </DxcText>
        <Image src={selectMultipleSpecsStates} alt="Select multiple option" />
        <HeadingLink level={4}>List options</HeadingLink>
        <DxcText as="p">
          To indicate which items are selected and which not, the
          select-multiple variant integrates a checkbox pairing with each option
          from the dropdown.
        </DxcText>
        <HeadingLink level={5}>Single</HeadingLink>
        <Figure caption="List option element states for single select.">
          <Image
            src={selectSingleOptionState}
            alt="List option element states for select single"
          />
        </Figure>
        <HeadingLink level={5}>Multiple</HeadingLink>
        <Figure caption="List option element states for select multiple.">
          <Image
            src={selectMultipleOptionState}
            alt="List option element states for select multiple"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={selectAnatomy} alt="Select anatomy" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Helper text</DxcText>
          <DxcText>Selection indicator (multiple)</DxcText>
          <DxcText>List dialog</DxcText>
          <DxcText>Action - Clear</DxcText>
          <DxcText>Collapse indicator</DxcText>
          <DxcText>List option</DxcText>
          <DxcText>Divider</DxcText>
          <DxcText>List option label</DxcText>
          <DxcText>List option icon</DxcText>
          <DxcText>List option checkbox (multiple)</DxcText>
          <DxcText>Select value</DxcText>
          <DxcText>List item selected indicator</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Filter</HeadingLink>
        <Figure caption="Filterable single and multi variants.">
          <Image
            src={selectFilterable}
            alt="Filterable single and multi variants"
          />
        </Figure>
        <DxcList>
          <DxcText>Both select variants can be filterable.</DxcText>
          <DxcText>
            Use the filter when the number of items in the optionList is
            extremely long (± 15 elements).
          </DxcText>
          <DxcText>
            This list will be reduced to show only the matches as the user
            types.
          </DxcText>
          <DxcText>
            The value will change when the user types a string that matches an
            option from the list or pick one manually.
          </DxcText>
          <DxcText>
            When the search does not match any result, a &quot;no matches
            found&quot; message will be displayed.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Required and optional</HeadingLink>
        <Figure caption="Required with error and optional select examples.">
          <Image
            src={selectOptional}
            alt="Required with error and optional select examples"
          />
        </Figure>
        <DxcList>
          <DxcText>
            When labeled as optional, the select will display an option matching
            the placeholder to allow leaving it empty.
          </DxcText>
          <DxcText>
            When no optional label appears, the select is required.
          </DxcText>
          <DxcText>
            If the select was left empty, the required should display the error
            &quot;This field can not be empty&quot; when the select loses the
            focus.
          </DxcText>
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
                <Code>labelFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontColor</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>errorMessageColor</Code>
              </td>
              <td>Error message</td>
              <td>
                <Code>color-red-700</Code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <Code>valueFontColor</Code>
              </td>
              <td>Value</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>placeholderFontColor</Code>
              </td>
              <td>Value</td>
              <td>
                <Code>color-grey-800-a</Code>
              </td>
              <td>#000000b3</td>
            </tr>
            <tr>
              <td>
                <Code>disabledColor</Code>
              </td>
              <td>All:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>listDialogBackgroundColor</Code>
              </td>
              <td>List dialog</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>listDialogBorderColor</Code>
              </td>
              <td>List dialog</td>
              <td>
                <Code>color-grey-400</Code>
              </td>
              <td>#bfbfbf</td>
            </tr>
            <tr>
              <td>
                <Code>listOptionFontColor</Code>
              </td>
              <td>List option</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>listOptionIconColor</Code>
              </td>
              <td>List item icon</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>listOptionDividerColor</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>color-grey-200</Code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <Code>unselectedHoverListOptionBackgroundColor</Code>
              </td>
              <td>List option:hover unselected</td>
              <td>
                <Code>color-grey-100</Code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <Code>unselectedActiveListOptionBackgroundColor</Code>
              </td>
              <td>List option:active unselected</td>
              <td>
                <Code>color-grey-200</Code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <Code>selectedListOptionBackgroundColor</Code>
              </td>
              <td>List option selected</td>
              <td>
                <Code>color-blue-100</Code>
              </td>
              <td>#e6f4ff</td>
            </tr>
            <tr>
              <td>
                <Code>selectedHoverListOptionBackgroundColor</Code>
              </td>
              <td>List option:hover selected</td>
              <td>
                <Code>color-blue-200</Code>
              </td>
              <td>#cceaff</td>
            </tr>
            <tr>
              <td>
                <Code>selectedActiveListOptionBackgroundColor</Code>
              </td>
              <td>List option:active selected</td>
              <td>
                <Code>color-blue-300</Code>
              </td>
              <td>#99d5ff</td>
            </tr>
            <tr>
              <td>
                <Code>selectedListOptionIconColor</Code>
              </td>
              <td>List option selected indicator</td>
              <td>
                <Code>color-blue-900</Code>
              </td>
              <td>#003c66</td>
            </tr>
            <tr>
              <td>
                <Code>focusListOptionBorderColor</Code>
              </td>
              <td>List option:hover selected</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <Code>systemMessageFontColor</Code>
              </td>
              <td>System message</td>
              <td>
                <Code>color-grey-700</Code>
              </td>
              <td>#666666</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Input</HeadingLink>
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
                <Code>enabledInputBorderColor</Code>
              </td>
              <td>Border:enabled</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>hoverInputBorderColor</Code>
              </td>
              <td>Border:hover</td>
              <td>
                <Code>color-purple-500</Code>
              </td>
              <td>#a46ede</td>
            </tr>
            <tr>
              <td>
                <Code>focusInputBorderColor</Code>
              </td>
              <td>Border:focus</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <Code>errorInputBorderColor</Code>
              </td>
              <td>Border:error</td>
              <td>
                <Code>color-red-700</Code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <Code>hoverInputErrorBorderColor</Code>
              </td>
              <td>Border:hover on error</td>
              <td>
                <Code>color-red-600</Code>
              </td>
              <td>#fe0123</td>
            </tr>
            <tr>
              <td>
                <Code>disabledInputBorderColor</Code>
              </td>
              <td>Border:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>disabledInputBackgroundColor</Code>
              </td>
              <td>Background:disabled</td>
              <td>
                <Code>color-grey-100</Code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <Code>errorIconColor</Code>
              </td>
              <td>Error icon</td>
              <td>
                <Code>color-red-700</Code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <Code>collapseIndicatorColor</Code>
              </td>
              <td>Collapse indicator</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Selection indicator</HeadingLink>
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
                <Code>selectionIndicatorFontColor</Code>
              </td>
              <td>Selection indicator value</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>selectionIndicatorBorderColor</Code>
              </td>
              <td>Selection indicator</td>
              <td>
                <Code>color-grey-400</Code>
              </td>
              <td>#bfbfbf</td>
            </tr>
            <tr>
              <td>
                <Code>selectionIndicatorBackgroundColor</Code>
              </td>
              <td>Selection indicator</td>
              <td>
                <Code>color-grey-50</Code>
              </td>
              <td>#fafafa</td>
            </tr>
            <tr>
              <td>
                <Code>enabledSelectionIndicatorActionBackgroundColor</Code>
              </td>
              <td>Selection indicator</td>
              <td>
                <Code>color-transparent</Code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <Code>hoverSelectionIndicatorActionBackgroundColor</Code>
              </td>
              <td>Selection indicator:hover</td>
              <td>
                <Code>color-grey-100</Code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <Code>activeSelectionIndicatorActionBackgroundColor</Code>
              </td>
              <td>Selection indicator:active</td>
              <td>
                <Code>color-grey-300</Code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <Code>enabledSelectionIndicatorActionIconColor</Code>
              </td>
              <td>Selection indicator icon</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>hoverSelectionIndicatorActionIconColor</Code>
              </td>
              <td>Selection indicator icon:hover</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>activeSelectionIndicatorActionIconColor</Code>
              </td>
              <td>Selection indicator icon:active</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Clear action</HeadingLink>
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
                <Code>actionBackgroundColor</Code>
              </td>
              <td>Action</td>
              <td>
                <Code>color-transparent</Code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <Code>hoverActionBackgroundColor</Code>
              </td>
              <td>Action:hover</td>
              <td>
                <Code>color-grey-100</Code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <Code>activeActionBackgroundColor</Code>
              </td>
              <td>Action:active</td>
              <td>
                <Code>color-grey-300</Code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <Code>actionIconColor</Code>
              </td>
              <td>Action icon</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>hoverActionIconColor</Code>
              </td>
              <td>Action icon:hover</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>activeActionIconColor</Code>
              </td>
              <td>Action icon:active</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Typography</HeadingLink>
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
                <Code>fontFamily</Code>
              </td>
              <td>All</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontSize</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontWeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-weight-semibold</Code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontStyle</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>labelLineHeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-leading-loose-01</Code>
              </td>
              <td>1.715em</td>
            </tr>
            <tr>
              <td>
                <Code>optionalLabelFontWeight</Code>
              </td>
              <td>Label optional</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>valueFontSize</Code>
              </td>
              <td>Value</td>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <Code>valueFontWeight</Code>
              </td>
              <td>Value</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>valueFontStyle</Code>
              </td>
              <td>Value</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>valueLineHeight</Code>
              </td>
              <td>Value</td>
              <td>
                <Code>font-leading-normal</Code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontSize</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontWeight</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontStyle</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextLineHeight</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-leading-normal</Code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <Code>listOptionFontSize</Code>
              </td>
              <td>List option</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <Code>listOptionFontWeight</Code>
              </td>
              <td>List option</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>listOptionFontStyle</Code>
              </td>
              <td>List option</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>listGroupLabelFontWeight</Code>
              </td>
              <td>List group item</td>
              <td>
                <Code>font-weight-semibold</Code>
              </td>
              <td>600</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>border</Code>
              </td>
              <td>Input container</td>
              <td>
                <Code>border-width-1</Code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <Code>border</Code>
              </td>
              <td>Input container</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <Code>border</Code>
              </td>
              <td>Input container:focus</td>
              <td>
                <Code>border-width-1</Code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <Code>border</Code>
              </td>
              <td>Input container:focus</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <Code>box-shadow</Code>
              </td>
              <td>Input container:focus</td>
              <td>
                <Code>-</Code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
            <tr>
              <td>
                <Code>box-shadow</Code>
              </td>
              <td>Input container:error</td>
              <td>
                <Code>-</Code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
            <tr>
              <td>
                <Code>box-shadow</Code>
              </td>
              <td>List dialog</td>
              <td>
                <Code>shadow-default</Code>
              </td>
              <td>0 4px 6px -1px rgba(0,0,0,0.1)</td>
            </tr>
            <tr>
              <td>
                <Code>border-radius</Code>
              </td>
              <td>Input</td>
              <td>
                <Code>border-radius-medium</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <Code>border-radius</Code>
              </td>
              <td>Selection indicator / Clear action</td>
              <td>
                <Code>border-radius-small</Code>
              </td>
              <td>0.125rem / 2px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Spacing</HeadingLink>
        <DxcText as="p">
          The select component <strong>input</strong> share the{" "}
          <DxcLink
            href="/components/text-input/specifications"
            text=" same spacing tokens of the text input"
          />
          .
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>padding-left</Code>
              </td>
              <td>List dialog</td>
              <td>
                <Code>spacing-8</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-right</Code>
              </td>
              <td>List dialog</td>
              <td>
                <Code>spacing-8</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>margin-top</Code>
              </td>
              <td>List dialog content</td>
              <td>
                <Code>spacing-4</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <Code>margin-bottom</Code>
              </td>
              <td>List dialog content</td>
              <td>
                <Code>spacing-4</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-top</Code>
              </td>
              <td>List option</td>
              <td>
                <Code>spacing-4</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-bottom</Code>
              </td>
              <td>List option</td>
              <td>
                <Code>spacing-4</Code>
              </td>
              <td>0.25rem / 4px</td>
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
              <th>Width</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>240px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code> (<em>default</em>)
              </td>
              <td>360px</td>
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
              <td>100%</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          Select <Code>margin</Code> can use the values:
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
          component: <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code>{" "}
          and
          <Code>right</Code>.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html"
              text="SC 3.2.2: On Input"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"
              text="3.8 Combobox"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"
              text="3.14 Listbox"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA examples 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-none.html"
              text="Editable Combobox without Autocomplete Example"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select/specs/SelectSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SelectSpecsPage;
