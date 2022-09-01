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

// function validateUserSection () {

//   firebase.auth().onAuthStateChanged( async function(user) {
//     if (user != null) {
//         await firebase.database().ref('users/' + user.uid).once("value", snap => {

//           console.log(snap.val().grado);
//           if(snap.val().grado == 'iniciante'){

          
           
//                 window.location.replace("../index.html");
        
        

//           }

//       })
//     } else {

  
//         window.location.replace("../index.html");
   

//     }
//   });

// }


function validateUserSection () {

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


    }
  });

}


