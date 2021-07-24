import { Button, View } from '@tarojs/components'
import { useReady } from '@tarojs/taro';
import { useState } from 'react'
import Taro from '@tarojs/taro';
import './index.scss'


const Test: React.FC = () => {
  const [number,setNumber] = useState<number>(1);
  useReady(()=>{
    Taro.eventCenter.on("showNumber",handleShowNumber)
  })
  const handleShowNumber = ()=>{
    Taro.showToast({title:`我取到的state值是${number}`,icon:'none'})
  }
  return (
    <>
      <View>Number:{number}</View>
      <Button onClick={()=>setNumber(x=>++x)}>让Number +1</Button>
      <Button onClick={()=>Taro.eventCenter.trigger("showNumber")}>触发事件</Button>
    </>
  )
}
export default Test
