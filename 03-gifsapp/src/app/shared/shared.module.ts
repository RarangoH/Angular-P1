import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImgeComponent } from './lazy-imge/lazy-imge.component';



@NgModule({
  declarations: [SidebarComponent, LazyImgeComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    SidebarComponent,
    LazyImgeComponent
  ]
})
export class SharedModule { }
