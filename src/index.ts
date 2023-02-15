
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

}