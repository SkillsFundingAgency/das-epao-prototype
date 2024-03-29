const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// record-a-grade: who to send certificate to
router.post('/record-a-grade/v1/no-address-saved/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'apprentice'){
		res.redirect('apprentice-search-address');
	} else if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-address');
	} else if(req.session.data['send-the-certificate'] == 'provider'){
        res.redirect('provider-address');
    }
});

router.post('/record-a-grade/v2/no-address-saved/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'apprentice'){
		res.redirect('apprentice-search-address');
	} else if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-search-address');
	} else if(req.session.data['send-the-certificate'] == 'provider'){
        res.redirect('provider-address');
    }
});

// record-a-grade: who to send certificate to
router.post('/record-a-grade/v1/no-address-saved/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'apprentice'){
		res.redirect('apprentice-search-address');
	} else if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-address');
	} else if(req.session.data['send-the-certificate'] == 'provider'){
        res.redirect('provider-address');
    }
});

router.post('/record-a-grade/v2/no-address-saved/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'apprentice'){
		res.redirect('apprentice-search-address');
	} else if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-address');
	} else if(req.session.data['send-the-certificate'] == 'provider'){
        res.redirect('provider-address');
    }
});


// record-a-grade: apprentice search address
router.post('/record-a-grade/v1/no-address-saved/apprentice-find-address', function (req, res) {
	if(req.session.data['street-number-house-name'] == '14'){
		res.redirect('apprentice-select-address-1');
	} else if(req.session.data['street-number-house-name'] == 'test'){
        res.redirect('apprentice-select-address-0');
	} else if(req.session.data['street-number-house-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('apprentice-select-address');
});

router.post('/record-a-grade/v2/no-address-saved/apprentice-find-address', function (req, res) {
	if(req.session.data['street-number-house-name'] == '14'){
		res.redirect('apprentice-select-address-1');
	} else if(req.session.data['street-number-house-name'] == 'test'){
        res.redirect('apprentice-select-address-0');
	} else if(req.session.data['street-number-house-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('apprentice-select-address');
});

// record-a-grade: employer search address
router.post('/record-a-grade/v1/no-address-saved/employer-find-address', function (req, res) {
	if(req.session.data['company-building-name'] == '14'){
		res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA Consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona consulting'){
        res.redirect('employer-select-address-1');	
	} else if(req.session.data['company-building-name'] == 'test'){
        res.redirect('employer-select-address-0');
	} else if(req.session.data['company-building-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('employer-select-address');
});

router.post('/record-a-grade/v2/no-address-saved/employer-find-address', function (req, res) {
	if(req.session.data['company-building-name'] == '14'){
		res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA Consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona consulting'){
        res.redirect('employer-select-address-1');	
	} else if(req.session.data['company-building-name'] == 'test'){
        res.redirect('employer-select-address-0');
	} else if(req.session.data['company-building-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('employer-select-address');
});

// record-a-grade: who to send certificate to (saved address)
router.post('/record-a-grade/v1/address-saved/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-address-saved');
    }
});

router.post('/record-a-grade/v2/address-saved/send-the-certificate', (req, res) => {
	if(req.session.data['send-the-certificate'] == 'employer'){
        res.redirect('employer-search-address');
    }
});

// record-a-grade: select employer address (saved address)
router.post('/record-a-grade/v1/address-saved/employer-address-saved', function (req, res) {
	if(req.session.data['choose-employer-address'] == 'address-system'){
		res.redirect('employer-details');
	} else if(req.session.data['choose-employer-address'] == 'address-last-used'){
        res.redirect('employer-details');
	} else if(req.session.data['choose-employer-address'] == 'search-address'){
        res.redirect('employer-search-address');
    } 
});

router.post('/record-a-grade/v2/address-saved/employer-address-saved', function (req, res) {
	if(req.session.data['choose-employer-address'] == 'address-system'){
		res.redirect('employer-details');
	} else if(req.session.data['choose-employer-address'] == 'address-last-used'){
        res.redirect('employer-details');
	} else if(req.session.data['choose-employer-address'] == 'search-address'){
        res.redirect('employer-search-address');
    } 
});

router.post('/record-a-grade/v2/address-saved/send-the-certificate', function (req, res) {
	if(req.session.data['choose-employer-address'] == 'address-system'){
		res.redirect('employer-details');
	} else if(req.session.data['choose-employer-address'] == 'address-last-used'){
        res.redirect('employer-details');
	} else if(req.session.data['choose-employer-address'] == 'search-address'){
        res.redirect('employer-search-address');
    } 
});

router.post('/record-a-grade/v2/address-saved/employer-last-address', function (req, res) {
	if(req.session.data['employer-last-address'] == 'yes'){
		res.redirect('employer-details');
	} else if(req.session.data['employer-last-address'] == 'no'){
        res.redirect('employer-search-address');
    } 
});


// record-a-grade: employer search address (saved address)
router.post('/record-a-grade/v1/address-saved/employer-find-address', function (req, res) {
	if(req.session.data['company-building-name'] == '14'){
		res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA Consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'test'){
        res.redirect('employer-select-address-0');
	} else if(req.session.data['company-building-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('employer-select-address');
});

router.post('/record-a-grade/v2/address-saved/employer-find-address', function (req, res) {
	if(req.session.data['company-building-name'] == '14'){
		res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA Consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ONA consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'ona consulting'){
        res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'test'){
        res.redirect('employer-select-address-0');
	} else if(req.session.data['company-building-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('employer-select-address');
});


// record-a-grade: employer search address (saved address)
router.post('/record-a-grade/v1/address-saved/employer-find-address', function (req, res) {
	if(req.session.data['company-building-name'] == '14'){
		res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'test'){
        res.redirect('employer-select-address-0');
	} else if(req.session.data['company-building-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('employer-select-address');
});

router.post('/record-a-grade/v2/address-saved/employer-find-address', function (req, res) {
	if(req.session.data['company-building-name'] == '14'){
		res.redirect('employer-select-address-1');
	} else if(req.session.data['company-building-name'] == 'test'){
        res.redirect('employer-select-address-0');
	} else if(req.session.data['company-building-name'] == 'Test'){
        res.redirect('apprentice-select-address-0');
    } else res.redirect('employer-select-address');
});

router.post('/record-a-grade/v2/no-address-saved/employer-use-details', (req, res) => {
	if(req.session.data['employer-address-details'] == 'yes'){
		res.redirect('employer-details');
	} else if(req.session.data['employer-address-details'] == 'no'){
        res.redirect('employer-search-address');
    }
});
module.exports = router
