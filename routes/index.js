// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	const data = {
		greeting: "Welcome Rich",
		description: "great job"
	}
	res.render('index', null)
})
router.get('/es-mx', (req, res) => {
	res.render('es', null)
})

router.get('*', (req, res) => {
	res.render('index', null)
})


module.exports = router