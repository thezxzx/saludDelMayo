import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  // Patrones
  namePattern: string = '[a-zA-Z ]{3,50}';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  // TODO: Quitar esta sección más adelante.
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
    nameProvider: [ '', [ Validators.required, Validators.minLength( 3 ), Validators.pattern( this.namePattern ) ] ],
    nameCompany: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    category: [ '', [ Validators.required ] ],
    telephone: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ] ]
  });

  // Mensajes de errores
  campoNoValido( campo: string ) {
    return this.form.get( campo )?.invalid
    && this.form.get( campo )?.touched;
  }

  // Mensjaes de errores
  // Errores de nombre de proveedor
  get nameProviderErrorMsg(): string {
    const errors = this.form.get( 'nameProvider' )?.errors;
    if( errors?.required ) {
      return 'El campo es obligatorio.';
    } else if ( errors?.minlength ) {
      return 'Debe contener mínimo 3 caracteres.';
    } else if ( errors?.pattern ) {
      return 'El nombre no es válido.';
    }
    return '';
  }

  // Errores de nombre de compañia
  get nameCompanyErrorMsg(): string {
    const errors = this.form.get( 'nameCompany' )?.errors;
    if( errors?.required ) {
      return 'El campo es obligatorio.';
    } else if ( errors?.minlength ) {
      return 'Debe contener mínimo 3 caracteres.';
    }
    return ''; 
  }

  // Errores de categoría
  get categoryErrorMsg(): string {
    const errors = this.form.get( 'category' )?.errors;
    if( errors?.required ) {
      return 'El campo es obligatorio.';
    }
    return ''; 
  }

  // Errores de teléfono / celular
  get telephoneErrorMsg(): string {
    const errors = this.form.get( 'telephone' )?.errors;
    if( errors?.required ) {
      return 'El campo es obligatorio.';
    } else if ( errors?.pattern ) {
      return 'El teléfono no tiene un formato correcto.';
    }
    return ''; 
  }
  
  // Errores de teléfono / celular
  get emailErrorMsg(): string {
    const errors = this.form.get( 'email' )?.errors;
    if( errors?.required ) {
      return 'El campo es obligatorio.';
    } else if ( errors?.pattern ) {
      return 'El correo no tiene un formato correcto.';
    }
    return ''; 
  }
  

  onAddProvider() {

    console.log( this.form.getError('telephone') );

    if( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }

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
