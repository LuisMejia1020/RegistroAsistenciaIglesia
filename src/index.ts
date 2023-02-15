
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
