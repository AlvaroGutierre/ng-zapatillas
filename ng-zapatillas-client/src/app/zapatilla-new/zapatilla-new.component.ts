import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Zapatilla } from '../shared/zapatilla';
import { ActivatedRoute, Router } from '@angular/router';
import { ZapatillaService } from '../shared/zapatilla.service';

@Component({
  selector: 'app-zapatilla-new',
  templateUrl: './zapatilla-new.component.html',
  styleUrls: ['./zapatilla-new.component.css']
})
export class ZapatillaNewComponent implements OnInit {

  pageTitle = 'Nueva zapatilla';
  errorMessage: string;
  zapatillaForm: FormGroup;

  zapatillaId:number;
  zapatilla: Zapatilla;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private zapatillaService: ZapatillaService) {  }

  ngOnInit(): void {
    this.zapatillaForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      categories: '',
      rating: '',
      price: '',
      description: '',
      shortDescription: '',
      image: ''
    });

    // Read the zapatilla Id from the route parameter
    this.zapatillaId = parseInt(this.activatedroute.snapshot.params['zapatillaId']);
  }

  saveZapatilla(): void {
    if (this.zapatillaForm.valid) {
      if (this.zapatillaForm.dirty) {
        this.zapatilla = this.zapatillaForm.value;
        this.zapatilla.id = this.zapatillaId;
        
        this.zapatillaService.createZapatilla(this.zapatilla)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.zapatillaForm.reset();
    this.router.navigate(['']);
  }
  
}
