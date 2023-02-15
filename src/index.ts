
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

}