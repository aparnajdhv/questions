import React from 'react'

export const Input = (props) => {
    const {lbl,name,type,options,fnChange,val,values,errorMsg,isShowErrorMsg}=props;

    const fnPrepareInputControl=()=>{
        switch(type){
            case 'text':
                return <input type={type} name={name} value={val} onChange={fnChange} className='form-control' />
            case 'radio':
                return options.map((value,index)=>{
                    return <><input checked={values[index]==val} key={index} name={name} value={values[index]} className='me-2' onChange={fnChange} type={type} /><span className='me-2'>{value}</span></>
                })
                
        }
    }

  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl}</b>
        </div>
        <div className='col-sm-3'>
            {fnPrepareInputControl()}
        </div>
        <div className='col-sm-4'>
            {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
