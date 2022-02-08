import Environment from "jest-environment-jsdom";
import { TextEncoder as _TextEncoder, TextDecoder as _TextDecoder } from "util";

class TestEnv extends Environment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === "undefined") {
      this.global.TextEncoder = _TextEncoder;
    }
    if (typeof this.global.TextDecoder === "undefined") {
      (this.global.TextDecoder as any) = _TextDecoder;
    }
  }
}

export default TestEnv;
