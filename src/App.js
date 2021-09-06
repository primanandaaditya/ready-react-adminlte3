import './App.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import ContentWrapper from "./component/ContentWrapper";
import Loading from "./component/Loading";

export default function App(){
    const [payload,setPayload]=useState([])
    const [loading,setLoading]=useState(false)

    const get = () => {
        setLoading(true)
        axios.get('http://localhost:8081/api/jenislokasi')
            .then(res => {
                setPayload(Object.values((res.data.payload)))
                console.log(payload)
                setLoading(false)
            })
    }

    useEffect(() => {
        get()
    },[])

    if (loading){
        return (
            <div>
                <ContentWrapper>
                    <Loading/>
                </ContentWrapper>
            </div>
        )
    }else{
        return(
            <div>
                <ContentWrapper>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Keterangan</th>
                        </tr>
                        </thead>
                        <tbody>
                        {payload.map(x => (
                            <tr>
                                <td>{x.keterangan}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </ContentWrapper>
            </div>
        )
    }
}