import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  PUBLIC_WHATSAPP_NUMBER: {
    public: true,
    static: true,
    schema: (value) => value?.trim() ?? ''
  }
});
