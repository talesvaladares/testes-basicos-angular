import { Injectable } from '@angular/core';
import { v4 as uuid4} from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGenerateIds = 0;
  private validId =  /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string) {

    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can note be empty');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`
  }

  public getNumberOfGeneratedUniqueIds() {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId() {
    return uuid4();
  }

}


