import { HttpRequest } from "@infrastructure/network";
import { Address } from "@business/address";
import { Metadata } from "@business/metadata";

export class Decommas {
  public readonly address: Address;
  public readonly metadata: Metadata;

  constructor(apiKey?: string) {
    const httpRequest = new HttpRequest(apiKey);
    this.address = new Address(httpRequest);
    this.metadata = new Metadata(httpRequest);
  }
}
