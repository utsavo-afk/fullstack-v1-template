import { config } from 'dotenv-safe';

config();

const rootConfig = {
	LogLevel: process.env.LOG_LEVEL || 'info',
};

export default rootConfig;
