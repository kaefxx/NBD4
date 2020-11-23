db.people.mapReduce(
    function() {
        emit(this.sex, {height: parseFloat(this.height), weight: parseFloat(this.weight)})
    },
    function(key, values) {
            h = 0.0
            w = 0.0
            n = 0
            values.forEach(function(value){
                if (!Number.isNaN(value.height) && !Number.isNaN(value.weight)) {
                    h += value.height
                    w += value.weight
                    n++
                }
            })
            return key, {height: h/n, weight: w/n}
        },
        {out: 'zapytanie'}
)

db.zapytanie.find()