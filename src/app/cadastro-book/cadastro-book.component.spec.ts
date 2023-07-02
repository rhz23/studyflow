import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBookComponent } from './cadastro-book.component';

describe('CadastroBookComponent', () => {
  let component: CadastroBookComponent;
  let fixture: ComponentFixture<CadastroBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroBookComponent]
    });
    fixture = TestBed.createComponent(CadastroBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
