import type { NextConfig } from "next";

declare global {
  interface BigInt {
      toJSON(): Number;
  }
}

BigInt.prototype.toJSON = function () { return Number(this) }

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
