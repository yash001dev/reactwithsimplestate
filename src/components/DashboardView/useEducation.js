import { useEffect, useState } from "react";
import validateInfo from './validateInfo';

const useEducation=(validationInfo,detailsData)=>{
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
    const [opens, setOpens] = useState(false);

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

    const handleDrawerClose=()=>setOpens(false);

    const handleClickOpen=()=>{

        // setOpen(true);
        setOpens(true);
    };
    const handleClose=()=>{
        setOpen(false);
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            console.log("VALUE:",values)
            // setStoreValue(storeValue=>storeValue.concat(values))
            detailsData(values)
            setIsSubmitting(false);
            // setOpen(false);
            
            setOpens(false);

        }
    })

    useEffect(()=>{
        console.log("ARRAY UPDATED:",storeValue)
    },[storeValue])

    return {handleChange,values,errors,handleSubmit,open,opens,handleClickOpen,handleClose,handleDrawerClose,storeValue};

}

export default useEducation;