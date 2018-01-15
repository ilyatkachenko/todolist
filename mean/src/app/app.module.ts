import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent, DialogDataExampleDialog } from './tasks/tasks.component';
import { TaskService } from './services/task.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterStatusPipe } from './pipes/filter-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DialogDataExampleDialog,
    NavigationComponent,
    FilterStatusPipe
  ],
  entryComponents: [
    DialogDataExampleDialog,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
