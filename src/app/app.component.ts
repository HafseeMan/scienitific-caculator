import { AfterViewInit, Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  /**
   Algorthim:
   1. value inputted
   2. onclicking green button. input value is saved and input field cleared.
   3. enter second  number
   4. onclicking red buttton. 
      i)answer depending on function would be displayed in input field. 
      ii) input field cleared.
   */
  
  input1!: string;
  input2! : string;
  function!: string;
  answer!: number;
  try: number = 0;

  @ViewChild('inputRef') inputElementRef!: ElementRef;

  focus(){
    this.inputElementRef.nativeElement.focus();
  }
  
  ngAfterViewInit(){
    this.focus();
  }
  /*Defining Functions ***********************/
  add(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.inputElementRef.nativeElement.value = null;
    this.function = '+';
    this.focus();
  }
  sub(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.inputElementRef.nativeElement.value = null;
    this.input2 = ''
    this.function = '-';
  }
  divide(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.inputElementRef.nativeElement.value = null;
    this.input2 = ''
    this.function = '/';
  }
  mul(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.inputElementRef.nativeElement.value = null;
    this.input2 = ''
    this.function = '*';
  }

  mod(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.function = '%';
    this.input2 = ''
    this.calculate();
  }
  sqrt(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'sqrt'
    this.calculate();
  }
  log(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'log'
    this.calculate();
  }
  cos(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'cos';
    this.calculate();  
  }
  sin(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'sin';
    this.calculate();
  }
  tan(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'tan';
    this.calculate();
  }
  inverse(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'inverse';
    this.calculate();
  }
  pow2(){
    this.input1 = this.inputElementRef.nativeElement.value;
    this.input2 = ''
    this.function = 'pow2'
    this.calculate();
  }
  clear(){
    this.input1 = '';
    this.input2 = '';
    this.answer = 0;
    this.function = '';
    this.inputElementRef.nativeElement.value = null;
  }


 /********************************/
 /*Equal Function */
  calculate(){
    /*saving second input */
    this.input2 = this.inputElementRef.nativeElement.value;
    this.try += 1;
    /*saving as numbers to temporary variables */
    /*Couldnt parseFloat global variables directly.
     Error message: "Argument of type 'number' is not assignable to 
     parameter of type 'string'." */
    
    let input1 = parseFloat(this.input1);
    let input2 = parseFloat(this.input2);
    /*If the = button is being clicked a second time */
    if(this.try > 1){
      this.clear();
      this.try = 0;
    }
    /*Answer depending on function */
    switch(this.function){

      case '+':
        this.answer = input1 + input2;
        break;

      case '-':
        this.answer = input1 - input2;
        break; 

      case '/':
        this.answer = input1 / input2;
        break;

      case '*':
        this.answer = input1 * input2;
        break;    

      case '%':
        this.answer = input1/ 100;
        break; 

      case 'sqrt':
        this.answer = Math.sqrt(parseFloat(this.input1));
        break; 

      case 'log':
        this.answer = Math.log(parseFloat(this.input1));
        break; 
        
      case 'cos':
        this.answer = Math.cos(parseFloat(this.input1));
        break; 

      case 'sin':
        this.answer = Math.sin(parseFloat(this.input1));
        break; 
          
      case 'tan':
        this.answer = Math.tan(parseFloat(this.input1));
        break; 

      case 'inverse':
        this.answer = 1/parseFloat(this.input1);
        break; 
            
      case 'pow2':
        this.answer = parseFloat(this.input1) * parseFloat(this.input1);
        break; 

      default:
        this.answer = input2;
    }
    this.displayAfterCalculation();
    
  }
  displayAfterCalculation(){
    /*Clearing input field */
    this.inputElementRef.nativeElement.value = this.answer;

  }


}
