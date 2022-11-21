import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../services/joueurs.service';
import { Joueur } from '../test/joueur';

@Component({
  selector: 'app-updatejoueur',
  templateUrl: './updatejoueur.component.html',
  styleUrls: ['./updatejoueur.component.css']
})
export class UpdatejoueurComponent implements OnInit {

  id:number;
  formUpdate : FormGroup;

  constructor(private route:ActivatedRoute , private joueurservice:JoueurService, private fb:FormBuilder, private router:Router) { 
    this.route.params.subscribe(
      (param)=>{
        this.id = param['id'];
        this.joueurservice.getJoueurFromID(this.id).subscribe(
          (joueur)=>{
            //console.log(joueur.nom); // afficher le nom dans la console qui correspond au id
            //this.formUpdate.controls["id"].setValue(joueur.id);
            this.formUpdate.controls["equipe"].setValue(joueur.equipe);
            this.formUpdate.controls["nom"].setValue(joueur.nom);
            this.formUpdate.controls["prenom"].setValue(joueur.prenom);
            this.formUpdate.controls["poste"].setValue(joueur.poste);
            this.formUpdate.controls["age"].setValue(joueur.age);
            this.formUpdate.controls["telephone"].setValue(joueur.telephone);
            this.formUpdate.controls["cite"].setValue(joueur.cite);
            this.formUpdate.controls["code"].setValue(joueur.code);
            this.formUpdate.controls["ville"].setValue(joueur.ville);
            this.formUpdate.controls["email"].setValue(joueur.email);
            this.formUpdate.controls["password"].setValue(joueur.password);
          }
        );
      }
    )
    //console.log(this.id);  // To test if the id is taken by the console in the update component
  }

  ngOnInit(): void {
    this.formUpdate = this.fb.group(
      {
        
        "equipe" : [""],
        "nom" : [""],
        "prenom" : [""],
        "poste" : [""],
        "age" : [""],
        "telephone" : [""],
        "cite" : [""],
        "code" : [""],
        "ville" : [""],
        "email" : [""],
        "password" : [""],

      }
    )
  }

  onSubmitUpdate(id : number){
    var jr:Joueur = new Joueur();
    //jr.id = this.formUpdate.controls['id'].value;
    jr.equipe = this.formUpdate.controls['equipe'].value;
    jr.nom = this.formUpdate.controls['nom'].value;
    jr.prenom = this.formUpdate.controls['prenom'].value;
    jr.poste = this.formUpdate.controls['poste'].value;
    jr.age = this.formUpdate.controls['age'].value;
    jr.telephone = this.formUpdate.controls['telephone'].value;
    jr.cite = this.formUpdate.controls['cite'].value;
    jr.code = this.formUpdate.controls['code'].value;
    jr.ville = this.formUpdate.controls['ville'].value;
    jr.email = this.formUpdate.controls['email'].value;
    jr.password = this.formUpdate.controls['password'].value;
    
    this.joueurservice.onUpdateJoueur(id,jr).subscribe(
      (jr)=>{
        this.router.navigate(['/liste-joueurs']);
      }
    );
  }

}
