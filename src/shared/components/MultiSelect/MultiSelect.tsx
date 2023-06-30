import Select, {
  CSSObjectWithLabel,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  components,
  OptionProps,
} from "react-select";

import "./MultiSelect.scss";
import { SelectOption } from "../../../core/models/select-option.model";

interface MultiSelectProps {
  options: SelectOption[];
}

const MultiSelect = (props: MultiSelectProps) => {
  const colorStyle = {
    control: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<SelectOption, true, GroupBase<SelectOption>>
    ) => ({
      ...baseStyles,
      width: "100%",
      height: "50px",
      fontFamily: "Noto Sans TC",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "23px",
      letterSpacing: "0.07em",
      borderRadius: "8px",
      borderColor: state.isFocused ? "#577655" : "#9cb09a",
      boxShadow: state.isFocused
        ? " 0px 0px 2px 3px rgba(212, 240, 210, 0.4)"
        : "transparent",
      "&:hover": {
        borderColor: "#9cb09a",
      },
      "&:disabled": {
        color: "#b0b0b0",
        border: "1px solid #a8c0a6",
      },
    }),
    option: (
      baseStyles: CSSObjectWithLabel,
      state: OptionProps<SelectOption, true, GroupBase<SelectOption>>
    ) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? "#eea6944d" : "white",
      ":hover": {
        ...baseStyles[":hover"],
        backgroundColor: "#eea6944d",
      },
    }),
  };

  const IndicatorSeparator = () => {
    return <span />;
  };

  const DropdownIndicator = (
    props: DropdownIndicatorProps<SelectOption, true>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <div className="indicator-icon"></div>
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      options={props.options}
      placeholder="選擇你想去的城市"
      styles={colorStyle}
      components={{ IndicatorSeparator, DropdownIndicator }}
      isMulti
    />
  );
};

export default MultiSelect;
