export const fnValidate=(obj)=>{
    const {name,val}=obj
    obj.errorMsg=''
    obj.isShowErrorMsg=false
    switch(name){
        case 'que':
                if(!val){
                    obj.errorMsg='Please Enter Question'
                }else{
                    if(val.length < 10){
                        obj.errorMsg="Question should container min 10 chars"
                    }
                }
                if(obj.errorMsg){
                    obj.isShowErrorMsg=true
                }
            break
        case 'opt1':
        case 'opt2':
        case 'opt3':
        case 'opt4':
            if(!val){
                obj.errorMsg=`Please Enter ${name}`
                obj.isShowErrorMsg=true
            }
            break;
        case 'type':
        case 'ans':
                    if(!val){
                        obj.errorMsg=`Please Select ${name}`
                        obj.isShowErrorMsg=true
                    }
                    break;
    }
}