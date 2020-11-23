db.people.mapReduce(
    function() {
        emit(this.job, this.job)
    },
    function(key, values) {
            
            return key, key
        },
        {out: 'zapytanie'}
)

db.zapytanie.find()