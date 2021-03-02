import { useEffect, useState } from "react";
import validateInfo from './validateInfo';

const useEducation=(validationInfo)=>{
    const [values,setValue]=useState({
        firstName:'',
        lastName:'',
        gender:'',
        email:'',
        phoneNumber:'',
    });

    const [storeValue,setStoreValue]=useState([]);

    const [open,setOpen]=useState(false)
    const [errors,setErrors]=useState({})
    const [isSubmitting,setIsSubmitting]=useState(false)

    const handleChange=e=>{
        const {name,value}=e.target
        setValue({
            ...values,
            [name]:value
        })
    }

    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
        // setIsSubmitting(true)
        
    };
    const handleClickOpen=()=>{
        setOpen(true);
    };
    const handleClose=()=>{
        setOpen(false);
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            console.log("VALUE:",values)
            setStoreValue(storeValue=>storeValue.concat(values))
            setIsSubmitting(false);
            setOpen(false);
        }
    })

    useEffect(()=>{
        console.log("ARRAY UPDATED:",storeValue)
    },[storeValue])

    return {handleChange,values,errors,handleSubmit,open,handleClickOpen,handleClose,storeValue};

}

export default useEducation;