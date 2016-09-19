import { UpgradeAdapter } from "@angular/upgrade";

import { ng2Module1 } from "../module1.module";

export const upgradeAdapter = new UpgradeAdapter(ng2Module1);