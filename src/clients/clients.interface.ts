// Service ka nhi, repo ka interface banana tha


// export interface IClientsService{
//     getClients():Promise<any>;
//     addClient(body:any):Promise<any>;
// }

export interface IClientsRepo{
    getClients():Promise<any>;
    addClient(body:any):Promise<any>;
}