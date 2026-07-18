import { useEffect, useState } from "react";
import { saveLocation } from "../services/api";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState(false);

  const [status, setStatus] = useState("Requesting your location...");

  useEffect(() => {
    getVisitorLocation();
  }, []);

  const getVisitorLocation = () => {
    if (!navigator.geolocation) {
      setLoading(false);

      setStatus("Geolocation is not supported by your browser.");

      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setStatus("trying to get your location...");

          const data = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
              
          };


          const response=await saveLocation(data);
          if(response.data.success){
            setSuccess(true);
          setStatus("location recorded successfully");

          }
          else{
             setSuccess(false);
          setStatus(response.data.message);


          }
          
        } catch (error) {
          setStatus("Failed to save your location.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);

        alert("Location permission is required for visitor tracking.");

        setStatus("Location permission is required for visitor tracking.");
      },
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          QR Visitor Tracking
        </h1>

        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

            <p className="text-slate-600 font-medium">{status}</p>

            <p className="text-sm text-slate-500 text-center">
              Please allow location access.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p
              className={`text-lg font-semibold ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>

            {!success && (
              <p className="mt-3 text-sm text-slate-500">
                Please allow location access and refresh the page .
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
