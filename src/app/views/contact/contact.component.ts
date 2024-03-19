import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  
  constructor(private formBuilder: FormBuilder){
    this.contactForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  contactForm!: FormGroup;

  enviar(event: Event){
    event.preventDefault();
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }
  }

  hasErrors(field: string, typeError: string){
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
