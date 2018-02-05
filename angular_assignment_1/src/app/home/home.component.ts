import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee.model';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit  {
 	experiences : number[];
  qualifications: string[];
  coding_languages=['C/C++','Java','C#','Python','Ruby'];
 new_coding_languages: string[];
 //new_coding_languages=[];
						chk_lang(lang: string)
            { 
              var flag=0;
                for(var i=0;i<5;i++)
                {
                      if(this.new_coding_languages[i]==lang)
                         {
                         
                         flag=1;
                         break;
                         }
                }
                if(flag==1){this.new_coding_languages.splice(i,1);
                }
                else
                {this.new_coding_languages.push(lang);}
      // console.log(this.new_coding_languages);
            }

 model = new Employee('','','','','','','', '',this.new_coding_languages);

 ngOnInit(): void{
  this.qualifications=['Graduation','under-graduation','post-graduation'];
  this.experiences=[1,2,3,4,5];
  this.new_coding_languages=[];

 }
onSubmit()
{
    console.log(this.model);
}


}




