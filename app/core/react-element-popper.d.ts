declare module 'react-element-popper/animations/opacity' {
  export default function opacity(): () => void;
}

declare module 'react-element-popper/animations/transition' {
  export default function transition(config?: { from?: number; transition?: string }): () => void;
}
