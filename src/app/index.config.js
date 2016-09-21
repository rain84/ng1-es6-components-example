export default function appConfig( $logProvider, $locationProvider, $mdThemingProvider ) {
  'ngInject';

  $logProvider.debugEnabled( true );
  $locationProvider.html5Mode( true );

  $mdThemingProvider.theme( 'default' )
    .primaryPalette( 'teal' )
    .accentPalette( 'red' )
  // .dark()
  ;

}
