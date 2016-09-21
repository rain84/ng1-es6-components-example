let activate = Symbol( 'activate' ),
  getAll = Symbol( 'activate' ),
  getStateName = Symbol( 'activate' );


export default class PageHelperService {

  constructor( $state, $rootScope ) {
    'ngInject';

    Object.assign( this, { $state, $rootScope } );

    let unwatch = $rootScope.$on( '$stateChangeSuccess', this[activate].bind( this ) );
    $rootScope.$on( '$destroy', unwatch );

    this[activate]();
  }

  getName() {return this[getStateName]( this.$state.current ); }

  isCurrent( pageName ) {
    return this.name === pageName;
  }

  [activate]() {
    this.all = this[getAll]();
    this.name = this.getName();
  }

  [getAll]() {
    let layoutRegex = /^app.[^.]+$/;
    let allStates = this.$state.get();
    //noinspection UnnecessaryLocalVariableJS
    let pages = _( allStates )
      .filter( state => layoutRegex.test( state.name ) )
      .map( this[getStateName] )
      .value()
      ;

    return pages;
  }

  [getStateName]( state ) { return state.name.slice( 4 ); }
}
