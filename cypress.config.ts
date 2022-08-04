import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'c3nge4',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			require('@cypress/code-coverage/task')(on, config);
			return config;
		},
		"baseUrl": "http://localhost:3000"
		// "baseUrl": "https://zppark-partner.vercel.app"
	},
});
