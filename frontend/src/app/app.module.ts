import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule,  MatInputModule, MatCardModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';


@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule,  
    MatInputModule, 
    MatCardModule,
    MatListModule
  ],
  providers: [    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
