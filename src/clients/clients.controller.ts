/* eslint-disable prettier/prettier */
import { Body, Controller, Get,  Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { client } from './client';
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get('/clients')
  async getAllClients(): Promise<any> {
    return await this.clientsService.getAllClients();
  }
  @Post('/cients')
  addClient(@Body() body: client): Promise<any> {
    return this.clientsService.addClient(body);
  }
}
