export default function validateInfo(values){
    let errors={}

    //Name
    if(!values.firstName){
        errors.firstName="First Name required"
    }

    //Email
    if(!values.email){
        errors.email="Email required"
    }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
        errors.email="Email address is invalid"
    }

    //Phone number
    if(!values.number){
        errors.number="Contact Number must be required"
    }else if(!/^\d{10}$/i.test(values.number)){
        errors.number="Phone number is invalid"
    }

    //lastName
    if(!values.lastName){
        errors.lastName="Last Name should be required"
    }

    //gender
    if(!values.gender){
        errors.gender="Gender Should be Selected."
    }

    return errors;
}