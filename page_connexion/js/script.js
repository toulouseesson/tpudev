$(document).ready(function() {
  
  // Si vous vous demandez pourquoi on fait ça...
  // https://stackoverflow.com/questions/16284724/what-does-var-app-app-do
  window.MyApp = window.MyApp || {};

  function markInputAsValid( input ) {
    // Utiliser les classes Bootstrap .is-valid et .is-invalid
    input
    .addClass('is-valid')
    .removeClass('is-invalid');
    // On va se servir de l'id pour le sélecteur suivant
    // (balise small adjacente au champ input)
    var inputId = input.attr( 'id' );
    $( '#' + inputId + ' + small' )
    .removeClass( 'show' );
  }

  function markInputAsInvalid( input, message ) {
    input
    .addClass('is-invalid')
    .removeClass('is-valid');
    var inputId = input.attr( 'id' );
    console.log( inputId, $( '#' + inputId + ' + small' ), message );
    $( '#' + inputId + ' + small' )
    .addClass( 'show' )
    .html( message );
  }

  // Paramètres pour les envois par AJAX
  $.ajaxSetup({
      headers: {
          'content-type': 'application/json'
      }
  });
  
  // Gestion des erreurs
  $( document ).ajaxError(function(event, jqXHR,  ajaxSettings, thrownError) {
    var data = JSON.parse(jqXHR.responseText);
    window.MyApp.alert( 'danger', data.message );
  });
  
  $('#register-username')
  .change(function(e) {
    var inputUsername = $(this);
    var username = inputUsername.val();
    var re = /^[A-Za-z][A-Za-z0-9_]+$/;
    var isUsernameValid = username.match(re);
    if(! isUsernameValid) {
      markInputAsInvalid( inputUsername,
        "L'identifiant doit commencer par une lettre, et être suivi par " +
        "au moins une lettre OU un chiffre OU un tiret bas _"
      );
      return;
    }

    // Envoi d'une requête AJAX vers une URL qui va nous renvoyer un
    // objet JSON avec un booléen "success" qui va nous dire si le username
    // est disponible (true) ou non (false)
    $.get(
      'http://localhost:3000/jquery/ajax/username-check?username=' + username,
      function(response) {
        console.log(response.success)
        if(response.success) {
          markInputAsValid( inputUsername );
        }
        else {
          markInputAsInvalid( inputUsername, "Cet identifiant est déjà pris" );
        }
      }
    );
  });

  $('#register-email')
  .change(function(e) {
    var inputEmail = $(this);
    var email = inputEmail.val();
    var re = /^[A-Za-z][A-Za-z0-9_\.]+@[A-Za-z][A-Za-z0-9_\.]+\.[a-z]{2,}$/;
    var isEmailValid = email.match(re);
    if(! isEmailValid) {
        markInputAsInvalid( inputEmail );
        return;
    }

    // Même chose que pour le username, cette fois avec l'email
    $.get(
      'http://localhost:3000/jquery/ajax/email-check?email=' + email,
      function(response) {
        console.log(response.success)
        if(response.success) {
          markInputAsValid( inputEmail );
        }
        else {
          markInputAsInvalid( inputEmail, "Cet e-mail est déjà pris" );
        }
      }
    );
  });

$('#register-password')
  .change(function(e) {
    var inputPassword = $(this);
    var password = inputPassword.val();
    if(password.length < 4) {
        markInputAsInvalid( inputPassword, "Mot de passe trop court (4 caractères minimum" );
        return;
    }

    markInputAsValid( inputPassword );
  });

  // Soumission du formulaire d'inscription vers le serveur
  $('#form-register').submit(function(e) {
    var inputs = $(this).find('input');
    var emptyOrInvalid = [];
    inputs.each( function( index, elem ) {
      var input = $( this );
      if( ! input.val() || ! input.hasClass( 'is-valid' ) ) {
        emptyOrInvalid.push( input.siblings( 'label' ).html() );
      }
    } );
    // Si au moins un champ est vide ou n'a pas is-valid
    // on notifie et on interrompt par return
    if( emptyOrInvalid.length ) {
      var message = emptyOrInvalid.length + ' champs vides ou ' +
        'invalides :<br>' + emptyOrInvalid.join(', ');
      MyApp.alert( 'danger', message );
      return false;
    }
    // Dans chaque itération input[i] est un élément DOM
    var username = $('#register-username').val();
    var email    = $('#register-email').val();
    var password = $('#register-password').val();
    var user = {
      username: username,
      email: email,
      password: password
    };
    var userJSON = JSON.stringify(user);
    console.log(user);
    console.log(userJSON);
    e.preventDefault();
    inputs.val('').removeClass('is-valid');
    $.post(
      '/jquery/ajax/register',
      userJSON,
      function(data) {
        window.MyApp.alert( 'success', 'Bienvenue, ' + data.user.username );
      },
      'json'
    );
  })
  
  
  $('#form-login').submit(function(e) {
      var identifier = $('#login-identifier').val();
      var password   = $('#login-password').val();
      var user = {
          identifier: identifier,
          password: password
      };
      var userJSON = JSON.stringify(user);
      e.preventDefault();
      $(this).find('input').val('');
      $.post(
        '/jquery/ajax/login',
        userJSON,
        function(data) {
          MyApp.alert('success', "Vous êtes identifié, " + data.user.username);
        },
        'json'
      );
  })
  
  var onglets = $('#onglets li a');
  
  onglets.click(function(e) {
      var link = $(this);
      onglets.removeClass('active');
      link.addClass('active');
      var idPanneau = link.data('tab-id');
      $('.tab').hide();
      $('#' + idPanneau).show();
  });

  
});
function connect() {
  swal({
  title: 'Succès !',
  text: 'Connexion en cours...',
  timer: 3000,
  onOpen: function () {
    swal.showLoading()
  }
}).then(function (result) {
  if (result.dismiss === 'timer') {
    console.log('I was closed by the timer');
    window.location= 'index.html'
  }
})
};

function inscription() {
  $.ajax({
            url: 'http://localhost/tpudev/inscription.php',
            method: 'post',
            data: 'serialize',
            dataType: 'json', // pour le renvoie de donnée PHP serveur => client JS
            success: function success() { // si coté serveur PHP y'a pas d'erreur (ex: erreur 502)
                // tu fais ce que tu veux, ex : une redirection
                alert("Inscription réussi");
            }
        });
}


