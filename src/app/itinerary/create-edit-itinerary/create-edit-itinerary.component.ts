import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Itinerary } from 'src/app/shared/models/itinerary.model';
import { ItineraryService } from '../services/itinerary.service';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-create-edit-itinerary',
  templateUrl: './create-edit-itinerary.component.html',
  styleUrls: ['./create-edit-itinerary.component.css']
})
export class CreateEditItineraryComponent implements OnInit {
  @ViewChild('itineraryForm') itineraryForm! : NgForm;
  itinerary!: Itinerary;

  fileName: string | undefined = '';
  faFileImage = faFileImage;

  imgBase64: any | null = null;

  title: string = "";

  constructor(
    private itineraryService: ItineraryService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] !== undefined) {
      this.title = "Editar roteiro";
      let id = this.route.snapshot.params['id'];
      const itineraryEdit = this.itineraryService.getById(id);
      if (itineraryEdit !== undefined) {
        this.itinerary = itineraryEdit;
        this.fileName = this.itinerary.imageName;
      } else {
        throw new Error("Roteiro de viagem não encontrado com o id: " + id);
      }
    } else {
      this.title = "Criar novo roteiro";
      this.itinerary = new Itinerary();
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    let img = this;

    if (file) {
      this.fileName = file.name;
      
      /*const formData = new FormData();
      formData.append("image", file);

      const upload$ = this.http.post("/upload", formData);
      upload$.subscribe();*/
      this.itinerary.image = file;
      this.itinerary.imageName = file.name;
      
      const promise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function() {
          resolve(reader.result);
        }
        reader.readAsDataURL(file);
      });
      
      promise.then(file => {
        img.imgBase64 = file;
        this.itinerary.image64 = img.imgBase64;
      });
    }
  }

  saveItinerary(): void {
    this.itinerary.user = this.loginService.loggedUser;
    if (this.itinerary.id !== null && this.itinerary.id !== undefined) {
      this.update();
    } else {
      this.insert();
    }
  }

  insert(): void {
    if (this.itineraryForm.form.valid) {
      this.itineraryService.insert(this.itinerary);
      this.router.navigate(["/itinerary/list"]);
    }
  }

  update(): void {
    if (this.itineraryForm.form.valid) {
      this.itineraryService.update(this.itinerary);
      this.router.navigate(["/itinerary/list"]);
    }
  }
}
