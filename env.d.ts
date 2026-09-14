/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYME_PROXY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
