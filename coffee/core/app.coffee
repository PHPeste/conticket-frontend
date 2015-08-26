angular.module "ConticketApp", ['ngMaterial']
.config ($mdThemingProvider)->
  $mdThemingProvider.theme 'default'
    .primaryPalette 'cyan'
    .accentPalette 'light-blue'
