import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
//import { CONFIG_OPTIONS } from './jwt.constants';
//import { JwtModuleOptions } from './jwt.interfaces';
//import { JwtService } from './jwt.service';

@Module({})
@Global()
export class JwtModule {
  static forRoot(): DynamicModule {
    return {
      module: JwtModule,
      exports: [JwtService],
      providers: [JwtService],
    };
  }

  /*   static forRoot(options: JwtModuleOptions): DynamicModule {
    return {
      module: JwtModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        JwtService,
      ],
      exports: [JwtService],
    };
  } */
}
