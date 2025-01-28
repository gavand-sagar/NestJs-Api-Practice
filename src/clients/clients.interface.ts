export interface IClientsService{
    getClients():Promise<any>;
    addClient(body:any):Promise<any>;
}