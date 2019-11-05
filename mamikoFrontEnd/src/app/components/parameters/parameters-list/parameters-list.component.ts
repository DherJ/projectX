import {Component, ViewChild} from '@angular/core';
import {Parameter} from '../../../models/parameter.model';
import {ParametersService} from '../../../services/parameters.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.scss']
})

export class ParametersListComponent {
  parameters: Parameter[];
  newParameterForm: FormGroup;
  error: string;
  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private parametersService: ParametersService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {

    this.newParameterForm = this.formBuilder.group({
      'parameterCode': ['', [Validators.required]],
      'parameterValue': ['', [Validators.required]]
    });

    this.parametersService.getAllParameters().subscribe((parameters: Array<Parameter>) => {
      this.parameters = parameters;
    });
  }

  createNewParameter(newParameter: Parameter) {
    this.parametersService.createParameter(newParameter).subscribe((newParameterWithId) => {
      this.parameters.push(newParameterWithId);
      this.myNgForm.resetForm();
    }, (response: Response) => {
      if (response.status === 500) {
        this.error = 'errorHasOcurred';
      }
    });
  }

  remove(parameterToRemove: Parameter): void {
    let dialogRef = this.dialog.open(RemoveParameterDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.parametersService.deleteParameter(parameterToRemove.parameterCode).subscribe(() => {
          this.parametersService.showSnackBar('parameterRemoved');
          this.parameters = this.parameters.filter(parameter => parameter.parameterCode !== parameterToRemove.parameterCode);
        }, (response: Response) => {
          if (response.status === 500) {
            this.error = 'parameterDefault';
          }
        });
      }
    });
  }
}

@Component({
  selector: 'app-remove-parameter-dialog',
  templateUrl: './remove-parameter.dialog.html',
})

export class RemoveParameterDialogComponent {
  constructor() {
  }
}
