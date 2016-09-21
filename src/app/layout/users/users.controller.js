let prepareUsers = Symbol( 'prepareUsers' );

export default class UsersController {
  constructor( usersMock, $log, $timeout, $scope ) {
    'ngInject';

    Object.assign( this, { $log, $timeout, $scope } );

    this.isUsersReady = false;
    this.isNgReady = false;

    this.rowsCount = null;
    this.users = [];
    this.usersByGroups = [];
    this.groups = [];
    usersMock.getData()
      .then( data => {
        this.users = this[prepareUsers]( data );

        this.usersByGroups = _.groupBy( this.users, item => item.group );
        this.groups = _( this.usersByGroups )
          .keys()
          .map( ( item, index )=> ({
            isChecked : index === 0,
            name      : item
          }) )
          .value();

        this.isUsersReady = true;
      } );
  }

  $onInit() {
    let unwatch = this.$scope.$watch( '$ctrl.rowsCount', ( newVal ) => {
      if ( _.isNumber( newVal ) ) {
        this.isNgReady = true;
        unwatch();
      }
    } );
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

    return users.map( item => {
      date = new Date( item.dob );
      mm = date.getMonth() + 1;
      dd = date.getDay();
      yyyy = date.getFullYear();

      mm < 10 && (mm = '0' + mm);
      dd < 10 && (dd = '0' + dd);

      item.dob = `${dd}.${mm}.${yyyy}`;

      return item;
    } );
  }
}
