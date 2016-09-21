export default function component( $stateProvider ) {
  'ngInject';

  $stateProvider
    .state( 'app.home', {
      url      : '/home',
      template : '<layout-home flex="100"></layout-home>'
    } );
}
