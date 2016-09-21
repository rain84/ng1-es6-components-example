import controller from "./table.controller";

export default {
  transclude  : true,
  controller,
  bindings    : {
    rows        : '<',
    filterBy    : '<',
    onRowsUpdated : '&?'
  },
  templateUrl : 'app/ui/ui-table/table.view.html'
};
