const puppeteer = require('puppeteer');
const slugify = require('slugify');
const argv = require('minimist')(process.argv.slice(2));

const url = argv.url;
let offset = url.indexOf('.com');
const filename = slugify(url.substring(offset + 5));

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
    await page.setExtraHTTPHeaders({'Accept-Charset': 'utf-8'});
	await page.goto(url, {timeout: 0});
	await page.emulateMedia('screen');
	await page.pdf({displayHeaderFooter: true, margin: {top: '.5in', bottom: '.5in', left: '.5in', right: '.5in'}, printBackground: true, path: filename+ '.pdf'});

	await browser.close();
})();
