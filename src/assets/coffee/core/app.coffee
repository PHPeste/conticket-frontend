angular.module "ConticketApp", ['ngMaterial', 'ngMdIcons']
.config ($mdThemingProvider)->
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('orange')
