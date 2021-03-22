import { useEffect, useState } from "react";
import validateInfo from "./validateInfo";

const useEducation = (
  validationInfo,
  detailsData,
  editDetails,
  deleteDetails
) => {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
  });

  const [storeValue, setStoreValue] = useState([]);

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [opens, setOpens] = useState(false);
  const [deleteopen, setDeleteOpen] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);

    // setIsSubmitting(true)
  };

  const deleteHandleClickOpen = (data) => {
    setDeleteOpen(true);
    setDeleteId(data);
  };

  const deleteHandleClickClose = () => {
    setDeleteOpen(false);
  };

  const handleDelete = () => {
    console.log("Delete Button is Called...");
    // console.log("DELETED ID:", deleteId.id);
    // deleteData(deleteId.id);

    deleteDetails(deleteId);
    setDeleteOpen(false);
  };

  const handleDrawerClose = () => setOpens(false);

  const handleClickOpen = () => {
    setOpen(true);
    // setOpens(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("VALUE:", values);
      // setStoreValue(storeValue=>storeValue.concat(values))
      detailsData(values);
      setIsSubmitting(false);
      setValue({
        id:Math.random,
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
      });
      setOpen(false);

      // setOpens(false);
    }
  });

  useEffect(() => {
    console.log("ARRAY UPDATED:", storeValue);
  }, [storeValue]);

  return {
    handleChange,
    values,
    errors,
    handleSubmit,
    open,
    opens,
    handleClickOpen,
    handleClose,
    handleDrawerClose,
    storeValue,
    deleteopen,
    deleteHandleClickOpen,
    deleteHandleClickClose,
    handleDelete,
  };
};

export default useEducation;
