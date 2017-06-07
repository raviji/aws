import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   poolData={
     UserPoolId:'us-west-2_oM7LxQxPS',
     ClientId:'4sudi90ajjukd0fsmitv974bng'
   };
   //userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(this.poolData);
  connectAWS(){
    console.log(this.poolData);
  }
  
}
