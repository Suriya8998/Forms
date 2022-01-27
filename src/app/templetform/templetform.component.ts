import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetform',
  templateUrl: './templetform.component.html',
  styleUrls: ['./templetform.component.css']
})
export class TempletformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // onSubmit(mydata:any){
  //   console.log(mydata)
  //   const jsondata =JSON.stringify(mydata)
  //   localStorage.setItem('mydata',jsondata)
  // }
  onSubmit(mydata:any){
    console.log(mydata)
   
  }

}
