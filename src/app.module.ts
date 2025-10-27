import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { AdminSeeder } from './common/services/admin-seeder';
import { BookingModule } from './booking/booking.module';
import { BuildingModule } from './building/building.module';
import { RoomModule } from './room/room.module';
import { MaintananceModule } from './maintanance/maintanance.module';
import { FacilityModule } from './facility/facility.module';
import { ProfileModule } from './profile/profile.module';
import { FacilityCategoryModule } from './facility-category/facility-category.module';

const appLogger = new Logger('TypeOrmModule');

@Module({
   imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true, 
        logging: true,
        afterInit: async () => {
          const dbName = config.get<string>('DB_NAME');
          const dbHost = config.get<string>('DB_HOST');
          appLogger.log(`✅ Successfully connected to database: "${dbName}" at ${dbHost}`);
        },
      }),
    }),
    UsersModule,
    BookingModule,
    BuildingModule,
    RoomModule,
    MaintananceModule,
    FacilityModule,
    FacilityCategoryModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService, AdminSeeder],
})
export class AppModule {}