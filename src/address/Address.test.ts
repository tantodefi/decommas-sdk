import { Address } from "./Address";
import { IHttpRequest } from "../network/httpRequest";
import { mockResponse, mockResponseRaw } from "./mock";

test("Address: getTokens", async () => {
    const httpRequestMock: IHttpRequest = {
        fetch: jest.fn().mockReturnValue(mockResponseRaw)
    };

    const address = new Address(httpRequestMock);

    expect(await address.getTokens({ address: "0x0000000000000000000000000000000000000000", verified: true })).toStrictEqual(mockResponse);
});
