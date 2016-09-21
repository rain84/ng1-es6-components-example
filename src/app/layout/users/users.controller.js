let prepareUsers = Symbol( 'prepareUsers' );

export default class UsersController {
  constructor( usersMock, $log, $timeout, $scope ) {
    'ngInject';

    Object.assign( this, { $log, $timeout, $scope } );

    this.rowsCount = null;
    this.users = [];
    this.usersByGroups = [];
    this.groups = [];

    usersMock.getData()
      // .then( data => (data.length = 10, data) )
      .then( this[prepareUsers].bind( this ) )
    ;
  }

  $onInit() {
    let unwatch = this.$scope.$watch(
      '$ctrl.rowsCount',
      ( newVal ) => _.isNumber( newVal ) && unwatch()
    );
  }

  $postLink() {
    this.showAs = 'table';
  }

  updateCount( count ) {
    if ( this.rowsCount !== count ) {
      this.$timeout( () => this.rowsCount = count );
    }
  }

  toggleGroup( group ) {
    group.isChecked = !group.isChecked;
  }

  [prepareUsers]( users ) {
    let date, mm, dd, yyyy;
    let usersByGroups, groups;
    let formatData = item => {
      date = new Date( item.dob );
      mm = date.getMonth() + 1;
      dd = date.getDay();
      yyyy = date.getFullYear();

      mm < 10 && (mm = '0' + mm);
      dd < 10 && (dd = '0' + dd);

      item.dob = `${dd}.${mm}.${yyyy}`;

      return item;
    };

    users = users.map( formatData );
    usersByGroups = _.groupBy( users, item => item.group );
    groups = _( usersByGroups )
      .keys()
      .map( ( item, index )=> ({
        isChecked : index === 0,
        name      : item
      }) )
      .value();

    Object.assign( this, { users, usersByGroups, groups } );
  }
}
