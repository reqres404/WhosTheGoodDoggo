import React, {  useState } from "react";
import { QrReader } from "react-qr-reader";
import "./QRScanner.css"

const QRScanner = () => {
    const [scanCompleted, setScanCompleted] = useState(false);

    const handleScan = (data) => {
        if (data && !scanCompleted) {
            window.location.replace(data.text);
            setScanCompleted(true);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    //   if (redirectUrl) {
    //     console.log(redirectUrl + " scanned Successfully");
    //     return <Navigate to={redirectUrl} />;
    //   }

    return (
        <div className="scannerDiv">
            {scanCompleted &&
            <h1>Redirecting to the card...</h1>
            }
            {
                !scanCompleted &&
                <QrReader
                className="scannerCam"
                scanDelay={300}
                onError={handleError}
                onResult={handleScan}
                legacyMode={false}
                facingMode={"user"}
            />
            }
            
            {/* {redirectUrl!==null &&
                <Navigate to={redirectUrl} />
            } */}
            <p>Scan the QR code to redirect</p>
        </div>
    );
};

export default QRScanner;