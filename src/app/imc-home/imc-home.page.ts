import { Component} from '@angular/core';

@Component({
  selector: 'app-imc-home',
  templateUrl: './imc-home.page.html',
  styleUrls: ['./imc-home.page.scss'],
})
export class ImcHomePage{
  name:string;
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  imageSrc:string;


  constructor() {

   }

   calculateBMI() {
     console.log("passer")
   
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
      document.getElementById("result").style.display = "block";
      document.getElementById("formulaire").style.display = "none";
    }
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
      this.imageSrc = "../../assets/images/maigreIonic.png" 
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
      this.imageSrc = "../../assets/images/normalIonic.png"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Surpoids"
      this.imageSrc = "../../assets/images/surpoidsIonic.png"
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
      this.imageSrc = "../../assets/images/obeseIonic.png"
    }
  }
  
  formulaire(){
    document.getElementById("result").style.display = "none";
    document.getElementById("formulaire").style.display = "block";
  
  }



}





  

