import { hash, randomBase62, timeSafeCompare, typeSafeUID } from "./utils";

interface TokenOptions {
  saltLength: number;
  secretLength: number;
}

export class Tokens {
  saltLength: number;
  secretLength: number;

  constructor(options: Partial<TokenOptions>) {
    this.saltLength = options?.saltLength || 8;
    this.secretLength = options?.secretLength || 18;
  }

  create(secret: string): string {
    return this.tokenize(secret, randomBase62(this.saltLength));
  }

  secret(): string {
    return typeSafeUID(this.secretLength);
  }

  verify(secret: string, token: string): boolean {
    const index = token?.indexOf("-");
    if (index === -1 || index === undefined) {
      return false;
    }

    const salt = token.substr(0, index);
    const expected = this.tokenize(secret, salt);

    return timeSafeCompare(token, expected);
  }

  tokenize(secret: string, salt: string): string {
    return salt + "-" + hash(salt + "-" + secret);
  }
}
