
/// interface de una persona asistiendo a una iglesia
interface IChurchMember {
    id: number
    nombre: string
    email: string
    telefono: string
    memberActivo: boolean
  }
  
  // interface para un record de asistencia 
interface IAttendance {
    id: number
    memberId: number
    fechaCulto: string
  }
  
interface IERROR {
      codigo: number,
      msg: string
  }

  //creamos toda una interface exclusivamente de los usuarios que usaran los miembros de la iglesia y lo correremos en un arreglo
interface IUser {
    id:number
    username: string;
    password: string;
  }
  
  // Creamos un objeto con un arreglo de usuarios con sus contrasenas 
  const users: IUser[] = [
    { id:1, username: "johnDoe", password: "1234" },
    { id:2, username: "janeSmith", password: "1234" },
    { id:3, username: "ErwinSmith", password: "1234" },
    { id:4, username: "CapitanLevi", password: "1234" },
    { id:5, username: "ErenJaeger", password: "1234" },
    { id:6, username: "ThorOdinson", password: "1234" },
    { id:7, username: "HeltonLopez", password: "1234" },
    { id:8, username: "mylove", password: "1234" },
    { id:9, username: "JoseMejia", password: "1234" },
    { id:10, username: "LuisMejia", password: "1234" },
    { id:11, username: "JueVioleGrace", password: "1234" }
  ];

    //Esta funcion es para autenticar la informacion de un usuario y su contrasena
    function authenticate(username: string, password: string): boolean {
        // vamos a encontrar el usuario con el username que el establecio 
        const user = users.find((user) => user.username === username);
        if (user) {
        // Cuando encontremos el usuario, esta linea de codigo verificara si la password es correcta 
        return user.password === password;
        }
        //si el usuario no se encuentra que retorne un false 
        return false;
    }

    //creamos variables para usarlos de parametros 
    const username = "LuisMejia";
    const password = "1234";

    if (authenticate(username, password)) {
    console.log("Registro exitoso, bienvenido hermano");
    // cuando haga login exitosamente debemos de establecer un enlace a la pantalla con el listado de miembros para pasar asistencia 
    } else {
    console.log("no pudo hacer login, revise sus datos por favor ");
    // podriamos redirigir a una pagina donde diga que no existe ese usuario 
    }

  class RegistroAsistencia {
    miembros: IChurchMember[]
    attendance: IAttendance[]
    users: IUser[]
   
   
   constructor() {
     // falta inicializar los miembros y la asistencia de la base de datos 
     this.miembros = []
     this.attendance = []
     this.users = []
   
   }

    // esta funcion nos permite agregar a un miembro a la base de datos
    addMember(member: IChurchMember) {
        this.miembros.push(member)
      }

    // con esta funcion obtenemos un miembro con su informacion personal por id 
    // usamos find para que sea especifico ya que el id es un numero unico que no se repite 
    getMember(id: number): IChurchMember | undefined {
        return this.miembros.find(member => member.id === id)
    }

    //con esta funcion agregamos usuarios 
    addUser(users: IUser){
        this.users.push(users)
    }

    //con esta funcion obtenemos todos los usuarios con su pass 
    getUser(id: number): IUser | undefined{
        return this.users.find(user => user.id === id)
    }

    // Esta funcion mide la asistencia de un miembro de la iglesia
    recordAsistencia(memberId: number, fechaCulto: string) {
    const attendanceRecord: IAttendance = {
      id: this.attendance.length + 1,
      memberId,
      fechaCulto,
    };
    this.attendance.push(attendanceRecord)
    }

    // esta funcion mide el record de asistencia de un miembro 
    // usamos la interface de attendace 
    dameAsistencia(memberId: number): IAttendance[] {
    return this.attendance.filter(record => record.memberId === memberId)
     }

     //esta funcion nos permitira mandar un msg a todos nuestros usuarios que se encuentran activo con nuestra comunidad
    holaHermanos(mensaje: string){
        const mensajeSoloParaActivos = this.miembros.filter(member => member.memberActivo)
        mensajeSoloParaActivos.forEach(member => {
            console.log(`mensaje enviado "${mensaje}" to ${member.nombre}.`);
        })
       
    }

    //Esta funcion nos permite borrar un miembro del sistema
    deletemember(memberId: number){
        const adiosMiembro = this.miembros.findIndex(member => member.id === memberId)
        if(adiosMiembro !== -1) {
            this.miembros.splice(adiosMiembro, 1);
            console.log(`el miembro con el id ${memberId} ya no es miembro de nuestra iglesia.`);
          } else {
            console.log(`el usuario con el id solicitado ${memberId} no forma parte de nuestra iglesia .`);
          }{

        }
    }

   
}

// creamos las instancias con usaremos la clase attendancestracker
const registrador = new RegistroAsistencia()


