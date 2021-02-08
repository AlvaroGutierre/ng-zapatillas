import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Zapatilla } from '../shared/zapatilla';
import { ZapatillaService } from '../shared/zapatilla.service';

@Component({
  templateUrl: './zapatilla-edit.component.html'
})
export class ZapatillaEditComponent implements OnInit{

  pageTitle = 'Zapatilla Edit';
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
      price: '',
      description: '',
      image: ''
    });

    // Read the zapatilla Id from the route parameter
    this.zapatillaId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getZapatilla(this.zapatillaId);
  }

  getZapatilla(id: number): void {
    this.zapatillaService.getZapatillaById(id)
      .subscribe(
        (zapatilla: Zapatilla) => this.displayZapatilla(zapatilla),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayZapatilla(zapatilla: Zapatilla): void {
    if (this.zapatillaForm) {
      this.zapatillaForm.reset();
    }
    this.zapatilla = zapatilla;
    this.pageTitle = `Edit Zapatilla: ${this.zapatilla.title}`;

    // Update the data on the form
    this.zapatillaForm.patchValue({
      title: this.zapatilla.title,
      price: this.zapatilla.price,
      description: this.zapatilla.description,
      image: this.zapatilla.image
    });
  }

  deleteZapatilla(): void {
    if (this.zapatilla.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the zapatilla: ${this.zapatilla.title}?`)) {
        this.zapatillaService.deleteZapatilla(this.zapatilla.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveZapatilla(): void {
    if (this.zapatillaForm.valid) {
      if (this.zapatillaForm.dirty) {
        this.zapatilla = this.zapatillaForm.value;
        this.zapatilla.id = this.zapatillaId;
        
        this.zapatillaService.updateZapatilla(this.zapatilla)
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
