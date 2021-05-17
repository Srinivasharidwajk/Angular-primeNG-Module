import {NgModule} from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';

@NgModule()
export class PrimeNgModuleList {
   public static primeNgModuleList = [
     ButtonModule,
     MenubarModule,
     TableModule
   ]
}
