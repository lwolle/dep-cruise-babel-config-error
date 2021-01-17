export const Env = {
    DEV: 'development',
    PROD: 'production',
    PREVIEW: 'preview',
};

export const EnvHandler = {
    isPreview: mode => mode === Env.PREVIEW,
    isProduction: mode => mode === Env.PROD,
    isDevelopment: mode => mode === Env.DEV,
};