// hacemos objetos donde agregamos a nuestros miembros 
registrador.addMember({ id: 1, nombre: 'John Doe', email: 'john.doe@gmail.com', telefono: '+504 99776354', memberActivo: false})
registrador.addMember({ id: 2, nombre: 'Jane Smith', email: 'jane.smith@egmail.com', telefono: '+504 34776354', memberActivo: false})
registrador.addMember({ id: 3, nombre: 'Erwin Smith', email: 'erwinsmith@attack.com', telefono: '+504 99476346', memberActivo: false })
registrador.addMember({ id: 4, nombre: 'Capitan Levi', email: 'Capitan@gmail.com', telefono: '+504 99953217', memberActivo: false })
registrador.addMember({ id: 5, nombre: 'Eren Jeager', email: 'titandeataque@gmail.com', telefono: '+1 202 9833175', memberActivo: false })
registrador.addMember({ id: 6, nombre: 'Thor jeager', email: 'Thor@gmail.com', telefono: '+504 98532698', memberActivo: true })
registrador.addMember({ id: 7, nombre: 'Helton Lopez', email: 'Helton@gmail.com', telefono: '+504 3387491', memberActivo: true })
registrador.addMember({ id: 8, nombre: 'Ivanna Konstantinovna Perepeshko', email: 'Ivanna@gmail.com', telefono: '+9 6584765341', memberActivo: true})
registrador.addMember({ id: 9, nombre: 'Jose David Mejia Castro', email: 'Jose@gmail.com', telefono: '+43 45789324', memberActivo: true })
registrador.addMember({ id: 10, nombre: 'Luis Fernando Mejia Castro', email: 'Luisrvp5@gmail.com', telefono: '+504 33614633' , memberActivo: true})
registrador.addMember({ id: 11, nombre: 'Jue Viole Grace', email: 'jue5@gmail.com', telefono: '+1 202 987 4561' , memberActivo: true})


registrador.addUser({id:1, username: "johnDoe", password: "1234"})
registrador.addUser({id:2, username: "janeSmith", password: "1234"})
registrador.addUser({id:3, username: "ErwinSmith", password: "1234"})
registrador.addUser({id:4, username: "CapitanLevi", password: "1234"})
registrador.addUser({id:5, username: "ErenJaeger", password: "1234"})
registrador.addUser({id:6, username: "ThorOdinson", password: "1234"})
registrador.addUser({id:7, username: "HeltonLopez", password: "1234"})
registrador.addUser({id:8, username: "mylove", password: "1234"})
registrador.addUser({id:9, username: "JoseMejia", password: "1234"})
registrador.addUser({id:10, username: "LuisMejia", password: "1234"})
registrador.addUser({id:11, username: "JueVioleGrace", password: "1234"})


// usamos la funcion recordAttendance y llenamos los parametros 
registrador.recordAsistencia(1, '12/02/2023')
registrador.recordAsistencia(2, '04/06/2021')
registrador.recordAsistencia(3, '10/01/1992')
registrador.recordAsistencia(4, '26/05/2023')
registrador.recordAsistencia(5, '10/06/2023')
registrador.recordAsistencia(6, '17/07/2023')
registrador.recordAsistencia(7, '24/09/2023')
registrador.recordAsistencia(8, '31/12/2023')
registrador.recordAsistencia(9, '07/07/2023')
registrador.recordAsistencia(10, '14/02/2023')


// creamos una variable donde obtenemos la asistencia del miembro a la iglesia  
const asistenciaJohn = registrador.dameAsistencia(1)
const asistenciaJane = registrador.dameAsistencia(2)
const asistenciaErwin = registrador.dameAsistencia(3)
const asistenciaLevi = registrador.dameAsistencia(4)
const asistenciaEren = registrador.dameAsistencia(5)
const asistenciaThor = registrador.dameAsistencia(6)
const asistenciaHelton = registrador.dameAsistencia(7)
const asistenciaMyLove = registrador.dameAsistencia(8)
const asistenciaJose = registrador.dameAsistencia(9)
const miAsistencia = registrador.dameAsistencia(10)


/// mandamos a imprimir a consola 
console.log("Este es el record de asistencia del hermano ", asistenciaJohn)
console.log("Este es el record de asistencia del hermano ",asistenciaJane)
console.log("Este es el record de asistencia del hermano ",asistenciaErwin)
console.log("Este es el record de asistencia del hermano ",asistenciaLevi)
console.log("Este es el record de asistencia del hermano ",asistenciaEren)
console.log("Este es el record de asistencia del hermano ",asistenciaThor)
console.log("Este es el record de asistencia del hermano ",asistenciaHelton)
console.log("Este es el record de asistencia del hermano ",asistenciaMyLove)
console.log("Este es el record de asistencia del hermano ",asistenciaJose)
console.log("Este es el record de asistencia del hermano ",miAsistencia)
console.log("Este es el record de asistencia del hermano ",miAsistencia)

//notificar a los hermanos de la iglesia 
console.log(registrador.holaHermanos("Hola hermanos, bendiciones a todos, si recibes este msg es porque sos parte de nuestra comunidad"))

//borramos miembros
console.log(registrador.deletemember(1))
console.log(registrador.deletemember(10))
console.log(registrador.deletemember(7))

//presentamos en consola cada miembro con su informacion personal asi como su usuario y pass
console.log(registrador.getUser(1))
console.log(registrador.getMember(1))
console.log(registrador.getUser(2))
console.log(registrador.getMember(2))
console.log(registrador.getUser(3))
console.log(registrador.getMember(3))
 





