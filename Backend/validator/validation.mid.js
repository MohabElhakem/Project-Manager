// a middleware for cheacking the input from the user 
// a higer order funtion so make sure u passs it like this validate(schema)


exports.validate = (Schema , property = 'body') =>{

    return (req , res , next)=>{
        // the start of the validation process
        const {error , value} = Schema.validate(req[property],{
            abortEarly: false, // to show all errors not just the first one,
            stripUnknown : true  
        })
        // validation errors
        if(error){
            return res.status(400).json({
                message: "Validation error",
                error : error.details.map(detail=> detail.message)
            })
        }
        // Validation success
        req[property]= value;
        next();
    }
}