import { rest } from 'msw';

import vessels from './mocks/vessels.json';
import documents from './mocks/documents.json';
import vesselFinancial from './mocks/accounts-vessels.json';
import fleetFinancial from './mocks/accounts-fleet.json';
import claims from './mocks/reports-claims.json';
import commercial from './mocks/reports-commercial.json';
import gallery from './mocks/reports-gallery.json';
import other from './mocks/reports-other-reports.json';
import leadership from './mocks/leadership.json';
import techpapers from './mocks/tech-papers.json';

const { REACT_APP_SHIP_MANAGEMENT_API_URL } = process.env;

export const handlers = [
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels`, (_, res, ctx) => {
		//console.log('VESSELS CALLED!!!!!!!!!!!!!!!!!!!!');
		return res(ctx.json(vessels.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Vessel%20Documents/:aeCode/Documents/files`, (_, res, ctx) => {
		//console.log('DOCUMENTS CALLED!!!!!!!!!!!!!!!!!!!!');
		return res(ctx.json(documents.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Client%20Financial%20Reports/:aeCode/:category/files`, (_, res, ctx) => {
		return res(ctx.json(vesselFinancial.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Client%20Financial%20Reports/:aeCode/ZZ_REPORTS%20MULTIPLE%20SHIPS/files`, (_, res, ctx) => {
		return res(ctx.json(fleetFinancial.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Vessel%20Documents/:aeCode/Claims/files`, (_, res, ctx) => {
		return res(ctx.json(claims.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Vessel%20Documents/:aeCode/Commercial/files`, (_, res, ctx) => {
		return res(ctx.json(commercial.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Vessel%20Documents/:aeCode/Gallery/files`, (_, res, ctx) => {
		return res(ctx.json(gallery.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Vessels/Vessel%20Documents/:aeCode/Other%20Reports/files`, (_, res, ctx) => {
		return res(ctx.json(other.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Resources/leadership`, (_, res, ctx) => {
		return res(ctx.json(leadership.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Resources/:category/files`, (_, res, ctx) => {
		return res(ctx.json(techpapers.data));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Files/preview/:driveName/:fileId`, (_, res, ctx) => {
		return res(ctx.json({
			url: '/assets/sample.pdf'
		}));
	}),
	rest.get(`${REACT_APP_SHIP_MANAGEMENT_API_URL}/Files/:driveName/:fileId`, (_, res, ctx) => {
		return res(ctx.json({
			url: '/assets/sample.pdf'
		}));
	})
];
