//imports
const visitorService = require('../services/visitorService');

//test to check if all params are present
describe('check if visitors count is correct', () => {
    it('Visitor Count check', () => {
        museum = {
            month: '2014-06-01T00:00:00.000',
            america_tropical_interpretive_center: '11036',
            avila_adobe: '29487',
            chinese_american_museum: '2121',
            firehouse_museum: '5751',
            hellman_quon: '255',
            pico_house: '355',
            visitor_center_avila_adobe: '3133'
        }
        result = { "total": 24665, "highest": "america_tropical_interpretive_center", "max": 11036, "lowest": "hellman_quon", "min": 255 }
        expect(visitorService.calculateCount(museum)).toEqual(result);
    });
});