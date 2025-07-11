import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication = true}) {

    const navigate = useNavigate();
    const[loading , setLoading] = useState(true);
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        const authValue = authStatus === true ? true:false

        if(authentication && !authValue){
        navigate("/login");
        }else if(!authentication && authValue){
            navigate("/");
        }else{
            setLoading(false)
        }
    },[authStatus,navigate,authentication])

  return loading ? <h1>Loading...</h1> : <>{children}</>
}
