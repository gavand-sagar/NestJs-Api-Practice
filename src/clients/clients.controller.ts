import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { client } from './client';




@Controller('clients')
export class ClientsController {
    constructor(@Inject('IClientsService')private readonly clientsService: ClientsService) {
        
    }
    @Get("/clients")
    async getAllClients():Promise<any>{
         return await this.clientsService.getAllClients();
    }
    @Post("/cients")
    addClient(@Body()body:client): Promise<any>{
        return this.clientsService.addClient(body);
    }
}
