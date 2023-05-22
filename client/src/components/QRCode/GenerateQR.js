import QRCodeReact from 'qrcode.react'

const GenerateQR=(props)=>{
    return (
        <div>
          <h1>{props.value}</h1>
          <QRCodeReact value={props.value}/>
        </div>
      )
}
export default GenerateQR
