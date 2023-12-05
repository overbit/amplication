import { Module } from "@nestjs/common";
import { MseLetterRecModuleBase } from "./base/mseLetterRec.module.base";
import { MseLetterRecService } from "./mseLetterRec.service";
import { MseLetterRecController } from "./mseLetterRec.controller";
import { MseLetterRecResolver } from "./mseLetterRec.resolver";

@Module({
  imports: [MseLetterRecModuleBase],
  controllers: [MseLetterRecController],
  providers: [MseLetterRecService, MseLetterRecResolver],
  exports: [MseLetterRecService],
})
export class MseLetterRecModule {}
