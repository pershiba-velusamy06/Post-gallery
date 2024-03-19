import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/api/fetchEmployeApi';

const EmployeeList = () => {
    const getAllEmployees = useSelector((state) => state.fetchUser)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])


    return (
        <>
            {
                getAllEmployees.AllEmployeeList.map((employeeDetails, index) => {
                    return (<>

                        <div key={index}>

                            Employee Name: {employeeDetails.name}
                        </div>

                    </>)

                })
            }

        </>
    )
}

export default EmployeeList
