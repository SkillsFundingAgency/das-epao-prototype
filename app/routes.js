const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// record-a-grade: who to send certificate to
router.post('/record-a-grade/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'apprentice'){
		res.redirect('apprentice-search-address');
	} else if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-address');
	} else if(req.session.data['send-the-certificate'] == 'provider'){
        res.redirect('provider-address');
    }
});

// record-a-grade: apprentice search address
router.post('/record-a-grade/apprentice-find-address', function (req, res) {
	if(req.session.data['street-number-house-name'] == '14'){
		res.redirect('apprentice-select-address-1');
	} else if(req.session.data['street-number-house-name'] == 'test'){
        res.redirect('apprentice-select-address-0');
	} else if(req.session.data['street-number-house-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('apprentice-select-address');
});


module.exports = router
