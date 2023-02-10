import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

    const id = service.generateUniqueIdWithPrefix('teste');

    expect(id.startsWith('teste-')).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {

    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('teste'))
    }

    expect(ids.size).toBe(50);

  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {

    service.generateUniqueIdWithPrefix('teste');
    service.generateUniqueIdWithPrefix('teste');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);

  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should throw when called with empty `, () => {

    //quando quero saber se a função retorna uma erro/exceção
    //preciso chamar a função por uma arrow function
    const emptyValues = [null, undefined, '', '1', '2'];

    emptyValues.forEach(item => {
      expect(() => service.generateUniqueIdWithPrefix(item))
        .withContext(`Empty value: ${item}`) //mostra o contexto que aconteceu a falha
        .toThrow();
    });

  });
});
