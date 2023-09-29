import { Module } from "@nestjs/common";
import { FieldsofstudyModuleBase } from "./base/fieldsofstudy.module.base";
import { FieldsofstudyService } from "./fieldsofstudy.service";
import { FieldsofstudyController } from "./fieldsofstudy.controller";
import { FieldsofstudyResolver } from "./fieldsofstudy.resolver";

@Module({
  imports: [FieldsofstudyModuleBase],
  controllers: [FieldsofstudyController],
  providers: [FieldsofstudyService, FieldsofstudyResolver],
  exports: [FieldsofstudyService],
})
export class FieldsofstudyModule {}
