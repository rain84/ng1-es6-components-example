export default class AppController {
  constructor( $state, page ) {
    'ngInject';

    Object.assign( this, { $state, page } );
  }
}
