import { Component, inject, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiTestServiceService } from './api-test-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pchome-shopping-web';
  appTestService = inject(ApiTestServiceService);
  data123:any = {};


  queryData():void{
    console.log('action');
    this.appTestService.query().subscribe(data=>{
      console.log('java data:', data);
      this.data123 = data;
    })
  }
  
  
}
