import React from 'react'

export const Select = (props) => {
    const {lbl,name,options,val,values,fnChange,errorMsg,isShowErrorMsg}=props;    

  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl}</b>
        </div>
        <div className='col-sm-3'>
            <select onChange={fnChange} name={name} className='form-control'>
                <option value="">Please Select</option>
                {
                    options.map((value,index)=>{
                        return <option selected={value==val} key={index} value={value} >{value}</option>
                    })
                }
            </select>
        </div>
        <div className='col-sm-4'>
        {isShowErrorMsg &&<b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
