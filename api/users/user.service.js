const pool = require("../../databae");

module.exports = {
    create: (data, callback)=>{
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
                    valves(?,?,?,?,?,?)`,
                    [
                        data.first_name,
                        data.last_name,
                        data.gender,
                        data.email,
                        data.password,
                        data.number,
                    ],
                    (error, results, dields)=>{
                        if(error){
                           return callback(error);
                        }
                        return callback(null, results)
                    }
        );
    }
};