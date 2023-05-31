import {Employee} from "./employee";

export interface Ticket {

  ticketNumber : number
  title : string
  description : string
  severity : string
  status : string
  ticketAssignee: Employee
  ticketWatchers : Employee[]

}
