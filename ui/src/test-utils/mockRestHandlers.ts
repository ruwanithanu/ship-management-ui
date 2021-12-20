import { rest } from 'msw';

import vessels from './mocks/vessels.json';

const { REACT_APP_SHIP_MANAGEMENT_API_URL } = process.env;

export const handlers = [
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels`, (_, res, ctx) => {
		return res(ctx.json(vessels));
	})
];
