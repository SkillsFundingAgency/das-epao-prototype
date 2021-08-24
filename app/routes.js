const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// record-a-grade: address
router.post('/record-a-grade/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'apprentice'){
		res.redirect('apprentice-search-address')
	} else if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-address')
	} else if(req.session.data['send-the-certificate'] == 'provider'){
        res.redirect('provider-address')
    }
})

module.exports = router
