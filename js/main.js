    document.querySelector('#loginForm').addEventListener('submit', (e)=> {
      e.preventDefault(); 

      const nombre = document.querySelector('#nombre').value;
      const email = document.querySelector('#email').value;
      const contrasena = document.querySelector('#contrasena').value;


      const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioRegistrado = usuariosRegistrados.find(function(usuario) {
        return usuario.email === email && usuario.contrasena === contrasena;
      });

      if (usuarioRegistrado) {
       
        document.querySelector('#mensaje').innerHTML = '';
        Swal.fire({
          title: 'Error!',
          text: '¡Usuario ya registrado!',
          icon: 'error',
          confirmButtonText: 'Ok!'
        })
      } else {
        
        const nuevoUsuario = { nombre: nombre, email: email, contrasena: contrasena };
        usuariosRegistrados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
        document.querySelector('#mensaje').innerHTML = '';
        Swal.fire({
          title: 'genial',
          text: '¡Registro comletado exitosamente!',
          icon: 'exito',
          confirmButtonText: 'Aceptar!'
        })
      }
    });


