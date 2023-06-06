import {Employee} from "./employee";

export interface Ticket {

  ticketNumber : any
  title : string
  description : string
  severity : any
  status : any
  ticketAssignee: Employee | null
  ticketWatchers : Employee[]

}
