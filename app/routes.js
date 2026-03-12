//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/v2/record-a-grade/confirm-correct-apprentice', function (req, res) {
  const uln = req.session.data['uniqueLearnerNumber']

  if (uln === '0000000000') {
    res.redirect('/v2/record-a-grade/incorrect-apprentice')
  } else {
    res.redirect('/v2/record-a-grade/confirm-correct-apprentice')
  }
})