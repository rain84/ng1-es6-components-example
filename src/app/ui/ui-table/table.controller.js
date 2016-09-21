let
  prepareColumns = Symbol( 'prepareColumns' ),
  updateRows = Symbol( 'updateRows' ),
  rows = Symbol( 'rows' );


export default class UITable {
  constructor( $log, $timeout, $scope, $window ) {
    'ngInject';

    Object.assign( this, { $log, $timeout, $scope, $window } );

    this.$onChanges = _.debounce( this.$onChanges, 100 );
  }

  $onInit() {
    this.columns = [];
    this.activeColumn = null;   // {name, rowProp, sortBy}
    this.rowsIsReady = false;
    !this.filterBy && (this.filterBy = '');
    this[rows] = [];

    this.$timeout( () => {
      // coping input rows for preventing data mutations
      this[rows] = _.cloneDeep( this.rows );
      this.rows = null;
      this[updateRows]();
      this.rowsIsReady = true;
    } );
  }

  $doCheck() {}

  $onChanges( changesObj ) {
    let filterByIsChanged = changesObj.filterBy && !changesObj.filterBy.isFirstChange();
    filterByIsChanged && this[updateRows]( 'filter' );
  }

  $postLink() {
    this[prepareColumns]();
  }

  registerColumn( column ) {
    this.columns.push( column );
  }

  onSort( column ) {
    !this.isActive( column ) && (this.activeColumn = column);

    column.sortBy = column.sortBy === 'desc'
      ? 'asc'
      : 'desc';

    this[updateRows]();
  }

  isActive( column ) {
    return this.activeColumn === column;
  }

  [updateRows]( caller ) {
    let order = {
      filed   : this.activeColumn.rowProp,
      reverse : this.activeColumn.sortBy === 'desc'
    };
    this.rows = this.$scope.$eval( `rows | filter:'${this.filterBy}' | orderBy:'${order.filed}':${order.reverse}`,
                                   {
                                     rows : this[rows]
                                   } );

    _.isFunction(this.onRowsUpdated) && this.onRowsUpdated( { rowsCount : this.rows.length } );
    caller === 'byFilter' && this.$scope.$digest();
  }

  [prepareColumns]() {
    let columns = this.columns;
    let activeIndex = columns.findIndex( item => item.isActive );

    this.activeColumn = ~activeIndex ? columns[activeIndex] : columns[0];
    columns.forEach( item => delete item.isActive );
  }
}
