import {Employee} from "./employee";

export class Ticket {

  ticketNumber : number
  title : string
  description : string
  severity : string
  status : string
  ticketAssignee: Employee
  ticketWatchers : Employee[]

}
