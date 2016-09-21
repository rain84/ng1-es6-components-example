export default function component( $stateProvider ) {
  'ngInject';

  $stateProvider
    .state( 'app.users', {
      url      : '/users',
      template : '<layout-users></layout-users>'
    } );
}
