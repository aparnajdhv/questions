import React,{ useState } from 'react'
import styles from '@/components/Question/Question.module.css'
import { inputControlsArr } from './config'
import { Input } from '../InputControls/Input'
import { Textarea } from '../InputControls/Textarea'
import { Select } from '../InputControls/Select'
import { fnValidate } from './validate'
import { Loader } from '../Loader/Loader'
import { toast } from 'react-toastify';
import axios from 'axios';

export const Question = () => {

  const [inputControls,setInputControls]=useState(inputControlsArr)
  const [isShowLoader,setIsShowLoader]=useState(false)

  const fnChange=(eve)=>{
    const {name,value}=eve.target;
    let _inputControls=JSON.parse(JSON.stringify(inputControls))
    let inputControlObj=_inputControls.find((obj)=>obj.name==name)
    inputControlObj.val=value;
    fnValidate(inputControlObj)
    setInputControls(_inputControls)
  }

  const fnSave=()=>{
    let dataObj={};
    let _inputControls=JSON.parse(JSON.stringify(inputControls))
    _inputControls.forEach((obj)=>{
      dataObj[obj.name]=obj.val;
      fnValidate(obj)
    })
    let isInvalid = _inputControls.some((obj)=>{
      return obj.isShowErrorMsg
    })
    setInputControls(_inputControls)

    if(isInvalid)return;
    setIsShowLoader(true);
    
    axios.post('http://localhost:2020/ques/save-que',{data:dataObj})
    .then((res)=>{
      const {acknowledged,insertedId}=res.data;
      setIsShowLoader(false);
      if(acknowledged==true && insertedId){
      toast.success('Inserted Successfully...');      
      _inputControls.forEach((obj)=>{
        obj.val="";
      setInputControls(_inputControls)})
      }else{
        toast.error('Not Inserted Successfully..');
      }
    })
    
    
    .catch((e)=>{
      console.log(e)
      toast.error('Not Inserted Successfully..');
    })

    // alert('Sending the data...')
    // setTimeout(()=>{
    //   setIsShowLoader(false)
    //   toast.success('Inserted Successfully...')
    //   _inputControls.forEach((obj)=>{
    //     dataObj[obj.val]='';
    //     setInputControls(_inputControls)})
    // },1000)
  }

  return (
    <div className='container-fluid'>
      {
          inputControls.map((obj,index)=>{
            switch(obj.tag){
              case 'input':
                return <Input key={index} fnChange={fnChange} {...obj} />

              case 'textarea':
                return <Textarea key={index} fnChange={fnChange} {...obj} />

              case 'select':
                return <Select key={index} fnChange={fnChange} {...obj} />
            }
          })
        }
        <div className='row'>
          <div className='offset-sm-5 col-sm-7'>
              <button onClick={fnSave} className='btn btn-primary'>SAVE</button>
          </div>
        </div>
        {isShowLoader && <Loader />}
    </div>
  )
}
