
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

  class RegistroAsistencia {
    miembros: IChurchMember[]
    attendance: IAttendance[]
   
   
 
   constructor() {
     
     // falta inicializar los miembros y la asistencia de la base de datos 
     this.miembros = []
     this.attendance = []
    
   
   }

    // esta funcion nos permite agregar a un miembro a la base de datos
    addMember(member: IChurchMember) {
        this.miembros.push(member)
      }

        // con esta funcion obtenemos un miembro por id 
        // usamos find para que sea especifico ya que el id es un numero unico que no se repite 
    getMember(id: number): IChurchMember | undefined {
        return this.miembros.find(member => member.id === id)
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

    holaHermanos(memberActivo: boolean):IChurchMember[] | undefined {
        const miembrosDeIglesia = this.miembros.filter(miembros => memberActivo === true)
        if(miembrosDeIglesia){
            console.log("Buenos dias Hermanos, gracias por ser parte de nuestra Iglesia, Dios los ama", miembrosDeIglesia)
        }else{
            console.log("no forma parte de nuestra iglesia")
        }

        return miembrosDeIglesia
    }
  

}


// creamos las instancias con usaremos la clase attendancestracker
const registrador = new RegistroAsistencia()


// hacemos objetos donde agregamos a nuestros miembros 
registrador.addMember({ id: 1, nombre: 'John Doe', email: 'john.doe@gmail.com', telefono: '+504 99776354', memberActivo: true })
registrador.addMember({ id: 2, nombre: 'Jane Smith', email: 'jane.smith@egmail.com', telefono: '+504 34776354', memberActivo: true })
registrador.addMember({ id: 3, nombre: 'Erwin Smith', email: 'erwinsmith@attack.com', telefono: '+504 99476346', memberActivo: true })
registrador.addMember({ id: 4, nombre: 'Capitan Levi', email: 'Capitan@gmail.com', telefono: '+504 99953217', memberActivo: true })
registrador.addMember({ id: 5, nombre: 'Eren Jeager', email: 'titandeataque@gmail.com', telefono: '+1 202 9833175', memberActivo: true })
registrador.addMember({ id: 6, nombre: 'Thor Odinson', email: 'Thor@gmail.com', telefono: '+504 98532698', memberActivo: true })
registrador.addMember({ id: 7, nombre: 'Helton Lopez', email: 'Helton@gmail.com', telefono: '+504 3387491', memberActivo: true })
registrador.addMember({ id: 8, nombre: 'Ivanna Konstantinovna Perepeshko', email: 'Ivanna@gmail.com', telefono: '+9 6584765341', memberActivo: true })
registrador.addMember({ id: 9, nombre: 'Jose David Mejia Castro', email: 'Jose@gmail.com', telefono: '+43 45789324', memberActivo: true })
registrador.addMember({ id: 10, nombre: 'Luis Fernando Mejia Castro', email: 'Luisrvp5@gmail.com', telefono: '+504 33614633' , memberActivo: true})


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
console.log(registrador.holaHermanos(true))

