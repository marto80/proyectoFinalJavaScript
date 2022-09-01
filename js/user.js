// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC471ShxizDlBknom4JMLpRWSVEfOb-9gI",
    authDomain: "login-derose-palermo.firebaseapp.com",
    projectId: "login-derose-palermo",
    storageBucket: "login-derose-palermo.appspot.com",
    messagingSenderId: "766014858364",
    appId: "1:766014858364:web:7f196004024167442d15f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables

function validateUser () {

  firebase.auth().onAuthStateChanged( async function(user) {
    if (user != null) {
        await firebase.database().ref('users/' + user.uid).once("value", snap => {

          console.log(snap.val().grado);
          if(snap.val().grado == 'iniciante'){

            //borra el link de acceso a la clase grabada "meditación" y agrega un 
            //texto que dice que no tiene acceso. (todo manipulando el html)
            var elementePracticaCompleta = document.getElementById('idPracticaCompleta');
            elementePracticaCompleta.remove();

            var imagePracticaCompleta = document.getElementById('idImagePracticaCompleta');
            
            var inputPracticaCompleta = document.createElement("h6");
            inputPracticaCompleta.setAttribute("style","margin-top:10px;")
            inputPracticaCompleta.textContent = "*Contenido habilitado sólo para alumnos avanzados"

            imagePracticaCompleta.parentNode.insertBefore(inputPracticaCompleta, imagePracticaCompleta.nextSibling);

          }

      })
    } else {

          //borra el link de acceso a la clase grabada "práctica completa" y agrega un texto que dice que no tiene acceso. (todo manipulando el html)
          var elementePracticaCompleta = document.getElementById('idPracticaCompleta');
          elementePracticaCompleta.remove();

          var imagePracticaCompleta = document.getElementById('idImagePracticaCompleta');
          
          var inputPracticaCompleta = document.createElement("h6");
          inputPracticaCompleta.setAttribute("style","margin-top:10px;")
          inputPracticaCompleta.textContent = "*Contenido habilitado sólo para alumnos avanzados"

          imagePracticaCompleta.parentNode.insertBefore(inputPracticaCompleta, imagePracticaCompleta.nextSibling);


          //borra el link de acceso a la clase grabada "entrenamiento" y agrega un texto que dice que no tiene acceso. (todo manipulando el html)
          var elementeEntrenamiento = document.getElementById('idEntrenamientos');
          elementeEntrenamiento.remove();

          var imageEntrenamiento = document.getElementById('idImageEntrenamientos');
          
          var inputEntrenamiento = document.createElement("h6");
          inputEntrenamiento.setAttribute("style","margin-top:10px;")
          inputEntrenamiento.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imageEntrenamiento.parentNode.insertBefore(inputEntrenamiento, imageEntrenamiento.nextSibling);


          //borra el link de acceso a la clase grabada "flexibilidad" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) MEDITACION
          var elementeMeditacion = document.getElementById('idMeditacion');
          elementeMeditacion.remove();

          var imageMeditacion = document.getElementById('idImageMeditacion');
          
          var inputMeditacion = document.createElement("h6");
          inputMeditacion.setAttribute("style","margin-top:10px;")
          inputMeditacion.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imageMeditacion.parentNode.insertBefore(inputMeditacion, imageMeditacion.nextSibling);


          //borra el link de acceso a la clase grabada "flexibilidad" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) FELXIBILIDAD
          var elementeFlexibilidad = document.getElementById('idFlexibilidad');
          elementeFlexibilidad.remove();

          var imageFlexibilidad = document.getElementById('idImageFlexibilidad');
          
          var inputFlexibilidad = document.createElement("h6");
          inputFlexibilidad.setAttribute("style","margin-top:10px;")
          inputFlexibilidad.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imageFlexibilidad.parentNode.insertBefore(inputFlexibilidad, imageFlexibilidad.nextSibling);


          //borra el link de acceso a la clase grabada "respiración" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) RESPIRACION
          var elementeRespiracion= document.getElementById('idRespiracion');
          elementeRespiracion.remove();

          var imageRespiracion = document.getElementById('idImageRespiracion');
          
          var inputRespiracion = document.createElement("h6");
          inputRespiracion.setAttribute("style","margin-top:10px;")
          inputRespiracion.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imageRespiracion.parentNode.insertBefore(inputRespiracion, imageRespiracion.nextSibling);


          //borra el link de acceso a la clase grabada "respiración" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) PRACTICAS ESPECIALES
          var elementePracticasEspeciales= document.getElementById('idPracticasEspeciales');
          elementePracticasEspeciales.remove();

          var imagePracticasEspeciales = document.getElementById('idImagePracticasEspeciales');
          
          var inputPracticasEspeciales = document.createElement("h6");
          inputPracticasEspeciales.setAttribute("style","margin-top:10px;")
          inputPracticasEspeciales.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imagePracticasEspeciales.parentNode.insertBefore(inputPracticasEspeciales, imagePracticasEspeciales.nextSibling);


          //borra el link de acceso a la clase grabada "respiración" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) CURSO BASICO
          var elementeCursoBasico= document.getElementById('idCursoBasico');
          elementeCursoBasico.remove();

          var imageCursoBasico = document.getElementById('idImageCursoBasico');
          
          var inputCursoBasico = document.createElement("h6");
          inputCursoBasico.setAttribute("style","margin-top:10px;")
          inputCursoBasico.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imageCursoBasico.parentNode.insertBefore(inputCursoBasico, imageCursoBasico.nextSibling);


          //borra el link de acceso a la clase grabada "respiración" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) PASAJE DE GRADO
          var elementePasajeDeGrado= document.getElementById('idPasajeDeGrado');
          elementePasajeDeGrado.remove();

          var imagePasajeDeGrado = document.getElementById('idImagePasajeDeGrado');
          
          var inputPasajeDeGrado = document.createElement("h6");
          inputPasajeDeGrado.setAttribute("style","margin-top:10px;")
          inputPasajeDeGrado.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imagePasajeDeGrado.parentNode.insertBefore(inputPasajeDeGrado, imagePasajeDeGrado.nextSibling);


          //borra el link de acceso a la clase grabada "respiración" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) ENTRENAMIENTOS DE 30
          var elementeEntrenamiento30= document.getElementById('idEntrenamiento30');
          elementeEntrenamiento30.remove();

          var imageEntrenamiento30 = document.getElementById('idImageEntrenamiento30');
          
          var inputEntrenamiento30 = document.createElement("h6");
          inputEntrenamiento30.setAttribute("style","margin-top:10px;")
          inputEntrenamiento30.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          imageEntrenamiento30.parentNode.insertBefore(inputEntrenamiento30, imageEntrenamiento30.nextSibling);


          //borra el link de acceso a la clase grabada "respiración" y agrega un texto que dice que no tiene acceso. (todo manipulando el html) ENTRENAMIENTOS DE 30
          var elemente15= document.getElementById('id15');
          elemente15.remove();

          var image15 = document.getElementById('idImage15');
          
          var input15 = document.createElement("h6");
          input15.setAttribute("style","margin-top:10px;")
          input15.textContent = "*Contenido habilitado sólo para alumnos avanzados/iniciantes"

          image15.parentNode.insertBefore(input15, image15.nextSibling);

    }
  });

}

