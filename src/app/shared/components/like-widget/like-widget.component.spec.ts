import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(`${LikeWidgetComponent.name}`, () => {

  //fixture é como se fosse um embrulho, wrapper que está por volta do component que quero testar
  //ele me da funções uteis para testar meu componente
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {

    //aguarda a compilação do componente

    //existe duas formas para declarar os modules do componente a ser testado
    //1 declarar todas as dependencias de forma manual
    //2 importar o modulo do proprio componente
    await TestBed.configureTestingModule({

      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService],
      // imports: [FontAwesomeModule]

      imports: [LikeWidgetModule]

    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;

  });

  it(`Should create component`, () => {

    expect(component).toBeTruthy();
  });

  it(`Should auto-generate Id during ngOnInit when (@Input id) is not assigned`, () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`Should NOT auto-generate Id during ngOnInit when (@Input id) is not assigned`, () => {

    const someId = 'someId';
    component.id = someId
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  // it(`#${LikeWidgetComponent.prototype.like.name} Should trigger emisstion when called`, done => {

  //   fixture.detectChanges();

  //   //testando o metodo like que é um output do tipo EventEmiter
  //   //o eventEmiter é um observable, então posso me inscrever
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });

  //   component.like();
  // });

  it(`#${LikeWidgetComponent.prototype.like.name} Should trigger (@Output liked) when called`, () => {

    spyOn(component.liked, 'emit'); //=> desta forma consigo espionar se o método foi chamado
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();

  });

});
