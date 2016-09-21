import controller from "./column.controller";

export default {
  transclude : true,
  require    : { uiTableCtrl : '^uiTable' },
  controller
};
