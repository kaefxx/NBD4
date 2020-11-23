db.people.mapReduce(
    function() {
        this.credit && this.credit.forEach(function(credit) {
            emit(credit.currency, parseFloat(credit.balance))
        })
    },
    function(key, values) {
            
            return key, values.reduce((a, b) => a + b, 0)
        },
        {out: 'zapytanie'}
)

db.zapytanie.find()