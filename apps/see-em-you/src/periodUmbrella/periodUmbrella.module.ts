import { Module } from "@nestjs/common";
import { PeriodUmbrellaModuleBase } from "./base/periodUmbrella.module.base";
import { PeriodUmbrellaService } from "./periodUmbrella.service";
import { PeriodUmbrellaController } from "./periodUmbrella.controller";
import { PeriodUmbrellaResolver } from "./periodUmbrella.resolver";

@Module({
  imports: [PeriodUmbrellaModuleBase],
  controllers: [PeriodUmbrellaController],
  providers: [PeriodUmbrellaService, PeriodUmbrellaResolver],
  exports: [PeriodUmbrellaService],
})
export class PeriodUmbrellaModule {}
