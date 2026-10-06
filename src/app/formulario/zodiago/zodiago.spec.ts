import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zodiago } from './zodiago';

describe('Zodiago', () => {
  let component: Zodiago;
  let fixture: ComponentFixture<Zodiago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zodiago],
    }).compileComponents();

    fixture = TestBed.createComponent(Zodiago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
