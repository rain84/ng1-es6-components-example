export default function component( $stateProvider ) {
  'ngInject';

  $stateProvider
    .state( 'app', {
      abstract : true,
      template : '<layout-app></layout-app>'
    } );
}
