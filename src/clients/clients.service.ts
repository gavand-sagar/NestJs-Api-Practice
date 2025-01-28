import { Injectable } from '@nestjs/common';
import { clientRepository } from './clients.repository';
import { client } from './client';

@Injectable()
export class ClientsService {
  constructor(private readonly db: clientRepository) {}

  async getAllClients(): Promise<any> {
    return await this.db.getClients();
  }
  async addClient(body: client): Promise<any> {
   return await this.db.addClient(body);
  }
}
