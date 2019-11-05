import {async, TestBed} from '@angular/core/testing';
import {ParametersService} from './parameters.service';
import {APP_BASE_HREF} from '@angular/common';
import {APP_CONFIG, AppConfig} from '../../config/app.config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import {TestsModule} from '../../modules/tests.module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

describe('ParameterService', () => {
  let parametersService;
  let newParameterCreated;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        ParametersService
      ]
    });

    parametersService = TestBed.get(ParametersService);
  });

  it('should contains parameters', async(() => {
    parametersService.getAll().subscribe((data: any) => {
      expect(data.length).toBeGreaterThan(AppConfig.topHeroesLimit);
    });
  }));

  it('should get parameter by code param_available_language', async(() => {
    parametersService.getParameterByCode('param_available_language').subscribe((parameter) => {
      expect(parameter.parameterCode).toEqual('param_available_language');
    });
  }));

  it('should fail getting prameter by no code', async(() => {
    parametersService.getParameterByCode('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail creating empty parameter', async(() => {
    parametersService.createParameter({}).subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail deleting noCode parameter', async(() => {
    parametersService.deleteParameter('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should fail like empty parameter', async(() => {
    localStorage.setItem('votes', String(0));
    parametersService.like('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

  it('should return json response error', async(() => {
    expect(parametersService.handleError(new Response('noId'))).toEqual(jasmine.any(ErrorObservable));
  }));

  it('should create parameter', async(() => {
    parametersService.createParameter({
      'parameterCode': 'test',
      'parameterValue': 'test'
    }).subscribe((parameter) => {
      newParameterCreated = parameter;
      expect(parameter.parameterCode).not.toBeNull();
    });
  }));

  it('should delete a parameter', async(() => {
    parametersService.deleteParameter(newParameterCreated.parameterCode).subscribe((response) => {
      expect(response).toEqual({});
    });
  }));
});
