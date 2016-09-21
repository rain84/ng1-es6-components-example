import componentTable from "./table.component";
import componentColumn from "./column.component";

angular.module( 'app.ui.table', [] )
  .component( 'uiTable', componentTable )
  .component( 'uiTableColumn', componentColumn )
;
