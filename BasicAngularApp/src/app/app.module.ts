import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Router Module for loading or changing a particular part of the html
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { AppserviceService } from './appservice.service';
import { MemberComponent } from './member/member.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './app.sort';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { BaseConverterComponent } from './base-converter/base-converter.component';



@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MemberComponent,
    ProductComponent,
    ModelDrivenFormComponent,
    BaseConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //Define the Router module links
    RouterModule.forRoot([
        {
          path: 'member', //Path for this component
          component: MemberComponent //Linking the component to this path
        },
        {
          path: 'product',
          component: ProductComponent
        },
        {
          path: 'modelDrivenForm',
          component: ModelDrivenFormComponent
        },
        {
          path: 'baseConverter',
          component: BaseConverterComponent
        }

      ])
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
