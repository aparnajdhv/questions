import React from 'react'

export const Textarea = (props) => {
    const {lbl,name,fnChange,val,errorMsg,isShowErrorMsg}=props;    

  return (
    <div className='row mb-3 mt-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl}</b>
        </div>
        <div className='col-sm-3'>
            <textarea name={name} onChange={fnChange} value={val} className='form-control'></textarea>
        </div>
        <div className='col-sm-4'>
        {isShowErrorMsg &&<b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
