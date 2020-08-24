import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppoimtentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppoimtentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
