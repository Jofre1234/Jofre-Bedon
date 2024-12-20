import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
 
  profileForm!: FormGroup;

  
  images: string[] = [
      'https://img.freepik.com/fotos-premium/equipo-conceptos-entretenimiento-vida-nocturna-dj-auriculares-jovenes_488220-5157.jpg',
      'https://media.istockphoto.com/id/1391884768/es/vector/concierto-de-m%C3%BAsicos-de-banda-alternativos-con-siluetas-de-multitudes.jpg?s=612x612&w=0&k=20&c=YXJ3-BFykzOXxE1nsbyj_RJ8FTg2NtVf3Wi2lkqas7s=',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLzK4Ic3XyEBxWFMF_e3uWsg2i4M7jr8SjA&s'
];


  
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  
  constructor(private fb: FormBuilder) {}

  
  ngOnInit() {
    
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] 
    });
  }

  
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
