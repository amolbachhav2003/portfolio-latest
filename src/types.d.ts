declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element | (string | Element)[], vars?: any);
    revert(): void;
    split(vars?: any): void;
    chars: Element[];
    words: Element[];
    lines: Element[];
    // Add other properties as needed
  }
}