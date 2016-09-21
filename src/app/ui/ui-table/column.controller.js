export default class UITableColumn {

  constructor( $log, $attrs, $transclude ) {
    'ngInject';

    //  $attrs are { row-prop, active?, sort-by? }
    //  I do not want to use bindings on component's definition, because attrs are not "this" props
    Object.assign( this, { $log, $attrs, $transclude } );
  }

  $onInit() {
    let $attrs = this.$attrs;
    let column = {
      name     : this.$transclude().text(),
      rowProp  : $attrs.rowProp,
      sortBy   : $attrs.sortBy || 'asc',
      isActive : !!~Object.keys( $attrs ).indexOf( 'active' )
    };

    this.uiTableCtrl.registerColumn( column );
  }

  $postLink() {}
}

