import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  categorias = [
    {
      name: 'Pastillas'
    },
    {
      name: 'Hierbas'
    },
    {
      name: 'Esotéricos'
    }
  ];

  // Inputs
  @Input() name: string;
  @Input() nameCompany: string;
  @Input() category: string;
  @Input() telephone: string;
  @Input() email: string;
  @Input() providerId: string;

  constructor(private formBuilder: FormBuilder,
              private providerService: ProviderService) { }

  form: FormGroup = this.formBuilder.group({
    nameProvider: [ '', [ Validators.required ] ],
    nameCompany: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    category: [ '', [ Validators.required, Validators.min( 1 ), Validators.max( 1000 ) ] ],
    telephone: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ] ]
  });

  onAddProvider() {
    this.providerService.addProvider( this.form.value );
  }

  onUpdate() {
    const provider = this.form.value;
    provider.id = this.providerId;
    
    // Llamar función para actualizar
    this.providerService.updateProvider( provider );
    this.name = '';
    this.form.reset();
  }

  ngOnInit() {
    if ( this.name ) {
      this.form.get('nameProvider').setValue( this.name );
      this.form.get('nameCompany').setValue( this.nameCompany );
      this.form.get('category').setValue( this.category );
      this.form.get('telephone').setValue( this.telephone );
      this.form.get('email').setValue( this.email );
    }

  }

}
