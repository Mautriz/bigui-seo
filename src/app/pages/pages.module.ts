import { CompanyDetailsModule } from "./company-details/company-details.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, PagesRoutingModule, CompanyDetailsModule]
})
export class PagesModule {}
