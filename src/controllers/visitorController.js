const visitorService = require('../services/visitorService');

//API to get visitor count of museums based on month and year
exports.getVisitorDetails = async (req, res, next) => {

    try {

        //check for date params
        if (!req.query.date) {
            res.json({'error' : 'date paramter not found'});
        }

        //get request params
        dateInMilliseconds = new Date(parseInt(req.query.date));
        ignore = req.query.ignore;

        //get month and year for external API param
        month = dateInMilliseconds.getMonth();
        mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthName = mlist[month];
        year = dateInMilliseconds.getFullYear();

        //set params for external API call
        param = year + '-' + month + '-01T00:00:00.000'
        console.log("API param : " + param);

        //call external API
        apiEndpoint = 'https://data.lacity.org/resource/trxm-jn3c?month=' + param;
        const museums = await visitorService.externalAPICall(apiEndpoint);

        //calculate total, highest and lowest visitors count
        counts = visitorService.calculateCount(museums, month, ignore);
        console.log(JSON.stringify(counts));

        //return result
        res.json({
            "attendance": {
                'month': monthName.substring(0, 3),
                'year': year,
                'highest': {
                    'museum': counts.highest,
                    'visitors': counts.max,
                },
                'lowest': {
                    'museum': counts.lowest,
                    'visitors': counts.min,
                },
                total: counts.total
            }

        });
    } catch (error) {
        console.log(error);
        res.json({'error' : 'something went wrong'});
    }
};