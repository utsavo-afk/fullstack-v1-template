import logger from 'pino';
import dayjs from 'dayjs';
import { rootConfig } from '@src/config';

const log = logger({
	transport: {
		target: 'pino-pretty',
	},
	level: rootConfig.LogLevel,
	base: {
		pid: false,
	},
	timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
