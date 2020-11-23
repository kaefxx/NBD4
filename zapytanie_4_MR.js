db.people.mapReduce(
    function() {
        emit(this.nationality, 10000*parseFloat(this.weight)/(parseFloat(this.height)*(parseFloat(this.height))))
    },
    function(key, values) {
        min = 99999999.0
        max = 0.0
        sum = 0.0
        values.forEach(function(value) {
            min = value < min ? value : min
            max = value > max ? value : max
            sum += value
        })
        
        return key, {min: min, max: max, avg: sum/values.length}
    },
        {out: 'zapytanie'}
)

db.zapytanie.find()