
interface ImportMetaEnv {
    readonly SANITY_STUDIO_PROJECT_ID:string;
    readonly SANITY_STUDIO_ADMIN_TOKEN:string;
    readonly SANITY_STUDIO_PROJECT_DATASETS:string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  