export default function route( $stateProvider, $urlRouterProvider ) {
  'ngInject';

  $urlRouterProvider.otherwise( '/home' );
}
