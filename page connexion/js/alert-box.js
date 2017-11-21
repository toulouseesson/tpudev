// alert-box.js

$(document).ready(function() {

  /**
   * L'objet window est toujours accessible à JavaScript dans le navigateur.
   * On peut lui assigner des propriétés assez librement (à condition de
   * ne pas empiéter sur des propriétés prédéfinies de window).
   * On va créer une "variable globale" MyApp comme propriété de window,
   * pour que les scripts de l'application puissent partager des données
   * via cet objet.
   * Ci-dessous, la 1ère ligne indique de créer un objet vide si
   * window.MyApp n'existe pas, et de l'assigner à window.MyApp.
   */
  window.MyApp = window.MyApp || {};
  // On crée un objet jQuery contenant l'élément div#alert-box.
  window.MyApp.alertBox = $( '#alert-box' );
  
  /**
   * Fonction pour notifier via la boîte d'alertes
   * Prend comme arguments:
   *     - status:  'danger' ou 'success'
   *     - message: le message à afficher
   */
  window.MyApp.alert = function( status, message ) {
    MyApp.alertBox.removeClass( 'alert-danger alert-success' )
    .addClass( 'show alert-' + status )
    .html( message );
    
    // Après un délai de 5 sec. (2ème param. de setTimeout = millisec.)
    // On va enlever la classe "show" ce qui va faire se "replier" (collapser)
    // la boîte. Voir https://getbootstrap.com/docs/4.0/components/collapse/
    setTimeout( function() {
      MyApp.alertBox.removeClass( 'show' );
    }, 5000 );
  }
});