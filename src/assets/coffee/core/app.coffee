angular.module "ConticketApp", ['ngMaterial']
.config ($mdThemingProvider)->
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange')
