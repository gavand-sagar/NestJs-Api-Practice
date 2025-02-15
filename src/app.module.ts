import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { TripsModule } from './trips/trips.module';
import { WorkersModule } from './workers/workers.module';
import { TrucksModule } from './trucks/trucks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ClientsModule, OrdersModule, TripsModule, WorkersModule, TrucksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
