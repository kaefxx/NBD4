db.people.mapReduce(
    function() {
        if (this.nationality == "Poland" && this.sex == "Female")
        this.credit && this.credit.forEach(function(credit) {
            emit(credit.currency, parseFloat(credit.balance))
        })
    },
    function(key, values) {
            sum = values.reduce((a, b) => a + b, 0)
            return key, {sum: sum, avg: sum/values.length}
        },
        {out: 'zapytanie'}
)

db.zapytanie.find()