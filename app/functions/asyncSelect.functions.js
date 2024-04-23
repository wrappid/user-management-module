export const __ROUTES_GET_OPTION_VALUE = "__ROUTES_GET_OPTION_VALUE";

export const permission = {
  getOptionLabel: (data) => {
    return data.url;
  },
  getOptionValue: (data) => {
    return data.url;
  },
  isOptionsEqualToValue: (option, value) => {
    return option.url === value;
  },
};