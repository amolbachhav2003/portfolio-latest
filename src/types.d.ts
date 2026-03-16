declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element | Element[], vars?: any);
    revert(): void;
    split(vars?: any): void;
    // Add other methods as needed
  }
}