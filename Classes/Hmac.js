import crypto from "crypto";

export default class Hmac {
  static generate(key, move) {
    return crypto.createHmac("sha256", key).update(move).digest("hex");
  }
}
