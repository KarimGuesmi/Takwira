import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoueurService } from '../services/joueurs.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    
      //Form Validables 
  registerForm:any = FormGroup;
  submitted = false;

  //Add user form actions
  constructor(private formBuilder: FormBuilder, private joueurServ:JoueurService) { }

  get f() { return this.registerForm.controls; }
  onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    //alert("Bravo Karim c'est très bien :))) !!");
  }

  this.joueurServ.connect(this.registerForm.controls['email'].value, this.registerForm.controls['password'].value).subscribe(
    (jrres)=>{
      console.log(jrres.acessToken);
      console.log(jrres.joueur.nom);
      
    }
  );
 
}
  ngOnInit(): void {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
  }

  //Images
  image:any="../assets/images/takwira.png" ;
  buffon:any="../assets/images/buffon.png" ;
       
}
