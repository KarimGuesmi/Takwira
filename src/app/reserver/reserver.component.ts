import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  registerForm: FormGroup;
  

  constructor(private fb:FormBuilder, private reservationService:ReservationService) { }

  ngOnInit(): void {
    
    this.registerForm = this.fb.group({
      id: [''],
      equipe1: [''],
      equipe2: [''],
      terrain: [''],
      telephone: [''],
      date: [''],
      heure: [''],
  
  });
  }

  addReservation() {
    var res:Reservation = new Reservation();

    res.equipe1 = this.registerForm.controls['equipe1'].value;
    res.equipe2 = this.registerForm.controls['equipe2'].value;
    res.terrain = this.registerForm.controls['terrain'].value;
    res.telephone = this.registerForm.controls['telephone'].value;
    res.date = this.registerForm.controls['date'].value;
    res.heure = this.registerForm.controls['heure'].value;

    this.reservationService.save(res).subscribe(
      (res)=>{
      alert('saving reservation sucess');
    });

  
    // Afficher les valeurs de remplissage après succés
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


}



